import { ActivityIndicator } from 'react-native-paper';
import RestaurantInfoCard from '../components/RestaurantInfoCard';
import { styled } from 'styled-components/native';
import { Spacer } from '../../../components/spacer/Spacer';
import { SafeArea } from '../../../components/utils/SafeArea';
import { useContext } from 'react';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Search } from '../components/Search';
import { TouchableOpacity } from 'react-native';
// for ios , when u give safe area view a flex 1 , it causes white space on the bar on the bottom
// but also removing it makes it dodging to the bottom , makes it does not fell the screen

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    //this applies to each item
    padding: 16,
  },
})``;
//deducting half of the size of the spinner to center it in the middle of the screen
const Loading = styled(ActivityIndicator)`
  margin-left: -25;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} color={Colors.blue300} animating={true} />
        </LoadingContainer>
      )}
      <Search />
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
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Spacer position="top" size="large" />}
      />
    </SafeArea>
  );
};
