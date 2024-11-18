import Link from "next/link";
import React from "react";

const page = () => {
    
    return (
        <div>
<h1>Dynamic Routing</h1>
<h2>let say we some class having students 1000</h2>
<h2>so student list will be there </h2>
<h2>list includes name, address, email, phone</h2>
<h2>it is difficult to create 1000 pages </h2>
<h2>on one page we work for 1000 students</h2>
<br/>


<h1>STUDENT-LIST</h1>
    
    <ul>
<li><Link href={'/Dynamic-Routings/safwan'}>SAFWAN AHMED</Link></li>
<li><Link href={'/Dynamic-Routings/faraz'}>FARAZ AHMED</Link></li>
<li><Link href={'/Dynamic-Routings/hina'}>HINA AHMED</Link></li>
<li><Link href={'/Dynamic-Routings/marium'}>MARIUM AHMED</Link></li>
<li><Link href={'/Dynamic-Routings/sana'}>SANA AHMED</Link></li>
<li><Link href={'/Dynamic-Routings/rimsha'}>RIMSHA AHMED</Link></li>

    </ul>

        </div>
    )
}

export default page