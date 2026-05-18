"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateController = exports.deleteController = exports.getupdateController = exports.getAveragesUserController = exports.getFirstController = exports.getsController = exports.createController = void 0;
//import Responce, { IResponce } from '../1.models/8_Responce';
const sourcecurse_1 = __importDefault(require("../1.models/sourcecurse"));
const _10_average_1 = __importDefault(require("../1.models/10_average"));
//createController///////////////////////////////////////////////////////////////////////
async function createController(req, res) {
    const { ObjectId } = require("mongodb")
    const { nota, codigo, teacher, user, curse, title, ciclo, credito, mencion, year } = req.body;
    const usser = ObjectId(user)

    const ifnota = await _10_average_1.default.find({ codigo: codigo, user: usser, year: year })
    // console.log(codigo, user, year, ifnota.length==0)
    if (ifnota.length == 0) {
        const newDate = { nota, codigo, teacher, user, curse, title, ciclo, credito, mencion, year };
        const data = new _10_average_1.default(newDate);
        await data.save()
        return res.json({ message: 'Ok create' })
    } else {
        return res.json({ message: 'Ok no create' })
    }
}
exports.createController = createController;

//getsController/////////////////////////////////////////////////////////////////////////
async function getsController(req, res) {
    const data = await _10_average_1.default.find();
    return res.json(data);
}
exports.getsController = getsController

