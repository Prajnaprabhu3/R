import react, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseurl = 'https://google-search3.p.rapidapi.com/api/v1';


export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState(' ');

    // /videos , /search, /images - type
    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseurl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5e0ab52f29msh95e2fd53683d53dp17385djsn0bd71ebd4992'
            }
        });

        // storing results in data 
        const data = await response.json();
        console.log(data);

        // changing state of setResults to data which has the required data 
        setResults(data);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);