
const tBody = document.querySelector('tbody');

function updateTable() {
    const tableData = food
        .map((item) => {
            return `
    <tr>
    <td>${item.name}</td>
    <td>$${item.price}</td>
    </tr>
    `;
        })
        .join('');

  tBody.innerHTML = tableData;
}