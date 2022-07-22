import PropTypes from 'prop-types';
import './ItemButtons.scss';

function ItemButtons({ handleButtons, id }) {
  return (
    <div className="btn__container">
      <div>
        <button type="button" id={`plusBtn-${id}`} className="btn btn-primary me-1" onClick={(e) => handleButtons(e, id)}>
          <svg className="item__btn  h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
        <button type="button" id={`minusBtn-${id}`} className="btn btn-warning" onClick={(e) => handleButtons(e, id)}>
          <svg className="item__btn h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <button type="button" id={`deleteBtn-${id}`} className="btn btn-danger" onClick={(e) => handleButtons(e, id)}>
        <svg className="item__btn h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}

ItemButtons.propTypes = {
  handleButtons: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ItemButtons;
