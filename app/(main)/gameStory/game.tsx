import { lessons, units } from "@/db/schema"

import { GameBanner } from "./game-banner";
import { LessonButton } from "./lesson-button";

type Props = {
  id: number;
  title: string;
  description: string;
};

export const Game = ({
  id,
  title,
  description,
}: Props) => {
  return (
    <>
      <GameBanner title={title} description={description} id={id} />
    </>
  );
};
