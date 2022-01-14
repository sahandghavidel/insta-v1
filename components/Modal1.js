import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Modal from "react-modal";
import { useRouter } from "next/router";
import { CameraIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";

export default function Modal1() {
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  function addImageToPost(event) {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  }
  console.log(selectedFile);
  return (
    <div className="">
      <h1>Modal</h1>
      {open && (
        <Modal
          className="max-w-lg w-[90%] p-6  absolute top-56 left-[50%] translate-x-[-50%]  bg-white border-2 rounded-md shadow-md"
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setSelectedFile(null);
          }}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            {selectedFile ? (
              <img
                src={selectedFile}
                className="w-full max-h-[250px] object-cover cursor-pointer"
                onClick={() => setSelectedFile(null)}
              />
            ) : (
              <CameraIcon
                onClick={() => filePickerRef.current.click()}
                className="cursor-pointer p-2 bg-red-200  border-2 rounded-full h-14 text-red-500"
              />
            )}

            <input
              type="file"
              hidden
              ref={filePickerRef}
              onChange={addImageToPost}
            />
            <input
              type="text"
              maxLength={150}
              placeholder="Please enter your caption..."
              className="m-4 border-none text-center focus:ring-0 w-full"
              ref={captionRef}
            />
            <button className="w-full bg-red-600 rounded-md text-white shadow-md p-2 hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:brightness-100">
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
