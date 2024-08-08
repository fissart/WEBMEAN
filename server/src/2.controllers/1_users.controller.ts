import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'

// Models
import User, { IUser } from '../1.models/1_User';
//import Curse, { ICurse } from '../1.models/2_Curse';
import Integer, { IInteger } from '../1.models/6_Integer';
import Tasks, { ITask } from '../1.models/5_Task';

//Usuarios unicamente sin anidaciones/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

export async function getSController(req: Request, res: Response): Promise<Response> {
    //const Curse = await User.find({rol:'3'}).sort({name:1});
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const mencion = req.params.www;
    const ciclo = req.params.ciclo;
    const codigo = req.params.codigo;
    const idcurso = ObjectId(id);
    var year = new Date().getFullYear();

    const usersww = await User.aggregate([
        {
            $match: {
                'rol': '3',
                'mencion': mencion,
                'ciclo': ciclo,
            },
        },
        {
            $lookup: {
                from: "averages",
                let: { wwwww: "$_id" },
                pipeline: [
                    { $match: { $expr: { $and: [{ $eq: ["$user", "$$wwwww"] }, { $eq: ["$codigo", codigo] }, { $eq: ["$mencion", mencion] }, { $eq: ["$ciclo", ciclo] }, { $eq: ["year", year] }] } } },
                    {
                        $lookup: {
                            from: "users",
                            let: { wwwww: "$teacher" },
                            pipeline: [
                                { $match: { $expr: { $eq: ["$_id", "$$wwwww"] } } },
                            ],
                            as: "teach",
                        },
                    },
                    {
                        $lookup: {
                            from: "curses",
                            let: { www: "$curse" },
                            pipeline: [
                                { $match: { $expr: { $eq: ["$_id", "$$www"] } } },
                            ],
                            as: "cursse",
                        },
                    },//{ $eq: ["$curse", idcurso]  }
                ],
                as: "averagge",
            },
        },
    ]).collation({ locale: 'es' }).sort({ "name": 1 })
    return res.json(usersww);
}

//Usuarios opiniones 1-2/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

export async function getController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const user = ObjectId(id);
    //console.log(user,"hola")
    const Curses = await User.aggregate([
        {
            $lookup: {
                from: "curses",
                let: { ww: "$_id" },
                pipeline: [

                    { $match: { $expr: { $and: [{ $eq: ["$user", "$$ww"] }, { $eq: ["$show", "true"] },] } } },
                ],
                as: "cursse",
            },
        },
        {
            $lookup: {
                from: "integers",
                let: { www: "$_id" },
                pipeline: [

                    { $match: { $expr: { $and: [{ $eq: ["$user", "$$www"] }, { $eq: ["$show", "true"] },] } } },
                    {
                        $lookup: {
                            from: "curses",
                            let: { wwwww: "$curse" },
                            pipeline: [
                                { $match: { $expr: { $eq: ["$_id", "$$wwwww"] } } },
                            ],
                            as: "cursew",
                        },
                    },
                ],
                as: "integer",
            },
        }
    ]);
    return res.json(Curses);
};

export async function getControllerteacher(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const user = ObjectId(id);
    //console.log(user,"hola")
    const Curses = await User.aggregate([
        {
            $match: {
                rol: "2",
            },
        },
        {
            $lookup: {
                from: "curses",
                let: { ww: "$_id" },
                pipeline: [

                    { $match: { $expr: { $and: [{ $eq: ["$user", "$$ww"] }, { $eq: ["$show", "true"] },] } } },
                ],
                as: "cursse",
            },
        },
    ]);
    return res.json(Curses);
};

export async function getControllerstd(req: Request, res: Response): Promise<Response> {
    const Useers = await User.aggregate([
        {
            $match: {
                $expr: { $and: [{ $ne: ["$rol", "1"] }, { $ne: ["$rol", "2"] }, { $ne: ["$rol", "4"] }, { $ne: ["$rol", "5"] }] }
            }
        },
        {
            $group: {
                _id: "$rol", total: { $sum: 1 },
            }
        },
        {
            $lookup: {
                from: "users",
                let: { www: "$_id" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$rol", "$$www"] } } },
                    {
                        $group: {
                            _id: "$mencion", total: { $sum: 1 },
                        }
                    },
                    {
                        $lookup: {
                            from: "users",
                            let: { wwwww: "$_id" },
                            pipeline: [
                                { $match: { $expr: { $and: [{ $eq: ["$mencion", "$$wwwww"] }, { $eq: ["$rol", "$$www"] }] } } },
                                {
                                    $group: {
                                        _id: "$ciclo", total: { $sum: 1 },
                                    }
                                },
                                {
                                    $lookup: {
                                        from: "users",
                                        let: { wwwwwww: "$_id" },
                                        pipeline: [
                                            { $match: { $expr: { $and: [{ $eq: ["$mencion", "$$wwwww"] }, { $eq: ["$ciclo", "$$wwwwwww"] }, { $eq: ["$rol", "$$www"] }] } } },
                                            { $sort: { "name": 1 } },
                                        ],
                                        as: "ussers",
                                    },
                                },
                                { $sort: { "_id": -1 } },
                            ],
                            as: "cycles",
                        },
                    },
                    { $sort: { "_id": 1 } },
                ],
                as: "mencions",
            },
        },
        { $sort: { "_id": -1 } },
    ])


    return res.json(Useers);
};

///////////////////////////////////////////////////////////
export async function updaterestricted_date(req: Request, res: Response): Promise<Response> {
    const { ww, www } = req.body;
    const setdate = await User.updateMany({}, { $set: { dateb: ww, datee: www } });
    console.log(setdate)
    return res.json("ok");
}

