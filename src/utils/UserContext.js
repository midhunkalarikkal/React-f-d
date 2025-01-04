import { createContext } from "react";

const UserContext = createContext({
    logginedUser : "Default name",
    showProfileDropDown : false
})

export default UserContext;