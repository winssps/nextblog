import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">首页</a>
      </Link>
      <Link href="/">
        <a className="hover:underline ml-8">分类</a>
      </Link>
      <Link href="/">
        <a className="hover:underline ml-8">我的</a>
      </Link>
    </h2>
  );
};

export default Header;
