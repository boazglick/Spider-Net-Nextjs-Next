import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import wpBlockPageInitialPropsTqYaResource from '../../resources/wp_block-page-initial-props-tq_ya'
import wpBlockPageInitialPathsTqXCResource from '../../resources/wp_block-page-initial-paths-tq_x-c'

const Wpblock = (props) => {
  return (
    <>
      <div className="wpblock-container">
        <Head>
          <title>Wpblock - Spider Net Nextjs</title>
          <meta property="og:title" content="Wpblock - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(Wp_blockEntity) => (
            <>
              <div className="wpblock-container1">
                <span>{Wp_blockEntity?.date}</span>
              </div>
            </>
          )}
          initialData={props.wpBlockEntity}
          persistDataDuringLoading={true}
          key={props?.wpBlockEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .wpblock-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .wpblock-container1 {
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

Wpblock.defaultProps = {
  wpBlockEntity: [],
}

Wpblock.propTypes = {
  wpBlockEntity: PropTypes.array,
}

export default Wpblock

export async function getStaticProps(context) {
  try {
    const response = await wpBlockPageInitialPropsTqYaResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        wpBlockEntity: response?.data?.[0],
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
    const response = await wpBlockPageInitialPathsTqXCResource({})
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
