import { useState } from "react"
import { getNamedValue } from "../api/api"

export function useValue() {
  const [loading, setLoading] = useState(false)
  function fetch(type) {
    setLoading(true)
    getNamedValue(type, () => setLoading(false))
  }

  return [fetch, loading]
}
