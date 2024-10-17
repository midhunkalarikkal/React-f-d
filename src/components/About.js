import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component{
    constructor(){
        super()
        console.log("Parent class component constructor ABOUT")
    }

    componentDidMount(){
        console.log("Parent class component componentDidMount ABOUT")
    }

    render(){
        console.log("Parent class component render About")
        return(
            <div>
            <h1>About Page class component</h1>
            <UserClass name={"First"} location={"Los Angels"}/>
            <UserClass name={"Second"} location={"Los Angels"}/>
        </div>
        )
    }
}

// const About = () => {
//     return(
//         <div>
//             <h1>About Page</h1>
//             <User name={"Midhun from function component as props"}/> 
//             <UserClass name={"Midhun from class component as props"} location={"Los Angels"}/>
//         </div>
//     )
// }

export default About;