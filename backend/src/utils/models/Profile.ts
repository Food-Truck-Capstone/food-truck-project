import { sql } from '../database.utils'

export interface Profile {
  profileId: string|null
  profileAboutMe: string
  profileEmail: string
  profileHash: string
  profileName: string
}

export interface PartialProfile {
  profileId: string|null
  profileAboutMe: string
  profileEmail: string
  profileName: string
}

/**
 * Helper function that interacts with postgres to insert a profile object in the database
 * @param profile Profile object that will be inserted into the database
 * @return success message if the sql statement was executed with no errors
 **/
export async function insertProfile (profile: Profile): Promise<string> {
  const { profileAboutMe, profileEmail, profileHash, profileName } = profile
   await sql`INSERT INTO profile(profile_id, profile_about_me, profile_email, profile_hash, profile_name) VALUES(gen_random_uuid(), ${profileAboutMe}, ${profileEmail}, ${profileHash}, ${profileName})`
  return 'Profile successfully created'
}
/**
 * Helper function that interacts with postgres to update a profile object in the database
 * @param profile Profile object that will be updated into the database
 * @return success message if the sql statement was executed with no errors
 **/
export async function updateProfile (profile: PartialProfile): Promise<string> {
  const { profileAboutMe, profileEmail, profileName, profileId, } = profile
  await sql`UPDATE profile SET profile_about_me = ${profileAboutMe}, profile_email = ${profileEmail}, profile_name = ${profileName} WHERE profile_id = ${profileId}`
  return 'Profile updated successfully'
}
/**
* Helper function that interacts with postgres to select a profile object by its primary key.
* @param profileId a string containing the primary key for the target object.
* @return A promise containing a status object with the primary key provided or null if no id was found
**/
export async function selectPartialProfileByProfileId (profileId: string): Promise<PartialProfile|null> {
  const result = await sql<Profile[]>`SELECT profile_id, profile_about_me, profile_email, profile_name from profile WHERE profile_id = ${profileId}`
  return result?.length === 1 ? result[0] : null
}

/**
 * Helper function that interacts with postgres to select a profile object by its primary key.
 * @param profileEmail a string containing the primary key for the target object.
 * @return A promise containing a status object with the primary key provided or null if no id was found
 **/
export async function selectProfileByProfileEmail (profileEmail: string): Promise<Profile|null> {
  const result = await sql <Profile[]>`SELECT profile_id, profile_about_me, profile_email, profile_hash, profile_name from profile WHERE profile_email = ${profileEmail}`
  return result?.length === 1 ? result[0] : null
}
