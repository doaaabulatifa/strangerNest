import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import BasicSelect from "../component/BasicSelect";  // Adjust the path if necessary
import { useState } from "react";
import BasicSelect from "../componant/BaiscSelect";

export default async function myProfile() {
  const { userId } = auth();
  console.log({userId});
  const result = await db.query("SELECT * FROM profiles WHERE clerk_id = $1", [userId]);
  const profile = result.rows[0]; 

  const [location, setLocation] = useState(profile.location);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  async function editProfile(formData) {
    "use server";
    const user_name = formData.get("user_name");
    const email = formData.get("email");
    const bio = formData.get("bio");
    // Use location from state instead of formData
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
          placeholder="Your Name"
          defaultValue={profile.user_name}
        />
        <input
          name="email"
          placeholder="Your Email"
          defaultValue={profile.email}
        />
        <BasicSelect value={location} onChange={handleChange} />
        <label>Bio</label>
        <textarea
          name="bio"
          placeholder="Bio"
          rows={5}
          defaultValue={profile.bio}
        ></textarea>
        <button>Submit Changes</button>
      </form>
    </div>
  );
}
