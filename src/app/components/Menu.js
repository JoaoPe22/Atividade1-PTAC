import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";
import "../globals.css";

export default function Menu() {
  return (
    <div>
      <header className={styles.cabecalho}>
        <Image
          width={50}
          height={100}
          src={"https://www.ifms.edu.br/marcaifms.png"}
        />

        <div>
            <nav>
            <ul className="flex"> 
                <Link href="/">
                <li className={styles.text}>Home</li>
                </Link>

                <Link href="/registro">
                <li className={styles.text}>Registrar</li>
                </Link>

                <Link href="/localizacao">
                  <li className={styles.text}>Localização</li>
                </Link>
            </ul>
            </nav>
        </div>
        
      </header>

    </div>
  );
}
 