import {Router} from 'express'
const router = Router()
import {createProject, getProjects, deleteProject, updateProject, getProyectById, getTaskByProject} from '../controllers/projectsControlles.js'

router.get('/projects', getProjects)
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);
router.get("/projects/:id", getProyectById);
router.get("/projects/:id/tasks", getTaskByProject);

export default router