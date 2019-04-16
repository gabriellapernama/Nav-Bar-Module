import React from "react";
import styles from "../css modules/MenTab.css";
import { categories } from "../../../database/data.js";
import Headers from "./Headers.jsx";

const BrandsTab = props => {
  return (
    <div className={styles.mainLine} onMouseLeave={() => props.toggleHover()}>
      <div className={styles.mainLine}>
        <Headers categories={categories.brands} />
      </div>
    </div>
  );
};

export default BrandsTab;
