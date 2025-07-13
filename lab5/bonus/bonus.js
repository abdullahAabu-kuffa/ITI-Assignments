
// 1:
function writeHeaders() {
    for (let i = 1; i <= 6; i++) {
        document.writeln(`<h${i}>Welome to My page</h${i}>`);
    }
}
writeHeaders();

function getUserInfo() {
    let name;
    while (true) {
        //name = prompt("Enter your name:");
        name = "Abdullah";
        if (name && isNaN(name)) break;
        alert("Please enter a valid name.");
    }

    let year;
    while (true) {
        //year = prompt("Enter your birth year (less than 2010):");
        year = 2001;
        if (!isNaN(year) && Number(year) < 2010) break;
        alert("Enter a valid number less than 2010.");
    }

    const age = new Date().getFullYear() - Number(year);

    // Create table
    const table = document.createElement("table");

    const data = [
        ["Name", name],
        ["Birth year", year],
        ["Age", age]
    ];

    data.forEach(([key, value]) => {
        const row = document.createElement("tr");

        const cell1 = document.createElement("td");
        cell1.textContent = key;

        const cell2 = document.createElement("td");
        cell2.textContent = value;

        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    });

    document.getElementById("tableContainer").appendChild(table);
}
