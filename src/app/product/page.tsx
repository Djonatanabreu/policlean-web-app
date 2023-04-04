import { BreadCrumb } from '@/components/breadcrumb/BreadCrumb';
import { ProductGallery } from '@/components/product/productGallery/ProductGallery';

export default function Product() {
  return (
    <section>
      <h1>This is a product Page</h1>
      <div>
        <BreadCrumb />
        <ProductGallery />
      </div>
    </section>
  );
}
