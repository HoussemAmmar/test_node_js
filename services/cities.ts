import fetch from 'node-fetch';
import { City } from '../types/cities';



export const getCitiesFromAPI = async (zipcode : string) : Promise<[City]> => {

   const url = process.env.GEO_GOV_URL + `?codePostal=${zipcode}`;
   
   const response = await fetch(url)
   return response.json()  

}
