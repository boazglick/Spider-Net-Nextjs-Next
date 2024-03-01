import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPropsTqGhResource from '../../../resources/attachment-page-initial-props-tq_gh'
import attachmentPageInitialPathsTqJfResource from '../../../resources/attachment-page-initial-paths-tq_jf'

const Attachment1 = (props) => {
  return (
    <>
      <div className="attachment1-container">
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
                    <div className="attachment1-container1">
                      <h1 className="attachment1-text">
                        {AttachmentEntities?.title?.rendered}
                      </h1>
                      <img
                        alt="image"
                        src={AttachmentEntities?.source_url}
                        className="attachment1-image"
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
        <div className="attachment1-container2"></div>
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
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .attachment1-text {
            font-size: 1em;
          }
          .attachment1-image {
            width: 150px;
            object-fit: cover;
          }
          .attachment1-container2 {
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

Attachment1.defaultProps = {
  attachmentEntities: [],
}

Attachment1.propTypes = {
  attachmentEntities: PropTypes.array,
}

export default Attachment1

export async function getStaticProps(context) {
  try {
    const response = await attachmentPageInitialPropsTqGhResource({
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

export async function getStaticPaths() {
  try {
    const response = await attachmentPageInitialPathsTqJfResource({})
    const headers = Object.fromEntries(response)
    const totalCount = headers?.['x-wp-total']
    const pagesCount = Math.ceil(totalCount / 20)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
