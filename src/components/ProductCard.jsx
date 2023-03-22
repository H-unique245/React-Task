import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import {
  ERROR_BASKET,
  LOADING_BASKET,
  SUCCESS_BASKET,
} from "../Redux/actionType";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function ProductCard({ product }) {
  const { description, name, price, discountAmount, imageUrl } = product;
  const { loading_cart } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const handleAddBasket = () => {
    dispatch({ type: LOADING_BASKET });
    try {
      setTimeout(() => {
        dispatch({ type: SUCCESS_BASKET, payload: product });
        //   alert("item added");
        //   navigate("/cart");
      }, 500);
    } catch (err) {
      dispatch({ type: ERROR_BASKET });
    }
  };
  return (
    <Card maxW="sm">
      <CardBody
        transition="0.3s ease-in-out"
        _hover={{
          transform: "scale(1.08)",
          bgColor: "blackAlpha.50",
        }}
      >
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Image src={imageUrl} alt={name} borderRadius="lg" />
        </Stack>
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
          <Stack direction={"column"}>
            <Text
              color="pink.600"
              fontSize="xl"
              textDecoration={"line-through"}
            >
              Price : $ {price}
            </Text>
            <Text color="blue.600" fontSize="xl">
              Discounted Price : $ {discountAmount}
            </Text>
          </Stack>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          variant="solid"
          isLoading={loading_cart}
          loadingText="Loading..."
          colorScheme="blue"
          m="auto"
          onClick={handleAddBasket}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;