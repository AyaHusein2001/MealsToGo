import { TouchableOpacity, ScrollView } from 'react-native';

import React from 'react';
import { styled } from 'styled-components';
import { Spacer } from '../spacer/Spacer';

import { CompactRestaurantInfo } from '../../features/restaurants/components/CompactRestaurantInfo';
import { Text } from '../typography/Text';
import { Card } from 'react-native-paper';
const FavouritesWrapper = styled(Card)`
  padding: ${(props) => props.theme.space[1]};
  z-index: 999;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper elevation={1}>
      <Spacer position="left" size="large">
        <Text variant="body">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => (
          <Spacer position="left" size="medium" key={restaurant.name}>
            <TouchableOpacity
              onPress={() =>
                onNavigate('RestaurantDetail', {
                  restaurant,
                })
              }
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
};
