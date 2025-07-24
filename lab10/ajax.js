



// Utility to format population with commas

let countriesData = [];

function renderTable(data) {
    const tbody = document.querySelector('#countriesTable tbody');
    tbody.innerHTML = '';
    data.forEach(country => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${country.name}</td>
            <td>${country.region}</td>
            <td>${country.population}</td>
            <td>${(country.languages || []).join(', ')}</td>
        `;
        tbody.appendChild(tr);
    });
}


function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", false);
    xhr.onload = function () {
        if (xhr.status === 200) {
            try {
                var data = JSON.parse(xhr.responseText);
                // Validate data
                data.forEach(function (item) {
                    if (typeof item.name !== 'string' || typeof item.region !== 'string' ||
                        typeof item.population !== 'number' || !Array.isArray(item.languages)) {
                        throw new Error("Invalid data format");
                    }
                });
                renderTable(data);
            } catch (error) {
                console.error("Error parsing JSON:", error.message);
            }
        }
    };
    xhr.send();
}
fetchData();