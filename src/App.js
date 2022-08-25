import './css/style.css';
import { BrowserRouter, Link} from "react-router-dom";
import Home from './Pages/Home';
import AppRouter from './Router/AppRouter';
//
function App() {
  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
 
  );
}

export default App;
