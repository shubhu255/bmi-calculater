import { useState } from "react";
 



export default function App() {
  const[height , setHeight] = useState("");
  const[weight , setWeight ] = useState("");

const [bmiResult , setBmiResult] = useState(null);

const [status, setStatus] = useState("");


function calculateBMI () {
  let bmi = (weight / (height / 100) ** 2).toFixed(2);
  setBmiResult(bmi);

let bmiStatus = getStatus(bmi)


setStatus(bmiStatus)
}

function getStatus(bmi) {
  if(bmi  < 18.5) return "Underweight";
  else if (bmi  >= 18.5  &&  bmi  <24.9) return "Normal";
  else if (bmi  >= 25 &&  bmi  < 29.9)  return "overweight";
  else return "Obese"
}

  return (
    <>
  
    <div class="w-full max-w-xs container  m-40">

      <p>BMI CALCULATER </p>

      
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Height
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="Height in cm " 
      type="text"
       placeholder="Height"
       value={height}
       onChange={e => setHeight(e.target.value)}
       />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Weight
      </label>
      <input class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="Weight" 
      type="Weight in kg" 
      placeholder="Weight"
      value = {weight}
      onChange={e => setWeight(e.target.value)}
      />
      
    </div>
    <div class="flex items-center justify-center">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="button"
      onClick={calculateBMI}
      >
        CALCULATE BMI
      </button>

   
      
    </div>
    {bmiResult  && (
    <div class="flex items-center justify-center">
  <p >{bmiResult}</p>
  <p>{status}</p>
  </div>
    )}
  </form>
  
  
</div>
    
    </>
  )
 

  }


