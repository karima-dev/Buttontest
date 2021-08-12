import "./App.css";
import Butt from "./components/CustomButton";
import {ColorBoutonBootstrap} from './constants';
import { TextBoutonBootstrap } from "./constants";
 
const App = () => {
  return(
    <div>
<Butt color={ColorBoutonBootstrap.success} text={TextBoutonBootstrap.success}/><br></br><br></br>
<Butt color={ColorBoutonBootstrap.primary} text={TextBoutonBootstrap.primary}/>
    </div>
  );
};

export default App;
