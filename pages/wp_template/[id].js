import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import wpTemplatePageInitialPropsTqUSResource from '../../resources/wp_template-page-initial-props-tq_u-s'
import wpTemplatePageInitialPathsTqNdResource from '../../resources/wp_template-page-initial-paths-tq_nd'

const Wptemplate11 = (props) => {
  return (
    <>
      <div className="wptemplate11-container">
        <Head>
          <title>Wptemplate1 - Spider Net Nextjs</title>
          <meta property="og:title" content="Wptemplate1 - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(Wp_templateEntity) => (
            <>
              <div className="wptemplate11-container1">
                <h1>{Wp_templateEntity?.title?.rendered}</h1>
              </div>
            </>
          )}
          initialData={props.wpTemplateEntity}
          persistDataDuringLoading={true}
          key={props?.wpTemplateEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .wptemplate11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .wptemplate11-container1 {
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

Wptemplate11.defaultProps = {
  wpTemplateEntity: [],
}

Wptemplate11.propTypes = {
  wpTemplateEntity: PropTypes.array,
}

export default Wptemplate11

export async function getStaticProps(context) {
  try {
    const response = await wpTemplatePageInitialPropsTqUSResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        wpTemplateEntity: response?.data?.[0],
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
    const response = await wpTemplatePageInitialPathsTqNdResource({})
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
