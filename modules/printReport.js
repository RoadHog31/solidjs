// https://www.globalnerdy.com/2009/07/15/the-solid-principles-explained-with-motivational-posters/


// As an example, consider a module that compiles and prints a report. Such a module can be changed for two reasons. First, the content of the report can change. Second, the format of the report can change. These two things change for very different causes; one substantive, and one cosmetic. The single responsibility principle says that these two aspects of the problem are really two separate responsibilities, and should therefore be in separate classes or modules. It would be a bad design to couple two things that change for different reasons at different times.

//Bad Example:

export class Report {

  function reportFormatChange(format) {
    
    let contentChange = "Format has changed"

    return format;
  };

  function reportContentchanged(content) {

    let contentChange = "Content has changed"
    
    return content;
  };


  function printReport(){    

    console.log("One whole Report printed");
    };
};