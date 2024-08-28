import Calculator from './components/Calculator';

function App() {

  return (
    <div className='w-full h-screen overflow-auto bg-[#27292E]'>
      <div className='flex flex-col w-full h-full overflow-auto justify-start items-center text-white py-[2rem] sm:px-8 relative'>
        <Calculator />
      </div>
    </div>
  )
}

export default App
