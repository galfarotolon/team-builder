import React from 'react'



function TeamMember({ teamMember }) {

    return (

        <div className="teamList">

            <h2>{teamMember.name} {teamMember.lastName}</h2>
            <p><strong>Favorite Spell: </strong>{teamMember.favSpell}</p>
            <p><strong>Favorite Professor:</strong> {teamMember.favProfessor}</p>
            <p><strong>Preferred Subject:</strong> {teamMember.favSubject}</p>
            <p><strong>Position:</strong> {teamMember.quidditchPosition}</p>

        </div>




    )

}

export default TeamMember