const express = require('express')
const mongoose = require('mongoose')

const voucherSchema = mongoose.Schema({
    VoucherCode: {
        type: String,
        unique: true,
        trim: true,
        length: 10,
        require: true
    },
    Discount: {
        type: Number,
        require: true
    }
})

voucherSchema.virtual('invoids', {
    ref: 'Invoid',
    localFeild: 'VoucherCode',
    foreignField: 'VoucherCode'
})

const Voucher = mongoose.model('Voucher', voucherSchema)

module.exports = Voucher

// Table Voucher{
//     Id ObjectId
//     VoucherCode string
//     Discount int
//   }
  