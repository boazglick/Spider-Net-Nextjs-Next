import { revalidate } from '@teleporthq/cms-mappers/strapi/revalidate'

export default async function handler(req, res) {
  try {
    if (process.env.WEBHOOK_SECRET !== req.query['WEBHOOK_SECRET']) {
      return res.status(401).json({
        revalidated: false,
      })
    }
    await revalidate(req, async (data, contentType) => {
      switch (contentType) {
        case 'api::author.author': {
          try {
            await res.revalidate(`/authors`)
            await res.revalidate(`/authors/${data.id}`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'api::lead.lead': {
          try {
            await res.revalidate(`/leads`)
            await res.revalidate(`/leads/${data.id}`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'api::post.post': {
          try {
            await res.revalidate(`/posts`)
            await res.revalidate(`/posts/${data.id}`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'api::tag.tag': {
          try {
            await res.revalidate(`/tags`)
            await res.revalidate(`/tags/${data.id}`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        default:
          throw new Error('Invalid content typ, received', contentType)
      }
    })
    return res.status(200).json({
      revalidated: true,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      revalidated: false,
    })
  }
}
