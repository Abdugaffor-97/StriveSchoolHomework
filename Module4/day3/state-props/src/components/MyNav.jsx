import React from 'react'
import { Navbar, Nav, FormControl, DropdownButton, Dropdown, Container } from 'react-bootstrap'

const BookCategories = ['fantasy', 'history', 'romance', 'scifi', 'horror']

class NavBar extends React.Component {
  render() {
    return (
      <Navbar className='fixed-top' variant="dark" >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <DropdownButton className='ml-2' id="dropdown-basic-button" title={this.props.Ddowntitle.toUpperCase()}>
            {BookCategories.map((cotegory, idx) => {
              return (
                <Dropdown.Item href="#/action-1"
                  key={idx}
                  onClick={() => {
                    if (cotegory !== this.props.Ddowntitle) {
                      this.props.handleDropdownChange(cotegory)
                    }
                  }}
                >
                  {cotegory.toUpperCase()}
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