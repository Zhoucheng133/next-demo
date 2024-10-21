import { numStore } from "@/stores/default";
import {Button, ButtonGroup} from "@nextui-org/react";
import { useRecoilState } from "recoil";

export default function Switcher(){

  const [num, setNum]=useRecoilState(numStore);

  const add=()=>{
    setNum(num+1);
  }

  const minus=()=>{
    setNum(num-1);
  }

  return <div>
    <ButtonGroup>
      <Button onClick={()=>minus()}>Minus</Button>
      <Button onClick={()=>add()}>Add</Button>
    </ButtonGroup>
  </div>
}