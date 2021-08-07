import './App.css'
import { io } from 'socket.io-client'
import { useEffect } from 'react'
import axios from 'axios'

const App = () => {
     useEffect(() => {
          const server: object | any = io('http://192.168.1.8:4040')

          const fetchSockets = async () => {
               try {
                    const { data } = await axios.get(
                         'http://192.168.1.8:4040/api/v1/users/accounts'
                    )

                    console.log(data)

                    server.on('message', function (msg: any) {
                         console.log(msg)
                    })
               } catch (err) {
                    console.log(err)
               }
          }

          fetchSockets()
     }, [])

     return <h1>ahahaha</h1>
}

export default App
