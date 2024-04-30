import React from 'react'




export default function Footer() {
    return (
        <><div class="footer-section">
            <div class="footer-columns">
                <div class="footer-column1">
                    <p class="footer-logo">Green Energy Tracker</p>
                    <p class="footer-paragraph">Sign up for our newsletter</p>
                    <form>
                        <input type="email" name="Email Address" id="Email Address" placeholder="Email Address"
                            class="footer-email" />
                        <input type="submit" name="Subscribe" id="Subscribe" value="Subscribe" class="subscribe-button" />
                    </form>
                </div>
                <div class="footer-column2">
                    <div className="company-column">
                        <h4 className="company-h4">Company</h4>
                        <a href="/home" class="company-home">Home</a>
                        <a href="/home#uk-energy-tracker-scroll" class="company-energy">Energy</a>
                        <a href="/home#progress-section-scroll" class="company-progress">Progress</a>
                        <a href="/home#main-section-scroll" class="company-area">Your Area</a>
                    </div>
                    <div class="data-column">
                        <h4 class="data-h4">Data</h4>
                        <a href="/sources" class="data-sources">Data Sources</a>
                        <a href="/methodologies" class="data-methodologies">Methodologies</a>
                    </div>
                    <div class="legal-column">
                        <h4 class="legal-h4">Legal</h4>
                        <a href="/privacy" class="legal-privacy-policy">Privacy Policy</a>
                        <a href="/terms" class="legal-terms">Terms of Use</a>
                    </div>
                </div>
            </div>
        </div><div class="copyright-section">
                <p class="copyright-paragraph">Copyright 2023 Green Energy Tracker. All Rights Reserved.</p>
            </div></>
    )
}