/* ==========================================
   SNS FRAGRANCE — GLOBAL FOOTER LOADER
========================================== */

document.addEventListener("DOMContentLoaded", function () {

  const footerContainer = document.getElementById("sns-footer-container");

  if (!footerContainer) return;

  fetch("/components/sns-footer.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("SNS Footer failed to load");
      }

      return response.text();
    })
    .then(html => {
      footerContainer.innerHTML = html;
    })
    .catch(error => {
      console.error("SNS Footer Error:", error);
    });

});
