fetch('https://ashmer-ai-test2.ashutoshmerwade-pro.workers.dev/', {
  method: 'POST',
  body: JSON.stringify({ prompt: "Hello AI" }),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => {
  console.log(data.response); // Display it in chatbot
});
