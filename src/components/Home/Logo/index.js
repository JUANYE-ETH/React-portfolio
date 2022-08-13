import { useEffect, useRef } from 'react'
import { DrawSVGPlugin } from 'gsap/all'
import LogoS from '../../../assets/images/logo-j2.png'
import './index.scss'
import { gsap } from 'gsap/all'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  const tl = useRef(gsap.timeline())

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    tl.current
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 14,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="560pt"
        height="900pt"
        version="1.0"
        viewBox="0 0 560 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 910) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M3350 5823 c0 -1429 -5 -2717 -10 -2863 -15 -457 -57 -641 -172 -766
              -127 -138 -303 -204 -543 -204 -137 0 -236 19 -330 64 -262 123 -354 394 -386
              1136 -6 146 -13 267 -15 268 -2 4 -974 -128 -1357 -184 -93 -13 -171 -24 -174
              -24 -3 0 -3 -170 0 -377 5 -377 12 -473 53 -688 99 -532 328 -949 687 -1253
              237 -201 548 -350 887 -426 369 -82 844 -86 1219 -10 247 49 423 109 632 215
              472 240 796 612 969 1114 110 321 163 665 180 1184 11 323 14 4477 3 5044 l-6
              367 -819 0 -818 0 0 -2597z m1450 -210 c0 -2522 -2 -2719 -30 -3018 -75 -791
              -352 -1308 -878 -1635 -350 -216 -754 -320 -1253 -320 -452 0 -759 64 -1077
              224 -189 95 -321 194 -476 357 -361 380 -535 932 -536 1701 l0 156 38 6 c20 3
              269 37 552 76 283 39 527 73 542 76 l26 5 6 -83 c3 -46 10 -153 16 -238 27
              -394 107 -683 235 -850 154 -201 450 -302 785 -270 291 28 529 167 648 380 69
              123 114 332 132 615 6 102 10 1105 10 2797 l0 2638 630 0 630 0 0 -2617z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
