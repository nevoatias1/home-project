const $ = id => document.getElementById(id);

const API = {
    async fetchHP() {
        const res = await fetch("https://hp-api.onrender.com/api/characters");
        console.log(res);
        if (!res.ok) throw new Error(`HP API error: ${res.status}`);
        const data = await res.json();
        return data.filter(c => c.image?.trim()).slice(0, 6).map(c => ({ url: c.image, name: c.name }));
    }
};
