import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import postPageInitialPropsTqT6Resource from '../../resources/post-page-initial-props-tq_t6'
import postPageInitialPathsTqIPResource from '../../resources/post-page-initial-paths-tq_i-p'

const Post = (props) => {
  return (
    <>
      <div className="post-container">
        <Head>
          <title>Post - Spider Net Nextjs</title>
          <meta property="og:title" content="Post - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(PostEntity) => (
            <>
              <div className="post-container1">
                <h1>{PostEntity?.title?.rendered}</h1>
                <div className="post-container2">
                  <Script
                    html={PostEntity?.content?.rendered}
                    className="post-html-node"
                  ></Script>
                </div>
                <div>
                  <Script html={PostEntity?.excerpt?.rendered}></Script>
                </div>
              </div>
            </>
          )}
          initialData={props.postEntity}
          persistDataDuringLoading={true}
          key={props?.postEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .post-container {
            width: 100%;
            display: flex;
            overflow: auto;
            direction: rtl;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .post-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .post-container2 {
            width: 100%;
            align-self: stretch;
          }
          .post-html-node {
            width: 100%;
            align-self: stretch;
          }
        `}
      </style>
    </>
  )
}

Post.defaultProps = {
  postEntity: [],
}

Post.propTypes = {
  postEntity: PropTypes.array,
}

export default Post

export async function getStaticProps(context) {
  try {
    const response = await postPageInitialPropsTqT6Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        postEntity: response?.data?.[0],
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
    const response = await postPageInitialPathsTqIPResource({})
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
