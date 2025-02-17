import ProductsPageComponent from "./components/ProductsPageComponent";


import axios from "axios";

const fetchProducts = async () => {
  const { data } = await axios.get("/api/products/admin/products")
  return data;
}

const deleteProduct = async (productId) => {
  const { data } = await axios.delete(`/api/products/admin/${productId}`);
  return data
}





const AdminProductsPage = () => {
  return (
    <ProductsPageComponent fetchProducts={fetchProducts} deleteProduct={deleteProduct}/>
  );
}

export default AdminProductsPage