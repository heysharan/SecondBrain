import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {

  return (
    <div>
      <Button startIcon={<PlusIcon size='md'/>} size='sm' variant='secondary' text='Share Brain' />
      <Button size='md' variant='primary' text='Add Content' />
      <Button size='lg' variant='primary' text='Add Content' />
    </div>
  )
}

export default App
