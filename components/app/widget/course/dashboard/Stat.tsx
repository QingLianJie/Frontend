import {
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  WrapItem,
} from '@chakra-ui/react'

interface CourseStatProps {
  label: string
  number: string
  help?: string
}

const CourseStat = ({ label, number, help }: CourseStatProps) => {
  return (
    <WrapItem>
      <Stat me="4">
        <StatLabel whiteSpace="nowrap">{label}</StatLabel>
        <StatNumber fontSize="xl" whiteSpace="nowrap" fontWeight="600">
          {number}
        </StatNumber>
        {help && <StatHelpText>{help}</StatHelpText>}
      </Stat>
    </WrapItem>
  )
}

export default CourseStat
