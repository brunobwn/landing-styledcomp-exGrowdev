import AdvantageCard from './AdvantageCard';
import { FaDesktop, FaLayerGroup, FaRegCheckCircle } from 'react-icons/fa';
import { Container } from './style';

const Advantages: React.FC = () => {
  return (
    <Container>
      <AdvantageCard
        icon={FaDesktop}
        title="Somente para desktop"
        subtitle="Vamos aprender a como utilizar um framework."
      />
      <AdvantageCard
        icon={FaLayerGroup}
        title="Criando um componente"
        subtitle="Utilizamos o Styled Components."
      />
      <AdvantageCard
        icon={FaRegCheckCircle}
        title="Fácil aproveitamento"
        subtitle="Estamos no caminho."
      />
    </Container>
  );
};

export default Advantages;
