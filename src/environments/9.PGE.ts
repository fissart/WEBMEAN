    db.averages.updateMany({
  user: {
    $in:
      [
ObjectId("62d6dac1d89e8b2b50ea9ebc") ,
ObjectId("62d6dac1d89e8b2b50ea9ebd") ,
ObjectId("62d6dac1d89e8b2b50ea9ebe") ,
ObjectId("62d6dac1d89e8b2b50ea9ebf") ,
ObjectId("62d6dac1d89e8b2b50ea9ec0") ,
ObjectId("62d6dac1d89e8b2b50ea9ec1") ,
ObjectId("62d6dac1d89e8b2b50ea9ec2") ,
ObjectId("62d6dac1d89e8b2b50ea9ec3") ,
ObjectId("62d6dac1d89e8b2b50ea9ec4") ,
ObjectId("62d6dac1d89e8b2b50ea9ec5") ,
ObjectId("62d6dac1d89e8b2b50ea9ec6") ,
ObjectId("62d6dac1d89e8b2b50ea9ec7") ,
ObjectId("62d6dac1d89e8b2b50ea9ec8") ,
ObjectId("62d6dac1d89e8b2b50ea9ec9") ,
ObjectId("62d6dac1d89e8b2b50ea9f4b") ,
ObjectId("62d6dac1d89e8b2b50ea9eca") ,
ObjectId("62d6dac1d89e8b2b50ea9ecb") ,
ObjectId("62d6dac1d89e8b2b50ea9ecc") ,
ObjectId("62d6dac1d89e8b2b50ea9ecd") ,
ObjectId("62d6dac1d89e8b2b50ea9ece") ,
ObjectId("62d6dac1d89e8b2b50ea9ebc") ,
ObjectId("62d6dac1d89e8b2b50ea9ebd") ,
ObjectId("62d6dac1d89e8b2b50ea9ebe") ,
ObjectId("62d6dac1d89e8b2b50ea9ebf") ,
ObjectId("62d6dac1d89e8b2b50ea9ec0") ,
ObjectId("62d6dac1d89e8b2b50ea9ec1") ,
ObjectId("62d6dac1d89e8b2b50ea9ec2") ,
ObjectId("62d6dac1d89e8b2b50ea9ec3") ,
ObjectId("62d6dac1d89e8b2b50ea9ec4") ,
ObjectId("62d6dac1d89e8b2b50ea9ec5") ,
ObjectId("62d6dac1d89e8b2b50ea9ec6") ,
ObjectId("62d6dac1d89e8b2b50ea9ec7") ,
ObjectId("62d6dac1d89e8b2b50ea9ec8") ,
ObjectId("62d6dac1d89e8b2b50ea9ec9") ,
ObjectId("62d6dac1d89e8b2b50ea9f4b") ,
ObjectId("62d6dac1d89e8b2b50ea9eca") ,
ObjectId("62d6dac1d89e8b2b50ea9ecb") ,
ObjectId("62d6dac1d89e8b2b50ea9ecc") ,
ObjectId("62d6dac1d89e8b2b50ea9ecd") ,
ObjectId("62d6dac1d89e8b2b50ea9ece") ,       
      ]
  },ciclo:"1",year:"2022",title:""
}, { "$set": { "mencion": "E"} })

db.users.updateMany({
  dni: {
    $in:
      [
        "73681986",
        "71902513",
        "70207680",
        "75416648",
        "72260316",
        "74626657",
        "74471081",
        "74030914",
        "73952880",
        "70217936",
            ]
  }
}, { "$set": { "mencion": "G", "ciclo": "VII" } })


db.users.updateMany({
  dni: {
    $in:
      [
      ]
  }
}, { "$set": { "mencion": "E", "ciclo": "VII" } })












///////////////////////////////////////////////////////////////////////////////////


