import { useState } from 'react';

const team1 = {
  ironman: 'tin can',
  captain: 'shield guy',
  superman: 'eye laser',
};

const team2 = {
  ...team1,
  hulk: 'green guy',
};

const Avengers = () => {
  const [numberOfAvengers, setNumberOfAvengers] = useState({});
  return (
    <>
      <button onClick={() => setNumberOfAvengers(team1)}>3 Avenger</button>
      <button onClick={() => setNumberOfAvengers(team2)}>4 Avenger</button>
      {JSON.stringify(numberOfAvengers)}
    </>
  );
};

export default Avengers;
