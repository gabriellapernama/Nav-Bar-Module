import React from "react";
import styles from "../css modules/MenTab.css";

const Items = props => {
  console.log(props.titles);
  return (
    <ul>
      {props.titles.map(item => {
        return (
          <li key={item} className={styles.listtrial}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Items;
