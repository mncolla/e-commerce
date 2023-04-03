import { Suspense } from 'react'
import Router from './routes/router.routes';

function App() {

  return (
    <div className="App">
      <Suspense fallback={<>Cargando</>}>
        <Router />
      </Suspense>
    </div>
  )
}

export default App
