import Modal from 'react-bootstrap/Modal';

interface Props {
  children: React.ReactNode;
  show: boolean;
  heading: string;
  setShow: (arg: boolean) => void;
}

const CustomModal = ({ children, show: isShow, setShow, heading }: Props): JSX.Element => (
  <Modal show={isShow} onHide={() => setShow(false)} backdrop="static" centered>
    <Modal.Header closeButton>
      <Modal.Title>{heading}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
  </Modal>
);

export default CustomModal;
