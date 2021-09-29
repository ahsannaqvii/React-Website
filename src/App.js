
import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home/Home';
import Pricing from './components/pages/Home/Pricing';
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
      {/* <Pricing/> */}
    </Router>
  );
}

export default App;
