import express from 'express'
import cors from 'cors'
import "dotenv/config";
import { globalErrHandler, notFoundErrHandler } from './app/middleware/errHandler';
import { visaRouter } from './app/module/visa/visa.route';
import cron from 'node-cron'
import axios from 'axios'
import { StatusCodes } from 'http-status-codes';


//   15 minute
//   */15 * * * *
  // Self-ping task
cron.schedule('*/15 * * * *', () => {
    // axios.get(`https://serbia-evisa-portal-server.onrender.com`)
    axios.get(`https://serbia-evisa-portal-server-pivh.onrender.com`)
      .then(response => console.log('Self-ping successful:', response.status))
      .catch(error => console.error('Self-ping failed:', error.message));
  });


const app = express()

// Parser
app.get('/', (req,res)=> res.send({success:true, status:StatusCodes.OK, message: "Serbia e visa server is running!", data: null}))
app.use(cors())
app.use(express.json())


// Router
app.use('/api/v1/visa', visaRouter)


// Err handler
app.use(notFoundErrHandler)
app.use(globalErrHandler)

export default app

