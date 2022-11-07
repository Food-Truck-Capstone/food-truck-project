import { Schema } from 'express-validator'

export const signUpValidator: Schema = {
  profileAboutMe: {
    escape: true,
    trim: true,
    optional: {
      options: {
        nullable: true
      }

    },
    isLength: {
      errorMessage: 'profile about me must be between one and thirty two characters',
      options: { min: 1, max: 512 }
    }
  },
  profileEmail: {
    isEmail: {
      errorMessage: 'Please provide a valid email'
    },
    // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
    // normalizeEmail: true,
    trim: true
  },
  profilePassword: {
    isLength: {
      errorMessage: 'Password must be at least eight characters',
      options: { min: 8, max: 200 }
    }

  },
  profilePasswordConfirm: {
    isLength: {
      errorMessage: 'Confirm password must be at least eight characters',
      options: { min: 8, max: 200 }
    },
    custom: {
      errorMessage: 'Password confirmation does not match password',
      options: (value, { req, location, path }) => {
        if (value !== req.body.profilePassword) {
          throw new Error('Password confirmation does not match password')
        }

        // Indicates the success of this synchronous custom validator
        return true
      }
    }
  },
  profileName: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: 'profile name must be between one and thirty two characters',
      options: { min: 1, max: 32 }
    }
  }
}
