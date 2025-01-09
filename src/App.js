
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import LoginSignup from "./pages/LoginSignup";
import { useAuthContext } from "./hooks/useAuthContext";
import AccSummarry from "./components/AccSummarry";
import TransactionHistory from "./components/TransactionHistory";
import Deposit from "./components/Deposit";
import Withdrawal from "./components/Withdrawal";
import Transfer from "./components/Transfer";
import CreateAcc from "./components/CreateAcc";
import AdminDashboard from "./components/AdminDashboard";
import AdminGetAllTrans from "./components/AdminGetAllTrans";
import AdminGetAccounts from "./components/AdminGetAccounts";
import ExchangeRate from "./components/ExchangeRate";

function App() {
  const {user} = useAuthContext()
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path='/dashboard' element={user?<Dashboard/>:<LoginSignup/>}/>
    <Route path='/admin' element={user?<AdminDashboard/>:<LoginSignup/>}/>
    <Route path='/create-acc' element={<CreateAcc />}/>
    <Route path='/exchange' element={<ExchangeRate />}/>
    
    
    
    <Route path='/login-signup' element={user?<></>:<LoginSignup/>}/>
    <Route path='/summary' element={user?<AccSummarry />:<LoginSignup/>}/>
    <Route path='/history' element={user?<TransactionHistory />:<LoginSignup/>}/>
    <Route path='/deposit' element={user?<Deposit />:<LoginSignup/>}/>
    <Route path='/withdraw' element={user?<Withdrawal />:<LoginSignup/>}/>
    <Route path='/transfer' element={user?<Transfer />:<LoginSignup/>}/>
    <Route path='/all-trans' element={user?<AdminGetAllTrans />:<LoginSignup/>}/>
    <Route path='/all-acc' element={user?<AdminGetAccounts />:<LoginSignup/>}/>
    </Route>
  </Routes>
  );
}

export default App;
