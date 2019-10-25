import { buyItem, removeFeature } from '../actions/actions';

const initialState = 
[];

export function reducer(state = initialState, action) { // Action === dispatch
  switch (action.type) { // Action is an object, it is passed through reducer to dispatch in the App.js file. 
    case 'ADD_FEATURE':
      console.log(state)
      return 
      //   ...state,
      //     {
      //       todo: action.payload,
      //       completed: false,
      //       id: Date.now()
      //     },
      //   ];

      case 'REMOVE_FEATURE':
    //   console.log("action object:", action, 'state:', state)
    //   return  state.map(item => {
    //               if(action.payload === item.id){
    //                 item.completed = !item.completed
    //               }  
    //               return item
    //             });


    //   case 'CLEAR_COMPLETED':
    //   // console.log(state)
    //   return state.filter(item => item.completed === false);
         
    default:
      return state;
  }
}
// Don't need to use the spread because map makes a new array. 

// action is and object that contains dispatch with a type and payload key value pairs. 