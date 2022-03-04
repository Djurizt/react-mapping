
// import NewSavings from "./NewSavings.js"
// import TotalSaved from "./TotalSaved.js"
// import Transactions from "./Transactions.js"
// import Savings from "./Savings"
import CreateSavings from "./CreateSavings"
import Savings from "./Savings"
import Transactions from "./Transactions"

function Dashboard (){ 

  return(
  <div>
                <div class="p-2">
                        <div class="row container-fluid">
                              <div class="col-4">
                                      <Transactions/>
                               </div>
                        <div class="col-8">
                             <div className="d-flex"> 
                                  <div class="m-2">
                                    <CreateSavings/>
                                  </div>
                                    <div className="">
                                       <Savings/>
                                      </div> 
                             
                                </div> 
                        </div>
    
                  </div>
                        </div>
                
                
                {/* <div > 

                <Transactions/>
                  <Savings/>
                 </div> */}
                 
    
             
         
    
       
       
    
      
  </div>
    
  )
}
    
    export default Dashboard