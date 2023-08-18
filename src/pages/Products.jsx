import { useEffect, useRef, useState } from "react";
import { Container, Product } from "../components";
import { useInView } from "framer-motion";
import { Button } from "antd";

const Products = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const [err, setError] = useState("")
  const [products, setProducts] = useState([]);
  const [selectProductAmount, setProductAmount] = useState(10);

  useEffect(() => {
    if (!isInView) return
    setProductAmount(prev => prev += 10)
  }, [isInView]);

  useEffect(() => {
    setError("")
    fetch("https://brandstestowy.smallhost.pl/api/random?pageSize=" + selectProductAmount)
      .then((data) => {
        if (data.ok) {
          return data.json()
        }

        throw new Error(data.status)
      })
      .then((r) => setProducts(r))
      .catch(err => setError(err))
  }, [selectProductAmount])

  if (err) {
    return (
      <div className="pt-12 px-3 futura-medium text-center">
        <p className="xl:text-4xl text-2xl mb-4"><span className="font-bold">Ooops...</span> something went wrong.</p>
        <Button size="large" onClick={() => setProductAmount(prev => prev += 1)}>Try again</Button>
      </div>
    )
  }

  return (
    <div className="h-[200vh] bg-[#F6F6F6]">
      <Container>
        <section id="producty" className="pt-32">
          <div className="mx-auto w-fit xl:mb-32 mb-16 flex sm:flex-row flex-col">
            <span className="p-3 w-[250px] outline outline-2 placeholder:text-black outline-[#AD4844] rounded-none futura-medium text-xl">
              liczba produktów na stronie
            </span>
            <select className="text-white futura-medium text-xl bg-[#AD4844] outline-[#AD4844] outline outline-2 px-10 py-3" value={selectProductAmount} onChange={(ev) => setProductAmount(Number(ev.target.value))}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-9">
            {products?.data?.length > 0 &&
              products.data.map((product) => (
                <Product key={product.id} {...product} />
              ))}
          </div>
          <div ref={ref} className="mt-[-20px]"></div>
        </section>
      </Container>
    </div>
  );
};

export default Products;
