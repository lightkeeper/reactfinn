import "./App.css";
import React from "react";
import Header from "./components/header";
import NewsList from "./components/news-list";
import Profile from "./components/profile";
import Peers from "./components/peers";
import Spinner from "./components/spinner";

/**
 * 1. Header should always show
 * 2. If fetching new ticker info then show a loading spinner otherwise show the Home component
 * 3. Fetch news, profile, peers & qoute and pass them to the their components 
 */

const Home = () => {
  return (
    <div style={styles.main}>
      <div style={styles.profile}>
        <Profile />
        <Peers />
      </div>
      <div style={styles.news}>
        <NewsList />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
};

export default App;

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
    flex: "50%",
    marginTop: 2,
    padding: 10,
    border: "1px solid #EEE",
    background: "#F7F9FD",
    marginRight: 30,
  },
  news: {
    flex: "50%",
    padding: 20,
    marginTop: 2,
    marginLeft: 3,
    border: "1px solid #EEE",
    background: "#F7F9FD",
  },
};
