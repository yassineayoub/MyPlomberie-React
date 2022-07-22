import Proptypes from 'prop-types';

function Button({ className, children, onClick }) {
  const classes = `${className} btn`;
  return (
    <button onClick={onClick} className={classes} type="submit">{children}</button>
  );
}

Button.propTypes = {
  className: Proptypes.string.isRequired,
  children: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
};

export default Button;
