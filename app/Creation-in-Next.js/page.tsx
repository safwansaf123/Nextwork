import Link from "next/link";
import Navbar from "../Navbar";


function Creations() {
    return (
  <div>

<Link href='../'><h4>home Page</h4></Link>

<h3>HOW TO CREATE MULTIPLE PAGES</h3>
<h1>create a folder in "app" and named it, it will be your page name </h1>
<h1>create page.tsx in a folder that you have created its called component</h1>
<h1>now create a component or function name(params:type) {} </h1>
<h1>now make function export default to see on web page</h1>
<h3>CALLED ONE WAY DATA BINDING</h3>

<h3>HOW TO CREATE A TEXT THAT WILL DISPLAY ON EVERY page</h3>
<h2>there are many ways</h2>
<li>1-write on every page</li>
<li>2-write a code and create link and share</li>
<li>3-This method totally different open layout.tsx file</li>
<li>write code there in layout.tsx file OR share link init OR write text</li>
<li>create link in layout.tsx file</li>


<h3>HOW TO CREATE TSX FILE IN SAME FOLDER AND WHAT IT WILL DO OR HAPPEN called CUSTOM COMPONENT</h3>
<h3>If we need same code on every page so write it on every page(difficult) or create a component and import it(EASY)</h3>
<h2>creating tsx file in same folder twice with different name </h2>
<h2>the second tsx file created, the content in this file will DISPLAY on top of the browser it is not page </h2>
<li>Create a .tsx file in app or any folder that already have tsx file and name it let say Navbar</li>
<li>create a code function</li>
<li>now this code can be imported or exported on other pages</li>
<li>write this code on other tsx file import Navbar from "./navbar"</li>
<li>if named it safoo so import safoo from "./safoo"</li>
<li>write a self closingtag of Navbar where the same code u want to repeat</li>

<h3>HOW TO CREATE COMPONENT</h3>
<li>simple create page.tsx file or .tsx file or any name.tsx or Navabr.tsx</li>
<li>create a peace of code called component and use where u want</li>

<h3>HOW TO CREATE CUSTOM COMPONENT (MAY BE USE AS A LINK)& HOW TO IMPORT</h3>
<li>simple create page.tsx file in app folder not in other folder</li>
<li>name of custom component will be any like Navbar.tsx file </li>
<li>use this custom component as a code in TAG, NOT as HTML tag like <></></li>
<li>like <Navbar/> </li>
<li>here tag has forward slash in end</li>
<li>Component Tags is represneted by first letter IS capital and </li>
<li>HTML tag First letter will be small always</li>
<li>write this code  =   import Navbar from "../Navbar";</li>

<h3>WHAT IS ATTRIBUTES OR PROBES & HOW TO CREATE</h3>
<li>SEE DEFINATIONS</li>


<h3>HOW TO CREATE or DO NESTED ROUTING and for what it will be used</h3>
<h2>it is used for just say a example A product name is GLUCERNA when we will click on it, its detail will be seen</h2>
<h2>/GLUCERNA/details</h2>
<h2>like Daraz online shopping</h2>
<li>Simply create a folder and name it PRODUCTS and create another folder glucerna</li>
<li>create a page in it </li>

<h3>WHAT IS RENDERING HOW TO CREATE IT</h3>
<h2>it determines how your application handles content fetching and rendering, either on the server or as static files.</h2>
<h2>Create a component </h2>
<h2>and top of component write 'use client' to make Client site Rendering</h2>
<h2>By default next js file run on= server site rendering </h2>


<h3>What is is ROUTE GROUP and used for and how to create</h3>
<h2>In the app directory, nested folders are normally mapped to URL paths.
  <li>However, you can mark a folder as a Route Group to prevent the folder from being included in the route's URL path.</li>
<li>This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.</li></h2>
<h4><li>In Simple words you dont have to go to other pages one by one just jump into that page</li></h4>
<h2>example: if i wanted to go in address page i have to type http://localhost:3001/Route-Groups/Address,</h2>
 <h2>after creating Route groups easily jump there  http://localhost:3001/Address, http://localhost:3001/workplaces </h2>
<h2>do nested browsing and move all folder in one place </h2>
<h2>later rename name the folder by paranthesis means in curly brackets</h2>

</div>
    );
}

export default Creations