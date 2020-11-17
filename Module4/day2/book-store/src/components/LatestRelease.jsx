import fantasty from "../data/fantasty.json"
import history from "../data/history.json"
import horror from "../data/horror.json"
import romance from "../data/romance.json"
import scifi from "../data/scifi.json"

import React from 'react'
import { Container, Row, Col, Dropdown, } from 'react-bootstrap'




class LatestBooks extends React.Component {

  state = {
    data: fantasty
  }

  render() {
    console.log('items', fantasty)
    return (
      <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={()=> this.setState({ data: history }) }>Fantasty</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={()=> this.setState({ data: history }) }>History</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={()=> this.setState({ data: horror }) }>Horror</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={()=> this.setState({ data: romance }) }>Romance</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={()=> this.setState({ data: scifi }) }>SciFi</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
      <Container>
        <Row xs={2} md={4} lg={5}>
          {this.state.data.map((book) => (
              <Col>
                <img style={{ width: '200px', height: '300px' }}
                    src={book.img}
                    alt={book.name}
                  />
                <p>{book.title}</p>
              </Col>
          ))}
          
        </Row>
      </Container>
      </>

    )
  }
}


export default LatestBooks