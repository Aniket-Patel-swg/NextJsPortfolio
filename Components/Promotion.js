import { useSpring, useScroll, animated } from "react-spring";
import Styles from "../styles/Pormotion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Promotion = () => {
  const { scrollY } = useScroll();

  const animation = useSpring({
    opacity: scrollY.to((y) => (y > 450 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 450 ? "translateY(0px)" : "translateY(100px)"
    ),
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const animation2 = useSpring({
    opacity: scrollY.to((y) => (y > 450 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 450 ? "translateY(0px)" : "translateY(25px)"
    ),
    config: { mass: 1, tension: 120, friction: 14 },
  });
  return (
    <>
      <div className={Styles.about_header}>
        <animated.h1 style={animation} className={Styles.client_text_header}>
          <p>
            I'll Make your <br /> <em> dream website </em>
            <br />
            <b> live! </b>
          </p>
        </animated.h1>

        <div style={animation} className={Styles.contact_section}>
          <animated.p style={animation2}>let's build your website</animated.p>

          <animated.button
            style={animation2}
            class={Styles.contact_button}
            role="button"
          >
            <span class={Styles.text}>
              <h2 className={Styles.contact_text}>Contact Me</h2>
            </span>
            <span>Make it Happen</span>
          </animated.button>

          <animated.div style={animation} className={Styles.social_link}>
            <span>
              {" "}
              <Link href="https://github.com/Aniket-Patel-swg" target="_BLANK">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Link>
            </span>
            <span>
              {" "}
              <Link href="">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
            </span>
            <span>
              {" "}
              <Link href="">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
            </span>
            <span>
              {" "}
              <Link href="">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Link>
            </span>
            <span>
              {" "}
              <Link href="">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Link>
            </span>
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default Promotion;
