import { useState } from 'react'
const DogForm = () => {
const [name, setName] = useState ('');
const [picture, setPicture] = useState ('');
const [age, setAge] = useState (0);
const [breed, setBreed] = useState ('');
const [user, setUser] = useState ('');
const [status, setStatus] = useState ('');
const [size, setSize] = useState ('');


const handleName = (e)=>{
setName(
e.target.value
  )
//finish this 
}

const handlePicture = (e)=>{
//finish this 
setPicture(
  e.target.value
 )
}

const handleAge = (e)=>{
  //finish this 
  setAge(
    e.target.value
  )
}

const handleBreed = (e)=>{
    //finish this 
    setBreed(
      e.target.value
    )
  }

const handleUser = (e)=>{
      //finish this 
      setUser(
        e.target.value
      )
    }

const handleStatus = (e)=>{
        //finish this 
        setStatus(
          e.target.value
        )
      }  
        
const handleSize = (e)=>{
        //finish this 
        setSize(
          e.target.value
        )
      }      

    return  <div className="w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Name
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline"
           type="text" required value={name} onChange={handleName}/>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Picture
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="picture"
              required
              value={picture}
              onChange={handlePicture}
          />
        </label>
     </div>


     <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Age
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="age"
              required
              value={age}
              onChange={handleAge}
          />
        </label>
     </div>

     <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Breed
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="Schema"
              placeholder="breed"
              required
              value={breed}
              onChange={handleBreed}
          />
        </label>
     </div>

     <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          User
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="Schema"
              placeholder="user"
              required
              value={user}
              onChange={handleUser}
          />
        </label>
     </div>

     <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Status
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="status"
              required
              value={status}
              onChange={handleStatus}
          />
        </label>
     </div>

     <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Size
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="size"
              required
              value={size}
              onChange={handleSize}
          />
        </label>
     </div>

      <button className="bg-blue-500 hover:bg-blue-700
       text-white font-bold py-2 px-4 rounded" type="submit">
    Create   </button>
    </form>
      </div>;
}
 
export default DogForm;