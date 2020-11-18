// // // Create a SingleBook component as a function.The component receives a book object as a prop, and displays the cover and the title of the book.Use react - bootstrap Cards to display a book(The book object can be read from the one of the.json book files we gave you yesterday) 

import { Card, Button } from 'react-bootstrap'

const SingleBook = (props) => {
  console.log(props)

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.price}</Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  )
}


export default SingleBook