import styles from "./Home.module.css"
import { useState } from "react"

import kiwiLogo from "../assets/kiwi-logo.png"
import kiwiTroops from "../assets/kiwi-troops.jpeg"
import dolphins from "../assets/dolphins.webp"
import aucklandCity from "../assets/auckland-city.jpeg"


export default function Home() {
  //use state and function for toggle button
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <div className={`${styles.overlay} ${isActive ? styles.isActive : ''}`} onClick={toggleHamburger}>
      </div>
      {/* navbar */}
      <div className={styles.navbar}>
        <div className={styles.brandContainer}>
          <img src={kiwiLogo}/>
          <h2>Kiwi Watch </h2>
        </div>
        <div className={`${styles.menuContainer} ${isActive ? styles.isActive : ''}`}>
          <h5>Latest</h5>
          <h5>Weather</h5>
          <h5>Economy</h5>
          <h5 className={styles.login}>Login</h5>
        </div>
        <div className={`${styles.hamburger} ${isActive ? styles.isActive : ''}`} onClick={toggleHamburger}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
      {/* banner */}
      <div className={styles.banner}>
        <div className={styles.textContainer}>
          <h1>The Land of the Long White Cloud: Turning New Zealand’s Recovery into Sustained Growth</h1>
        </div>
        <div  className={styles.searchContainer}>
          <input className={styles.search} placeholder="Search for something..."></input>
          <button className={styles.searchBtn}>SEARCH</button>
        </div>
      </div>
      {/* gallery */}
      <div className={styles.gallery}>
        <div className={styles.newsContainer}>
          <div className={styles.pictureContainer}>
            <img src={dolphins}/>
          </div>
          <div className={styles.description}>
              <h4>New protection for bottlenose dolphins</h4>
              <p>DOC has put in place new permit conditions to protect bottlenose dolphins in the Bay of Islands, Northland.</p>
          </div>
        </div>
        <div className={styles.newsContainer}>
          <div className={styles.pictureContainer}>
            <img src={kiwiTroops}/>
          </div>
          <div className={styles.description}>
            <h4>Kiwi troops bound for Iraq</h4>
            <p>The third rotation of New Zealand Defence Force (NZDF) personnel to Iraq departed from Christchurch Airport on the weekend.</p>
          </div>
        </div>
        <div className={styles.newsContainer}>
          <div className={styles.pictureContainer}>
            <img src={aucklandCity}/>
          </div>
          <div className={styles.description}>
            <h4>Residence sold for $1.136 million</h4>
            <p>This week, the unassuming dwelling located on Glasgow Street in Papatoetoe, Auckland, defied appearances and sold at auction for an impressive $1.136 million.</p>
          </div>
        </div>
      </div>
    </div> 
  )
}