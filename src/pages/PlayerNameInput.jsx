import React from "react";
import { Button, Input, VStack, HStack } from "@chakra-ui/react";
import { FaUserPlus } from "react-icons/fa";

const PlayerNameInput = ({ playerNames, setPlayerNames, startGame }) => {
  const addPlayer = () => {
    setPlayerNames([...playerNames, ""]);
  };

  const setPlayerName = (name, index) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = name;
    setPlayerNames(newPlayerNames);
  };

  return (
    <VStack spacing={2}>
      {playerNames.map((name, index) => (
        <HStack key={index}>
          <Input placeholder={`Player ${index + 1} Name`} value={name} onChange={(e) => setPlayerName(e.target.value, index)} size="lg" />
        </HStack>
      ))}
      <Button leftIcon={<FaUserPlus />} colorScheme="teal" onClick={addPlayer} isDisabled={playerNames.length >= 5}>
        Add Player
      </Button>
      <Button colorScheme="green" onClick={startGame} isDisabled={playerNames.some((name) => name.trim() === "")} size="lg">
        Start Game
      </Button>
    </VStack>
  );
};

export default PlayerNameInput;
