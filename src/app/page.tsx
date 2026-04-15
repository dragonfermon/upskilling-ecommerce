import { ProductList } from "@/modules/catalog/ui/ProductList";
import { Layout } from "@/shared/ui/Layout";

export default function Home() {
 return (
    <>
        <Layout>
            <ProductList />
        </Layout>
    </>
 );
}