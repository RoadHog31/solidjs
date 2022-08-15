/* Bad example - Single Responsibility Principle (SRP) */
//This class violates the SRP because it has more that one reason to change.
export class Automobile {
    start() {
      
        let start = "start your engine!";
        return start
    }
  
    
    stop() {
      
        let stopCar = "Breakkk!";
        return stopCar
    }
  
    changeTires(Tires) {
      
        return "Tyres changed!";
    }

    drive() {
        
    }

    wash() {        

    }

    checkOil() {
        
    }

    getOil(oilAmount) {
        
    }
  }

// A class or a module must have a specific responsibility and nothing more. Put it another way, it should change for only one reason. We can say that the responsibility is encapsulated within the class and there's stronger cohesion within the class.

// For example, an Automobile class can start or stop itself but the task of washing it belongs to the CarWash class. In another example, a Book class has properties to store its own name, author and text. But the task of printing the book must belong to the BookPrinter class. The BookPrinter class might print to console or another medium but such dependencies are removed from the Book class.

/* Good example - Single Responsibility Principle (SRP) */
export class Automobile {

    start() {
      
        let start = "start your engine!";
        return start
    }  
    
    stop() {
      
        let stopCar = "Breakkk!";
        return stopCar
    }


    getOil(oilAmount) {
        
    }
}

//Driver class
export class Driver {    

    drive() {
        
    }
    
}

//CarWash class
export class CarWash {    

    wash() {
        
    }
    
}

//Mechanic class
export class Mechanic {    

    changTires(Automobile, Tires) {
        
    }

    checkOil(Automobile) {
        
    }
    
}

// export default Automobile class;
export {Automobile};