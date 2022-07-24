import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ResultItem from '../ResultItem';

function ModalError({ onHide }) {
  return (
    <>
      <Modal.Body>
        <h4 className="alert alert-danger text-center">Veuillez choisir une quantitée</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </>
  );
}

function ModalCentered(props) {
  // const [isInfoShowed, setIsInfoShowed] = useState(false);
  const isEquipSelected = props.equipements.length === 0;
  const isTubeSelected = props.tube !== '';
  const toMutchEquipmeent = props.diamgeneralmin === undefined;

  // const handleShowInfo = () => {
  //   setIsInfoShowed(true);
  // };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {isEquipSelected
        ? <ModalError onHide={props.onHide} />
        : (
          <>
            <Modal.Header closeButton className="text-center">
              <Modal.Title id="contained-modal-title-vcenter">
                Votre installation
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5 className="text-center">Liste des équipements</h5>
              <ul className="ps-0">
                {props.equipements.map((equip) => (
                  <ResultItem {...equip} tube={props.tube} key={equip.name} />
                ))}
              </ul>
              <hr />
              <h5 className="text-center">Alimentation générale</h5>
              {toMutchEquipmeent && <p className="text-center">Vous disposez de trop d'équipements pour cette méthode de dimensionnement, la méthode collective serait plus adéquate</p>}
              {!toMutchEquipmeent && isTubeSelected && <p className="text-center">La canalisation minimal requise pour alimenter l'ensemble des équipements est : <br /> <strong>{props.tube} {props.diamgeneralmin}</strong></p> }
              {!toMutchEquipmeent && !isTubeSelected && (
              <>
                <p className="text-center">La diamètre intérieur minimal de la canalisation nécessaire à alimenter l'ensemble des équipements est : <br /> <strong>{props.tube} {props.diamgeneralmin} mm</strong></p>
                {/* <a href="#" onClick={handleShowInfo}>En savoir plus</a>
                <Info show={isInfoShowed} onHide={() => setIsInfoShowed(false)} /> */}
              </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </>
        )}
    </Modal>
  );
}

ModalCentered.propTypes = {
  tube: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
  equipements: PropTypes.array.isRequired,
};

export default ModalCentered;
