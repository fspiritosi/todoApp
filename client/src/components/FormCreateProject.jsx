import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";



export function FormProjectCreate() {
    const [projectData, setProjectData] = useState({
        name: "",
        description:"",
        priority:0
    })

    const handleChanges = (e) => {
        setProjectData({...projectData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newProject = await axios.post(
              "http://localhost:8000/projects",
              projectData
            );
            setProjectData({ name: "", description: "", priority: 0 });
            console.log(newProject.data);
        } catch (error) {
            console.log(error)
        } 
    }
  return (
    <Card color="transparent" shadow={false}>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Nombre del Proyecto
          </Typography>
          <Input
            size="lg"
            placeholder="Ingresa un Titulo para tu proyecto"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            name="name"
            value={projectData.name}
            onChange={handleChanges}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Descripción
          </Typography>
          <Textarea
            size="lg"
            type="text"
            placeholder="Descipción del Proyecto"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            name="description"
            onChange={handleChanges}
            value={projectData.description}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Prioridad
          </Typography>
          <Input
            type="number"
            size="lg"
            placeholder="Ingresa una Prioridad de 1 a 10"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            name="priority"
            value={projectData.priority}
            onChange={handleChanges}
          />
        </div>
        <Button
          className="mt-6"
          variant="gradient"
          color="green"
          fullWidth
          type="submit"
        >
          Crear
        </Button>
      </form>
    </Card>
  );
}
