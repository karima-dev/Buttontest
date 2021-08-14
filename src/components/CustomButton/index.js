 import Button from 'react-bootstrap/Button';
 import {ColorBoutonBootstrap} from '../../constants';
import { TextBoutonBootstrap } from '../../constants';
 
 /* const Button2 = (props) => {
  return <Button variant={props.color}>{props.text}</Button>;
};
Button2.defaultProps = {
    text: TextBoutonBootstrap.success,
   };
   Button2.defaultProps = {
    text: ColorBoutonBootstrap.success,
   }; */

   //m2
   /* const Button2=({color=ColorBoutonBootstrap.secondary,text=TextBoutonBootstrap.primary})=>{
    return <Button variant={color}>{text}</Button>;
   } */

   //m3 spread
   const Button2 = (props) => {
     const {color,text}=props;
    return <Button variant={color}>{text}</Button>;
  };
  Button2.defaultProps = {
      text: TextBoutonBootstrap.success,
     };
     Button2.defaultProps = {
      text: ColorBoutonBootstrap.success,
     }; 

export default Button2;
