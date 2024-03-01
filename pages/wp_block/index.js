import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import wpBlockPageInitialPropsTqAyResource from '../../resources/wp_block-page-initial-props-tq_ay'

const Wpblock1 = (props) => {
  return (
    <>
      <div className="wpblock1-container">
        <Head>
          <title>Wpblock1 - Spider Net Nextjs</title>
          <meta property="og:title" content="Wpblock1 - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(Wp_blockEntities) => (
                  <>
                    <div className="wpblock1-container1">
                      <span>{Wp_blockEntities?.date}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.wpBlockEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .wpblock1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .wpblock1-container1 {
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

Wpblock1.defaultProps = {
  wpBlockEntities: [],
}

Wpblock1.propTypes = {
  wpBlockEntities: PropTypes.array,
}

export default Wpblock1

export async function getStaticProps(context) {
  try {
    const response = await wpBlockPageInitialPropsTqAyResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        wpBlockEntities: response,
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
