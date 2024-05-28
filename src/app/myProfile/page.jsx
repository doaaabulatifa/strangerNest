import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import BasicSelect from "../componant/BaiscSelect";

export default async function myProfile() {
    const { userId } = auth();
    console.log({userId});
    const result = await db.query("SELECT * FROM profiles WHERE clerk_id = $1", [userId]);
 
  
  const profile = result.rows[0]; 

  async function editProfile(formData) {
    "use server";
    const user_name = formData.get("user_name");
    const email= formData.get("email");
    const bio= formData.get("bio");
    const location= formData.get("location");
    await db.query(
        "UPDATE profiles SET user_name = $1, email = $2, bio = $3, location = $4 WHERE clerk_id = $5",
        [user_name, email, bio, location, userId]
      );
    revalidatePath("/");
  
    redirect("/");
  }

  return (
    <div>
      <form action={editProfile}>
        <label>Name</label>
        <input
          name="user_name"
          placeholder="your Name"
          defaultValue={profile.user_name}
        />
        <input
          name="email"
          placeholder="your email"
          defaultValue={profile.email}
         
        />
        <input
          name="location"
          placeholder="your location"
          defaultValue={profile.location}
        />
        <BasicSelect />

        <label>bio</label>
        <textarea
          name="bio"
          placeholder="bio"
          rows={5}
          defaultValue={profile.bio}
        ></textarea>

        <button>Submit Changes</button>
      </form>
    </div>
  );
}