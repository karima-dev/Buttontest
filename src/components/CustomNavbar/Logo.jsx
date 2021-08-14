import { logoProps } from "../../constants";
const Logo = ({
  url = logoProps.url,
  size = logoProps.default,
}) => <img src={url} width={size.width} height={size.height} />;
export default Logo;
