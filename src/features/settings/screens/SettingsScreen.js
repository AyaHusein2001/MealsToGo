import { useCallback, useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Avatar, List } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';
import { Spacer } from '../../../components/spacer/Spacer';
import { Text } from '../../../components/typography/Text';
import {
  AvatarContainer,
  SafeArea,
  SettingsItem,
} from '../components/settings.styles';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);
  useFocusEffect(
    useCallback(() => {
      const getProfilePicture = async () => {
        const photoUri = await AsyncStorage.getItem(`@photo-${user.uid}`);
        setPhoto(photoUri);
      };
      if (user) {
        getProfilePicture();
      }
    }, [user]),
  );
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          {!photo ? (
            <Avatar.Icon
              size={180}
              icon="human"
              backgroundColor={colors.brand.primary}
            />
          ) : (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor={colors.brand.primary}
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => (
            <List.Icon {...props} color={colors.ui.error} icon="heart" />
          )}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color={colors.ui.secondary} icon="door" />
          )}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
