'use client';
import Link from "next/link";
import { CharacterResponse } from "@/types/Character";
import { useEffect, useState } from "react";
import AppContext from "@/context/store";
import { useContext } from "react";
import Pagination from "@/components/Pagination";
import axios, {Response} from "@/utils/axios";

export default function Home() {
  const [characters, setCharacters] = useState<CharacterResponse | undefined>()
  const [numberOfPages, setNumberOfPages] = useState<number>(0)
  const limit: number = parseInt(process.env.NEXT_PUBLIC_LIST_LIMIT || "10"); // default 10
  const {page} = useContext(AppContext);

  useEffect(() => {
    async function getCharacters(){
      const { data } : Response = await axios.get("",{
        params:{
          limit: limit,
          offset: (page - 1) * limit
        }
      });
      
      setCharacters(data);
      setNumberOfPages(Math.ceil(data.data.total / limit));
    }

    getCharacters();
  }, [page])

  return (
    <main className="container py-4">
      <div className="row">

        {
          characters?.data.results.map((character, i) => {
              return <div className="col-md-6 mb-2" key={i}>
              <Link href={`detail/${character.id}`} className="text-decoration-none">
                <div className="card">
                  <div className="card-body">
                    {character.name}
                  </div>
                </div>
              </Link>
            </div>
          })
        }

        <Pagination numberOfPages={numberOfPages} />

      </div>
    </main>
  );
}
