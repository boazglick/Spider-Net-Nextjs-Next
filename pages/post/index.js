import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Footer from '../../components/footer'
import postPageInitialPropsTqZSResource from '../../resources/post-page-initial-props-tq_z-s'

const Post = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className="post-container">
        <Head>
          <title>Post - SpiderNet Nextjs new</title>
          <meta property="og:title" content="Post - SpiderNet Nextjs new" />
        </Head>
        <header data-thq="thq-navbar" className="post-navbar-interactive">
          <Link href="/">
            <a className="post-link">
              <img alt="logo" src="/path15-1500h.png" className="post-image" />
            </a>
          </Link>
          <div data-thq="thq-navbar-nav" className="post-desktop-menu">
            <nav className="post-links">
              <Link href="/">
                <a className="post-link1">
                  <div className="post-container1">
                    <svg viewBox="0 0 1024 1024" className="post-icon">
                      <path d="M512 128l342 256v512h-214v-298h-256v298h-214v-512z"></path>
                    </svg>
                    <span className="post-text">דף הבית</span>
                  </div>
                </a>
              </Link>
              <Link href="/contact">
                <a className="post-link2">
                  <div className="post-container2">
                    <svg viewBox="0 0 1024 1024" className="post-icon02">
                      <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
                    </svg>
                    <span className="post-text1">צור קשר</span>
                  </div>
                </a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="post-burger-menu">
            <svg viewBox="0 0 1024 1024" className="post-icon04">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="post-mobile-menu">
            <div className="post-nav">
              <div className="post-top">
                <Link href="/">
                  <a className="post-link3">
                    <img
                      alt="image"
                      src="/ninjalogo-1500h.png"
                      className="post-logo"
                    />
                  </a>
                </Link>
                <div data-thq="thq-close-menu" className="post-close-menu">
                  <svg viewBox="0 0 1024 1024" className="post-icon06">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="post-links1">
                <Link href="/">
                  <a className="post-link4">דף הבית</a>
                </Link>
                <Link href="/contact">
                  <a className="post-link5">צור קשר</a>
                </Link>
              </nav>
              <div className="post-buttons"></div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="post-icon08">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="post-icon10">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="post-icon12">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="post-top-title">
          <span className="post-text2">כל המאמרים</span>
        </div>
        <div className="post-container3">
          <Link href="/">
            <a className="post-link6">
              <svg viewBox="0 0 1024 1024" className="post-icon14">
                <path d="M810 810v-170h-170v170h170zM554 554h342v342h-342v-342zM810 384v-170h-170v170h170zM554 128h342v342h-342v-342zM384 810v-170h-170v170h170zM128 554h342v342h-342v-342zM384 384v-170h-170v170h170zM128 128h342v342h-342v-342z"></path>
              </svg>
            </a>
          </Link>
        </div>
        <div className="post-container4">
          <DataProvider
            renderSuccess={(params) => (
              <>
                <Repeater
                  items={params}
                  renderItem={(PostEntities) => (
                    <>
                      <Link href={`/post/${PostEntities?.id}`}>
                        <a>
                          <div className="post-container5">
                            <h1 className="post-text3">
                              {PostEntities?.title?.rendered || ' '}
                            </h1>
                            <DataProvider
                              fetchData={(params) =>
                                fetch(
                                  `/api/attachment2-resource-attachment2?${new URLSearchParams(
                                    params
                                  )}`,
                                  {
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                  }
                                )
                                  .then((res) => res.json())
                                  .then((data) => data?.data?.[0])
                              }
                              renderSuccess={(context_1uja4) => (
                                <>
                                  <img
                                    src={
                                      context_1uja4?.source_url ||
                                      'https://images.unsplash.com/photo-1506112573664-1a1b66d93ff3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHZpZXd8ZW58MHx8fHwxNzA5NDA1MjI2fDA&ixlib=rb-4.0.3&h=300'
                                    }
                                    alt="image"
                                    className="post-image1"
                                  />
                                </>
                              )}
                              renderLoading={() => (
                                <>
                                  <div className="post-container6">
                                    <div className="post-div">
                                      <lottie-player
                                        src="https://lottie.host/c1e3a30b-9c83-46be-a838-a249c8aa863c/vZZAyBVfeU.json"
                                        autoplay="true"
                                        speed="1"
                                        background="transparent"
                                        loop="true"
                                      ></lottie-player>
                                    </div>
                                    <span className="post-loading1">
                                      טוען נתונים ...
                                    </span>
                                  </div>
                                </>
                              )}
                              renderError={() => (
                                <>
                                  <span className="post-error1">
                                    אירעה שגיאה בטעינת הנתונים
                                  </span>
                                </>
                              )}
                              params={{
                                include: PostEntities?.featured_media,
                              }}
                            />
                          </div>
                        </a>
                      </Link>
                    </>
                  )}
                />
              </>
            )}
            initialData={props.postEntities}
            persistDataDuringLoading={true}
            key={props?.pagination?.page}
          />
        </div>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .post-container {
            width: 100%;
            display: flex;
            overflow: auto;
            direction: rtl;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .post-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #f9f9f9;
          }
          .post-link {
            display: contents;
          }
          .post-image {
            cursor: pointer;
            height: 3rem;
            text-decoration: none;
          }
          .post-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .post-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .post-link1 {
            display: contents;
          }
          .post-container1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            text-decoration: none;
          }
          .post-icon {
            fill: var(--dl-color-gray-black);
            width: 24px;
            height: 24px;
            margin-left: 5px;
          }
          .post-text {
            color: var(--dl-color-gray-black);
            font-size: 24px;
          }
          .post-link2 {
            display: contents;
          }
          .post-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .post-icon02 {
            fill: var(--dl-color-gray-black);
            width: 24px;
            height: 24px;
            margin-left: 5px;
          }
          .post-text1 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
          }
          .post-burger-menu {
            display: none;
          }
          .post-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .post-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            z-index: 100;
            position: absolute;
            transform: translateX(-100%);
            transition: 0.5s;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #111;
          }
          .post-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .post-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .post-link3 {
            display: contents;
          }
          .post-logo {
            width: auto;
            height: 3rem;
            text-decoration: none;
          }
          .post-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .post-icon06 {
            fill: var(--dl-color-gray-white);
            width: 30px;
            height: 30px;
          }
          .post-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .post-link4 {
            color: var(--dl-color-gray-white);
            font-size: 2em;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .post-link5 {
            color: var(--dl-color-gray-white);
            font-size: 2em;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .post-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .post-icon08 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .post-icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .post-icon12 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .post-top-title {
            flex: 0 0 auto;
            width: 100%;
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #111111;
          }
          .post-text2 {
            color: var(--dl-color-gray-900);
            width: auto;
            font-size: 4em;
            text-align: center;
            font-weight: 900;
          }
          .post-container3 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-end;
          }
          .post-link6 {
            display: contents;
          }
          .post-icon14 {
            width: 35px;
            height: 35px;
            text-decoration: none;
          }
          .post-container4 {
            flex: 0 0 auto;
            width: 95%;
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .post-container5 {
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .post-text3 {
            margin: var(--dl-space-space-unit);
            padding: var(--dl-space-space-twounits);
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            border-radius: 20px;
          }
          .post-text3:hover {
            color: #f9f9f9;
            background: #111;
          }
          .post-image1 {
            width: 150px;
            height: 100px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            object-fit: cover;
            border-radius: 20px;
          }
          .post-error1 {
            padding: 8px;
          }
          .post-container6 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .post-div {
            width: 100%;
            height: 76px;
          }
          .post-loading1 {
            width: 100%;
            padding: 8px;
            text-align: center;
          }
          @media (max-width: 1600px) {
            .post-container5 {
              gap: 0;
              justify-content: space-between;
            }
          }
          @media (max-width: 1200px) {
            .post-container5 {
              gap: 0;
              justify-content: space-between;
            }
            .post-error1 {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .post-image {
              height: 3rem;
            }
            .post-container5 {
              gap: 0;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .post-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              background-color: #f9f9f9;
            }
            .post-image {
              height: 3rem;
            }
            .post-desktop-menu {
              display: none;
            }
            .post-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .post-icon04 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .post-mobile-menu {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .post-logo {
              height: 3rem;
            }
            .post-link4 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .post-link5 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .post-container5 {
              gap: 0;
              padding: var(--dl-space-space-unit);
              border-radius: 0px;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .post-navbar-interactive {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .post-image {
              height: 3rem;
            }
            .post-icon04 {
              width: 30px;
              height: 30px;
            }
            .post-mobile-menu {
              padding: 16px;
              background-color: #111111;
            }
            .post-icon06 {
              fill: var(--dl-color-gray-white);
              width: 30px;
              height: 30px;
            }
            .post-link4 {
              color: var(--dl-color-gray-white);
            }
            .post-link5 {
              color: var(--dl-color-gray-white);
            }
            .post-icon08 {
              fill: var(--dl-color-gray-white);
            }
            .post-icon10 {
              fill: var(--dl-color-gray-white);
            }
            .post-icon12 {
              fill: var(--dl-color-gray-white);
            }
            .post-container3 {
              height: auto;
            }
            .post-container4 {
              padding: var(--dl-space-space-unit);
            }
            .post-container5 {
              gap: 0;
              justify-content: space-between;
            }
            .post-text3 {
              font-size: 1em;
            }
          }
        `}
      </style>
    </>
  )
}

Post.defaultProps = {
  postEntities: [],
}

Post.propTypes = {
  postEntities: PropTypes.array,
}

export default Post

export async function getStaticProps(context) {
  try {
    const response = await postPageInitialPropsTqZSResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        postEntities: response,
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
