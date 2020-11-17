import fantasty from "../data/fantasty.json"
import history from "../data/history.json"
import horror from "../data/horror.json"
import romance from "../data/romance.json"
import scifi from "../data/scifi.json"

import React from 'react'
import { Container, Row, Col, Dropdown, Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





class LatestBooks extends React.Component {

  state = {
    data: fantasty,
    category: 'Fantasty'
  }

  render() {
    console.log('items', fantasty)
    return (
      <>
      <Dropdown className='mb-2'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          { this.state.category }
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={()=> {
            alert('Fantasty')
              return this.setState({ data: history, category: 'Fantasty' })}
           }>Fantasty</Dropdown.Item>

          <Dropdown.Item href="#/action-2" onClick={()=> {
            alert('History')
            return this.setState({ data: history, category: 'History' })}
             }>History</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={()=> {
            alert('Horror')
            return this.setState({ data: horror, category: 'Horror' })}
             }>Horror</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={()=> {
            alert('Romance')
            return this.setState({ data: romance, category: 'Romance' })}
             }>Romance</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={()=> {
            alert('SciFi')
            return this.setState({ data: scifi, category: 'SciFi' })}
             }>SciFi</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
          {this.state.data.map((book) => (
              <Col className='my-2'>
              <Card>
                <Card.Img className='w-100' variant="top" src={book.img} />
                <Card.Body>
                  <Card.Text>
                    {book.title}
                  </Card.Text>
                  <small>Category: {book.category}</small>
                </Card.Body>
                <Card.Footer>
                  {/* <Button variant="outline-success">Add Card</Button> */}
                  {/* <i className="fas fa-shopping-cart"></i> */}
                  <FontAwesomeIcon icon={['fas', 'fa', 'shopping', 'cart']}  />
                  <Button variant="outline-success">Buy Now</Button>{' '}
                </Card.Footer>
              </Card>
              </Col>
          ))}
          
        </Row>
      </Container>
      </>

    )
  }
}


export default LatestBooks