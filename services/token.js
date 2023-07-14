import jwt from "jsonwebtoken"

const generateJWTToken =(userId)=>{
  const accesToken = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:'1d'})
  return accesToken 
}

export {generateJWTToken}