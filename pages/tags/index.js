import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tagsPageInitialPropsTqBFResource from '../../resources/tags-page-initial-props-tq_b-f'

const Tags = (props) => {
  return (
    <>
      <div className="tags-container">
        <Head>
          <title>Tags - Spider Net Nextjs</title>
          <meta property="og:title" content="Tags - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(TagsEntities) => (
                  <>
                    <div className="tags-container1">
                      <span>{TagsEntities?.tagname}</span>
                      <span>{TagsEntities?.id}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.tagsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tags-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tags-container1 {
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

Tags.defaultProps = {
  tagsEntities: [],
}

Tags.propTypes = {
  tagsEntities: PropTypes.array,
}

export default Tags

export async function getStaticProps(context) {
  try {
    const response = await tagsPageInitialPropsTqBFResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tagsEntities: response,
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
