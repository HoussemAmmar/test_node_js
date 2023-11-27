import fetch from 'node-fetch';



export const getCitiesFromAPI = async (zipcode : string) : Promise<any> => {

   const url = process.env.GEO_GOV_URL + `?codePostal=${zipcode}`;
   
   const response = await fetch(url)
   return response.json()  

}
