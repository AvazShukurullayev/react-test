import {Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";
import PropTypes from "prop-types";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

export const MovieAddForm = ({onCreate}) => {
    const [item, setItem] = useState({name: "", viewers: ""})
    const [isLoading, setIsLoading] = useState(false)
    const inputHandler = (e) => setItem(prevState => ({...prevState, [e.target.name]: e.target.value}))
    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (item.name.trim() && item.viewers.trim()) {
            setIsLoading(true)
            setTimeout(() => {
                const newItem = {
                    name: item.name,
                    viewers: Number(item.viewers),
                    favourite: false,
                    liked: false,
                    id: uuidv4()
                }
                onCreate(newItem)
                setItem({name: "", viewers: ""})
                setIsLoading(false)
            }, 300)
        }
    }
    return (
        <Row>
            <Col>
                <Card className="my-4 shadow">
                    <Card.Header>
                        <Card.Title>Add movie</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={onSubmitHandler}>
                            <Row>
                                <Col xs={5}>
                                    <Form.Control type="text" required placeholder="Enter name of movie" name="name"
                                                  onChange={inputHandler} value={item.name}/>
                                </Col>
                                <Col xs={5}>
                                    <Form.Control type="number" required placeholder="Enter how many times viewed"
                                                  name="viewers"
                                                  onChange={inputHandler} value={item.viewers}/>
                                </Col>
                                <Col xs={2}>
                                    <Button type="submit" className="w-100" variant="outline-dark" disabled={isLoading}>
                                        {isLoading ? <><Spinner animation={"border"} size={"sm"}/> Adding</> : 'Add'}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

MovieAddForm.propTypes = {
    onCreate: PropTypes.func
}