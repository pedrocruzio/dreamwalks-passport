import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {
  useClaimNFT,
  useLogin,
  useProgram,
  useUser,
} from "@thirdweb-dev/react/solana";
import type { NextPage } from "next";
import Link from "next/link";
import { programAddress } from "../const/programAddress";
import styles from "../styles/Home.module.css";
import {useRouter} from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const { publicKey } = useWallet();
  const { user, isLoading: userLoading } = useUser();
  const { login } = useLogin();
  const { data: nftDrop } = useProgram(programAddress, "nft-drop");
  const { mutate, isLoading } = useClaimNFT(nftDrop);

  if (userLoading) return <></>;

  return (
    <div className={styles.container}>
      <h1 className="mb-8">Make sure to connect to devnet</h1>
      {!publicKey && <WalletMultiButton />}
      {publicKey && !user && (
        <button
          onClick={() => login()}
          className="block rounded-md bg-indigo-500 py-2 px-3 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"  
        >
          Login
        </button>
      )}

      {user && 
      <div>
        <p>Successfully logged in  </p> <br />
        <p className="mb-4">Your wallet address is: {user.address} </p>
        <Link href="/stamps" passHref className='text-indigo-500'>
          Support artists and collect stamps
        </Link>
      </div>  
      }
    </div>
  );
};

export default Home;
