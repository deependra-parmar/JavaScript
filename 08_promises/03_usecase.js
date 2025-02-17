async function getData() {
    try {
        const response = await fetch("https://swapi.dev/api/people/5");
        const data = await response.json();

        console.log(data);
    }
    catch(error){
        console.log("Error fetching data: ", error);
    }
}

getData();