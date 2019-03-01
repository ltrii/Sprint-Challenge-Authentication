import React, { Component } from 'react'
import { Button, Card, CardBody } from 'reactstrap';

export default class UserDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 1
    }
    this.nextClick = this.nextClick.bind(this)
  }

  componentDidMount(){
    if(localStorage.getItem('jwt')){
      const jwtCur = {
        jwt: localStorage.getItem('jwt'),
        page: this.state.page
      }
      this.props.getJokes(jwtCur);
      this.props.refreshPage();
    }
  }

  nextClick(){
    this.setState({
      page: this.state.page + 1
    })
    const pagejwt = {
      jwt: localStorage.getItem('jwt'),
      page: this.state.page
    }
    this.props.getJokes(pagejwt);
    this.props.refreshPage();
  }


  render() {
    return (
      <div>
        <Button color="info" onClick={this.nextClick}>Next Page</Button>
        <div className="userHold">
          {this.props.jokes !== undefined && this.props.jokes.map((joke, index) => (
              <Card className="jokeCard" key={(Date.now() + joke.id)}>
              {/* <CardImg src={"https://icanhazdadjoke.com/j/" + joke.id + ".png"} /> */}
                <CardBody className="jokeText">
                  {joke.joke}
                </CardBody>
              </Card>
          ))}
        </div>
      </div>
    )
  }
}
