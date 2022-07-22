import PropTypes from 'prop-types';
import Item from '../Item';

function ItemList({ equipementList, handleButtons }) {
  return (
    <>
      {equipementList.map((equipement) => (
        <Item
          {...equipement}
          handleButtons={handleButtons}
          key={equipement.id}
        />
      ))}
    </>
  );
}

ItemList.propTypes = {
  equipementList: PropTypes.array.isRequired,
  handleButtons: PropTypes.func.isRequired,
};

export default ItemList;
