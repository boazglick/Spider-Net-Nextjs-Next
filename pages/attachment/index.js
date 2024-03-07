import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPropsTqZiResource from '../../resources/attachment-page-initial-props-tq_zi'

const Attachment = (props) => {
  return (
    <>
      <div className="attachment-container">
        <Head>
          <title>Attachment - SpiderNet Nextjs new</title>
          <meta
            property="og:title"
            content="Attachment - SpiderNet Nextjs new"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div>
                <Repeater
                  items={params}
                  renderItem={(AttachmentEntities) => (
                    <>
                      <div className="attachment-container2">
                        <h1>{AttachmentEntities?.title?.rendered}</h1>
                      </div>
                    </>
                  )}
                />
              </div>
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
          .attachment-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
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
    const response = await attachmentPageInitialPropsTqZiResource({
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
