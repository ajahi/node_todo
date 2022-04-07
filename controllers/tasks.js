const Task=require('../models/Task')

const getAllTasks=async(req,res)=>{
   try{
       const tasks=await Task.find({})
        res.status(200).json({tasks})
   }catch(error){
        res.status(500).json({message:error})
   }
}


const getTask=async(req,res)=>{
    try{
        const{id:taskID}=req.params;
        const task=await Task.findOne({_id:taskID});
        if(!task){
            return res.status(404).json({message:'no task associated with ID'})
        }
        res.status(200).json({task});
    }
    catch(error){
        res.status(500).json({message:error})
    }
}
const updateTask=async(req,res)=>{
    try{
        
        const{id:taskID}=req.params;
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true});
        if(!task){
            return res.status(404).json({message:'no task associated with ID'})
        }
        res.status(200).json({task});
     }catch(error){
         res.status(500).json({message:error})
     }
}
const deleteTask=async(req,res)=>{
    try{
        const{id:taskID}=req.params;
       const task=await Task.deleteOne({_id:taskID});
       if(!task){
        return res.status(404).json({message:'no task associated with ID'})
        }
        res.status(200).json({message:'post successfully deleted.' });
    }
    catch(err){
        res.status(500).json({message:err })
    }
}
const createTasks=async(req,res)=>{
    try{
        const nayakura=await Task.create(req.body)
        res.status(201).json({ nayakura })
    }catch(error){
        res.status(500).json({ message:error})
    }
    
}
module.exports={
    getAllTasks,
    createTasks,
    updateTask,
    getTask,
    deleteTask,
}