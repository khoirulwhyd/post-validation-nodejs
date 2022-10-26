// const { check, validationResult } = require('express-validator');

// exports.runValidation = (req, res, next) => {
//     const errors = validationResult(req)
//     if(!errors.isEmpty()){
//         return res.status(404).json({
//             status: false,
//             message: errors.array()[0].msg
//         })
//     }
//     next() 
// }

// exports.validationNama = [
//     check('nama', 'nama tidak boleh kosong').notEmpty()
// ]

exports.kataValidation = () => {
    var userValue = document.getElementById('coment').value;
    alert(userValue);
}