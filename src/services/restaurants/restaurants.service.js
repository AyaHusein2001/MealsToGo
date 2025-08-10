import camelize from 'camelize';
import { mocks,mockImages } from './mock';
//camelize converts what is beeb_poop to beebPoop
export const restaurantsRequest = (location = '51.219448,4.402464') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    const randomImage = () =>
      mockImages[Math.floor(Math.random() * mockImages.length)];

    return {
      ...restaurant,
      photos: Array.isArray(restaurant.photos)
        ? restaurant.photos.map(() => randomImage())
        : [randomImage()], // fallback if photos is missing
      isOpenNow:
        restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily:
        restaurant.business_status === 'CLOSED_TEMPORARILY',
        address: restaurant.vicinity
    };
  });

  return camelize(mappedResults);
};

