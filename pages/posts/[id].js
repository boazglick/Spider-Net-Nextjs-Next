import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import postsPageInitialPropsTqYAResource from '../../resources/posts-page-initial-props-tq_y-a'
import postsPageInitialPathsTq3iResource from '../../resources/posts-page-initial-paths-tq_3i'

const Posts11 = (props) => {
  return (
    <>
      <div className="posts11-container">
        <Head>
          <title>Posts1 - Spider Net Nextjs</title>
          <meta property="og:title" content="Posts1 - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(PostsEntity) => (
            <>
              <div className="posts11-container1">
                <span>{PostsEntity?.postname}</span>
                <span>{PostsEntity?.featured_title}</span>
                <span>{PostsEntity?.paragraph_1}</span>
                <div className="posts11-container2">
                  <ReactMarkdown>{PostsEntity?.richmark}</ReactMarkdown>
                </div>
              </div>
            </>
          )}
          initialData={props.postsEntity}
          persistDataDuringLoading={true}
          key={props?.postsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .posts11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .posts11-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .posts11-container2 {
            width: 100%;
            align-self: stretch;
          }
        `}
      </style>
    </>
  )
}

Posts11.defaultProps = {
  postsEntity: [],
}

Posts11.propTypes = {
  postsEntity: PropTypes.array,
}

export default Posts11

export async function getStaticProps(context) {
  try {
    const response = await postsPageInitialPropsTqYAResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        postsEntity: response?.data?.[0],
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
    const response = await postsPageInitialPathsTq3iResource({})
    return {
      paths: (response?.data || []).map((item) => {
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
