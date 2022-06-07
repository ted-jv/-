import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../shared/firebase";

//1.action type

const LOAD_POST = "post_reducer/LOAD_POST";
const ADD_POST = "post_reducer/ADD_POST";
const DLETE_POST = "post_reducer/DLETE_POST";
const UPDATE_POST = "post_reducer/UPDATE_POST";

//2. action 생성 함수

//[read]
function LoadPost(post_list) {
  console.log("LoadPost 확인!");
  return { type: LOAD_POST, post_list }; //이 뒤에 왜 post_list인지 해보면서 이해하자
}

//[create]
function AddPost(post_data) {
  console.log("AddPost 확인!");
  return { type: ADD_POST, post_data };
}

//[delete] 아래 payload 부분을 이렇게 하는게 아닌 거 같다. 삭제인데 왜 payload를 씀? 강의 보기
function DeletePost(delete_data) {
  console.log("DeletePost 확인!");
  return { type: DLETE_POST, delete_data };
}

//[upadate] UpdatePost의 매개변수 그리고 payload에 뭘 적어야할지 몰라서 안 적음
function UpdatePost() {
  console.log("UpdatePost 확인!");
  return { type: DLETE_POST };
}

//3. 미들웨어
//[read]
export const LoadPostFB = () => {
  return async function (dispatch) {
    const post_data = await getDocs(collection(db, "magazine_data"));
    console.log("magazine: " + post_data);

    let post_list = [];

    post_data.forEach((doc) => {
      //   console.log(doc.data());
      post_list.push({ id: doc.id, ...doc.data() });
    });
    console.log(post_list);

    dispatch(LoadPost(post_list));
  };
};

//[add]
export const AddPostFB = (data) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "magazine_data"), data);
    const post_data = { id: docRef.id, ...data };
    dispatch(AddPost(post_data));
  };
};

//4. 초기값

let intialstate = {
  list: [],
};

//5. 리듀서

export default function post_reducer(state = intialstate, action) {
  // 새로운 액션 타입 추가시 case 추가한다.

  switch (action.type) {
    case LOAD_POST: {
      return { ...state, list: [...state, action.post_list] }; // 이 부분 내가 방금 임의로 건드림 문제가 여기일수도 있으니 나중에 확인할 것.
    }
    case ADD_POST: {
      const newDetailList = [...state.list];
      return { ...state, list: newDetailList };
    }
    default:
      return state;
  }
}
