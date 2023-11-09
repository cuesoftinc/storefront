import React from "react";
import styles from "./raised.module.css";

interface RaisedProps {
  content: string;
}

const RaisedElement = ({ content }: RaisedProps) => {
  return <span className={styles.raised}>{content}</span>;
};

export default RaisedElement;
