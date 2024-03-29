import Helper from './helper.js'
const users = [
{
    id:1,
    name:"Aravinth",
    email:"aravinth@gmail.com",
    mobile:9988776655,
    password:"Admin@123"
},
{
    id:2,
    name:"Suba",
    email:"suba@gmail.com",
    mobile:9988112233,
    password:"Admin@123"
},
{
    id:3,
    name:"Dhiya",
    email:"suba@gmail.com",
    mobile:9988112233,
    password:"Admin@123"
},
{
    id:4,
    name:"Indhu",
    email:"suba@gmail.com",
    mobile:9988112233,
    password:"Admin@123"
}

]

const index = (req,res)=>{
    res.status(200).send('<h1>Express crud</h1>')
}
    const getAlluser = (req,res)=>{
        res.status(200).send({
            message:"Data Fetch Successful",
            users
        })
    }
    const getUserById =(req,res)=>{
        let {id} = req.params
        let index= Helper.findIndex(users,id)
            if(index!=-1){
                res.status(200).send({
                    message:"Data Fetch Successful",
                    user:users[index]
                })
            }
            else{
                res.status(400).send({
                    message:"Invalid Id"
                })
            }
    }
    const createUser = (req,res)=>{
        let duplicaeUser = users.filter((e)=>e.email===req.body.email)
        if(duplicaeUser===0){
            req.body.id = users.length?users[users.length-1].id+1:1
            users.push(req.body)
            res.status(200).send({
            message:"User Created Successfully"
        })
        }else{
            res.status(200).send({
                message:`User with ${req.body.email} already exists`
            })
        }
        
    }
    const editUserById =(req,res)=>{
        let {id} = req.params
        let index= Helper.findIndex(users,id)
            if(index!=-1){
                req.body.id = id
                users.splice(index,1,req.body)
                res.status(200).send({
                message:"User edited Successfully"
                })
            } else{
                res.status(400).send({
                    message:"Invalid Id"
                })
            }
    }
    const deleteUserById =(req,res)=>{
        let {id} = req.params
        let index= Helper.findIndex(users,id)
            if(index!=-1)
            {
                req.body.id = id
                users.splice(index,1)
                res.status(200).send({
                message:"User deleted Successfully"
                })
            }else{
                res.status(400).send({
                    message:"Invalid Id"
                })
            }
    }
export default {
    index,
    getAlluser,
    getUserById,
    createUser,
    editUserById,
    deleteUserById
}