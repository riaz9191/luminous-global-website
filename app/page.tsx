import Hero from "@/components/sections/hero"
import Markets from "@/components/sections/markets"
import WhyChooseUs from "@/components/sections/why-choose-us"
import WhoWeAre from "@/components/sections/who-we-are"
import MotionDiv from "@/components/ui/motion-div"
import HeroSlider from "@/components/sections/slider/hero-slider"

export default function LuminousGlobalWebsite() {
  return (
    <>
      <div className="max-w-full">
        <MotionDiv>
          <Hero />
        </MotionDiv>
        <MotionDiv>
          <HeroSlider />
        </MotionDiv>
        <MotionDiv>
          <WhoWeAre />
        </MotionDiv>
        <MotionDiv>
          <WhyChooseUs />
        </MotionDiv>
        <MotionDiv>
          <Markets />
        </MotionDiv>
      </div>
    </>
  )
}
