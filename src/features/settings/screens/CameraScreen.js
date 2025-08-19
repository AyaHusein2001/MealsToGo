import { CameraView, useCameraPermissions } from 'expo-camera';
import { TouchableOpacity, View } from 'react-native';
import { styled } from 'styled-components/native';
import { Text } from '../../../components/typography/Text';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../../infrastructure/theme/colors';
import { useContext, useRef } from 'react';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const ProfileCamera = styled(CameraView)`
  width: 100%;
  height: 100%;
`;
export const GrantAccessButton = styled(Button).attrs({
  mode: 'contained',
  color: colors.brand.primary,
})`
  align-self: center;
`;
const CameraSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.space[3]};
`;

export default function CameraScreen({ navigation }) {
  const { user } = useContext(AuthenticationContext);

  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`@photo-${user.uid}`, photo.uri);
      navigation.goBack();
    }
  };

  if (cameraRef.current) {
    cameraRef.current.onCameraReady();
  }
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <CameraSafeArea>
        <Text variant="label">We need your permission to show the camera</Text>
        <GrantAccessButton onPress={requestPermission}>
          Grant Permission
        </GrantAccessButton>
      </CameraSafeArea>
    );
  }
 
  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera ref={cameraRef} facing="front" />
    </TouchableOpacity>
  );
}
