import React, { useState, useEffect } from "react";
import ImageUploading, { ImageListType, ImageType } from "react-images-uploading";
import Image from "next/image";
import { dropIcon } from "@/assets/iconsrafce";
import styles from "./imgUpload.module.css";
import InputBox from "../input/input";
import { useAddItemContext } from "@/contextrafce";

interface ImageUploadProps {
  onImagesChange: (newImages: ImageType[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImagesChange }) => {
  const [images, setImages] = useState<ImageType[]>([]);
  const maxNumber = Infinity;
  const [showMsg, setShowMsg] = useState<boolean>(false);

  const handleImageChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setShowMsg(false);
    setImages(imageList as never[]);
    onImagesChange(imageList as ImageType[]);
  };

  useEffect(() => {
    console.log("Updated Images:", images);
    console.log("Image Count:", images.length);

    if (images.length > 0) {
      setShowMsg(true);
      console.log("Image added");
    }
  }, [images]);

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={handleImageChange}
      maxNumber={maxNumber}
    >
      {({ onImageUpload, isDragging, dragProps }) => (
        <div className={styles.drop__images}>
          <Image
            src={dropIcon}
            alt="Drop"
            width={20}
            height={20}
            onClick={onImageUpload}
            {...dragProps}
          />
          <p>Add Image</p>
          <p className={`${showMsg ? styles.show__image__uploaded__msg : "wait"}`}>
            Image Added
          </p>
        </div>
      )}
    </ImageUploading>
  );
};

export default ImageUpload;
