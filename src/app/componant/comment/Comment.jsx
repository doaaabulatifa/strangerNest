
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";


export default async function Comment({postId}) {

    async function handleAddComment(formData) {
      "use server";
  
      // const user_name = formData.get("user_name");
      const { userId } = auth();
      console.log({userId})
    
      const result= await db.query(`SELECT id FROM profiles WHERE clerk_id = '${userId}'`);
      console.log(result.rows[0].id);
      const profileId = result.rows[0].id;
      console.log(profileId);
    
      const comment= formData.get("comment");
      await db.query(`INSERT INTO comments (comment, profile_id,post_id) values ('${comment}', '${profileId}', '${postId}')`);

  
      revalidatePath("/posts");
  
      redirect("/posts");
    }
  
    return (
  
        <form action={handleAddComment}>
       {/* <label htmlFor="user_name">Your name</label> */}
        {/* <input name="user_name" id="user_name" placeholder="Name" /> */}
        <input type="hidden" name="post_id" value={postId} />
        <label htmlFor="comment">comment</label>
        <input name="comment" id="comment" placeholder="comment" />

        <button type="submit">Add a comment!</button>
      </form>
 
    )
    
} 