// import Image from "next/image";
// import styles from "./page.module.css";

import { Button } from "@/components/ui/button"
import { HStack } from "@chakra-ui/react"

const Dashboard = () => {
    return (
        <div>
          Hi I'm Dashboarddd

          <HStack>
            <Button>Click me</Button>
            <Button>Click me</Button>
        </HStack>
          
        </div>
      );
}

export default Dashboard;