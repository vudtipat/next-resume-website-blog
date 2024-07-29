"use client";

import React from 'react'
import Timeline from '../components/Timeline'
import LabeledContainer from '../components/LabeledContainer';
import { motion } from 'framer-motion';

const timelineData: TimelineData[] = [
  {
      id: 1,
      company_name: "Plastic Omnium Auto Inergy (Thailand)",
      role: "Internship",
      description: "Description for event 1",
      period: "April 2024 - August 2024",
      jobResponsibility: [
        "Worked with logistic team to get requirement then design ui and database, develop and test windows application with .NET according business requirement.",
        "Setup laptop to install os and program for new employees.",
        "Support and assist employees with computer and laptop problems."
      ]
  },
  {
      id: 2,
      company_name: "Krungsri Nimble",
      role: "Software Developer",
      description: "Description for event 2",
      period: "August 2024 - Current",
      jobResponsibility: [        
        "Develop and maintain and tesing mobile application with Xamarin Form",
        "Develop and maintain and tesing services with .NET, Java(Spring boot)",
        "Develop and maintain and tesing web application with Angular.JS, React.JS",
        "Investigate and Solving Production Issue.",
        "Create batch job and task scheduler.",
        "Improvement Performance and Security System according to Security team",
        "Support and enhanced legacy system"
      ]
  }
];

