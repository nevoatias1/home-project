const $ = id => document.getElementById(id);

const API = {
    async fetchHP() {
        const res = await fetch("https://hp-api.onrender.com/api/characters");
        console.log(res);
        if (!res.ok) throw new Error(`HP API error: ${res.status}`);
        const data = await res.json();
        return data.filter(c => c.image?.trim()).slice(0, 6).map(c => ({ url: c.image, name: c.name }));
    },

    async fetchDogs() {
        const res = await fetch("https://dog.ceo/api/breeds/image/random/6");
        console.log(res);
        if (!res.ok) throw new Error(`Dogs API error: ${res.status}`);
        const { message } = await res.json();
        return message.map((url, i) => ({ url, name: `Dog ${i + 1}` }));
    },

    async fetchFlags() {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
        console.log(res);
        if (!res.ok) throw new Error(`Flags API error: ${res.status}`);
        const data = await res.json();
        return data
            .filter(c => c.flags?.png && c.name?.common)
            .sort(() => Math.random() - 0.5)
            .slice(0, 6)
            .map(c => ({ url: c.flags.png, name: c.name.common }));
    }
};
