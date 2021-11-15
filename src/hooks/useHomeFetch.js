import { useState, useEffect, useRef } from 'react';

// API
import Api from '../Api';

// session storage from base
import { isPersistedState } from '../base';

// Initial State
const  initialState ={
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0 
};

export const useHomeFetch = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    // console.log(searchQuery); 

    const fetchMovies = async (page, searchQuery = '') => {
        try {
            setError(false);
            setLoading(true);

            const movies = await Api.fetchMovies(searchQuery, page);
            const moviesData = movies.data;
            setState(prev => ({
                ...moviesData,
                results: page > 1 ? [...prev.results, ...moviesData.results] : [...moviesData.results]
            }));
        } catch (error) {
            setError(true);

        }
        setLoading(false); 
    };


    // Initial render and search
    useEffect(() => {

        if (!searchQuery) {
            const sessionState = isPersistedState('homeState');

            if (sessionState) {
                setState(sessionState)
                return;
            }
        }
        setState(initialState);

        fetchMovies(1, searchQuery);
    }, [searchQuery]);


    // Load more 
    useEffect(() => {
        if (!isLoadingMore) return;

        fetchMovies(state.page + 1, searchQuery);
        setIsLoadingMore(false)
        // console.log(isLoadingMore)

    }, [isLoadingMore, searchQuery, state.page]);

    // Write to session storeage
    useEffect(() => {
        if (!searchQuery) sessionStorage.setItem('homeState', JSON.stringify(state))
        // console.log(state)
        
    }, [searchQuery, state])

    return { state, loading, error, searchQuery, setSearchQuery, setIsLoadingMore };
}