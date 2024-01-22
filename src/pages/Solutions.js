import React from 'react'
import pageImage from '../assets/card2.jpg'



const data = [{
  id: 1,
  header: 'Solutions',
  para: 'Driving Efficiency in Industrial Automations Discover how SRCPL revolutionizes the automotive manufacturing landscape with tailored automation solutions. From streamlined assembly processes to advanced inspection systems, we bring innovation to every stage of automotive production.',


  subContent: [
    {
      id: 1,
      subHeader: 'Robotic Precision in Assembly:',
      paraHead: 'Robotic Assembly: ',
      para: 'Enhance assembly line efficiency and precision with state-of-the-art robotic assembly solutions. ',
      para2Head: 'Robotic Palletizing:',
      para2: 'Optimize material handling and packaging processes through intelligent robotic palletizing systems.'
    },

    {
      id: 2,
      subHeader: 'Automated Inspection and Quality Control:',
      paraHead: 'Vision Systems for Automotive Inspection:',
      para: 'Ensure quality standards with cutting-edge vision systems designed for automotive parts inspection. ',
      para2Head: 'RFID Technology for Inventory Tracking:',
      para2: 'Enhance traceability and inventory management with RFID technology tailored for the automotive industry.',
      para3Head: 'Automated Testing and Inspection:',
      para3: 'Streamline quality assurance processes with automated testing and inspection systems. '

    },

    {
      id: 3,
      subHeader: 'Flexible Manufacturing for Customization:',
      paraHead: 'Flexible Manufacturing Systems:',
      para: 'Adapt to changing demands and customize production processes with flexible manufacturing systems.',
      para2Head: ' RFID Technology for Adaptive Manufacturing:',
      para2: 'Implement RFID technology for adaptive manufacturing processes, allowing seamless customization. '
    },

    {
      id: 4,
      subHeader: 'Predictive Maintenance for Efficiency: ',
      paraHead: 'Predictive Maintenance Solutions:',
      para: 'Maximize uptime and reduce downtime with predictive maintenance solutions tailored for automotive equipment',
    
    
    },

    {
      id: 5,
      subHeader: 'Smart Automation for Supply Chain Integration:',
      paraHead: 'Warehouse Management Systems (WMS): ',
      para: 'Optimize logistics and warehouse operations with advanced WMS tailored for the automotive supply chain.',
      para2Head: 'Automated Guided Vehicles (AGVs):',
      para2: 'Improve material handling and logistics efficiency through automated guided vehicles.'
    },

    {
      id: 6,
      subHeader: 'Digital Twin Technology for Simulation: ',
      paraHead: 'Digital Twin Technology: ',
      para: 'Leverage digital twin technology for virtual simulations, enabling precise analysis and optimization of automotive manufacturing processes.',
      para2Head: '',
      para2: ''
    },

    {
      id: 7,
      subHeader: 'Remote Monitoring for Operational Insight: ',
      paraHead: 'Customized Remote Monitoring Solutions: ',
      para: 'Gain real-time insights into automotive production processes with customized remote monitoring solutions.',
      para2Head: '',
      para2: ''
    },

    {
      id: 8,
      subHeader: 'Innovative Technologies for Smart Cars:',
      paraHead: 'Robotics in Automotive R&D: ',
      para: 'Propel innovation in automotive research and development with robotics and automation technologies.',
      para2Head: 'Automated Testing in Automotive Electronics:',
      para2: 'Ensure the reliability of automotive electronics through automated testing solutions.  Explore the future of automotive manufacturing with SRCPL. Our automation solutions drive efficiency, precision, and innovation across the automotive industry.'
    },

  ]

}]
const Solutions = (props) => {
  return (
    <div className=' flex bg-[#f8f8f8] flex-col gap-2   justify-center  py-6 '>
      <div className='text-4xl bg-gray-200 my-14 py-14 text-orange-500 font-semibold text-center my-10'>
        {data[0].header}
      </div>

      <div className='text-lg   text-gray-400  mb-6 mx-14 text-justify'>
        {data[0].para}
      </div>

      <div className='px-36 mx-14 py-10'>
        <img src={pageImage} />
      </div>




      {data[0].subContent.map((i) => {
        return (
          <div key={i.id}>

            <div>
              <div className='p-5 mx-24'>
                <div className='text-2xl font-semibold mb-2'>
                  <p>{i.subHeader}</p>
                </div>

                <div className='text-lg  text-gray-400 text-justify leading-8 '>
                  <p><span className='text-black font-semibold'>{i.paraHead}</span>  {i.para}</p>
                </div>
                <div className='text-lg  text-gray-400 text-justify leading-8 '>
                  <p><span className='text-black font-semibold'>{i.para2Head}</span>  {i.para2}</p>
                </div>
                <div className='text-lg  text-gray-400 text-justify leading-8 '>
                <p><span className='text-black font-semibold'>{i.para3Head}</span>  {i.para3}</p>
              </div>
              </div>
              
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Solutions