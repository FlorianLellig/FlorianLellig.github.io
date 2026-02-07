import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import clsx from 'clsx';

export default function Home() {
  return (
    <Layout 
      title="Learning-Hub" 
      description="Zentrale Übersicht der SAP und IT-Dokumentationen">
      
      {/* Hero-Bereich: Professionelles Blau-Gradient */}
      <header className={clsx('hero shadow--lw')} style={{
        padding: '5rem 0', 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%)', // Deep Business Blue
        color: 'white'
      }}>
        <div className="container">
          <h1 className="hero__title" style={{fontWeight: '800', fontSize: '3.5rem'}}>
            Learning Hub
          </h1>
          <p className="hero__subtitle" style={{opacity: '0.9'}}>
            Wirtschaftsinformatik • Software Engineering • SAP Development
          </p>
          <div style={{marginTop: '2rem'}}>
             <span className="badge badge--secondary" style={{margin: '0 0.5rem'}}>DHBW Mannheim</span>
             <span className="badge badge--secondary" style={{margin: '0 0.5rem'}}>SAP CAP</span>
             <span className="badge badge--secondary" style={{margin: '0 0.5rem'}}>Java</span>
          </div>
        </div>
      </header>

      <main style={{padding: '4rem 0', backgroundColor: 'var(--ifm-background-color)'}}>
        <div className="container">
          <div className="row">
            
            {/* Box 1: SAP Frameworks */}
            <div className="col col--6 margin-bottom--lg">
              <div className="card shadow--md" style={{
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                borderBottom: '4px solid #0070f3' // SAP-ähnliches Blau
              }}>
                <div className="card__header">
                  <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🚀</div>
                  <h3 style={{fontSize: '1.5rem'}}>SAP Frameworks</h3>
                </div>
                <div className="card__body">
                  <p>
                    Deep-Dives und Dokumentationen zu modernen SAP-Technologien. 
                    Fokus auf <strong>SAP CAP (Cloud Application Programming Model)</strong> mit Java Backend-Entwicklung.
                  </p>
                </div>
                <div className="card__footer" style={{marginTop: 'auto'}}>
                  <Link 
                    className="button button--primary button--block" 
                    to="/docs-sap/intro"
                    style={{backgroundColor: '#0070f3', border: 'none'}}>
                    Dokumentation öffnen
                  </Link>
                </div>
              </div>
            </div>

            {/* Box 2: DHBW / Wirtschaftsinformatik */}
            <div className="col col--6 margin-bottom--lg">
              <div className="card shadow--md" style={{
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                borderBottom: '4px solid #2d3748' // Seriöses Anthrazit
              }}>
                <div className="card__header">
                  <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🎓</div>
                  <h3 style={{fontSize: '1.5rem'}}>Wirtschaftsinformatik</h3>
                </div>
                <div className="card__body">
                  <p>
                    Gesammelte Lernmaterialien und Projektnotizen aus dem Studium an der 
                    <strong> DHBW Mannheim</strong>. Fokus auf Software Engineering und theoretische Grundlagen.
                  </p>
                </div>
                <div className="card__footer" style={{marginTop: 'auto'}}>
                  <Link 
                    className="button button--secondary button--block" 
                    to="/docs-wiwi/intro">
                    Lernmaterialien ansehen
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </Layout>
  );
}