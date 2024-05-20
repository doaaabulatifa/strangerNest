import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default async function myProfile() {
    const { userId } = auth();
    console.log({userId})
    const result = await db.query(`SELECT * FROM profiles WHERE clerk_id = '${userId}'`);
  const profile = result.rows[0]; // SELECT returns an object with a rows proberty, which is an array of our results

  async function editProfile(formData) {
    "use server";
    const name = formData.get("name");
    const email= formData.get("email");
    const bio= formData.get("bio");
    const location= formData.get("location");

    await db.query(`UPDATE profiles SET user_name=${name}, email=${email},bio=${bio},location=${location} WHERE clerk_id = ${userId}`);

    revalidatePath("/");
  
    redirect("/");
  }

  return (
    <div>
      <form action={editProfile}>
        <label>Name</label>
        <input
          name="name"
          placeholder="your Name"
         
        />
        <input
          name="email"
          placeholder="your email"
         
        />
        <input
          name="location"
          placeholder="your location"
         
        />

        <label>bio</label>
        <textarea
          name="bio"
          placeholder="bio"
          rows={5}
        ></textarea>

        <button>Submit Changes</button>
      </form>
    </div>
  );
}