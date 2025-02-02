import "./Header.scss";
import logo from "../../assets/svgs/logo.webp";

const Header = () => {
  return (
    <header className="header">

      <div className="logo-container">
        <img src={logo} alt="Sphere Constructions Logo" className="logo" />
        <span className="company-name">
          REACT <br /> LEARNING
        </span>
      </div>

      <nav className="nav">
        <a href="#" className="active">HOME</a>
        <a href="#">SERVICES</a>
        <a href="#">ABOUT</a>
        <a href="#">PROJECTS</a>
        <a href="#">CONTACT</a>
      </nav>

    </header>
  );
};

export default Header;
