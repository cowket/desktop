import axios from 'axios'

axios.defaults.adapter = require('axios/lib/adapters/http')

export default function setup() {
  axios.defaults.baseURL =
    process.env.NODE_ENV === 'production'
      ? 'https://cw.malrang.dev'
      : 'https://cw.malrang.dev'
}
