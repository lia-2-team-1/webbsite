import * as React from "react"
interface BurgerProps {
    stroke: string;
    className: string;
}
export default function Burger({stroke, className}: BurgerProps) {
    return (

<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="101.67 6.59 570 574.04">
  <path fill="none" className={`${stroke}`} strokeWidth="10" d="M156.184 127.72c45.921-70.22 94.08-94.474 193.29-112.983s197.894 50.526 197.894 51.579c0 1.052 84.21 92.631 84.21 92.631 1.668-1.666-9.473 10.527-9.473 9.474 0-1.053-470.526 13.684-470.526 12.632 0 1.052-41.316 16.885 4.605-53.334zM118.333 229.167 641.667 212.5l11.666 9.167 13.334 90.833-12.5 60.833-10.834 8.334-341.666-5-173.334.833-14.166-17.5-7.5-55L110 249.167l8.333-20zM145 419.167s480 4.166 479.167 3.333c.833.833 6.666 7.5 5.833 6.667.833.833-10.833 24.166-11.667 23.333.834.833-36.666 47.5-37.5 46.667.834.833-39.166 32.5-40 31.666.834.834-74.166 34.167-75 33.334.834.833-48.333 11.666-49.166 10.833.833.833-74.167.833-75 0 .833.833-85-26.667-85.834-27.5.834.833-50.833-35.833-51.666-36.667.833.834-29.167-31.666-30.834-33.333-1.666-1.667-34.166-46.667-35-47.5.834.833 6.667-10.833 6.667-10.833z" opacity="NaN"/>
  <path fill="none" className={`${stroke}`} strokeWidth="10" d="m179.167 101.667 104.166 2.5M350 17.5v35.833M280.833 103.333 349.167 55M441.667 94.167l95-10M350.833 52.5l92.5 42.5M534.167 85.833l9.166-18.333M433.333 172.5l9.167-79.167M293.333 174.167l-11.666-70.834M537.5 84.167l78.333 85M135.833 230.833l7.5 29.167M112.5 345l30.833-87.5M233.333 293.333l-90-32.5M283.333 225l-49.166 67.5M364.167 223.333l52.5 10M463.333 328.333l-45.833-90M417.5 221.667l-5 12.5M464.167 328.333 437.5 379.167M233.333 293.333l23.334 82.5M465 333.333l105.833 8.334M627.5 216.667 571.667 345M586.667 382.5l-18.334-40.833M167.5 469.167l48.333 19.166M253.333 421.667 215 488.333M246.667 538.333l-33.334-52.5M371.667 425l27.5 10M415 420.833 400.833 437.5M469.167 515.833l-65.834-80M593.333 425.833l5.834 46.667M466.667 517.5 602.5 476.667M430.833 571.667l37.5-55"/>
</svg>
    )
}
