import type { GestureResponderEvent } from 'react-native';
import { ButtonContainer, ButtonText } from './styles';

type Props = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export default function Button({ title, onPress }: Props) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
