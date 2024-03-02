import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import leadsPageInitialPropsTqUrResource from '../../resources/leads-page-initial-props-tq_ur'

const Leads = (props) => {
  return (
    <>
      <div className="leads-container">
        <Head>
          <title>Leads - Spider Net Nextjs</title>
          <meta property="og:title" content="Leads - Spider Net Nextjs" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(LeadsEntities) => (
                  <>
                    <div className="leads-container1">
                      <span>{LeadsEntities?.leadname}</span>
                      <span>{LeadsEntities?.id}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.leadsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .leads-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .leads-container1 {
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

Leads.defaultProps = {
  leadsEntities: [],
}

Leads.propTypes = {
  leadsEntities: PropTypes.array,
}

export default Leads

export async function getStaticProps(context) {
  try {
    const response = await leadsPageInitialPropsTqUrResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        leadsEntities: response,
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
