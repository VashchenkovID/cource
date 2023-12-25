import React from "react";
import styles from "./mainLeftSection.module.css";
import Button from "../../ui-kit/Button";

const MainLeftSection = () => {
  return (
    <section>
      <h1 className={styles.title}>Курс "C#" с нуля до оффера"</h1>
      <p className={styles.text}>
        Получите востребованную профессию, <br /> независимо от прошлого опыта,
        специальности и образования
      </p>
      <div className={styles.btnContainer}>
        <Button label={"Подробнее"} href="https://ksergey.ru/" />
      </div>
    </section>
  );
};

export default MainLeftSection;
