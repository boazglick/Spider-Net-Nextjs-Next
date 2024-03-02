import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPropsTq9qResource from '../../resources/attachment-page-initial-props-tq_9q'
import attachmentPageInitialPathsTqPYResource from '../../resources/attachment-page-initial-paths-tq_p-y'

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
          renderSuccess={(AttachmentEntity) => (
            <>
              <div className="attachment-container1">
                <h1 className="attachment-text">
                  {AttachmentEntity?.title?.rendered}
                </h1>
              </div>
            </>
          )}
          initialData={props.attachmentEntity}
          persistDataDuringLoading={true}
          key={props?.attachmentEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .attachment-container {
            width: 100%;
            display: flex;
            overflow: auto;
            direction: rtl;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .attachment-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .attachment-text {
            margin: var(--dl-space-space-halfunit);
            padding: var(--dl-space-space-unit);
          }
          @media (max-width: 1200px) {
            .attachment-text {
              padding: var(--dl-space-space-halfunit);
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Attachment.defaultProps = {
  attachmentEntity: [],
}

Attachment.propTypes = {
  attachmentEntity: PropTypes.array,
}

export default Attachment

export async function getStaticProps(context) {
  try {
    const response = await attachmentPageInitialPropsTq9qResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        attachmentEntity: response?.data?.[0],
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

export async function getStaticPaths() {
  try {
    const response = await attachmentPageInitialPathsTqPYResource({})
    return {
      paths: (response || []).map((item) => {
        return {
          params: {
            id: (item?.id).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
