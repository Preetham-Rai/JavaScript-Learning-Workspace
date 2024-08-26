const insertKey = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insertKey.innerHTML = `
    <div class='color'>
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
    </div>
    `;
});
