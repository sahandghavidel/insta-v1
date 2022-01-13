import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Modal from "react-modal";
import { useRouter } from "next/router";

export default function Modal1() {
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  return (
    <div className="">
      <h1>Modal</h1>
      {open && (
        <Modal
          className="max-w-lg w-[90%] h-[300px]  absolute top-56 left-[50%] translate-x-[-50%]  bg-white border-2 rounded-md shadow-md"
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <h1>Modal</h1>
            <button onClick={() => setOpen(false)}>Hello</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
