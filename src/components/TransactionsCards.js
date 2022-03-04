

const TransactionsCards = (props) =>{
const {showTransactions} = props
return(
    <div>

       
        
                               
                                       
                                <div class="card" style={{width: "18rem", height:"100rem"}}>
                                     <div class="card-body">
                                        <h5 class="card-title">Transactions history
                                        </h5>
                                        <h6 class="card-subtitle mb-2 text-muted">{showTransactions.creationDate}
                                        </h6>
                                <table class="table">
 
                                    <tbody>
                                        <tr>
                                            <td>{showTransactions.name}</td>
                                            <td> {showTransactions.amount} </td>
                                        </tr>
                                        <tr>
                                            <td >{showTransactions.sname}</td>
                                            <td >{showTransactions.samount}</td>
                                        </tr>

                                    </tbody>
                                </table>
                                   
                                                                                
                                           
                                    
                                    </div>
                                </div>
                                      
                              
                            
                    
            

      
    </div>

)

}


export default TransactionsCards