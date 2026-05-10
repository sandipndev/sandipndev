import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "galoy",
    companyName: "Galoy",
    companyLogo:
      "https://cdn.prod.website-files.com/646f9b77a45b9e4c4377b0a2/655ebc171c75248c5fc3a947_favicon.png",
    isCurrentEmployer: true,
    positions: [
      {
        id: "engineering",
        title: "SDE II",
        employmentPeriod: {
          start: "03.2025",
        },
        employmentType: "Full-time",
        description: `
- Building next-gen Digital Asset backed banking platform: [Lana Bank](https://github.com/GaloyMoney/lana-bank)
  - Followed domain-driven design with [event-sourcing](https://galoymoney.github.io/es-entity/introduction.html) design pattern
  - Co-authored core crates: \`core/credit\`, \`core/report\`, \`core/accounting\`
  - Championed tasks into completion
- Definition of Done: Able to view my flow of control in [OTEL telemetry](http://opentelemetry.io/)
- Crafted data pipelines using [Meltano](https://meltano.com) and [Dagster](https://dagster.io) for analytics and reporting`,
        icon: "code",
        skills: [
          "Rust",
          "TypeScript",
          "OpenTelemetry",
          "Domain-driven Design",
          "Event Sourcing",
          "Data Pipelines",
          "Meltano",
          "Dagster",
        ],
        isExpanded: true,
      },
      {
        id: "sde",
        title: "SDE I",
        employmentPeriod: {
          start: "07.2022",
          end: "02.2025",
        },
        employmentType: "Full-time",
        description: `
- Principle maintainer of [Blink Wallet Mobile Application](https://www.blink.sv)
  - Shipped releases to 150K+ users on iOS and Android
  - Revamped UI/UX for better user experience
  - Features Developed: Notifications, Blink Circles, Theming, MFA, Enhanced Security
  - CI/CD:
    - Automated end to end testing using Detox
    - Created Alpha/Beta release pipelines
    - Staggered incremental rollouts to all stores
  - Mentored work on Multi-account support
- Release and Meta Release Management across all Galoy repositories
- Added Nix-based reproducible builds for Galoy repositories
- Tested backup and restore strategies for [SOC2](https://www.imperva.com/learn/data-security/soc-2-compliance/) compliance`,
        icon: "code",
        skills: [
          "TypeScript",
          "Node.js",
          "React Native",
          "Detox",
          "Rust",
          "Docker",
          "Terraform",
          "Kubernetes",
          "Concourse CI",
          "Nix",
          "GCP",
          "Bitcoin",
          "Lightning Network",
        ],
        isExpanded: false,
      },
      {
        id: "engineering-intern",
        title: "Engineering Intern",
        employmentPeriod: {
          start: "10.2021",
          end: "06.2022",
        },
        employmentType: "Part-time Internship",
        description: `
- Gained experience managing Bitcoin and Lightning infrastructure
- Built CI pipelines with Concourse to improve developer workflows
- Learned to design scalable Kubernetes architectures using MELT`,
        icon: "code",
        skills: [
          "Docker",
          "Kubernetes",
          "Terraform",
          "Concourse CI",
          "GCP",
          "Bitcoin",
          "Lightning Network",
        ],
        isExpanded: false,
      },
    ],
  },
  {
    id: "sob-bdk",
    companyName: "Bitcoin Dev Kit",
    companyLogo: "https://avatars.githubusercontent.com/u/62867074",
    positions: [
      {
        id: "summer-of-bitcoin",
        title: "Open Source Contributor",
        employmentPeriod: {
          start: "06.2021",
          end: "09.2021",
        },
        employmentType: "Internship",
        description: `
- Summer of Bitcoin Intern 2021 ([Alumni](https://www.summerofbitcoin.org/alumni))
- [Blog](https://bitcoindevkit.org/blog/hidden-power-of-bitcoin/) about Miniscript, Descriptors and PSBTs using Bitcoin
- Contributed to [bdk](https://github.com/bitcoindevkit/bdk) and bdk-cli crates
- Learnt Bitcoin and Rust in this journey`,
        icon: "code",
        skills: ["Rust", "Bitcoin", "Open Source", "CLI", "Git"],
      },
    ],
  },
  {
    id: "durbin-technologies",
    companyName: "Durbin Technologies",
    companyLogo: "/company-logos/durbin.jpg",
    positions: [
      {
        id: "associate-software-engineer",
        title: "Associate Software Engineer",
        employmentPeriod: {
          start: "06.2020",
          end: "10.2021",
        },
        employmentType: "Part-time",
        description: `
- Built **xIngest**, a complete Industrial IoT framework
  - Configures device actions and **monitors live sensor data** on dashboard
  - Supports secure connections, multiple devices, and **remote OTA updates**
- Created **Durbin Accounts**, a complete accounting and billing system
  - Self hosted Oauth2 system for companies
  - Lets users manage apps, pricing, and subscriptions in one place
- Built **Asset Tracker** for logistics companies
  - Tracks delivery agent performance and payroll automatically
  - Tracks real-time location of heavy-duty vehicles
  - Shows parameters about the vehicle using IoT sensors with xIngest
  - Managed **25 vehicles and workers** in real-time for 3 clients
- Played with 3D LiDAR scans into visuals for remote aerial inspection
- Designed **Durbin Meet**, a video calling platform
	- Offers chat, screen sharing, and admin-based participant control`,
        icon: "code",
        skills: [
          "Node.js",
          "React",
          "Python",
          "C++",
          "WebRTC",
          "MQTT",
          "OAuth2.0",
          "Electron",
          "IoT",
          "PostgreSQL",
        ],
        isExpanded: false,
      },
    ],
  },
  {
    id: "quinch-systems",
    companyName: "Quinch Systems",
    companyLogo: "/company-logos/quinch.jpg",
    positions: [
      {
        id: "iot-intern",
        title: "Full Stack Engineer",
        employmentPeriod: {
          start: "10.2019",
          end: "04.2020",
        },
        employmentType: "Internship",
        description: `
- Single-handedly built **RailSwitch** for **Indian Railways**
  - It is an [overhead equipment (OHE)](https://rrispat.com/wp-content/uploads/2020/05/2-1.jpg) control app
  - Remotely controls railway track electrification via isolator relays
  - Deployed at Howrah Station for real-time OHE actuation and feedback
  - Uses ESP8266, MQTT, and React Native
- Helped with R&D for a **COVID-19 Ventilator** with an Heart Surgeon
  - Measured PIP, PEEP with sensors
  - Visually showed live data from microcontrollers
  - Uses Raspberry-Pi, Linux and Electronics
- Built Fire Detection Engine using Computer Vision and Machine Learning
  - Deployed on surveillance camera network feed
  - For Linde and Skipper India
  - Uses Python, OpenCV, TensorFlow`,
        icon: "code",
        skills: [
          "IoT",
          "Embedded Systems",
          "C",
          "Python",
          "MQTT",
          "Sockets",
          "React Native",
          "OpenCV",
          "TensorFlow",
          "UI Design",
        ],
        isExpanded: false,
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "aot",
        title: "Academy of Technology, Adisaptagram",
        employmentPeriod: {
          start: "2018",
          end: "2022",
        },
        icon: "education",
        employmentType: "Bachelor's Degree",
        description: `
- Received Bachelor of Technology in **Computer Science & Engineering**
- Leadership Roles:
  - **AOT Community Lead** during COVID over Discord (2020-2022)
    - Hosted technical workshops
    - Coordinated competitive programming events
  - Class Representative (2018-2020)
  - Representative of Anti Ragging Committee (2018-2020)
- Developed College's **Magazine Website** with processes for content submission, review and publication
- Research : Decentralised Local Consensus for Auto-Debit during Transport 
- CGPA: 9.2, Highest SGPA: 10 (6th & 7th Semester)`,
        skills: ["Computer Science", "Blockchain", "Distributed Systems"],
      },
      {
        id: "mckv",
        title: "MC Kejriwal Vidyapeeth, Liluah",
        employmentPeriod: {
          start: "2005",
          end: "2018",
        },
        icon: "education",
        employmentType: "Primary and Secondary Schooling",
        description: `
- Recognized as **Outstanding Student** (Grades 4-8) for overall excellence
- Awarded **Emerging Developer** (Grade 8) for creating an early social media website
- Represented school in multiple **STEM and cultural competitions**, including:
  - 1st Place in Website Designing (Grades 7-9)
  - 1st Place in Fine Arts - District Level (Grades 4-5)
  - Top 3 in Spelling Bee (Grades 5-6)
  - 3rd Place in Debate (Grades 9-10)
- Maintained consistent Academic Excellence and all-round participation
- ICSE (Grade 10) 92.4% *|* ISC (Grade 12) 88.2%
- Extracurriculars: Guitar, Chess, Football
`,
        skills: [
          "Computer Science",
          "HTML/CSS",
          "PHP",
          "STEM",
          "Physics",
          "Guitar",
        ],
      },
    ],
  },
];
