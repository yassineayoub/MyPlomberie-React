import PropTypes from 'prop-types';
import './Select.scss';

function SelectTube({
  tubesList,
  selectedTube,
}) {
  return (
    <form className="d-flex">
      <select
        className="form-select text-center"
        onChange={(e) => {
          selectedTube(e.currentTarget.value);
        }}
      >
        <option value="default">Sélectionner un matériau</option>
        {tubesList.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </form>
  );
}

SelectTube.propTypes = {
  tubesList: PropTypes.array.isRequired,
  selectedTube: PropTypes.func.isRequired,
};

export default SelectTube;
