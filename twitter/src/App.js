
import './App.css';
import Sidebar from './components/Sidebar';
import Tweet from './components/Tweet';
import Trend from './components/Trend';

function App() {
  return (
    <div className="twitter">
      <Sidebar/>
      <Tweet/>
      <Trend/>

    </div>
  );
}

export default App;
