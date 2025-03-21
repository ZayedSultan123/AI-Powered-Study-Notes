const API_URL = "https://workers-playground-cool-unit-2103.zayedsultan37979.workers.dev/";

async function fetchAIResponse(userInput) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userInput }]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}

// Example Usage:
fetchAIResponse("Hello, AI!").then(console.log);
