import { TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { FavouritesSafeArea } from '../components/settings.styles';
import { RestaurantList } from '../../restaurants/components/restaurants.styles';
import RestaurantInfoCard from '../../restaurants/components/RestaurantInfoCard';
import { Spacer } from '../../../components/spacer/Spacer';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { Text } from '../../../components/typography/Text';
import { styled } from 'styled-components/native';

const NoFavouritesArea = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  // favourites=[]
  return (
    <FavouritesSafeArea>
      {favourites.length ? (
        <RestaurantList
          data={favourites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Restaurants', {
                    screen: 'RestaurantDetail',
                    params: { restaurant: item },
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={() => <Spacer position="top" size="large" />}
        />
      ) : (
        <NoFavouritesArea>
          <Text variant="label">No favourites yet</Text>
        </NoFavouritesArea>
      )}
    </FavouritesSafeArea>
  );
};
