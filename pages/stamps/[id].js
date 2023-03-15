import { getStampDetails, getStampIdList } from '../../lib/stamps'
import {
  useClaimNFT,
  useProgram,
} from "@thirdweb-dev/react/solana";

export async function getStaticPaths() {
    const paths = await getStampIdList();
    return {
      paths,
      fallback: false,
    };
  }

  export async function getStaticProps({ params }) {
    const postData = await getStampDetails(params.id);
    return {
      props: {
        postData,
      },
    };
  }

import styles from "../../styles/Home.module.css";

export default function Stamp({postData}) {
  const { data: nftDrop } = useProgram(postData.contractAddr, "nft-drop");
  const { mutate, isLoading } = useClaimNFT(nftDrop);

    return (
      <div className={styles.container}>
        <div className='text-center font-bold text-3xl'>
          {postData.title}
        </div>
        <div>
          <img src={postData.image} alt="" width="300px" className='mt-8'/>
        </div>
        <div className='text-center my-8 text-gray-200'>
          {postData.city}
          <br />
          {postData.date}
        </div>
        <div>
    
        <button
          onClick={() =>
            mutate({
              amount: 1,
            })
          }
          className="block rounded-md bg-indigo-500 py-2 px-3 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          {isLoading ? "Claiming..." : "Claim NFT"}
        </button>
        </div>
      </div>
    );
  }

  