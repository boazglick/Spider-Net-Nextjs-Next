import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tagsPageInitialPropsTqCResource from '../../../resources/tags-page-initial-props-tq__c'
import tagsPageInitialPathsTqBzResource from '../../../resources/tags-page-initial-paths-tq_bz'

const Tags1 = (props) => {
  return (
    <>
      <div className="tags1-container">
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
                    <div className="tags1-container1">
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
          .tags1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tags1-container1 {
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

Tags1.defaultProps = {
  tagsEntities: [],
}

Tags1.propTypes = {
  tagsEntities: PropTypes.array,
}

export default Tags1

export async function getStaticProps(context) {
  try {
    const response = await tagsPageInitialPropsTqCResource({
      ...context?.params,
      start: (context.params.page - 1) * 10,
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

export async function getStaticPaths() {
  try {
    const response = await tagsPageInitialPathsTqBzResource({})
    const totalCount = response?.meta?.pagination?.total
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
