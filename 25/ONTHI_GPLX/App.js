import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import RootNavigator from './RootNavigator';

import modalReducer from './reducers/modalReducer';
import playVideo from './reducers/playVideo';
import questionReducer from './reducers/questionReducer';
import userAnswerReducer from './reducers/userAnswerReducer';

const rootReducer = combineReducers({
    modalReducer,
    playVideo,
    questionReducer,
    userAnswerReducer
});

const INITIAL_STATE = {}

const store = createStore(rootReducer, INITIAL_STATE)
function App() {
    console.disableYellowBox = true;
    return <Provider store = {store}>
        <RootNavigator />
    </Provider>
}
export default App;