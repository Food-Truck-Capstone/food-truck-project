import { Schema } from 'express-validator'

export const truckValidator: Schema = {
    truckProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid TruckProfileId'
        }
    },

    truckCardAccepted: {
        isBoolean: true

    },

    truckFoodType: {
        escape: true,
        trim: true,

        isLength: {
            errorMessage: 'food type cannot be longer than 32 characters',
            options: {max: 32}
        },
    },
}