import { createStore , combineReducers } from 'redux';
import { Profiles } from './profilesReducer';
import { Comments } from './commentsReducer';
import { Scratches } from './scrtachesReducer';
import { ScratchTypes } from './scratchTypesReducer';
import { ScratchSubTypes } from './ScratchSubTypesReducer';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            profiles: Profiles,
            comments: Comments,
            scratches:  Scratches,
            scratchTypes: ScratchTypes,
            scratchSubTypes: ScratchSubTypes

        })
    )

    return store
}
