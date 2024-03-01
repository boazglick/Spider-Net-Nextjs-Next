import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPropsTq4sResource from '../../resources/attachment-page-initial-props-tq_4s'

const Attachment = (props) => {
  return (
    <>
      <div className="attachment-container">
        <Head>
          <title>Attachment - Spider Net Nextjs</title>
          <meta property="og:title" content="Attachment - Spider Net Nextjs" />
          <meta name="robots" content="noindex" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(AttachmentEntities) => (
                  <>
                    <div className="attachment-container1">
                      <h1>{AttachmentEntities?.title?.rendered}</h1>
                      <img
                        src={AttachmentEntities?.source_url}
                        alt="image"
                        className="attachment-image"
                      />
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
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .attachment-image {
            width: 100%;
            height: var(--dl-size-size-xxlarge);
            object-fit: cover;
            border-radius: 20px;
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
    const response = await attachmentPageInitialPropsTq4sResource({
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
