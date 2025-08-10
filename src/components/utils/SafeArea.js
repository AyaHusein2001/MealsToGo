import { Platform, StatusBar } from 'react-native';
import { styled } from 'styled-components/native';

// for ios , when u give safe area view a flex 1 , it causes white space on the bar on the bottom
// but also removing it makes it dodging to the bottom , makes it does not fell the screen
export const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;
