import { useState } from 'react'
export default function useUserStore() {
  const [ user, setUser ] = useState({})
  return {
    user,
    setUser
  }
}