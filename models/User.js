import sql from "./connection2.js";

const User = function(user){
    this.name = user.name
    this.username = user.username
    this.password = user.password
}

const tableName = 'users'

User.create = (newUser, result) => {
    sql.query (`INSERT INTO ${tableName} SET ? `, newUser, (err, res) => {
        if(err) result(err, null)
        result(null, {id: res.insertId, newUser})
    })
}

User.getAll =(result) => {
    sql.query(`SELECT * FROM ${tableName} SET ? `,(err, res) => {
        if(err) result(err, null)
        result(null, res)
    })
}


User.findById = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = ${id}`, (err, res)=> {
        if(err) {
            result(err, null)
            return
        }

        // jika data ditemukan
        if(res.length) {
            result(null, res[0])
            return
        }
        // jika kosong
        result({type: 'not_found'}, null)
    } )
}

User.findByUsername = (username, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE username = ?`, username, (err, res)=> {
        if(err) {
            result(err, null)
            return
        }

        // jika data ditemukan
        if(res.length) {
            result(null, res[0])
            return
        }
        // jika kosong
        result({type: 'not_found'}, null)
    } )
}

User.update = (id, data, result) => {
    sql.query(`UPDATE ${tableName} SET pertanyaan = ?  WHERE id = ?`, 
        [data.pertanyaan, id], (err, res) =>{
            if(err) {
                result(err, null)
                return
            }

            if(res.affectedRows === 0){
                result({type: 'not_found'}, null)
                return
            }

            result(null, {id: id, data})

        })
}


User.delete = (id, result) =>{
    sql.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, res) => {
        if(err) {
            result(err, null)
            return
        }

        if(res.affectedRows === 0){
            result({type: 'not_found'}, null)
            return
        }

        result(null, res)

    })
}

export default User 