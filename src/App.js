import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Home from './containers/home/Home';
import Host from './containers/host/Host';
import Join from './containers/join/Join';


function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Route path='/' exact component={Home}/>
          <Route path='/host' component={Host}/>
          <Route path='/join' component={Join}/>
        </header>
      </div>
    </Router>
    
  );
}

export default App;
