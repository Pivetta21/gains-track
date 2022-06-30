import {
  CustomInput,
  InputContainer,
  LeadingIcon,
  TrailingIcon,
} from './styles';
import { KeyboardTypeOptions, TextInput } from 'react-native';
import { IconName } from '../../types';
import {
  Dispatch,
  ForwardedRef,
  forwardRef,
  RefObject,
  SetStateAction,
  useState,
} from 'react';

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  leadingIcon: IconName;
  nextRef?: RefObject<TextInput>;
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
    setValue,
    placeholder,
    nextRef,
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

  return (
    <InputContainer value={value}>
      {leadingIcon && <LeadingIcon name={leadingIcon} value={value} />}

      <CustomInput
        ref={ref}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        returnKeyType={nextRef ? 'next' : undefined}
        onSubmitEditing={() => nextRef?.current?.focus()}
        blurOnSubmit={!nextRef || !!blurOnSubmit}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureText}
        keyboardType={keyboardType || 'default'}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

      {focused && trailingIcon === 'clear' && !!value && (
        <TrailingIcon name={'close-circle'} onPress={() => setValue('')} />
      )}

      {trailingIcon === 'show-hide' && (
        <TrailingIcon
          name={secureText ? 'eye-outline' : 'eye-off-outline'}
          onPress={() => setSecureText((prevState) => !prevState)}
        />
      )}
    </InputContainer>
  );
}

export default forwardRef<TextInput, Props>(Input);
