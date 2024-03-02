import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import pagePageInitialPropsTqOQResource from '../../resources/page-page-initial-props-tq_o-q'

const Page1 = (props) => {
  return (
    <>
      <div className="page1-container">
        <Head>
          <title>Page1 - Spider Net Nextjs</title>
          <meta property="og:title" content="Page1 - Spider Net Nextjs" />
          <meta name="robots" content="noindex" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(PageEntities) => (
                  <>
                    <div className="page1-container1">
                      <h1>{PageEntities?.title?.rendered}</h1>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.pageEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .page1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page1-container1 {
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

Page1.defaultProps = {
  pageEntities: [],
}

Page1.propTypes = {
  pageEntities: PropTypes.array,
}

export default Page1

export async function getStaticProps(context) {
  try {
    const response = await pagePageInitialPropsTqOQResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        pageEntities: response,
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
