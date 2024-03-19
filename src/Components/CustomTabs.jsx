import { Tab, TabList, Tabs } from "@chakra-ui/react";

function CustomTabs() {
  return (
    <Tabs variant="soft-rounded" size="sm" colorScheme="yellow">
      <TabList color="white">
        {["All", "Action", "Comedy", "Horror"].map((tab, index) => (
          <Tab
            key={index}
            color="white"
            mx="3"
            borderColor="#363636"
            borderWidth="2px"
            fontSize="sm"
            _selected={{
              border: "2px solid yellow",
              color: "white",
            }}
          >
            {tab}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}

export default CustomTabs;
