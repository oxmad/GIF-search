import { Title } from "@components/Title";

import styles from "./Layout.module.scss";

export const Layout = ({ children }) => (
  <div className={styles.layout}>
    <main className={styles.main}>
      <Title />
      {children}
    </main>
  </div>
);
