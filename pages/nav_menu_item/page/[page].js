import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import navMenuItemPageInitialPropsTqD4Resource from '../../../resources/nav_menu_item-page-initial-props-tq_d4'
import navMenuItemPageInitialPathsTqQdResource from '../../../resources/nav_menu_item-page-initial-paths-tq_qd'

const Navmenuitem1 = (props) => {
  return (
    <>
      <div className="navmenuitem1-container">
        <Head>
          <title>Navmenuitem - Spider Net Nextjs</title>
          <meta property="og:title" content="Navmenuitem - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(Nav_menu_itemEntities) => (
                  <>
                    <div className="navmenuitem1-container1">
                      <h1>{Nav_menu_itemEntities?.title}</h1>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.navMenuItemEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .navmenuitem1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .navmenuitem1-container1 {
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

Navmenuitem1.defaultProps = {
  navMenuItemEntities: [],
}

Navmenuitem1.propTypes = {
  navMenuItemEntities: PropTypes.array,
}

export default Navmenuitem1

export async function getStaticProps(context) {
  try {
    const response = await navMenuItemPageInitialPropsTqD4Resource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        navMenuItemEntities: response,
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
    const response = await navMenuItemPageInitialPathsTqQdResource({})
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
