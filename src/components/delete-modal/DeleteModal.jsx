import {useState} from "react";
import {Button, Modal, Spinner} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import PropTypes from "prop-types";

export const DeleteModal = ({onDelete}) => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onDeleteItem = () => {
        setIsLoading(true)
        setTimeout(() => {
            onDelete()
            handleClose()
            setIsLoading(false)
        }, 300)
    }

    return (
        <>
            <Button size="sm" variant="outline-danger" onClick={handleShow}>
                <FontAwesomeIcon icon={faTrash}/>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>You are gonna delete item, Are you agree?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={onDeleteItem} disabled={isLoading}>
                       <span className="d-flex align-items-center gap-2">{isLoading ? <><Spinner animation="border" size={"sm"} /> Deleting</> : "Delete"}</span>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
DeleteModal.propTypes = {
    onDelete: PropTypes.func
}
