import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import postPageInitialPropsTqAResource from '../../resources/post-page-initial-props-tq_a-'

const Post = (props) => {
  return (
    <>
      <div className="post-container">
        <Head>
          <title>Post - Spider Net Nextjs</title>
          <meta property="og:title" content="Post - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(PostEntities) => (
                  <>
                    <div className="post-container1">
                      <Link href={`/post/${PostEntities?.id}`}>
                        <a className="post-link">
                          <h1 className="post-text">
                            {PostEntities?.title?.rendered}
                          </h1>
                        </a>
                      </Link>
                    </div>
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
          .post-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .post-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .post-link {
            display: contents;
          }
          .post-text {
            margin: var(--dl-space-space-unit);
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Post.defaultProps = {
  postEntities: [],
}

Post.propTypes = {
  postEntities: PropTypes.array,
}

export default Post

export async function getStaticProps(context) {
  try {
    const response = await postPageInitialPropsTqAResource({
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
