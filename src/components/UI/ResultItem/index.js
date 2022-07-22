import PropTypes from 'prop-types';
import './ResultItem.scss';

function ResultItem({
  name,
  diamMin,
  tube,
  recommandedTube,
  diamEvac,
}) {
  return (
    <li className="mb-3 list-item">
      <div>
        <h5 className="text-center">{name}</h5>
        <section className="ms-1">
          <h6 className="text-decoration-underline">Alimentation en eau</h6>
          <p className="mb-1">Diamètre intérieur minimal : <strong>{diamMin} mm</strong></p>
          { (tube !== '') && <p>Tube recommandé ( Øext x épaisseur ) : <strong>{tube} {recommandedTube}</strong></p> }
        </section>
        <section className="ms-1">
          <h6 className="text-decoration-underline">Evacuation d'eau</h6>
          <p>Diamètre d'évacuation recommandé : <strong>PVC Ø{diamEvac} mm </strong></p>
        </section>
      </div>
    </li>
  );
}

ResultItem.propTypes = {
  name: PropTypes.string.isRequired,
  diamMin: PropTypes.number.isRequired,
  tube: PropTypes.string.isRequired,
  recommandedTube: PropTypes.string,
  diamEvac: PropTypes.number.isRequired,
};

export default ResultItem;
