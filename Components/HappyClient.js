import React, { useState, useEffect } from "react";
import Styles from "../styles/HappyClient.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSpring, useScroll, animated } from "react-spring";

const HappyClient = () => {
  const { scrollY } = useScroll();

  const [windowWidth, setWindowWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [tablet, setTablet] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [smallMobile, setSmallMobile] = useState(false);
  const [paused, setPaused] = useState(false);
  const items = [
    {
      Number: "01",
      images: "/Images/serene.png",
      title: "The Serene Resort",
      Website: "https://fruitlonglife.com",
    },
    {
      Number: "02",
      images: "/Images/conference.png",
      title: "International Conference",
      Website: "https://fruitlonglife.com",
    },
    {
      Number: "03",
      images: "/Images/fruitlonglife.png",
      title: "Fruit Long Life, Miami",

      Website: "https://conference.icghgd.com/",
    },
    {
      Number: "04",
      images: "/Images/Studio_RA.png",
      title: "Studio RA",
      Website: "https://patelaniket1207.wixsite.com/the-serene-re",
    },
  ];

  // to keep track of current screen size
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      if (window.innerWidth < 730) {
        setTablet(true);
      }

      if (windowWidth.innerWidth < 534) {
        setMobile(true);
      }

      if(windowWidth.innerWidth < 350){
        setSmallMobile(true);
      }
      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // useEffect for continous motion
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setActiveIndex(activeIndex + 1);
      }
    }, 2500);

    if (activeIndex > items.length - 1) {
      setActiveIndex(0);
    }
    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  });

  function handleDotClick(index) {
    setActiveIndex(index);
  }

    function handleLeftButtonClick() {
      const newIndex = (activeIndex - 1 + items.length) % items.length;
      setActiveIndex(newIndex);
    }

  function handleRightButtonClick() {
    const newIndex = (activeIndex + 1) % items.length;
    setActiveIndex(newIndex);
  }

  const animation = useSpring({
    opacity: scrollY.to((y) => (y > 800 ? 1 : 0)),
    transform: scrollY.to((y) =>
      y > 800 ? "translateY(0px)" : "translateY(100px)"
    ),
    config: { mass: 1, tension: 120, friction: 15 },
  });

  const background = useSpring({
    background: scrollY.to((y) => (y > 800 ? "#f1f1f1" : "#8e8e8e33;")),
  });

  return (
    <>
      <div className={Styles.happy_clients}>
        <div className={Styles.Clients_header_text}>
          <section className={Styles.heading_wrapper}>
            <animated.h1 style={animation}>Happy Clients</animated.h1>
          </section>
          <section className={Styles.text_wrapper}>
            <animated.p style={animation}>
              I make Webiste from nothing into existance, fully functional. I
              don't use any tricks nor magic, <br /> I specialse using raw
              fabrics of web like HTML, CSS and JS.
            </animated.p>
          </section>
          <p>Window width {windowWidth}</p>
        </div>

        <div style={background} className={Styles.carouel_2}>
          <button
            className={Styles.arrow}
            onClick={handleLeftButtonClick}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <span className={Styles.text}>
              <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </span>
          </button>
          <button
            className={Styles.arrow}
            onClick={handleRightButtonClick}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {" "}
            <span className={Styles.text}>
              <FontAwesomeIcon icon={faArrowRight} size="2x" />
            </span>
          </button>
          <div className={Styles.number_container}>
            <div
              className={Styles.number_wrapper}
              style={{ transform: `TranslateX(-${activeIndex * 220}px)` }}
            >
              {items.map((item) => {
                return (
                  <>
                    <span className={Styles.numbers}>
                      <p>{item.Number}</p>
                    </span>
                  </>
                );
              })} 
            </div>
          </div>
          {/* combined vertical section */}

          <div className={Styles.combined_section}>
            <div className={Styles.title_section}>
              <div
                className={Styles.title_wrapper}
                style={{ transform: `TranslateY(-${activeIndex * 96}px)` }}
              >
                {items.map((item) => {
                  return (
                    <>
                      <div className={Styles.title_wrapper}>
                        <h1> {item.title} </h1>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className={Styles.link_section}>
              <div
                className={Styles.link_wrapper}
                style={{ transform: `TranslateY(${activeIndex * 50}px)` }}
              >
                {items.map((item) => {
                  return (
                    <>
                      <Link href={item.Website} target="_BLANK">
                        {" "}
                        <h3>visit</h3>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
            <div className={Styles.dots}>
              {items.map((item, index) => (
                <span
                  key={index}
                  className={
                    index === activeIndex ? Styles.activeDot : Styles.dot
                  }
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
          </div>

          {/* images section  */}
          <div
            className={Styles.inner}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <ul
              className={Styles.images_list}
              style={{
                transform: `translateX(-${
                  activeIndex * (tablet ? (mobile ? 340 : 450) : 705)
                }px)`,
              }}
            >
              {items.map((item,index) => {
                return (
                  <>
                    <li key={item.Number} className={index === activeIndex ? Styles.Images : Styles.grayscale_image}>
                      <img src={item.images} alt="" />
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          {/* <div className={Styles.links}>
            <Link href="/">
              <button class={Styles.skill_button} role="button">
                My Skills
              </button>
            </Link>
            <Link href="/">
              <button class={Styles.skill_button} role="button">
                work experience
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HappyClient;
