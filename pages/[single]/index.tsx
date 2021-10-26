import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Single: NextPage = () => {
  const router = useRouter();
  const { single } = router.query;

  return (
    <>
      <h2>シングルページ</h2>
      <h3>{single}</h3>
      <br />
      <br />
      <Link href="\">TOPに戻る</Link>
    </>
  );
};

export default Single;
