const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN || null

// FETCH ALL PROPERTIES
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


// FETCH SINGLE PROPERTY
async function fetchProperty(id){
    try {
        if(!API_DOMAIN){
            return null
        }
        const res = await fetch(`${API_DOMAIN}/properties/${id}`);
        if(!res.ok){
            throw new Error("Failed to fetch data.");
        }
        return res.json();
    } catch (error){
        console.error(error);
        return null
    }
}

export { fetchProperties, fetchProperty };