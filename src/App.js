import './App.css';
import Header from './components/header'
import NewsItem from './components/news-item';
import NewsList from './components/news-list';
import Profile from './components/profile';

function App() {
  return (
    <div className="app">
      <Header />
      <Profile />
      <NewsList>
        <NewsItem />
      </NewsList>
    </div>
  );
}

export default App;
