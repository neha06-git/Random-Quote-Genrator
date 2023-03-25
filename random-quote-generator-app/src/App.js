import './index.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BookMark from './Components/BookMark';
import Home from './Components/Home';

function App() {
  return (
    // 
    <div className="App">

         <Router>
          <div className='flex-container'>
            <div><Link to="/"  className='flex-left'>Home</Link></div>
            <div><Link to="/bookmark"  className='flex-right'>Bookmark</Link></div>
          </div>
         <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/BookMark" exact component={BookMark} />
         </Switch>
         </Router>
        
    </div>
    
  );
}

export default App;

