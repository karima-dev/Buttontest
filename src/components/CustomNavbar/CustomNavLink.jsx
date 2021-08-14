import Nav from 'react-bootstrap/Nav';
const CustomNavLink = ({ link, text }) => {
  return <Nav.Link href={link}>{text}</Nav.Link>;
};
export default CustomNavLink;
