import { useEffect, useState } from 'react'
import { getTeams } from 'renderer/api'
import { CowketTeam } from 'renderer/types/team'

export function useTeams(): [CowketTeam[], boolean] {
  const [teams, setTeams] = useState<CowketTeam[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function internalGetTeams() {
      const { data } = await getTeams()
      setTeams(data)
    }

    internalGetTeams()

    return () => {
      setTeams([])
      setLoading(true)
    }
  }, [])

  return [teams, loading]
}

export const S = {}
