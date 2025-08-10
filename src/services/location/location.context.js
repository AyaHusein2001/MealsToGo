import { createContext, useState, useEffect, use } from 'react';
import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyWord, setKeyWord] = useState('san francisco');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = (searchKeyWord) => {
    setIsLoading(true);
    setKeyWord(searchKeyWord);
  };
  useEffect(() => {
    if (!keyWord.length) {
      return;
    }
    locationRequest(keyWord.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        console.log('🚀 ~ search ~ result:', result);
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        console.log('🚀 ~ search ~ err:', err);
        setIsLoading(false);
        setError(err);
      });
  }, [keyWord]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search,
        keyWord,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
