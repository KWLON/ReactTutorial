import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 style={{ color: "grey", backgroundColor: "black" }}>{title}</h1>
      <Button color="green" text="add" />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

// const headingStyle = {
//   color: 'grey',backgroundColor: 'black'
// }

export default Header;
