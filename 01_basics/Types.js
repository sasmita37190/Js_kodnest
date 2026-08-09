



// 1. Inline JavaScript

// JavaScript is written directly inside an HTML tag using an event like onclick.

// Example:

// <button onclick="alert('Hello World')">Click Me</button>

// When you click the button, an alert appears.

// Advantages
// Good for very small examples.
// Disadvantages
// Makes HTML messy.
// Not recommended for real projects.




// 2. Internal JavaScript

// JavaScript code is written inside the same HTML file using the <script> tag.

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Internal JS</title>
// </head>
// <body>

// <h1>Hello JavaScript</h1>

// <script>
//     let name = "Sasmita";
//     console.log(name);
// </script>

// </body>













// 3. External JavaScript ⭐ (Most Important)

// JavaScript is written in a separate .js file and linked to the HTML.

// Step 1: Create script.js

// let name = "Sasmita";
// console.log(name);


// // Step 2: Link it in index.html
// <!DOCTYPE html>
// <html>
// <head>
//     <title>External JS</title>
// </head>
// <body>

// <h1>Hello JavaScript</h1>

// <script src="script.js"></script>

// </body>
// </html>




// | Internal JS                   | External JS                              |
// | ----------------------------- | ---------------------------------------- |
// | Code is inside the HTML file  | Code is in a separate `.js` file         |
// | Uses `<script> ... </script>` | Uses `<script src="script.js"></script>` |
// | Good for small projects       | Best for medium and large projects       |
// | Harder to maintain            | Easier to maintain                       |
// | HTML and JS are mixed         | HTML and JS are separated                |





