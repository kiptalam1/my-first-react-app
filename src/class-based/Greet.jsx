import { Component } from "react";


class Greeting extends Component {
    render () {
        // eslint-disable-next-line react/prop-types
        return <h1>Hello, {this.props.name}</h1>
    }
}

export default Greeting;