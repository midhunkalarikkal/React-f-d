import User from './User';
import UserClass from './UserClass';

const About = () => {
    return(
        <div>
            <h1>About Page</h1>
            <User name={"Midhun from function component as props"}/> 
            <UserClass name={"Midhun from class component as props"} location={"Los Angels"}/>
        </div>
    )
}

export default About;