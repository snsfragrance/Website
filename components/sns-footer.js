
/* ==========================================
   SNS FRAGRANCE — GLOBAL FOOTER LOADER
========================================== */

(function () {

  const currentScript = document.currentScript;

  const footerURL = currentScript
    ? new URL("./sns-footer.html", currentScript.src).href
    : "components/sns-footer.html";

  function loadSNSFooter() {

    const footerContainer = document.getElementById("sns-footer-container");

    if (!footerContainer) return;

    fetch(footerURL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to load SNS Footer");
        }

        return response.text();
      })
      .then(html => {
        footerContainer.innerHTML = html;
      })
      .catch(error => {
        console.error("SNS Global Footer Error:", error);
      });

  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadSNSFooter);
  } else {
    loadSNSFooter();
  }

})();
