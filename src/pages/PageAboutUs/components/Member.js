// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

import MemberPhoto_1 from "../MemberPhotos/幹部照片1.webp"
import MemberPhoto_2 from "../MemberPhotos/幹部照片2.webp"
import MemberPhoto_3 from "../MemberPhotos/幹部照片3.webp"
import MemberPhoto_4 from "../MemberPhotos/幹部照片4.webp"
import MemberPhoto_5 from "../MemberPhotos/幹部照片5.webp"
import MemberPhoto_6 from "../MemberPhotos/幹部照片6.webp"
import MemberPhoto_7 from "../MemberPhotos/幹部照片7.webp"

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';

const Member = () => {
    return (
        <div>
            <div className='news-title-container'> 2024年度幹部簡介</div>
            <Container>
            <Row>
                <Col xs={6} md={4}>
                <Image src={MemberPhoto_1} roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                <Image src={MemberPhoto_2} roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                <Image src={MemberPhoto_3} roundedCircle />
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4}>
                <Image src={MemberPhoto_4} roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                <Image src={MemberPhoto_5} roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                <Image src={MemberPhoto_6} roundedCircle />
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4}>
                <Image src={MemberPhoto_7} roundedCircle />
                </Col>
            </Row>
            </Container>
        </div>
        
    );
}

export default Member