db.nomina.insertMany(
  [
    { dni: "60804642", ciclo: "VII", mencion: "P", name: "ACOSTA QUISPE, Kevin " },
    { dni: "70107922", ciclo: "VII", mencion: "P", name: "ALLCCA QUISPE, Jose Luis" },
    { dni: "70049580", ciclo: "VII", mencion: "P", name: "ARANGO GUTIERREZ, Meryl Madeleiny Eleny" },
    { dni: "70046382", ciclo: "VII", mencion: "P", name: "BELLIDO ARAMBURU, Jimena Luz" },
    { dni: "70557651", ciclo: "VII", mencion: "P", name: "CASTAÑEDA BAUTISTA, Edinson" },
    { dni: "71017664", ciclo: "VII", mencion: "P", name: "CHAVEZ UNTIVEROS, Angel" },
    { dni: "70574296", ciclo: "VII", mencion: "P", name: "CHOÑOCCA PARIONA, Victor Antonio" },
    { dni: "76538530", ciclo: "VII", mencion: "P", name: "CHOQUECAHUA RAMIREZ, Gabriel Francisco" },
    { dni: "70121373", ciclo: "VII", mencion: "P", name: "CHUQUITAYPE ARAUJO, Jersson" },
    { dni: "71552551", ciclo: "VII", mencion: "P", name: "CONTRERAS CONDOR, Jean Henry" },
    { dni: "73757477", ciclo: "VII", mencion: "P", name: "ESPEZA ENRIQUEZ, Eliseo" },
    { dni: "74942873", ciclo: "VII", mencion: "P", name: "HUAMAN ALLENDE, Angel Gabriel" },
    { dni: "72275796", ciclo: "VII", mencion: "P", name: "HUINCHO CHOCCE, Fernando Jose" },
    { dni: "70665090", ciclo: "VII", mencion: "P", name: "HUAMANTOMA PUMALLIHUA, Alexander" },
    { dni: "76640212", ciclo: "VII", mencion: "P", name: "HUINCHO CLEMENTE, Cristhian Antony" },
    { dni: "60253867", ciclo: "VII", mencion: "P", name: "LA SERNA PARIONA, Jackelin Nelly" },
    { dni: "73984445", ciclo: "VII", mencion: "P", name: "MEDINA ANDIA, Disney" },
    { dni: "76670060", ciclo: "VII", mencion: "P", name: "MEDRANO YARANGA, Mayumi Taquiri  " },
    { dni: "72646288", ciclo: "VII", mencion: "P", name: "NAVARRO MELLISHO, Luis  Angel" },
    { dni: "73997977", ciclo: "VII", mencion: "P", name: "ORE VALLEJOS, Ely  Dayme" },
    { dni: "71544540", ciclo: "VII", mencion: "P", name: "QUISPE HUAMACCTO, Ronal Tiberio" },
    { dni: "71286342", ciclo: "VII", mencion: "P", name: "SULCA QUISPE, Jeny Melisa" },
    { dni: "46107262", ciclo: "VII", mencion: "P", name: "URBAY TRUJILLANO, Carlos" },
    { dni: "70654287", ciclo: "VII", mencion: "P", name: "VELAPATIÑO PINILLOS, Gabriela" },
    { dni: "74143482", ciclo: "VII", mencion: "P", name: "YUPANQUI CCONOJHUILLCA, Diego Ricardo " },
    { dni: "76543149", ciclo: "VII", mencion: "P", name: "ZAMAÑEZ MEJIA, Jhon" },
    { dni: "73681986", ciclo: "VII", mencion: "G", name: "ARIAS MELGAR, Evelyn Lizzeth" },
    { dni: "71902513", ciclo: "VII", mencion: "G", name: "CURI GAMBOA, Ivan Cruz" },
    { dni: "70207680", ciclo: "VII", mencion: "G", name: "DIAZ ALFARO, Aldy Roship" },
    { dni: "75416648", ciclo: "VII", mencion: "G", name: "FLORES AUCACIO, Jairol Ramiro" },
    { dni: "72260316", ciclo: "VII", mencion: "G", name: "GARCIA MEJIA, Camila Sthefany" },
    { dni: "74626657", ciclo: "VII", mencion: "G", name: "JIMENEZ HUAMAN, Leonardo Jose" },
    { dni: "74471081", ciclo: "VII", mencion: "G", name: "LOPEZ GUARDAMINO, Frank Josue" },
    { dni: "74030914", ciclo: "VII", mencion: "G", name: "LUJAN MENDOZA, Jussbe Luii" },
    { dni: "73952880", ciclo: "VII", mencion: "G", name: "TUDELANO VICAÑA, Lisseth" },
    { dni: "70217936", ciclo: "VII", mencion: "G", name: "YARANGA HUAMAN, Zanya Angelina" },
  ])

  4(26 10 0)


db.nomina.aggregate([
  {
    $match: {
      $and: [
        { ciclo: "VII" },
        { mencion: "P" }
      ]
    },
  },
  {
    $lookup: {
      from: "users",
      let: { www: "$dni" },
      pipeline: [
        { $match: { $expr: { $eq: ["$dni", "$$www"] } } },
        { $project: { _id: 1, name: 1 } }
      ],
      as: "userw",
    },
  },
  { $sort: { "userw.name": 1 } }
]).pretty();





