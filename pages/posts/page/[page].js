import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import postsPageInitialPropsTqS3Resource from '../../../resources/posts-page-initial-props-tq_s3'
import postsPageInitialPathsTqAoResource from '../../../resources/posts-page-initial-paths-tq_ao'

const Posts1 = (props) => {
  return (
    <>
      <div className="posts1-container">
        <Head>
          <title>Posts - Spider Net Nextjs</title>
          <meta property="og:title" content="Posts - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(PostsEntities) => (
                  <>
                    <Link href={`/posts/${PostsEntities?.id}`}>
                      <a>
                        <div className="posts1-container1">
                          <span>{PostsEntities?.postname}</span>
                          <span>{PostsEntities?.featured_title}</span>
                          <span>{PostsEntities?.paragraph_1}</span>
                        </div>
                      </a>
                    </Link>
                  </>
                )}
              />
            </>
          )}
          initialData={props.postsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .posts1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .posts1-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Posts1.defaultProps = {
  postsEntities: [],
}

Posts1.propTypes = {
  postsEntities: PropTypes.array,
}

export default Posts1

export async function getStaticProps(context) {
  try {
    const response = await postsPageInitialPropsTqS3Resource({
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
        postsEntities: response,
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
    const response = await postsPageInitialPathsTqAoResource({})
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
