import Styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, useScroll, animated } from "react-spring";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Contact = () => {
  const { scrollY } = useScroll();

  const animation = useSpring({
    opacity: scrollY.to((y) => (y > 2845 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 2845 ? "translateY(0px)" : "translateY(100px)"
    ),
    config: { mass: 1, tension: 60, friction: 13 },
  });
  return (
    <>
      <div className={Styles.contact_section}>
        <div className={Styles.left_contact_section}>
          <section className={Styles.contact_text_wrapper}>
            <animated.h1 style={animation}>Contact me</animated.h1> 
          </section>
          <section className={Styles.line_break_wrapper}>
            <animated.h1 style={animation}>Here </animated.h1>
          </section>

          <section className={Styles.contact_email_wrapper}>
            <h4>Email</h4>
            <section className={Styles.personal_email_wrapper}>
              <p>Contact@aniketpatel.me</p>
            </section>
          </section>
          <animated.div className={Styles.social_link}>
            <span>
              {" "}
              <Link href="https://github.com/Aniket-Patel-swg" target="_BLANK">
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </Link>
            </span>
            <span>
              {" "}
              <Link href="">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </Link>
            </span>
            <span>
              {" "}
              <Link href="">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </Link>
            </span>
            <span>
              {" "}
              <Link href="">
                <FontAwesomeIcon icon={faLinkedin} size="1x" />
              </Link>
            </span>
            <span>
              {" "}
              <Link href="">
                <FontAwesomeIcon icon={faFacebook} size="1x" />
              </Link>
            </span>
          </animated.div>
        </div>
        <div></div>
        <div className={Styles.right_contact_section}>right conact section</div>
      </div>
    </>
  );
};

export default Contact;
