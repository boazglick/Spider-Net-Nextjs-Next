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
        case 'post': {
          try {
            await res.revalidate(`/post`)
            await res.revalidate(`/post/${data.date}`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'attachment': {
          try {
            await res.revalidate(`/attachment`)
            await res.revalidate(`/attachment/${data.id}`)
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