const myProject: MyProjectModel[] = [
  {
    copanyName: "Plastic Omnium Auto Inergy",
    projectName: "Counting Part Application (.Net, MSSQL)",
    projectDetail: "It is a Windows application for logistics departments to count materials by validate with orders number using barcode scanners and weight scale to count.",
    myResponsibility: [
      "Get business requirement from Logistic team.",
      "Design ui and database schema.",
      "Develop and testing windows application according business requirement.",
      "Develop windows application to read input from weight scale and barcode scanner to process calulated weight and cross check with database"
    ]
  },
  {
    copanyName: "Krungsri Nimble",
    projectName: "Marketplace (React.js, .Net, Xamarin, MSSQL)",
    projectDetail: "It is a platform on kma-app (Krungsri mobile application) for Krungsri Bank customers to purchase products such as pizza, movie tickets, electrical appliances, etc. and pay with Krungsri Bank accounts.",
    myResponsibility: [
      "Worked as the squad to develop new features according business requirement.",
      "Coodinated with product owner and system analysis and 3'rd party and tester.",
      "Develop mobile app for new feature integrated with new pather via webview and use webview javascript interface(javascript injection) to process payment with krungsri bank",
      "Develop mobile app according business requirement from product owner and system analysis.",
      "Develop legacy service and squad's microservice to support new partner and new business requirement from product owner and system analysis.",
      "Maintainance and Improvement microservice and lagacy services.",
      "Investigate production issues and resolve problems and defects in areas related to my responsibility."
    ]
  },
  {
    copanyName: "Krungsri Nimble",
    projectName: "Social Commerce (Angular.js, Java Spring boot, Postgres)",
    projectDetail: "It is a platform for store owners who are Krungsri Bank customers to create Qr codes for payments and send them to their customers via Social Media channels such as Messenger, Line, etc.",
    myResponsibility: [""]
  },
  {
    copanyName: "Krungsri Nimble",
    projectName: "KMA Data Retention (.Net, MSSQL)",
    projectDetail: "It is a console application and task scheduler that is set to run every day. It eliminates sensitive customer information such as ID card numbers, first and last names, dates of birth that have been canceled using KMA for more than 10 years, and the results will be emailed to relevant stakeholders.",
    myResponsibility: [""]
  },
  {
    copanyName: "Krungsri Nimble",
    projectName: "Amlo Cooperative Transactions Report (.Net, MSSQL)",
    projectDetail: "It is a console application and task scheduler that is set to run every day. Collect suspicious transactions of withdrawals, transfers related to cooperatives. and format it to send to Amlo (Anti-Money Laundering Office).",
    myResponsibility: [""]
  },
  {
    copanyName: "Krungsri Nimble",
    projectName: "KMA Overhual (Xamarin, .Net, MSSQL)",
    projectDetail: "It is a project that will overhaul kma-app by ux/ui redesign and rearchiture of services for improve performance and easier to maintain",
    myResponsibility: [""]
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

export default function Page() {
  return (
    <div className="flex flex-col items-center h-[100%] py-8 px-0">
      <motion.p 
        className='font-bold text-2xl border-b-4 border-[#A91D3A]/90' 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}>About Me
      </motion.p>

      <motion.div 
        className='w-[90%] min-[770px]:w-[50%] mt-12 border-b border-[#A91D3A]/30'
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <p className='font-bold text-xl'>Introduce</p>
        <p className='my-2 px-7'>Hi !, My name is Vudtipat Saishana. My nick name is Tum. You can call me Tum. 
          I'm passionate software developer base in Thailand.
          I have a deep love for learning new programming language and new framework and new trend that 
          I interested and I strive to bring innovation and creativity into everything I do. </p>
      </motion.div>

      <motion.div  
        className='w-[90%] min-[770px]:w-[50%] mt-4 border-b border-[#A91D3A]/30'
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <p className='font-bold text-xl'>My Journey</p>
        <p className='my-2 px-7'>I started my Journey in software development when I was a kid, 
          I like to play computer game and surf the internet then I want to know how computer work. After that, 
          I set my goal to study Computer Engineering. After I graduated from high school, 
          I applied to study for a bachelor's degree in the Faculty of Computers Engineering at Kasetsart University, Sriracha Campus.
          After I graduated with a bachelor's degree, I applied to work at Krungsri nimble as a Software Developer. 
          I will push myself to continually learn and grow.
        </p>
      </motion.div>

      <motion.div 
        className='w-[90%] min-[770px]:w-[50%] mt-4 border-b border-[#A91D3A]/30'
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <p className='font-bold text-xl'>My Life Philosophy</p>
        <p className='my-2 px-7'>I believe in living a life driven by passion, purpose, and continuous growth. 
          To me, every day is an opportunity to learn something new, to be better than I was yesterday, and to contribute positively to the world around me. 
        </p>
      </motion.div>

      <motion.div 
        className='w-[90%] min-[770px]:w-[50%] mt-4 border-b border-[#A91D3A]/30'
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <p className='font-bold text-xl'>My Educations</p>
        <div className='px-7 mb-2'> 
          <div className='col-span-1 mt-4 flex flex-col'>
            <p className='font-extrabold text-lg'>Kasetsart University Sriracha Campus</p>
            <p className='font-bold text-base'>Bachelor of Engineering</p>
            <p className='font-bold text-sm'>Computer Engineering and Informatics</p>
            <p className='font-light text-sm'>2017 - 2021</p>
          </div>
          <div className='col-span-2 mt-4 flex flex-col'>
            <p className='font-extrabold text-lg'>Mathayom Watmaikrongtong School</p>
            <p className='font-bold text-base'>High School</p>
            <p className='font-bold text-sm'>Sciences - Math Program</p>
            <p className='font-light text-sm'>2011 - 2017</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className='w-[90%] min-[770px]:w-[50%] mt-4 border-b border-[#A91D3A]/30'
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <p className='font-bold text-xl'>My Work Experience</p>
        <Timeline timelineData={timelineData}/>
      </motion.div>    

      <motion.div 
        className='w-[90%] min-[770px]:w-[50%] mt-4 border-b border-[#A91D3A]/30'
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <p className='font-bold text-xl'>My Skills</p>
        <LabeledContainer cardTitle='Programming language'>
          <div className='grid grid-cols-2 2xl:grid-cols-4 gap-5 py-5'>
            <div className='flex flex-col items-center justify-end'>
              <img src={'python.png'} alt="Python" width={70}/>
              <p className='font-semibold'>Python</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'java.png'} alt="Java" width={70}/>
              <p className='font-semibold'>Java</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'c-sharp.png'} alt="C#" width={70}/>
              <p className='font-semibold'>C#</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'js.png'} alt="Javascript" width={70}/>
              <p className='font-semibold'>Javascript</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'dart.png'} alt="Dart" width={70}/>
              <p className='font-semibold'>Dart</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'golang.png'} alt="go" width={70}/>
              <p className='font-semibold'>Go</p>
            </div>
          </div>
        </LabeledContainer>
        <LabeledContainer cardTitle='Frontend'>
          <div className='grid grid-cols-2 2xl:grid-cols-4 gap-5 py-5'>
            <div className='flex flex-col items-center justify-end'>
              <img src={'react.webp'} alt="React.js" width={70}/>
              <p className='font-semibold'>React.js</p>
            </div>                                                               
            <div className='flex flex-col items-center justify-end'>
              <img src={'next.png'} alt="Next.js" width={70}/>
              <p className='font-semibold'>Next.js</p>
            </div> 
            <div className='flex flex-col items-center justify-end'>
              <img src={'angular.png'} alt="Angular.js" width={70}/>
              <p className='font-semibold'>Angular.js</p>
            </div>                          
            <div className='flex flex-col items-center justify-end'>
              <img src={'xamarin.png'} alt="Xamarin" width={70}/>
              <p className='font-semibold'>Xamarin</p>
            </div>                          
            <div className='flex flex-col items-center justify-end'>
              <img src={'flutter.png'} alt="Flutter" width={70}/>
              <p className='font-semibold'>Flutter</p>
            </div>                                                 
          </div>
        </LabeledContainer>
        <LabeledContainer cardTitle='Backend'>
          <div className='grid grid-cols-2 2xl:grid-cols-4 gap-5 py-5'>
            <div className='flex flex-col items-center justify-end'>
              <img src={'dotnet.png'} alt="dotnet" width={70}/>
              <p className='font-semibold'>.Net</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'spring.png'} alt="Spring Boot" width={70}/>
              <p className='font-semibold'>Spring Boot</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'express.png'} alt="Express.JS" width={70}/>
              <p className='font-semibold'>Express.JS</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'flask.png'} alt="Flask" width={70}/>
              <p className='font-semibold'>Flask</p>
            </div>
          </div>
        </LabeledContainer>
        <LabeledContainer cardTitle='Database'>
          <div className='grid grid-cols-2 2xl:grid-cols-4 gap-5 py-5'>
            <div className='flex flex-col items-center justify-end'>
              <img src={'mssql.png'} alt="mssql" width={70}/>
              <p className='font-semibold'>MS SQL Server</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'postgres.svg'} alt="postgres" width={70}/>
              <p className='font-semibold'>PostgreSQL</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'mongo.svg'} alt="mongo" width={70}/>
              <p className='font-semibold'>MongoDB</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'firestore.png'} alt="FireStore" width={70}/>
              <p className='font-semibold'>FireStore</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'googlestorage.png'} alt="gstorage" width={70}/>
              <p className='font-semibold'>Google Storage</p>
            </div>
          </div>
        </LabeledContainer>
        <LabeledContainer cardTitle='Other'>
          <div className='grid grid-cols-2 2xl:grid-cols-4 gap-5 py-5'>
            <div className='flex flex-col items-center justify-end'>
              <img src={'confluence.png'} alt="confluence" width={70}/>
              <p className='font-semibold'>Confluence</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'docker.svg'} alt="docker" width={70}/>
              <p className='font-semibold'>docker</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'git.svg'} alt="git" width={70}/>
              <p className='font-semibold'>Git</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'jira.svg'} alt="jira" width={70}/>
              <p className='font-semibold'>Jira</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'mermaid.svg'} alt="mermaid" width={70}/>
              <p className='font-semibold'>Mermaid</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'rabbitmq.svg'} alt="rabbitmq" width={70}/>
              <p className='font-semibold'>RabbitMQ</p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <img src={'datadog.svg'} alt="datadog" width={70}/>
              <p className='font-semibold'>Datadog</p>
            </div>
          </div>
        </LabeledContainer>
      </motion.div> 
      
      <motion.div 
        className='w-[90%] min-[770px]:w-[50%] mt-4'
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <p className='font-bold text-xl'>My Projects</p>
        {
          myProject.map((data, idx) => (
            <LabeledContainer key={idx} cardTitle={data.copanyName}>
              <div  className='flex flex-col py-5'>
                <p className='font-semibold text-lg'>{data.projectName}</p>
                <p className='font-semibold text-base mt-3'>About Project</p>
                <p>{data.projectDetail}</p>
                <p className='font-semibold text-base mt-3'>My Responsibility</p>
                {data.myResponsibility?.map((responsibility,idx) => <li key={idx}>{responsibility}</li>)}            
              </div>
            </LabeledContainer>
          ))
        }
      </motion.div>     
    </div>
  )
}
