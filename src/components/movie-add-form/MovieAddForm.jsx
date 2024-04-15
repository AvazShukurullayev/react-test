import {Button, Card, Col, Form, Row} from "react-bootstrap";

export const MovieAddForm = () => {
    return (
        <Row>
            <Col>
                <Card className="my-4 shadow">
                    <Card.Header>
                        <Card.Title>Add movie</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col xs={5}>
                                    <Form.Control type="text" placeholder="Enter name of movie"/>
                                </Col>
                                <Col xs={5}>
                                    <Form.Control type="number" placeholder="Enter how many times viewed"/>
                                </Col>
                                <Col xs={2}>
                                    <Button type="submit" className="w-100" variant="outline-dark">Add</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}