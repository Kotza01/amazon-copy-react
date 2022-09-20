import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async(url) => {
    
    /*let res = await fetch(url);
    let json = await res.json();*/
    const {data} = await axios.get(url);
    return data;
}

export const useFetch = (url, name) => {

    const { data: results, error, isLoading
    } = useQuery([name],() => fetchData(url), {
        variables: {url},
    });
    
    return {results, error, isLoading};
}