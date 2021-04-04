import * as home from './action-type'

let defaultState = {
  name: '',
  phone: '',
  imgpath: '',
}

// 首页表单数据
export const formData = (state = defaultState, action) => {
  switch(action.type) {
    case home.SAVEFORMDATA:
      return {...state, ...{
        [action.datatype]: action.value
      }}
    default:
      return state
  }
}

