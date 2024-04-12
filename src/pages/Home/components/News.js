import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import 'bootstrap/dist/css/bootstrap.min.css';

import card1 from "../Photos/1.webp"

function News() {
    return (
      <div className="news-title-container">  
        <div className="news-title">
          最新消息
        </div>
        
        <CardGroup>
          <div style={{ width: '18rem' ,margin: '10px'}}>
          <Card className="bg-dark text-white" style={{ borderRadius: '0'}}>
            <Card.Img src={card1} alt="Card image" style={{minHeight: '18rem'}}/>
            <Card.ImgOverlay >
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                card1
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
          </div>

          <div style={{ width: '18rem' ,margin: '10px'}}>
          <Card className="bg-dark text-white" style={{ borderRadius: '0'}}>
          <Card.Img src={card1} alt="Card image" style={{minHeight: '18rem'}}/>
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                card1
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
          </div>

          <div style={{ width: '18rem' ,margin: '10px'}}>
          <Card className="bg-dark text-white" style={{ borderRadius: '0'}}>
          <Card.Img src={card1} alt="Card image" style={{minHeight: '18rem'}}/>
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                card1
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
          </div>
        </CardGroup>
      </div>
      
    );
  }

export default News