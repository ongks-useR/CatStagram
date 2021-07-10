import { Card, Col, Row } from 'react-bootstrap';
import {
    Link,
} from "react-router-dom";

function FeedCard(props) {
    return (
        <Col sm={4}>
            <Card style={{ width: "100%", marginBottom: "20px" }}>
                <Card.Img variant="top" src={props.fact.image.url} />
                <Card.Body>
                    <Card.Title>{props.fact.name}</Card.Title>
                    <Card.Text>
                        {props.fact.description}
                    </Card.Text>
                    <Link to={"/profile/" + props.fact.id}>Profile</Link>
                </Card.Body>
            </Card>
        </Col >
    );
}

export default FeedCard;