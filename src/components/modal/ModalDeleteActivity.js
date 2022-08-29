import { Icon } from '@iconify/react';
import Modal from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import { useState } from 'react';

const ModalDelete = (props) => {
    const handleClick = (id) => {
        props.delete(id);
        handleClose();
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button data-cy="activity-item-delete-button" className="btn-icon" onClick={handleShow}>
            <Icon icon="material-symbols:delete-outline" color="#c4c4c4" width="30" height="30" />
        </Button>
        <Modal
            show={show}
            onHide={handleClose}
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal-delete"
            data-cy="modal-delete"
        >
            <Modal.Body className="text-center">
                <div className="mb-3" data-cy="modal-delete-icon">
                    <Icon icon="akar-icons:triangle-alert" color="#ed4c5c" width="140" height="100" />
                </div>
                <span className="d-block">Apakah anda yakin menghapus activity </span>
                <strong>“{props.title}”?</strong>
                <div className="d-flex justify-content-center mt-5">
                    <Button
                        onClick={handleClose}
                        className="btn-cancel px-5 py-2 me-3"
                        data-cy="modal-delete-cancel-button"
                    >
                        Hapus
                    </Button>
                    <Button
                        onClick={() => handleClick(props.id)}
                        className="btn-confirm px-5 py-2"
                        data-cy="activity-item-delete-button"
                    >
                        Hapus
                    </Button>
                </div>
                
            </Modal.Body>
        </Modal>
        </>
    )
}

export default ModalDelete;