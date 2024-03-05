import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPropsTqSYResource from '../../resources/attachment-page-initial-props-tq_s-y'
import attachmentPageInitialPathsTqXHResource from '../../resources/attachment-page-initial-paths-tq_x-h'

const Attachment11 = (props) => {
  return (
    <>
      <div className="attachment11-container">
        <Head>
          <title>Attachment1 - SpiderNet Nextjs new</title>
          <meta
            property="og:title"
            content="Attachment1 - SpiderNet Nextjs new"
          />
        </Head>
        <DataProvider
          renderSuccess={(AttachmentEntity) => (
            <>
              <div className="attachment11-container1">
                <h1>{AttachmentEntity?.title?.rendered}</h1>
                <img
                  alt="image"
                  src={AttachmentEntity?.source_url}
                  loading="lazy"
                  className="attachment11-image"
                />
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
          .attachment11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            direction: rtl;
            min-height: 100vh;
            flex-direction: column;
          }
          .attachment11-container1 {
            gap: 12px;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .attachment11-image {
            width: 200px;
            object-fit: cover;
            border-radius: 20px;
          }
        `}
      </style>
    </>
  )
}

Attachment11.defaultProps = {
  attachmentEntity: [],
}

Attachment11.propTypes = {
  attachmentEntity: PropTypes.array,
}

export default Attachment11

export async function getStaticProps(context) {
  try {
    const response = await attachmentPageInitialPropsTqSYResource({
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
    const response = await attachmentPageInitialPathsTqXHResource({})
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
