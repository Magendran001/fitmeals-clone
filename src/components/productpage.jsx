import "./css/productpage.css";
import "./common.css"
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Productpage()
{
    let {name} = useParams();
    console.log(name)

     let [products,setproduct] = useState([]);
      let [currentpagetitle,setcurrentpagetitle] = useState(name);

      let [sort,sortproduct] = useState([]);

      useEffect(()=>{
            
        setcurrentpagetitle(name)

       },[name])
      
      useEffect(()=>{
            
        async function getdata()
        {
            let x = await fetch(`http://localhost:9083/products/${currentpagetitle}`);
             let y = await x.json();
             setproduct(y)
            
        }
        getdata()

      },[currentpagetitle])
     
   
        
      useEffect((()=>{

        async function getsortdata()
        {
            let x = await fetch(`http://localhost:9083/products/${currentpagetitle}/${sort}`);
             let y = await x.json();
             setproduct(y)
            
        }   
        getsortdata()

      }),[sort])




       function sortingproductvalue(e)
       {
           
            
          let {value} = e.target;


           if(value=="high")
           {
            sortproduct(-1)
           }
           if(value =="low")
           {
            sortproduct(1)
           }
           
           
       }



    return (<div id="total_product_page">
            
              <div id="title_of_products_div">
               <h1>{currentpagetitle}</h1>

            </div>

            <div id="fitclone_product_display_whole" >
                   <div className="center_of_content fitclone_product_display"  >
                <div className="product_categories_whole">
                    <div className="input_value_search"><input type="text" name="" id="" placeholder="Search" />
                       <div><IoIosSearch/></div>
                    </div>
                    <div className="product_categories">
                        <h1>Product categories</h1>
                        <div>Diet Plans</div>
                        <div>Meal Plans</div>
                        <div className="products_list"> Products
                            <div>Dishes</div>
                            <div>Fresh Bakes</div>
                            <div>Low Calorie Sauces</div>
                            <div>Nut Butters</div>
                            <div>Vegan sweets</div>

                        </div>
                    </div>
                    <div className="cart_total_items">
                              <h1>Cart</h1>
                    </div>


                </div>
                <div className="display_product_categories_right_whole">
                    <div className="sorting_div">
                        <div>Showing 1–6 of 10 result</div>
                        <div>Default sorting</div>
                        <div>
                            <select name="sorting_prdt" className="sorting_product" onChange={(e)=>{sortingproductvalue(e)}}>
                                <option value="">Default sorting</option>
                                <option value="low">Sort by price:low to high</option>
                                <option value="high">Sort by price:high to low</option>
                                
                            </select>
                            
                        </div>
                       
                    </div>
                    <div className="display_product_categories_right">
                        {products.map((ele)=>{ return < Eachproduct data={ele} />}) }
                                
                                  
                    </div>

                </div>
                </div>

            </div>
    </div>)
}


 function Eachproduct({data})
 {
     return (<div className="display_product_categories_right_each">
     <div> <img src={data.image} alt="" /></div>
     <div><h2>{data.title}</h2></div>
     <div><p className="description_prdt">{data.description}</p></div>
     
     <div><p>₹{data.price}</p></div>
     <div><button className="select_option_prdt-btn">select option</button></div>
     <div>Read more</div>
 </div>
 )
 }

export default Productpage