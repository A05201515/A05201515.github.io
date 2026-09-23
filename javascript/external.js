// let user_name = window.prompt("Please enter your name", "Type your name here");
// document.getElementById("greeting").textContent = "Hello, welcome " + user_name + "!";
function welcome()
{
  let a = "Please type your name.";
  let b = "Type your name here.";
  //a prompt box is used to prompt users to input a value before entering the page.
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
  return message
}
