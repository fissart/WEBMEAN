import { Router } from 'express'
const router = Router();

import upload from '../libs/img_user'
import { getSController, createController, deleteController, updateStdController, getControllerteacher, getControllerstd, updateController, signin, getController, getupdateController, updaterestricted_date, updaterestricted_datelogin } from '../2.controllers/1_users.controller'


//C
router.route('/Controller')
    .post(upload.single('image'), createController);

//RUD
router.route('/Controller/:id')
    .delete(deleteController)
    .get(getupdateController)
    .put(upload.single('image'), updateController);

router.route('/Controller/usserUpd/:id')
    .put(updateStdController);


router.route('/ControllerAllstd')
    .get(getControllerstd)

router.route('/Controller/Updaterestricted_date')
    .post(updaterestricted_date);
router.route('/Controller/Updaterestricted_datelogin/:id')
    .post(updaterestricted_datelogin)

//Inicio
router.route('/ControllerAll/:id')
    .get(getController)

router.route('/ControllerAllteacher/')
    .get(getControllerteacher)

//inicio sesion
router.route('/Controllersign/:re/:uu')
    .get(signin)

//All users only 
router.route('/ControllerGetusers/:id/:www/:ciclo/:codigo')
    .get(getSController)

//router.route('/Controller')
//   .get(getController)


export default router;
