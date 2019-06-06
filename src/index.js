import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import configureStore, {history} from './configureStore'
import TickTock from './components/ticktock'

const { store, persistor } = configureStore()

ReactDOM.render(
    <Provider store={store}>
    <PersistGate loading={ <TickTock/> } persistor={ persistor }>
        <App history={history} />
    </PersistGate>
    </Provider>,
    document.getElementById('app')
)
