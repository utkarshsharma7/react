import { useCallback, useState } from 'react'

function App() {
  // const[length, setLength] = useState(8);
  // const [numberAllowed, setNumberAllowed] =useState(false);
  // const [characterAllowed, setCharacterAllowed] =useState(false);
  // const [password, setPassword] = useState(generatedPassword);

  // const passwordGenerator = useCallback(() => {
  //   let pass = ""
  //   let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  //   if(numberAllowed) str+= "0123456789"
  //   if(characterAllowed) str+= "~!@#$%^&*()_+|<>?";
  //   for( let i =1; i<= array.length; i++){
  //     let char = Math.floor(math.random * str.length +1)
  //     pass = str.charAt(char)
  //   }
  //   setPassword(pass)

  // }  , [ length, numberAllowed, characterAllowed, setPassword]);
   return (
     <>
       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
         <div className="flex-shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password}  className='outline-none w-full py-1 px-3' placeholder='password' readOnly /> dfgdgdf
         </div>
       </div>
         {/* <h1 className="text-4xl text-center text-white">Password Generator</h1> */}
     </>
   );
}

export default App
