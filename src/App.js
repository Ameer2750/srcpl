import logo from './logo.svg';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Card from './components/Card';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import PortfolioPage from './components/PortfolioPage';
import pageImage from './assets/card2.jpg'
import Solutions from './pages/Solutions';
import Principles from './pages/Principles';
import { useState } from 'react';
import page2Image from './assets/testing2.jpg'
import page3Image from './assets/testing3.jpg'
import page4Image from './assets/card1.jpg'
import page5image from './assets/tresting4.jpg'

const dataP = [
  {
      id: 1,
      header: 'Our Product Portfolio',
      subHeader: 'Mitsubishi Products',
      img: pageImage,
      subContent: [
          {
              id: 1,
              subHeader: 'PLC (Programmable Logic Controllers):',
              para: 'Our Mitsubishi PLCs offer precision control and automation for a wide range of industrial applications. With advanced features and robust design, they form the backbone of efficient manufacturing processes.'

          },

          {
              id: 2,
              subHeader: 'HMI (Human Machine Interface):',
              para: 'Experience seamless interaction with your machines through our Mitsubishi HMI solutions. Intuitive interfaces, real-time data visualization, and user- friendly controls empower your workforce.'

          },
          {
              id: 3,
              subHeader: 'VFD (Variable Frequency Drives):',
              para: 'Efficiently control and optimize the speed of motors with our Mitsubishi VFDs. Enjoy energy savings, precise motor control, and enhanced overall system performance.'

          },
          {
              id: 4,
              subHeader: 'Servo Systems:',
              para: 'Mitsubishi Servo Systems deliver unparalleled precision and speed control, ensuring smooth and accurate motion in your automation processes.'
          },
          {
              id: 5,
              subHeader: 'Robots:',
              para: ' Embrace the future of manufacturing with Mitsubishi Robots. From precise assembly to intricate tasks, our robotic solutions elevate efficiency and productivity.'
          },
          {
              id: 6,
              subHeader: 'SCADA (Supervisory Control and Data Acquisition):',
              para: 'Monitor, control, and optimize your industrial processes with Mitsubishi SCADA solutions. Gain insights and enhance decision-making for seamless operations. '
          },
          {
              id: 7,
              subHeader: 'IPC (Industrial Personal Computers):',
              para: ''
          },
          {
              id: 8,
              subHeader: 'LVS (Low Voltage Switchgear):',
              para: 'Elevate your electrical distribution systems with our comprehensive range of Low Voltage Switchgear (LVS) solutions. Engineered for safety, efficiency, and reliability, our LVS products ensure seamless power distribution in diverse industrial applications. From circuit breakers to distribution panels, our LVS offerings empower your facility with the control and protection needed to meet the demands of modern industrial operations. Trust in [Your Company Name] to deliver cutting-edge LVS solutions for a resilient and efficient electrical infrastructure.'
          },
          {
              id: 9,
              subHeader: '21 CFR Compliance Products:',
              para: 'Our 21 CFR compliant products ensure regulatory compliance in the pharmaceutical and related industries, providing a secure and audit-ready solution. '
          },
      ]

  },
  {
      id: 2,
      header: 'Our Product Portfolio',
      subHeader: 'Phoenix Contact Products',
      img:page2Image,

      subContent: [
          {
              id: 1,
              subHeader: 'Wireless Products:',
              para: 'Phoenix Contact wireless solutions offer reliable and secure communication, facilitating connectivity across your industrial network.'

          },

          {
              id: 2,
              subHeader: 'Cloud Technologies: ',
              para: 'Harness the power of the cloud with Phoenix Contact Cloud Technologies. Drive efficiency, accessibility, and real-time data analysis for smarter decision-making. '

          },
          {
              id: 3,
              subHeader: 'PLC Next:',
              para: 'Revolutionize your control systems with Phoenix Contact PLC Next technology. Experience the next generation of programmable logic controllers for enhanced flexibility and adaptability.'

          },
          {
              id: 4,
              subHeader: 'Network Switches:',
              para: 'Power your industrial network infrastructure with Phoenix Contact Network Switches. Ensure robust and seamless communication, allowing your systems to operate efficiently and securely.'
          },
      
      ]

  },
  {
      id: 3,
      header: 'Our Product Portfolio',
      subHeader: 'Control Panels',
      img:page3Image,

      para:'Our custom-built control panels are designed to seamlessly integrate Mitsubishi and Phoenix Contact components, providing a centralized and efficient control hub for your operations. '
  },

  {
      id: 4,
      img:page4Image,
      header: 'Our Product Portfolio',
      subHeader: 'Complete Turnkey Solutions',
      para:'Experience a holistic approach to industrial automation with our complete turnkey solutions. From conceptualization to implementation, we deliver end-to-end solutions tailored to your specific requirements. '
  },
  {
      id: 5,
      img:page5image,
      header: 'Our Product Portfolio',
      subHeader: 'Services',
      para:'Our commitment goes beyond products. We offer a range of services, including system integration, maintenance, and training, ensuring that you get the most out of your automation investments. '
  }
]

function App() {

  const [portfolioPageData, setPortfolioPageData] = useState([]);
  console.log('portfolioPageData: ', portfolioPageData);

  const handlePortfolioData = (data) => {
    setPortfolioPageData(dataP[data]);
  }



  return (
    <Routes>
      <Route  path='/' element={<RootLayout handlePortfolioData={handlePortfolioData} />}>
        <Route index element={<Home />} />
        <Route path='/about-us' element={<About/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/our-portfolio' element={<Portfolio  handlePortfolioData={handlePortfolioData}/>}/>
        <Route path='/portfolio-page' element={<PortfolioPage data={portfolioPageData} />}/>
        <Route path='/solutions' element={<Solutions/>}/>
        <Route path='/principles' element={<Principles/>}/>
        
        {/* <Route path='about element={<Home />} />
        <Route index element={<Home />} />
        <Route index element={<Home />} />
        <Route index element={<Home />} /> */}
      </Route>

    </Routes>

   

  );
}

export default App;
