import { useState } from "react";
import styles from "./Home.module.css";
import Banner from "./homeComponents/Banner";
import Footer from "./homeComponents/Footer";
import Header from "./homeComponents/Header";
import LeftSidebar from "./homeComponents/LeftSidebar";
import LowContent from "./homeComponents/LowContent";
import RightSidebar from "./homeComponents/RightSidebar";
import Slider from "./homeComponents/Slider";
import ScrollToTop from "./ScrollToTop";
import products from "./shopping/productsData";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        <Header products={products} onSearch={setSearchQuery} />
      </div>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className={styles.main}>
        <Slider searchQuery={searchQuery} />
      </div>
      <div className={styles.leftAside}>
        <LeftSidebar />
      </div>
      <div className={styles.rightAside}>
        <RightSidebar />
      </div>
      <div className={styles.lowContent}>
        <LowContent />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Home;
