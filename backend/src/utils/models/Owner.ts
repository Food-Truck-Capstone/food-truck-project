import { sql } from '../database.utils'

export interface Owner {
  ownerId: string|null
  ownerName: string
  ownerPhone: string
  ownerEmail: string
  ownerHash: string
  
}

export interface PartialOwner {
  ownerId: string | null
  ownerName: string
  ownerPhone: string
  ownerEmail: string
}

/**
 * Helper function that interacts with postgres to insert an owner object in the database
 * @param owner Owner object that will be inserted into the database
 * @return success message if the sql statement was executed with no errors
 **/
export async function insertOwner (owner: Owner): Promise<string> {
  const { ownerName, ownerPhone, ownerEmail, ownerHash } = owner
   await sql`INSERT INTO owner (owner_id, owner_name, owner_phone, owner_email, owner_hash, owner_name) VALUES(gen_random_uuid(), ${ownerName}, ${ownerPhone}, ${ownerEmail}, ${ownerHash})`
  return 'Owner successfully created'
}
/**
 * Helper function that interacts with postgres to update an owner object in the database
 * @param owner Owner object that will be updated into the database
 * @return success message if the sql statement was executed with no errors
 **/
export async function updateOwner (owner: PartialOwner): Promise<string> {
  const { ownerName, ownerPhone, ownerEmail, ownerId } = owner
  await sql`UPDATE owner SET owner_name = ${ownerName}, owner_email = ${ownerEmail}, owner_phone = ${ownerPhone} WHERE owner_id = ${ownerId}`
  return 'Owner updated successfully'
}
/**
* Helper function that interacts with postgres to select an owner object by its primary key.
* @param ownerId a string containing the primary key for the target object.
* @return A promise containing a status object with the primary key provided or null if no id was found
**/
export async function selectPartialOwnerByOwnerId (ownerId: string): Promise<PartialOwner|null> {
  const result = await sql<Owner[]>`SELECT owner_id, owner_phone, owner_email, owner_name from owner WHERE owner_id = ${ownerId}`
  return result?.length === 1 ? result[0] : null
}

/**
 * Helper function that interacts with postgres to select a owner object by its primary key.
 * @param ownerEmail a string containing the primary key for the target object.
 * @return A promise containing a status object with the primary key provided or null if no id was found
 **/
export async function selectOwnerByOwnerEmail (ownerEmail: string): Promise<Owner|null> {
  const result = await sql <Owner[]>`SELECT owner_id, owner_phone, owner_email, owner_hash, owner_name from owner WHERE owner_email = ${ownerEmail}`
  return result?.length === 1 ? result[0] : null
}
