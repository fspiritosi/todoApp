import { Button } from "@material-tailwind/react";
import {NavbarDark} from './components/Navbar'
import { FooterWithLogo } from './components/Footer';
import { DefaultTable } from './components/Table';
import { useEffect, useState } from "react";
import {getProjects} from './func/getProyect'
import {DialogFormProject} from './components/DialogFormProject'


function App() {

  const [projects, setProjects] = useState([])

  console.log(projects)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await getProjects();
        setProjects(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchData();
    }, [])
  return (
    <div className="text-center">
      <div className="w-full">
        <NavbarDark />
      </div>
      <div className='mt-5'>
      <DialogFormProject/>
      </div>
      <div className="my-5 px-5">
        <DefaultTable data={projects} />
      </div>
      <FooterWithLogo />
    </div>
  );
}

export default App
