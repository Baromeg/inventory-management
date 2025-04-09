import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      stockAdjustments {
        id
        quantity
      }
    }
  }
`;

export function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading: {error.message}</p>;

  return (
    <div className="p-4 space-y-3">
      {data.products.map((product: any) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <ul className="ml-4 text-sm text-gray-600 list-disc">
            {product.stockAdjustments.map((adj: any) => (
              <li key={adj.id}>+{adj.quantity}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
