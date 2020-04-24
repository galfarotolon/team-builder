import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Form from "./Form"
import TeamMember from "./TeamMember"



const initialTeamMembers = [

  {
    name: "Harry",
    lastName: "Potter",
    favSpell: "Patronus Charm",
    favProfessor: "Dumbledore",
    favSubject: "Defence Against The Dark Arts",
    quidditchPosition: "Seeker"


  },
]

const initialFormValues = {

  name: "",
  lastName: "",
  favSpell: "",
  favProfessor: "",
  favSubject: "",
  quidditchPosition: "",


}

function App() {


  //STEP 1- ADD STATE TO HOLD VALUES OF FORM
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {


    const name = evt.target.name //either "username" or "email"

    // b) pull the value of the input from the event object
    const value = evt.target.value //the current value of the input entered by the user

    // c) set a new state for the whole form

    setFormValues({
      //COPY OVER all the properties from formValues
      ...formValues,

      [name]: value //NOT AN ARRAY, passes the variable from above

    })
  }


  const onSubmit = evt => {

    evt.preventDefault()


    const newTeamMember = {

      name: formValues.name,
      lastName: formValues.lastName,
      favSpell: formValues.favSpell,
      favProfessor: formValues.favProfessor,
      favSubject: formValues.favSubject,
      quidditchPosition: formValues.quidditchPosition,

    }



    setTeamMembers([...teamMembers, newTeamMember])



    setFormValues(initialFormValues)
  }


  return (
    <div className="App">

      <h1>Quidditch Team Members</h1>

      {
        teamMembers.map(teamMember => {
          return <TeamMember teamMember={teamMember} />
        })


      }

      <Form values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}

      />

    </div>
  );
}



export default App;

