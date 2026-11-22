
document.addEventListener("DOMContentLoaded", function () {

    const footerContainer = document.getElementById("sns-footer-container");

    if (!footerContainer) {
        console.warn("SNS Footer container not found.");
        return;
    }

    fetch("components/sns-footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load SNS footer.");
            }

            return response.text();
        })
        .then(html => {
            footerContainer.innerHTML = html;
        })
        .catch(error => {
            console.error("SNS Footer loading error:", error);
        });

});
