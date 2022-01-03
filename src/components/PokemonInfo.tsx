import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { InformationI, TypesI } from "./Interfaces";
import Spinner from "./General/Spinner";
import { icons } from "./TypesIcons";
const api = "https://pokeapi.co/api/v2";

//typescript interface
type KnownTags = keyof JSX.IntrinsicElements

interface Params {
  id: string;
}

interface Props {
  correct?: KnownTags
}

const PokemonInfo = () => {
  const [information, setInformation] = useState<InformationI>();
  const [types, setTypes] = useState<TypesI[]>([]);
  const history = useHistory();
  const params: Params = useParams();

  const getInfo = async () => {
    const res = await axios.get(`${api}/pokemon/${params.id}`);
    setInformation(res.data);

    let helper: any[] = [];
    res.data.types.map((type: any) =>
      helper.push(icons[parseInt(type.type.url.slice(31, -1)) - 1])
    );
    console.log(helper);
    setTypes(helper);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const InformationCard = styled.div`
    display: flex;
    margin: 40px auto;
    width: 550px;
    border: 2px solid black;
    border-radius: 5px;
    background-image: ${(prop: any) => prop.types.length >=2
      ? `linear-gradient(to bottom right, ${types[0].color}, ${types[1].color})`
      : `linear-gradient(to bottom right, rgba(255,0,0,0), ${types[0].color})`};
  `;

  const InformationImage = styled.img`
    width: 250px;
  `

  const InformationTypesContainer = styled.div`
      display: flex;
      justify-content: space-around;
  `

  const InformationTypes = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  return (
    <>
      {types.length > 0 ? (
        <div>
          <button onClick={() => history.push("/")} style={{margin: '40px', borderRadius: '5px'}}>back</button>
          <InformationCard<any> types={types}>
            <div>
              <InformationImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params.id}.png`}
                alt='' />
            </div>
            <div>
              <h1>
                {information?.name || ""} #{information?.id || ""}
              </h1>

              <h4>Types: </h4>
              <InformationTypesContainer>
                {types.map((type) => (
                  <InformationTypes key={type.id} >
                    <img src={type.icon} alt='' style={{ width: "40px" }} />
                    <p style={{ fontSize: "22px" }}>{type.type}</p>
                  </InformationTypes>
                ))}
              </InformationTypesContainer>
            </div>
          </InformationCard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PokemonInfo;
