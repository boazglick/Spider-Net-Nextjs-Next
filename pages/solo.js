import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  DateTimePrimitive,
} from '@teleporthq/react-components'
import Script from 'dangerous-html/react'

import postResource from '../resources/post'

const Solo = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className="solo-container">
        <Head>
          <title>Solo - Spider Net Nextjs</title>
          <meta property="og:title" content="Solo - Spider Net Nextjs" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8010cf50-dc7b-43dd-8dd4-1db8744ad529/2d8fbd1a-969a-45f3-a008-9337f8510763?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
          <meta name="robots" content="noindex" />
        </Head>
        <header data-thq="thq-navbar" className="solo-navbar-interactive">
          <Link href="/">
            <a className="solo-link">
              <img alt="logo" src="/path15-1500h.png" className="solo-image" />
            </a>
          </Link>
          <div data-thq="thq-navbar-nav" className="solo-desktop-menu">
            <nav className="solo-links">
              <Link href="/">
                <a className="solo-link1">
                  <div className="solo-container1">
                    <svg viewBox="0 0 1024 1024" className="solo-icon">
                      <path d="M512 128l342 256v512h-214v-298h-256v298h-214v-512z"></path>
                    </svg>
                    <span className="solo-text">דף הבית</span>
                  </div>
                </a>
              </Link>
              <Link href="/contact">
                <a className="solo-link2">
                  <div className="solo-container2">
                    <svg viewBox="0 0 1024 1024" className="solo-icon02">
                      <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
                    </svg>
                    <span className="solo-text1">צור קשר</span>
                  </div>
                </a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="solo-burger-menu">
            <svg viewBox="0 0 1024 1024" className="solo-icon04">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="solo-mobile-menu">
            <div className="solo-nav">
              <div className="solo-top">
                <Link href="/">
                  <a className="solo-link3">
                    <img
                      alt="image"
                      src="/path15-1500h.png"
                      className="solo-logo"
                    />
                  </a>
                </Link>
                <div data-thq="thq-close-menu" className="solo-close-menu">
                  <svg viewBox="0 0 1024 1024" className="solo-icon06">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="solo-links1">
                <Link href="/">
                  <a className="solo-link4">דף הבית</a>
                </Link>
                <Link href="/contact">
                  <a className="solo-link5">צור קשר</a>
                </Link>
              </nav>
              <div className="solo-buttons"></div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="solo-icon08">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="solo-icon10">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="solo-icon12">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <DataProvider
          renderSuccess={(context_qudwz) => (
            <>
              <div className="solo-top-title">
                <span className="solo-text2">
                  {context_qudwz?.title?.rendered}
                </span>
              </div>
              <div className="solo-image-style">
                <DataProvider
                  fetchData={(params) =>
                    fetch(
                      `/api/attachment1-resource-attachment1?${new URLSearchParams(
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
                  renderSuccess={(context_rtxag) => (
                    <>
                      <div className="solo-overlay-image">
                        <div className="solo-container3"></div>
                        <img
                          alt="image"
                          src={
                            context_rtxag?.source_url ||
                            'https://images.unsplash.com/photo-1607827448387-a67db1383b59?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHBsYWNlSG9sZGVyfGVufDB8fHx8MTcwOTMyNTkxOHww&ixlib=rb-4.0.3&h=300'
                          }
                          className="solo-image1"
                        />
                      </div>
                    </>
                  )}
                  renderLoading={() => (
                    <>
                      <div className="solo-div">
                        <lottie-player
                          src="https://lottie.host/c1e3a30b-9c83-46be-a838-a249c8aa863c/vZZAyBVfeU.json"
                          loop="true"
                          speed="1"
                          autoplay="true"
                          background="transparent"
                        ></lottie-player>
                      </div>
                      <span className="solo-loading1">Loading image ...</span>
                    </>
                  )}
                  params={{
                    include: context_qudwz?.featured_media,
                  }}
                />
              </div>
              <div className="solo-content-style">
                <h1 className="solo-text3">{context_qudwz?.title?.rendered}</h1>
                <div className="solo-date-style">
                  <span className="solo-text4">פורסם בתאריך:</span>
                  <span className="solo-date-time">
                    <DateTimePrimitive
                      format="DD/MM/YYYY"
                      date={context_qudwz?.date}
                    ></DateTimePrimitive>
                  </span>
                </div>
                <div className="solo-container4">
                  <React.Fragment>
                    context_qudwz?.content?.rendered
                  </React.Fragment>
                </div>
              </div>
            </>
          )}
          initialData={props.contextQudwzProp}
          persistDataDuringLoading={true}
        />
        <footer className="solo-footer">
          <Link href="/">
            <a className="solo-link6">
              <img alt="logo" src="/ninjalogo.svg" className="solo-image2" />
            </a>
          </Link>
          <div className="solo-container5">
            <span className="solo-text5">2024</span>
            <span className="solo-text6">
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
              className="solo-link7"
            >
              Code design by 011.ninja
            </a>
          </div>
          <div className="solo-icon-group1">
            <svg viewBox="0 0 950.8571428571428 1024" className="solo-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="solo-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="solo-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .solo-container {
            width: 100%;
            display: flex;
            overflow: auto;
            direction: rtl;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .solo-navbar-interactive {
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
          .solo-link {
            display: contents;
          }
          .solo-image {
            height: 3rem;
            text-decoration: none;
          }
          .solo-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .solo-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .solo-link1 {
            display: contents;
          }
          .solo-container1 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            text-decoration: none;
          }
          .solo-icon {
            width: 24px;
            height: 24px;
            margin-left: 5px;
          }
          .solo-text {
            font-size: 24px;
          }
          .solo-link2 {
            display: contents;
          }
          .solo-container2 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .solo-icon02 {
            width: 24px;
            height: 24px;
            margin-left: 5px;
          }
          .solo-text1 {
            font-size: 24px;
          }
          .solo-burger-menu {
            display: none;
          }
          .solo-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .solo-mobile-menu {
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
          .solo-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .solo-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .solo-link3 {
            display: contents;
          }
          .solo-logo {
            height: 3rem;
            text-decoration: none;
          }
          .solo-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .solo-icon06 {
            width: 30px;
            height: 30px;
          }
          .solo-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .solo-link4 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .solo-link5 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .solo-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .solo-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .solo-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .solo-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .solo-top-title {
            flex: 0 0 auto;
            width: 100%;
            height: 250px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
            background-color: #111;
          }
          .solo-text2 {
            color: var(--dl-color-gray-900);
            font-size: 3em;
            align-self: center;
            font-style: normal;
            font-family: 'Heebo';
            font-weight: 900;
          }
          .solo-image-style {
            flex: 0 0 auto;
            width: 100%;
            height: 250px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .solo-overlay-image {
            flex: 0 0 auto;
            width: 100%;
            height: 250px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .solo-container3 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.5) 15%,
              rgba(0, 0, 0, 0.8) 100%
            );
          }
          .solo-image1 {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }
          .solo-div {
            width: 100%;
            height: 300px;
          }
          .solo-loading1 {
            padding: 8px;
            direction: ltr;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .solo-content-style {
            gap: 12px;
            width: 75%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .solo-text3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .solo-date-style {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .solo-text4 {
            font-weight: 300;
            margin-left: var(--dl-space-space-unit);
          }
          .solo-date-time {
            font-family: 'Exo 2';
            font-weight: 700;
          }
          .solo-container4 {
            width: 100%;
            align-self: stretch;
            line-height: 2;
          }
          .solo-html-node {
            width: 100%;
            align-self: stretch;
            line-height: 2;
          }
          .solo-footer {
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
          .solo-link6 {
            display: contents;
          }
          .solo-image2 {
            height: 3rem;
            object-fit: cover;
            text-decoration: none;
          }
          .solo-container5 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            direction: ltr;
            align-items: flex-start;
            flex-direction: row;
          }
          .solo-text5 {
            color: var(--dl-color-gray-white);
            font-family: 'Exo 2';
          }
          .solo-text6 {
            color: rgb(255, 255, 255);
            font-family: 'Exo 2';
            margin-right: var(--dl-space-space-unit);
          }
          .solo-link7 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            font-family: 'Impact';
            text-decoration: none;
          }
          .solo-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .solo-icon14 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .solo-icon16 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          .solo-icon18 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-unit);
          }
          @media (max-width: 1200px) {
            .solo-content-style {
              width: 85%;
            }
          }
          @media (max-width: 767px) {
            .solo-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .solo-image {
              height: 3.5rem;
            }
            .solo-desktop-menu {
              display: none;
            }
            .solo-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .solo-icon04 {
              width: 30px;
              height: 30px;
            }
            .solo-logo {
              height: 3.5rem;
            }
            .solo-link4 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .solo-link5 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .solo-top-title {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .solo-text2 {
              align-self: center;
              text-align: center;
            }
            .solo-content-style {
              width: 95%;
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .solo-text3 {
              width: 100%;
            }
            .solo-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .solo-text6 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .solo-link7 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .solo-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .solo-mobile-menu {
              padding: 16px;
            }
            .solo-logo {
              height: 3.5rem;
            }
            .solo-icon06 {
              width: 30px;
              height: 30px;
            }
            .solo-text2 {
              width: 100%;
              font-size: 2em;
            }
            .solo-loading1 {
              width: 100%;
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solo-content-style {
              width: 100%;
              padding: var(--dl-space-space-unit);
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .solo-text3 {
              width: 100%;
            }
            .solo-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .solo-image2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .solo-container5 {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .solo-text6 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .solo-link7 {
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

export default Solo

export async function getStaticProps(context) {
  try {
    const contextQudwzProp = await postResource({
      ...context?.params,
    })
    if (!contextQudwzProp?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        contextQudwzProp: contextQudwzProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
