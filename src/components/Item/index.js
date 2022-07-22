import PropTypes from 'prop-types';
import './Item.scss';
import ItemButtons from './ItemButtons';

function Item({
  name,
  count,
  id,
  handleButtons,
}) {
  return (
    <form className="d-flex flex-column item mb-1 align-items-center position-relative">
      <label htmlFor={id} className="form-label text-center d-flex mb-0 justify-content-center align-items-center mb-2 fw-bold text-decoration-underline">
        {name}
      </label>
      <div className="d-flex justify-content-center">
        <input
          className="form-control text-center"
          id={id}
          name={name}
          type="number"
          min="0"
          value={count}
          onChange={(e) => {
            handleButtons(e, id);
          }}
        />

        <ItemButtons handleButtons={handleButtons} id={id} />
      </div>
    </form>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  handleButtons: PropTypes.func.isRequired,
};

export default Item;
