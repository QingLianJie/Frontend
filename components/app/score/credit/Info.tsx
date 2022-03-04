import {Box, Divider, Heading, HStack, Icon, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {MdAccountTree} from "react-icons/md";
import CreditChart from "./Chart";
import {DATA_BEFORE_2019, DATA_AFTER_2019} from "../../../../data/credits-count-data";
import CardContainer from "../../../common/container/Card";
import useScore from "../../../../hooks/useScore";

const CreditInfo = () => {
    const { scores, isLoading, isError } = useScore()

    return isLoading ? null : isError ? null : (
        <CardContainer>
            <HStack alignItems="center" py="2" spacing="3">
                <Icon as={MdAccountTree} w="5" h="cg5" ms="1" />
                <Heading as="p" fontSize="lg" fontWeight="600">
                    学分统计
                </Heading>
            </HStack>
            <Divider mt={2} />
            <Box
                px={{ base: 0, md: 2 }}
                py={{ base: 2, md: 4 }}
                w="full"
                overflowX="auto"
            >
                <Tabs isFitted variant='soft-rounded' maxW={'100%'}>
                    <Box overflow={'auto'} mb={4} maxW={'100%'}>
                        <TabPanels minW={600}>
                            <TabPanel>
                                <CreditChart data={DATA_BEFORE_2019}/>
                            </TabPanel>
                            <TabPanel>
                                <CreditChart data={DATA_AFTER_2019}/>
                            </TabPanel>
                        </TabPanels>
                    </Box>
                    <TabList >
                        <Tab _selected={{'color':'white', 'bg':'#38a169'}} borderRadius={6}>旧课程分类（19之前）</Tab>
                        <Tab _selected={{'color':'white', 'bg':'#38a169'}} borderRadius={6}>新课程分类（19及之后）</Tab>
                    </TabList>
                </Tabs>
            </Box>
        </CardContainer>
    )
}

export default CreditInfo;