import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Song: NextPage = () => {
  const router = useRouter();
  const { single, song } = router.query;

  return (
    <>
      <h2>楽曲ページ</h2>
      <h3>{single}</h3>
      <h4>{song}</h4>
      <br />
      <br />
      <Link href="\">TOPに戻る</Link>
    </>
  );
};

export default Song;
