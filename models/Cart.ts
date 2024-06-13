import mongoose from 'mongoose'
import { User } from './User'
import { Product } from './Product'
import { Document } from 'mongoose'
import { Schema } from 'mongoose'



type TCart = Document & {
    uniqueId: string
    userId: mongoose.Schema.Types.ObjectId
    productId: mongoose.Schema.Types.ObjectId
    quantity: number 
    size: string
} 

const CartSchema: Schema<TCart> = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: Product
    },
    uniqueId:{
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    size: {
        type: String,
        required: true,
    },
})

export const Cart = mongoose.models.Cart || mongoose.model<TCart>('Cart', CartSchema)