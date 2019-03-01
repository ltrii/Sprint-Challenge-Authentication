import React, { Component } from 'react'
import { Card, CardBody, CardImg } from 'reactstrap';

export default class UserDisplay extends Component {

  componentDidMount(){
    if(localStorage.getItem('jwt')){
      const jwtCur = localStorage.getItem('jwt');
      this.props.getJokes(jwtCur);
      this.props.refreshPage();
    }
  }


  render() {
    return (
      <div className="userHold">
        {this.props.jokes !== undefined && this.props.jokes.map((joke, index) => (
            <Card className="jokeCard" key={(Date.now() + joke.id)}>
            <CardImg src={"https://icanhazdadjoke.com/j/" + joke.id + ".png"} />
              <CardBody>
                {joke.joke}
              </CardBody>
            </Card>
        ))}
      </div>
    )
  }
}
