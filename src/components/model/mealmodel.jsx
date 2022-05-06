<<<<<<< HEAD
import "./model.css";

import { BiChevronRight } from "react-icons/bi";

import { Link } from "react-router-dom";
=======
import "./model.css"
import { BiChevronRight } from "react-icons/bi";
>>>>>>> parent of 7075d97 (product page done)
function Mealmodel()
{
    return (<div className="meal_plans_model">Meal Plans<span className="arrowleft_shown"><BiChevronRight/></span> 

          <div className="meals_plan_hover">
              <div>
              <div><button>Weight Loss Meal Plan</button></div>
              <div><button>Maintanance Meal Plan </button></div>
              <div> <button>Atheletic Meal Plan </button></div>
              <div><button>Keto Meal Plan </button></div>
              <div> <button>Transformation challenges </button></div>
              </div>
          </div>
    </div>)
}

function Productsmodel()
{
<<<<<<< HEAD
  
    return (<div className="meal_plans_model">Products<span className="arrowleft_shown"><BiChevronRight/></span>

          <div className="meals_plan_hover">
              <div >
              <Link className="link_to_prdt_page" to="/productpage/vegan sweets">Vegan Sweets</Link>
              <Link className="link_to_prdt_page" to="/productpage/Low Calorie Sauces">  Low-Cal Sauces</Link>
               <Link className="link_to_prdt_page" to="/productpage/Nut butters">Nut Butters</Link>
              <Link  className="link_to_prdt_page" to="/productpage/Fresh Bakes">Fresh Bakes</Link>
            
              
=======
    return (<div className="meal_plans_model">Products<span className="arrowleft_shown"><BiChevronRight/></span>

          <div className="meals_plan_hover">
              <div>
              <div><button>Vegan Sweets</button></div>
              <div><button> Low-Cal Sauces </button></div>
              <div> <button>Nut Butters </button></div>
              <div><button>Fresh Bakes </button></div>
>>>>>>> parent of 7075d97 (product page done)
              
              </div>
          </div>
    </div>)
}

function Aboutmodel()
{
    return (<div className="meal_plans_model">About Us<span className="arrowleft_shown"><BiChevronRight/></span>

          <div className="meals_plan_hover">
              <div>
              <div><button>Our story</button></div>
              <div><button> FAQ</button></div>
              <div> <button>Testimonals</button></div>
              
              
              </div>
          </div>
    </div>)
}


export {Productsmodel,Aboutmodel}

export default Mealmodel