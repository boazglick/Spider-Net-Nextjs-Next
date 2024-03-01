import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import pagePageInitialPropsTqKpResource from '../../resources/page-page-initial-props-tq_kp'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Spider Net Nextjs</title>
          <meta property="og:title" content="Page - Spider Net Nextjs" />
          <meta name="robots" content="noindex" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(PageEntities) => (
                  <>
                    <span> </span>
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
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Page.defaultProps = {
  pageEntities: [],
}

Page.propTypes = {
  pageEntities: PropTypes.array,
}

export default Page

export async function getStaticProps(context) {
  try {
    const response = await pagePageInitialPropsTqKpResource({
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
      revalidate: 10,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
