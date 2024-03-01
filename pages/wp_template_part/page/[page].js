import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import wpTemplatePartPageInitialPropsTqX5Resource from '../../../resources/wp_template_part-page-initial-props-tq_x5'
import wpTemplatePartPageInitialPathsTqK4Resource from '../../../resources/wp_template_part-page-initial-paths-tq_k4'

const Wptemplatepart11 = (props) => {
  return (
    <>
      <div className="wptemplatepart11-container">
        <Head>
          <title>Wptemplatepart1 - Spider Net Nextjs</title>
          <meta
            property="og:title"
            content="Wptemplatepart1 - Spider Net Nextjs"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(Wp_template_partEntities) => (
                  <>
                    <div className="wptemplatepart11-container1">
                      <h1>{Wp_template_partEntities?.title?.rendered}</h1>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.wpTemplatePartEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .wptemplatepart11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .wptemplatepart11-container1 {
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

Wptemplatepart11.defaultProps = {
  wpTemplatePartEntities: [],
}

Wptemplatepart11.propTypes = {
  wpTemplatePartEntities: PropTypes.array,
}

export default Wptemplatepart11

export async function getStaticProps(context) {
  try {
    const response = await wpTemplatePartPageInitialPropsTqX5Resource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        wpTemplatePartEntities: response,
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
    const response = await wpTemplatePartPageInitialPathsTqK4Resource({})
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
