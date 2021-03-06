import React from 'react'
import { Navbar, Nav, FormControl, DropdownButton, Dropdown, Container } from 'react-bootstrap'

const BookCategories = ['fantasy', 'history', 'romance', 'scifi', 'horror']

class NavBar extends React.Component {
  render() {
    return (
      <Navbar className='fixed-top' variant="dark" >
        <Container>
          <Navbar.Brand>StriveBookStore</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
          </Nav>
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
            onChange={(e) => this.props.handleSearchQuery(e.target.value)}
          />
          <DropdownButton variant="outline-secondary" className='ml-2' id="dropdown-basic-button" title={this.props.Ddowntitle.toUpperCase()}>
            {BookCategories.map((category, idx) => {
              return (
                <Dropdown.Item href="#/action-1"
                  key={idx}
                  onClick={() => {
                    if (category !== this.props.Ddowntitle) {
                      this.props.handleDropdownChange(category)
                    }
                  }}
                >
                  {category.toUpperCase()}
                </Dropdown.Item>
              )
            })}
          </DropdownButton>
        </Container>
      </Navbar>
    )
  }
}


export default NavBar