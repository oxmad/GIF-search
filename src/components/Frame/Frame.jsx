import { useSelector } from "react-redux";

import { currentImageSelector } from "@selectors/app.selectors";

import styles from "./Frame.module.scss";

export const Frame = () => {
  const currentImage = useSelector(currentImageSelector);

  if (!currentImage) {
    return null;
  }

  return (
    <figure className={styles.frame}>
      <img className={styles.image} src={currentImage.url} alt="" />
      <figcaption className={styles.caption}>{currentImage.title}</figcaption>
    </figure>
  );
};
