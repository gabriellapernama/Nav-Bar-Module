import React from "react";
import styles from "../css modules/MenTab.css";
import { categories } from "../../../database/data.js";
import Headers from "./Headers.jsx";

const SetItems = props =>
  props.arr.map((items, index) => {
    return (
      <li key={index} className={styles.listtrial}>
        <a className={styles.a}>{items}</a>
      </li>
    );
  });

const GetFeatured = props => {
  var featuredCat = categories.men[0];
  var firstThree = featuredCat.featured.slice(0, 3);
  var lastThree = featuredCat.featured.slice(3);
  return (
    <div className={styles.eachCol}>
      <div className={styles.headline}>Featured</div>
      <ul>
        <SetItems arr={firstThree} />
        <div className={styles.horizontalseparater} />
        <SetItems arr={lastThree} />
        <div className={styles.horizontalseparater} />
        <a className={styles.a}>
          <strong>Sale</strong>
        </a>
      </ul>
    </div>
  );
};

class MenTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyhover: false
    };
  }

  render() {
    return (
      <div
        className={styles.mainLine}
        onMouseLeave={() => this.props.toggleHover()}
      >
        <div className={styles.nextLine}>
          <GetFeatured />
          <Headers categories={categories.men.slice(1)} />
        </div>
      </div>
    );
  }
}

export default MenTab;
