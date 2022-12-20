import Container from './style';

export interface ContentTextImageProps {
  imgSide: 'left' | 'right';
  data: { image: string; title: string; text: string };
}

const ContentImage: React.FC<ContentTextImageProps> = ({ imgSide, data }) => {
  return (
    <Container ImageSide={imgSide}>
      <div className="content">
        <h4>{data.title}</h4>
        <p>{data.text}</p>
      </div>
      <img src={data.image} alt={data.title} />
    </Container>
  );
};

export default ContentImage;
