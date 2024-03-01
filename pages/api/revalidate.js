import { revalidate } from '@teleporthq/cms-mappers/wordpress/revalidate'

export default async function handler(req, res) {
  try {
    if (process.env.WEBHOOK_SECRET !== req.query['WEBHOOK_SECRET']) {
      return res.status(401).json({
        revalidated: false,
      })
    }
    await revalidate(req, async (data, contentType) => {
      switch (contentType) {
        case 'attachment': {
          try {
            await res.revalidate(`/attachment/${data.id}`)
            await res.revalidate(`/attachment`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'page': {
          try {
            await res.revalidate(`/page`)
            await res.revalidate(`/page/${data.id}`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'post': {
          try {
            await res.revalidate(`/post/${data.slug}`)
            await res.revalidate(`/post`)
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
