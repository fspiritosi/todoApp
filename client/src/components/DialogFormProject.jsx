
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {FormProjectCreate} from './FormCreateProject'
import { useState } from "react";



export function DialogFormProject() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Crear Proyecto
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="w-full items-center">Crea tu Nuevo Proyecto</DialogHeader>
        <DialogBody className="flex items-center justify-center">
          <FormProjectCreate state={open}/>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
