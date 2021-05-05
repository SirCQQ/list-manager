
import './App.css';
import {  
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import List from "./components/List"
import Item from './components/Item'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/item/' exact component={Item} />
        <Route path='/'exact component={List} />
      </Router>
    </div>
  );
}

export default App;
