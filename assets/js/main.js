const tBody = document.querySelector('tbody')
const btn = document.getElementById("btnInfo");


const BASE__URL = "https://jsonplaceholder.typicode.com";

const getData = () => {
    const getInfo = fetch(`${BASE__URL}/posts/1/comments`)
        .then((response) => response.json())
        .then((data) => {
            data?.map((item) => (
                tBody.innerHTML +=
                `<tr>
  <td>
      <input type="checkbox">
  </td>
  <td>${item.id}</td>
  <td>${item.name}</td>
  <td>${item.email}</td>
  <td>${item.body}</td>
  <td>
      <i class="las la-pen"></i>
      <i class="las la-trash-alt del"></i>
  </td>
</tr>`
            ))
        })
    return getInfo
}

btn.addEventListener('click', getData)