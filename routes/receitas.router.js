const express = require("express")
const router = express.Router()

const receitasController = require("../controller/receitas.controller")

router.get("/", receitasController.getAll)
router.get("/:id", receitasController.getById)
router.post("/", receitasController.create)
router.put("/:id", receitasController.update)
router.delete("/:id", receitasController.delete)

module.exports = router