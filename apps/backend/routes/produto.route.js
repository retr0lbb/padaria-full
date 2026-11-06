const express = require("express");
const controller = require("../controller/produto");
const router = express.Router();

router.get("/", controller.listar);
router.post("/", controller.cadastrar);
router.put("/:id", controller.alterar);
router.delete("/:id", controller.excluir);

module.exports = router;
