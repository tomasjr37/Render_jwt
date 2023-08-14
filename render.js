              // to render the login user (JWT)
    const loginForm = document.getElementById("login-form"); 
    const message = document.getElementById("message");
  
    loginForm.addEventListener("submit", async function (e) {   // the action when click the submit  ,(e) event is a prameter , using async
         e.preventDefault();
  
         const username = loginForm.username.value; // the actual value in username field 
         const password = loginForm.password.value; // the password
  
      
          // an API request to validate the user if he was in the system or no
         try {                                             // fetch return promise ........                                  
         const response = await fetch("http://127.0.0.1:5000/login", {   //  response => the server response  The server responds to the POST request with an HTTP response  indicating the outcome of the request 
           method: "POST",    // to send data to the server  , used when you want to submit data to the server
           headers: {
            "Content-Type": "application/json",   //contain data about data of request such as content-type (important info. to server) 
           },
           body: JSON.stringify({ username, password }), // convert the data{username ,password} from form   into string , to send to the server
        });
  
            // that the condition if response come ok        
           // if =  True  =>>>>  print a user and password encrypted or token indicate to user actually login
          // if = false   = >>>  indicate we have problem in response

        if (response) {
          const data = await response.json(); // response fun .json() => it returns a Promise that resolves to the parsed JSON data , and the reesponse body must be json format if not return Error     
          console.log(data); // the response in json format assign in data and data will apear in console => console.log(data)          
            
            
           
          if(response.status == 200 || response.status == 201  ){  // the status of response test 200,201(no bug or error in data  ) , 400,401,500,404 => (have a problem in response )
           message.textContent = "You are Login !"; // display an alert to the user success  login          
          }else{
            message.textContent = " ...... Login failed !!! Please check your Email and Password";// display an alert to the user miss login  
          }

        } 
        
        else {
          message.textContent = " Error in Response !"; // else for error in response 
        }

      } catch (error) {  //  Try-catch  ===> 
        console.error("Error: we have a problem in user login"); // console type as error 
      }
    });
  
  