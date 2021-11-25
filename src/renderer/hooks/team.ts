import { useEffect, useState } from 'react'
import { getTeams } from 'renderer/api'

export function useTeams(): [unknown[], boolean] {
  const [teams, setTeams] = useState<unknown[]>([])
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

export function test() {}
