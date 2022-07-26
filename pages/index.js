import Head from 'next/head'
import cv from "./api/cv.json"

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-1 text-white bg-black p-10 pb-2 pt-2 md:p-10 md:pb-6 md:pt-6">
        <div class="flex flex-col justify-center">
          <div className="flex justify-center align-middle p-2 rounded-full bg-white">
            <img src="/arin.jpg" className="flex rounded-full bg-blue-500 w-20 h-20 md:w-40 md:h-40"></img>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-1 p-6 pl-10 flex-col">
            <h1 className="text-3xl font-bold">
              {cv.name} {cv.lastname}
            </h1>
            <p className="text-lg">
              {cv.en.role}
            </p>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col md:flex-row p-10">
        <div className="flex flex-col flex-1 mb-10 md:mb-0">
          <h2 className="text-2xl font-bold">About me</h2>
          <p>
            {cv.en.aboutMe}
          </p>
        </div>
        <div className="pb-4">
          <h2 className="text-2xl font-bold">Contact info</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>Age</div>
            <div>38</div>
            <div>Email</div>
            <div>arin.sinabian@gmail.com</div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-1 border-gray-200 border-b-2">

      </div>
      <div className="flex flex-col p-10">
          <h2 className="text-2xl font-bold">Skills</h2>
          
          <div className="flex flex-row flex-wrap">
            {cv.skills.map(s=> 
              <div className="w-full md:w-1/2 pr-4 pb-4">
                <span>{s.name}</span>
                <div className="h-4 bg-gray-200 rounded-sm">
                  <div className="h-4 bg-blue-400" style={{width:s.level +'%'}}>

                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  )
}
