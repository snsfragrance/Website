/* SNS FRAGRANCE GLOBAL HEADER — insert into #sns-header-container */
(() => {
  const container = document.getElementById('sns-header-container');
  if (!container || container.dataset.snsHeaderLoaded === 'true') return;
  container.dataset.snsHeaderLoaded = 'true';

  container.innerHTML = `
    <div class="announcement">
      <div class="announcement-track">
        <span>THE ART OF SCENT</span><span>A SYMPHONY FOR THE SENSES</span><span>DISCOVER SNS FRAGRANCE</span>
        <span>THE ART OF SCENT</span><span>A SYMPHONY FOR THE SENSES</span><span>DISCOVER SNS FRAGRANCE</span>
      </div>
    </div>
    <header>
      <div class="header-main">
        <div class="logo"><img src="img/Logo SNS.png" alt="SNS Fragrance"></div>
        <div class="header-icons"></div>
      </div>
      <nav class="navigation" aria-label="Main navigation">
        <a href="bestsellers.html">Best Seller</a>
        <a href="extrait.html">Extrait de Parfum</a>
        <a href="edp.html">Eau de Parfum</a>
        <a href="edt.html">Body Mist</a>
        <a href="bodyoil.html">Body Oil</a>
        <a href="bodywash.html">Body Wash</a>
        <a href="homefragrance.html">Home Fragrance</a>
        <a href="limited.html">Special Event</a>
        <a href="collab.html">Special Collaboration</a>
      </nav>
    </header>`;

  const currentPage = window.location.pathname.split('/').pop().toLowerCase();
  container.querySelectorAll('.navigation a').forEach(link => {
    const linkPage = link.getAttribute('href').toLowerCase();
    if (linkPage === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
