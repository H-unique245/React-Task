import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Heading, Image, SimpleGrid } from "@chakra-ui/react";
import BasketCard from "./BasketCard";
function Basket() {
  const { basket, loading_cart } = useSelector((store) => store.app);

  useEffect(() => {
       console.log("basket",basket);
  }, [basket]);
  return (
    <div>
      <Heading>Basket Page</Heading>
      {loading_cart ? (
        <Image
          src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-9.jpg"
          alt="loading"
        />
      ) : (
        <SimpleGrid
          columns={[1, 2, 3, 4]}
          gap="1.6rem"
          padding={{ base: "0.8rem", sm: "1rem", md: "2rem", lg: "3rem" }}
        >
          {basket?.map((product) => (
            <BasketCard product={product} key={product._id} />
          ))}
        </SimpleGrid>
      )}
    </div>
  );
}

export default Basket;
