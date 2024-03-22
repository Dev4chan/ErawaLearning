import Link from "next/link";
import { NotebookText, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  description: string;
  id:Number
};

export const GameBanner = ({
  title,
  description,
  id
}: Props) => {
  return (
    <div className="w-full rounded-xl bg-blue-400 p-5 text-white flex items-center justify-between">
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>
        <p className="text-lg">
          {description}
        </p>
      </div>
      <Link href={`/gameStory/game${id}`}>
        <Button
          size="lg"
          className="hidden xl:flex border-2 border-b-4 active:border-b-2 bg-blur bg-white hover:bg-blue-200"
        >
          <Play className="mr-2" />
          Play
        </Button>
      </Link>
    </div>
  );
};
