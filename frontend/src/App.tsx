import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { CreateContentModel } from './components/ui/CreateContentModel'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  const [ modelOpen, setModelOpen ] = useState(true)

  return (
    <div className='p-4'>
      <CreateContentModel open={modelOpen} onClose={() => { setModelOpen(false) }}/>
      <div className='flex justify-end gap-4'>
        <Button startIcon={<ShareIcon />} variant='secondary' text='Share Brain' />
        <Button onClick={() => {setModelOpen(true) }} startIcon={<PlusIcon />} variant='primary' text='Add Content' />
      </div>
      <div className='flex gap-4'>
        <Card type='twitter' link='https://x.com/kirat_tw/status/1914003620628140438' title='First Tweet' />
        <Card type='youtube' link='https://www.youtube.com/watch?v=kCc8FmEb1nY?si=Vvmqwi6ZIJO96Ja0' title='First Viedo' />
      </div>
    </div>
  )
}

export default App