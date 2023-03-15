import type { NextPage } from "next";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
import type { GetServerSideProps } from "next";
import { condadoStampAddr,sanpatricioStampAddr,santurceStampAddr } from "../const/programAddress";


import { getUser } from "../auth.config";

import Passport from "../components/Passport"
import styles from "../styles/Home.module.css";


const PassportPage: NextPage = () => {
    return (
        <div className={styles.container}>
        <Passport />
        </div>
    )
}

export default PassportPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const sdk = ThirdwebSDK.fromNetwork("devnet");
  
    const user = await getUser(req);
  
    if (!user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  
    const program = await sdk.getNFTDrop(sanpatricioStampAddr || santurceStampAddr || condadoStampAddr);
    const nfts = await program?.getAllClaimed();
  
    const hasNFT = nfts?.some((nft) => nft.owner === user.address);
  
    if (!hasNFT) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  
    return {
      props: {},
    };
  };
  
