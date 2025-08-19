import React, { useState } from 'react';
import RestaurantInfoCard from '../components/RestaurantInfoCard';
import { SafeArea } from '../../../components/utils/SafeArea';
import { Divider, List } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;

  const [breackfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setlunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinkExpanded, setDrinkExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      {/* scroll view is performant here as we do not have a huge menu to have to use the flat list */}
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breackfastExpanded}
          onPress={() => setBreakfastExpanded(!breackfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <Divider />

          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <Divider />

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setlunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <Divider />

          <List.Item title="Steak Sandwich" />
          <Divider />

          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <Divider />

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti" />
          <Divider />

          <List.Item title="Veal Cutlet with Chips" />
          <Divider />

          <List.Item title="Steak" />
        </List.Accordion>
        <Divider />

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinkExpanded}
          onPress={() => setDrinkExpanded(!drinkExpanded)}
        >
          <List.Item title="Coffee" />
          <Divider />

          <List.Item title="Tea" />
          <Divider />

          <List.Item title="Modelo" />
          <Divider />

          <List.Item title="Coke" />
          <Divider />

          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
