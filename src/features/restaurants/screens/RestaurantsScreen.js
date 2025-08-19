import RestaurantInfoCard from '../components/RestaurantInfoCard';
import { Spacer } from '../../../components/spacer/Spacer';
import { SafeArea } from '../../../components/utils/SafeArea';
import { useContext, useState } from 'react';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Search } from '../components/Search';
import { TouchableOpacity } from 'react-native';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { FavouritesBar } from '../../../components/favourites/FavouritesBar';
import { Loading, LoadingContainer } from '../../../components/loading/loading';
import { RestaurantList } from '../components/restaurants.styles';
import FadeInView from '../../../components/animations/fade.animation';
// for ios , when u give safe area view a flex 1 , it causes white space on the bar on the bottom
// but also removing it makes it dodging to the bottom , makes it does not fell the screen

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} color={Colors.blue300} animating={true} />
        </LoadingContainer>
      )}
      <Search
        onFavouritesToggle={() => setIsToggled(!isToggled)}
        isFavouritesToggled={isToggled}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item,
                })
              }
            >
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Spacer position="top" size="large" />}
      />
    </SafeArea>
  );
};
