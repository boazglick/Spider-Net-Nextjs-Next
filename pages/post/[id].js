import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import postPageInitialPropsTqFGResource from '../../resources/post-page-initial-props-tq_f-g'
import postPageInitialPathsTqNtResource from '../../resources/post-page-initial-paths-tq_nt'

const Post11 = (props) => {
  return (
    <>
      <div className="post11-container">
        <Head>
          <title>Post1 - Spider Net Nextjs</title>
          <meta property="og:title" content="Post1 - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(PostEntity) => (
            <>
              <div className="post11-container1">
                <h1>{PostEntity?.title?.rendered}</h1>
                <div className="post11-container2">
                  <Script
                    html={PostEntity?.content?.rendered}
                    className="post11-html-node"
                  ></Script>
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
          .post11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .post11-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .post11-container2 {
            width: 100%;
            align-self: stretch;
          }
          .post11-html-node {
            width: 100%;
            align-self: stretch;
          }
        `}
      </style>
    </>
  )
}

Post11.defaultProps = {
  postEntity: [],
}

Post11.propTypes = {
  postEntity: PropTypes.array,
}

export default Post11

export async function getStaticProps(context) {
  try {
    const response = await postPageInitialPropsTqFGResource({
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
    const response = await postPageInitialPathsTqNtResource({})
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
