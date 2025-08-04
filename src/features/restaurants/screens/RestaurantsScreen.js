import { Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/RestaurantInfoCard';
import { styled } from 'styled-components/native';
import { Spacer } from '../../../components/spacer/Spacer';
import { SafeArea } from '../../../components/utils/SafeArea';
// for ios , when u give safe area view a flex 1 , it causes white space on the bar on the bottom
// but also removing it makes it dodging to the bottom , makes it does not fell the screen

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    //this applies to each item
    padding: 16,
  },
})``;
const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar value="" placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: '1' },
          { name: '2' },
          { name: '3' },
          { name: '4' },
          { name: '5' },
          { name: '6' },
          { name: '7' },
          { name: '8' },
          { name: '9' },
          { name: '10' },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Spacer position="top" size="large" />}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
