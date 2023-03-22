import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

function Home() {
  const { data, loading, /*error */ } = useSelector((store) => store.app);

  const dispatch = useDispatch();

const handleAddBasket=(data)=>{
  console.log(data);
}

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      {loading ? (
        <Image
          src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-9.jpg"
          alt="loading"
        />
      ) : (
        <SimpleGrid columns={[2, 3, 4]} gap="1.6rem" padding={"3rem"}>
          {data?.map((product) => (
            <Card maxW="sm" key={product._id}>
              <CardBody
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.08)",
                  bgColor: "blackAlpha.50",
                }}
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{product.name}</Heading>
                  <Text>{product.description}</Text>
                  <Stack direction={'column'}>
                  <Text color="pink.600" fontSize="xl" textDecoration={'line-through'}>
                    Price :  $ {product.price}
                  </Text>
                  <Text color="blue.600" fontSize="xl" >
                    Discounted Price :  $ {product.discountAmount}
                  </Text>
                  </Stack>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="blue" onClick={()=>handleAddBasket(product)}>
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
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
