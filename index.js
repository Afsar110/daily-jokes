const getJokes = async () => {
    try {
        const res = await fetch("http://api.chucknorris.io/jokes/random");
        const data = await res.json();
        const myJoke = document.querySelector("#myJoke");
        myJoke.innerHTML = data.value;
    } catch (error) {
        
    }
};


window.addEventListener("load", () => {
    getJokes();
});