import React from "react";

/**
 1. Pass source, date, description and link as props 
 2. Attach an onClick handler on which should open the source in a new tab
*/
 const NewsItem = ({
  source = "finance.yahoo.com",
  url = "https://finance.yahoo.com/m/7c66194e-24f9-3ffe-bb29-a4dea96f7065/is-apple-stock-a-buy-amid.html",
  date = "12/02/2020",
  summary = "Is Apple Stock A Buy Amid Growing Apple Car Speculation?",
  image = "https://www.macworld.co.uk/cmsdata/features/3792765/apple_logo_thumb800.jpg",
}) => {
  
  return (
    <div style={styles.container}>
      <div style={styles.imgContainer}>
        <span>
          <img
            style={styles.image}
            width="70"
            heigh="70"
            src={image}
            alt="Logo"
          />
        </span>
      </div>
      <div style={styles.info}>
        <span style={styles.heading}>
          <span style={styles.source}>{source}</span>
          <span style={styles.date}>{date}</span>
        </span>
        <span>{summary}</span>
      </div>
    </div>
  );
};

export default NewsItem;

const styles = {
  container: {
    padding: 20,
    border: "1px solid #CCC",
    marginBottom: 5,
    display: "flex",
    minHeight: 70,
    background: "#FFF",
    cursor: "pointer",
    borderRadius:5
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
  date: { float: "right", fontWeight: "bold" },
  source: { flot: "left", fontWeight: "bold" },
};
