import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import navMenuItemPageInitialPropsTq0dResource from '../../resources/nav_menu_item-page-initial-props-tq_0d'
import navMenuItemPageInitialPathsTqQkResource from '../../resources/nav_menu_item-page-initial-paths-tq_qk'

const Navmenuitem11 = (props) => {
  return (
    <>
      <div className="navmenuitem11-container">
        <Head>
          <title>Navmenuitem1 - Spider Net Nextjs</title>
          <meta
            property="og:title"
            content="Navmenuitem1 - Spider Net Nextjs"
          />
        </Head>
        <DataProvider
          renderSuccess={(Nav_menu_itemEntity) => (
            <>
              <div className="navmenuitem11-container1">
                <h1>{Nav_menu_itemEntity?.title}</h1>
              </div>
            </>
          )}
          initialData={props.navMenuItemEntity}
          persistDataDuringLoading={true}
          key={props?.navMenuItemEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .navmenuitem11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .navmenuitem11-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Navmenuitem11.defaultProps = {
  navMenuItemEntity: [],
}

Navmenuitem11.propTypes = {
  navMenuItemEntity: PropTypes.array,
}

export default Navmenuitem11

export async function getStaticProps(context) {
  try {
    const response = await navMenuItemPageInitialPropsTq0dResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        navMenuItemEntity: response?.data?.[0],
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
    const response = await navMenuItemPageInitialPathsTqQkResource({})
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
