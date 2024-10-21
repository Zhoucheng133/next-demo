import { numStore } from "@/stores/default";
import {Button, ButtonGroup} from "@nextui-org/react";
import { useRecoilState } from "recoil";

const useNum=()=>{
  const [num, setNum]=useRecoilState(numStore);
  const add=()=>{
    setNum(num+1);
  }

  const minus=()=>{
    setNum(num-1);
  }

  return {add, minus}
}

export default function Switcher(){

  const num=useNum();

  return <div>
    <ButtonGroup>
      <Button onClick={()=>num.minus()}>Minus</Button>
      <Button onClick={()=>num.add()}>Add</Button>
    </ButtonGroup>
  </div>
}