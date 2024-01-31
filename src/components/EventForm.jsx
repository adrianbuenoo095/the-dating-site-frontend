import { useState } from 'react'

const EventForm = () => {
  const [name, setName] = useState ('');
  const [time, setTime] = useState (0);
  const [eventDuration, setEventDuration] = useState (0);
  const [location, setLocation] = useState ('');
  const [user, setUser] = useState ('');
  
  const handleName = (e)=>{
    setName(
    e.target.value
      )
    //finish this 
    }
    
    const handleTime = (e)=>{
    //finish this 
    setTime(
      e.target.value
     )
    }
    
    const handleEventDuration = (e)=>{
      //finish this 
      setEventDuration(
        e.target.value
      )
    }
    
    const handleLocation = (e)=>{
        //finish this 
        setLocation(
          e.target.value
        )
      }
    
    const handleUser = (e)=>{
          //finish this 
          setUser(
            e.target.value
          )
        }
    return  <div className="flex justify-center items-center">
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
          Time
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="Date"
              placeholder="time"
              required
              value={time}
              onChange={handleTime}
          />
        </label>
     </div>


     <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
        EventDuration
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="Number"
              placeholder="number"
              required
              value={eventDuration}
              onChange={handleEventDuration}
          />
        </label>
     </div>

     <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Location
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="Number"
              placeholder="place"
              required
              value={location}
              onChange={handleLocation}
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


      <button className="bg-blue-500 hover:bg-blue-700
       text-white font-bold py-2 px-4 rounded" type="submit">
       Create Event</button>
    </form>
      </div>;
}
 
export default EventForm;