// Utility to format population with commas

function renderTable(countriesData) {
    const tbody = document.querySelector('#countriesTable tbody');
    tbody.innerHTML = '';
    countriesData.forEach(country => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${country.name}</td>
            <td>${country.region}</td>
            <td>${country.population}</td>
            <td>${(country.languages).join(', ')}</td>
        `;
        tbody.appendChild(tr);
    });
}

var countriesData = {}
var check = true;
function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "countries.json");
    xhr.onload = function () {
        if (xhr.status === 200) {
            try {
                var data = JSON.parse(xhr.responseText);
                // Validate data
                function validateData() {
                    data.forEach(function (item) {
                        if (typeof item.name !== 'string' || typeof item.region !== 'string' ||
                            typeof item.population !== 'number' || !Array.isArray(item.languages)) {
                            function showError() {
                                var error = new Error("Invalid data format");
                                throw error;
                            }
                            showError();
                        }
                    });
                }
                validateData();
                countriesData = data;
                if (check) renderTable(countriesData);
            } catch (error) {
                console.error("Error parsing JSON:", error.message);
            }
        }
    };
    xhr.send();
}
fetchData();
var gloRegionCountries = [];
function filterByRegion(e) {
    e.preventDefault();
    var region = document.getElementById("regionFilter").value;
    if (region == "All") {
        check = false;
        renderTable(countriesData);
    } else {
        let regionCountries = [...countriesData];
        regionCountries = regionCountries.filter(function (country) {
            return country.region === region;
        });
        gloRegionCountries = [regionCountries];
        check = true;
        renderTable(regionCountries);
    }
}
function filterByName(e) {
    e.preventDefault();
    var name = document.getElementById("searchInput").value;
    let namedCountries = [...countriesData];
    if (gloRegionCountries.length == 0) {
        namedCountries = namedCountries.filter(function (country) {
            return country.name.includes(name);
        })
        renderTable(namedCountries);
    }
    else {
        namedCountries = gloRegionCountries.filter(function (country) {
            return country.name.toLowerCase().includes(name.toLowerCase());
        });
        renderTable(namedCountries);
        gloRegionCountries = [];
    }
}
var isAsc = true;
function sortByPopulation(e) {
    e.preventDefault();
    let sortedCountries = countriesData;
    sortedCountries.sort(function (a, b) {
        return isAsc ? a.population - b.population : b.population - a.population;
    });
    renderTable(sortedCountries);
    isAsc = !isAsc;
    document.getElementById('sortBtn').textContent = `Sort by Population ${isAsc ? '↑' : '↓'}`;
}
