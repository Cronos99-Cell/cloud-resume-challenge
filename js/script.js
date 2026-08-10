// Cloud Resume Challenge JavaScript
document.addEventListener("DOMContentLoaded", () => {

    const visitorCount = document.getElementById("visitor-count");

    if (!visitorCount) {
        return;
    }

    visitorCount.textContent = "Loading...";

    // AWS API Gateway endpoint will be added here
    // when we build the Lambda and DynamoDB backend.

});