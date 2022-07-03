import welcome_image from '../../../assets/images/welcome-figure.png';
import { RootStackScreenProps } from '../../navigation/types';
import { NormalLink, NormalText } from '../../styled/typography';
import { LayoutContainer } from '../../styled/layout';
import Button from '../../components/Button';
import {
  ActionsWrapper,
  LogInContainer,
  WelcomeImage,
  WelcomeText,
  WelcomeTitle,
  WelcomeWrapper,
} from './styles';

type Props = RootStackScreenProps<'Welcome'>;

export default function Welcome({ navigation }: Props) {
  function onSignUpPress() {
    navigation.navigate('SignUp');
  }

  return (
    <LayoutContainer>
      <WelcomeWrapper>
        <WelcomeImage source={welcome_image} />

        <WelcomeTitle>GainsTrack</WelcomeTitle>
        <WelcomeText>
          Enhance your workout tracking experience with our app!
        </WelcomeText>
      </WelcomeWrapper>

      <ActionsWrapper>
        <Button title="Register Now" onPress={onSignUpPress} />

        <LogInContainer>
          <NormalText>Already have an account? </NormalText>
          <NormalLink to={{ screen: 'LogIn' }}>Log In</NormalLink>
        </LogInContainer>
      </ActionsWrapper>
    </LayoutContainer>
  );
}
