import Form from "react-bootstrap/Form";
import { textInputProps } from "../../constants";
import { textInputProps2 } from "../../constants";

const {
  defaults: { placeholder: placeholders, type: types}
} = textInputProps2;
const index = ({
  type = types,
  placeholder = placeholders,
}) => (
  <Form>
    <Form.Control type={type} placeholder={placeholder} />
  </Form>
);

export default index;
//fonction il faut nomer index ou nom du composant(dossier) et miniscule