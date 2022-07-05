import Button from '../../components/Button';
import type { RootStackScreenProps } from '../../navigation/types';
import { LayoutContainer } from '../../styled/layout';
import { z } from 'zod';
import { useForm } from '../../hooks/useForm';
import Input from '../../components/Input';
import { useRef } from 'react';
import { TextInput } from 'react-native';

const LogInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LogInType = z.infer<typeof LogInSchema>;

type Props = RootStackScreenProps<'LogIn'>;

export default function LogIn({ navigation }: Props) {
  const { form, handleFormChange, canSubmit } = useForm(
    {} as LogInType,
    LogInSchema,
  );

  const passwordInputRef = useRef<TextInput>(null);

  function onLoginPress() {
    if (canSubmit()) navigation.replace('Home', { screen: 'Routine' });
  }

  return (
    <LayoutContainer>
      <Input
        focusRef={passwordInputRef}
        value={form.email}
        onValueChange={(text) => handleFormChange(text, 'email')}
        placeholder="E-mail"
        autoCapitalize="none"
        keyboardType="email-address"
        leadingIcon="email-outline"
        autoFocus
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

      <Button title="Log In" onPress={onLoginPress} />
    </LayoutContainer>
  );
}
