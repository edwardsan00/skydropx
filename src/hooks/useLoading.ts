import { useState } from 'react'

export const useLoading = () => {
  const [loading, setLoading] = useState(false)
  return {
    loading,
    loadingStart: () => setLoading(true),
    loadingDone: () => setLoading(false),
  }
}
