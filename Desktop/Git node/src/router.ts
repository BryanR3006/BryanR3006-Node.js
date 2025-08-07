import { Router} from 'express'

const  router = Router()

//Autenticacion y registro 
//Request req es lo q el usuario envaia
//response es la respuyesta q envia nuestro servidor 
router.post('/auth/regiter',(req,res)=>{
  console.log(req.body)  
})

export default router