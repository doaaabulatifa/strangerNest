import { db } from "@/lib/db";
import styles from "./starngers.module.css"
import Link from "next/link";
export default async function Starngers() {
    "use server"
    const result = await db.query(
        `SELECT * FROM profiles`
      );
    const profiles = result.rows;
  
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>The Stangers</h1>
        <div>
          {profiles.map((profile, index) => (
            <>
            <p>click on my name to visit my profile:</p>
             <Link href={`/strangers/${profile.id}`} key={profile.id} >
            <div key={index} className={styles.fact}>
              <h3 className={styles.title}> {profile.user_name}</h3>
            
            </div>
            </Link>
            </>
          ))}
        </div>
      </div>
    );
  }
  
