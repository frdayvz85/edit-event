import { Header, HeaderName } from "carbon-components-react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="IBM">
        Watson Media
      </HeaderName>
    </Header>
  );
};

export default Navbar;
