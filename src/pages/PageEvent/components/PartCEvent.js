import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PartCEvent = () => {
    return <div className='Event-Part-container'>
        <div className='news-title-container'> 參觀學習活動</div>
        <div className='Event-discription'> 留學生會於2019年開始的新企畫，為了拓展留學生的視野以利發掘更多機會，並了解台灣人在日本職場的現況，由幹部們規劃拜訪在九州活躍的台灣企業或支店。2019年我們參觀了中華航空福岡支店、台灣貿易中心、台灣茶品牌心福茶等等。</div>
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

export default PartCEvent