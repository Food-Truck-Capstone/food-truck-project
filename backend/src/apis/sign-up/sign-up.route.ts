import { Router } from 'express'
import { signUpController } from './sign-up.controller'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { checkSchema } from 'express-validator'
import { signUpValidator } from './sign-up.validator'

export const signUpRoute: Router = Router()

signUpRoute.route('/')
  .post(
    asyncValidatorController(checkSchema(signUpValidator)),
    signUpController
  )
