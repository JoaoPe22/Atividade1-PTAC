import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";



export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footercontent}>

        <div className={styles.footercontent2} class="grid grid-cols-2">
        <h2 class="py-4">ORGULHOSAMENTE FEITO COM</h2>

        <Link href="https://ead.ifms.edu.br/">
        <Image
          width={130}
          height={100}
          src={
            "https://www.plataformaead.net/wp-content/uploads/2019/04/O-Moodle-e-gratuito.png"
          }
        />
        </Link>
         
        </div>
        <h3 class="pb-5">Feito por João Pedro</h3>

      </div>
    </div>
  );
}

