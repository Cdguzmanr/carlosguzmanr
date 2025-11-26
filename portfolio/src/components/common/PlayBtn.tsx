import React from "react";
import { IoLogoGameControllerB } from "react-icons/io";
import styles from "../../styles/PlayButton.module.css";

interface PlayBtnProps {
  gameLink: string;
}

const PlayBtn: React.FC<PlayBtnProps> = ({ gameLink }) => {
  const handleClick = () => {
    window.open(gameLink, "_blank");
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      <span className={styles.shadow} />
      <span className={styles.edge} />
      <span className={`${styles.front} text-white font-bold text-xs`}>
        <span className="flex gap-2 items-center">
          <IoLogoGameControllerB className="size-5" />
          Play Now
        </span>
      </span>
    </button>
  );
};

export default PlayBtn;
