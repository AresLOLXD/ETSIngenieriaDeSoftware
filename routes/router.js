const router = require("express").Router()
router.all("/prueba", (req, res) => {
    res.render("prueba")
})



module.exports = router