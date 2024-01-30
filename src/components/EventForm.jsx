const EventForm = () => {
    return  <div className="w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Name
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
          leading-tight focus:outline-none focus:shadow-outline"
           type="text" required value={} onChange={}/>
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
              onChange={}
          />
        </label>
     </div>


     <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          eventDuration
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="Number"
              placeholder="number"
              required
              value={eventDuration}
              onChange={HandleEventDuration}
          />
        </label>
     </div>

     <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          location
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="Schema"
              placeholder="place"
              required
              value={location}
              onChange={HandleLocation}
          />
        </label>
     </div>

     <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          user
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="Schema"
              placeholder="user"
              required
              value={user}
              onChange={HandleUser}
             
          />
        </label>
     </div>


      <button className="bg-blue-500 hover:bg-blue-700
       text-white font-bold py-2 px-4 rounded" type="submit">{isLogin ? "Login" : "Signup"}
       </button>
    </form>
      </div>;
}
 
export default EventForm;