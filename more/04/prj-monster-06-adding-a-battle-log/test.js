// https://stackoverflow.com/questions/56411378/how-to-add-vanilla-javascript-to-vue-js-project

export function rowspanfirstcell() {
  let table = document.querySelector('table');
  let headerCell = null;

  for (let row of table.rows) {
    const firstCell = row.cells[0];
    if (headerCell === null || firstCell.innerText !== headerCell.innerText) {
      headerCell = firstCell;
    } else {
      headerCell.rowSpan++;
      firstCell.remove();
    }
  }
}





