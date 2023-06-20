import { useState } from 'react'
export default function useLoginStore() {
  const [ login, setLogin ] = useState(false)
  return {
    login,
    setLogin
  }
}