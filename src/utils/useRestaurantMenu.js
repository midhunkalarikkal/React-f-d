import { GET_MENU } from './constants';
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [ resInfo, setResInfo ] = useState(null)

    useEffect(() => {
        if (resId) {
            fetchData();
        }
    }, [resId]);

    const fetchData = async () => {
        try {
            const response = await fetch(GET_MENU+`${resId}`);
            const json = await response.json();
                setResInfo(json?.data || null);
        } catch (error) {
            setResInfo(null);
        }
    };

    return resInfo;
}

export default useRestaurantMenu;