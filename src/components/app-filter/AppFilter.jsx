import {Card, Col, Row} from "react-bootstrap";
import {SearchPanel} from "../search-panel/SearchPanel.jsx";
import {FilterPanel} from "../filter-panel/FilterPanel.jsx";
import PropTypes from "prop-types";

export const AppFilter = ({onSearch, onFilter,filter}) => {
    return (
        <Row>
            <Col>
                <Card className="my-4 shadow">
                    <Card.Header>
                        <Card.Title>Sorting & filtering movies</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <SearchPanel onSearch={onSearch} />
                    </Card.Body>
                    <Card.Footer>
                        <FilterPanel onFilter={onFilter} filter={filter}/>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

AppFilter.propTypes = {
    onSearch: PropTypes.func,
    onFilter: PropTypes.func,
    filter: PropTypes.string,
}