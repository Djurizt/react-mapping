// import CreateSavings from "./CreateSavings"
import SavingsCards from "./SavingsCards"

const Savings = ()=>{

const savingsData= [
    {
        "name": "Vacation",
        "savingsID": "e090ce43-315b-4852-bcca-ee5a1f4223ba",
        "amountToSave": 50000.000000000000000000,
        "amountSaved": 0.000000000000000000,
        "totalInterestEarned": 0,
        "estimatedTerminationDate": "2022-03-08T00:00:00",
        "startDate": "2022-02-26T00:00:00",
        "savingsType": 1,
        "status": "pending",
        "imageURL": "",
        "interestRate": 15.50,
        "schedule": 1,
        "installmentalContribution": 5000.000000000000000000,
        "isPaused": false,
        "percentage": "100%",
        "maturityDate": "Mar 7th 2022"
    },
    {
        "name": "Testing Personal Target",
        "savingsID": "72824131-b4ae-49d0-bcae-29e553deb51c",
        "amountToSave": 2000.000000000000000000,
        "amountSaved": 2500.000000000000000000,
        "totalInterestEarned": 10.616438356164383561643835616,
        "estimatedTerminationDate": "2022-02-23T00:00:00",
        "startDate": "2022-02-20T00:00:00",
        "savingsType": 1,
        "status": "in Progress",
        "imageURL": "",
        "interestRate": 15.50,
        "schedule": 1,
        "installmentalContribution": 666.666666666666666667,
        "lastPaymentDate": "2022-02-20T00:00:00",
        "isPaused": true,
        "percentage": "100%",
        "maturityDate": "Mar 7th 2022"
    },
    {
        "name": "G Challenge Weekly",
        "savingsID": "c6a1f776-ab92-4c89-aceb-9fdcfc70abb2",
        "amountToSave": 2000.000000000000000000,
        "amountSaved": 0.000000000000000000,
        "totalInterestEarned": 0,
        "estimatedTerminationDate": "0001-01-01T00:00:00",
        "startDate": "0001-01-01T00:00:00",
        "savingsType": 5,
        "status": "pending",
        "imageURL": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-group-challenge-savings/22fe2b2b-46ab-4971-8a87-72da6085e09b.jpeg",
        "interestRate": 12.50,
        "schedule": 2,
        "installmentalContribution": 250.000000000000000000,
        "isPaused": false,
        "percentage": "100%",
        "maturityDate": "Mar 7th 2022"
    },
    {
        "name": "G challenge week",
        "savingsID": "286c453f-3910-4df7-9b02-87ae6d9844e2",
        "amountToSave": 5000.000000000000000000,
        "amountSaved": 0.000000000000000000,
        "totalInterestEarned": 0,
        "estimatedTerminationDate": "0001-01-01T00:00:00",
        "startDate": "0001-01-01T00:00:00",
        "savingsType": 5,
        "status": "pending",
        "imageURL": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-group-challenge-savings/897b9d7a-5030-446b-99b2-7248e80e9a95.jpeg",
        "interestRate": 12.50,
        "schedule": 1,
        "installmentalContribution": 166.666666666666666667,
        "isPaused": false,
        "percentage": "50%",
        "maturityDate": "Mar 7th 2022"
    },
    {
        "name": "G challenge",
        "savingsID": "87c9042a-16a7-4e31-80c4-1f805fa4c1b5",
        "amountToSave": 2000.000000000000000000,
        "amountSaved": 0.000000000000000000,
        "totalInterestEarned": 0,
        "estimatedTerminationDate": "0001-01-01T00:00:00",
        "startDate": "0001-01-01T00:00:00",
        "savingsType": 5,
        "status": "pending",
        "imageURL": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-group-challenge-savings/e8db900b-60b2-46e8-b980-5a274df81582.jpeg",
        "interestRate": 12.50,
        "schedule": 3,
        "installmentalContribution": 500.000000000000000000,
        "isPaused": false,
        "percentage": "100%",
        "maturityDate": "Feb 8th 2022"
    },
    
    {
        "name": "CheckTargetTest",
        "savingsID": "d5393a07-6b61-46fd-9948-ed3d1404b55e",
        "amountToSave": 5000.000000000000000000,
        "amountSaved": 1666.666666666666666666,
        "totalInterestEarned": 0,
        "estimatedTerminationDate": "2021-02-26T00:00:00",
        "startDate": "2021-02-23T22:33:26.8333333",
        "savingsType": 4,
        "status": "in progress",
        "imageURL": "",
        "interestRate": 12.75,
        "schedule": 1,
        "installmentalContribution": 833.333333333333333333,
        "lastPaymentDate": "2021-02-24T00:00:00",
        "isPaused": false,
        "percentage": "100%",
        "maturityDate": "Mar 7th 2022"
    },
    {
        "name": "TestChallengeCheck",
        "savingsID": "1ed6b0ce-92c9-4e6c-8b3e-2ccb94fba89b",
        "amountToSave": 2000.000000000000000000,
        "amountSaved": 2000.000000000000000001,
        "totalInterestEarned": 0.684931506849315069,
        "estimatedTerminationDate": "2021-02-26T00:00:00",
        "startDate": "2021-02-23T22:00:36.87",
        "savingsType": 5,
        "status": "in progress",
        "imageURL": "",
        "interestRate": 12.50,
        "schedule": 1,
        "installmentalContribution": 666.666666666666666667,
        "isPaused": false,
        "percentage": "33%",
        "maturityDate": "Mar 7th 2022"
    }
]


return(

    <>
        {/* <div class="d-flex bd-highlight">
        <CreateSavings/>
            </div> */}
        {

        savingsData.map((eachSavings,i) => <SavingsCards key={i} showCards={eachSavings}/>)
        }
    
    
    </>
)


}


export default Savings