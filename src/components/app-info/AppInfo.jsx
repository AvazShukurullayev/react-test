import {Badge, Card, Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";

export const AppInfo = ({allMoviesLength, favouriteMoviesLength, mostViewedMoviesLength, likedMoviesLength}) => {
    return (
        <Row>
            <Col>
                <Card className="my-4 shadow">
                    <Card.Header>
                        <Card.Title>Information about movies</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col><Card.Text>Count of all movies: <Badge bg="dark">{allMoviesLength}</Badge></Card.Text></Col>
                            <Col><Card.Text>Count of favourite movies:  <Badge bg="dark">{favouriteMoviesLength}</Badge> </Card.Text></Col>
                            <Col><Card.Text>Count of liked movies:  <Badge bg="dark">{likedMoviesLength}</Badge></Card.Text></Col>
                            <Col><Card.Text>Count of most viewed movies: <Badge bg="dark">{mostViewedMoviesLength}</Badge></Card.Text></Col>
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