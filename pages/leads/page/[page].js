import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import leadsPageInitialPropsTqY0Resource from '../../../resources/leads-page-initial-props-tq_y0'
import leadsPageInitialPathsTqCxResource from '../../../resources/leads-page-initial-paths-tq_cx'

const Leads1 = (props) => {
  return (
    <>
      <div className="leads1-container">
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
                    <div className="leads1-container1">
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
          .leads1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .leads1-container1 {
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

Leads1.defaultProps = {
  leadsEntities: [],
}

Leads1.propTypes = {
  leadsEntities: PropTypes.array,
}

export default Leads1

export async function getStaticProps(context) {
  try {
    const response = await leadsPageInitialPropsTqY0Resource({
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

export async function getStaticPaths() {
  try {
    const response = await leadsPageInitialPathsTqCxResource({})
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
