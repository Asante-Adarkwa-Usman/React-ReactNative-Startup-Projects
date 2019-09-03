import React from 'react'
import PersonList from './PersonList';

 function NameList() {
  const persons = [
 {
id: 1,
firstName:'Asante',
age:23,
course:'comp sci'
},
{
id:2,
firstName:'Anakwa',
age:22,
course:'consumer science'
},
{
    id:3,
    firstName:'Emmanuel',
    age:19,
    course:'information technology' 
}
  ]
  
  // const names = ['Kwaku','Kwame','Yaa','Akua']
  const personList =  persons.map(person => <PersonList person={person}></PersonList>)
    return (
      
        <div>
            {
              personList 
            }
        </div>
    )
}
export default NameList