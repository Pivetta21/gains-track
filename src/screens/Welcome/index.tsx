import { TouchableOpacity } from 'react-native';
import welcome_image from '../../../assets/images/welcome-figure.png';
import { RootStackScreenProps } from '../../navigation/types';
import {
  ActionsWrapper,
  ButtonContainer,
  ButtonText,
  Container,
  HeroWrapper,
  LogInContainer,
  LogInLink,
  LogInText,
  WelcomeImage,
  WelcomeText,
  WelcomeTitle,
} from './styles';

type Props = RootStackScreenProps<'Welcome'>;

export default function Welcome({ navigation }: Props) {
  return (
    <Container>
      <HeroWrapper>
        <WelcomeImage source={welcome_image} />
        <WelcomeTitle>GainsTrack</WelcomeTitle>
        <WelcomeText>
          Enhance your workout tracking experience with our app!
        </WelcomeText>
      </HeroWrapper>

      <ActionsWrapper>
        <ButtonContainer onPress={() => navigation.navigate('SignUp')}>
          <ButtonText>Register Now</ButtonText>
        </ButtonContainer>

        <LogInContainer>
          <LogInText>Already have an account?</LogInText>
          <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
            <LogInLink>Log In</LogInLink>
          </TouchableOpacity>
        </LogInContainer>
      </ActionsWrapper>
    </Container>
  );
}
