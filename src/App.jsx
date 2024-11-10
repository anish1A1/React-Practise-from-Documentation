
import { BiArchive } from 'react-icons/bi'
import Events from './practise/Events'
import UseStatePrac from './practise/UseStatePrac/UseStatePrac'
import Counter from './UpdateState/Counter'
import RequestTracker from './Tracker/RequestTracker'
import Form from './UpdatingObjects/Form'
import NestedForm from './UpdatingObjects/NestedForm'

import './index.css'
// eslint-disable-next-line no-unused-vars
import UsingImmer from './UpdatingObjects/UsingImmer'

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
     <div className='grid w-40'>
      <Form/>
     </div>
     <br />
     <div className='w-60'>
     <NestedForm />
     {/* <UsingImmer /> */}
     </div>
    </>
  )
}

export default App
