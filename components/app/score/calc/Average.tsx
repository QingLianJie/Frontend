import { Text } from '@chakra-ui/react'
import { RiCalculatorLine } from 'react-icons/ri'
import CardContainer from '../../../common/container/Card'
import GroupContainer from '../../../common/container/Group'

const CalcAverage = () => {
  return (
    <GroupContainer title="加权平均分计算" icon={RiCalculatorLine}>
      <CardContainer>
        <Text>这个功能还在开发中</Text>
      </CardContainer>
    </GroupContainer>
  )
}

export default CalcAverage
