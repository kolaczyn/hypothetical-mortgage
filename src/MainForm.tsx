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
import { formatPrice } from './utils/formatPrice.ts'
import { TMainForm } from './types.ts'
import { formFields, formFieldsIds } from './constants.ts'

export const MainForm = () => {
  const { register, watch } = useForm<TMainForm>()

  const downPayment = 0.2 * watch('price')
  const pricePerSquareMeter = watch('price') / watch('livingArea')
  const mortgage = watch('price') - downPayment
  const renovationCosts = watch('livingArea') * watch('renovationCostsPerM2')

  return (
    <form>
      <VStack align="stretch" spacing="6">
        <Card mt="10">
          <CardHeader>
            <Heading size="md">Dane wejściowe</Heading>
          </CardHeader>
          <CardBody>
            {formFieldsIds.map((x) => (
              <FormControl mb="2">
                <FormLabel>{formFields[x]}</FormLabel>
                <Input type="number" {...register(x)} />
              </FormControl>
            ))}
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">Dane wyjściowe</Heading>
          </CardHeader>
          <CardBody>
            <Text>Wkład własny 20%: {formatPrice(downPayment)}</Text>
            <Text>Cena za m2: {formatPrice(pricePerSquareMeter)}</Text>
            <Text>Wysokość kredytu: {formatPrice(mortgage)}</Text>
            <Text>
              Wkład własny + remont:{' '}
              {formatPrice(downPayment + renovationCosts)}
            </Text>
          </CardBody>
        </Card>
      </VStack>
    </form>
  )
}
