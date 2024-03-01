import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPropsTqTXResource from '../../resources/attachment-page-initial-props-tq_t-x'

const Attachment = (props) => {
  return (
    <>
      <div className="attachment-container">
        <Head>
          <title>Attachment - Spider Net Nextjs</title>
          <meta property="og:title" content="Attachment - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(AttachmentEntities) => (
                  <>
                    <div className="attachment-container1">
                      <h1 className="attachment-text">
                        {AttachmentEntities?.title?.rendered}
                      </h1>
                      <img
                        alt="image"
                        src={AttachmentEntities?.source_url}
                        className="attachment-image"
                      />
                      <span>{AttachmentEntities?.author}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.attachmentEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
        <></>
        <div className="attachment-container2"></div>
      </div>
      <style jsx>
        {`
          .attachment-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .attachment-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .attachment-text {
            font-size: 1em;
          }
          .attachment-image {
            width: 150px;
            object-fit: cover;
          }
          .attachment-container2 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(4, 1fr);
          }
        `}
      </style>
    </>
  )
}

Attachment.defaultProps = {
  attachmentEntities: [],
}

Attachment.propTypes = {
  attachmentEntities: PropTypes.array,
}

export default Attachment

export async function getStaticProps(context) {
  try {
    const response = await attachmentPageInitialPropsTqTXResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        attachmentEntities: response,
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
