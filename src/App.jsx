
import { BiArchive } from 'react-icons/bi'
import Events from './practise/Events'
import UseStatePrac from './practise/UseStatePrac/UseStatePrac'
import Counter from './UpdateState/Counter'
import RequestTracker from './Tracker/RequestTracker'

function App() {
  

  return (
    <>
    <h1 className='border-l-dark-50'>
      Home Page
    </h1>
    <div className='App  mx-16 mt-3 font-serif font-light flex space-x-4'>
      <div className='space-x-6 '>
      <BiArchive />
      <Events />
      </div>
    </div>
     
     <div className='container m-20 '>
            <UseStatePrac />
     </div>
     <div>
      <Counter />
     </div>
     <div className='flex justify-center gap-3 border-light-400  font-semibold'>
      <RequestTracker />
     </div>
    </>
  )
}

export default App
