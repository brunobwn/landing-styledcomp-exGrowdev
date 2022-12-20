import Container from './style';

interface HeroProps {
  title: string;
  background: string;
  small?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, background, small }) => {
  return (
    <Container background={background} small={small}>
      <h2>{title}</h2>
    </Container>
  );
};

export default Hero;
