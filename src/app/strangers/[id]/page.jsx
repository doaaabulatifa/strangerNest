import ShowUserPosts from "@/app/componant/showUserposts/page";
import { db } from "@/lib/db";



// import styles from "./starngers.module.css";


export async function generateMetadata({ params }) {
  console.log(params)

   
  const strangerId = params.id;
  console.log(params.id)

  const result = await db.query(`SELECT * FROM profiles WHERE  id = '${strangerId}'`);


  const stranger = result.rows[0];
  console.log(result);
  return {
    title: `the stranger: ${stranger.user_name}`,
    description: ` ${stranger.bio}`,
  };
}


  export default async function starnger({ params }) {
   
    const strangerId = params.id;
  
      const result = await db.query(`SELECT * FROM profiles WHERE id = '${strangerId}'`);

  
  
    const stranger = result.rows[0];
    console.log(stranger);
  
    return (
      <div>
        <h1 >{stranger.user_name}</h1>
        <div>
              <h3 >username: {stranger.user_name}</h3>
              <p>user email: {stranger.email}</p>
              <p >user bio: {stranger.bio}</p>
              <p >user location: {stranger.location}</p>
              <ShowUserPosts  profileId={stranger.id} />
            </div>
      
      </div>
    );
  }
  

