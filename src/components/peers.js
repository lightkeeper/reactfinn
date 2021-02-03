import React from "react";

const Peers = ({ peers = [] }) => {
  return (
    <div style={styles.container}>
      <span style={styles.heading}>Peers</span>
      {peers.map((p, i) => {
        return (
          <span key={i} style={styles.peer}>
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Peers;

const styles = {
  container: {
    border: "1px solid #CCC",
    padding: 10,
    margin: 10,
    background: "#FFF",
    borderRadius: 5,
    cursor: "pointer",
  },
  heading: {
    marginRight: 20,
    fontWeight: "bold",
    color: "#333",
  },
  peer: {
    marginRight: 5,
    padding: "2px 15px",
    background: "#DDEBF7",
    color: "#425A70",
    fontWeight: "bold",
    border: "1px solid #DDEBF7",
    borderRadius: 30,
  },
};
