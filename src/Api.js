import { getByDisplayValue } from '@testing-library/dom';
import axios from 'axios';

import {
    searchBaseURL,
    popularBaseURL,

    API_URL,
    API_KEY,

    loginURL,
    sessionID_URL,

    
    
} from './config';


const defaultConfig = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    }
};

const apiSettings = {



    fetchMovies: async (searchQuery, page) => {
        const endpoint = searchQuery 
        ? `${searchBaseURL}${searchQuery}&page=${page}`
        :`${popularBaseURL}&page=${page}`;
        return await axios(endpoint);
    },

    fetchMovie: async movieID => {
        const endpoint = `${API_URL}movie/${movieID}?api_key=${API_KEY}`;
        return await axios(endpoint);
    },

    fetchCredit: async movieID => {
        const endpoint = `${API_URL}movie/${movieID}/credits?api_key=${API_KEY}&language=en-US`;
        return await axios(endpoint);
    },

    // For login
    getRequestToken: async () => {
        const reqToken = await axios('requestTokenURL');
        return reqToken.request_token;
    },

    authenticate: async (requestToken, username, password) => {
        const bodyData = {
            username,
            password,
            request_Token: requestToken
        };
        // First authenticate the requestToken
        const data = await 
            axios(loginURL, {
                ...defaultConfig,
                body: JSON.stringify(bodyData)
            });
        
    //     // Then get the sessionID with the requestToken
        if (data.success) {
            const sessionID = await axios(sessionID_URL, {
                ...defaultConfig,
                body: JSON.stringify({request_token: requestToken})
            });
            return sessionID;
        }

    },

    rateMovie: async (sessionID, movieID, value) => {
        const endpoint = `${API_URL}movie/${movieID}/rating?api_key=${API_KEY}&session_id=${sessionID}`;

        const rating = await axios(endpoint, {
            ...defaultConfig,
            body: JSON.stringify({ value })
        });
        return rating;
    }


};

export default apiSettings;