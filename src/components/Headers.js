import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={{ color: "grey", backgroundColor: "black" }}>{title}</h1>
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
