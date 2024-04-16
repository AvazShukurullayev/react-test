import {Form} from "react-bootstrap";
import PropTypes from "prop-types";
import {useState} from "react";

export const SearchPanel = ({onSearch}) => {
    const [term, setTerm] = useState("")

    const onSearchHandler = (e) => {
        const newTerm = e.target.value
        setTerm(newTerm)
        onSearch(newTerm)
    }

    return (
        <Form.Group>
            <Form.Label>Searching movie</Form.Label>
            <Form.Control type="text"
                          placeholder="Searching movie..."
                          onChange={onSearchHandler}
                          value={term}
            />
        </Form.Group>
    )
}

SearchPanel.propTypes = {
    onSearch: PropTypes.func
}