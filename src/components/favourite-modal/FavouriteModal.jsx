import {Button, Modal, Spinner} from "react-bootstrap";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCookie} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const FavouriteModal = ({onFavouriteItem}) => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onFavouriteItemFn = () => {
        setIsLoading(true)
        setTimeout(() => {
            onFavouriteItem()
            handleClose()
            setIsLoading(false)
        }, 300)
    }

    return (
        <>
            <Button size="sm" variant="outline-warning" onClick={handleShow}>
                <FontAwesomeIcon icon={faCookie}/>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>You are gonna favourite, Are you agree?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={onFavouriteItemFn} disabled={isLoading}>
                        {isLoading ? <><Spinner animation="border" size="sm"/> loading</> : "Favourite"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

FavouriteModal.propTypes = {
    onFavouriteItem: PropTypes.func
}