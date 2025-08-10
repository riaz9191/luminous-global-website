import Hero from "@/components/sections/hero"
import Markets from "@/components/sections/markets"
import WhyChooseUs from "@/components/sections/why-choose-us"
import WhoWeAre from "@/components/sections/who-we-are"
import MotionDiv from "@/components/ui/motion-div"

export default function LuminousGlobalWebsite() {
  return (
    <>
      <div className="max-w-full">
        <style jsx global>{`
          

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          }

          html {
            scroll-behavior: smooth;
          }

          .gradient-text {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .typewriter::after {
            content: "|";
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0%,
            50% {
              opacity: 1;
            }
            51%,
            100% {
              opacity: 0;
            }
          }

          /* Prevent body scroll when mobile menu is open */
          body.menu-open {
            overflow: hidden;
          }
        `}</style>

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
