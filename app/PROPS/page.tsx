import Link from "next/link"
import React from "react";
type propsType = {profile:string}


export default function Prop (props:propsType) 
{

return(
<div>

<h1>{props.profile}</h1>


<h2>in early we make pages and called them in parent pages or pages .tsx called ONE WAY DATA BINDING</h2>
<h2>changes take places in page we have created </h2>
<h2>called PROPS or One way data binding </h2>
<h2>so parent can send data to child one way </h2>

<h2>from above function we can make changes in parent elements also without changing in main page</h2>
<h2>child can send data to parent in reverse</h2>

<h3>in javascript DESTRUCTURING</h3>
<h2>while calling data use our own program of calling data in our way </h2>
<h2>direct calling in curly brackets props.profile</h2>
<h2>props is in structure</h2>
<h2>DESTRUCTURING props</h2>
<h2>so we have not to write props.profile just write profile</h2>

<h2>DESTRUCTURING is java script concept used in REACT</h2>
// Create an Object
<li>
//const person</li> 
<li> firstName: "John",</li>
<li>  lastName: "Doe",</li>
<li>  age: 50</li>

<li>// Destructuring</li>
<li>let {'lastName, firstName'} = person;</li>

<h4>Note:
<li>Destructuring is not destructive.</li>

<li>Destructuring does not change the original object.</li></h4>


<Link href={'https://www.w3schools.com/JS//js_destructuring.asp'}> <h3>CLICK TO SEE MORE</h3>   </Link>   


<li><h1>Skipping Array Values</h1></li>
<li><h2>We can skip array values using two or more commas:</h2></li>

Example
<li><h2>// Create an Array</h2></li>
<li><h2>const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];</h2></li>

<li><h2>// Destructuring</h2></li>
<li><h2>let [fruit1,,,fruit2] = fruits;</h2></li>

</div>
)
}; 