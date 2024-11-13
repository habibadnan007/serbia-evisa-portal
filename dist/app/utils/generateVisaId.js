"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEVisaId = void 0;
const generateEVisaId = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let result = 'RS'; // Fixed part
    result += numbers.charAt(Math.floor(Math.random() * numbers.length)); // 1st number
    result += letters.charAt(Math.floor(Math.random() * letters.length)); // 1st letter
    result += numbers.charAt(Math.floor(Math.random() * numbers.length)); // 2nd number
    for (let i = 0; i < 3; i++) { // 3 letters
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 2; i++) { // 2 numbers
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result;
};
exports.generateEVisaId = generateEVisaId;
