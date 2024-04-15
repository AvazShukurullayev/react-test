import {Card, Col, Row} from "react-bootstrap";
import {SearchPanel} from "../search-panel/SearchPanel.jsx";
import {FilterPanel} from "../filter-panel/FilterPanel.jsx";

export const AppFilter = () => {
    return (
        <Row>
            <Col>
                <Card className="my-4 shadow">
                    <Card.Header>
                        <Card.Title>Sorting & filtering movies</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <SearchPanel />
                    </Card.Body>
                    <Card.Footer>
                        <FilterPanel />
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}