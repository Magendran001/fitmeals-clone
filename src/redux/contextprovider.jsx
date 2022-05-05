
import {createContext, useState} from "react";

const mycontext = createContext();
export {mycontext}

function Contextprovider({children})
{
  let [pages,setpages] = useState();

     function setchange(value)
     {
        setpages(value)
     }

    return (<mycontext.Provider value={{pages,setchange}}>{children}</mycontext.Provider>)
}

export default Contextprovider