import React, { ChangeEvent } from "react";
import Image from "next/image";
import { dropIcon } from "@/assets/iconsrafce";
import styles from "./imgUpload.module.css";
import InputBox from "../input/input";
import { useAddItemContext } from "@/contextrafce";

const ImageUpload = () => {
  const { image, setImage, setImageFullFile } = useAddItemContext();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const imageUrl = e.target.files[0];
      setImage(imageUrl.name);
      setImageFullFile(imageUrl);
    }
  };

  return (
    <div className={styles.drop__images}>
      <InputBox
        type="file"
        id="imageInput"
        name="uploadImage"
        holder=""
        value=""
        inputStyle={styles.image__style}
        handleChange={handleImageChange}
      />
      <label htmlFor="imageInput" className={styles.attach__img}>
        <Image src={dropIcon} alt="Drop" width={20} height={20} />
        <span>{image}</span>
      </label>
    </div>
  );
};

export default ImageUpload;
