import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Info({ show, onHide }) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      info Modal
      <Button onClick={onHide}>Close</Button>
    </Modal>
  );
}

export default Info;
