import { useContext } from "react";
import { AuthContext } from "../contextApi/AuthContext"


export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if(!context){
    throw Error('useAuthContext must be used inside of the AuthContextProvider')
  }
  return context
}