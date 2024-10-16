import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.name = props.name
        console.log(props.name)
    }
    render() {
        return(
            <h1>Name from Class component : {this.name}</h1>
        )
    }
}

export default UserClass;