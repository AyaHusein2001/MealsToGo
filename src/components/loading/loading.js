import { ActivityIndicator } from 'react-native-paper';
import { styled } from 'styled-components/native';

//deducting half of the size of the spinner to center it in the middle of the screen
export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
