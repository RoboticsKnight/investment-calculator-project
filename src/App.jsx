import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero"> {/* Start of division for images */}
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div> {/* End of division for images */}
        <div> {/* Start of division for Text */}
          <h1>Get started</h1> {/* Text */}
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div> {/* End of division for Text */}
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        > {/* Start of click button */}
          Count is {count}
        </button> {/* End of click button */}
      </section>

      <div className="ticks"></div> {/* Bevels for division */}

      <section id="next-steps">
        <div id="docs"> {/* Start of documentation division */}
          <svg className="icon" role="presentation" aria-hidden="true"> {/* Document Icon */}
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2> {/* Text */}
          <p>Your questions, answered</p>
          <ul> {/* Start of unordered list */}
            <li> {/* Start of explore vite button */}
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" /> {/* Vite logo */}
                Explore Vite
              </a> {/* Link */}
            </li> {/* End of explore vite button */}
            <li> {/* Start of learn more button */}
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" /> {/* React logo */}
                Learn more
              </a> {/* Link */}
            </li> {/* End of learn more button */}
          </ul> {/* End of unordered list */}
        </div>
        <div id="social"> {/* Start social media division */}
          <svg className="icon" role="presentation" aria-hidden="true">{/* Person Icon */}
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>{/* Text */}
          <p>Join the Vite community</p>
          <ul>{/* Start of unordered list */}
            <li>{/* Start of Github button */}
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>{/* End of GitHub button */}
            <li>{/* Start of Discord button */}
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>{/* End of Discord button */}
            <li>{/* Start of X/Twitter button */}
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>{/* End of X/Twitter button */}
            <li>{/* Start of Bluesky button */}
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>{/* End of Blucesky button */}
          </ul>{/* End of unordered list */}
        </div>{/* End social media division */}
      </section>

      <div className="ticks"></div> {/* Bevels for division after Connect with us section */}
      <section id="spacer"></section> {/* Adds a tiny space to the bottom of the section */}
    </>
  )
}

export default App
