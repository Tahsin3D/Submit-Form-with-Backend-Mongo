import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm()

  const onSubmit =async (data) => {
    await fetch("http://localhost:3000/",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  }
  
  return (
    <>
      <div className='bg-[url("./images/mountain-terrain.jpg")] bg-cover w-screen h-screen flex justify-center items-center'>
        <form onSubmit={handleSubmit(onSubmit)} className=' text-white bg-[#2b273c] bg-opacity-30 backdrop-blur-lg flex flex-col gap-8 text-center p-8 w-full h-3/4 max-w-2xl m-8 border-4 border-[rgb(184,156,242)] rounded-lg '>
          <h1 className='text-5xl noSelect'>CONTACT US</h1>
          <p>Please fill out your name, email, and message below to contact us. We'll get back to you shortly.</p>
          <div>
            <input {...register("username",{required: true, minLength:3})} className='inputField' type="text" placeholder='Your Name'/>
            {errors.username && <p className='absolute text-red-500 font-bold'>Username invalid</p>}
          </div>
          <div>
            <input {...register("email",{required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i})} className='inputField' type="text" placeholder='Your Mail'/>
            {errors.email && <p className='absolute text-red-500 font-bold'>Email invalid</p>}
          </div>
          <div>
            <textarea {...register("message",{required: true, minLength:10})} className='inputField min-h-28 max-h-40' type="textarea" placeholder='Your Message'/>
            {errors.message && <p className='absolute text-red-500 font-bold'>Message invalid</p>}
          </div>
          <input disabled={isSubmitting} className='rounded-lg h-12 cursor-pointer hover:bg-[rgb(184,156,242)] bg-[#4c335e] border-[rgb(184,156,242)] border-2 absolute bottom-8 left-0 right-0 m-auto w-52 active:bg-[#4c335e]' type="submit" value="Submit Message"/>
        </form>
      </div>
    </>
  )
}

export default App