{ "_id" : ObjectId("62daba130e09fe6b31421713"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dbf") }
{ "_id" : ObjectId("62daba1e0e09fe6b31421716"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dc0") }
{ "_id" : ObjectId("62daba360e09fe6b31421719"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dc1") }
{ "_id" : ObjectId("62daba3a0e09fe6b3142171c"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dc2") }
{ "_id" : ObjectId("62daba4e0e09fe6b3142171f"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dc3") }
{ "_id" : ObjectId("62daba540e09fe6b31421722"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dcc") }
{ "_id" : ObjectId("62daba6b0e09fe6b31421729"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dc4") }
{ "_id" : ObjectId("62daba730e09fe6b3142172c"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dc5") }
{ "_id" : ObjectId("62daba770e09fe6b3142172f"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dc6") }
{ "_id" : ObjectId("62daba810e09fe6b31421732"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dc7") }
{ "_id" : ObjectId("62daba860e09fe6b31421735"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dc8") }
{ "_id" : ObjectId("62daba9e0e09fe6b31421738"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dc9") }
{ "_id" : ObjectId("62dabaa50e09fe6b3142173b"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dca") }
{ "_id" : ObjectId("62dabaad0e09fe6b3142173e"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dcb") }
{ "_id" : ObjectId("62dabab80e09fe6b31421741"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dcd") }
{ "_id" : ObjectId("62dabac20e09fe6b31421744"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dce") }
{ "_id" : ObjectId("62dabacb0e09fe6b31421747"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dcf") }
{ "_id" : ObjectId("62dabada0e09fe6b3142174a"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dd0") }
{ "_id" : ObjectId("62dabade0e09fe6b3142174d"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dd1") }
{ "_id" : ObjectId("62dabaec0e09fe6b31421750"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dd2") }
{ "_id" : ObjectId("62dabafb0e09fe6b31421753"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dd3") }
{ "_id" : ObjectId("62dabb020e09fe6b31421756"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dd4") }
{ "_id" : ObjectId("62dabb0d0e09fe6b31421759"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dd5") }
{ "_id" : ObjectId("62dabb170e09fe6b3142175c"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dd6") }
{ "_id" : ObjectId("62dabb220e09fe6b3142175f"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dd7") }
{ "_id" : ObjectId("62dabb270e09fe6b31421762"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dd8") }
{ "_id" : ObjectId("62dabb2e0e09fe6b31421765"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dd9") }
{ "_id" : ObjectId("62dabb360e09fe6b31421768"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dda") }
{ "_id" : ObjectId("62dabb3f0e09fe6b3142176b"), "user" : ObjectId("62d6dac1d89e8b2b50ea9ddb") }
{ "_id" : ObjectId("62dabb4f0e09fe6b3142176e"), "user" : ObjectId("62d6dac1d89e8b2b50ea9ddc") }
{ "_id" : ObjectId("62dabb590e09fe6b31421771"), "user" : ObjectId("62d6dac1d89e8b2b50ea9ddd") }
{ "_id" : ObjectId("62dabb620e09fe6b31421774"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dde") }
{ "_id" : ObjectId("62dabb6b0e09fe6b31421777"), "user" : ObjectId("62d6dac1d89e8b2b50ea9ddf") }
{ "_id" : ObjectId("62dabb830e09fe6b3142177a"), "user" : ObjectId("64022bb8802b1c61ce210998") }
{ "_id" : ObjectId("62dabb8b0e09fe6b3142177d"), "user" : ObjectId("62d6dac1d89e8b2b50ea9de1") }
{ "_id" : ObjectId("62dabb9f0e09fe6b31421780"), "user" : ObjectId("62d6dac1d89e8b2b50ea9de2") }
{ "_id" : ObjectId("62dabba70e09fe6b31421783"), "user" : ObjectId("62d6dac1d89e8b2b50ea9de3") }
{ "_id" : ObjectId("62dabbad0e09fe6b31421786"), "user" : ObjectId("62d6dac1d89e8b2b50ea9de4") }
{ "_id" : ObjectId("62dabbcb0e09fe6b31421789"), "user" : ObjectId("62d6dac1d89e8b2b50ea9de5") }
{ "_id" : ObjectId("62dabbd30e09fe6b3142178c"), "user" : ObjectId("62d6dac1d89e8b2b50ea9de6") }
{ "_id" : ObjectId("62dabbd90e09fe6b31421790"), "user" : ObjectId("62d6dac1d89e8b2b50ea9de7") }
{ "_id" : ObjectId("62dabbe20e09fe6b31421793"), "user" : ObjectId("62d6dac1d89e8b2b50ea9de8") }
{ "_id" : ObjectId("62dabbed0e09fe6b31421796"), "user" : ObjectId("62d6dac1d89e8b2b50ea9de9") }
{ "_id" : ObjectId("62dabbf40e09fe6b31421799"), "user" : ObjectId("62d6dac1d89e8b2b50ea9dea") }
{ "_id" : ObjectId("62dabbfb0e09fe6b3142179c"), "user" : ObjectId("62d6dac1d89e8b2b50ea9deb") }
{ "_id" : ObjectId("62ea635dc060ee8a3ee6acc8"), "user" : ObjectId("62d6dac1d89e8b2b50ea9f50") }
