import React from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../shared/firebase";
import { getDownloadURL } from "firebase/storage";

const Post = () => {
  // // const imageref = React.useRef(null); 아래꺼 ref로 한다면 어떻게 할까? 고민해보기

  // // const file_link_ref = React.useRef(null);

  // // const uploadFB = async (e) => {
  // //   console.log(e.target.files);
  // //   const uploded_file = await uploadBytes(
  // //     ref(storage, `images/${e.target.files[0].name}`),
  // //     e.target.files[0]
  // //   );
  // //   console.log(uploded_file);

  // //   const file_url = await getDownloadURL(uploded_file.ref);

  // //   console.log(file_url);
  // //   file_link_ref.current = { url: file_url };

  //   //file_link_ref.current  이렇게 한 이유: useRef는 특정 DOM을 건드리는 것
  //   //지금 위에 file_link_ref이란 DOM을 만들었고 (저장소 또한)  file_link_ref.current의
  //   // 객체가 무조건 { url: file_url } 이게 되게 만들었다.
  // };

  return (
    <>
      <div>
        이미지 : <input type="file" />
        {/* onChange={uploadFB} */}
      </div>
    </>
  );
};

export default Post;
