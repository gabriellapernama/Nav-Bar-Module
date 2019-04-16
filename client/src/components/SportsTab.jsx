import React from "react";
import styles from "../css modules/MenTab.css";
import { categories } from "../../../database/data.js";
import Headers from "./Headers.jsx";

const SportsTab = props => {
  return (
    <div className={styles.mainLine} onMouseLeave={() => props.toggleHover()}>
      <div className={styles.mainLine}>
        <Headers categories={categories.sports} />
      </div>
    </div>
  );
};
export default SportsTab;
