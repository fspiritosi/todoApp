import axios from 'axios'

export const getProjects = async() => {
    const project = await axios.get('http://localhost:8000/projects')
    console.log(project.data)
    return project.data
}
