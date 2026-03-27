import TextButton from "../components/TextButton";
export default function MenuState() 
{
  const startGame = () => {
    alert("Game Started!");
  };

    const openSettings = () => {
    console.log("Settings opened");
  };

  return (
    <>
      <TextButton text="Start Game" onClick={startGame} />
      <TextButton text="Settings" onClick={openSettings} />
      <TextButton text="Exit" onClick={() => console.log("Exit")} />
    </>
  );
}