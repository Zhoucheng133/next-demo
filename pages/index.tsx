import Switcher from "@/components/switcher";
import { numStore } from "@/stores/default"
import { useRecoilValue } from "recoil"

export default function App(){

  const num=useRecoilValue(numStore);

  return <>
    <div>{ num }</div>
    <Switcher/>
  </>
}