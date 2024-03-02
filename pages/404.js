import React from 'react'
import Head from 'next/head'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Spider Net Nextjs</title>
          <meta property="og:title" content="Page - Spider Net Nextjs" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8010cf50-dc7b-43dd-8dd4-1db8744ad529/2d8fbd1a-969a-45f3-a008-9337f8510763?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <span className="page-text">404</span>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-text {
            font-size: 4em;
          }
        `}
      </style>
    </>
  )
}

export default Page
