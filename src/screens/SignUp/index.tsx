import { z } from 'zod';
import { useRef } from 'react';
import { ScrollView, TextInput } from 'react-native';
import { LayoutContainer } from '../../styled/layout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useForm } from '../../hooks/useForm';
import { RootStackScreenProps } from '../../navigation/types';

const SignUpSchema = z.object({
  username: z.string().min(4).max(25),
  email: z.string().email(),
  password: z.string().min(6),
});

type SignUpType = z.infer<typeof SignUpSchema>;

type Props = RootStackScreenProps<'SignUp'>;

export default function SignUp({ navigation }: Props) {
  const { form, handleFormChange, canSubmit } = useForm(
    {} as SignUpType,
    SignUpSchema,
  );

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  function onSignUpPress() {
    if (canSubmit()) navigation.replace('Home', { screen: 'Routine' });
  }

  return (
    <ScrollView overScrollMode="never" keyboardShouldPersistTaps="handled">
      <LayoutContainer>
        <Input
          focusRef={emailInputRef}
          value={form.username}
          onValueChange={(text) => handleFormChange(text, 'username')}
          placeholder="Username"
          leadingIcon="account-outline"
          autoCapitalize="words"
          trailingIcon="clear"
          autoFocus
        />

        <Input
          ref={emailInputRef}
          focusRef={passwordInputRef}
          value={form.email}
          onValueChange={(text) => handleFormChange(text, 'email')}
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          leadingIcon="email-outline"
        />

        <Input
          ref={passwordInputRef}
          value={form.password}
          onValueChange={(text) => handleFormChange(text, 'password')}
          placeholder="Password"
          leadingIcon="lock-outline"
          autoCapitalize="none"
          secureTextEntry={true}
          trailingIcon="show-hide"
        />

        <Button title="Sign Up" onPress={onSignUpPress} />
      </LayoutContainer>
    </ScrollView>
  );
}
