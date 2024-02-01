import Navbar from "../components/Navbar";

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="mainCtn about bg-gray-100 py-10 px-5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Dogs bring us together
          </h1>
          <p className="text-lg text-gray-700">
            In this era, meeting new people has become a challenge. With the
            quarantine and subsequent change in our lifestyles, dating apps felt
            an exponential rise. People are feeling lonely, and at the same
            time, they want to connect with others. We created *name of the app*
            to bring people together. Dogs are both great companions and great
            responsibilities, and as such sometimes it takes a lot of effort to
            go for walks and other events alone with your furry friend. With
            *name of the app* we want people to feel safe, happy, and connected.
            We create a space for people with dogs to meet, either with romantic
            intentions or just out of fun, to attend diverse activities, as
            simple as taking a walk around the area, as life-changing as moving
            to another country with someone you met here.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            You and your dog deserve to be loved. Don't be alone, find your
            love.
          </p>
          <div className="flex flex-wrap justify-center mt-8">
            <div className="text-center px-4 mb-6">
              <img
                className="w-32 h-32 object-cover rounded-full mx-auto"
                src="#"
                alt="image of Jesus"
              />
              <p className="text-xl mt-2">Jesús, CEO</p>
            </div>
            <div className="text-center px-4 mb-6">
              <img
                className="w-32 h-32 object-cover rounded-full mx-auto"
                src="#"
                alt="image of Adrian"
              />
              <p className="text-xl mt-2">Adrian, CEO</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
