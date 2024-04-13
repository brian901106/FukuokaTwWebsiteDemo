import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PartBEvent = () => {
    return <div className='Event-Part-container'>
        <div className='news-title-container'> 國際交流活動</div>
        <div className='Event-discription'> 為了促進日本地方觀光產業發展與國際交流，許多在地團體提供免費名額給留學生們，並於體驗後回饋意見，期望通過留學生們降低外國人旅遊門檻或創造交流機會、期望促進台灣人來日觀光流量及加深兩國情誼。</div>
        <div className='Posts'>
            <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </div>
    </div>
}

export default PartBEvent