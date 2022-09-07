import { useQuery } from "@tanstack/react-query";

const fetchData = async(url) => {
    
    let res = await fetch(url);
    let json = await res.json();
    return json;
}

/**	https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71uIwGsOQpL._SR1236,1080_.jpg */

export const useFetch = (url, name) => {

    const { data : results, error, isLoading
    } = useQuery([name],() => fetchData(url), {
        variables: {url},
    });
    
    return {results, error, isLoading};
}