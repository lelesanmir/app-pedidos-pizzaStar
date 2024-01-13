import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: number;
    description: string;
    banner: string;
    category_id: string;
}

class CreateProductService {
    async execute({ name, price, description, banner, category_id }: ProductRequest) {

        try {
            console.log("Creating product with data:", { name, price, description, banner, category_id });

            // Convertendo o preço de volta para string antes de passar para o Prisma
            const priceAsString = price.toString();

            const product = await prismaClient.product.create({
                data: {
                    name,
                    price: priceAsString,
                    description,
                    banner,
                    category_id,
                }
            });

            console.log("Product created successfully:", product);
            return product;
        } catch (error) {
            console.error("Error creating product:", error);
            throw error;
        }
    }
}

export { CreateProductService }
