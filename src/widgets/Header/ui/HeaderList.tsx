"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

import { headerMenuList } from "../lib/menu";

const HeaderList = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const onClickFn = (i: number) => () => {
    setActiveIdx(i);
  };

  return (
    <nav>
      <ul className="flex gap-12">
        {headerMenuList.map((el, i) => (
          <li key={i}>
            <Link
              href={el.href}
              className={clsx("text-white", {
                active: i === activeIdx,
              })}
              onClick={onClickFn(i)}
            >
              {el.item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { HeaderList };
