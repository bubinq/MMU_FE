import { Flex, Heading, Text } from "@chakra-ui/react";

export default function PrivacyPolicy() {
  return (
    <Flex
      mt={"8.4425rem"}
      w={"45%"}
      h={"580px"}
      overflow={"auto"}
      minW={"24rem"}
      p={"2.4375rem 3.6rem"}
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
      <Flex
        fontWeight={"600"}
        fontSize={"24px"}
        as={"nav"}
        transition="0.05s"
        pos={"fixed"}
        zIndex={30}
      >
        User Agreement
      </Flex>
      <Heading mt={"70px"} fontSize={"16px"}>Last Updated: [Date]</Heading>
      <Text fontSize={"14px"}>
        Welcome to our lively and learning-centric doctor appointment booking
        website! We're excited to have you on board for some informative and
        entertaining experiences. Before we get started, let's get the legal
        dance moves down. By using our website, you're agreeing to some terms
        and conditions. Don't worry, we'll keep it simple and even throw in a
        few jokes along the way!
      </Text>

      <Text fontSize={"14px"}>
        1. Learning is Our Jam This website is all about learning,
        experimenting, and having a good time. It's like the science fair of
        doctor appointment booking platforms. We're not real doctors, just code
        magicians in the world of healthcare.
      </Text>

      <Text fontSize={"14px"}>
        2. Age Matters Here's the scoop: you need to be 18 years old or above to
        hang out here. It's like a cool kids' club, but without the secret
        handshake. Sorry, younger pals – this virtual playground is for the
        grown-ups.
      </Text>

      <Text fontSize={"14px"}>
        3. Be Respectful Respect is the key ingredient to our digital potluck.
        Be nice to each other, share knowledge, andremember that we're all here
        to learn and have a chuckle. No trolling or spamming allowed – we're
        more about unicorns than internet trolls.
      </Text>
      <Text fontSize={"14px"}>
        4. Intellectual Property Tap Dance Everything on this website is like
        our unique dance moves – copyrighted! Don't copy, reproduce,or use our
        stuff without our permission. Imagine it's a fancy dance move – you
        can't just steal it and show it off as your own.
      </Text>

      <Text fontSize={"14px"}>
        5. Links, Not Leaps of Faith We might share links to external sites, but
        they're like suggested dance partners, not blind leapsof faith. We're
        not responsible for what happens once you leave our dance floor, so
        shimmy with caution.
      </Text>

      <Text fontSize={"14px"}>
        6. Don't Break the Code Please don't try to break our website or do
        anything funky with the code. It's like sticking your foot out to trip
        someone on the dance floor – it's just not cool.
      </Text>

      <Text fontSize={"14px"}>
        7. Privacy Polka We're all about privacy – your info is our VIP guest.
        Check out our privacy policy for more details on how we treat your data.
        Just remember, no one likes an uninvited party crasher, especially when
        it's your personal info.
      </Text>

      <Text fontSize={"14px"}>
        8. Changes, the Cha-Cha Kind Like a dance routine, our terms might
        change. We'll keep you posted, so keep an eye out for updates. By
        sticking around, you're saying you're cool with the changes.
      </Text>

      <Text fontSize={"14px"}>
        9. Have Fun and Learn! We're here to make learning entertaining and
        healthcare topics a little less intimidating. So, have fun, stay
        curious, and remember, no real doctors here – just a bunch of friendly
        AI and pixels.Thanks for joining us on this dance floor of knowledge and
        learning! If you've got questions or want to bust out some moves, reach
        out to us at [Email Address]. Happy dancing and exploring!Sincerely, The
        Groovy Guide Gnomes
      </Text>
    </Flex>
  );
}
