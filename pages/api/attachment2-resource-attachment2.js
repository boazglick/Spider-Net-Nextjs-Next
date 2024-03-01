import attachment2Resource from '../../resources/attachment2'
export default async function handler(req, res) {
  try {
    const response = await attachment2Resource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
          