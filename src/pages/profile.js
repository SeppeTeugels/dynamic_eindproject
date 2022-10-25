import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {USERS_DATA} from "../data/data";

export default function ProfilePage() {
    const user = USERS_DATA[0]
    return <div>

        <Card style={{width: '18rem'}}>
            {/*<Card.Img variant="top" src="holder.js/100px180?text=Image cap"/>*/}
            <Card.Body>
                <Card.Title>{user.userName}</Card.Title>
                <Card.Text>
                    userinfo:
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{`username: ${user.userName}`}</ListGroup.Item>
                <ListGroup.Item>{`age: ${user.age}`}</ListGroup.Item>
                <ListGroup.Item>{`email: ${user.email}`}</ListGroup.Item>
            </ListGroup>
            {/*<Card.Body>*/}
            {/*    <Card.Link href="#">Card Link</Card.Link>*/}
            {/*    <Card.Link href="#">Another Link</Card.Link>*/}
            {/*</Card.Body>*/}
        </Card>
    </div>
}