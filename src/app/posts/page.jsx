import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Comment from "../componant/comment/Comment";
import ShowComment from "../componant/showcomments/page";
import Link from "next/link";
// import LikeButton from "../componant/likeButton/page";

import styles from "./Posts.module.css";

export default async function Posts() {
  // get the clerk userId
  const { userId } = auth();

  // get my new posts
  const posts = await db.query(`SELECT
                posts.id,
                posts.content,
                posts.created_at,
                posts.profile_id,
                profiles.user_name
            FROM posts
            INNER JOIN profiles ON posts.profile_id = profiles.id;`);

  // server action to add a new post
  async function handleAddPost(formData) {
    "use server";
    // get information from the form
    const content = formData.get("content");

    // get the profile id from the database
    const result = await db.query(
      `SELECT id FROM profiles WHERE clerk_id = '${userId}'`
    );
    const profileId = result.rows[0].id;

    // add the new post to the database
    await db.query(
      `INSERT INTO posts (profile_id, content) VALUES (${profileId}, '${content}')`
    );
  }

  return (
    <div>
      <h2>Anonymous Stories</h2>
      <SignedIn>
      <h3>Share Your Secret</h3>
        <form action={handleAddPost}>
          <textarea name="content" placeholder="What's on your mind?no one will know who you are ^^"></textarea>
          <button>Submit</button>
        </form>
      </SignedIn>

      <SignedOut>
        <p>Please sign in to share your story</p>
        <SignInButton />
      </SignedOut>
  

      <h3>Community Secrets</h3>
      <div className={styles.postsContainer}> {/* Apply CSS class */}
        {posts.rows.map((post) => {
          return (
            <div key={post.id} className={styles.post}> {/* Apply CSS class */}
              <h3>The Secret of our Stranger :  <span><Link href={`/strangers/${post.profile_id}`} >{post.user_name}</Link> </span> </h3>
              <span  className={styles.time}>{new Date(post.created_at).toLocaleString()}</span>
              <h2  className={styles.comment}>{post.content}</h2>
              {/* <LikeButton postId={post.id} /> */}
              <Comment postId={post.id} />
              <ShowComment postId={post.id}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
