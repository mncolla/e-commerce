import { Suspense } from 'react'
import Router from './routes/router.routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'
function App() {

  return (
    <div className="w-screen h-screen">
      <Provider store={store}>
        <Suspense fallback={<>Cargando</>}>
          <Router />
        </Suspense>
      </Provider>
    </div>
  )
}

export default App
