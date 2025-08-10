import camelize from 'camelize';
import { locations } from './location.mock';
export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const mock = locations[searchTerm];
    console.log("🚀 ~ locationRequest ~ mock:", mock)
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  console.log(`🚀 ~ locationTransform ~ { lat, lng } :`, { lat, lng } )
  return { lat, lng };
};
