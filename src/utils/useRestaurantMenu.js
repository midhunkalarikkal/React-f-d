import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { MENU_API_END } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [ resInfo, setResInfo ] = useState(null)

    useEffect(() => {
        if (resId) {
            fetchData();
        }
    }, [resId]);

    const fetchData = async () => {
        try {
            const response = await fetch(MENU_API + resId + MENU_API_END);
            const json = await response.json();
            setResInfo(json?.data || null);
        } catch (error) {
            setResInfo(null);
        }
    };

    return resInfo;
}

export default useRestaurantMenu;