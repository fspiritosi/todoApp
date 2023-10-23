import express from 'express'
import projectsRoutes  from './routes/projects.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import cors from 'cors'



const app = express()

//middlewares
app.use(express.json())
app.use(cors());

app.use(projectsRoutes)
app.use(tasksRoutes)

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

export default app