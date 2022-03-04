import IconButton from "../icon-button/IconButton";
import { IIconButton } from "../../lib/interfaces/icon-button";

interface Props {
  title: string;
  buttons: Array<IIconButton>;
}

export default function SideBarSection({ title, buttons }: Props) {
  return (
    <div className="flex flex-col gap-10">
      <span className="text-white font-bold">{title}</span>
      <ul className="grid grid-cols-af-20 justify-between gap-14">
        {buttons.map((button, ind) => (
          <li key={`${button.title}-${ind}`} className="w-fit">
            <IconButton />
          </li>
        ))}
      </ul>
    </div>
  );
}
