
import { db } from "@/lib/db";


export default async function ShowComment({ postId }) {


  const result = await db.query(`SELECT
  profiles.user_name,
  comments.comment
FROM
  comments
JOIN
  profiles ON comments.profile_id = profiles.id
  WHERE comments.post_id = ${postId};`);
    
  const comments = result.rows;
  console.log(comments)
  
  return (
        <div >
            <h4>comments:</h4>
           
       
              {comments.map((commentt) => (
        <div key={commentt.id}>
      {/* <p>{comment.id}</p> */}
      {/* <h2>{comment.user_name}</h2> */}
      <p>{commentt.user_name}</p>
      <p>{commentt.comment}</p>
  
    </div>
         ))}
         </div>
 
   

  );
}