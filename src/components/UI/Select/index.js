import PropTypes from 'prop-types';
import './Select.scss';

function Select({
  data,
  selectedEquipement,
  insertEquipement,
}) {
  return (
    <form className="d-flex mb-2" onSubmit={insertEquipement}>
      <select className="form-select text-center" onChange={selectedEquipement}>
        {data.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
      </select>
      <button type="submit" className="btn btn-primary d-flex align-items-center gap-1 ms-2">
        <svg style={{ height: '35px' }} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
        Ajouter
      </button>
    </form>
  );
}

Select.propTypes = {
  data: PropTypes.array.isRequired,
  insertEquipement: PropTypes.func.isRequired,
  selectedEquipement: PropTypes.func.isRequired,
};

export default Select;
