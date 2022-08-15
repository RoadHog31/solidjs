/* Bad example - Single Responsibility Principle (SRP) */
//This class violates the SRP because it has more that one reason to change.
export class Employee {
    calculatePay() {
      
        let paycalcutlated = "Pay has been calculated";
        return paycalcutlated
    }
  
    
    reportHours() {
      
        let reportHours = "Report hours";
        return reportHours
    }
  
    saveToDB() {
      
        return "Saved to database!";
    }
  }

// export default iceCreamMaker;
export {Employee};
// Let's say that we wanted to change the reportHours method. To do this we have to change the code inside the Employee class, which means that we could potentially break some of the other methods in our class.

/* Good example - Single Responsibility Principle (SRP) */
