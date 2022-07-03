import { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { AnyZodObject } from 'zod/lib/types';

type UseForm<T> = {
  form: T;
  handleFormChange: (value: string, field: keyof T) => string;
  canSubmit: () => boolean;
};

export function useForm<T extends object>(
  initialForm: T,
  validationSchema: AnyZodObject,
): UseForm<T> {
  const [form, setForm] = useState(initialForm);

  function handleFormChange(value: string, field: keyof T) {
    setForm({ ...form, [field]: value });

    const validation = validationSchema.shape[field].safeParse(value);

    if (validation.success) return '';
    return validation.error.errors[0].message;
  }

  function canSubmit() {
    const isParseSuccessful = validationSchema.safeParse(form).success;

    if (!isParseSuccessful) {
      Keyboard.dismiss();
      Alert.alert(
        'Form Error',
        'There are incomplete required fields. Please verify them!',
        [{ text: 'Ok' }],
        { cancelable: true },
      );
    }

    return isParseSuccessful;
  }

  return { form, handleFormChange, canSubmit };
}
