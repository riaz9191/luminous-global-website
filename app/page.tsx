import Hero from "@/components/sections/hero"
import Markets from "@/components/sections/markets"
import WhyChooseUs from "@/components/sections/why-choose-us"
import WhoWeAre from "@/components/sections/who-we-are"
import MotionDiv from "@/components/ui/motion-div"

export default function LuminousGlobalWebsite() {
  return (
    <>
      <div className="max-w-full">
        <MotionDiv>
          <Hero />
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
