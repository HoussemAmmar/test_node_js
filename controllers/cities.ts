import  { Request, Response } from 'express';
import { getCitiesFromAPI } from '../services/cities';
import { CitiesErrorResponse } from '../utils/errors/CitiesErrorResponse'
import { City } from '../types/cities';

export const getCities = async (req: Request, res: Response) => {
  const zipcode: string = req.query.codePostal?.toString() || "";

    if (!zipcode) {
        res.status(400).send(new CitiesErrorResponse(400, 'Le paramètre "codePostal" est requis'));
        return;
    }
    
    if (!zipcode.match(/^[0-9]{5}$/)) {
      res.status(400).send(new CitiesErrorResponse(400, 'Le paramètre "codePostal" doit consister en une chaîne de caractères de 5 chiffres.'));
      return;
    }

    try {
        const data = await getCitiesFromAPI(zipcode)
        const cities : string[] = data.map((city : City) => city.nom);

        if (data && data.length > 0) {
            res.status(200).send({
            success: true,
            cities,
            });
        } 
        else {
          res.status(404).send(new CitiesErrorResponse(404, `Aucune correspondance de ville n'a été trouvée pour le code postal ${zipcode}`));
        }   
    }

    catch(error : any) {
      res.status(503).send(new CitiesErrorResponse(503, `Il y a eu un problème lors de la communication avec l'API tierce. : ${error.message}`));
    }
  };
