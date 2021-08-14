import "./App.css";
//import CustomInput from "./components/CustomInput"; //nommer avec le nom su composant
import CustomNavbar from "./components/CustomNavbar";
import { bgNavbar, variant, CLASSNAME_NAV, href, hrefText } from "./constants";
//import { textInputProps } from "./constants";
//import { textInputProps2 } from "./constants";
/* import Butt from "./components/CustomButton";
import {ColorBoutonBootstrap} from './constants';
import { TextBoutonBootstrap } from "./constants"; */

const App = () => {
  return (
    <div>
      <h5>Email adress</h5>
      {/* <Butt color={ColorBoutonBootstrap.success} text={TextBoutonBootstrap.success}/><br></br><br></br>
<Butt color={ColorBoutonBootstrap.primary} text={TextBoutonBootstrap.primary}/>
<Butt text={TextBoutonBootstrap.secondary}/>
<Butt color={ColorBoutonBootstrap.info}/> */}
      {/* <CustomInput
        type={textInputProps2.email.type}
        placeholder={textInputProps2.email.placeholder}
      />
      <CustomInput type={textInputProps2.password.type} /> */}
      <CustomNavbar
        bg={bgNavbar.light}
        variant={variant.light}
        className={CLASSNAME_NAV}
        href={href.home}
        hrefText={(hrefText.home, hrefText.features, hrefText.pricing)}
      />
    </div>
  );
};

export default App;
