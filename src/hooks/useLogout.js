import { useAuthContext } from "./useAuthContext"
import { useTransactionContext } from "./useTransactionsContext"


export const useLogout = () => {

  const {dispatch} = useAuthContext()
  
const {dispatch: transactionDispatch} = useTransactionContext()

  const logout = () => {
    //remove user and customer from localStorage
    localStorage.removeItem('user')
    localStorage.removeItem('customer')
    //dispatch logout action
      dispatch({type: 'LOGOUT'})
      transactionDispatch({type: 'SET_TRANSACTIONS', payload: null})
      window.location.replace('/')
  }
  return {logout}
}