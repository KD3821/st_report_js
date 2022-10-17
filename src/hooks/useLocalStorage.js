import {useState} from "react";

const defaultToken = '8ec6f6021734acc223be5a11463d1df63c3309bd'

export const useLocalStorage = (token, defaultToken) => {
    const [token, setToken] = useState( () => {
        try {
            const authToken = window.localStorage.getItem(token);
            if (authToken) {
                return JSON.parse(authToken);
            } else {
                window.localStorage.setItem(token, JSON.stringify(''));
                return defaultToken;
            }
        } catch (err) {
            return defaultToken;
        }
    });
    return [token, setToken];
}