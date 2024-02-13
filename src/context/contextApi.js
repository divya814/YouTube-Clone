import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(true);
    const [error, setError] = useState(null);

    const fetchSelectedCategoryData = (query) => {
        // when we pass a query in, it will load, fetch data from the api
        // as per the query, will give searchResults, and then will stop loading
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            setSearchResults(contents);
            setLoading(false);
            setError(null)
        }).catch((error)=>{
            setLoading(false);
            setError(error);
        });
    };

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu,
                error,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};