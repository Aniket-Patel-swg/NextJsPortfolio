import React, { useState, useEffect } from "react";
import Styles from "../styles/Hero.module.css";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Student",
    "Freelancer",
    "problem solver",
    "sportsman",
    "Developer",
  ];
  

  // useEffect for autotyping
  useEffect(() => {
    const handleType = () => {
      const currentWord = loopNum % words.length;
      const fullText = words[currentWord];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((loopNum) => loopNum + 1);
      }

      let typingSpeedModifier = 1;

      if (isDeleting) {
        typingSpeedModifier /= 2;
      }

      setTypingSpeed(fullText.length * 15 * typingSpeedModifier);
    };

    const typingTimer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);


  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // console.log('Scroll position:', scrollY);


  return (
    <>
      <div className={Styles.hero_section}>
        <div className={Styles.upper_headline}>
          <span>{"{" + "Portfolio" + "}"}</span>
          <h1 className={Styles.name_heading}>
            Aniket Patel
          </h1>
        </div>
        <div className={Styles.bottom_headline}>
          <h2 className={Styles.work_heading}>Web Developer & Designer</h2>
          <span className={Styles.location}>({text})</span>
        </div>

        {/* <div className={Styles.dummy}>
          <p>scroll Position : {scrollY}</p>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
