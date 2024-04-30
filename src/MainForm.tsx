import { useForm } from 'react-hook-form'
import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react'

type TMainForm = {
  /** metraż mieszkania */
  livingArea: number
  price: number
}

export const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TMainForm>()
  const onSubmit = (data: TMainForm) => console.log(data)

  /* wkład własny */
  const downPayment = 0.2 * watch('price')
  const pricePerSquareMeter = watch('price') / watch('livingArea')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack align="stretch">
        <Card mt="2">
          <CardHeader>
            <Heading size="md">Dane wejściowe</Heading>
          </CardHeader>
          <CardBody>
            <FormControl>
              <FormLabel>Cena</FormLabel>
              <Input type="number" {...register('price')} />
              {errors.price && <span>Pole wymagane</span>}
            </FormControl>

            <FormControl mt="2">
              <FormLabel>Powierzchnia w m2</FormLabel>
              <Input type="number" {...register('livingArea')} />
            </FormControl>
          </CardBody>
        </Card>

        <Card mt="2">
          <CardHeader>
            <Heading size="md">Dane wyjściowe</Heading>
          </CardHeader>
          <CardBody>
            <Text>Wkład własny 20%: {downPayment}</Text>
            <Text>Cena za m2: {pricePerSquareMeter}</Text>
          </CardBody>
        </Card>
      </VStack>
    </form>
  )
}
