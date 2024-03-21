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
    { id: 1, title: "Game 1", description: "Description for Game 1" },
    { id: 2, title: "Game 2", description: "Description for Game 2" },
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
