const results = document.querySelector('#results');

async function asyncFetch(value) {
    const res = await fetch(`https://swapi.dev/api/${value}/`);
    const data = await res.json();
    displayResults(data, value);
}


function displayResults(data, value) {
    let output = "";
    console.log(data);

    if (value === 'films') {
        data.results.forEach(item => {
            output += `
            <div class="card p-3 m-3" style="opacity: .8">
                <h4 class="card-title text-center">${item.title}</h4>
                <div class="card-content">
                <span style="text-decoration: underline">Pruducer</span>:${item.producer}<br>
                <span style="text-decoration: underline">Director</span>:${item.director}<br>
                <span style="text-decoration: underline">Date</span>:${item.release_date}<br>
                <p class=""text-center>${item.opening_crawl}</p>      
                </div>  
         </div>
            `
        })
    }
    if (value === 'people') {
        data.results.forEach(item => {
            output += `
            <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
            <span style="text-decoration: underline">Height</span>:${item.height}<br>
            <span style="text-decoration: underline">Birth Year</span>:${item.birth_year}<br>
            <span style="text-decoration: underline">Skin</span>:${item.skin_color}<br>   
            <span style="text-decoration: underline">Number of Films </span>:${item.films.length}<br>      
            </div>
            </div>
            `
        })

    }
    if (value === 'vehicles') {
        data.results.forEach(item => {
            output += `
            <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
            <span style="text-decoration: underline">Height</span>:${item.cargo_capacity}<br>
            <span style="text-decoration: underline">Model</span>:${item.model}<br>
             <span style="text-decoration: underline">manufacturer</span>:${item.manufacturer}<br>
             <span style="text-decoration: underline">Class</span>:${item.vehicle_class}<br>
             <span style="text-decoration: underline">Number of Films </span>:${item.films.length}<br>  
             </div>  
             </div>
            `
        })

    }
    if (value === 'planets') {
        data.results.forEach(item => {
            output += `
            <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
            <span style="text-decoration: underline">Climate</span>:${item.climate}<br>
            <span style="text-decoration: underline">Diameter</span>:${item.diameter}<br>
             <span style="text-decoration: underline">population</span>:${item.population}<br>
             <span style="text-decoration: underline">Class</span>:${item.created}<br>
             <span style="text-decoration: underline">Residents </span>:${item.residents.length}<br>  
             </div>  
             </div>
            `
        })

    }
    if (value === 'species') {
        data.results.forEach(item => {
            output += `
            <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
            <span style="text-decoration: underline">Classification</span>:${item.classification}<br>
            <span style="text-decoration: underline">Designation</span>:${item.designation}<br>
             <span style="text-decoration: underline">Average height</span>:${item.average_height}<br>
             <span style="text-decoration: underline">Designation</span>:${item.designation}<br>
           
             </div>  
             </div>
            `
        })

    }
    results.innerHTML = output;
}
document.querySelector('#buttons').addEventListener('click', e => {
    asyncFetch(e.target.textContent.trim().toLowerCase());
});