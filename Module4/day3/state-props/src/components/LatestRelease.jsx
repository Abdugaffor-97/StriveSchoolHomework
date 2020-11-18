import fantasty from "../data/fantasty.json"
import history from "../data/history.json"
import horror from "../data/horror.json"
import romance from "../data/romance.json"
import scifi from "../data/scifi.json"

import BookList from './BookList'

import React from 'react'
import { Container, Row, Dropdown, DropdownButton, FormControl } from 'react-bootstrap'

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
  // handleDropdownChange = (category) => {
  //   this.setState({ data: books.category, categorySelected: category })
  // }

  handleSearchQuery = () => {}

  render() {
    return (
      <>
        <DropdownButton id="dropdown-basic-button" title={this.state.categorySelected}>
          {BookCategories.map((category, index) => (
            <Dropdown.Item
              key={`dropdown-item-${index}`}
            // onClick={() => handleDropdownChange(category)}
            >
              {category}
            </Dropdown.Item>
          ))}

        </DropdownButton>
        <FormControl></FormControl>

        <Container>
          <Row xs={1} sm={2} md={3} lg={4} xl={5}>
            <BookList listOfBooks={this.state.data} />
          </Row>
        </Container>
      </>

    )
  }
}


export default LatestBooks