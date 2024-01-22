import React from 'react'
import pageImage from '../assets/card2.jpg'



const data = [{
  id: 1,
  header: 'Solutions',
  para: '',
  
  
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

}]
const Solutions = (props) => {
  return (
    <div className=' flex bg-[#f8f8f8] flex-col gap-2  justify-center mb-14 '>
      <div className='text-4xl bg-gray-200 my-14 py-14 text-orange-500 font-bold text-center my-10'>
        {data[0].header}
      </div>
      <div className='px-36 py-10'>
        <img src={props.img} />
      </div>

      <div className='text-4xl font-bold text-center text-orange-500  mb-6'>
        {data[0].para}
      </div>


      {data[0].subContent.map((i) => {
        return (
          <div key={i.id}>

          <div>
            <div className='p-5 mx-28'>
              <div className='text-2xl font-semibold mb-2'>
                <p>{i.subHeader}</p>
              </div>

              <div className='text-lg font-lg text-gray-400 '>
                <p>{i.para}</p>
              </div>
              {/* <div className='text-lg font-lg text-gray-400 '>
                <p>{i.para2}</p>
              </div> */}
            </div>
          </div>
          </div>
        )
      })}

    </div>
  )
}

export default Solutions