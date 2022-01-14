import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Modal from "react-modal";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { CameraIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export default function Modal1() {
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  // FUNCTION FOR FIREBASE

  async function uploadPost() {
    if (loading) return;

    setLoading(true);

    // create a post a add to firestoe

    // get the post id

    // upload the image to firebase storage with the post id

    // get a download url from firebase storage and update the post

    const docRef = await addDoc(collection(db, "posts"), {
      username: session.user.username,
      caption: captionRef.current.value,
      profleImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    console.log("new doc added", docRef.id);

    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      }
    );
    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  }

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
            <button
              disabled={!selectedFile || loading}
              onClick={uploadPost}
              className="w-full bg-red-600 rounded-md text-white shadow-md p-2 hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:brightness-100"
            >
              {loading ? "Laoding..." : "Upload Post"}
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
