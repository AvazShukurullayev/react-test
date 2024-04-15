import {Button, ButtonGroup} from "react-bootstrap";

export const FilterPanel = () => {
    return (
        <ButtonGroup aria-label="Basic example">
            <Button variant="dark">All movies</Button>
            <Button variant="outline-dark">Favourite movies</Button>
            <Button variant="outline-dark">Liked movies</Button>
            <Button variant="outline-dark">Most viewed movies</Button>
        </ButtonGroup>
    )
}