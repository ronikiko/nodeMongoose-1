const axios = require('axios')

const avatar = (gender) => {
    return axios.get(`https://randomuser.me/api/?gender=${gender}`)
}

module.exports = avatar