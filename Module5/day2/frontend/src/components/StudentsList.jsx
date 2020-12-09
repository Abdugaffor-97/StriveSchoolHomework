import Modal from "./Modal"

const { BsPencilSquare } = require("react-icons/bs")
const { AiFillDelete } = require("react-icons/ai")


const { Component } = require("react");
const { ListGroup, Container } = require("react-bootstrap")

const axios = require("axios")

class StudentsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentsList: [],
      modalShow: false
    }
  }

  setModalShow = (bool) => this.setState({ modalShow: bool })

  componentDidMount = () => {
    this.refreshList()
  }

  refreshList = () => {
    axios.get("http://localhost:3001/students")
      .then(res => this.setState({ studentsList: res.data }))
      .catch(err => console.log(err))
  }

  handleDelete = (id) => {
    axios.delete(`http://localhost:3001/students/${id}`)
      .then(res => {
        console.log(res)
        this.refreshList()
      })
  }




  render() {
    const { studentsList, modalShow } = this.state
    return (
      <Container>
        <ListGroup>
          {studentsList.map(student => (
            <ListGroup.Item key={student.id}>
              <div className="d-flex justify-content-between">
                <div>
                  {student.name + ' ' + student.surname + ' ' + student.email}
                </div>
                <div>
                  <button
                    className='mx-2'
                    onClick={() => this.setModalShow(true)}
                  >
                    <BsPencilSquare />
                  </button>
                  <Modal
                    show={modalShow}
                    onHide={() => this.setModalShow(false)}
                    studentInfo={student}
                  />
                  <button
                    className='mx-2'
                    onClick={() => this.handleDelete(student.id)}
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            </ListGroup.Item>
          ))}

        </ListGroup>
      </Container>
    )
  }
}

export default StudentsList
