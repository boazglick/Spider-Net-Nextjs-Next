import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPropsTqOpResource from '../../resources/attachment-page-initial-props-tq_op'

const Attachment1 = (props) => {
  return (
    <>
      <div className="attachment1-container">
        <Head>
          <title>Attachment1 - SpiderNet Nextjs new</title>
          <meta
            property="og:title"
            content="Attachment1 - SpiderNet Nextjs new"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(AttachmentEntities) => (
                  <>
                    <div className="attachment1-container1">
                      <h1 className="attachment1-text">
                        {AttachmentEntities?.title?.rendered}
                      </h1>
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
            direction: rtl;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .attachment1-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .attachment1-text {
            margin: var(--dl-space-space-halfunit);
            padding: var(--dl-space-space-unit);
          }
          @media (max-width: 1200px) {
            .attachment1-text {
              margin: var(--dl-space-space-halfunit);
              padding: var(--dl-space-space-unit);
            }
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
    const response = await attachmentPageInitialPropsTqOpResource({
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
