import React from "react";
import logo from "./../images/logo.png";

const NewsItem = () => {
  const source = "www.yahoo.com";
  const date = "12/02/2020";
  const description =
    "Amazon net sales up 44% YOY, reports almost double EPS estimate";
  return (
    <div style={styles.container}>
      <div style={styles.imgContainer}>
        <span>
          <img
            style={styles.image}
            width="100"
            heigh="100"
            src={logo}
            alt="Logo"
          />
        </span>
      </div>
      <div style={styles.info}>
        <span style={styles.heading}>
          <span style={styles.source}>{source}</span>
          <span style={styles.date}>{date}</span>
        </span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default NewsItem;

const styles = {
  container: {
    padding: 5,
    borderBottom: "1px solid #EEE",
    marginBottom: 5,
    display: "flex",
    minHeight: 90,
    background: "#F7F9FD",
  },
  imgContainer: {
    border: "2px solid #DDD",
    flex: "10%",
    marginRight: 20,
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  info: {
    flex: "90%",
  },
  heading: {
    display: "block",
  },
  date: { float: "right",fontWeight:'bold'  },
  source: { flot: "left",fontWeight:'bold' },
};
