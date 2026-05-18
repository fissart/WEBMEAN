// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// const img_curse_1 = __importDefault(require("../libs/img_curse"));
const _4_themes_controller_1 = require("../2.controllers/4_themes.controller");
router.route('/Controller')
    .post(_4_themes_controller_1.createController);//
router.route('/ControllerThemeUser/:id/:curssse')
    .get(_4_themes_controller_1.getupdateController);
router.route('/Controller/Updaterestricted_date/:id')
    .post(_4_themes_controller_1.updaterestricted_date);
router.route('/Controller/:id')
    .delete(_4_themes_controller_1.deleteController)
    .put(_4_themes_controller_1.updateController);//
router.route('/ControllerAll/:id')
    .get(_4_themes_controller_1.getController);
    module.exports = router;
