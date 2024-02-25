import express from 'express'

const server = express()

server.get('/', (req, res) => {
    console.log('ok!!');
    res.json({ message: 'ok!!' })
})

const start = () => {
    try {

        server.listen(1488, () => console.log('Сервер запущен'))

    } catch (error) {
        console.log(error);
        return
    }
}

start()