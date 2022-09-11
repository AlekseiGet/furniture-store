import './css/style.css';
import { BrowserRouter, Link} from "react-router-dom";
import AppRouter from './Router/AppRouter';
import { EntranceContext } from './context/context';
import { useEffect, useState } from 'react';
//
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [choiceFurniture, setChoiceFurniture] = useState("");
  const [burgerClass, setBurgerClass] = useState("bar_box_tool");
  const [reviewsSee, setReviewsSee] = useState("");
   
 useEffect(() => {
       if (localStorage.getItem( 'auth') ) {
         setIsAuth(true) 
       }
       setIsLoading(false)
   },[] )

  return (  
     <EntranceContext.Provider value={{
      isAuth,
      setIsAuth,
      isloading,
      choiceFurniture,
      setChoiceFurniture,
      burgerClass, 
      setBurgerClass,
       reviewsSee,
      setReviewsSee 
    }} > 
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
 </EntranceContext.Provider>
  );
}

export default App;
