import React from "react";
import styles from "./mainRightSection.module.css";
import Button from "../../ui-kit/Button";
import Image from "next/image";
import teacher from "../../../public/teacher.jpg";

const MainRightSection = () => {
  return (
    <>
      <section className={styles.container}>
        <div>
          <h2 className={styles.info}>Преподаватель курса:</h2>
          <p className={styles.teacher}>Камянецкий Сергей</p>
          <p className={styles.secondaryText}>Senior C# Developer г. Москва</p>
          <p className={styles.info}>
            Лучший в рейтинге преподавателей школы GeekBrains и Skillbox. Автор
            курсов Skillbox
          </p>
          <div className={styles.infoBlockLarge}>
            <p className={styles.info}>О себе:</p>
            <p className={styles.secondaryText}>
              Образование и карьера Моя специализация – C#. Входил в состав
              команды победителей и был докладчиком на грантовом конкурсе
              стартапов «It-start.pro». Разработал и зарегистрировал систему
              упрощения и автоматизации составления частотных словарей.
              Занимаюсь научной работой: опубликовал ряд теоретических статей в
              изданиях ВАК Минобрнауки России.
            </p>
          </div>
        </div>
        <Image className={styles.image} src={teacher} alt="" />
      </section>
      <div className={styles.infoBlockSmall}>
        <p className={styles.info}>О себе:</p>
        <p className={styles.secondaryText}>
          Образование и карьера Моя специализация – C#. Входил в состав команды
          победителей и был докладчиком на грантовом конкурсе стартапов
          «It-start.pro». Разработал и зарегистрировал систему упрощения и
          автоматизации составления частотных словарей. Занимаюсь научной
          работой: опубликовал ряд теоретических статей в изданиях ВАК
          Минобрнауки России.
        </p>
      </div>
    </>
  );
};

export default MainRightSection;
