import { InfoIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Popover,
  PopoverBody,
  PopoverContent,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { PopoverTrigger } from "../../src/components/shared/navbar/DesktopNav";

export const Info = ({ children }: { children: ReactNode }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Icon
          as={InfoIcon}
          color="cyan.600"
          ml={1}
          cursor="pointer"
          _hover={{ color: "cyan.500" }}
        />
      </PopoverTrigger>
      <PopoverContent bg="gray.900" borderColor="gray.700">
        <PopoverBody>{children}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export const pricingCards = {
  kepluxOne: {
    tag: { label: "Recommended", colorScheme: "green" },
    price: 155,
    preText: "Pay monthly, we do everything",
    subText: "Per month, 6 months minimum",
    title: "Keplux One",
    subtitle: "Everything you need to get your business online",
    description:
      "We want you to do what you do best - run your business. Let us take the burden of managing your online presence off your shoulders. We design and build your website. We manage your hosting. We update your website. You simply pay every month for this service and you're ready to go.",
    features: [
      {
        content: <Text>1 Website Design with 2 Revisions</Text>,
      },
      {
        content: <Text>Up to 5 Pages</Text>,
      },
      {
        content: <Text>Responsive Design for Mobile and Desktop</Text>,
      },
      {
        content: <Text>Standard SEO and Accessibility</Text>,
      },
      {
        content: <Text>1 Email Address</Text>,
      },
      {
        content: (
          <Flex alignItems="center">
            <Text>Unlimited Content Edits</Text>
            <Info>
              Existing content can be updated at your request. Creating new
              content outside the scope of the original design may incur an
              additional charge.
            </Info>
          </Flex>
        ),
      },
      {
        content: <Text>Standard Hosting</Text>,
      },
    ],
  },
};
