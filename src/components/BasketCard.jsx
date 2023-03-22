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
import { MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  ERROR_BASKET,
  LOADING_BASKET,
} from "../Redux/actionType";
import { removeFromBasket } from "../Redux/action";

function BasketCard({ product }) {
  const { description, name, price, discountAmount, imageUrl } = product;
  const { loading_cart } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const handleRemoveBasket = () => {
    dispatch({ type: LOADING_BASKET });
    try {
     dispatch(removeFromBasket(product))
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
          rightIcon={<MdOutlineDelete color="red" />}
          variant="outline"
          isLoading={loading_cart}
          loadingText="Loading..."
          colorScheme="blue"
          textColor={"red.300"}
          m="auto"
          onClick={handleRemoveBasket}
        >
          Remove from cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default BasketCard;