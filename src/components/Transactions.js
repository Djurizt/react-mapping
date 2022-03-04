import TotalSaved from "./TotalSaved"
import TransactionsCards from "./TransactionsCards"
const Transactions = () =>{

  const transactionsData= [
    {
        "amount": 1000.000000000000000000,
        "action": 2,
        "creationDate": "2022-03-02T14:13:33.97",
        "name": "Test2",
        "sname": "Testr",
        "savingsType": 2,
        "samount": 20000.000000000000000000,
        "customerName": "Rosh Abayomi",
        "id": "b483b3f3-03a4-45d1-97dd-8ac06bd5ec4c",
        "lastModifiedDate": "2022-03-02T14:13:33.97"
    },
   
   
    
  ] 
 
 
  return (
    <div> 
           <TotalSaved/>
          {
            
            transactionsData.map((eachTransactions,i) => <TransactionsCards key={i} showTransactions={eachTransactions}/>)
          }
         

    </div>
 )


}
export default Transactions