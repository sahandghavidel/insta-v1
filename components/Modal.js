import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

export default function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>Modal</h1>
      {open && <h1>The modal is open</h1>}
    </div>
  );
}
