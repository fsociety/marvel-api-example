'use client';
import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import axios, {Response} from "@/utils/axios"
import { CharacterResponse } from "@/types/Character";
import 'bootstrap/dist/js/bootstrap.bundle';

type Props = {
  params: {
    characterId: number
  }
}

function Character({params}: Props) {
  const [character, setCharacter] = useState<CharacterResponse>()

  useEffect(() => {

    async function getCharacter(){
      const { data } : Response = await axios.get(`/${params.characterId}`);

      setCharacter(data);
    }

    getCharacter();
  }, [])
  

  return (
    <div className="container py-4">
      <div>
      <Link href={"/"} type="button" className="btn btn-light mb-3">
        &#129168; Back
      </Link>
      </div>
      <div className='row'>
        <div className="col-md-4">
        {character && (
          <img 
          className='mw-100 rounded'
          src={`${character.data.results[0].thumbnail.path}.${character.data.results[0].thumbnail.extension}`}></img>
        )}

          <div className="accordion mt-2" id="accordionList">
            
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Comics
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionList">
                <div className="accordion-body p-0">
                  <ul className="list-group">
                    {
                      character?.data.results[0].comics.items.map((val,i) => {
                        return <li key={i} className="list-group-item">{val.name}</li>
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  Series
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionList">
                <div className="accordion-body p-0">
                  <ul className="list-group">
                    {
                      character?.data.results[0].series.items.map((val,i) => {
                        return <li key={i} className="list-group-item">{val.name}</li>
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  Stories
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionList">
                <div className="accordion-body p-0">
                  <ul className="list-group">
                    {
                      character?.data.results[0].stories.items.map((val,i) => {
                        return <li key={i} className="list-group-item">{val.name}</li>
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-md-8">
          <h1>{character?.data.results[0].name}</h1>
          {character?.data.results[0].description}
        </div>
      </div>
    </div>
  )
}

export default Character