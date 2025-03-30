fetch(`https://api.jsonbin.io/v3/b/67e8f80b8561e97a50f580ff`, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data.record.sweets);
  })
  .catch((error) => console.error('Error fetching data:', error));
