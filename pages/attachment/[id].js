import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPropsTqWIResource from '../../resources/attachment-page-initial-props-tq_w-i'
import attachmentPageInitialPathsTqUvResource from '../../resources/attachment-page-initial-paths-tq_uv'

const Attachment = (props) => {
  return (
    <>
      <div className="attachment-container">
        <Head>
          <title>Attachment - Spider Net Nextjs</title>
          <meta property="og:title" content="Attachment - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(AttachmentEntity) => (
            <>
              <div className="attachment-container1"></div>
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
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .attachment-container1 {
            gap: 12px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            flex-direction: column;
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
    const response = await attachmentPageInitialPropsTqWIResource({
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
      revalidate: 10,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  try {
    const response = await attachmentPageInitialPathsTqUvResource({})
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
