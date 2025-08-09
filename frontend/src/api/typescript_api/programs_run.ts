export const scrape_run= async() =>{
    try{   
        const response=await fetch(
            "http://localhost:5000/api/run-scrape",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"}
            });
            if(!response.ok)
            {
                throw new Error(`Response not received ${response.status}`)
            }
            const data=await response.json()
            return data
        }
        catch(err:any)
        {
            console.log(`Server Response error ${err.message}`,err)
            throw err
        }
}

export const extract_run= async() =>{
    try{
    const response=await fetch(
        "http://localhost:5000/api/run-extract",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
        }
    );
    if(!response.ok)
    {
        throw new Error(`Response not received ${response.status}`)
    }
    const data=await response.json()
    return data
    }
    catch(err:any)
    {
        console.log(`Server Response failed ${err.message}`,err)
        throw err
    }
}
