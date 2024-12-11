document.querySelector("#pesquisa").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});

document.querySelector("#pesquisa").addEventListener("keyup", function() {
    const searchTerm = this.value.trim().toLowerCase();
    highlightMatches(searchTerm);

    if (searchTerm === "") {
        resetHighlights();
    } else {
        highlightMatches(searchTerm);
    }
});

function highlightMatches(searchTerm) {
    const rows = document.querySelectorAll("#resumo tbody tr");
    const normalizedSearchTerm = searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        cells.forEach((cell, index) => {
            if (index === cells.length - 1) return;
            const text = cell.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (text.includes(normalizedSearchTerm)) {
                cell.style.backgroundColor = "#ffeb3b";
                row.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            } else {
                cell.style.backgroundColor = "";
            }
        });
    });
}

function resetHighlights() {
    const rows = document.querySelectorAll("#resumo tbody tr");
    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        cells.forEach(cell => {
            cell.style.backgroundColor = "";
        });
        row.style.backgroundColor = "";
    });
}