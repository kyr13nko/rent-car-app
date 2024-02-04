import {
  Wrapper,
  Background,
  Title,
  Span,
  Text,
  SpanText,
  StyledLink,
} from './HomeComponent.styled';

const HomeComponent = () => {
  return (
    <Wrapper>
      <Background />
      <Title>
        Rent Car Service <Span>for Everyone!</Span>
      </Title>
      <Text>
        We have the <SpanText>CAR</SpanText> of your <SpanText>DREAMS</SpanText>!
      </Text>
      <StyledLink to="/catalog">Go to the Catalog</StyledLink>
    </Wrapper>
  );
};

export default HomeComponent;
