import { ReactElement } from "react";
import Heading from "components/Heading";
import SubHeading from "components/SubHeading";
import { AsType, Color } from "types/Heading";
import Text from "components/Text";
import PageTitle from "components/PageTitle";
import Logo from "components/icons/Logo";
import BoxColor from "components/BoxColor";
import NavBar from "components/NavBar";
import MainButton, { ButtonType } from "components/MainButton";
import ALink from "components/ALink";
import Selector, { Orientation, SelectorTypes } from "components/Selector";
import NavText from "components/NavText";
import confetti from "https://cdn.skypack.dev/canvas-confetti";

export default function Home(): ReactElement {
  return (
    <>
      <div className="container">
        <PageTitle>DESIGN SYSTEM | Space tourism website</PageTitle>
        <header>
          <Logo />
          <Heading number={6} as={AsType.SPAN}>
            DESIGN SYSTEM
          </Heading>
        </header>
        <main>
          <Heading number={5}>
            <Text as={AsType.SPAN} opacity={0.25} bold>
              01{" "}
            </Text>{" "}
            COLORS
          </Heading>
          <div className="colors">
            <BoxColor
              backgroundColor="#0B0D17"
              textColor="#FFF"
              rgb="11, 13, 23"
              hsl="230°, 35%, 7%"
            ></BoxColor>
            <BoxColor
              backgroundColor="#D0D6F9"
              textColor="#000"
              rgb="208, 214, 249"
              hsl="231°, 77%, 90%"
            ></BoxColor>
            <BoxColor
              backgroundColor="#FFFFFF"
              textColor="#000"
              rgb="255, 255, 255"
              hsl="0°, 0%, 100%"
            ></BoxColor>
          </div>
          <Heading number={5}>
            <Text as={AsType.SPAN} opacity={0.25} bold>
              02{" "}
            </Text>{" "}
            TYPOGRAPHY
          </Heading>
          <div className="typography">
            <Text color={Color.Secondary}>
              Heading 1 - Bellefair Regular - 150px
            </Text>
            <Heading number={1}>EARTH</Heading>
            <Text color={Color.Secondary}>
              Heading 2 - Bellefair Regular - 100px
            </Text>
            <Heading number={2}>VENUS</Heading>
            <Text color={Color.Secondary}>
              Heading 3 - Bellefair Regular - 56px
            </Text>
            <Heading number={3}>JUPITER & SATURN</Heading>
            <Text color={Color.Secondary}>
              Heading 4 - Bellefair Regular - 32px
            </Text>
            <Heading number={4}>URANUS, NEPTUNE, & PLUTO</Heading>
            <Text color={Color.Secondary}>
              Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space
            </Text>
            <Heading number={5}>SO, YOU WANT TO TRAVEL TO SPACE</Heading>
            <Text color={Color.Secondary}>
              Subheading 1 - Bellefair Regular - 28px
            </Text>
            <SubHeading number={1} as={AsType.P}>
              384,400 km
            </SubHeading>
            <Text color={Color.Secondary}>
              Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
              Space
            </Text>
            <SubHeading number={2} as={AsType.P}>
              AVG. DISTANCE
            </SubHeading>
            <Text color={Color.Secondary}>
              Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
            </Text>
            <p className="navText">EUROPA</p>
            <Text color={Color.Secondary} opacity={0.5}>
              Body Text
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
              nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
              nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
              libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
              mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
              aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
              mattis vel, nisi.{" "}
            </Text>
          </div>
          <Heading number={5}>
            <Text as={AsType.SPAN} opacity={0.25} bold>
              03{" "}
            </Text>{" "}
            INTERACTIVE ELEMENTS
          </Heading>
          <NavBar>
            <ALink href="/">HOME</ALink>
            <button
              onClick={() => {
                confetti({
                  angle: -90,
                  spread: 200,
                  ticks: 500,
                  decay: 0.85,
                  origin: { x: 0.5, y: 0 },
                  particleCount: 100,
                  scalar: 1.2,
                  colors: [Color.White, Color.Secondary],
                });
              }}
            >
              HOVERED
            </button>
            <ALink href="/idle">IDLE</ALink>
          </NavBar>
          <section>
            <MainButton
              type={ButtonType.BUTTON}
              onClick={() => {
                confetti({
                  angle: 45,
                  origin: { x: 0, y: 0.5 },
                  particleCount: 100,
                  scalar: 1.2,
                  colors: [Color.White, Color.Secondary],
                });
              }}
            >
              <Heading number={4} as={AsType.SPAN} color={Color.Primary}>
                Explore
              </Heading>
            </MainButton>
            <MainButton type={ButtonType.ANCHOR} href="/somewhere">
              <Heading number={4} as={AsType.SPAN} color={Color.Primary}>
                Explore
              </Heading>
            </MainButton>
            <Selector
              id="computer parts"
              type={SelectorTypes.DOTS}
              orientation={Orientation.HORIZONTAL}
            >
              <NavText>Keyboard</NavText>
              <NavText>Screen</NavText>
              <NavText>Mouse</NavText>
            </Selector>
            <Selector
              id="Planets"
              type={SelectorTypes.DOTS}
              orientation={Orientation.VERTICAL}
            >
              <NavText>MOON</NavText>
              <NavText>MARS</NavText>
              <NavText>EUROPE</NavText>
            </Selector>
            <Selector id="colors" orientation={Orientation.HORIZONTAL}>
              <NavText>Red</NavText>
              <NavText>Green</NavText>
              <NavText>Blue</NavText>
            </Selector>
            <Selector id="family" orientation={Orientation.VERTICAL}>
              <NavText>Sister</NavText>
              <NavText>Brother</NavText>
              <NavText>Mother</NavText>
            </Selector>
            <Selector
              id="words"
              type={SelectorTypes.SLIDER}
              orientation={Orientation.HORIZONTAL}
            >
              <NavText>Sun</NavText>
              <NavText>Stellar</NavText>
              <NavText>Meat</NavText>
            </Selector>
            <Selector
              id="Convoy2"
              type={SelectorTypes.SLIDER}
              orientation={Orientation.VERTICAL}
            >
              <NavText>Saturn</NavText>
              <NavText>Stellar</NavText>
              <NavText>Carne</NavText>
            </Selector>
          </section>
        </main>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/crew/background-crew-desktop.jpg" alt="" />
      <style jsx>{`
        .container {
          margin: 0 auto;
          padding: 16px;
        }
        :global(img) {
          max-width: 100%;
          min-width: 100%;
          width: 100vw;
          transform: rotate(180deg);
        }
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 176px;
          max-width: 1110px;
          margin: 0 auto;
        }
        main {
          max-width: 1154px;
          margin: 0 auto;
        }
        .typography {
          column-width: 544px;
          column-gap: 38.5px;
        }
        section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 544px));
          grid-gap: 38.5px;
          margin-top: 32px;
          justify-content: center;
        }
        .colors {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 31px;
        }
      `}</style>
    </>
  );
}
