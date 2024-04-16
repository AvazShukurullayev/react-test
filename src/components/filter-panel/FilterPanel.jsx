import {Button, ButtonGroup} from "react-bootstrap";
import PropTypes from "prop-types";
import {useState} from "react";

export const FilterPanel = ({onFilter, filter}) => {
    const [btns, setBtns] = useState([
        {name: "all", label: "All movies"},
        {name: "favourite", label: "Favourite movies"},
        {name: "liked", label: "Liked movies"},
        {name: "mostViewed", label: "Most viewed movies"},
    ])
    return (
        <ButtonGroup aria-label="Basic example">
            {
                btns.length ? btns.map(btn => (<Button
                        key={btn.name}
                        variant={filter === btn.name ? 'dark' : 'outline-dark'}
                        onClick={() => onFilter(btn.name)}
                    >
                        {btn.label}
                    </Button>))
                    :
                    'Not found buttons...'
            }
        </ButtonGroup>
    )
}

FilterPanel.propTypes = {
    onFilter: PropTypes.func,
    filter: PropTypes.string,
}