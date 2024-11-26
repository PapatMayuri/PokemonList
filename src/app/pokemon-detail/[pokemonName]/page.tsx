import Loading from "@/app/loading";
import { getPokemon } from "@/lib/pokemonAPI";
import Image from "next/image";

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
  const { pokemonName } = params;
  const pokemonObject = await getPokemon(pokemonName);


  if (!pokemonObject) {
    return <Loading />
   }

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold pt-4">{pokemonName}</h1>
      <div className="m-4" style={{ position: "relative", width: "300px", height: "300px" }}>
        <Image
          src={pokemonObject.sprites.other['official-artwork'].front_default}
          alt={'pokemonName'}
          height='300'
          width='300'
        />
      </div>
      <h3>Weight: {pokemonObject.weight}</h3>
      <h3>Height: {pokemonObject.height}</h3>
      <h2 className="text-2xl font-semibold mb-2 mt-5">Abilities:</h2>
      <ul className="list-disc pl-6">
        {pokemonObject.abilities.map((ability: any) => (
          <li key={ability.ability.name} className="text-lg text-white-700">{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}
