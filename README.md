This is Front-end Ecommerce website project focused on electronic products and created using react.

Pages used in this project
-> Login page
-> Home page
-> Admin page
-> Cart page
-> Orders page
-> Help page

Login page :-
--------------
The application was initially "logged in" to see how the application works and visually look , to see the login page click logout button appear on homepage's top right corner , since it is a front-end project so on login page for user validation username and password are "admin".

used context API to acheive this functionality and a state variable.

Homepage :-
-------------
here all products are displayed using card structure each row contain 4 products.

each card contain two buttons "add to cart" and "buy now"

functionalities of the two buttons :-
-> add to cart : places the product in cart page (we see in-depth on cart page)
-> buy now : places the product in orders page (we see in-depth on orders page)

for well structured manner :-
->The card structures is defined in seperate jsx file called ProductCard.jsx under Components folder
->The product details for defines in seperate jsx file called ProductDetails.jsx under Data folder

product detail
--------------
each product contain a photo, name, features and price details to expain about them 

Admin page :-
---------------
this page contains 2 parts they are product creator and Products Manager

product creator
--------------
-> used to create a new product , contain 4 field called product name , features , price and photo
its design is present in ProductCreadtor.jsx

products Manager
----------------
-> all the existing product and their details will be visible here.
-> each product have 2 buttons , they are edit to modify the contents of the existing products , the changes simultaneously reflect in homepage . 
And delete used to remove the product from home page
its design is present in ProductTable.jsx

product creator and product manager are used by admin to create , modify and delete products in order the control the website 

Cart Page :-
-------------
When "add to cart" button clicked in a product of homepage , the product is added here 
-> cart page products are designed using card design it is defined present in CartCard.jsx
-> Cart card also have 2 button they are "buy now" and "remove from cart" 

functionalities of the 2 buttons :
-> buy now : add the product to the orders page
-> remove from cart : remove the product from the cart page

Order Page :-
----------------
when "buy now" button clicked in a product of homepage , the product is added here
-> Order page products are designed using Table design it is defined in ProductTable.jsx
-> The ProductTable.jsx has 4 columns names as product photo , product name , delivery date , action 
-> action column has "Cancel Order" button on each product to cancel the product and remove the product from orderpage

Help Page :-
-------------
Help page is used to 
->convey the how to use the website to order product 
->contain answer for FAQs
->given contact number and email for further and specific clarifications


yeah that's the brief description of the ront-end Electronics Ecommerce website project using React.




 
