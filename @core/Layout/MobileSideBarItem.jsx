import Link from "next/link";
function MobileSideBarItem({ onClikHandler }) {
  return (
    <nav>
      <ul>
        <li>
          <Link
            href="#what-are-we-doing?"
            onClick={onClikHandler}
            offset={-150}
          >
            ما چیکار میکنیم؟
          </Link>
        </li>
        <li>
          <Link
            href="#where-is-your-path?"
            onClick={onClikHandler}
            offset={-50}
          >
            کجای مسیری؟
          </Link>
        </li>
        <li>
          <Link href="#services" onClick={onClikHandler} offset={-100}>
            خدمات
          </Link>
        </li>
        <li>
          <Link href="#successful-companinos" onClick={onClikHandler}>
            همراهان موفق
          </Link>
        </li>
        <li>
          <a href="https://zeeg.me/hamgramco" onClick={onClikHandler}>
            درخواست مشاوره
          </a>
        </li>
      </ul>
      {/* <ul > */}
    </nav>
  );
}

export default MobileSideBarItem;
