import "./App.css";
//import CustomInput from "./components/CustomInput"; //nommer avec le nom su composant
import CustomNavbar from "./components/CustomNavbar";
import { navLinks } from "./constants";
import Logo from './components/CustomNavbar/Logo';
const App = () => {
  return (
    <div>
      <CustomNavbar links={navLinks} logo={<Logo/>}/>
    </div>
  );
};

export default App;
