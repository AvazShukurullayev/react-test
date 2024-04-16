import {useState} from "react";
import {Button, Form, Modal, Spinner} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const UpdateModal = ({onUpdate,name, viewers}) => {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onUpdateFn = () => {
        setIsLoading(true)
        setTimeout(() => {
            handleClose()
            onUpdate()
            setIsLoading(false)
        }, 300)
    }

    return (
        <>
            <Button size="sm" variant="outline-success" onClick={handleShow}>
                <FontAwesomeIcon icon={faPen}/>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="form-update">
                        <Form.Group>
                            <Form.Label>Update name of movie</Form.Label>
                            <Form.Control type="text" placeholder={} name={} value={} onChange={} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Update viewers of movie</Form.Label>
                            <Form.Control type="number" placeholder={} name={} value={} onChange={} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" form="form-update" onClick={onUpdateFn} disabled={isLoading} type="submit">
                        {isLoading ? <><Spinner animation="border" size="sm"/> loading</> : "Save Changes"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

UpdateModal.propTypes = {
    onUpdate: PropTypes.func,
    name: PropTypes.string,
    viewers: PropTypes.number
}