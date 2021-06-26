const fetchDataJSONbin = async () => {
  const res = await fetch('https://api.jsonbin.io/v3/b/60c23e9a4d024768b8f5e5f0/latest', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': `$2b$10$${process.env.API_KEY}`
    }
  })

  return await res.json()
}

const updateDataJSONbin = async (data) => {
  const res = await fetch('https://api.jsonbin.io/v3/b/60c23e9a4d024768b8f5e5f0', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': `$2b$10$${process.env.API_KEY}`
    },
    body: JSON.stringify(data)
  })

  return await res.json()
}

module.exports = {
  fetchDataJSONbin,
  updateDataJSONbin
}
