import React, { useContext, useState } from 'react';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  AuthInputContainer,
  BackButton,
  ErrorContainer,
  Title,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/Spacer';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Text } from '../../../components/typography/Text';

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const { onRegister, error, setError, isLoading } = useContext(
    AuthenticationContext,
  );
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInputContainer>
          <AuthInput
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            label="Email"
            onFocus={() => setError(null)}
          />
        </AuthInputContainer>
        <AuthInputContainer>
          <AuthInput
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            label="Password"
            onFocus={() => setError(null)}
          />
        </AuthInputContainer>
        <AuthInputContainer>
          <AuthInput
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            value={repeatedPassword}
            onChangeText={setRepeatedPassword}
            label="Repeat Password"
            onFocus={() => setError(null)}
          />
        </AuthInputContainer>
        {error && (
          <>
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          </>
        )}
        <Spacer position="top" size="large" />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => {
            onRegister(email, password, repeatedPassword);
          }}
          disabled={isLoading}
        >
          Register
        </AuthButton>
      </AccountContainer>
      <Spacer position="top" size="large" />
      <BackButton
        mode="contained"
        onPress={() => {
          navigation.goBack();
        }}
      >
        Back
      </BackButton>
    </AccountBackground>
  );
};
