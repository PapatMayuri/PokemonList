import { getPokemonList } from "@/lib/pokemonAPI";
import Link from "next/link";

export default async function Sidebar() {
  const pokemonList = await getPokemonList();

  return (
    <div className="w-64 p-4 border-r border-gray-300 bg-gray-50">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Pokémon List</h2>
      <ul className="space-y-2">
        {pokemonList.map((pokemon: any, index: number) => (
          <li key={index}>
             <Link href={`/pokemon-detail/${pokemon.name}`} className="w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded">
                {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
