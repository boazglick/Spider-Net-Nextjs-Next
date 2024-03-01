import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import pagePageInitialPropsTqWHResource from '../../resources/page-page-initial-props-tq_w-h'
import pagePageInitialPathsTqFwResource from '../../resources/page-page-initial-paths-tq_fw'

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
              <div className="page11-container1"></div>
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
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            flex-direction: column;
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
    const response = await pagePageInitialPropsTqWHResource({
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
    const response = await pagePageInitialPathsTqFwResource({})
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
