import {Form} from "react-bootstrap";

export const SearchPanel = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Searching movie</Form.Label>
                <Form.Control type="text" placeholder="Searching movie..." />
            </Form.Group>
        </Form>

    )
}