import mongoose from "mongoose"

// mini Schema

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Type.ObjectId,
        ref: "product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true
        },
        customer: {
            type: mongoose.Schema.Type.ObjectId,
            ref: "User"
        },
        orderItem: {
            type: [orderItemSchema]
        },
        address: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["padding", "cancelled", "deliverd"], // enum user for aama thi 1 choice karvani
            default: "padding"
        }

    },
    { timestamps: true })

export const order = mongoose.modle("order", orderSchema)    