import React from "react";
// import Popup from "reactjs-popup";
import Link from "next/link";
// import "reactjs-popup/dist/index.css";

export default function PopUp() {
  return (
    <div className="fixed right-[25px] bottom-[25px] z-50 ">
      <button className="rounded-full font-bold h-[75px] w-[75px] bg-purple-900">
        <Link href="https://gfgsrmist-my.sharepoint.com/:b:/g/personal/pr_hackinnovate_tech/EcykBoJT0QlDmNG9aW9AGlYBRkgljDnVfdlAInAfu26jnQ?e=cLJ3DD">
          GUIDE
        </Link>
      </button>
      {/* <Popup
        trigger={ */}
      {/* // <button className=" sticky inset-0"> */}

      {/* }
        position="right center".......
      > */}
      {/* <div>Popup content here !!</div> */}
      {/* <div> Guidelines here</div> */}
      {/* </Popup> */}
    </div >
  );
}