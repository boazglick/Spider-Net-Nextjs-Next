import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import pagePageInitialPropsTq9tResource from '../../resources/page-page-initial-props-tq_9t'
import pagePageInitialPathsTqP2Resource from '../../resources/page-page-initial-paths-tq_p2'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Spider Net Nextjs</title>
          <meta property="og:title" content="Page - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(PageEntity) => (
            <>
              <div className="page-container1">
                <h1>{PageEntity?.title?.rendered}</h1>
                <div className="page-container2">
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
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .page-container2 {
            width: 100%;
            align-self: stretch;
          }
          .page-html-node {
            width: 100%;
            align-self: stretch;
          }
        `}
      </style>
    </>
  )
}

Page.defaultProps = {
  pageEntity: [],
}

Page.propTypes = {
  pageEntity: PropTypes.array,
}

export default Page

export async function getStaticProps(context) {
  try {
    const response = await pagePageInitialPropsTq9tResource({
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
    const response = await pagePageInitialPathsTqP2Resource({})
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
