// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// const files_task_1 = __importDefault(require("../libs/files_task"));
const _6_integer_controller_1 = require("../2.controllers/6_integer.controller");
router.route('/Controller')
    .post(_6_integer_controller_1.createController);//
router.route('/Controller/:id')
    .get(_6_integer_controller_1.getupdateController)
    .delete(_6_integer_controller_1.deleteController)
    .put(_6_integer_controller_1.updateController);//
router.route('/Controllerintegerscurse/:id')
    .get(_6_integer_controller_1.getController);
router.route('/Controllerintegerscursenotes/:id/:mencion/:ciclo/:codigo')
    .get(_6_integer_controller_1.getControllerNotes);

router.route('/Controller/encuesta')
    .post(_6_integer_controller_1.createencuestaController);

router.route('/Controller/encuesta/:id/:ciclo/:mencion')
    .get(_6_integer_controller_1.getencuestaController)

router.route('/Controller/encuesta/:id')
    .delete(_6_integer_controller_1.deleteencuestaController);


router.route('/Controllerintegerscursenotesnew/:id')
    .get(_6_integer_controller_1.getControllerNotesnew);
router.route('/Controllerintegersaverage/:id')
    .get(_6_integer_controller_1.getintegerController);
router.route('/Controllerintegeruser/:id/:ciclo/:mencion')
    .get(_6_integer_controller_1.getControlleruser);
router.route('/ControllerAll/:id')
    .get(_6_integer_controller_1.getController);
    module.exports = router;
