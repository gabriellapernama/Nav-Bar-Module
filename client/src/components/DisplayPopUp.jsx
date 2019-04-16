import React from "react";
import styles from "../css modules/DisplayPopUp.css";

class DisplayPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSearchClicked = this.handleSearchClicked.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleSearchClicked, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleSearchClicked, false);
  }

  handleSearchClicked(e) {
    if (!document.getElementById("searchBar").contains(e.target)) {
      this.props.handleSearchClicked();
    }
  }

  render() {
    return (
      <div id="searchBar" className={styles.neon}>
        <div className={styles.overAll}>
          <div className={styles.suggestionBox}>
            <div className={styles.suggestionHeaders}>Suggestions</div>
            <ul className={styles.listStyle}>
              {this.props.responseArr.map(dataObj => {
                return (
                  <li className={styles.eachList}>
                    <a>{dataObj.item_name}</a>
                  </li>
                );
              })}
            </ul>
            <div className={styles.seeAll}>
              <a>"SEE ALL"</a>
            </div>
          </div>
          <div className={styles.productBox}>
            <div className={styles.productHeaders}>Products</div>
            <ul className={styles.listStyle}>
              {this.props.responseArr.map(dataObj => {
                return (
                  <li className={styles.eachList}>
                    <a className={styles.parentProducts}>
                      <img src={dataObj.picture} className={styles.images} />
                      <div className={styles.productInfo}>
                        <div className={styles.headerStyle}>
                          {dataObj.item_name}
                        </div>
                        <div className={styles.lineStyle}>
                          {dataObj.cuteness_level}
                        </div>
                        <div className={styles.lineStyle}>{dataObj.stars}</div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayPopUp;
