import { useEffect, useState } from "react";
require("dotenv").config;
const RESTAURANT_MENU = process.env.RESTAURANT_MENU;

const useRestaurantMenu = (resId) => {
    const [ resInfo, setResInfo ] = useState(null)

    useEffect(() => {
        if (resId) {
            fetchData();
        }
    }, [resId]);

    const fetchData = async () => {
        try {
            const response = await fetch(RESTAURANT_MENU+`${resId}`);
            const responseText = await response.text();
            const json = JSON.parse(responseText);
            setResInfo(json?.data || null);
        } catch (error) {
            setResInfo(null);
        }
    };

    return resInfo;
}

export default useRestaurantMenu;