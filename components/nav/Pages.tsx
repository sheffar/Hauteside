import Link from "next/link";

export default function Pages() {
  const links = [["home", ''], ["about", "about"], ["contact", "contact"], ["shop", "shop"], ["new arrival", "shop"]];

  return (
    <div>
      <div className="hidden md:flex gap-8 capitalize">
        {links.map((el, key) => (
          <Link
            key={key}
            href={`/${el[1]}`}
            className="font-semibold hover:text-[red] duration-300 text-base"
          >
            {el[0]}
          </Link>
        ))}
      </div>
    </div>
  );
}
