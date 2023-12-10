// import React, { useState } from "react";
// import Image from "next/image";
// import { dropIcon } from "@/assets/iconsrafce";
// import styles from "./imgUpload.module.css";
// import ImageUploading, {
//   ImageListType,
//   ImageType,
// } from "react-images-uploading";

// const ImageUpload = () => {
//   const [images, setImages] = useState<ImageType[]>([]);
//   const maxNumber = Infinity;

//   const [showMsg, setShowMsg] = useState<boolean>(false);

//   //   console.log(showMsg);

//   const handleImageChange = (
//     imageList: ImageListType,
//     addUpdateIndex: number[] | undefined
//   ) => {
//     // Data for submit
//     setShowMsg(false);
//     console.log(showMsg);
//     console.log(images);
//     console.log(images.length);
//     console.log(imageList, addUpdateIndex);
//     setImages(imageList as never[]);
//     if (images.length++) {
//       setShowMsg(true);
//       console.log(showMsg);
//       console.log("Image added");
//     }
//   };

//   return (
//     <ImageUploading
//       multiple
//       value={images}
//       onChange={handleImageChange}
//       maxNumber={maxNumber}
//     >
//       {/* Destructure an object provided by the uploader library */}
//       {({
//         // imageList,
//         onImageUpload,
//         // onImageRemoveAll,
//         // onImageUpdate,
//         // onImageRemove,
//         isDragging,
//         dragProps,
//       }) => (
//         // Write your building UI
//         <div className={styles.drop__images}>
//           <Image
//             src={dropIcon}
//             alt="Drop"
//             width={20}
//             height={20}
//             onClick={onImageUpload}
//             {...dragProps}
//           />
//           <p>Add Image</p>
//           <p className={`${showMsg ? styles.show__image__uploaded__msg : ""}`}>
//             Image Added
//           </p>
//         </div>
//       )}
//     </ImageUploading>
//   );
// };

// export default ImageUpload;
