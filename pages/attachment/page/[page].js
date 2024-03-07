import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPropsTqSbResource from '../../../resources/attachment-page-initial-props-tq_sb'
import attachmentPageInitialPathsTqM2Resource from '../../../resources/attachment-page-initial-paths-tq_m2'

const Attachment1 = (props) => {
  return (
    <>
      <div className="attachment1-container">
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
                      <div className="attachment1-container2">
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
          .attachment1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .attachment1-container2 {
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

Attachment1.defaultProps = {
  attachmentEntities: [],
}

Attachment1.propTypes = {
  attachmentEntities: PropTypes.array,
}

export default Attachment1

export async function getStaticProps(context) {
  try {
    const response = await attachmentPageInitialPropsTqSbResource({
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
    const response = await attachmentPageInitialPathsTqM2Resource({})
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
