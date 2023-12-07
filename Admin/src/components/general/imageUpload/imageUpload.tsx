import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { dropIcon } from "@/assets/iconsrafce";
import styles from "./imgUpload.module.css";
import InputBox from "../input/input";

const ImageUpload = () => {
  const [image, setImage] = useState("Add Image");

  const [showMsg, setShowMsg] = useState<boolean>(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.drop__images}>
      <InputBox
        type={"file"}
        id="imageInput"
        name={"uploadImage"}
        holder={""}
        value={""}
        inputStyle="image__style"
        handleChange={handleImageChange}
      />
      <label htmlFor="imageInput">
        <Image src={dropIcon} alt="Drop" width={20} height={20} />
        <span>{image}</span>
      </label>
    </div>
  );
};

export default ImageUpload;
