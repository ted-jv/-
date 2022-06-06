//1.action type

const LOAD_POST = "post_reducer/POST";

//2. action 생성 함수

//3. 미들웨어

//4. 초기값

let intialstate = {
  list: [],
};

//5. 리듀서

export default function post_reducer(state = intialstate, action) {
  switch (action.type) {
    case LOAD_POST: {
      return { ...state, list: action.detail_list };
    }
    default:
      return state;
  }
}
