import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { customNavbarProps } from "../../constants";
import CustomNavLink from "./CustomNavLink";

const index = ({
  bg = customNavbarProps.defaults.background,
  variant = customNavbarProps.defaults.variant,
  navHome = customNavbarProps.defaults.navHome,
  className = customNavbarProps.defaults.classeName,
  links = customNavbarProps.defaults.navLinks,
  logo=customNavbarProps.defaults.logo,
}) => {
  return (
    <Navbar bg={bg} variant={variant}>
      <Container>
        <Navbar.Brand href={navHome}>{!logo}</Navbar.Brand>
        <Nav className={className}>
          {links.map((item) => (
            <CustomNavLink href={item.link} text={item.text}></CustomNavLink>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};
export default index;
