import "./assets/Header.css";
import Button from "../../Componants/Button";
import { IoMailOpenOutline } from "react-icons/io5";
import { TbMessageCircle2 } from "react-icons/tb";
import Pic from "../../assets/profile.webp";

function Header() {
  const redirectToEmail = () => {
    const myEmail = "xyzfiham@gmail.com";
    const mailtoUrl = `mailto:${myEmail}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="header">
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
          <Button>
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
