import React, { useState, useEffect } from "react";
import Styles from "../styles/HappyClient.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSpring, useScroll, animated } from "react-spring";

const HappyClient = () => {
  const { scrollY } = useScroll();

  const [currentItem, setCurrentItem] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
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

  // useEffect for continous motion
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setActiveIndex(activeIndex + 1);
      }
    }, 2000);

    if (activeIndex > items.length - 1) {
      setActiveIndex(0);
    }
    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }); // Empty dependency array to run the effect only once on component mount

  const handleCarouselNavigation = (index) => {
    setCurrentItem(index);
  };

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
        </div>

        {/* <section class={Styles.container}>
          <div class={Styles.slider_wrapper}>
            <div class={Styles.slider}>
              {carousel.map((item, index) => {
                return (
                  <>
                    <span
                      className={`${Styles.slider_items} ${
                        index === currentItem ? Styles.currentItem : ""
                      }`}
                      id={`slide-${item.no}`}
                      key={index}
                    >
                      <span className={Styles.carouse_details}>
                        <h3 className={Styles.carousel_number}>0{item.no}</h3>
                        <h1 className={Styles.carousel_name}>{item.title}</h1>
                        <h2 className={Styles.carousel_website}>
                          <a href={item.website} target="_BLANK">
                            website
                          </a>
                        </h2>
                      </span>
                      <img
                        src={item.image}
                        alt="3D rendering of an imaginary orange planet in space"
                      />
                    </span>
                  </>
                );
              })}
            </div>
            <div class={Styles.slider_nav}>
              {carousel.map((item, index) => (
                <a
                  href={`#slide-${item.no}`}
                  onClick={() => handleCarouselNavigation(index)}
                  key={index}
                ></a>
              ))}
            </div>
          </div>
        </section> */}
        <div className={Styles.carouel_2}>
          {/* number section  */}
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
              style={{ transform: `TranslateX(-${activeIndex * 25}%)` }}
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
            {/* routing buttons  */}
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
              style={{ transform: `translateX(-${activeIndex * 705}px)` }}
              // style={{transform : 'TranslateX(-1680px)'}}
            >
              {items.map((item) => {
                return (
                  <>
                    <li className={Styles.Images}>
                      <img src={item.images} alt="" />
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className={Styles.links}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default HappyClient;
