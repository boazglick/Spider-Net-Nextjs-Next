import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import postPageInitialPropsTq6jResource from '../../resources/post-page-initial-props-tq_6j'

const Post1 = (props) => {
  return (
    <>
      <div className="post1-container">
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
                    <div className="post1-container1">
                      <h1>{PostEntities?.title?.rendered}</h1>
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
          .post1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .post1-container1 {
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

Post1.defaultProps = {
  postEntities: [],
}

Post1.propTypes = {
  postEntities: PropTypes.array,
}

export default Post1

export async function getStaticProps(context) {
  try {
    const response = await postPageInitialPropsTq6jResource({
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
