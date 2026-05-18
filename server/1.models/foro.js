"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: String,
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    foreign: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    descriptionnew: String,
    description: String,
    type: String,
    codigo: String,
    img: String,
    blogspot: String,
    youtube: String,
    instagram: String,
    whatsapp: String,
    facebook: String,
    curse: {
        type: mongoose_1.Schema.Types.ObjectId,
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Foro', schema);
