import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { home, homeContent, homeHeader } from "@/lib/className";


const Home =  async () => {
    const loggedIn = await getLoggedInUser();
  return (
    <>
    <section className={home}>
    <div className={homeContent}>
        <header className={homeHeader}>
            <HeaderBox
             type="greeting" title="Welcome" user ={loggedIn?.name || "Guest"} 
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

export default Home