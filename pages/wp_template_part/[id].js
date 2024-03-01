import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import wpTemplatePartPageInitialPropsTqJ4Resource from '../../resources/wp_template_part-page-initial-props-tq_j4'
import wpTemplatePartPageInitialPathsTqJzResource from '../../resources/wp_template_part-page-initial-paths-tq_jz'

const Wptemplatepart = (props) => {
  return (
    <>
      <div className="wptemplatepart-container">
        <Head>
          <title>Wptemplatepart - Spider Net Nextjs</title>
          <meta
            property="og:title"
            content="Wptemplatepart - Spider Net Nextjs"
          />
        </Head>
        <DataProvider
          renderSuccess={(Wp_template_partEntity) => (
            <>
              <div className="wptemplatepart-container1">
                <h1>{Wp_template_partEntity?.title?.rendered}</h1>
              </div>
            </>
          )}
          initialData={props.wpTemplatePartEntity}
          persistDataDuringLoading={true}
          key={props?.wpTemplatePartEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .wptemplatepart-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .wptemplatepart-container1 {
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

Wptemplatepart.defaultProps = {
  wpTemplatePartEntity: [],
}

Wptemplatepart.propTypes = {
  wpTemplatePartEntity: PropTypes.array,
}

export default Wptemplatepart

export async function getStaticProps(context) {
  try {
    const response = await wpTemplatePartPageInitialPropsTqJ4Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        wpTemplatePartEntity: response?.data?.[0],
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
    const response = await wpTemplatePartPageInitialPathsTqJzResource({})
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
