import React, { useState, useEffect } from "react";
import Styles from "../styles/Preloader.module.css";
const Preloader = () => {
  const [count, setCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const name = ["A", "N", "I", "K", "E", "T"];
  const colors = [
    "#D18080",
    "#29487D",
    "#739993",
    "#3C5898",
    "#d3a488",
    "#30312F",
  ];

  // useEffect
  useEffect(() => {
    const timeout = setTimeout(() => setCount(count + 1), 70);

    const updateIndex = setTimeout(
      () => setCurrentIndex(currentIndex + 1),
      700
    );

    console.log(currentIndex);

    if (currentIndex === 5) {
      setCurrentIndex(5);
      return;
    }

    if (count === 100) {
      clearTimeout(timeout);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [count]);

  return (
    <>
      <div className={Styles.preloader}>
        <section className={Styles.carousel_section}>
          <div
            className={Styles.carousel_wrapper}
            style={{
              transform: `translateX(-${currentIndex}00vw)`,
            }} 
          >
            {name.map((letter, index) => {
              return (
                <>
                  <div
                    className={Styles.letter_div}
                    key={index}
                    style={{ backgroundColor: colors[index] }}
                  >
                    {letter}
                  </div>
                </>
              );
            })}
          </div>
        </section>

        <section className={Styles.text_reveal}>
          <section className={Styles.name_wrapper}>
              <h1> ''Passionate </h1>
          </section>
          <section className={Styles.second_line_wrapper}>
            <h1>About Every</h1>
          </section>
          <section className={Styles.pixels_text_wrapper}>
            <h1>Pixels''</h1>
          </section>
        </section>

        <section className={Styles.top_section}>
          <section className={Styles.percentage_loader}>
            <p>{count} %</p>
          </section>
        </section>
      </div>
    </>
  );
};

export default Preloader;
