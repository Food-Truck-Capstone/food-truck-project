import { Router } from 'express'
import {
    getAllFavorites,
    getFavoritesByFavoriteCustomerId,
    getFavoritesByFavoriteTruckId,
    toggleFavoriteController
} from './favorite.controller'
import { isLoggedInController } from "../../utils/controllers/is-logged-in.controller"
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import {check, checkSchema} from 'express-validator'
import {getAllTrucks, postTruck} from "../truck/truck.controller";
import {truckValidator} from "../truck/truck.validator";

const router = Router()

router.route('/')
    .post(isLoggedInController, toggleFavoriteController)
router.route('/favoriteTruckId/:favoriteTruckId')
    .get(asyncValidatorController([
        check('favoriteTruckId', 'please provide a valid Truck ID').isUUID()
    ]), getFavoritesByFavoriteTruckId)

router.route('/favoriteCustomerId/:favoriteCustomerId')
    .get(asyncValidatorController([
        check('favoriteCustomerId', 'please provide a valid Customer ID').isUUID()
    ]), getFavoritesByFavoriteCustomerId)

router.route('/')
    .get(getAllFavorites)

export default router