import PropTypes from 'prop-types';
import Button from '../UI/Button';

function CalcZone({ resetValue, onCalc }) {
  return (
    <div className="text-center">
      <Button onClick={onCalc} className="d-block m-auto mb-2 btn-primary">Calculer</Button>
      <Button onClick={resetValue} className="d-block m-auto btn-danger">Reset</Button>
    </div>
  );
}

CalcZone.propTypes = {
  resetValue: PropTypes.func.isRequired,
  onCalc: PropTypes.func.isRequired,
};

export default CalcZone;
