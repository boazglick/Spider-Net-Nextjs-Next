import React from 'react'
import Head from 'next/head'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Spider Net Nextjs</title>
          <meta property="og:title" content="Contact - Spider Net Nextjs" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8010cf50-dc7b-43dd-8dd4-1db8744ad529/2d8fbd1a-969a-45f3-a008-9337f8510763?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            direction: rtl;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #111111;
          }
        `}
      </style>
    </>
  )
}

export default Contact
