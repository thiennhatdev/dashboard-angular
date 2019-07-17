export interface IAppState{
    title : string;
    icon : number;
    link : string
  }
   
  export const INITIAL_STATE : IAppState = { 
    title : '',
    icon : 0,
    link : '' 
  }
   
  export function rootReducer(state : IAppState = INITIAL_STATE, action): IAppState{
    switch(action.type){
      case  "CREATE_MENU" : 
      
        state = {
            ...state,
            title : action.info.title,
            icon : action.info.icon,
            link : action.info.link
        }
        console.log(state);
        return state;
    }
   
   
    return state;
  }