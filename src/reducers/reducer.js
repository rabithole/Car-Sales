import { buyItem, removeFeature } from '../actions/actions';

const initialState = 
{
 additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

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