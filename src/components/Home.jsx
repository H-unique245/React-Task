import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import { Image, Button, SimpleGrid, Box, Heading } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

function Home() {
  const { data, loading, error } = useSelector((store) => store.app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (error) {
    return <Box> Error .... </Box>;
  }
  return (
    <div>
      <Heading>Home Page</Heading>
      <Button
        onClick={() => {
          navigate("/cart");
        }}
      >
        Go To Cart Page
      </Button>
      {loading ? (
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
          {data?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </SimpleGrid>
      )}
    </div>
  );
}

export default Home;

// createdAt : "2022-05-27T06:08:41.242Z"
// description : "MYTHIC OIL "
// discountAmount : 670
// imageUrl : "https://www.lorealprofessionnel.in/-/media/master/in/products/packshotphoto/hair-care/mythic-oil/mythic-oil-creme-universelle.jpg?as=1&w=900&hash=02EFD039516FC75A8F8D4046A30298B91F281B87"
// isActive : true
// isDeleted : false
// name : "MYTHIC OIL "
// price : 760
// productBrandId : "7d2a2654-79f3-4abe-9430-3700c3ba5707"
// productCategoryId : "ddf7c1bf-81cb-4167-b377-6113ed43323f"
// rating : 4
// reviewCount : 0
// slugName : "MYTHIC OIL "
// updatedAt : null
