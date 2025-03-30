//   ! jsonbin.io
// fetch('https://api.jsonbin.io/v3/b/67e8f80b8561e97a50f580ff')
//   .then((res) => res.json())
//   .then((data) => {
//     data.record.sweets.forEach((sweet) => {
//       document.body.innerHTML += `
//         <div style="margin: 20px; text-align: center;">
//           <h3>${sweet.name}</h3>
//           <img src="${sweet.image}" width="200" alt="${sweet.name}" />
//           <p>${sweet.shortDescription}</p>
//         </div>
//       `;
//     });
//   });

// ! Firebase

fetch('https://sweets-api-12345.web.app/api/sweets.json')
  .then((response) => response.json())
  .then((data) => console.log(data.sweets)); // Array of sweets
