import logo from './logo.svg';
import './App.css';
import Header_fit_meals from './components/header';
import Bodypart from './components/body';
import Footer_part from './components/footer';
import {
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Productpage from './components/productpage';

function App() {
  return (
    <div className="App">
      <Header_fit_meals />
      <Routes>
        <Route path='/' element={<><Bodypart /></>}></Route>
        <Route path='/productpage/:name' element={<><Productpage /></>}></Route>

      </Routes>

      <Footer_part />


    </div>
  );
}

export default App;
