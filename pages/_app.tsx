import { RecoilEnv, RecoilRoot } from "recoil";
import {NextUIProvider} from '@nextui-org/react'
import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }: any) {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
  return (
    <RecoilRoot>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </RecoilRoot>
  );
}