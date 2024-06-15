const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN || null

async function fetchProperties(){
    try {
        if(!API_DOMAIN){
            return []
        }
        const res = await fetch(`${API_DOMAIN}/properties`);
        if(!res.ok){
            throw new Error("Failed to fetch data.");
        }
        return res.json();
    } catch (error){
        console.error(error);
        return []
    }
}

export { fetchProperties };