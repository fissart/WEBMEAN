// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// const img_collection_1 = __importDefault(require("../libs/img_collection"));
const land_controller_1 = require("../2.controllers/foro.controller");
//C
router.route('/')
    .post( land_controller_1.createController)//
    .get(land_controller_1.getsController);
//RUD
router.route('/:id')
    .delete(land_controller_1.deleteController)
    .get(land_controller_1.getupdateController)
    .put( land_controller_1.updateController);//
router.route('/update/:id')
    .put( land_controller_1.FileupdateController);//
    module.exports = router;
