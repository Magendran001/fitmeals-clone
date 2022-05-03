import "./mealplan.css"
import "./common.css"
function Mealplan()
{
    return (<div id="meal_plan_full_part">
        <div className="center_of_content display-flex">

               <div className="hungry_yet_meal_plan">
               <div>Hungry yet?</div>
            <div><h2>Choose your Meal Plan</h2></div>
               </div>
               <div className="button_meal_plan">
                   <div><button>Weight Loss Meal Plan</button></div>
                   <div><button>Athletic Meal Plan</button></div>
                   <div><button>Maintenance Meal Plan</button></div>
                   <div><button>Keto Meal Plan</button></div>
               </div>
            <div className="hungry_detailed_descr" >
                <div>
                    <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/weight.jpg" alt="" />
                </div>
                <div className="second_part_descr">
                    <h2>Weight Loss Meal Plan</h2>
                    <p>1200-1400 kcal</p>
                    <p>If your aim is to lose weight in a gradual, healthy manner then this diet would meet your requirements. The meals are well balanced and consist of complex carbohydrates, lean protein, healthy fats and generous portions of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet.</p>
                       <div> <button className="common_button ">viewplan</button></div>
                       
                </div>
            </div>
            
            
            
        </div>
    </div>)
}
export default Mealplan