import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { bgNavbar,variant,CLASSNAME_NAV,href,hrefText } from "../../constants";

const index = ({bg,variant,className,href,hrefText}) => {
    const {textHome,textFeatures,textPricing}=hrefText;
  return (
    <Navbar bg={bg} variant={variant}>
      <Container>
        <Navbar.Brand href={href}>Navbar</Navbar.Brand>
        <Nav className={className}>
          <Nav.Link href={href}>{textHome}</Nav.Link>
          <Nav.Link href={href}>{textFeatures}</Nav.Link>
          <Nav.Link href={href}>{textPricing}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default index;
