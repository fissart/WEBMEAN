// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// const files_task_1 = __importDefault(require("../libs/files_task"));
const _5_task_controller_1 = require("../2.controllers/5_task.controller");
router.route('/Controller')
    .post(_5_task_controller_1.createController);//
router.route('/Controller/Updaterestricted_date/:id')
    .post(_5_task_controller_1.updaterestricted_date);
router.route('/Controller/:id')
    .get(_5_task_controller_1.getupdateController)
    .delete(_5_task_controller_1.deleteController)
    .put(_5_task_controller_1.updateController);//
router.route('/ControllerAll/:user/:curse')
    .get(_5_task_controller_1.getsController);
    module.exports = router;
