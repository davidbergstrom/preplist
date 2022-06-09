import axios from 'axios'

const config = {
  auth: {
    username:
      '9218f408c730905161747c96ce8ec92fc1238e19fc220e183b1a234287f00366',
    password:
      'a70a9ed138b199d0dd10257068b344ce1f3b7372bcf50c6541b9bcb2daf5684d',
  },
}

const baseURL = 'https://api.planningcenteronline.com/services/v2/'

export async function getAllPlans() {
  try {
    const res = await axios.get(
      `${baseURL}service_types/746819/plans?order=sort_date`,
      config
    )

    return res.data.data
  } catch (err) {
    console.log(err)
  }
}

export async function getFuturePlans() {
  try {
    const res = await axios.get(
      `${baseURL}service_types/746819/plans?order=sort_date&filter=future`,
      config
    )

    return res.data.data
  } catch (err) {
    console.log(err)
  }
}

export async function getPlanItems(id) {
  try {
    const res = await axios.get(
      `${baseURL}service_types/746819/plans/${id}/items`,
      config
    )
    return res.data.data
  } catch (err) {
    console.log(err)
  }
}

export async function getPlanSongs(id) {
  try {
    const res = await axios.get(
      `${baseURL}service_types/746819/plans/${id}/items?include=song`,
      config
    )
    return res.data.data
  } catch (err) {
    console.log(err)
  }
}
