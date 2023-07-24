const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const adminRoutes = require("./routes/admin.routes");
const { authenticationRoutes } = require("./routes/authentication.routes");
const authorizeUser = require("./utils/authoriseUser.utils");
const userRoutes = require("./routes/user.routes");


async function InitializeServer(app) {
  app.use(cors());
  app.use(helmet());
  // Admin Routes
  authenticationRoutes(app);
  adminRoutes(app);
  app.use(async (req,res,next)=>{
    try {
      const token = req.headers["authorization"];
      const _id=await authorizeUser(token);
      req.user= {_id,type:'user'}
      return next()
    } catch (error) {
      console.log(error)
      return res.status(500).json({msg:'token authentication failed'})
    }
    
  })
  
  app.get('/id',async (req,res)=>{
    res.status(200).json({_id:req.user._id})
  })
  
  userRoutes(app)
  
  //Undefined Routes
  app.get("/*", async (req, res) => {
    return res.status(500).json({ msg: "undefined routes" });
  });

  // Error Handler
  app.use(async (req, res) => {
    return res.status(500).json({ msg: "business Logic error" });
  });
  return app;
}

module.exports = { InitializeServer };
