
// import Plus from "./Plus.svg"
const SavingsCards = (props) =>{
    const {showCards}= props
return(
    <div>
                                                 
                         
                          <div class="card" style= {{width: "18rem"}}>
                                <div class="card-body">
                                <h5 class="card-title">{showCards.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{showCards.percentage} {showCards.amountToSave}</h6>
                                <p class="card-text">{showCards.status}.</p>
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>
                                        {showCards.installmentalContribution}
                                        </td>
                                        <td>{showCards.interestRate}%</td>
     
                                    </tr>
                                    <tr>
                                           <td>{showCards.startDate}</td>
                                           <td>{showCards.maturityDate}</td>
                                     </tr>
  
                                </tbody>
                              </table>
  </div>
                            </div>
                                
                             
                        
                                
                   
                                
                
           

    </div>

)

}
export default SavingsCards