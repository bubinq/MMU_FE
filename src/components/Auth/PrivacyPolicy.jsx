import { Flex, Heading, Text } from "@chakra-ui/react";

export default function PrivacyPolicy() {
  return (
    <Flex
      mt={"8.4425rem"}
      w={"45%"}
      h={"580px"}
      overflow={"auto"}
      minW={"24rem"}
      p={["2.4375rem 3rem", "2.4375rem 3.6rem"]}
      flexDirection={"column"}
      gap={"1.875rem"}
      borderRadius={"0.9375rem"}
      backgroundColor={"#FFFFFD"}
      boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
      marginX={"auto"}
      fontSize={"1rem"}
      zIndex={"1"}
      position={"relative"}
    >
      <Flex fontWeight={"600"} fontSize={"24px"} as={"nav"} transition="0.05s">
        Privacy Policy
      </Flex>
      <Heading fontSize={"18px"}>Last Updated: [Date]</Heading>
      <Text fontSize={"14px"}>
        Welcome to our learning-oriented doctor appointment booking website!
        Before you proceed, let's get comfy with some serious yet lighthearted
        privacy matters. Remember, while we're here to have a bit of fun, we
        take your privacy seriously. So, grab your cup of virtual tea and let's
        dive in!
      </Text>
      <Flex flexDirection={"column"} gap={"10px"}>
        <Heading fontSize={"18px"}>1. Your Data is Our Secret Sauce</Heading>
        <Text fontSize={"14px"}>
          Here's the deal: we don't share your personal data with anyone. We're
          like that best friend who keeps your secrets – safely hidden from
          prying eyes. Your name, contact details, and any other info you
          provide are only used for the purpose of doctor appointment bookings.
          No secret ingredient sharing here!
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap={"10px"}>
        <Heading fontSize={"18px"}>2. Age is Just a Number</Heading>
        <Text fontSize={"14px"}>
          Guess what? We need you to be 18 years old or above to use our
          platform. No offense to our younger pals, but some medical stuff
          requires a bit more grown-up wisdom. So, if you're not old enough to
          buy lottery tickets, this isn't the appointment booking carnival for
          you.
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap={"10px"}>
        <Heading fontSize={"18px"}>3. Cookies, Not the Edible Kind</Heading>
        <Text fontSize={"14px"}>
          Like most websites, we use cookies. No, they won't steal your cookies
          from the pantry, but they help us understand how you use our site.
          It's like peeking into our kitchen to see which recipes you love most.
          Rest assured, these digital cookies don't munch on your data.
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap={"10px"}>
        <Heading fontSize={"18px"}>4. We're Not Mind Readers</Heading>
        <Text fontSize={"14px"}>
          We might know you need a doctor, but we're not psychic. So, if you
          share your symptoms and health info with us, we promise not to use our
          newfound mind-reading powers. Your health data stays locked away, and
          we only use it to help you find the right doctor.
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap={"10px"}>
        <Heading fontSize={"18px"}>5. Data Security Dance</Heading>
        <Text fontSize={"14px"}>
          Picture this: we're doing the security cha-cha to protect your data.
          Our servers have their own bouncers, and we've hired digital
          bodyguards to keep your info safe. We're as serious about security as
          a squirrel guarding its nut stash.
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap={"10px"}>
        <Heading fontSize={"18px"}>6. Third-Party Tango</Heading>
        <Text fontSize={"14px"}>
          Occasionally, we may dance with third-party services like analytics
          tools. Don't worry, it's a well-choreographed routine, and your
          personal info remains backstage. Just remember, we're the star of your
          data protection show.
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap={"10px"}>
        <Heading fontSize={"18px"}>7. Your Rights, Your Stage</Heading>
        <Text fontSize={"14px"}>
          You're the lead in this show! If you want to know what info we've got
          on you, just give us a shout. We'll even let you change or delete it
          if you're not feeling the rhythm anymore.
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap={"10px"}>
        <Heading fontSize={"18px"}>8. Updates, the Non-Boring Kind</Heading>
        <Text fontSize={"14px"}>
          Our privacy policy might change, but we'll let you know. No surprises,
          just like your favorite TV show's plot twists. So, check in now and
          then to stay in the loop.
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap={"10px"}>
        <Heading fontSize={"18px"}> 9. Have a Laugh with Us</Heading>
        <Text fontSize={"14px"}>
          We're all about learning, having a good time, and making awkward
          health topics a little less cringeworthy. But when it comes to your
          privacy, we're as serious as a cat that accidentally turned on the
          vacuum cleaner.
        </Text>
      </Flex>
      <Text fontSize={"14px"}>
        Remember, this website is a learning playground, so no real doctors here
        – just friendly AI and a bunch of code. If you need actual medical
        advice, consult a real, live, breathing human doc.
      </Text>{" "}
      <Text fontSize={"14px"}>
        Thanks for choosing us to be part of your online learning journey!
      </Text>
      <Text fontSize={"14px"}>
        If you've got privacy questions or just want to say hi, drop us a line
        at [Email Address].
      </Text>
      <Text fontSize={"14px"}>Happy browsing and learning!</Text>
      <Text fontSize={"14px"}>Sincerely, The Privacy Protector Penguins</Text>
    </Flex>
  );
}
