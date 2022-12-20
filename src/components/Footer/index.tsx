import { FaFacebook, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import { FooterContainer } from './style';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="linkContainer">
        <nav>
          <a href="/">About</a>
          <span>•</span>
          <a href="/">Contact</a>
          <span>•</span>
          <a href="/">Terms of Use</a>
          <span>•</span>
          <a href="/">Privacy Policy</a>
        </nav>
        <p>© Your Website 2022. All Rights Reserved.</p>
      </div>
      <div className="iconContainer">
        <a href="/">
          <FaFacebook />
        </a>
        <a href="/">
          <FaTwitterSquare />
        </a>
        <a href="/">
          <FaInstagram />
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
