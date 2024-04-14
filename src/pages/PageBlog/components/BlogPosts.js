import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import photo from './post_sample.webp';
import Card from 'react-bootstrap/Card';

const BlogPosts = () => {
    return <div className='Event-Part-container'>
        <div className='Posts'>
            <Container>
                <Row>
                    <div className='Blog'>
                        <Col>
                            <Image src={photo} thumbnail style={{ borderRadius: '0'}}/>
                        </Col>
                        <Col>
                            <Card style={{ borderRadius: '0',minHeight: '23rem'}}>
                                <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    </div>
}

export default BlogPosts