import React from "react";
import styles from "./forDev.module.css";
import Image from "next/image";
import { codeEditior, fileJs, gitMerge } from "@/assets/imagesrafce";

const ForDev = () => {
  return (
    <section className={styles.dev__section}>
      <h2>
        Storefront for <span>Developers</span>
      </h2>
      <p>
        Dive into the world of Storefront, contribute and even self-host your
        version
      </p>

      <div className={styles.dev__con}>
        <Image src={gitMerge} alt="git-merge" />
        <p>GitMerge 24px</p>
        <h3>Git-based version control</h3>
        <p>
          Implement version control seamlessly with Git. Commit changes, review
          updates, and deploy effortlessly wih CI/CD
        </p>
      </div>
      <div className={styles.dev__con}>
        <Image src={codeEditior} alt="code-editor" />
        <p>CodeEditor 24px</p>
        <h3>Built in JS editor</h3>
        <p>
          Craft reusable code blocks in an intuitive JS editor. Enjoy features
          like autocomplete, multiline editing, debugging, and linting
        </p>
      </div>
      <div className={styles.dev__con}>
        <Image src={fileJs} alt="file-js" />
        <p>FileJS 32px</p>
        <h3>Import JS libaries </h3>
        <p>
          Elevate functionality with imported JavaScript libraries. Access
          advanced capabilities for tasks like CSV parsing, authentication,
          error logging, and more
        </p>
      </div>
    </section>
  );
};

export default ForDev;
