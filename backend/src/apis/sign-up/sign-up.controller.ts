import { Request, Response } from 'express'
// DB
import { setHash } from '../../utils/auth.utils'
import { Status } from '../../utils/interfaces/Status'

import { insertOwner, Owner } from '../../utils/models/Owner'

/**
 * Express controller that creates an owner object and inserts it into the database when the endpoint POST apis/sign-up/ is called
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */
export async function signUpController (request: Request, response: Response): Promise<Response | undefined> {
  try {
    const { ownerName, ownerPhone, ownerEmail, ownerPassword } = request.body
    const ownerHash = await setHash(ownerPassword)

    const owner: Owner = {
      ownerId: null,
      ownerName,
      ownerPhone,
      ownerEmail,
      ownerHash,

    }
    await insertOwner(owner)

    const status: Status = {
      status: 200,
      message: 'Owner successfully created please check your email.',
      data: null
    }

    return response.json(status)
  } catch (error: any) {
    const status: Status = {
      status: 500,
      message: error.message,
      data: null
    }

    return response.json(status)
  }
}
