import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPropsTqT8Resource from '../../../resources/attachment-page-initial-props-tq_t8'
import attachmentPageInitialPathsTqLWResource from '../../../resources/attachment-page-initial-paths-tq_l-w'

const Attachment11 = (props) => {
  return (
    <>
      <div className="attachment11-container">
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
                    <div className="attachment11-container1">
                      <h1>{AttachmentEntities?.title?.rendered}</h1>
                      <img
                        alt="image"
                        src={AttachmentEntities?.source_url}
                        className="attachment11-image"
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
          .attachment11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .attachment11-container1 {
            gap: 12px;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .attachment11-image {
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

Attachment11.defaultProps = {
  attachmentEntities: [],
}

Attachment11.propTypes = {
  attachmentEntities: PropTypes.array,
}

export default Attachment11

export async function getStaticProps(context) {
  try {
    const response = await attachmentPageInitialPropsTqT8Resource({
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
    const response = await attachmentPageInitialPathsTqLWResource({})
    const headers = Object.fromEntries(response)
    const totalCount = headers?.['x-wp-total']
    const pagesCount = Math.ceil(totalCount / 10)
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
