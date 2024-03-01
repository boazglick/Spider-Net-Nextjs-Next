import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import {
  DataProvider,
  DateTimePrimitive,
  Repeater,
} from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import postPageInitialPropsTqK0Resource from '../../../resources/post-page-initial-props-tq_k0'
import postPageInitialPathsTqDResource from '../../../resources/post-page-initial-paths-tq_-d'

const Post11 = (props) => {
  return (
    <>
      <div className="post11-container">
        <Head>
          <title>Post1 - Spider Net Nextjs</title>
          <meta property="og:title" content="Post1 - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(PostEntities) => (
                  <>
                    <Link href={`/post/${PostEntities?.slug}`}>
                      <a>
                        <div className="post11-container1">
                          <h1 className="post11-text">
                            {PostEntities?.title?.rendered}
                          </h1>
                          <span className="post11-date-time">
                            <DateTimePrimitive
                              format="DD/MM/YYYY"
                              date={PostEntities?.date}
                            ></DateTimePrimitive>
                          </span>
                        </div>
                      </a>
                    </Link>
                  </>
                )}
              />
            </>
          )}
          initialData={props.postEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .post11-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .post11-container1 {
            gap: 12px;
            width: auto;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            text-decoration: none;
          }
          .post11-text {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .post11-date-time {
            width: 100%;
            align-self: center;
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Post11.defaultProps = {
  postEntities: [],
}

Post11.propTypes = {
  postEntities: PropTypes.array,
}

export default Post11

export async function getStaticProps(context) {
  try {
    const response = await postPageInitialPropsTqK0Resource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        postEntities: response,
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
    const response = await postPageInitialPathsTqDResource({})
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
