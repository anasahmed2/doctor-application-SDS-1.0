import jwt from "jsonwebtoken"
import "dotenv/config"

const verifyToken = (req, res, next) => {

try{

  console.log("req=====>", req.headers.authorization)
  const { authorization } = req.headers
  const token = authorization && authorization.split(" ")[1]
  console.log(token)

  console.log("test=====>", req.query)
  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      console.log("token err===>", err)
      return res.status(401).send({ status: 401, massege: "not allow " ,err})
    }
    console.log("decodded==>", decoded)
    return next()
  });
}
catch(err){
  return res.status(401).send({ status: 401, massege: "token err " ,err})
  
}


}

export default verifyToken;