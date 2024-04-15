import {useState} from "react";
import {Button, Modal, Spinner} from "react-bootstrap";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export const LikedModal = ({onLikeItem}) => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onLikeItemFn = () => {
        setIsLoading(true)
        setTimeout(() => {
            onLikeItem()
            handleClose()
            setIsLoading(false)
        }, 300)
    }
    return (
        <>
            <Button variant="outline-info" size="sm" onClick={handleShow}>
                <FontAwesomeIcon icon={faStar} />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Liked modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>You are gonna put like, Are you agree?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={onLikeItemFn} disabled={isLoading}>
                        {isLoading ? <><Spinner animation='border' size='sm'/> Liking </> : 'Like'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

LikedModal.propTypes = {
    onLikeItem: PropTypes.func
}