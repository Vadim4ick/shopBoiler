import { AvatarIcon, CityIcon } from "@/shared/Icons";
import { Icon } from "@/shared/ui/Icon/Icon";

import { HeaderList } from "./HeaderList";

const Header = () => (
  <header className="header flex w-full items-center justify-between bg-dark px-2">
    <Icon>
      <CityIcon height={10} width={10} />
    </Icon>

    <HeaderList />

    <Icon clicable>
      <AvatarIcon height={32} width={32} />
    </Icon>
  </header>
);

export { Header };
