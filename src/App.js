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
import { WeightLossMealPlan } from './components/mealplans/weightlossmealplan';
import { MaintenanceMealPlan } from "./components/mealplans/maintenancemealplan"
import { AthleticPlan } from "./components/mealplans/athleticmealplan"
import { KetoMealPlan } from "./components/mealplans/ketomealplan.jsx"
import { Health_coaching } from "./components/Health_coaching.jsx";





function App() {
  return (
    <div className="App">
      <Header_fit_meals />

      <Routes>
        <Route path='/' element={<><Bodypart /></>}></Route>
        <Route path='/productpage' element={<><Productpage /></>}></Route>
        <Route path='/productpage/:name' element={<><Productpage /></>}></Route>
        <Route path='/weightlossmealplan' element={<WeightLossMealPlan></WeightLossMealPlan>} />
        <Route path='/maintenancemealplan' element={<MaintenanceMealPlan></MaintenanceMealPlan>} />
        <Route path='/athleticmealplan' element={<AthleticPlan></AthleticPlan>} />
        <Route path='/Ketomealplan' element={<KetoMealPlan></KetoMealPlan>} />

        <Route path='/healthcoaching' element={< Health_coaching />} />



      </Routes>

      <Footer_part />
    </div>
  );
}

export default App;
