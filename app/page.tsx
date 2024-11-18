import Link from "next/link";

import Navbar from "./Navbar"; // see in ./navbar means on step back

import Header from "./Props"; 

import Prop from "./PROPS/page";



export default function Home() {
  return (
    <div>
      <Navbar/>
<Link href='/definations'>   1-DEFINATIONS  </Link>
<Link href= '/Creation-in-Next.js'><h2>  2-CREATIONS</h2> </Link>
<Link href='/linked'> 3-LINKED  </Link>
<Link href='/Nested-Routing'><h3>  4-NESTED-ROUTING</h3> </Link>
<Link href='/LAYOUT'>  <h4> 5-LAYOUT</h4> </Link>
<Link href={'/ANCHOR-TAG'}>  <h3> 6-ANCHOR TAG </h3></Link>
<Link href='/Rendering'>      <h4> 7-Rendering </h4>  </Link>
<Link href='/Address'> <h5> 8-Route-Groups1 </h5></Link>
<Link href='/workplaces'> <h5> 9-Route-Groups 2 </h5></Link>
<Link href='/Website'> <h5> 10-governer web page </h5></Link>
<Link href={'/Commonlayout'}> <h5> 11-Common layout </h5></Link>



<Header profile='safwan ahmed' />

<Prop profile={"62829"}/> <h2>data written in page prop </h2>

<h1> hello safwan say hi to world from okasha </h1>
</div>
  );
}


