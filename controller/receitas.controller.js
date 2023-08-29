const pool = require("../database/index")
const postsController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from receitas")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from receitas where id = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    create: async (req, res) => {
        try {
            const { titulo, ingredientes, procedimento, tipo, descricao } = req.body
            const sql = "insert into receitas (titulo, ingredientes, procedimento, tipo, descricao) values (?, ?)"
            const [rows, fields] = await pool.query(sql, [titulo, ingredientes, procedimento, tipo, descricao ])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    update: async (req, res) => {
        try {
            const { titulo, ingredientes, procedimento, tipo, descricao } = req.body
            const { id } = req.params
            const sql = "update receitas set titulo = ?, ingredientes = ?, , procedimento = ? , tipo = ?, descricao = ? where id = ?"
            const [rows, fields] = await pool.query(sql, [titulo, ingredientes, procedimento, tipo, descricao ])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }, 
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("delete from receitas where id = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }

}

module.exports = postsController