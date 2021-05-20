import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getFull} from '../store/actions/usersActions'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import ModalImage from "react-modal-image";
import {compose} from "redux";
import {
  Link, withRouter
} from "react-router-dom";
import "./user.css";
 class moviedetail extends Component {
  constructor(props) {
    super(props);
    this.state = {   movie: "joker",
    value :''};

  }

    componentDidMount(){
        this.props.getFull(this.props.location.state[0].movieid)
    }

    render() {
        const {details} = this.props.moviedetail
        console.log(this.props.moviedetail.moviedetail.Title)
        return (
<>

<p>{this.props.moviedetail.moviedetail.Title}</p>

  </>


        )
    }
}

const mapStateToProps  = (state) => ({moviedetail:state.moviedetail})

export default compose(
    withRouter,
    connect(mapStateToProps,  {getFull})
  )(moviedetail);

//   export default connect(mapStateToProps,{getFull})(moviedetail)