///////////////////////////////////////////////////////////
export async function updaterestricted_datelogin(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const user = ObjectId(id);

    var str = new Date()  
    let day = str.getDate()
    let month = str.getMonth() + 1
    let year = str.getFullYear()
    let hour = str.getHours()
    let mnt = str.getMinutes()
    let scn = str.getSeconds()

    let format1 = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}T${hour < 10 ? '0' + hour : hour}:${mnt < 10 ? '0' + mnt : mnt}`

    // const { ww, www } = req.body;
    const setdate = await User.updateMany({_id:ObjectId(user)}, { $set: { logindate: format1 } });
    // console.log(setdate)
    return res.json("ok");
};



//2/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

export async function createController(req: Request, res: Response): Promise<Response> {
    const { name, email, rol, password } = req.body;
    //console.log(req);
    const foto = req.file ? req.file.path : 'uploads/user/' + password + '.jpg'
    const Curse = await User.findOne({ email: email });
    if (Curse)
        return res.json({
            user: { "msg": "El usuario ya esta registrado" }
        });

    const newCursej = { name, email, password, dni: password, celular: password, rol: rol, foto, ciclo: 'N', mencion: 'N' };
    const newCurse = { name, email, password, dni: password, celular: password, rol: rol, foto };
    const user = new User(rol != '3' ? newCurse : newCursej);
    await user.save();

    return res.json({
        user
    });
};

//getupdateController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getupdateController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const user = ObjectId(req.params.id);
    const Usser = await User.aggregate([
        {
            $match: {
                _id: user,
            },
        },
        {
            $lookup: {
                from: "filecurses",
                let: { www: "$_id" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$curse", "$$www"] } } },
                ],
                as: "archivos",
            },
        },
    ]);


    return res.json(Usser);
}

///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
export async function deleteController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    //usuario -- cursos(tareas...) fotos-cursos
    const Userw = await User.findByIdAndRemove(id) as IUser;
    await Integer.remove({ user: id });
    await Tasks.remove({ user: id });
    if (Userw) {
        try {
            await fs.unlink(path.resolve(Userw.foto));
            //await fs.unlink(path.resolve(Curse.img));
        } catch (err) {
            console.error(err);
        }
    }
    //    await Curse.delete({ user: id });
    return res.json({ message: 'Curse Deleted' });
};
//5/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

export async function updateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email, password, rol, celular, carrera, mencion, ciclo, sexo, dni, filosophy, logindate } = req.body;
    console.log(req.body);
    const updatedCurse = "";
    if (req.file) {
        const Curse = await User.findById(id) as IUser;
        if (Curse) {
            try {
                await fs.unlink(path.resolve(Curse.foto));
            } catch (err) {
                console.error(err);
            }
        }
        const updatedCurse = await User.findByIdAndUpdate(id, { name, email, password, rol, celular, carrera, mencion, ciclo, sexo, dni, filosophy, logindate, foto: req.file.path });
    } else {
        //await User.updateMany({rol:'2'}, {"$set": {"filosophy": filosophy}})
        const updatedCurse = await User.findByIdAndUpdate(id, { name, email, password, rol, celular, carrera, mencion, ciclo, sexo, dni, filosophy, logindate });
    }
    return res.json({
        www: "actualizado correctamente"
    });
}



export async function updateStdController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, ciclo, mencion } = req.body;
    const updatedCurse = await User.findByIdAndUpdate(id, { name, ciclo, mencion })
    return res.json({
        www: "actualizado correctamente"
    });
}
///////////////
/*
notesww.updateU = async (req, res) => {
//   console.log(req);
//    console.log(req.files);

  //const { title, content, duration, date, author } = req.body;
  //console.log(req.params.id);
  if (req.files) {
    const note = await Curse.findById(req.params.id);
    const file = note.foto;
    try {
      fs.unlinkSync("files/profile/" + file);
    } catch (err) {
      console.error(err);
    }
    const myFile = req.files.foto;
    myFile.mv(`files/profile/${req.params.id + "_" + myFile.name}`);
    const nEw = {
      foto: req.params.id + "_" + myFile.name,
      category: req.body.category,
      nombre: req.body.nombre,
      contenido: req.body.contenido,
      tarea: req.body.tarea,
      test: req.body.test,
      fechaexamen: req.body.fechaexamen,
      fechatarea: req.body.fechatarea,
      timexa: req.body.timexa,
    };
    console.log(nEw);
    await Curse.findByIdAndUpdate(req.params.id, nEw);
  } else {
    const nEw = {
      category: req.body.category,
      nombre: req.body.nombre,
      contenido: req.body.contenido,
      tarea: req.body.tarea,
      test: req.body.test,
      fechaexamen: req.body.fechaexamen,
      fechatarea: req.body.fechatarea,
      timexa: req.body.timexa,
    };
    await Curse.findByIdAndUpdate(req.params.id, nEw);
  }
res.json("Note Updated");
};
*/
//6/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

export async function signin(req: Request, res: Response): Promise<Response> {
    const { re, uu } = req.params;
    //console.log(req.params)
    const user = await User.findOne({ email: re });
    if (!user) //return res.status(401).send('The email doen\' exists');
        return res.json({
            user: { "msg": "El usuario no esta registrado" }
        });
    if (user.password !== uu)// return res.status(401).send('Wrong Password');
        return res.json({
            user: { "msg": "Password incorrecto" }
        });

    return res.json({
        user
    });
};
