import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../store/actions/usersActions'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import ModalImage from "react-modal-image";

import "./user.css";
 class users extends Component {
  constructor(props) {
    super(props);
    this.state = {   movie: "joker",
    value :''};

    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

    componentDidMount(){
        this.props.getUsers(this.state.movie,1)
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleInput () {
        this.props.getUsers(this.state.value,13)
    }
    render() {
        const {users} = this.props.users
        const propsValid = (props) => Object.values(props).every(prop => prop !== undefined)
        console.log(users)
        return (
            propsValid(this.props) ?
<>
            <Container>
              <Row>  <form action="">
              <input type="text" value={this.state.value} onChange={this.handleChange} />
      <Button onClick={this.handleInput}  variant="info">Search</Button>

    </form></Row>
  <Row>
  {users.map(function(d, idx){
         return (
           <>
          {d.Search.map(u =>

            <Col>
            <Card style={{ width: '18rem' }}>
            <ModalImage
  small={`${u.Poster}`}
  large={`${u.Poster}`}
  alt={u.Title}
/>
              {/* <Card.Img variant="top" key={u.imdbID} src={`${u.Poster}`} alt="ok" /> */}
              <Card.Body>
                <Card.Title>{u.Title}</Card.Title>
                <Card.Text>
                {u.Year}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
                        )}

</>
         )
       })}
            {/* {users.map(u =>

<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" key={u.imdbID} src={`${u.Poster}`} alt="ok" />
  <Card.Body>
    <Card.Title>{u.Title}</Card.Title>
    <Card.Text>
    {u.Year}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
            )} */}


  </Row>
  </Container>
  </> : <div>
          <p>Loading</p>

            </div>


        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(users)