# Render_jwt
render jwt login (api) by vanilla javascript
# How to link the Login (rest Api ) to the Front end ? 

1- Design the page of login Using Html and Css 
2- wait to take the end point from Back-end develober 
3- test the endpoint (url) // iam using postman to check the response
4- render the api in frontend using vanilla javascript



# Steps 

1- Design 

![WhatsApp Image 2023-08-15 at 12 12 56 PM](https://github.com/tomasjr37/Render_jwt/assets/64990413/6f643044-161b-4051-95ed-b71bd66b765e)
2-test 
   ![WhatsApp Image 2023-08-11 at 5 55 58 AM](https://github.com/tomasjr37/Render_jwt/assets/64990413/83a502a7-ec43-4de6-9413-fefeac8ca43a)

3- explain the javascript code 

// js code to handle the form and the message will apear with action
    const loginForm = document.getElementById("login-form"); 
    const message = document.getElementById("message"); 

 loginForm.addEventListener("submit", async function (e) {   // the action when click the submit  ,(e) event is a 
                                                                                          prameter , using async
         e.preventDefault(); // use this function to prevent default event and apply our task we need
         // Clicking on a "Submit" button, prevent it from submitting a form
         // Clicking on a link, prevent the link from following the URL
  
         const username = loginForm.username.value; // the actual value in username field 
         const password = loginForm.password.value; // the password

# an Api Request code 

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

# when the user was'nt assign in system (false response)
     ![WhatsApp Image 2023-08-15 at 12 12 57 PM](https://github.com/tomasjr37/Render_jwt/assets/64990413/ac8a4c0f-14a8-4978-8853-5c40859afbb8)



# when the user was assign in system (true response)

![WhatsApp Image 2023-08-15 at 12 12 56 PM (1)](https://github.com/tomasjr37/Render_jwt/assets/64990413/185b0901-7e88-4876-8105-d6bbf1948188)
 and the data in the consle (token) indicate the user still login  



 # message (alert )

by response.statues

![WhatsApp Image 2023-08-15 at 12 12 55 PM (1)](https://github.com/tomasjr37/Render_jwt/assets/64990413/03c3f568-3a97-4058-882c-0dd8b41dd0a7)

![WhatsApp Image 2023-08-15 at 12 12 55 PM](https://github.com/tomasjr37/Render_jwt/assets/64990413/3128f3f3-00db-4b05-ad0b-5b62ddbc9554)


 the status of response test 200,201(no bug or error in data  ) , 400,401,500,404 => (have a problem in response )
 
