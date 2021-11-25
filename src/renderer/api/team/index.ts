import axios from 'axios'

export async function getTeams() {
  return axios.get('/team')
}

export async function searchTeam(keyword: string) {
  return axios.get(`/team/search/${keyword}`)
}
