//modelar datos
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    stock: number;
    qty:number;
}

/*
    products": [
      {
        "id": 1,
        "name": "Essential TypeScript 4: From Beginner to Pro",
        "price": 45,
        "description": "Learn the essentials and more of TypeScript, a popular superset of the JavaScript language that adds support for static typing. TypeScript combines the typing features of C# or Java.",
        "categoryId": 1,
        "stock": 0
      },
 */