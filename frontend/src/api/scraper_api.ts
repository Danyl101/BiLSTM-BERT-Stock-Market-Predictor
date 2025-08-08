export const addfilter = async (filterdata: string[]) => {
    try {
        const filterRes = await fetch("http://localhost:5000/fetch-filter", {
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
        const siteRes = await fetch("http://localhost:5000/fetch-site", {
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

export const removefilter = async (filter_remove: string[]) => {
    try {
        const filter_removeRes = await fetch("http://localhost:5000/remove-filter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(filter_remove),
        });

        if (!filter_removeRes.ok) {
            throw new Error(`Failed to acquire filters: ${filter_removeRes.status}`);
        }
        const filter = await filter_removeRes.json();
        return filter;
    } catch (err: any) {
        console.error(`Failed execution at ${err.message}`, err);
        throw err;
    }
};

export const removesite = async (sitedata: string[]) => {
    try {
        const siteremoveRes = await fetch("http://localhost:5000/remove-site", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sitedata),
        });

        if (!siteremoveRes.ok) {
            throw new Error(`Failed to acquire sites: ${siteremoveRes.status}`);
        }

        const site = await siteremoveRes.json();
        return site;
    } catch (err: any) {
        console.error(`Failed execution at ${err.message}`, err);
        throw err;
    }
};