async function getFirstAveragesonlyoneteacher(req, res) {
    const { ObjectId } = require("mongodb")
    const user = ObjectId(req.params.user)
    const year = req.params.year
    var month = new Date().getMonth();
    var arraw = []
    if (month <= 6) {
        var arraw = ['1', '3', '5', '7', '9']
    }
    else {
        var arraw = ['2', '4', '6', '8', '10']
    }
    const data = await _10_average_1.default.aggregate([
        {
            $match: {
                    $and: [
                        { teacher: user },
                        { ciclo: { $in: arraw } },
                        { year: year }
                    ]
            },
        },
        {
            $lookup: {
                from: "users",
                let: { www: "$user" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$_id", "$$www"] } } },
                ],
                as: "usser",
            },
        },
    ])

    // console.log(data,user,year)
    return res.json(data);
}
exports.getFirstAveragesonlyoneteacher = getFirstAveragesonlyoneteacher;
//getsController/////////////////////////////////////////////////////////////////////////
async function getFirstController(req, res) {
    const { ciclo, mencion, year } = req.params;
    //error//const { ObjectId } = require("mongodb")
    //error//const ciclo = ObjectId(req.params.ciclo)
    //error//const year = ObjectId(req.params.year)
    console.log(ciclo, mencion, year, "wwwwwwwwwwwwwwwwwwwnew");
    var ES = "";
    if (mencion == "G" || mencion == "P" || mencion == "E") {
        var ES = "AP";
    }
    if (mencion == "ED") {
        var ES = "EA";
    }
    //console.log(ES);
    const order = await _10_average_1.default.aggregate([
        {
            $match: {
                $and: [
                    { ciclo: ciclo },
                    { mencion: mencion },
                    { year: year }
                ]
            },
        },
        {
            $group: {
                _id: "$user",
                mencion: { $first: '$mencion' },
                cursos: { $sum: 1 },
                Puntaje: { $sum: { $multiply: [{ $toInt: '$credito' }, { $toInt: '$nota' }] } },
            }
        },
        {
            $lookup: {
                from: "users", localField: "_id", foreignField: "_id", as: "uSSer"
            }
        },
        { $sort: { "Puntaje": -1 } }
    ]);
    /////////////////////////////////////////////////////////////////////////////////////
    //console.log(order)
    const orderw = await _10_average_1.default.aggregate([
        {
            $match: {
                $and: [
                    { ciclo: ciclo },
                    { mencion: mencion },
                    { year: year }
                ]
            },
        },
        {
            $group: {
                _id: "$user",
                year: { $first: '$year' },
                mencion: { $first: '$mencion' },
                cursos: { $sum: 1 },
                Puntaje: { $sum: { $multiply: [{ $toInt: '$credito' }, { $toInt: '$nota' }] } },
            }
        },
        {
            $lookup: {
                from: "averages",
                let: { www: "$_id" },
                pipeline: [
                    { $match: { $expr: { $and: [{ $eq: ["$user", "$$www"] }, { $eq: ["$ciclo", ciclo] }, { $eq: ["$year", year] }] } } },
                ],
                as: "avgs",
            },
        },
        {
            $lookup: {
                from: "users", localField: "_id", foreignField: "_id", as: "uSSer"
            }
        },
        {
            $lookup: {
                from: "cursesources",
                let: { www: "$_id" },
                pipeline: [
                    { $match: { $expr: { $and: [{ $eq: ["$mencion", mencion] }, { $eq: ["$ciclo", ciclo] },] } } },
                    {
                        $lookup: {
                            from: "averages",
                            let: { ww: "$codigo" },
                            pipeline: [
                                { $match: { $expr: { $and: [{ $eq: ["$codigo", "$$ww"] }, { $eq: ["$ciclo", ciclo] }, { $eq: ["$year", year] }, { $eq: ["$mencion", mencion] }, { $eq: ["$user", "$$www"] }] } } },
                                {
                                    $lookup: {
                                        from: "users",
                                        let: { www: "$teacher" },
                                        pipeline: [
                                            { $match: { $expr: { $eq: ["$_id", "$$www"] } } },
                                        ],
                                        as: "teacher",
                                    },
                                },
                            ],
                            as: "averagges",
                        },
                    },
                ],
                as: "cursse",
            },
        },
        {
            $lookup: {
                from: "averages",
                let: { wwwww: "$_id" },
                pipeline: [
                    { $match: { $expr: { $and: [{ $eq: ["$ciclo", ciclo] }, { $eq: ["$year", year] }, { $eq: ["$user", "$$wwwww"] }] } } },
                    {
                        $group: {
                            _id: { user: "$user" },
                            Puntaje: { $sum: { $multiply: [{ $toInt: '$credito' }, { $toInt: '$nota' }] } },
                            count: { $sum: 1 }
                        }
                    }
                ],
                as: "averaggges",
            },
        },
    ]).collation({ locale: 'es' }).sort({ "uSSer.name": 1 });
    ///////////////////////////////////////////////////////////////////////////
    const orderTEACHER = await _10_average_1.default.aggregate([
        {
            $match: {
                $and: [
                    { ciclo: ciclo },
                    { mencion: mencion },
                    { year: year }
                ]
            },
        },
        {
            $group: {
                _id: "$teacher",
                mencion: { $first: '$mencion' },
                rol: { $first: '$uSSer.rol' },
                cursos: { $sum: 1 },
                Puntaje: { $sum: { $multiply: [{ $toInt: '$credito' }, { $toInt: '$nota' }] } },
            }
        },
        {
            $lookup: {
                from: "users",
                let: { id: "$_id" },
                pipeline: [
                    { $match: { $expr: { $and: [{ $eq: ["$_id", "$$id"] }] } }, },
                    { $project: { _id: 1, name: 1, dni: 1, rol: 1 } }
                ],
                as: "uSSer"
            }
        },
        { $sort: { "uSSer.name": 1 } }
    ]);
    ///////////////////////////////////////////////////////////////////////////
    const ordercurses = await sourcecurse_1.default.aggregate([
        {
            $match: {
                $and: [
                    { ciclo: ciclo },
                    { mencion: mencion }
                ]
            }
        }
    ]);
    //////////////////////////////////////////////////////////////////////////////////
    const ordercursescredito = await sourcecurse_1.default.aggregate([
        {
            $match: {
                $and: [
                    { ciclo: ciclo },
                    { mencion: mencion }
                ]
            },
        },
        {
            $group: {
                _id: { user: "$ciclo" },
                Puntaje: { $sum: { $multiply: [1, { $toInt: '$credito' }] } },
                count: { $sum: 1 }
            }
        }
    ]);
    ///////////////////////////////////////////////////////////////////////////////////////////////
    const ordercursesnative = await _10_average_1.default.aggregate([
        {
            $match: {
                $and: [
                    { ciclo: ciclo },
                    { mencion: mencion },
                    { year: year }
                ]
            },
        },
        {
            $group: {
                _id: "$title",
            }
        },
    ]);
    return res.json({
        order,
        ordercursesnative,
        ordercursescredito,
        ordercurses,
        orderw,
        orderTEACHER,
    });
}
exports.getFirstController = getFirstController;
//getaveragesUserController
//getaveragesUserController/////////////////////////////////////////////////////////////////////////
async function getAveragesUserController(req, res) {
    const { ObjectId } = require("mongodb");
    const user = ObjectId(req.params.id);
    const data = await _10_average_1.default.aggregate([
        {
            $match: {
                user: user,
            },
        },
        {
            $group: {
                _id: "$ciclo",
                notas: { $sum: 1 },
                mencion: { $first: '$mencion' },
                sumacreditos: { "$sum": { $multiply: [1, { $toInt: '$credito' }] } },
                sumanotas: { "$sum": { $multiply: [1, { $toInt: '$nota' }] } },
                total: { "$sum": { $multiply: [{ $toInt: '$credito' }, { $toInt: '$nota' }] } },
                records: { $push: "$$ROOT" }
            }
        },
        {
            $lookup: {
                from: "cursesources", let: { ciclo: "$_id", wwwww: "$mencion" },
                pipeline: [
                    { $match: { $expr: { $and: [{ $eq: ["$ciclo", "$$ciclo"] }, { $eq: ["$mencion", "$$wwwww"] }] } } },
                ],
                as: "cursesource"
            }
        },
        { $match: { details: { $ne: [] } } },
        { $sort: { "_id": 1 } }
    ]);
    // { $match: { user: user, }, }, 
    // { $match: { user: user, }, }, 
    // { $group: { _id: "$ciclo", total: { "$sum": { $multiply: [{ $toInt: '$credito' }, { $toInt: '$nota' }] } }, } },
    //www
    return res.json(data);
}
exports.getAveragesUserController = getAveragesUserController;
//getupdateController////////////////////////////////////////////////////////////////////
async function getupdateController(req, res) {
    const { id } = req.params;
    const data = await _10_average_1.default.findById(id);
    return res.json(data);
}
exports.getupdateController = getupdateController;
//deleteController///////////////////////////////////////////////////////////////////////
async function deleteController(req, res) {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const File = await _10_average_1.default.findByIdAndRemove(id);
    return res.json({ message: 'Ok remove' });
}
exports.deleteController = deleteController;
;
//updateController///////////////////////////////////////////////////////////////////////
async function updateController(req, res) {
    const { id } = req.params;
    const { nota } = req.body;
    const update = await _10_average_1.default.findByIdAndUpdate(id, { nota });
    return res.json({
        message: 'Successfully updated'
    });
}
exports.updateController = updateController;
