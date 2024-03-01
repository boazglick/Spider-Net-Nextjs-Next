import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  DateTimePrimitive,
} from '@teleporthq/react-components'
import Script from 'dangerous-html/react'

import homeResource from '../resources/home'

const Home = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Spider Net Nextjs</title>
          <meta property="og:title" content="Spider Net Nextjs" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8010cf50-dc7b-43dd-8dd4-1db8744ad529/2d8fbd1a-969a-45f3-a008-9337f8510763?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <img alt="logo" src="/path15-1500h.png" className="home-image" />
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <Link href="/">
                <a className="home-link">
                  <div className="home-container1">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M512 128l342 256v512h-214v-298h-256v298h-214v-512z"></path>
                    </svg>
                    <span className="home-text">דף הבית</span>
                  </div>
                </a>
              </Link>
              <Link href="/contact">
                <a className="home-link1">
                  <div className="home-container2">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
                    </svg>
                    <span className="home-text1">צור קשר</span>
                  </div>
                </a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon04">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <img
                  alt="image"
                  src="/path15-1500h.png"
                  className="home-logo"
                />
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <Link href="/">
                  <a className="home-link2">דף הבית</a>
                </Link>
                <Link href="/contact">
                  <a className="home-link3">צור קשר</a>
                </Link>
              </nav>
              <div className="home-buttons"></div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon08">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon10">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon12">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-top-title">
          <span className="home-text2">כל המאמרים</span>
        </div>
        <div className="home-container3">
          <DataProvider
            renderSuccess={(params) => (
              <>
                <Repeater
                  items={params}
                  renderItem={(context_wi0d49) => (
                    <>
                      <Link href={`/post/${context_wi0d49?.slug}`}>
                        <a>
                          <div className="home-product-minitura">
                            <div className="home-image1">
                              <DataProvider
                                fetchData={(params) =>
                                  fetch(
                                    `/api/attachment-resource-attachment?${new URLSearchParams(
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
                                renderSuccess={(context_h2kdcd) => (
                                  <>
                                    <img
                                      alt="image"
                                      src={context_h2kdcd?.source_url}
                                      className="home-image2"
                                    />
                                  </>
                                )}
                                params={{
                                  include: context_wi0d49?.featured_media,
                                }}
                              />
                            </div>
                            <span className="home-text3">
                              {context_wi0d49?.title?.rendered}
                            </span>
                            <div className="home-date-and-author">
                              <span className="home-prefix">
                                פורסם בתאריך: 
                              </span>
                              <span className="home-date-time">
                                <DateTimePrimitive
                                  format="DD/MM/YYYY"
                                  date={context_wi0d49?.date}
                                ></DateTimePrimitive>
                              </span>
                            </div>
                            <div>
                              <Script
                                html={context_wi0d49?.excerpt?.rendered}
                              ></Script>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </>
                  )}
                />
              </>
            )}
            renderLoading={() => (
              <>
                <div className="home-div">
                  <lottie-player
                    src="https://lottie.host/c1e3a30b-9c83-46be-a838-a249c8aa863c/vZZAyBVfeU.json"
                    loop="true"
                    speed="1"
                    autoplay="true"
                    background="transparent"
                  ></lottie-player>
                </div>
                <div className="home-div1">
                  <lottie-player
                    src="https://lottie.host/c1e3a30b-9c83-46be-a838-a249c8aa863c/vZZAyBVfeU.json"
                    loop="true"
                    speed="1"
                    autoplay="true"
                    background="transparent"
                  ></lottie-player>
                </div>
                <div className="home-div2">
                  <lottie-player
                    src="https://lottie.host/c1e3a30b-9c83-46be-a838-a249c8aa863c/vZZAyBVfeU.json"
                    loop="true"
                    speed="1"
                    autoplay="true"
                    background="transparent"
                  ></lottie-player>
                </div>
                <div className="home-div3">
                  <lottie-player
                    src="https://lottie.host/c1e3a30b-9c83-46be-a838-a249c8aa863c/vZZAyBVfeU.json"
                    loop="true"
                    speed="1"
                    autoplay="true"
                    background="transparent"
                  ></lottie-player>
                </div>
              </>
            )}
            initialData={props.contextWi0d49Prop}
            persistDataDuringLoading={true}
          />
        </div>
        <footer className="home-footer">
          <img alt="logo" src="/ninjalogo.svg" className="home-image3" />
          <div className="home-container5">
            <span className="home-text4">2024</span>
            <div>
              <div className="home-container7">
                <Script
                  html={`<script>document.getElementById("year").innerHTML = new Date().getFullYear();
</script>`}
                ></Script>
              </div>
            </div>
            <span className="home-text5">
              © SpiderNet, All Rights Reserved.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://011.ninja"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5"
            >
              Code design by 011.ninja
            </a>
          </div>
          <div className="home-icon-group1">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            direction: rtl;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-interactive {
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
          .home-image {
            height: 2rem;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link {
            display: contents;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            text-decoration: none;
          }
          .home-icon {
            width: 24px;
            height: 24px;
            margin-left: 5px;
          }
          .home-text {
            font-size: 24px;
          }
          .home-link1 {
            display: contents;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-icon02 {
            width: 24px;
            height: 24px;
            margin-left: 5px;
          }
          .home-text1 {
            font-size: 24px;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
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
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo {
            height: 2rem;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link2 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link3 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .home-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .home-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .home-top-title {
            flex: 0 0 auto;
            width: 100%;
            height: 250px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
            background-color: #111;
          }
          .home-text2 {
            color: var(--dl-color-gray-900);
            font-size: 4em;
            align-self: center;
            font-style: normal;
            font-family: 'Heebo';
            font-weight: 900;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: grid;
            position: relative;
            direction: rtl;
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            align-items: flex-start;
            grid-template-columns: repeat(4, 1fr);
          }
          .home-product-minitura {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            text-decoration: none;
          }
          .home-image1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image2 {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text3 {
            width: 100%;
            height: 60px;
            font-size: 1.5em;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-date-and-author {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-prefix {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-date-time {
            font-weight: 600;
          }
          .home-div {
            width: 100%;
            height: 300px;
          }
          .home-div1 {
            width: 100%;
            height: 300px;
          }
          .home-div2 {
            width: 100%;
            height: 300px;
          }
          .home-div3 {
            width: 100%;
            height: 300px;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #111;
          }
          .home-image3 {
            height: 2rem;
            object-fit: cover;
          }
          .home-container5 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            direction: ltr;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text4 {
            color: var(--dl-color-gray-white);
            font-family: 'Exo 2';
          }
          .home-container7 {
            display: contents;
          }
          .home-text5 {
            color: rgb(255, 255, 255);
            font-family: 'Exo 2';
            margin-right: var(--dl-space-space-unit);
          }
          .home-link5 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            font-family: 'Impact';
            text-decoration: none;
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon14 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .home-icon16 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .home-icon18 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          @media (max-width: 1200px) {
            .home-container3 {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          @media (max-width: 991px) {
            .home-container3 {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-link2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container3 {
              grid-template-columns: repeat(1, 1fr);
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text5 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-link5 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-text2 {
              font-size: 3em;
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-image3 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text5 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link5 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  try {
    const contextWi0d49Prop = await homeResource({
      ...context?.params,
    })
    if (!contextWi0d49Prop) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        contextWi0d49Prop: contextWi0d49Prop,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
