'use client'


import Link from "next/link";
import React from "react";
import Image from "next/image";




export default function Website(){

return (

    <div>
<nav className="bg-green-600 text-white h-15 py-4 px-4 flex justify-between items-center">


<div>
    <h1 className="text-2xl font-bold text-white">
        <a href="#!">SAFWAN AHMED</a>
    </h1>

</div>

<div>

<ul className="flex space-x-5">

    <li><Link href="./"> Home</Link> </li>
    <li><Link href="./"> Aboutus</Link></li>
    <li><Link href="./"> Contact</Link></li>
</ul>

</div>
<div>right</div>
</nav>

    </div>

);

}

// py is used for padding vertically
// px is used for padding horizontally
// h- is used for height
// flex is used for row
// justify-around is used for gap between them will be equal, space from sides are equal
// item center is used for vertically alignment
// href="#!"  this will only show link while click not go any where