import mongoose from 'mongoose';

const manxil = procces.env.MONGO_URL;

console.log("Kuting... kompyuter xotira daftari bilan bog'lanmoqda");

try {
    await mongoose.connect(manzil);
    console.log("Yuirray Kompyuter bazaga ularndi. Endi u ma'lumotlarni unutmanaydi");
} catch (xato) {
    console.log("ulanib bo'lmadi, mongod dasturi toniqmi?")
}