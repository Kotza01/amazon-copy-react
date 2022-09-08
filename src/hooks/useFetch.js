import { useQuery } from "@tanstack/react-query";

const fetchData = async(url) => {
    
    let res = await fetch(url);
    let json = await res.json();
    return json;
}

export const useFetch = (url, name) => {

    const { data : results, error, isLoading
    } = useQuery([name],() => fetchData(url), {
        variables: {url},
    });
    
    return {results, error, isLoading};
}