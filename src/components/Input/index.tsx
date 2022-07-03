import {
  CustomInput,
  InputContainer,
  InputWrapper,
  LeadingIcon,
  TrailingIcon,
  ErrorInputText,
} from './styles';
import { ForwardedRef, forwardRef, RefObject, useState } from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';
import { IconName } from '../../types';

type Props = {
  value: string;
  onValueChange: (text: string) => string;
  placeholder: string;
  leadingIcon: IconName;
  focusRef?: RefObject<TextInput>;
  autoFocus?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  blurOnSubmit?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  trailingIcon?: 'clear' | 'show-hide';
};

function Input(
  {
    value,
    onValueChange,
    placeholder,
    focusRef,
    autoFocus,
    leadingIcon,
    autoCapitalize,
    blurOnSubmit,
    secureTextEntry,
    keyboardType,
    trailingIcon,
  }: Props,
  ref: ForwardedRef<TextInput>,
) {
  const [secureText, setSecureText] = useState(!!secureTextEntry);
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState('');

  function onChangeText(text: string) {
    const errorMessage = onValueChange(text);
    setError(errorMessage);
  }

  return (
    <InputContainer>
      <InputWrapper value={value} hasError={!!error}>
        {leadingIcon && <LeadingIcon name={leadingIcon} hasValue={!!value} />}

        <CustomInput
          ref={ref}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          returnKeyType={focusRef ? 'next' : undefined}
          onSubmitEditing={() => focusRef?.current?.focus()}
          blurOnSubmit={!focusRef || !!blurOnSubmit}
          autoFocus={autoFocus}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureText}
          keyboardType={keyboardType || 'default'}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {focused && trailingIcon === 'clear' && !!value && (
          <TrailingIcon
            name={'close-circle'}
            onPress={() => onValueChange('')}
          />
        )}

        {trailingIcon === 'show-hide' && (
          <TrailingIcon
            name={secureText ? 'eye-outline' : 'eye-off-outline'}
            onPress={() => setSecureText((prevState) => !prevState)}
          />
        )}
      </InputWrapper>

      {!!error && <ErrorInputText>{error}</ErrorInputText>}
    </InputContainer>
  );
}

export default forwardRef<TextInput, Props>(Input);
