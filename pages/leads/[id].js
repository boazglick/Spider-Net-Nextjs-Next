import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import leadsPageInitialPropsTqGlResource from '../../resources/leads-page-initial-props-tq_gl'
import leadsPageInitialPathsTqQMResource from '../../resources/leads-page-initial-paths-tq_q-m'

const Leads11 = (props) => {
  return (
    <>
      <div className="leads11-container">
        <Head>
          <title>Leads1 - Spider Net Nextjs</title>
          <meta property="og:title" content="Leads1 - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(LeadsEntity) => (
            <>
              <div className="leads11-container1">
                <span>{LeadsEntity?.leadname}</span>
                <span>{LeadsEntity?.id}</span>
              </div>
            </>
          )}
          initialData={props.leadsEntity}
          persistDataDuringLoading={true}
          key={props?.leadsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .leads11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .leads11-container1 {
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

Leads11.defaultProps = {
  leadsEntity: [],
}

Leads11.propTypes = {
  leadsEntity: PropTypes.array,
}

export default Leads11

export async function getStaticProps(context) {
  try {
    const response = await leadsPageInitialPropsTqGlResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        leadsEntity: response?.data?.[0],
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
    const response = await leadsPageInitialPathsTqQMResource({})
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
