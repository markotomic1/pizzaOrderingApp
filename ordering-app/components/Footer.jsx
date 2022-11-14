import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src='/img/bg.png'
          layout='fill'
          objectFit='cover'
          alt=''
          sizes=''
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Oh yes, swe did the pizza, well baked slice of pizza
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find our restaurant</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br />
            New York, 85022
            <br />
            (602) 867-1010
          </p>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br />
            New York, 85022
            <br />
            (602) 867-1010
          </p>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br />
            New York, 85022
            <br />
            (602) 867-1010
          </p>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br />
            New York, 85022
            <br />
            (602) 867-1010
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working hours</h1>
          <p className={styles.text}>
            Monday until friday
            <br /> 9:00-22:00
          </p>
          <p className={styles.text}>
            Saturday - Sunday
            <br /> 12:00-24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
