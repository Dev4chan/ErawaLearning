import React from 'react';
import { FeedWrapper } from "@/components/feed-wrapper";
import { Game } from "./game";

// Define interface for the Game object
interface Game {
  id: number;
  title: string;
  description: string;
}

const LearnPage: React.FC = async () => {
  // Define games array with type Game[]
  const games: Game[] = [
    // Example game objects
    { id: 1, title: "Game 1", description: "Story: Sexual Abuse - Part-I" },
    { id: 2, title: "Game 2", description: "Story: Sexual Abuse - Part-II" },
    { id: 3, title: "Game 3", description: "Story: Child Labour" },
    { id: 4, title: "Game 4", description: "Story: Child Marriage" },
    { id: 5, title: "Game 5", description: "Story: Online Exploitation" },
    // Add more game objects as needed
  ];  

  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        {/* Correct mapping function to use game variable */}
        {games.map((game) => (
          <div key={game.id} className="mb-10">
            <Game
              id={game.id}
              description={game.description}
              title={game.title}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
