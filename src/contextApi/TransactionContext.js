import { createContext, useReducer } from "react";

export const TransactionContext = createContext()

export const transactionReducer = (state, action) => {
switch(action.type){
  case 'SET_TRANSACTIONS':
    return {
      transactions: action.payload
    }

    case 'CREATE_TRANSACTIONS':
      return {
        transactions: [action.payload, ...state.transactions ]
      }

      case 'DELETE_TRANSACTIONS':
        return {
          transactions: state.transactions.filter((trans) => trans._id !== action.payload._id)
        }

    default:
      return state
}
}

export const TransactionContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(transactionReducer, {
    transactions: null
  })

  console.log('TransactionContext state', state);

  return (
    <TransactionContext.Provider value={{...state, dispatch}}>
            {children}
    </TransactionContext.Provider>
  )
}