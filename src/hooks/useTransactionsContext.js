import { useContext } from "react"
import { TransactionContext } from "../contextApi/TransactionContext"

export const useTransactionContext = () => {
  const context = useContext(TransactionContext)
  if(!context){
    throw Error('useWorkoutContext must be used inside a WorkoutContextProvider')
  }
  return context
}