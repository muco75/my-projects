let messages = document.getElementById("messages"); 
let textbox = document.getElementById("textbox")
let button = document.getElementById("button")


    button.addEventListener("click", function(element){
        //var newMessage = document.createElement("div")
        //newMessage.innerHTML = textbox.value 
        //messages.appendChild(newMessage);
        
        if(textbox.value.length == 0)
         {
         
         }
         else {
            let messageContainer = document.createElement("div")
            messageContainer.classList.add("message-container");
            messages.appendChild(messageContainer);
    
            let newSpan = document.createElement("span")
            newSpan.classList.add("message");
            newSpan.innerHTML = textbox.value
            messageContainer.appendChild(newSpan);
        
            let newX = document.createElement("span")
            newX.classList.add("delete");
            newX.innerHTML = "X"
            messageContainer.appendChild(newX);
     
            newX.addEventListener("click", function  (parameter1, parameter2) {
                //messageContainer.removeChild(newSpan);
                //messageContainer.removeChild(newX);
                messages.removeChild(messageContainer);
                console.log(parameter1)
                console.log(parameter2)
            })
         
            // volgende keer: vue.js 
       
        
        
         textbox.value = "";}
    
    })
    
    let json = '{"name": "Peter", "age": 22, "country": "United States"}';
    
    // Converting JSON-encoded string to JS object
    let obj = JSON.parse(json);
      // Accessing individual value from JS object
      document.write(obj.name + "<br>"); // Prints: Peter
      document.write(obj.age + "<br>"); // Prints: 22
      document.write(obj.country); // Prints: United States

      
