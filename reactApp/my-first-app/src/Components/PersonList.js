import React from 'react'

export default function PersonList({person}) {
    
    return (
       <div>
       <h2 key={person.id}>My name is {person.firstName}, I am {person.age} years old.I offer {person.course}</h2>
        </div>
    )
}
