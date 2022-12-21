import Hero from '../components/Hero';
import heroBackground from '../assets/water.jpg';
import Advantages from '../components/Advantages';
import ContentImage, { ContentTextImageProps } from '../components/ContentImage';
import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import dog3 from '../assets/dog3.jpg';

const Home: React.FC = () => {
  const TextData: ContentTextImageProps[] = [
    {
      imgSide: 'right',
      data: {
        title: 'Lorem, ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto natus harum maxime. At, suscipit deleniti doloremque labore sunt molestiae eius quia minus, eum possimus assumenda ratione. Doloremque, veniam mollitia. Aspernatur velit placeat delectus ut a laboriosam recusandae vel? Tempora impedit neque debitis facilis accusantium provident perferendis optio, dicta sunt expedita ea minus ratione voluptatibus molestiae totam animi quam alias?',
        image: dog1,
      },
    },
    {
      imgSide: 'left',
      data: {
        title: 'Cacilds vidis litro',
        text: 'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Mé faiz elementum girarzis, nisi eros vermeio.Casamentiss faiz malandris se pirulitá. \n Delegadis gente finis, bibendum egestas augue arcu ut est.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Si num tem leite então bota uma pinga aí cumpadi!',
        image: dog2,
      },
    },
    {
      imgSide: 'right',
      data: {
        title: 'Fala cumpadi',
        text: 'Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai. Só digo uma coisa, Domingo ela não vai! Danadaa!! Vem minha odalisca, agora faz essa cobra coral subir!!! Pau que nasce torto, Nunca se endireita. Tchannn!! Tchannn!! Tu du du pááá! Eu gostchu muitchu, heinn! danadinha! Mainhaa! Agora use meu lorem ipsum ordinária!!! Olha o quibeee! rema, rema, ordinária!.',
        image: dog3,
      },
    },
  ];

  return (
    <>
      <main>
        <Hero background={heroBackground} title="Minha primeira pagina com React." />
        <Advantages />
        <section>
          {TextData.map((item, index) => (
            <ContentImage key={index} imgSide={item.imgSide} data={item.data} />
          ))}
        </section>
        <Hero background={heroBackground} title="Contato" small />
      </main>
    </>
  );
};

export default Home;
