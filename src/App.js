import logo from './logo.svg';
import './App.css';
import Header_fit_meals from './components/header';
import Bodypart from './components/body';
import Footer_part from './components/footer';

function App() {
  return (
    <div className="App">
      <Header_fit_meals />
      <Bodypart />
      <Footer_part />
    </div>
  );
}

export default App;
