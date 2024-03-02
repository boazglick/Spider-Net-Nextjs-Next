import React from 'react'
import Head from 'next/head'

const HomePage = (props) => {
  return (
    <>
      <div className="home-page-container">
        <Head>
          <title>Spider Net Nextjs</title>
          <meta property="og:title" content="Spider Net Nextjs" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8010cf50-dc7b-43dd-8dd4-1db8744ad529/2d8fbd1a-969a-45f3-a008-9337f8510763?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .home-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            direction: rtl;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default HomePage
