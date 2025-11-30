import Styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Year from "./components/Year";
import Link from "next/link";




function Home() {
  return (
    <main>
        <div className={Styles.main}>
          <p>Home</p>
          <Header text="Header" />
          <Footer text="Copy rights"/>     
          <Year text="2025"/>
          <Link href="/about">about</Link>
        </div>
    </main>
  );
}
export default Home ;