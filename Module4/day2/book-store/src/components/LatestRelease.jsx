import fantasty from "../data/fantasty.json"
import history from "../data/history.json"
import horror from "../data/horror.json"
import romance from "../data/romance.json"
import scifi from "../data/scifi.json"

import React from 'react'
import { Container, Row, Col, Dropdown, Button, Card, DropdownButton, FormControl } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BookCategories = ['fantasty', 'history', 'romance', 'scifi', 'horror']
const books = {
  fantasty,
  history,
  romance,
  scifi,
  horror,
}



class LatestBooks extends React.Component {

  state = {
    data: books.fantasty,
    categorySelected: 'fantasy',
  }


  handleDropdownChange = (category) => {
    this.setState({data: books.category, categorySelected: category})
  }

  handleSearchQuery = () => {

  }

  render() {
    return (
      <>
      <DropdownButton id="dropdown-basic-button" title={this.state.categorySelected}>
        {BookCategories.map((category, index) => (
          <Dropdown.Item 
            key={`dropdown-item-${index}`}
            onClick={() => handleDropdownChange(category)}
          >
            {category}
          </Dropdown.Item>
        ))}
        
      </DropdownButton>
      <FormControl></FormControl>
      
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
          {this.state.data.map((book) => (
              <Col className='my-2' key={book.asin}>
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
                  {/* <FontAwesomeIcon icon={['fas', 'fa', 'shopping', 'cart']}  /> */}
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