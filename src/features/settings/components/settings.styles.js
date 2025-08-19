import { List } from 'react-native-paper';
import { styled } from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const AvatarContainer = styled.View`
  align-items: center;
  margin: 32px auto;
  justify-content: center;
`;
export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
