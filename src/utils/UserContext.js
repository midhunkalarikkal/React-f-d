import { createContext } from "react";

const UserContext = createContext({
    logginedUser : "Default name"
})

export default UserContext;