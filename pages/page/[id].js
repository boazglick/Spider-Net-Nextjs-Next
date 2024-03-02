import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import pagePageInitialPropsTqAtResource from '../../resources/page-page-initial-props-tq_at'
import pagePageInitialPathsTq2aResource from '../../resources/page-page-initial-paths-tq_2a'

const Page11 = (props) => {
  return (
    <>
      <div className="page11-container">
        <Head>
          <title>Page1 - Spider Net Nextjs</title>
          <meta property="og:title" content="Page1 - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(PageEntity) => (
            <>
              <div className="page11-container1">
                <h1>{PageEntity?.title?.rendered}</h1>
                <div className="page11-container2">
                  <React.Fragment>PageEntity?.content?.rendered</React.Fragment>
                </div>
              </div>
            </>
          )}
          initialData={props.pageEntity}
          persistDataDuringLoading={true}
          key={props?.pageEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .page11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page11-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .page11-container2 {
            width: 100%;
            align-self: stretch;
          }
          .page11-html-node {
            width: 100%;
            align-self: stretch;
          }
        `}
      </style>
    </>
  )
}

Page11.defaultProps = {
  pageEntity: [],
}

Page11.propTypes = {
  pageEntity: PropTypes.array,
}

export default Page11

export async function getStaticProps(context) {
  try {
    const response = await pagePageInitialPropsTqAtResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        pageEntity: response?.data?.[0],
        ...response?.meta,
      },
      revalidate: 30,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  try {
    const response = await pagePageInitialPathsTq2aResource({})
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
