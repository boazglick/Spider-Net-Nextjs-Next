import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import wpNavigationPageInitialPropsTq1uResource from '../../../resources/wp_navigation-page-initial-props-tq_1u'
import wpNavigationPageInitialPathsTqM4Resource from '../../../resources/wp_navigation-page-initial-paths-tq_m4'

const Wpnavigation11 = (props) => {
  return (
    <>
      <div className="wpnavigation11-container">
        <Head>
          <title>Wpnavigation1 - Spider Net Nextjs</title>
          <meta
            property="og:title"
            content="Wpnavigation1 - Spider Net Nextjs"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(Wp_navigationEntities) => (
                  <>
                    <div className="wpnavigation11-container1">
                      <h1>{Wp_navigationEntities?.title?.rendered}</h1>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.wpNavigationEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .wpnavigation11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .wpnavigation11-container1 {
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

Wpnavigation11.defaultProps = {
  wpNavigationEntities: [],
}

Wpnavigation11.propTypes = {
  wpNavigationEntities: PropTypes.array,
}

export default Wpnavigation11

export async function getStaticProps(context) {
  try {
    const response = await wpNavigationPageInitialPropsTq1uResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        wpNavigationEntities: response,
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
    const response = await wpNavigationPageInitialPathsTqM4Resource({})
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
