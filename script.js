const API_URL = "https://little-unit-5bf3.zayedsultan37979.workers.dev/";

async function fetchAIResponse(userInput) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userInput }]
      })
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Sorry, there was an error generating the summary.";
  }
}

// Function to handle the button click
async function generateSummary() {
  const userInput = document.getElementById("textInput").value;
  if (!userInput) {
    document.getElementById("output").innerText = "Please enter some text to summarize.";
    return;
  }

  document.getElementById("output").innerText = "Generating summary...";

  const summary = await fetchAIResponse(userInput);
  document.getElementById("output").innerText = summary;
}

// Set up event listener for button click after DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("generateButton").addEventListener("click", generateSummary);
});
