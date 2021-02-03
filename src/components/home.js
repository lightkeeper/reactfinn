import React from 'react'

const Home = () => (
  <div style={styles.main}>
    <div style={styles.profile}>
      <span>profile</span>
      <span>peers</span>
    </div>
    <div style={styles.news}>
      <span>news</span>
    </div>
  </div>
)

export default Home

const styles = {
  main: {
    display: "flex",
    flexDirection: "row",
    background: "#FFF",
    padding: "10px 20px",
    borderTop: "1px solid #EEE",
    minHeight: 900,
  },
  profile: {
    flex: 1,
    marginTop: 2,
    padding: 10,
    border: "1px solid #EEE",
    background: "#F7F9FD",
    marginRight: 30,
  },
  news: {
    flex: 1,
    padding: 20,
    marginTop: 2,
    marginLeft: 3,
    border: "1px solid #EEE",
    background: "#F7F9FD",
  },
}