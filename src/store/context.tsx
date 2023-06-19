import useUserStore from "./userStore";
import useLoginStore from "./loginStore";
import { createContext } from "react";

export const context = createContext(null)
export default function ContextComp({children}) {
  const userStore = useUserStore()
  const loginStore = useLoginStore()

  const contextValue  = {
    userStore,
    loginStore
  }
  return <context.Provider value={contextValue}>{children}</context.Provider>
}