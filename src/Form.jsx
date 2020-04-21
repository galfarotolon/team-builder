import React from 'react'



function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
    } = props

    return (

        <form autocomplete="off" >

            <h2>New Team Member:</h2>


            <label>First Name: &nbsp;
                <input
                    value={values.name}
                    onChange={onInputChange}
                    name="name"
                    type="text"
                />
            </label>
            <label>Last Name:&nbsp;
      <input
                    value={values.lastName}
                    onChange={onInputChange}
                    name='lastName'
                    type='text'
                /></label>

            <label>Favorite Spell:&nbsp;
      <input
                    value={values.favSpell}
                    onChange={onInputChange}
                    name='favSpell'
                    type='text'
                /></label>

            <label>Favorite Professor:&nbsp;
      <input
                    value={values.favProfessor}
                    onChange={onInputChange}
                    name='favProfessor'
                    type='text'
                /></label>

            <label>Preferred Subject:&nbsp;
      <input
                    value={values.favSubject}
                    onChange={onInputChange}
                    name='favSubject'
                    type='text'
                /></label>

            <label>Position:&nbsp;
      <input
                    value={values.quidditchPosition}
                    onChange={onInputChange}
                    name='quidditchPosition'
                    type='text'
                /></label>



            <button onClick={onSubmit}>submit</button>

        </form >




    )

}

export default Form