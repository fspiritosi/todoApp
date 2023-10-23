import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const createTask = async (req, res) => {
    const { title, state, projectId } = req.body;
    try {
        const newTask = await Task.create({
            title,
            state,
            projectId
        })
        res.json(newTask);
    } catch (error) {
         return res.status(500).json({ message: error.message });
    }
};
export const updateTask = async (req, res) => {
    //const { title, state, projectId } = req.body;
    const { id } = req.params;
    try {
        const task = await Task.findByPk(id);
        task.set(req.body)
        // task.title = title;
        // task.state = state;
        // task.projectId = projectId;
        await task.save();
        res.json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    } 
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await Task.destroy({
            where: { id }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    } 
};
export const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findOne({
            where: {id}
        });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    } 
};