import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import wpBlockPageInitialPropsTq8nResource from '../../../resources/wp_block-page-initial-props-tq_8n'
import wpBlockPageInitialPathsTqJfResource from '../../../resources/wp_block-page-initial-paths-tq_jf'

const Wpblock11 = (props) => {
  return (
    <>
      <div className="wpblock11-container">
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
                    <div className="wpblock11-container1">
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
          .wpblock11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .wpblock11-container1 {
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

Wpblock11.defaultProps = {
  wpBlockEntities: [],
}

Wpblock11.propTypes = {
  wpBlockEntities: PropTypes.array,
}

export default Wpblock11

export async function getStaticProps(context) {
  try {
    const response = await wpBlockPageInitialPropsTq8nResource({
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

export async function getStaticPaths() {
  try {
    const response = await wpBlockPageInitialPathsTqJfResource({})
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
