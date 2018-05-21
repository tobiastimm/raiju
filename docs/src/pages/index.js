import React from 'react'
import Link from 'gatsby-link'

import screenshot from '../assets/images/screenshot.png'
import './index.css'

const IndexPage = () => (
  <div>
    <main className="main-container">
      <div />
      <section className="container title-container title-effect">
        <div className="title">
          <div className="flex-centered">
            <h1>Raijū</h1>
          </div>
          <p>
            <strong className="raiju-blue">Raijū</strong> is a Visual Studio
            Code theme inspired by{' '}
            <a href="https://marketplace.visualstudio.com/items?itemName=wart.ariake-dark">
              Ariake Dark
            </a>{' '}
            and{' '}
            <a href="https://marketplace.visualstudio.com/items?itemName=gaearon.subliminal">
              Subliminal
            </a>
            .
          </p>
        </div>
      </section>
      <section className="container download-container">
        <div className="download-image-wrapper">
          <picture>
            <img className="download-image" src={screenshot} />
          </picture>
        </div>
        <div className="install-container">
          <h2>
            <span>Install</span>
          </h2>
          <p>Do you want to try Raijū?</p>
          <div className="cli">
            <label>Install via CLI</label>
            <div className="code">
              <pre>
                <code>
                  <span>$ </span>
                  git clone https://github.com/tobiastimm/raiju.git
                  ~/.vscode/extensions/raiju
                </code>
              </pre>
            </div>
          </div>
          <div className="cli">
            <div className="instructions-header">
              <label>Install via</label>
              <svg
                className="vs-code"
                width="21"
                height="22"
                viewBox="0 0 21 22"
              >
                <path
                  fill="#6f7899"
                  d="M21.9980902,7.05213528 L22,24.9558586 L17.0004653,27 L8.24542044,18.3059039 L2.9904497,22.3987722 L1,21.3771089 L1.00199979,10.6348745 L3.00181348,9.60581456 L8.26108889,13.7020894 L16.9946509,5 L21.9980902,7.05213528 Z M16.4966475,12.1654844 L11.4990677,15.9880111 L16.4986023,19.8405089 L16.4966475,12.1654844 Z M3.4986824,13.7064321 L3.50168388,18.3041032 L5.99842148,15.9897298 L3.4986824,13.7064321 Z"
                  transform="translate(-1 -5)"
                />
              </svg>
            </div>
            <a
              className="download-btn"
              href="https://marketplace.visualstudio.com/items?itemName=tobiastimm.raiju"
            >
              Download
            </a>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer">
      <a href="https://github.com/tobiastimm/">
        by Tobias Timm - Copyright 2018
      </a>
    </footer>
  </div>
)

export default IndexPage
