const { check, validationResult } = require('express-validator');

exports.runValidation = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(404).json({
            status: false,
            message: errors.array()[0].msg
        })
    }
    next() 
}

exports.validationNama = [
    check('nama', 'nama tidak boleh kosong').notEmpty()
]

// exports.listKomentar = async ( req, res) => {
//     const { nama } = req.body;
//     const { komentar } = req.body;
//     const errors = validationResult(req)
//     try {
//       const insertNewKomen = await (
//         await axios.post('http://localhost:3001/listKomentar', {
//           nama: nama,
//           komentar: komentar,
//       })
//   ).data;
//     res.status(201).json({
//       message: 'new coment added',
//       komen: insertNewKomen,
//     })
//     } catch(err) {
//       res.status(404).json({
//         message: err.message,
//       })
//     }
// }