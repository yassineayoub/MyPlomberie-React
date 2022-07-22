import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer d-flex flex-column mt-5">
      <p className="text-center"><strong>Développé par Yassine Ayoub</strong></p>
      <div className="d-flex gap-2 fs-3 justify-content-center">
        <a target="_blank" href="https://www.linkedin.com/in/yayoubbe/" rel="noreferrer"><BsLinkedin /></a>
        <a target="_blank" href="https://github.com/yassineayoub" rel="noreferrer"><BsGithub /></a>
        <a target="_blank" href="https://twitter.com/Yass_inDev" rel="noreferrer"><BsTwitter /></a>
      </div>
    </footer>
  );
}

export default Footer;
