import {
  Title,
  Text,
  Container,
  Button,
  createStyles,
  rem,
  Image,
  Flex,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "absolute",
    height: "100vh",
    width: "100vw",
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage: "url('/blob-scene-dark.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.fn.smallerThan("xs")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    marginTop: theme.spacing.lg,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export default function HeroImageBackground() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <Image
          src="/etherspay-text.svg"
          alt="Etherspay"
          width={200}
          style={{ margin: "auto", display: "block" }}
        />
        <Title className={classes.title}>
          Etherspay is{" "}
          <Text component="span" inherit className={classes.highlight}>
            coming soon
          </Text>
        </Title>

        <Container size={640}>
          <Text
            size="lg"
            fw={600}
            color="dimmed"
            className={classes.description}
          >
            Decentralized Payment Processing using Web3. Join our discord server
            for any future updates.
          </Text>
        </Container>

        <Flex gap={10} className={classes.controls}>
          <Button size="lg" component="a" href="https://discord.gg/T4UeCsS3Uh">
            Join our Discord
          </Button>
          <Button
            size="lg"
            component="a"
            href="https://github.com/etherspay/"
            target="_blank"
            variant="outline"
            rel="noopener noreferrer"
          >
            Source code
          </Button>
        </Flex>
      </div>
    </div>
  );
}
