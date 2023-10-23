import { Projects } from "../models/Proyect.js"

export const  getProjects = async (req, res) => {
   try {
     const projects = await Projects.findAll();
     res.json(projects);
   } catch (error) {
    return res.status(500).json({message: error.message})
   }
}

export const createProject = async (req, res) => {
    const {name, description, priority} = req.body
    try {
         const newProject = await Projects.create({
           name,
           description,
           priority,
         });
         res.json(newProject);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
   
}

export const updateProject = async (req, res) => {
    const {id} = req.params
    const {name, description, priority} = req.body
    try {
        const project = await Projects.findByPk(id)
        project.name = name
        project.description = description
        project.priority = priority
        await project.save()
        res.json(project)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteProject = async (req, res) => {
    const {id} = req.params
    try {
        await Projects.destroy({
            where: {id}
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getProyectById = async (req, res) => {
    const {id} = req.params
    try {
        const project = await Projects.findOne(
            {
                where: {id}
            }
        )
        if(!project) return res.status(404).json({message: 'Project not found'})
        res.json(project)
    } catch (error) {
         return res.status(500).json({ message: error.message });
    }
}

export const getTaskByProject = async (req, res) => {
    const {id} = req.params
    try {
        const tasks = await Projects.findAll({
            where: {id},
            include: ['tasks']
        })
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }   

}