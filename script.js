async function generateSummary() {
    let text = document.getElementById("textInput").value;
    if (text.length === 0) {
        alert("Please enter some text.");
        return;
    }
    document.getElementById("output").innerText = "Generating summary...";
    try {
        let response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + API_KEY
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                prompt: "Summarize this: " + text,
                max_tokens: 100
            })
        });
        let data = await response.json();
        document.getElementById("output").innerText = data.choices[0].text.trim();
    } catch (error) {
        document.getElementById("output").innerText = "Error generating summary. Try again.";
    }
}
