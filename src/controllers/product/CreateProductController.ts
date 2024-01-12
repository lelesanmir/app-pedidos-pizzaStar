import { Request, Response} from 'express'

import { CreateProductService } from '../../services/product/CreateProductService'

class CreateProductController{
    async handle(req: Request, res: Response){
        const {name, price, description, category_id} = req.body;

        const createProductService = new CreateProductService();

        if(!req.file){
            throw new Error("error upload file")
        }else{

            const { originalname, filename} = req.file;

            console.log( filename)

            const product =await createProductService.execute({
                name,
                price,
                description,
                banner: '',
                category_id
            });
    
            return res.json(product)
        }

       // const product =await createProductService.execute({ QUANDO FAZ O ELSE LEVA ELE PARA DENTRO DELE É  RETORNO
        //    name,
          //  price,
            //description,
       //     banner,
        //    category_id
        //});
        //
        //return res.json(product)

    }

}

export { CreateProductController}