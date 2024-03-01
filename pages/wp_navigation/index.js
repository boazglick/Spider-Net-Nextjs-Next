import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import wpNavigationPageInitialPropsTqOuResource from '../../resources/wp_navigation-page-initial-props-tq_ou'

const Wpnavigation1 = (props) => {
  return (
    <>
      <div className="wpnavigation1-container">
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
                    <div className="wpnavigation1-container1">
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
          .wpnavigation1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .wpnavigation1-container1 {
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

Wpnavigation1.defaultProps = {
  wpNavigationEntities: [],
}

Wpnavigation1.propTypes = {
  wpNavigationEntities: PropTypes.array,
}

export default Wpnavigation1

export async function getStaticProps(context) {
  try {
    const response = await wpNavigationPageInitialPropsTqOuResource({
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
