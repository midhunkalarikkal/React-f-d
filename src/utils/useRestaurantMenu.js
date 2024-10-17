import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { MENU_API_END } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [ resInfo, setResInfo ] = useState(null)

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId + MENU_API_END)
        const json = await data.json()
        setResInfo(json.data)
    }
    return resInfo
}

export default useRestaurantMenu;