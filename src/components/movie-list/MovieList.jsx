import {Card, Col, ListGroup, Row} from "react-bootstrap";
import {MovieListItem} from "../movie-list-item/MovieListItem.jsx";
import PropTypes from "prop-types";

export const MovieList = (props) => {
    const {data, onDelete, onUpdate, onFavouriteItem, onLikeItem} = props
    console.log("MovieList data => ", data)
    return (
        <Row>
            <Col>
                <Card className="my-4 shadow">
                    <Card.Header>
                        <Card.Title>List of movies</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <ListGroup>
                            {
                                data.length ? data.map((item, index) => (<MovieListItem
                                        key={item.id}
                                        {...item}
                                        index={index}
                                        onDelete={onDelete}
                                        onUpdate={onUpdate}
                                        onFavouriteItem={onFavouriteItem}
                                        onLikeItem={onLikeItem}
                                    />))
                                    : <p className="text-center m-0">No data</p>
                            }
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}


MovieList.propTypes = {
    data: PropTypes.array,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
    onFavouriteItem: PropTypes.func,
    onLikeItem: PropTypes.func,
}