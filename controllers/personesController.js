const Persones = require('../models/Personse')

exports.getAllPersones = async (req, res) => {
    const persones = await Persones.find({})
    try {
       return res.render('persones', {title: 'Persone Page', persones})
    } catch ( err ) {
        console.log(err)
    }
   res.json(persones)
}
