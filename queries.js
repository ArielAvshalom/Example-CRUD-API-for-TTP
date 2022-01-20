const Pool = require('pg').Pool
const pool = new Pool({
    user : 'ttp_user',
    host : 'localhost',
    database : 'example_api',
    port : 5432,
})


const getUsers = (req, res) => {
    pool.query('select * from users order by id asc', (error, results) => {
        if (error) {
            throw error.message
        }
        res.status(200).json(results.rows)
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('select * from users where id = $1', [id], (error, results) => {
        if (error) {
            throw error.message
        }
        res.status(200).json(results.rows)
    })
}

const createUser = (req, res) => {
    const {name, email} = req.body

    pool.query('insert into users (name, email) values ($1, $2)', [name, email], (error, results) => {
        if (error) {
            throw error.message
        }
        res.status(201).send(`User added with ID: ${result.insertId}`)
    })
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id)
    const {name, email} = req.body

    pool.query(
        'update users set name = $1, email = $2 where id = $3', [name, email, id],
        (error, results) => {
            if (error) {
                throw error.message
            }

        res.status(200).send(`user modified with ID: ${id}`)
    })

}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(
        'delete from users where id = $1', [id],
        (error, results) => {
            if (error) {
                throw error.message
            }

        res.status(200).send(`user deleted with ID: ${id}`)
    })

}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
