import {Badge, ButtonGroup, Col, Form, ListGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCookie, faStar} from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
import {UpdateModal} from "../update-modal/UpdateModal.jsx";
import {FavouriteModal} from "../favourite-modal/FavouriteModal.jsx";
import {DeleteModal} from "../delete-modal/DeleteModal.jsx";
import {LikedModal} from "../liked-modal/LikedModal.jsx";

export const MovieListItem = (props) => {
    const {name, viewers, favourite, liked, id, onDelete, onUpdate, onFavouriteItem, onLikeItem} = props
    console.log("MovieListItem props => ", props)
    return (
        <ListGroup.Item>
            <Row className="align-items-center">
                <Col xs={8} className="d-flex align-items-center justify-content-between">
                    <span>{name}</span>
                    <span className={"d-flex gap-2"}>{favourite && <Badge bg="warning" pill>
                        <FontAwesomeIcon icon={faCookie}/>
                    </Badge>} {liked && <Badge bg="info" pill>
                        <FontAwesomeIcon icon={faStar}/>
                    </Badge>}</span>
                </Col>
                <Col xs={4}>
                    <Row className={"align-items-center"}>
                        <Col xs={7}>
                            <Form.Control type="text" className='text-center' defaultValue={viewers}/>
                        </Col>
                        <Col xs={5}>
                            <ButtonGroup>
                                <UpdateModal onUpdate={onUpdate}/>
                                <FavouriteModal onFavouriteItem={() => onFavouriteItem(id)}/>
                                <LikedModal onLikeItem={() => onLikeItem(id)}/>
                                <DeleteModal onDelete={() => onDelete(id)}/>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}


MovieListItem.propTypes = {
    name: PropTypes.string,
    viewers: PropTypes.number,
    favourite: PropTypes.bool,
    liked: PropTypes.bool,
    id: PropTypes.string,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
    onFavouriteItem: PropTypes.func,
    onLikeItem: PropTypes.func,

}