import Image from "next/image";
import styles from "./index.module.css";
import type { CSSProperties } from "react";

type Client = {
  name: string;
  src: string;
  width?: number;
  height?: number;
  shadow?: boolean;
  style?: CSSProperties;
};

const clients: Client[] = [
  {
    name: "合同会社 TK Source",
    src: "/image/clients/tk.webp",
    width: 300,
    height: 200,
  },
  {
    name: "株式会社spreadwith",
    src: "/image/clients/spread_with.png",
    width: 300,
    height: 200,
  },
  {
    name: "春田法律事務所",
    src: "/image/clients/haruta.svg",
    width: 300,
    height: 200,
  },
  {
    name: "株式会社DPパートナーズ",
    src: "/image/clients/dp.png",
    width: 300,
    height: 200,
  },
  {
    name: "Birthday自由が丘",
    src: "/image/clients/bir-thday.avif",
    width: 300,
    height: 200,
  },
  {
    name: "ANIMEK",
    src: "/image/clients/animek.png",
    width: 300,
    height: 200,
    style: { padding: "10px" },
  },
  {
    name: "株式会社イノベイティア",
    src: "/image/clients/innovatia.svg",
    width: 300,
    height: 200,
    shadow: true,
  },
];

const marqueeClients = [...clients, ...clients];

export default function ClientList() {
  return (
    <div className={styles.marquee} aria-label="Client list marquee">
      <ul className={styles.clients_list}>
        {marqueeClients.map((client, index) => (
          <li key={`${client.name}-${index}`} className={styles.clients_item}>
            <Image
              src={client.src}
              alt={client.name}
              width={client.width ?? 300}
              height={client.height ?? 200}
              className={`${styles.clients_image} ${client.shadow ? styles.shadowed : ""}`}
              style={client.style}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
