import {Badge, Card, Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";

export const AppInfo = ({allMoviesLength, favouriteMoviesLength, mostViewedMoviesLength, likedMoviesLength}) => {
    return (
        <Row>
            <Col>
                <Card className="my-4 shadow">
                    <Card.Header>
                        <h3>Information about movies</h3>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>Count of all movies: <Badge bg="dark">{allMoviesLength}</Badge></Card.Title>
                                <Card.Title>Count of favourite movies: <Badge bg="warning">{favouriteMoviesLength}</Badge></Card.Title>
                            </Col>
                            <Col>
                                <Card.Title>Count of liked movies: <Badge bg="info">{likedMoviesLength}</Badge></Card.Title>
                                <Card.Title>Count of most viewed movies: <Badge bg="success">{mostViewedMoviesLength}</Badge></Card.Title>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

AppInfo.propTypes = {
    allMoviesLength: PropTypes.number,
    favouriteMoviesLength: PropTypes.number,
    likedMoviesLength: PropTypes.number,
    mostViewedMoviesLength: PropTypes.number
}