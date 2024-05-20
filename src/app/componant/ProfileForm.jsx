import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default function ProfileForm() {
  const { userId } = auth();
  async function handleUpdateProfile(formData) {
    "use server";
    const user_name = formData.get("user_name");
    const email= formData.get("email");
    const bio = formData.get("bio");
    const location = formData.get("location");

    await db.query(
      `UPDATE profiles SET user_name = '${user_name}',email ='${email}',bio='${bio}',location='${location}' WHERE clerk_id = '${userId}'`
    );
    revalidatePath("/");
  }

  return (
    <div>
      <h2>Update Profile</h2>
      <p>Welcome to StrangeNest, please choose your secret name!</p>
      <form action={handleUpdateProfile}>
        <input name="user_name" placeholder="User_name" />
        <input name="email" placeholder="email" />
        <input name="bio" placeholder="bio" />
        <input name="location" placeholder="location" />
       
        <button>Submit</button>
      </form>
    </div>
  );
}