import BgImage1 from './assets/img_mv-1.png'
import BgImage2 from './assets/mv-index-2.jpg'
import BgImage3 from './assets/mv-index.jpg'
import BgImage4 from './assets/mv-index-2.jpg'
import BgImage5 from './assets/mv-index.jpg'
import page2Image from './assets/testing2.jpg'
import page3Image from './assets/testing3.jpg'
import page4Image from './assets/card1.jpg'
import page5image from './assets/tresting4.jpg'
import pageImage from './assets/card2.jpg'

export const dataP = [
    {
        id: 1,
        header: 'Products',
        subHeader: 'Mitsubishi Products',
        BgImage: BgImage1,
        img: pageImage,
        subContent: [
            {
                id: 1,
                img: pageImage,
                subHeader: 'PLC (Programmable Logic Controllers)',
                para: 'Our Mitsubishi PLCs offer precision control and automation for a wide range of industrial applications. With advanced features and robust design, they form the backbone of efficient manufacturing processes.',
                buttonLink: 'https://www.mitsubishielectric.com/fa/products/cnt/plc/index.html'
            },

            {
                id: 2,
                img: page2Image,

                subHeader: 'HMI (Human Machine Interface)',
                para: 'Experience seamless interaction with your machines through our Mitsubishi HMI solutions. Intuitive interfaces, real-time data visualization, and user- friendly controls empower your workforce.',
                buttonLink: 'https://www.mitsubishielectric.com/fa/products/hmi/got/index.html'
            },
            {
                id: 3,
                img: page3Image,

                subHeader: 'VFD (Variable Frequency Drives)',
                para: 'Efficiently control and optimize the speed of motors with our Mitsubishi VFDs. Enjoy energy savings, precise motor control, and enhanced overall system performance.',
                buttonLink: ' '
            },
            {
                id: 4,
                img: page4Image,
                subHeader: 'Servo Systems',
                para: 'Mitsubishi Servo Systems deliver unparalleled precision and speed control, ensuring smooth and accurate motion in your automation processes.',
                buttonLink: 'https://www.mitsubishielectric.com/fa/products/drv/servo/index.html'
            },
            {
                id: 5,
                img: page5image,
                subHeader: 'Robots',
                para: ' Embrace the future of manufacturing with Mitsubishi Robots. From precise assembly to intricate tasks, our robotic solutions elevate efficiency and productivity.',
                buttonLink: 'https://www.mitsubishielectric.com/fa/products/rbt/robot/index.html'
            },
            {
                id: 6,
                img: page3Image,
                subHeader: 'SCADA (Supervisory Control and Data Acquisition)',
                para: 'Monitor, control, and optimize your industrial processes with Mitsubishi SCADA solutions. Gain insights and enhance decision-making for seamless operations. ',
                buttonLink: ' '
            },

            {
                id: 7,
                img: page2Image,
                subHeader: 'IPC (Industrial Personal Computers)',
                para: ''
            },
            {
                id: 8,
                img: page3Image,
                subHeader: 'LVS (Low Voltage Switchgear)',
                para: 'Elevate your electrical distribution systems with our comprehensive range of Low Voltage Switchgear (LVS) solutions. Engineered for safety, efficiency, and reliability, our LVS products ensure seamless power distribution in diverse industrial applications. From circuit breakers to distribution panels, our LVS offerings empower your facility with the control and protection needed to meet the demands of modern industrial operations. Trust in [Your Company Name] to deliver cutting-edge LVS solutions for a resilient and efficient electrical infrastructure.',
                buttonLink: ' '
            },
            {
                id: 9,
                img: page4Image,
                subHeader: '21 CFR Compliance Products',
                para: 'Our 21 CFR compliant products ensure regulatory compliance in the pharmaceutical and related industries, providing a secure and audit-ready solution. ',
                buttonLink: ' '
            },
        ]

    },
    {
        id: 2,
        header: 'Products',
        subHeader: 'Phoenix Contact Products',
        img: page2Image,
        BgImage: BgImage2,


        subContent: [
            {
                id: 1,
                img: page2Image,

                subHeader: 'Wireless Products',
                para: 'Phoenix Contact wireless solutions offer reliable and secure communication, facilitating connectivity across your industrial network.',
                buttonLink: '/products-page/1'

            },

            {
                id: 2,
                img: page5image,

                subHeader: 'Cloud Technologies ',
                para: 'Harness the power of the cloud with Phoenix Contact Cloud Technologies. Drive efficiency, accessibility, and real-time data analysis for smarter decision-making. ',
                buttonLink:' '
            },
            {
                id: 3,
                img: page3Image,

                subHeader: 'PLC Next',
                para: 'Revolutionize your control systems with Phoenix Contact PLC Next technology. Experience the next generation of programmable logic controllers for enhanced flexibility and adaptability.',
                buttonLink: ' '

            },
            {
                id: 4,
                img: pageImage,

                subHeader: 'Network Switches',
                para: 'Power your industrial network infrastructure with Phoenix Contact Network Switches. Ensure robust and seamless communication, allowing your systems to operate efficiently and securely.',
                buttonLink: ' '
            },

        ]

    },
    {
        id: 3,
        header: 'Products',
        subHeader: 'Control Panels',
        img: page3Image,
        BgImage: BgImage3,


        para: 'Our custom-built control panels are designed to seamlessly integrate Mitsubishi and Phoenix Contact components, providing a centralized and efficient control hub for your operations. ',
        buttonLink: ' '
    },

    {
        id: 4,
        img: page4Image,
        BgImage: BgImage4,

        header: 'Products',
        subHeader: 'Complete Turnkey Solutions',
        para: 'Experience a holistic approach to industrial automation with our complete turnkey solutions. From conceptualization to implementation, we deliver end-to-end solutions tailored to your specific requirements. ',
        buttonLink: ' '
    },
    {
        id: 5,
        img: page5image,
        BgImage: BgImage5,

        header: 'Products',
        subHeader: 'Services',
        para: 'Our commitment goes beyond products. We offer a range of services, including system integration, maintenance, and training, ensuring that you get the most out of your automation investments. ',
        buttonLink: ' '
    }
]
