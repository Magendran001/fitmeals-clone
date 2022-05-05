
import "./css/body.css"
import Slider from "./slider";
import FoodlifeStyletip from "./foodlifestyle";
import Benefitsfoodmeal from "./benefitsfoodstyle";
import Mealplan from "./mealplan";
 import Trailplan from "./trailplan";
 import SimpleSlider from "./clientdairies.jsx";
 import Productpage from "./productpage";
import { useContext, useEffect, useState } from "react";



import { mycontext } from "../redux/contextprovider";

function Bodypart()
{
    
      let [pages,setpages] = useState("")
      let bodypages = useContext(mycontext);
      console.log(bodypages,"bodypages");

        useEffect(()=>{
            setpages(bodypages.pages);
            console.log(pages,"pag")
        },[pages])

    return (<div id="total-body-part">

             
              <Slider/>
              <FoodlifeStyletip/>
              <Benefitsfoodmeal/>
              
              <Mealplan/>
                
               
               
             
               
               


    </div>)
}

export default Bodypart