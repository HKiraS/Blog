import './styles/App.css';
import { Header } from './components/header';
// import { Button } from './components/Button';
import { RecentPosts } from './components/RecentPosts';
// import { Exemplo } from './components/exemplo';
import AnotherPosts from './components/AnotherPosts';

function App() {
  return (
    <div className="App">
      <Header />
      <RecentPosts />
      <AnotherPosts />
    </div>
  );
}

export default App;
