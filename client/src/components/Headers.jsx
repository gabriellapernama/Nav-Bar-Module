import React from "react";
import Items from "./Items.jsx";
import styles from "../css modules/MenTab.css";

const Headers = props => {
  console.log(props.categories);
  return props.categories.map((titles, index) => {
    for (var key in titles) {
      return (
        <div key={index} className={styles.eachCol}>
          <div className={styles.headline}>{key}</div>
          <Items titles={titles[key]} />
        </div>
      );
    }
  });
};

export default Headers;
