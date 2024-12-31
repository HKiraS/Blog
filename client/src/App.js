import './styles/App.css';
import { Header } from './components/header';
// import { Button } from './components/Button';
import { RecentPosts } from './components/RecentPosts'; 
// import { Exemplo } from './components/exemplo';


function App() {
  return (
    <div className="App">
      <Header />
    <RecentPosts />
    {/* <Exemplo /> */}
    </div>
  );
}

export default App;
