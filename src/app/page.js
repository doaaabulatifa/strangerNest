
import Image from "next/image";
import  stra from "../../public/OIP.jpg"

export default function Home() {
  return (
 
    <div>
      <h1>StrangerNest</h1>
      <h2>Welcome in your nest</h2>
      <p>Welcome to StrangerHub, a unique platform where you can share your most intriguing experiences and strangest tales anonymously with fellow users who go by the name of 'Strangers.' Dive into a world of shared adventures, mysterious encounters,
        and unexpected twists,
        all while connecting with others who share your curiosity for the unknown.</p>
        <Image className="image"  src={stra} alt="strange image"   priority={true} />
    
    </div>
  );
}
