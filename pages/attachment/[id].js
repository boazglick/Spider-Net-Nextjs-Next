import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import attachmentPageInitialPropsTqILResource from '../../resources/attachment-page-initial-props-tq_i-l'
import attachmentPageInitialPathsTqLoResource from '../../resources/attachment-page-initial-paths-tq_lo'

const Attachment11 = (props) => {
  return (
    <>
      <div className="attachment11-container">
        <Head>
          <title>Attachment1 - Spider Net Nextjs</title>
          <meta property="og:title" content="Attachment1 - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(AttachmentEntity) => (
            <>
              <div className="attachment11-container1">
                <h1>{AttachmentEntity?.title?.rendered}</h1>
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
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .attachment11-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
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
    const response = await attachmentPageInitialPropsTqILResource({
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
    const response = await attachmentPageInitialPathsTqLoResource({})
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
