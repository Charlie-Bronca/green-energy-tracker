import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Sources() {
    return (
    <>
        <NavBar />
        <div class="main-section-other" id="main-section-scroll">
            <div class="main-container -other">
                <div class="main-column1-other">
                    <h2 class="main-h2-other">Data Sources</h2>
                    <p class="main-paragraph-other">At Green Energy Tracker, we are committed to providing accurate, reliable, and up-to-date information on green energy usage in the United Kingdom. Our data is sourced from a variety of reputable sources, including government agencies, energy providers, research institutions, and environmental organizations. These sources are carefully selected based on their expertise, authority, and track record of providing reliable data on renewable energy.</p>
                    <h4 class="main-h4-other">Government Agencies:</h4>
                    <p class="main-paragraph-other">We rely on data from government agencies such as the Department for Business, Energy & Industrial Strategy (BEIS), the Office for National Statistics (ONS), and devolved administrations in Scotland, Wales, and Northern Ireland. These agencies provide official statistics and reports on energy production, consumption, and policy developments.</p>
                    <h4 class="main-h4-other">Energy Providers:</h4>
                    <p class="main-paragraph-other">Data from leading energy providers and grid operators, including National Grid, EDF Energy, ScottishPower, and others, is utilized to track real-time energy generation and consumption patterns. This data helps us understand the contribution of renewable energy sources to the overall energy mix.</p>
                    <h4 class="main-h4-other">Research Institutions:</h4>
                    <p class="main-paragraph-other">We collaborate with reputable research institutions and academic organizations to access cutting-edge research and analysis on green energy technologies, trends, and innovations. Institutions such as the Centre for Renewable Energy Systems Technology (CREST) and the Energy Systems Research Unit (ESRU) provide valuable insights into the potential and challenges of renewable energy deployment.</p>
                    <h4 class="main-h4-other">Environmental Organizations:</h4>
                    <p class="main-paragraph-other">Environmental organizations and advocacy groups, such as Greenpeace, Friends of the Earth, and the Renewable Energy Association (REA), contribute valuable data and expertise on environmental impacts, policy advocacy, and community initiatives related to renewable energy.</p>
                    <h4 class="main-h4-other">Data Validation:</h4>
                    <p class="main-paragraph-other">Before being presented on our platform, all data undergoes rigorous validation and verification processes to ensure accuracy, integrity, and credibility. We prioritize transparency and reliability in our data collection and reporting practices, striving to provide users with the most trustworthy information available.</p>
                </div>
            </div>
        </div>
        <Footer />
    </>
    );
}

