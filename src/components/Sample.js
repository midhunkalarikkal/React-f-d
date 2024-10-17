import { Component } from 'react';

class Sample extends Component {
    constructor(props){
        super(props)
        console.log(this.props.name + " Sample constructor")
    }

    componentDidMount(){
        console.log(this.props.name + " Sample componentDidMount")
    }

    render(){
        console.log(this.props.name + " Sample render")
        return(
            <h1>Sample class component</h1>
        )
    }
}

export default Sample;