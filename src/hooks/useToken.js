import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        if (email) {
            axios.put(`http://localhost:5000/user/${email}`, { email })
                .then(response => {
                    const { data } = response;
                    setToken(data.token);
                    localStorage.setItem("accessToken", data?.token)
                })
        }
    }, [user])
    return [token]
};

export default useToken;