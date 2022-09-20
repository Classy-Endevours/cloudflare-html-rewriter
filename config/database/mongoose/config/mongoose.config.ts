/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { ConnectOptions } from 'mongoose'
class DatabaseConfig {
  connect = (url: string) => {
    return new Promise<void>((resolve, reject) => {
      mongoose
        .connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as ConnectOptions)
        .then(async () => {
          console.log('Database connected')
          resolve()
        })
        .catch((error: any) => {
          console.log('Database Error', error)
          reject(error)
        })
    })
  }

  disconnect = () => {
    mongoose.connection.close()
  }
}
export default new DatabaseConfig()
