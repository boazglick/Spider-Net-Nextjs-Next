import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import wpTemplatePartPageInitialPropsTq6iResource from '../../resources/wp_template_part-page-initial-props-tq_6i'

const Wptemplatepart1 = (props) => {
  return (
    <>
      <div className="wptemplatepart1-container">
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
                    <div className="wptemplatepart1-container1">
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
          .wptemplatepart1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .wptemplatepart1-container1 {
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

Wptemplatepart1.defaultProps = {
  wpTemplatePartEntities: [],
}

Wptemplatepart1.propTypes = {
  wpTemplatePartEntities: PropTypes.array,
}

export default Wptemplatepart1

export async function getStaticProps(context) {
  try {
    const response = await wpTemplatePartPageInitialPropsTq6iResource({
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
