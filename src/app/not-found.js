import Link from "next/link";
import styles from "./components/notfound.module.css";

export default function NotFound() {
  return (
    <div>
      <h1>Página Não Encontrada</h1>
      <div className={styles.button}>
        <Link href="/">Voltar para Home</Link>
      </div>
    </div>
  );
}
