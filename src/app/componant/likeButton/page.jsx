// "use client"
// import { useState } from "react";
// import { db } from "@/lib/db";

// export default function LikeButton({ postId }) {
//   const [likes, setLikes] = useState(0); 

//   async function handleLike() {
//     // Increment the likes in the database
//     await db.query(`UPDATE posts SET likes = likes + 1 WHERE id = ${postId}`);
//     // Update the state to reflect the new number of likes
//     setLikes(likes + 1);
//   }

//   return (
//     <div>
//       <button onClick={handleLike}>Like</button>
//       <span>{likes} Likes</span>
//     </div>
//   );
// }
 //couldn't solve this error ????????????????????????????????
//  Build Error
// Failed to compile

// Next.js (14.2.3)
// ./node_modules/pg-connection-string/index.js:76:1
// Module not found: Can't resolve 'fs'

// https://nextjs.org/docs/messages/module-not-found

// Import trace for requested module:
// ./node_modules/pg/lib/connection-parameters.js
// ./node_modules/pg/lib/client.js
// ./node_modules/pg/lib/index.js
// ./src/lib/db.js