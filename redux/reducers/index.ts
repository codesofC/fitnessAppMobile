
const initialState = {
    favorite: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case "ADDFAV":
            const indexResult = state.favorite.findIndex(item => item.id === action.payload.id)

            if(indexResult !== -1){
                const newArray = [...state.favorite]

                newArray.splice(indexResult, 1);

                return {
                    ...state,
                    favorite: newArray
                }
            }else{

                return {
                    ...state,
                    favorite: [...state.favorite, action.payload]
                }
            }
        default:
            return state
    }

}

export default reducer