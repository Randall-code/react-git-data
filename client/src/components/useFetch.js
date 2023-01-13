import {useState, useEffect} from "react"

export function useFetch(uri) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        console.log(uri);
        if (!uri) return;
        fetch(uri)
        .then((data) => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
    }, [uri])
    console.log(data)
    return {loading, data, error};
}