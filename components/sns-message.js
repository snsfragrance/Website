```javascript
/* =====================================================
   SNS GLOBAL MESSAGE
===================================================== */

(function () {
  // Prevent duplicate message buttons
  if (document.getElementById("sns-global-message")) return;

  const message = document.createElement("a");

  message.id = "sns-global-message";
  message.className = "sns-global-message";

  message.href = "https://wa.me/message/TZMPXSMPC6XHM1";
  message.target = "_blank";
  message.rel = "noopener noreferrer";

  message.setAttribute("aria-label", "Contact SNS Fragrance");
  message.setAttribute("title", "Contact SNS Fragrance");

  message.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5.5 h14 a2 2 0 0 1 2 2 v8 a2 2 0 0 1-2 2 h-7 l-4 3 v-3 H5 a2 2 0 0 a-2-2 v-8 a2 2 0 0 a2-2-2-2z"></path>
      <circle cx="8" cy="11.5" r=".7"></circle>
      <circle cx="12" cy="11.5" r=".7"></circle>
      <circle cx="16" cy="11.5" r=".7"></circle>
    </svg>
  `;

  document.body.appendChild(message);
})();
```
