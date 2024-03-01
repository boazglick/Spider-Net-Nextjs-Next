import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPropsTqOwResource from '../../resources/attachment-page-initial-props-tq_ow'

const Attachment1 = (props) => {
  return (
    <>
      <div className="attachment1-container">
        <Head>
          <title>Attachment1 - Spider Net Nextjs</title>
          <meta property="og:title" content="Attachment1 - Spider Net Nextjs" />
          <meta name="robots" content="noindex" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(AttachmentEntities) => (
                  <>
                    <div className="attachment1-container1">
                      <h1>{AttachmentEntities?.title?.rendered}</h1>
                      <img
                        alt="image"
                        src={AttachmentEntities?.source_url}
                        className="attachment1-image"
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
          .attachment1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .attachment1-container1 {
            gap: 12px;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .attachment1-image {
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

Attachment1.defaultProps = {
  attachmentEntities: [],
}

Attachment1.propTypes = {
  attachmentEntities: PropTypes.array,
}

export default Attachment1

export async function getStaticProps(context) {
  try {
    const response = await attachmentPageInitialPropsTqOwResource({
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
