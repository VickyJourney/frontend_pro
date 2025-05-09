function createPythagorasTable(element, size) {
  const table = document.createElement("table");
  table.classList.add("table");
  const caption = document.createElement("caption");
  caption.textContent = "Table of Pythagoras";
  caption.classList.add("caption");
  table.appendChild(caption);
  const tblBody = document.createElement("tbody");

  for (let i = 1; i <= size; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= size; j++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`${i * j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
      cell.classList.add("cell");
      if (j === 1 || i === 1) {
        cell.classList.add("bg_color_dark");
      }

      cell.addEventListener("mouseenter", function () {
        row.classList.add("bg_color_light");

        const columnIndex = cell.cellIndex;
        for (const row of table.rows) {
          row.cells[columnIndex]?.classList.add("bg_color_light");
        }
      });

      cell.addEventListener("mouseleave", function () {
        row.classList.remove("bg_color_light");

        const columnIndex = cell.cellIndex;
        for (const row of table.rows) {
          row.cells[columnIndex]?.classList.remove("bg_color_light");
        }
      });
    }
    tblBody.appendChild(row);
    table.appendChild(tblBody);
    element.appendChild(table);
  }
}
const containerElement = document.getElementById("container");
createPythagorasTable(containerElement, 10);
