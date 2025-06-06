import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { home, homeContent, homeHeader } from "@/lib/className";


export default function Home() {
    const loggedIn = {firstName:"Sapana", lastName:"Dhami", email:"H2EgY@example.com"}
  return (
    <>
    <section className={home}>
    <div className={homeContent}>
        <header className={homeHeader}>
            <HeaderBox
             type="greeting" title="Welcome" user ={loggedIn?.firstName || "Guest"} 
            subHeading="Access and manage your accounts from one place effectively"/>
        </header>
    <TotalBalanceBox 
    accounts= {[]} totalBanks={1} totalCurrentBalance={1440}/>

    Recent Transactions
    </div>
    <RightSidebar user = {loggedIn} transactions = {[]} banks = {[{currentBalance: 123.65}, {currentBalance: 200.65}]}/>
    </section>
    </>
  );
}
