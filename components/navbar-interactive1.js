import React from 'react'

import PropTypes from 'prop-types'

const NavbarInteractive1 = (props) => {
  return (
    <>
      <div className="navbar-interactive1-container">
        <header
          data-thq="thq-navbar"
          className="navbar-interactive1-navbar-interactive"
        >
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="navbar-interactive1-image"
          />
          <div
            data-thq="thq-navbar-nav"
            className="navbar-interactive1-desktop-menu"
          >
            <nav className="navbar-interactive1-links">
              <div className="navbar-interactive1-container1">
                <svg
                  viewBox="0 0 1024 1024"
                  className="navbar-interactive1-icon"
                >
                  <path d="M512 128l342 256v512h-214v-298h-256v298h-214v-512z"></path>
                </svg>
                <span className="navbar-interactive1-text">{props.text}</span>
              </div>
              <div className="navbar-interactive1-container2">
                <svg
                  viewBox="0 0 1024 1024"
                  className="navbar-interactive1-icon02"
                >
                  <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
                </svg>
                <span className="navbar-interactive1-text1">{props.text1}</span>
              </div>
            </nav>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="navbar-interactive1-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="navbar-interactive1-icon04">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="navbar-interactive1-mobile-menu"
          >
            <div className="navbar-interactive1-nav">
              <div className="navbar-interactive1-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar-interactive1-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="navbar-interactive1-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive1-icon06"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-interactive1-links1">
                <span className="navbar-interactive1-text2">{props.text2}</span>
                <span className="navbar-interactive1-text3">{props.text3}</span>
              </nav>
              <div className="navbar-interactive1-buttons"></div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="navbar-interactive1-icon08"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navbar-interactive1-icon10"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navbar-interactive1-icon12"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-interactive1-container {
            width: 100%;
            display: flex;
            position: relative;
            direction: rtl;
          }
          .navbar-interactive1-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #111111;
          }
          .navbar-interactive1-image {
            height: 3rem;
            text-decoration: none;
          }
          .navbar-interactive1-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar-interactive1-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-interactive1-container1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            text-decoration: none;
          }
          .navbar-interactive1-icon {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            margin-left: 5px;
          }
          .navbar-interactive1-text {
            color: var(--dl-color-gray-900);
            font-size: 24px;
          }
          .navbar-interactive1-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .navbar-interactive1-icon02 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            margin-left: 5px;
          }
          .navbar-interactive1-text1 {
            color: var(--dl-color-gray-900);
            font-size: 24px;
          }
          .navbar-interactive1-burger-menu {
            display: none;
          }
          .navbar-interactive1-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-interactive1-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateX(-100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #111;
          }
          .navbar-interactive1-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive1-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-interactive1-logo {
            height: 2rem;
            text-decoration: none;
          }
          .navbar-interactive1-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-interactive1-icon06 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .navbar-interactive1-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive1-text2 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive1-text3 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navbar-interactive1-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-interactive1-icon08 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .navbar-interactive1-icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .navbar-interactive1-icon12 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .navbar-interactive1-image {
              height: 3rem;
            }
          }
          @media (max-width: 767px) {
            .navbar-interactive1-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar-interactive1-image {
              height: 3.5rem;
            }
            .navbar-interactive1-desktop-menu {
              display: none;
            }
            .navbar-interactive1-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navbar-interactive1-icon04 {
              fill: var(--dl-color-gray-white);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .navbar-interactive1-logo {
              height: 3.5rem;
            }
            .navbar-interactive1-text2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-interactive1-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .navbar-interactive1-navbar-interactive {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .navbar-interactive1-image {
              height: 3.5rem;
            }
            .navbar-interactive1-icon04 {
              width: 30px;
              height: 30px;
            }
            .navbar-interactive1-mobile-menu {
              padding: 16px;
              background-color: #111111;
            }
            .navbar-interactive1-icon06 {
              fill: var(--dl-color-gray-white);
              width: 30px;
              height: 30px;
            }
            .navbar-interactive1-text2 {
              color: var(--dl-color-gray-white);
            }
            .navbar-interactive1-text3 {
              color: var(--dl-color-gray-white);
            }
            .navbar-interactive1-icon08 {
              fill: var(--dl-color-gray-white);
            }
            .navbar-interactive1-icon10 {
              fill: var(--dl-color-gray-white);
            }
            .navbar-interactive1-icon12 {
              fill: var(--dl-color-gray-white);
            }
          }
        `}
      </style>
    </>
  )
}

NavbarInteractive1.defaultProps = {
  text3: 'צור קשר\n',
  imageAlt: 'logo',
  text: 'דף הבית',
  logoAlt: 'image',
  text1: 'צור קשר',
  imageSrc: '8ff87394-9c44-45be-a984-e69c1b59aac1',
  logoSrc: '8ff87394-9c44-45be-a984-e69c1b59aac1',
  text2: 'דף הבית',
}

NavbarInteractive1.propTypes = {
  text3: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  logoAlt: PropTypes.string,
  text1: PropTypes.string,
  imageSrc: PropTypes.string,
  logoSrc: PropTypes.string,
  text2: PropTypes.string,
}

export default NavbarInteractive1
