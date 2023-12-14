import React from "react";
import styles from "./offerings.module.css";

interface OfferingProps {
  mainHeading: string;
  subHeading: string;
  headOne: string;
  headTwo: string;
  headThree: string;
  headFour: string;
  headFive: string;
  contentOne: string;
  contentTwo: string;
  contentThree: string;
  contentFour: string;
  contentFive: string;
}

const OurOffering = ({
  mainHeading,
  subHeading,
  headOne,
  headTwo,
  headThree,
  headFour,
  headFive,
  contentOne,
  contentTwo,
  contentThree,
  contentFour,
  contentFive,
}: OfferingProps) => {
  return (
    <section className={styles.offering__section}>
      <h3>{mainHeading}</h3>
      <h2>{subHeading}</h2>

      <div className={styles.all__features}>
        <div className={styles.feature__con}>
          <h4>{headOne}</h4>
          <p>{contentOne}</p>
        </div>
        <div className={styles.feature__con}>
          <h4>{headTwo}</h4>
          <p>{contentTwo}</p>
        </div>
        <div className={styles.feature__con}>
          <h4>{headThree}</h4>
          <p>{contentThree}</p>
        </div>
        <div className={styles.feature__con}>
          <h4>{headFour}</h4>
          <p>{contentFour}</p>
        </div>
        <div className={styles.feature__con}>
          <h4>{headFive}</h4>
          <p>{contentFive}</p>
        </div>
      </div>
    </section>
  );
};

export default OurOffering;
