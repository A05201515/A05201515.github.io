// let user_name = window.prompt("Please enter your name", "Type your name here");
// document.getElementById("greeting").textContent = "Hello, welcome " + user_name + "!";
var webmaps =
[
  ["Uber Eats", "https://ubereats.com", "Uber Eats provides users with restaurant options that are within a feasible radius for delivery or pickup. The strength of this feature is its accessibility to the public, whereas its weakness is occasional inaccurate pin placements, and drivers have reported experiencing GPS lag. Uber Eats was designed for public use/everyday consumers, and the user interface is fairly intuitive."],
   [
     "ETA Transit", "https://etatransit.com/", "ETA Transit helps public transportation systems be more efficient and reliable for commuters. The strengths of this app are its ability to provide readily available arrival/commute times and delays to passengers, and it allows operators to troubleshoot when there is a problem with a route. The app was designed for passengers, public transportation systems, and the institutions/local governments that provide the transportation system to the public."
   ]
];

function welcome()
{
  let a = "Please type your name.";
  let b = "Type your name here.";
  //a prompt box is used to prompt users to input a value before entering the page.
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
  return message
}

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
    }
    document.write("</table>");
    return "";
}
