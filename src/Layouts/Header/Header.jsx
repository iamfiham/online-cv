import "./assets/Header.scss";
import Button from "../../Componants/Button";
import { IoMailOpenOutline } from "react-icons/io5";
import { TbMessageCircle2 } from "react-icons/tb";
import Pic from "../../assets/profile.png";
import ListMenu from "../../Componants/ListMenu";
import { useRef, useState, useEffect } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuList = useRef(null);
  const menuButton = useRef(null);

  const redirectToEmail = () => {
    const myEmail = "xyzfiham@gmail.com";
    const mailtoUrl = `mailto:${myEmail}`;
    window.location.href = mailtoUrl;
  };
  const redirectToWhatsapp = () => {
    const myWhatsapp = "+94767791229";
    const whatsappUrl = `https://wa.me/${myWhatsapp}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleClick = () => {
    setMenuOpen(menuOpen ? false : true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuList.current.contains(e.target) && e.target !== menuButton.current) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <ListMenu positionClass={`list ${menuOpen ? "show" : ""}`} ref={menuList} clickAction={redirectToEmail} />
      <div className="hamburger-icon" onClick={handleClick} ref={menuButton}>
        <div></div>
        <div></div>
      </div>
      <div className="title-div">
        <div className="profile-photo">
          <img src={Pic} alt="profile" />
        </div>
        <div className="username">
          <h1>Mohamed Fiham</h1>
          <p>I'm a Web Developer based in Sri-lanka</p>
        </div>
        <div className="buttons-div">
          <Button
            style={{
              backgroundColor: "transparent",
              border: "1.5px solid rgba(0, 0, 0, 0.25)",
              color: " rgba(0, 0, 0, 0.9)",
            }}
            onClick={redirectToEmail}
          >
            <IoMailOpenOutline style={{ stroke: " rgba(0, 0, 0, 0.9)" }} />
            Email
          </Button>
          <Button onClick={redirectToWhatsapp}>
            <TbMessageCircle2 style={{ stroke: "white" }} />
            Message
          </Button>
        </div>
      </div>
      <h4 className="sub-title">Experience</h4>
      <h5 className="para">I specialised in Web development</h5>
    </div>
  );
}

export default Header;
