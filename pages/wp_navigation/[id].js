import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import wpNavigationPageInitialPropsTq8vResource from '../../resources/wp_navigation-page-initial-props-tq_8v'
import wpNavigationPageInitialPathsTq7jResource from '../../resources/wp_navigation-page-initial-paths-tq_7j'

const Wpnavigation = (props) => {
  return (
    <>
      <div className="wpnavigation-container">
        <Head>
          <title>Wpnavigation - Spider Net Nextjs</title>
          <meta
            property="og:title"
            content="Wpnavigation - Spider Net Nextjs"
          />
        </Head>
        <DataProvider
          renderSuccess={(Wp_navigationEntity) => (
            <>
              <div className="wpnavigation-container1">
                <h1>{Wp_navigationEntity?.title?.rendered}</h1>
                <div className="wpnavigation-container2">
                  <Script
                    html={Wp_navigationEntity?.content?.rendered}
                    className="wpnavigation-html-node"
                  ></Script>
                </div>
              </div>
            </>
          )}
          initialData={props.wpNavigationEntity}
          persistDataDuringLoading={true}
          key={props?.wpNavigationEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .wpnavigation-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .wpnavigation-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .wpnavigation-container2 {
            width: 100%;
            align-self: stretch;
          }
          .wpnavigation-html-node {
            width: 100%;
            align-self: stretch;
          }
        `}
      </style>
    </>
  )
}

Wpnavigation.defaultProps = {
  wpNavigationEntity: [],
}

Wpnavigation.propTypes = {
  wpNavigationEntity: PropTypes.array,
}

export default Wpnavigation

export async function getStaticProps(context) {
  try {
    const response = await wpNavigationPageInitialPropsTq8vResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        wpNavigationEntity: response?.data?.[0],
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
    const response = await wpNavigationPageInitialPathsTq7jResource({})
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
