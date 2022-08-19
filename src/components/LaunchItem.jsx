import { HiCalendar } from "react-icons/hi";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { Box, Flex, Text, Spacer, Tag, Icon, Button } from "@chakra-ui/react";

export function LaunchItem(launch) {

    return (
        <Box bg="gray.100" p={4} m={4} borderRadius="lg">
            <Flex display="flex">
                <Text fontSize="xl">
                    Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                </Text>
                <Spacer />
                <Tag p={2} bg={launch.launch_success ? "green.400" : "red.400"} color="white">
                    {launch.launch_success ? "SUCCESS" : "FAILURE"}
                </Tag>
            </Flex>
            <Flex align="center">
                <Icon as={HiCalendar} color="gray.500" />
                <Text fontSize="sm" ml={1} color="gray.500">
                    {dayjs(launch.launch_date_local.split("T")[0])
                    .locale("es")
                    .format('D [de] MMMM [de] YYYY')}
                </Text>
            </Flex>
            <Button mt={3} colorScheme="blue">
                View More
            </Button>
        </Box>
    );
}
