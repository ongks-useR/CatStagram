import { Row } from 'react-bootstrap';
import FeedCard from './cards';

function Feed(props) {
    return (
        <div>
            <h2>Feeds</h2>
            <Row>
                {props.fact.map(
                    row => <FeedCard key={row.id} fact={row} />
                )};
            </Row>
        </div>
    )
}

export default Feed;