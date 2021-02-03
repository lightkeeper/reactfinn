import './App.css';
import Header from './components/header'
import NewsList from './components/news-list';
import Profile from './components/profile';

function App() {
  return (
    <div className="app">
      <Header />
      <div style={styles.main}>
      <div style={styles.profile}>
      <Profile />
      </div>
      <div style={styles.news}>
        <h2>News</h2>
      <NewsList />
      </div>

      </div>
    </div>
  );
}

export default App;


const styles = {
  main:{
     display:'flex',
    flexDirection: 'row',
    background: '#FFF',
    padding:'10px 20px',
    borderTop:'1px solid #EEE',
    minHeight:900
  },
  profile:{
    flex: '50%',
    marginTop:5,
    padding: 10,
    border: '1px solid #EEE',
    background: '#FFF',
  },
  news:{
    flex:'50%',
    padding: 10,
    marginTop:5,
    marginLeft:3,
    border: '1px solid #EEE',
    background: '#F7F9FD',
  }
}