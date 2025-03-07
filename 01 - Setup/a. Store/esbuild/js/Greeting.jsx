/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useStore } from "./store.js";

export default function Greeting() {
  const name = useStore((state) => state.name);
  const setName = useStore((state) => state.setName);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h1>Hello {name}!</h1>
    </>
  );
}
