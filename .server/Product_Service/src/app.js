const express=require('express')
const cors=require('cors')
// Routes
 const publicRoutes=require('./routes/public.routes')
 const adminRoutes=require('./routes/admin.routes')

const app=express()

app.use(cors())

app.use(express.json())
// PUBLIC ROUTES
 app.use('/',publicRoutes)

//  ADMIN ROUTES
 app.use('/admin',adminRoutes)

module.exports=app