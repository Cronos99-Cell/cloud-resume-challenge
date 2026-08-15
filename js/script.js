// Cloud Resume Challenge JavaScript
document.addEventListener("DOMContentLoaded", () => {

    const visitorCount = document.getElementById("visitor-count");

    if (!visitorCount) {
        return;
    }

    visitorCount.textContent = "Loading...";

    const apiUrl =
    "https://yfsnyqf9rg.execute-api.af-south-1.amazonaws.com/CloudResumeVisitorCounter";

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            visitorCount.textContent = data.count;
        })
        .catch(error => {
            console.error("Visitor counter error:", error);
            visitorCount.textContent = "Unable to load";
        });
});