import "./About.css";
import { Facebook, Github, Instagram, Twitter } from "../../components/Icons";

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-avatar">
          <img src="./images/user.png" alt="Luc cui"></img>
          <div className="sticker sticker1"></div>
          <div className="dots">
            {[...Array(16).keys()].map((e) => (
              <div></div>
            ))}
          </div>
          <div className="sticker sticker2"></div>
          <div className="ripple">
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="sticker sticker3"></div>
        </div>
        <div className="about-description">
          <h3 style={{ color: "#fff" }}>Hế lô mình là Minh Lực</h3>
          <p>
            Mình đang là sinh viên năm 3 trường Đại Học Trà Vinh, ngành của mình
            học là CNTT. Định hướng trong tương lai của mình là một Fullstack
            Developer.Về phía FrontEnd thì mình có kiến thức về HTML, CSS, JS,
            Bootstrap, TailwindCSS, React, Vue. Còn phần BackEnd hiện tại mình đang làm việc với PHP
            Laravel Framework, mình cũng có thể code với lại NodeJS. Mình cũng
            có biết về Docker và Linux, quản lý mã nguồn bằng Git, Github.
          </p>
          <div className="about-social">
            <a href="https://www.facebook.com/luccui2301/">
              <Facebook />
            </a>
            <a href="https://github.com/luccui000">
              <Github />
            </a>
            <a href="https://twitter.com/luc_cui">
              <Twitter />
            </a>
            <a href="https://www.instagram.com/luccui_____/">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
