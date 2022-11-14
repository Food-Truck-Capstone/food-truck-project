import { Schema } from 'express-validator'

export const menuValidator: Schema = {
    menuTruckId: {
        isUUID: {
            errorMessage: 'please provide a valid menuTruckId'
        }
    },
    menuName: {
        escape: true,
        trim: true,

        isLength: {
            errorMessage: 'menu item name has to be between 3-128 characters',
            options: {min:3, max: 128}
        }
    },
    menuPrice: {
        escape: true,
        trim: true,

        isLength: {
            // ASK TEACHER ABOUT REMOVING $ FROM DATA
            errorMessage: 'Price needs to be in 0.00 format',
            options: {min:4}
        }
    },
    menuDescription: {
        escape: true,
        trim: true,

        isLength: {
            errorMessage: 'Description cannot be longer than 256 characters',
            options: {max:256}
        }
    },
    menuImgUrl: {
        escape: true,
        trim: true,

        isLength: {
            errorMessage: 'Image URL cannot be longer than 512 characters',
            options: {max:256}
        }
    }
}