'use client'

import React, { useEffect, useRef } from 'react';
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { Link } from 'react-scroll';
import Image from 'next/image';
import { MdEmail } from "react-icons/md";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaJava, FaPython, FaReact, FaDocker, FaAws } from "react-icons/fa";
import { SiCplusplus, SiCsharp, SiExpress, SiLatex, SiMongodb, SiJira } from "react-icons/si";
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaUnity } from 'react-icons/fa6';
import { Viewport } from 'next';

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function Home() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const projectsItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const timelineItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const awardsRef = useRef(null);
  const awardsInView = useInView(awardsRef, { once: true });

  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: true });

  const animateBg = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: .25,
        transition: {
          pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
          opacity: { delay, duration: 2 }
        }
      };
    }
  }

  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 1125]);

  return (
    <div id='top' className='bg-neutral relative'>
      {/* NAVBAR */}
      <div className="sticky top-0 z-50 navbar bg-base-100">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to='top' smooth>Welcome</Link></li>
            <li><Link to='about' smooth>About me</Link></li>
            <li><Link to='skills' smooth>Skills</Link></li>
            <li><Link to='projects' smooth>Projects</Link></li>
            <li><Link to='awards' smooth>Awards</Link></li>
            <li><Link to='footer' smooth>Connect</Link></li>
          </ul>
        </div>

        <div className="navbar-center mx-auto hidden lg:flex">
          <ul className="menu menu-horizontal mx-auto px-1">
            <li><Link to='top' smooth>Welcome</Link></li>
            <li><Link to='about' smooth>About me</Link></li>
            <li><Link to='skills' smooth>Skills</Link></li>
            <li><Link to='projects' smooth>Projects</Link></li>
            <li><Link to='awards' smooth>Awards</Link></li>
            <li><Link to='footer' smooth>Connect</Link></li>
          </ul>
        </div>
      </div>


      <div className="prose lg:prose-xl divide-y divide-solid bg-neutral min-w-full">
        {/* INTRODUCTION */}
        <div className="mb-32 lg:mb-0 lg:min-h-screen mx-auto relative z-10" style={{ overflow: 'hidden' }}>
          {/* CLOUD BACKGROUND */}
          <motion.div
            id="introduction"
            className='absolute -top-32 z-0'
            style={{ y: y, scale: scale }}
          >
            <motion.svg className='z-0' width="100vw" height="100vh" viewBox="0 0 1440 863" fill="none" xmlns="http://www.w3.org/2000/svg" initial="hidden" animate="visible">
              <motion.path strokeWidth={2}
                stroke="#22577E"
                variants={animateBg}
                custom={1} className='z-0' fillRule="evenodd" clipRule="evenodd" d="M352.861 -34.0078C381.383 -57.943 416.173 -72 453.72 -72C550.524 -72 629 21.4412 629 136.707L629 136.929L629 137.191C628.999 137.353 628.999 137.515 628.998 137.677L452.712 137.677L278.441 137.677L0 137.677C0.696036 82.133 61.0802 34.8062 145.863 16.1271C176.671 -25.7121 224.517 -52.5854 278.244 -52.5854C305.04 -52.5854 330.374 -45.9004 352.861 -34.0078ZM1057.79 55.9869C1031.01 7.58824 988.88 -23.6129 941.5 -23.6129C885.288 -23.6129 836.47 20.3052 811.904 84.7556C801.073 80.3923 789.304 78 777 78C723.428 78 680 123.349 680 179.289L680 179.421L680 179.613H874L887.001 179.613H1088L1201 179.613H1395L1439.99 179.613L1440 179.534L1440 179.468L1440 179.406C1440 179.34 1440 179.275 1440 179.21C1440 167.338 1421.58 156.304 1390.01 147.133C1377.14 106.956 1340.81 78 1298 78C1271.42 78 1247.33 89.1676 1229.81 107.255C1195.52 75.8721 1139.41 55.4194 1076 55.4194C1069.86 55.4194 1063.78 55.6114 1057.79 55.9869ZM411.923 278H490.999L491 277.896L491 277.764C491 236.918 433.236 203.806 361.981 203.806C333.723 203.806 307.587 209.014 286.333 217.846C270.851 211.086 252.559 207.179 232.962 207.179C210.741 207.179 190.197 212.202 173.525 220.714C103.903 229 54 251.433 54 277.807L54.0003 277.916L54.0009 278H132.036H232.963H333.888H411.923ZM529 328H609.02H738.779H765.814H822.043H980.999C981 327.986 981 327.971 981 327.957C981 320.558 932.829 314.559 873.407 314.559C842.002 314.559 813.74 316.235 794.07 318.907C777.771 316.67 755.512 315.132 730.458 314.69C714.49 302.604 677.265 294.129 633.89 294.129C575.961 294.129 529 309.245 529 327.892L529 327.945L529 328ZM1423 294.129H1234.13H1194.04H1092.48H875.107H778L778 294.058L778 293.985C778 269.123 810.507 248.968 850.607 248.968C872.713 248.968 892.512 255.093 905.829 264.755C926.276 255.969 955.689 249.09 990.251 245.229C1010.88 225.42 1043.81 212.599 1080.9 212.599C1109.46 212.599 1135.55 220.2 1155.46 232.739C1169.23 228.79 1184.56 226.587 1200.72 226.587C1210.57 226.587 1220.11 227.405 1229.18 228.938C1249.76 213.374 1277.72 203.806 1308.52 203.806C1371.75 203.806 1423 244.116 1423 293.841L1423 294.129ZM1696 465.839L1377.34 465.839H976.147C976.145 465.677 976.145 465.515 976.145 465.353C976.145 407.721 1065.96 361 1176.74 361C1219.71 361 1259.53 368.028 1292.17 379.996C1317.91 374.05 1346.9 370.707 1377.57 370.707C1439.05 370.707 1493.81 384.144 1529.07 405.064C1626.1 414.403 1695.2 438.066 1696 465.839ZM485.423 424.993C516.07 400.794 564.282 385.194 618.505 385.194C682.838 385.194 738.707 407.153 766.821 439.378C779.216 437.196 792.685 436 806.767 436C868.076 436 917.778 458.674 917.778 486.645L917.778 486.731L917.777 486.806L725.503 486.806L48.0081 486.807C48.0055 486.774 48.0034 486.742 48.0021 486.71C48.0013 486.692 48.0008 486.673 48.0004 486.655C48 486.638 47.9999 486.622 47.9999 486.605C47.9999 480.669 69.0778 475.152 105.211 470.567C119.942 450.478 161.521 436 210.511 436C240.936 436 268.502 441.584 288.554 450.628C327.791 434.936 392.011 424.71 464.578 424.71C471.61 424.71 478.563 424.806 485.423 424.993ZM1634.2 536L1544.89 536H1313.88L1134.08 536L1134.08 535.925V535.882C1134.08 515.459 1200.19 498.903 1281.73 498.903C1314.07 498.903 1343.98 501.507 1368.31 505.923C1386.03 502.543 1406.96 500.589 1429.39 500.589C1454.82 500.589 1478.33 503.101 1497.41 507.357C1577.09 511.5 1634.2 522.716 1634.2 535.903C1634.2 535.936 1634.2 535.968 1634.2 536ZM1090.59 561H999.011H819.568H755.218H573.301L573.3 560.985L573.3 560.979C573.3 557.279 628.429 554.28 696.434 554.28C732.375 554.28 764.72 555.117 787.231 556.453C805.884 555.335 831.358 554.566 860.032 554.345C878.306 548.302 920.908 544.065 970.548 544.065C1036.84 544.065 1090.59 551.623 1090.59 560.946V560.972L1090.59 561ZM329.485 544.065H329.484H67.4562C67.4558 544.017 67.4556 543.969 67.4556 543.921C67.4556 519.058 126.113 498.903 198.47 498.903C233.722 498.903 265.722 503.687 289.272 511.469C299.649 510.702 310.568 510.293 321.838 510.293C340.332 510.293 357.88 511.395 373.642 513.37C396.428 507.1 426.284 503.299 458.969 503.299C501.42 503.299 539.099 509.71 562.713 519.615C602.267 521.545 635.929 524.984 659.329 529.378C674.57 524.547 697.228 521.484 722.527 521.484C768.419 521.484 805.622 531.561 805.622 543.993C805.622 544.017 805.622 544.041 805.622 544.065H639.433H588.454H329.485ZM1020.34 664.419L1339 664.419C1338.2 650.533 1269.1 638.702 1172.07 634.032C1136.81 623.572 1082.05 616.854 1020.57 616.854C989.898 616.854 960.905 618.525 935.171 621.498C902.528 615.514 862.713 612 819.743 612C708.956 612 619.145 635.36 619.145 664.177C619.145 664.258 619.145 664.339 619.147 664.419H1020.34ZM-308.992 674.903H368.503H560.777C560.777 674.886 560.778 674.869 560.778 674.851L560.778 674.822C560.778 660.837 511.076 649.5 449.767 649.5C435.685 649.5 422.216 650.098 409.821 651.189C381.707 635.076 325.838 624.097 261.505 624.097C207.282 624.097 159.07 631.897 128.423 643.997C121.563 643.903 114.61 643.855 107.578 643.855C35.011 643.855 -29.2095 648.968 -68.4459 656.814C-88.498 652.292 -116.064 649.5 -146.489 649.5C-195.479 649.5 -237.058 656.739 -251.789 666.783C-287.922 669.076 -309 671.834 -309 674.802C-309 674.808 -309 674.814 -309 674.819C-309 674.829 -308.999 674.839 -308.998 674.849C-308.997 674.867 -308.995 674.885 -308.992 674.903ZM1187.89 699.5H1277.2L1277.2 699.485C1277.2 699.474 1277.2 699.463 1277.2 699.452C1277.2 692.858 1220.09 687.25 1140.41 685.178C1121.33 683.051 1097.82 681.795 1072.39 681.795C1049.96 681.795 1029.03 682.771 1011.31 684.462C986.984 682.254 957.073 680.952 924.733 680.952C843.185 680.952 777.078 689.23 777.078 699.441C777.078 699.461 777.078 699.48 777.079 699.5H956.884H1187.89ZM642.011 712H733.588L733.589 711.986L733.589 711.973C733.589 707.311 679.845 703.532 613.548 703.532C563.908 703.532 521.306 705.651 503.032 708.672C474.358 708.783 448.884 709.168 430.231 709.727C407.72 709.059 375.375 708.64 339.434 708.64C271.429 708.64 216.3 710.139 216.3 711.989L216.3 711.994L216.301 712H398.218H462.568H642.011ZM-27.5164 703.532L-27.515 703.532H231.454L282.433 703.532H337.488H448.622C448.622 703.52 448.622 703.508 448.622 703.496C448.622 697.281 411.419 692.242 365.527 692.242C340.228 692.242 317.57 693.773 302.329 696.189C278.929 693.992 245.267 692.273 205.713 691.307C182.099 686.355 144.419 683.15 101.969 683.15C69.2844 683.15 39.428 685.05 16.6423 688.185C0.880493 687.197 -16.6676 686.647 -35.1625 686.647C-46.4325 686.647 -57.3511 686.851 -67.7281 687.234C-91.2777 683.344 -123.278 680.952 -158.53 680.952C-230.887 680.952 -289.544 691.029 -289.544 703.46C-289.544 703.484 -289.544 703.508 -289.544 703.532H-27.5164ZM-182 776.21H136.66H537.853C537.854 776.191 537.854 776.172 537.855 776.153L537.855 776.127L537.855 776.088C537.855 761.68 448.044 750 337.257 750C294.287 750 254.472 751.757 221.829 754.749C196.095 753.262 167.102 752.427 136.434 752.427C74.9467 752.427 20.1898 755.786 -15.0676 761.016C-112.097 763.351 -181.203 769.267 -182 776.21ZM727.833 781.452H788.497H1465.99C1466 781.435 1466 781.418 1466 781.401C1466 779.917 1444.92 778.538 1408.79 777.392C1394.06 772.37 1352.48 768.75 1303.49 768.75C1273.06 768.75 1245.5 770.146 1225.45 772.407C1186.21 768.484 1121.99 765.927 1049.42 765.927C1042.39 765.927 1035.44 765.951 1028.58 765.998C997.93 759.949 949.719 756.048 895.495 756.048C831.162 756.048 775.293 761.538 747.179 769.594C734.784 769.049 721.315 768.75 707.233 768.75C645.924 768.75 596.222 774.419 596.222 781.411C596.222 781.425 596.222 781.438 596.223 781.452H727.833ZM289.423 793.75H379.921C379.922 793.74 379.922 793.73 379.922 793.72C379.922 788.615 313.815 784.476 232.267 784.476C199.927 784.476 170.016 785.127 145.692 786.231C127.973 785.386 107.039 784.897 84.6118 784.897C59.1809 784.897 35.6696 785.525 16.589 786.589C-63.0889 787.625 -120.2 790.429 -120.2 793.726C-120.2 793.734 -120.2 793.742 -120.199 793.75L-30.892 793.75H200.116L289.423 793.75ZM423.412 800H514.989H694.432H758.782H940.699C940.7 799.998 940.7 799.996 940.7 799.995C940.7 799.07 885.571 798.32 817.566 798.32C781.625 798.32 749.28 798.529 726.769 798.863C708.116 798.584 682.642 798.391 653.968 798.336C635.694 796.825 593.092 795.766 543.452 795.766C477.155 795.766 423.411 797.656 423.411 799.987C423.411 799.991 423.411 799.995 423.412 800ZM1446.54 795.766H1226.22H1184.52H1184.52H925.546H874.567H708.378L708.378 795.761C708.378 795.757 708.378 795.753 708.378 795.748C708.378 792.64 745.581 790.121 791.473 790.121C816.772 790.121 839.43 790.887 854.671 792.094C878.071 790.996 911.734 790.136 951.287 789.654C974.902 787.178 1012.58 785.575 1055.03 785.575C1087.72 785.575 1117.57 786.525 1140.36 788.092C1156.12 787.599 1173.67 787.323 1192.16 787.323C1203.43 787.323 1214.35 787.426 1224.73 787.617C1248.28 785.672 1280.28 784.476 1315.53 784.476C1387.89 784.476 1446.54 789.515 1446.54 795.73C1446.54 795.742 1446.54 795.754 1446.54 795.766ZM1793 851.105C1792.2 847.633 1723.1 844.675 1626.07 843.508C1590.81 840.893 1536.05 839.213 1474.57 839.213C1443.9 839.213 1414.91 839.631 1389.17 840.375C1356.53 838.879 1316.71 838 1273.74 838C1162.96 838 1073.14 843.84 1073.14 851.044C1073.14 851.064 1073.15 851.085 1073.15 851.105L1274.9 851.105H1793ZM822.503 853.726L883.167 853.726H1014.78C1014.78 853.719 1014.78 853.712 1014.78 853.706C1014.78 850.209 965.076 847.375 903.767 847.375C889.685 847.375 876.216 847.525 863.821 847.797C835.707 843.769 779.838 841.024 715.506 841.024C661.281 841.024 613.07 842.974 582.423 845.999C575.563 845.976 568.61 845.964 561.578 845.964C489.011 845.964 424.791 847.242 385.554 849.203C365.502 848.073 337.936 847.375 307.511 847.375C258.521 847.375 216.942 849.185 202.211 851.696C166.078 852.269 145 852.959 145 853.701C145 853.709 145.003 853.717 145.008 853.726H822.503ZM1231.08 859.875H1321.58L1410.88 859.875H1641.89L1731.2 859.875L1731.2 859.869L1731.2 859.863C1731.2 858.215 1674.09 856.812 1594.41 856.295C1575.33 855.763 1551.82 855.449 1526.39 855.449C1503.96 855.449 1483.03 855.693 1465.31 856.115C1440.98 855.563 1411.07 855.238 1378.73 855.238C1297.19 855.238 1231.08 857.307 1231.08 859.86C1231.08 859.865 1231.08 859.87 1231.08 859.875ZM1096.01 863L1187.59 863C1187.59 862.998 1187.59 862.995 1187.59 862.993C1187.59 861.828 1133.84 860.883 1067.55 860.883C1017.91 860.883 975.306 861.413 957.032 862.168C928.358 862.196 902.884 862.292 884.231 862.432C861.72 862.265 829.375 862.16 793.434 862.16C725.429 862.16 670.3 862.535 670.3 862.997C670.3 862.998 670.3 862.999 670.301 863H852.218H916.568H1096.01ZM294.961 860.883L164.456 860.883C164.456 860.877 164.456 860.871 164.456 860.865C164.456 857.757 223.113 855.238 295.47 855.238C330.722 855.238 362.723 855.836 386.272 856.809C396.649 856.713 407.568 856.662 418.838 856.662C437.333 856.662 454.881 856.799 470.642 857.046C493.428 856.263 523.285 855.787 555.969 855.787C598.419 855.787 636.098 856.589 659.713 857.827C699.266 858.068 732.929 858.498 756.329 859.047C771.57 858.443 794.228 858.061 819.527 858.061C865.419 858.061 902.622 859.32 902.622 860.874C902.622 860.877 902.622 860.88 902.622 860.883H791.488H380.605H294.961Z" fill="url(#paint0_linear_22_6405)" />
              <motion.defs>
                <linearGradient id="paint0_linear_22_6405" x1="742" y1="-72" x2="742" y2="863" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#134E4A" />
                  <stop offset="1" stopColor="#374151" />
                </linearGradient>
              </motion.defs>
            </motion.svg>
          </motion.div>

          {/* TEXT INTRODUCTION */}
          <motion.ul
            className="mx-auto relative container list-none z-10"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.li
              key={0}
              className="item z-10"
              variants={item}
            >
              <div className="mx-auto mt-32 z-10">
                <h1 className="text-center z-10">
                  {"Hey! I'm Ethan."}
                </h1>
              </div>
            </motion.li>
            <motion.li
              key={1}
              className="item"
              variants={item}
            >
              <div>
                <h4 className="text-center">An aspiring full-stack developer</h4>
              </div>
            </motion.li>
            <motion.li
              key={2}
              className="item"
              variants={item}
            >
              <div className="text-center mt-24">
                <a href='/Ethan%20Chen%20-%20Coop%20-%20Resume.pdf' target="_blank" rel="noopener noreferrer">Download my resume</a>
              </div>
            </motion.li>
          </motion.ul>
        </div>

        {/* ABOUT ME */}
        <div id="about">
          <div className='mx-auto lg:mx-40 my-16'>
            <div className="hero">
              <div className="hero-content flex-col lg:flex-row">
                <motion.div whileHover={{
                  scale: 1.1,
                  transition: {
                    type: "spring",
                    duration: 1
                  },
                }}>
                  <Image
                    src="/IMG_0098.jpg"
                    alt='Portrait'
                    width={309}
                    height={469}
                    className="max-w-sm rounded-full shadow-2xl" />
                </motion.div>
                <div className='ml-8'>
                  <h2 className="text-5xl font-bold">About me</h2>
                  <p className="py-0 lg:py-6">
                    {"I'm a student currently pursuing a degree in Computer Engineering at the University of Waterloo. I am passionate about software development and always seek opportunities to learn and grow. I'm currently seeking a co-op position for the Spring 2025 term."}
                    <br />
                    <br />
                    {"In my free time, I enjoy chatting with friends, working on personal projects, playing video games, and discovering new music."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div id="skills">
          <div className="mx-10 lg:mx-40 my-16">
            <h2>Skills</h2>
            <div className='mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
              <a href='https://nextjs.org/' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>NextJS</h2>
                <RiNextjsLine className='mx-auto my-4' size={'6rem'} />
              </a>
              <a href='https://react.dev/' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>React</h2>
                <FaReact className='mx-auto my-4' size={'6rem'} />
              </a>
              <a href='https://expressjs.com/' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>Express</h2>
                <SiExpress className='mx-auto my-4' size={'6rem'} />
              </a>
              <a href='https://tailwindcss.com/' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>Tailwind</h2>
                <RiTailwindCssFill className='mx-auto my-4' size={'6rem'} />
              </a>
              <a href='https://www.postgresql.org/' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>Postgres</h2>
                <BiLogoPostgresql className='mx-auto my-4' size={'6rem'} />
              </a>
              <a href='https://www.mongodb.com/' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>MongoDB</h2>
                <SiMongodb className='mx-auto my-4' size={'6rem'} />
              </a>
              <a href='https://www.python.org/' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>Python</h2>
                <FaPython className='mx-auto my-4' size={'6rem'} />
              </a>
              <a href='https://dotnet.microsoft.com/en-us/languages/csharp' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>C#</h2>
                <SiCsharp className='mx-auto my-4' size={'6rem'} />
              </a>
              <a href='https://isocpp.org/' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>C++</h2>
                <SiCplusplus className='mx-auto my-4' size={'6rem'} />
              </a>
              <a href='https://www.java.com/en/' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>Java</h2>
                <FaJava className='mx-auto my-4' size={'6rem'} />
              </a>
              <a href='https://unity.com/' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>Unity3D</h2>
                <FaUnity className='mx-auto my-4' size={'6rem'} />
              </a>
              <a href='https://www.latex-project.org/' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>LaTeX</h2>
                <SiLatex className='mx-auto my-4' size={'6rem'} />
              </a>
              <a href='https://www.docker.com/' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>Docker</h2>
                <FaDocker className='mx-auto my-4' size={'6rem'} />
              </a>
              <a href='https://aws.amazon.com/' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>AWS</h2>
                <FaAws className='mx-auto my-4' size={'6rem'} />
              </a>
              <a href='https://www.atlassian.com/software/jira' target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
                <h2 className='text-center'>Jira</h2>
                <SiJira className='mx-auto my-4' size={'6rem'} />
              </a>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div id="projects" className='min-h-screen'>
          <div className="mx-10 lg:mx-40 my-16">
            <h2 ref={projectsRef}>Projects</h2>

            <motion.ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 not-prose container list-none'
              variants={container}
              initial="hidden"
              animate={projectsInView ? "visible" : "hidden"}
            >
              <motion.li className="card bg-base-100 w-80 md:88 xl:w-96 shadow-xl item"
                key={0}
                variants={projectsItem}
              >
                <figure>
                  <Image
                    src="/geesehacks2025.png"
                    width={500}
                    height={500}
                    alt="GeeseHacks 2025" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">GeeseTalk</h2>
                  <p>{"A web app dedicated to offering gamified isolated training of public speaking and social skills at the user's convenience. Developed at GeeseHacks 2025 with Evan He, Rijul Chaddha, and Lawrence Zou."}</p>
                  <div className="card-actions justify-end">
                    <a
                      target="_blank"
                      href="https://geese-hacks-project.vercel.app/"
                      rel="noopener noreferrer"
                      className="btn btn-primary mx-1"
                    >Website</a>
                    <a
                      target="_blank"
                      href="https://devpost.com/software/geesetalk"
                      rel="noopener noreferrer"
                      className="btn btn-primary mx-1"
                    >Devpost</a>
                    <a
                      target="_blank"
                      href="https://github.com/RijulChaddha9504/GeeseHacks"
                      rel="noopener noreferrer"
                      className="btn btn-primary mx-1"
                    >Repository</a>
                  </div>
                </div>
              </motion.li>
              <motion.li className="card bg-base-100 w-80 md:88 xl:w-96 shadow-xl item"
                key={0}
                variants={projectsItem}
              >
                <figure>
                  <Image
                    src="/ece198.png"
                    width={500}
                    height={500}
                    alt="ECE 198" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Home Power Monitoring Device</h2>
                  <p>Configured and programmed two STM32F401RE boards in C to measure the power usage of an external device using a current transformer that is transmitted to a display board via UART. Developed with Matias Rivas and Gurvir Randhawa for ECE 198: Project Studio.</p>
                  <div className="card-actions justify-end">
                  </div>
                </div>
              </motion.li>
              <motion.li className="card bg-base-100 w-80 md:88 xl:w-96 shadow-xl item"
                key={0}
                variants={projectsItem}
              >
                <figure>
                  <Image
                    src="/portfolio.png"
                    width={500}
                    height={500}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">This portfolio!</h2>
                  <p>Built with NextJS, React, and Tailwind.</p>
                  <div className="card-actions justify-end">
                    <a
                      target="_blank"
                      href="https://github.com/chene0/portfolio"
                      rel="noopener noreferrer"
                      className="btn btn-primary mx-1"
                    >Repository</a>
                  </div>
                </div>
              </motion.li>
              <motion.li className="card bg-base-100 w-80 md:88 xl:w-96 shadow-xl item"
                key={1}
                variants={projectsItem}
              >
                <figure>
                  <Image
                    src="/vance.png"
                    width={500}
                    height={500}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Vance</h2>
                  <p>Work through problem sets with this assistant that will narrow your focus to your areas of weakness.</p>
                  <div className="card-actions justify-end">
                    <a
                      target="_blank"
                      href="https://vance-phi.vercel.app/"
                      rel="noopener noreferrer"
                      className="btn btn-primary mx-1"
                    >Website</a>
                    <a
                      target="_blank"
                      href="https://github.com/chene0/vance"
                      rel="noopener noreferrer"
                      className="btn btn-primary mx-1"
                    >Repository</a>
                  </div>
                </div>
              </motion.li>
              <motion.li className="card bg-base-100 w-80 md:w-88 xl:w-96 shadow-xl item"
                key={2}
                variants={projectsItem}
              >
                <figure>
                  <Image
                    src="/focar.png"
                    width={500}
                    height={500}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Focar</h2>
                  <p>Interact with Todoist right from your desktop.</p>
                  <div className="card-actions justify-end">
                    <a
                      target="_blank"
                      href="https://github.com/chene0/focarapp"
                      rel="noopener noreferrer"
                      className="btn btn-primary mx-1"
                    >Repository</a>
                  </div>
                </div>
              </motion.li>
              <motion.li className="card bg-base-100 w-80 md:w-88 xl:w-96 shadow-xl item"
                key={3}
                variants={projectsItem}
              >
                <figure>
                  <Image
                    src="/pilon.jpg"
                    width={500}
                    height={500}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Pilon</h2>
                  <p>Produce mathematical notation in real-time. Developed at Hack the North 2022 with Salman Youssef and Pravin Lohani.</p>
                  <div className="card-actions justify-end">
                    <a
                      target="_blank"
                      href="https://devpost.com/software/lon"
                      rel="noopener noreferrer"
                      className="btn btn-primary mx-1"
                    >Devpost</a>
                    <a
                      target="_blank"
                      href="https://github.com/chene0/HackTheNorth"
                      rel="noopener noreferrer"
                      className="btn btn-primary mx-1"
                    >Repository</a>
                  </div>
                </div>
              </motion.li>
              <motion.li className="card bg-base-100 w-80 md:w-88 xl:w-96 shadow-xl item"
                key={4}
                variants={projectsItem}
              >
                <figure>
                  <Image
                    src="/fps.PNG"
                    width={500}
                    height={500}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Untitled First Person Shooter</h2>
                  <p>Rely on your audio and attentiveness to thrive in this eerie shooter.</p>
                  <div className="card-actions justify-end">
                    <a
                      target="_blank"
                      href="https://github.com/chene0/personal-project"
                      rel="noopener noreferrer"
                      className="btn btn-primary mx-1"
                    >Repository</a>
                  </div>
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </div>

        {/* AWARDS */}
        <div id="awards">
          <div className="mx-10 lg:mx-40 my-16">
            <h2>Awards</h2>
            <div>
              <motion.ul
                className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical container list-none"
                ref={awardsRef}
                variants={container}
                initial="hidden"
                animate={awardsInView ? "visible" : "hidden"}
              >
                <motion.li
                  key={0}
                  className="item"
                  variants={timelineItem}
                >
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">July 2024</time>
                    <div className="text-lg font-black">University of Waterloo {"President's"} Scholarship of Distinction</div>
                    Ended with an average of 95% or higher in my final year of high school
                  </div>
                  <hr />
                </motion.li>
                <motion.li
                  key={1}
                  className="item"
                  variants={timelineItem}
                >
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-end mb-10">
                    <time className="font-mono italic">June 2024</time>
                    <div className="text-lg font-black">The Timothy Stiles Memorial Award</div>
                    Awarded for outstanding mathematical achievement in Senior School at Strathcona-Tweedsmuir School
                  </div>
                  <hr />
                </motion.li>
                <motion.li
                  key={2}
                  className="item"
                  variants={timelineItem}
                >
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">June 2024</time>
                    <div className="text-lg font-black">The Dr. Dorothy Goldstein Memorial Prize for Senior School Science</div>
                    Awarded for outstanding performance in science courses throughout Senior School at Strathcona-Tweedsmuir School
                  </div>
                  <hr />
                </motion.li>
                <motion.li
                  key={3}
                  className="item"
                  variants={timelineItem}
                >
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-end mb-10">
                    <time className="font-mono italic">December 2023</time>
                    <div className="text-lg font-black">Canadian Senior Mathematics Contest Certificate of Distinction</div>
                    Ranked in the top 25% of all contestants in the 2023 Canadian Senior Mathematics Contest hosted by the University of Waterloo
                  </div>
                  <hr />
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <footer id='footer' className="footer bg-neutral text-neutral-content items-center px-40 py-4">
          <aside className="grid-flow-col items-center">
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a href="https://www.linkedin.com/in/ethan-chen-9b214329a/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a href="https://github.com/chene0" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 98 96"
                className="fill-current">
                <path
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"></path>
              </svg>
            </a>
            <a href='mailto:ethansunchen@gmail.com'>
              <MdEmail size={'1.5rem'} />
            </a>
          </nav>
        </footer>
      </div>
    </div>
  )
}
