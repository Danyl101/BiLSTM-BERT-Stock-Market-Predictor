export const addfilter = async (filterdata: string[]) => {
    try {
        const filterRes = await fetch("http://localhost:5000/api/add-filter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(filterdata),
        });

        if (!filterRes.ok) {
            throw new Error(`Failed to acquire filters: ${filterRes.status}`);
        }

        const filter = await filterRes.json();
        return filter;
    } catch (err: any) {
        console.error(`Failed execution at ${err.message}`, err);
        throw err;
    }
};

export const addsite = async (sitedata: string[]) => {
    try {
        const siteRes = await fetch("http://localhost:5000/api/add-site", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sitedata),
        });

        if (!siteRes.ok) {
            throw new Error(`Failed to acquire sites: ${siteRes.status}`);
        }

        const site = await siteRes.json();
        return site;
    } catch (err: any) {
        console.error(`Failed execution at ${err.message}`, err);
        throw err;
    }
};