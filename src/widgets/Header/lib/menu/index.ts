interface HeaderMenuList {
  item: string;
  auth: boolean;
  href: string;
}

export const headerMenuList: HeaderMenuList[] = [
  {
    auth: true,
    href: "/",
    item: "Доставка и оплата",
  },
  {
    auth: false,
    href: "/",
    item: "О компании",
  },
  {
    auth: false,
    href: "/",
    item: "Контакты",
  },
  {
    auth: false,
    href: "/",
    item: "Оптовым покупателям",
  },
];
