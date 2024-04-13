import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PartDEvent = () => {
    return <div className='Event-Part-container'>
        <div className='news-title-container'> 節慶活動</div>
        <div className='Event-discription'> 為了讓我們這群異國留學的學子們在佳節時刻可以品嚐到家鄉味，在日已久的大前輩們會為我們準備各種與節日有關活動。例如除夕團圓、端午節包粽子、煙火大會、賞楓會等等。在２０１９年度中，舉辦了兩次包粽子活動。在歡聲笑語中包出合自己家鄉口味的粽子，雖然身在異鄉仍然感受到濃烈的過節氣氛。除了節日相關活動之外，台日交流協會也提供了許多不同場次、免費的棒球票給留學生，並挑其中一場一起觀看。當天旅日球員陽岱鋼有出賽，大家在場邊揮舞國旗為他加油。</div>
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

export default PartDEvent