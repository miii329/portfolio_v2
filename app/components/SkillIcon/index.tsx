import Image from "next/image";
import styles from "./index.module.css";

type SkillIconProps = {
  src: string;
  alt: string;
  width?: number;
};

export default function SkillIcon({ src, alt, width = 50 }: SkillIconProps) {
  return (
    <span className={styles.icon}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={0}
        style={{ height: "auto" }}
      />
    </span>
  );
}
