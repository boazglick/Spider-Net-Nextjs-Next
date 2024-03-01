import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import navMenuItemPageInitialPropsTqOHResource from '../../resources/nav_menu_item-page-initial-props-tq_o-h'

const Navmenuitem = (props) => {
  return (
    <>
      <div className="navmenuitem-container">
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
                    <div className="navmenuitem-container1">
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
          .navmenuitem-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .navmenuitem-container1 {
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

Navmenuitem.defaultProps = {
  navMenuItemEntities: [],
}

Navmenuitem.propTypes = {
  navMenuItemEntities: PropTypes.array,
}

export default Navmenuitem

export async function getStaticProps(context) {
  try {
    const response = await navMenuItemPageInitialPropsTqOHResource({
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
