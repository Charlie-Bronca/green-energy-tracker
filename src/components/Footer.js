import React from "react";

export default function Footer() {
  return (
    <>
      <footer class="footer-section">
        <div class="footer-columns">
          <div class="footer-column1">
            <p class="footer-logo">Green Energy Tracker</p>
            <p class="footer-paragraph">Sign up for our newsletter</p>
            <form>
              <input
                type="email"
                name="Email Address"
                id="Email Address"
                placeholder="Email Address"
                class="footer-email"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Please enter a valid email address"
              />
              <input
                type="submit"
                name="Subscribe"
                id="Subscribe"
                value="Subscribe"
                class="subscribe-button"
              />
            </form>
          </div>
          <div class="footer-column2">
  <ul className="company-column">
    <li>
      <h3 className="company-h3">Company</h3>
    </li>
    <li>
      <a href="/home" class="company-home">
        Home
      </a>
    </li>
    <li>
      <a href="/home#uk-energy-tracker-scroll" class="company-energy">
        Energy
      </a>
    </li>
    <li>
      <a href="/home#progress-section-scroll" class="company-progress">
        Progress
      </a>
    </li>
    <li>
      <a href="/home#main-section-scroll" class="company-area">
        Your Area
      </a>
    </li>
  </ul>
  <ul class="data-column">
    <li>
      <h3 class="data-h3">Data</h3>
    </li>
    <li>
      <a href="/sources" class="data-sources">
        Data Sources
      </a>
    </li>
    <li>
      <a href="/methodologies" class="data-methodologies">
        Methodologies
      </a>
    </li>
  </ul>
  <ul class="legal-column">
    <li>
      <h3 class="legal-h3">Legal</h3>
    </li>
    <li>
      <a href="/privacy" class="legal-privacy-policy">
        Privacy Policy
      </a>
    </li>
    <li>
      <a href="/terms" class="legal-terms">
        Terms of Use
      </a>
    </li>
  </ul>
</div>

        </div>
      </footer>
      <section class="copyright-section">
        <p class="copyright-paragraph">
          Copyright 2023 Green Energy Tracker. All Rights Reserved.
        </p>
      </section>
    </>
  );
}
