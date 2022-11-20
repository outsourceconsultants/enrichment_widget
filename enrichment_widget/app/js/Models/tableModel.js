
const tBody = document.querySelector('tbody');

function updateTable() {
    const tableData = food
        .map((item) => {
            return `
    <tr>
    <td>${item.name}</td>
    <td>$${item.price}</td>
    <td>${item.popularity}</td>
    <td><i class="fas fa-times-circle"></i></td>
    </tr>
    `;
        })
        .join('');

  tBody.innerHTML = tableData;
}