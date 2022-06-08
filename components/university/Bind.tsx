import { Card } from '@mui/material'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'

export const Bind = () => {
  return (
    <Card variant="outlined">
      <FormContainer>
        <TextFieldElement name="id" />
        <TextFieldElement name="password" />
      </FormContainer>
    </Card>
  )
}
