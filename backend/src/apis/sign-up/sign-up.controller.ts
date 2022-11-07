import { Request, Response } from 'express'
// DB
import { setHash } from '../../utils/auth.utils'
import { Status } from '../../utils/interfaces/Status'

import { insertProfile, Profile } from '../../utils/models/Profile'

/**
 * Express controller that creates a profile object and inserts it into the database when the endpoint POST apis/sign-up/ is called
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */
export async function signUpController (request: Request, response: Response): Promise<Response | undefined> {
  try {
    const { profileName, profileAboutMe, profileEmail, profilePassword } = request.body
    const profileHash = await setHash(profilePassword)

    const profile: Profile = {
      profileId: null,
      profileAboutMe,
      profileEmail,
      profileHash,
      profileName

    }
    await insertProfile(profile)

    const status: Status = {
      status: 200,
      message: 'Profile successfully created please check your email.',
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
