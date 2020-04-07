import React, { useState } from "react";
import styles from "./app.module.scss";
import Heroimage from "./components/Heroimage/Heroimage";

function App() {
  /* set item for dropdown menu */
  const [menu, setMenu] = useState([
    "Aurora Borealis",
    "Constellation",
    "Earth Orbit",
    "EVA",
  ]);

  /* check clicked element*/
  const [selectedItem, setSelectedItem] = useState(null);
  /* state of dropdown*/
  const [displayMenu, setDisplayMenu] = useState(false);

  const activeClassName = displayMenu ? styles.active : '';

  /* click on item in dropdown menu*/
  function handleClick(item) {
    setSelectedItem(item);
  }

  return (
    <div className="wrapper">
      <header className={styles.header}>
        <ul className={styles.menu__wrapper}>
          <li className={styles.menu__wrapper_li}>Home</li>
          <li
            className={`${styles.menu__wrapper_li} ${styles.dropdown_li} ${activeClassName}`}
            onClick={() =>  setDisplayMenu(!displayMenu)}
          >
            The experience
            {/* conditional li display menu */}
            {displayMenu ? (
              <ul className={`${styles.menu__experience} ${styles.display}`}>
                {menu.map((item, index) => {
                  return (
                    <a href="#" onClick={(e) => handleClick(item)}>
                      <li key={index} className={styles.menu__experience_li}>
                        {item}
                      </li>{" "}
                    </a>
                  );
                })}
              </ul>
            ) : null}
          </li>

          <li className={styles.menu__wrapper_li}>Pricing</li>
          <li className={styles.menu__wrapper_li}>About us</li>
          <li className={styles.menu__wrapper_li}>Login</li>
        </ul>
      </header>

      <Heroimage selectedItem={selectedItem} />
    </div>
  );
}

export default App;
