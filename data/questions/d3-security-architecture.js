// Domain 3 — Security Architecture (SY0-701). Add new questions at the end.
QBANK.add([
  // ---------------------------------------------------------------------------
  // 3.1 Security implications of architecture models
  // ---------------------------------------------------------------------------
  {
    id: "d3-001",
    domain: 3,
    objective: "3.1",
    topic: "Shared responsibility (IaaS)",
    type: "single",
    stems: [
      "A company migrates its application servers to virtual machines hosted by an IaaS provider. Under the shared responsibility model, which of the following is the company's responsibility?",
      "A cloud security analyst is reviewing a responsibility matrix for an infrastructure as a service deployment. Which of the following tasks should the analyst assign to the customer rather than the provider?",
      "During an audit of an IaaS environment, a manager asks which security duty stays with the organization instead of the cloud provider. Which of the following should the auditor identify?"
    ],
    correct: ["Patching the guest operating system"],
    wrong: ["Securing the physical data center", "Maintaining the hypervisor", "Replacing failed host hardware", "Securing the provider's network backbone"],
    explanation: "In IaaS, the provider secures the physical facility, host hardware, network, and virtualization layer. The customer is responsible for everything it builds on top: the guest OS (including patching), applications, data, and identities. Data center security, the hypervisor, and host hardware all belong to the provider.",
    hint: "IaaS: provider owns the building, the metal, and the hypervisor. You own the OS and up.",
    refs: [
      { title: "AWS Shared Responsibility Model", url: "https://aws.amazon.com/compliance/shared-responsibility-model/" },
      { title: "Microsoft Azure: Shared responsibility in the cloud", url: "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility" },
      { title: "Professor Messer SY0-701: Cloud Infrastructures (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cloud-infrastructures-sy0-701/" }
    ]
  },
  {
    id: "d3-002",
    domain: 3,
    objective: "3.1",
    topic: "Shared responsibility (SaaS)",
    type: "multi",
    stems: [
      "A company adopts a SaaS customer relationship management platform. Under the shared responsibility model, which of the following remain the company's responsibility?",
      "A CISO explains to executives that moving email to a SaaS provider does not move every security duty to the provider. Which of the following duties stay with the organization?"
    ],
    correct: ["Managing user accounts and access", "Classifying and protecting its data"],
    wrong: ["Patching the application code", "Patching the server operating system", "Physical security of the servers", "Maintaining the hypervisor"],
    explanation: "In every cloud model, including SaaS, the customer keeps responsibility for its data, its accounts and identities, and access management. In SaaS the provider runs and patches the application, the operating system, the virtualization layer, and the physical infrastructure.",
    hint: "Whatever the model, your data and your user accounts are always yours.",
    refs: [
      { title: "Microsoft Azure: Shared responsibility in the cloud", url: "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility" },
      { title: "AWS Shared Responsibility Model", url: "https://aws.amazon.com/compliance/shared-responsibility-model/" }
    ]
  },
  {
    id: "d3-003",
    domain: 3,
    objective: "3.1",
    topic: "Infrastructure as code",
    type: "single",
    stems: [
      "A DevOps team defines its cloud networks, firewall rules, and virtual servers in version-controlled template files and deploys them automatically. Which of the following does this describe?",
      "A security architect wants every new cloud environment to be built from the same reviewed definition files so that security settings are identical each time. Which of the following should the architect use?",
      "After several outages caused by manual configuration drift, a company decides to define its servers and networks in machine-readable files instead of making manual changes. Which of the following is the company adopting?"
    ],
    correct: ["Infrastructure as code"],
    wrong: ["Serverless architecture", "Microservices architecture", "Virtual desktop infrastructure", "Platform as a service", "Software-defined storage"],
    explanation: "Infrastructure as code (IaC) describes servers, networks, and security settings in machine-readable definition files that can be versioned, reviewed, and deployed repeatedly. This gives consistent builds and reduces configuration drift. Serverless and microservices describe how applications run, not how infrastructure is defined.",
    hint: "Templates + version control + repeatable builds = infrastructure as code.",
    refs: [
      { title: "Professor Messer SY0-701: Cloud Infrastructures (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cloud-infrastructures-sy0-701/" },
      { title: "NIST SP 800-204C: DevSecOps for a Microservices-based Application", url: "https://csrc.nist.gov/pubs/sp/800/204/c/final" }
    ]
  },
  {
    id: "d3-004",
    domain: 3,
    objective: "3.1",
    topic: "Serverless",
    type: "single",
    stems: [
      "A developer wants to run small pieces of code only when events occur, without managing operating systems or server capacity. Which of the following architectures best meets this need?",
      "A startup wants its cloud provider to handle all server provisioning, scaling, and OS patching, and it wants to pay only for the time its functions run. Which of the following should the startup choose?",
      "Which of the following cloud architectures removes server management from the customer and runs application functions on demand?"
    ],
    correct: ["Serverless architecture"],
    wrong: ["Infrastructure as a service", "Self-managed virtual machines", "On-premises server cluster", "Containers on self-managed hosts", "Bare-metal hosting"],
    explanation: "In a serverless architecture, the provider manages the servers, operating systems, and scaling, and runs the customer's functions only when they are called. The customer is responsible for the code and its configuration. IaaS, self-managed VMs, and self-managed container hosts all leave OS management with the customer.",
    hint: "No servers to manage + run on event + pay per execution = serverless.",
    refs: [
      { title: "Professor Messer SY0-701: Cloud Infrastructures (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cloud-infrastructures-sy0-701/" },
      { title: "AWS Lambda Developer Guide: What is AWS Lambda?", url: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html" }
    ]
  },
  {
    id: "d3-005",
    domain: 3,
    objective: "3.1",
    topic: "Microservices",
    type: "single",
    stems: [
      "A company rebuilds its large shopping application as many small, independent services that communicate through APIs. Which of the following architectures is the company using?",
      "An architect wants a fault or security issue in the payment function to have little effect on the search and catalog functions, and wants each function to be updated and scaled separately through APIs. Which of the following architectures best supports this?"
    ],
    correct: ["Microservices architecture"],
    wrong: ["Monolithic architecture", "Two-tier client/server architecture", "Mainframe architecture", "Thick client architecture"],
    explanation: "A microservices architecture splits an application into small, independent services that communicate through APIs. Each service can be scaled, updated, and secured separately, and a failure in one service has a limited effect on the others. The trade-off is a larger API attack surface. A monolithic application is one large code base where one fault can affect everything.",
    hint: "Many small services talking over APIs = microservices.",
    refs: [
      { title: "NIST SP 800-204: Security Strategies for Microservices-based Application Systems", url: "https://csrc.nist.gov/pubs/sp/800/204/final" },
      { title: "Professor Messer SY0-701: Cloud Infrastructures (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cloud-infrastructures-sy0-701/" }
    ]
  },
  {
    id: "d3-006",
    domain: 3,
    objective: "3.1",
    topic: "Physical isolation",
    type: "single",
    stems: [
      "A defense contractor stores classified designs on a network that has no physical or wireless connection to any other network. Which of the following does this describe?",
      "A security architect must make sure that a plant's safety system cannot be reached from the corporate network, even if a firewall rule is misconfigured. Which of the following provides the strongest isolation?",
      "Which of the following network designs uses physical separation so that the compromise of one network gives an attacker no path to the other?"
    ],
    correct: ["Air-gapped network"],
    wrong: ["VLAN segmentation", "Screened subnet", "Site-to-site VPN", "Software-defined networking", "Host-based firewall"],
    explanation: "An air gap physically separates a network from all other networks, so data can move only by manual, controlled transfer. Because there is no connection, a firewall misconfiguration cannot create a path. VLANs, screened subnets, and SDN are logical controls that still share a physical connection.",
    hint: "No cable, no wireless, no path = air gap.",
    refs: [
      { title: "NIST CSRC Glossary: air gap", url: "https://csrc.nist.gov/glossary/term/air_gap" },
      { title: "Professor Messer SY0-701: Network Infrastructure Concepts (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/network-infrastructure-concepts-sy0-701/" }
    ]
  },
  {
    id: "d3-007",
    domain: 3,
    objective: "3.1",
    topic: "Logical segmentation",
    type: "single",
    stems: [
      "A company wants to separate HR, finance, and engineering traffic, but all three departments must use the same physical switches. Which of the following should the network engineer configure?",
      "A small hospital cannot buy separate switches for its medical devices, but it must keep those devices in a different broadcast domain from staff computers. Which of the following is the most appropriate solution?"
    ],
    correct: ["VLANs"],
    wrong: ["An air gap", "Port mirroring", "Link aggregation", "Separate physical switches"],
    explanation: "VLANs provide logical segmentation: ports on the same physical switch are put into separate virtual networks, and traffic between them must go through a router or firewall. An air gap and separate switches are physical isolation, which the scenarios rule out. Port mirroring copies traffic, and link aggregation combines links for bandwidth.",
    hint: "Same physical switch, separate networks = logical segmentation with VLANs.",
    refs: [
      { title: "Professor Messer SY0-701: Network Infrastructure Concepts (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/network-infrastructure-concepts-sy0-701/" },
      { title: "NIST SP 800-41 Rev. 1: Guidelines on Firewalls and Firewall Policy", url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final" }
    ]
  },
  {
    id: "d3-008",
    domain: 3,
    objective: "3.1",
    topic: "Software-defined networking",
    type: "single",
    stems: [
      "A network team wants to manage and reconfigure the whole network from a central software controller by separating the control plane from the data plane. Which of the following should the team implement?",
      "Which of the following technologies splits network device functions into data, control, and management planes so that the network can be programmed through software?",
      "A cloud provider needs to create and change network paths automatically through APIs instead of configuring each switch by hand. Which of the following best supports this requirement?"
    ],
    correct: ["Software-defined networking"],
    wrong: ["Spanning Tree Protocol", "VLAN trunking", "Static routing", "Air-gapped network", "Link aggregation"],
    explanation: "Software-defined networking (SDN) separates the data plane (forwarding), the control plane (decisions), and the management plane, so a central controller can program the network through software and APIs. STP prevents loops, VLAN trunking carries several VLANs on one link, and static routes are configured device by device.",
    hint: "Control plane separated from data plane + central controller = SDN.",
    refs: [
      { title: "Professor Messer SY0-701: Network Infrastructure Concepts (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/network-infrastructure-concepts-sy0-701/" },
      { title: "NIST SP 800-215: Guide to a Secure Enterprise Network Landscape", url: "https://csrc.nist.gov/pubs/sp/800/215/final" }
    ]
  },
  {
    id: "d3-009",
    domain: 3,
    objective: "3.1",
    topic: "Centralized vs. decentralized",
    type: "single",
    stems: [
      "A company moves all security monitoring, logging, and management into one central console in a single data center. Which of the following is the most significant security concern with this design?",
      "Which of the following is a primary disadvantage of a centralized architecture when compared to a decentralized architecture?"
    ],
    correct: ["A single point of failure"],
    wrong: ["Inconsistent policies across sites", "Poor visibility of all systems", "Many separate consoles to manage", "Difficulty applying global updates"],
    explanation: "A centralized architecture gives one place for visibility and consistent policy, but if that central point fails or is compromised, the whole organization loses the function. Inconsistent policies, poor visibility, and many separate consoles are typical problems of decentralized architectures.",
    hint: "Centralized = easy to see and manage, but one failure hurts everyone.",
    refs: [
      { title: "Professor Messer SY0-701: Other Infrastructure Concepts (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/other-infrastructure-concepts-sy0-701/" }
    ]
  },
  {
    id: "d3-010",
    domain: 3,
    objective: "3.1",
    topic: "Containerization",
    type: "single",
    stems: [
      "A security architect compares containers with virtual machines. Which of the following is a key security consideration that is specific to containers?",
      "A development team moves its applications from virtual machines into containers. Which of the following characteristics means that a kernel vulnerability on the host could affect every container on it?"
    ],
    correct: ["Containers share the host OS kernel"],
    wrong: ["Each container runs a full guest OS", "Containers require a type 1 hypervisor", "Containers cannot be scanned for flaws", "Each container gets dedicated hardware"],
    explanation: "Containers package an application and its dependencies but share the host operating system's kernel. A kernel vulnerability or a container escape can therefore affect every container on that host, so host OS hardening is critical. Virtual machines, not containers, each run a full guest OS on a hypervisor.",
    hint: "VM = own OS on a hypervisor. Container = shared host kernel.",
    refs: [
      { title: "NIST SP 800-190: Application Container Security Guide", url: "https://csrc.nist.gov/pubs/sp/800/190/final" },
      { title: "Professor Messer SY0-701: Other Infrastructure Concepts (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/other-infrastructure-concepts-sy0-701/" }
    ]
  },
  {
    id: "d3-011",
    domain: 3,
    objective: "3.1",
    topic: "Virtualization",
    type: "single",
    stems: [
      "A company runs dozens of virtual machines for different departments on one physical host. Which of the following components must be most carefully patched and hardened, because its compromise could affect every VM on the host?",
      "A security engineer is concerned that an attacker in one guest VM could escape and reach other VMs on the same server. Which of the following components enforces the isolation between those VMs?"
    ],
    correct: ["The hypervisor"],
    wrong: ["The guest operating system", "A single guest application", "The container image registry", "The network load balancer"],
    explanation: "The hypervisor manages all guest operating systems on a host and controls their access to the physical hardware, so it enforces isolation between VMs. A hypervisor compromise or VM escape can expose every guest. A guest OS or application affects only its own VM.",
    hint: "One host, many VMs: the hypervisor is the wall between them.",
    refs: [
      { title: "NIST SP 800-125: Guide to Security for Full Virtualization Technologies", url: "https://csrc.nist.gov/pubs/sp/800/125/final" },
      { title: "NIST CSRC Glossary: hypervisor", url: "https://csrc.nist.gov/glossary/term/hypervisor" }
    ]
  },
  {
    id: "d3-012",
    domain: 3,
    objective: "3.1",
    topic: "IoT",
    type: "multi",
    stems: [
      "A company installs hundreds of smart cameras and thermostats. The devices have limited security features and receive infrequent firmware updates. Which of the following are the best ways to reduce the risk from these devices?",
      "A facilities manager adds IoT sensors to an office building. The security team wants to reduce the risk that these sensors add to the corporate network. Which of the following should the team do?"
    ],
    correct: ["Place the devices on a separate network segment", "Change the default credentials on each device"],
    wrong: ["Install EDR agents on each device", "Join the devices to the AD domain", "Disable firmware updates for stability", "Put the devices on the main user VLAN"],
    explanation: "IoT devices often ship with default credentials, weak security features, and slow patching. Changing default credentials removes an easy entry point, and a separate network segment limits what an attacker can reach from a compromised device. Most IoT devices cannot run EDR agents or join a domain, and disabling updates increases risk.",
    hint: "IoT: change the defaults and fence them off on their own segment.",
    refs: [
      { title: "NIST IR 8259: Foundational Cybersecurity Activities for IoT Device Manufacturers", url: "https://csrc.nist.gov/pubs/ir/8259/final" },
      { title: "NIST SP 800-213: IoT Device Cybersecurity Guidance for the Federal Government", url: "https://csrc.nist.gov/pubs/sp/800/213/final" },
      { title: "Professor Messer SY0-701: Other Infrastructure Concepts (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/other-infrastructure-concepts-sy0-701/" }
    ]
  },
  {
    id: "d3-013",
    domain: 3,
    objective: "3.1",
    topic: "ICS/SCADA",
    type: "single",
    stems: [
      "A security architect is designing controls for a power utility's SCADA system. Which of the following security properties does the architect usually rank highest for this environment?",
      "An OT engineer at a water treatment plant rejects a security tool because it could interrupt control traffic to pumps and valves. Which of the following priorities most likely drives this decision?",
      "Unlike typical corporate IT networks, industrial control systems most often place the highest priority on which of the following?"
    ],
    correct: ["Availability"],
    wrong: ["Confidentiality", "Non-repudiation", "Anonymity", "Privacy"],
    explanation: "Industrial control systems such as SCADA control physical processes, so an interruption can cause safety incidents and service outages. For this reason, availability (together with safety) is usually the highest priority in OT environments, while traditional IT often puts confidentiality first.",
    hint: "If the plant stops, people can get hurt: ICS puts availability first.",
    refs: [
      { title: "NIST SP 800-82 Rev. 3: Guide to Operational Technology (OT) Security", url: "https://csrc.nist.gov/pubs/sp/800/82/r3/final" },
      { title: "CISA: Industrial Control Systems", url: "https://www.cisa.gov/topics/industrial-control-systems" }
    ]
  },
  {
    id: "d3-014",
    domain: 3,
    objective: "3.1",
    topic: "RTOS",
    type: "single",
    stems: [
      "An automotive engineer chooses an operating system for an anti-lock braking controller that must respond to sensor input within a guaranteed time. Which of the following should the engineer use?",
      "A medical device maker needs an operating system with deterministic timing, where tasks always complete within a fixed deadline. Which of the following is the most appropriate choice?",
      "Security tools that add processing delays are often not acceptable on which of the following, because a delay could cause a missed deadline?"
    ],
    correct: ["Real-time operating system"],
    wrong: ["General-purpose desktop OS", "Network operating system", "Type 2 hypervisor", "Container runtime"],
    explanation: "A real-time operating system (RTOS) is deterministic: it guarantees that tasks complete within strict time limits, as needed in braking systems, medical devices, and industrial equipment. Security controls on an RTOS must not add delays that could break these timing requirements. General-purpose operating systems do not give this guarantee.",
    hint: "Deterministic + guaranteed response time = RTOS.",
    refs: [
      { title: "Professor Messer SY0-701: Other Infrastructure Concepts (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/other-infrastructure-concepts-sy0-701/" },
      { title: "NIST SP 800-82 Rev. 3: Guide to Operational Technology (OT) Security", url: "https://csrc.nist.gov/pubs/sp/800/82/r3/final" }
    ]
  },
  {
    id: "d3-015",
    domain: 3,
    objective: "3.1",
    topic: "Embedded systems",
    type: "multi",
    stems: [
      "A manufacturer designs an embedded controller for a smart door lock. Which of the following constraints most often limit the security controls that can run on this kind of device?",
      "A security team reviews several purpose-built embedded controllers in a warehouse. Which of the following constraints most likely limit the security controls that the team can apply?"
    ],
    correct: ["Limited processing power and memory", "Little or no ability to apply patches"],
    wrong: ["Excess unused processing capacity", "Frequent automatic vendor updates", "A full general-purpose operating system", "Support for installing third-party apps"],
    explanation: "Embedded systems are purpose-built devices with limited compute, memory, and often power, so they cannot run heavy security software such as full endpoint agents. Many also have no practical patch path, or the vendor stops releasing updates. These constraints often require compensating controls such as network segmentation.",
    hint: "Embedded: small CPU, small memory, hard to patch.",
    refs: [
      { title: "Professor Messer SY0-701: Infrastructure Considerations (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/infrastructure-considerations-sy0-701/" },
      { title: "Professor Messer SY0-701: Other Infrastructure Concepts (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/other-infrastructure-concepts-sy0-701/" },
      { title: "NIST IR 8259: Foundational Cybersecurity Activities for IoT Device Manufacturers", url: "https://csrc.nist.gov/pubs/ir/8259/final" }
    ]
  },
  {
    id: "d3-016",
    domain: 3,
    objective: "3.1",
    topic: "Architecture models",
    type: "match",
    stems: [
      "A cloud architect is explaining architecture models to a new team. Match each description with the architecture model that it describes."
    ],
    pairs: [
      { item: "Servers, networks, and firewall rules defined in version-controlled templates", answer: "Infrastructure as code" },
      { item: "Provider runs code functions on demand; customer manages no servers", answer: "Serverless" },
      { item: "Application split into small independent services that talk over APIs", answer: "Microservices" },
      { item: "Applications isolated in packages that share the host OS kernel", answer: "Containerization" },
      { item: "Network with no physical or wireless link to any other network", answer: "Air-gapped network" },
      { item: "Central controller separates the control plane from the data plane", answer: "Software-defined networking" }
    ],
    extraOptions: ["Virtualization", "Embedded system"],
    explanation: "IaC defines infrastructure in code templates. Serverless runs functions on demand with no customer-managed servers. Microservices split an application into independent API-connected services. Containers isolate applications but share the host kernel. An air gap physically isolates a network. SDN separates the control plane from the data plane under a central controller.",
    hint: "Look for the key phrase: templates, on demand, APIs, shared kernel, no link, control plane.",
    refs: [
      { title: "Professor Messer SY0-701: Cloud Infrastructures (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cloud-infrastructures-sy0-701/" },
      { title: "Professor Messer SY0-701: Network Infrastructure Concepts (3.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/network-infrastructure-concepts-sy0-701/" },
      { title: "NIST SP 800-190: Application Container Security Guide", url: "https://csrc.nist.gov/pubs/sp/800/190/final" }
    ]
  },

  // ---------------------------------------------------------------------------
  // 3.2 Apply security principles to secure enterprise infrastructure
  // ---------------------------------------------------------------------------
  {
    id: "d3-017",
    domain: 3,
    objective: "3.2",
    topic: "Device placement",
    type: "single",
    stems: [
      "A company is deploying a public web server that customers on the internet must reach. Where should the security architect place this server?",
      "An organization wants internet users to reach its public mail relay while keeping that system separate from the internal network. In which of the following zones should the relay be placed?",
      "Which of the following network zones is designed to host public-facing services so that a compromise of those services does not give direct access to the internal network?"
    ],
    correct: ["Screened subnet"],
    wrong: ["Internal trusted zone", "Management network", "Guest wireless network", "Database server segment"],
    explanation: "A screened subnet (formerly called a DMZ) is a perimeter segment between the internet and the internal network. It hosts public-facing services, and firewall rules strictly limit its access to internal systems. Putting public servers in the internal or database zones would expose trusted systems directly to the internet.",
    hint: "Public-facing service = screened subnet (CompTIA's name for the DMZ).",
    refs: [
      { title: "NIST CSRC Glossary: demilitarized zone", url: "https://csrc.nist.gov/glossary/term/demilitarized_zone" },
      { title: "Professor Messer SY0-701: Secure Infrastructures (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/secure-infrastructures-sy0-701/" }
    ]
  },
  {
    id: "d3-018",
    domain: 3,
    objective: "3.2",
    topic: "Jump server",
    type: "single",
    stems: [
      "Administrators must manage servers in a secure network segment from outside that segment. The security team wants all admin sessions to pass through one hardened, monitored host. Which of the following should the team deploy?",
      "A cloud engineer blocks direct SSH from the internet to all servers and requires administrators to connect first to a single hardened system, and then to the target servers. Which of the following is the engineer using?"
    ],
    correct: ["Jump server"],
    wrong: ["Forward proxy", "Load balancer", "Honeypot", "Web application firewall", "Syslog collector"],
    explanation: "A jump server is a hardened, tightly controlled host that administrators connect to first, and from which they then reach systems in a secure zone. It gives one point to control and monitor admin access. A forward proxy handles outbound user web traffic, and a load balancer distributes client requests.",
    hint: "Two-step admin access through one hardened box = jump server.",
    refs: [
      { title: "Professor Messer SY0-701: Network Appliances (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/network-appliances-sy0-701/" }
    ]
  },
  {
    id: "d3-019",
    domain: 3,
    objective: "3.2",
    topic: "Proxy server",
    type: "single",
    stems: [
      "A company wants all employee web requests to go through a server that filters URLs, scans content for malware, and caches pages before the requests reach the internet. Which of the following should the company deploy?",
      "Which of the following devices makes outbound internet requests on behalf of internal users and can block access to prohibited websites?"
    ],
    correct: ["Forward proxy"],
    wrong: ["Reverse proxy", "Jump server", "Load balancer", "Web application firewall", "Network tap"],
    explanation: "A forward proxy sits inside the network and makes outbound requests on behalf of internal users. It can filter URLs, scan content, and cache responses. A reverse proxy does the same job for inbound traffic to an internal service, and a WAF protects web applications from inbound attacks.",
    hint: "Forward = outbound for users. Reverse = inbound for servers.",
    refs: [
      { title: "NIST CSRC Glossary: proxy server", url: "https://csrc.nist.gov/glossary/term/proxy_server" },
      { title: "Professor Messer SY0-701: Network Appliances (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/network-appliances-sy0-701/" }
    ]
  },
  {
    id: "d3-020",
    domain: 3,
    objective: "3.2",
    topic: "IDS (passive monitoring)",
    type: "single",
    stems: [
      "A security team connects a sensor to a switch SPAN port. The sensor receives a copy of all traffic and alerts on attacks, but it cannot stop them. Which of the following is the team using?",
      "A hospital does not want any security device to be able to drop clinical traffic, but it still wants alerts on malicious activity. Which of the following should the security engineer deploy?",
      "Which of the following devices passively monitors a copy of network traffic from a network tap and generates alerts?"
    ],
    correct: ["Intrusion detection system"],
    wrong: ["Intrusion prevention system", "Web application firewall", "Next-generation firewall", "Unified threat management appliance"],
    explanation: "An IDS receives a copy of traffic from a SPAN port or network tap, so it is not inline. It can detect and alert, but it cannot block traffic or cause a network outage. An IPS, WAF, NGFW, or UTM sits inline and can drop traffic.",
    hint: "Copy of traffic (tap/SPAN) + alerts only = IDS.",
    refs: [
      { title: "NIST SP 800-94: Guide to Intrusion Detection and Prevention Systems", url: "https://csrc.nist.gov/pubs/sp/800/94/final" },
      { title: "Professor Messer SY0-701: Intrusion Prevention (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/intrusion-prevention-sy0-701/" }
    ]
  },
  {
    id: "d3-021",
    domain: 3,
    objective: "3.2",
    topic: "IPS (inline)",
    type: "single",
    stems: [
      "A security architect needs a device that examines traffic in real time and drops exploit attempts before they reach internal servers. Which of the following should be placed inline between the firewall and the core switch?",
      "Which of the following devices must be installed inline, rather than on a tap or mirror port, so that it can actively block malicious traffic?"
    ],
    correct: ["Intrusion prevention system"],
    wrong: ["Intrusion detection system", "Network tap", "SIEM collector", "Port mirror"],
    explanation: "An IPS is installed inline and performs active monitoring, so it can drop malicious packets before they reach their target. An IDS, network tap, or port mirror only sees a copy of traffic and cannot block it. A SIEM collects and correlates logs but does not sit in the traffic path.",
    hint: "To block, you must be in the path: inline = IPS.",
    refs: [
      { title: "NIST SP 800-94: Guide to Intrusion Detection and Prevention Systems", url: "https://csrc.nist.gov/pubs/sp/800/94/final" },
      { title: "NIST CSRC Glossary: intrusion prevention system", url: "https://csrc.nist.gov/glossary/term/intrusion_prevention_system" },
      { title: "Professor Messer SY0-701: Intrusion Prevention (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/intrusion-prevention-sy0-701/" }
    ]
  },
  {
    id: "d3-022",
    domain: 3,
    objective: "3.2",
    topic: "Failure modes",
    type: "single",
    stems: [
      "An inline IPS protects a hospital network. Management requires that clinical traffic keep flowing if the IPS crashes, even though inspection would stop. Which of the following should the IPS be configured to use?",
      "Which of the following failure modes keeps network traffic flowing when an inline security device fails, and so places availability above security?",
      "A retailer's inline web filter lost power, and users kept browsing the web without any filtering. Which of the following failure modes was configured?"
    ],
    correct: ["Fail-open"],
    wrong: ["Fail-closed", "Fail-secure", "Passive monitoring", "Active/passive failover"],
    explanation: "With fail-open, traffic continues to pass when an inline device fails, so the network stays up but without security inspection. With fail-closed (fail-secure), the link stops passing traffic, which keeps security but causes an outage. Passive monitoring is not inline, so it has no failure mode that affects traffic.",
    hint: "Fail-open = door stays open (availability). Fail-closed = door locks (security).",
    refs: [
      { title: "Professor Messer SY0-701: Intrusion Prevention (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/intrusion-prevention-sy0-701/" }
    ]
  },
  {
    id: "d3-023",
    domain: 3,
    objective: "3.2",
    topic: "Port security (802.1X)",
    type: "single",
    stems: [
      "A company wants each switch port to block all traffic from a connected device until the user or device authenticates against a RADIUS server. Which of the following should the network engineer implement?",
      "A visitor plugged a laptop into a conference room wall jack and reached internal servers. The CISO now wants port-based network access control on all switches. Which of the following should be used?",
      "Which of the following provides port-based authentication with EAP for both wired switches and wireless access points?"
    ],
    correct: ["IEEE 802.1X"],
    wrong: ["Port mirroring", "Spanning Tree Protocol", "Link aggregation", "Static VLAN assignment", "DHCP snooping"],
    explanation: "IEEE 802.1X is port-based network access control. The switch or access point allows no network traffic until the client authenticates with EAP against an authentication server such as RADIUS. Port mirroring copies traffic, STP prevents loops, and link aggregation combines links; none of them authenticate devices.",
    hint: "Authenticate before the port opens = 802.1X (with EAP and RADIUS).",
    refs: [
      { title: "RFC 3580: IEEE 802.1X RADIUS Usage Guidelines", url: "https://www.rfc-editor.org/rfc/rfc3580" },
      { title: "Professor Messer SY0-701: Port Security (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/port-security-sy0-701/" }
    ]
  },
  {
    id: "d3-024",
    domain: 3,
    objective: "3.2",
    topic: "EAP methods",
    type: "single",
    stems: [
      "A company's 802.1X design must require a digital certificate on both the client and the authentication server for mutual authentication. Which of the following EAP methods meets this requirement?",
      "A security engineer wants to replace password-based wireless logins with an EAP method that requires a certificate on every client device. Which of the following should the engineer select?"
    ],
    correct: ["EAP-TLS"],
    wrong: ["PEAP", "EAP-TTLS", "EAP-FAST", "LEAP"],
    explanation: "EAP-TLS uses certificates on both the server and each client, which gives strong mutual certificate-based authentication with no passwords. PEAP and EAP-TTLS need only a server certificate and usually protect a password exchange inside a TLS tunnel. EAP-FAST uses protected access credentials, and LEAP is an old, weak Cisco method.",
    hint: "Certificates on both sides = EAP-TLS.",
    refs: [
      { title: "RFC 5216: The EAP-TLS Authentication Protocol", url: "https://www.rfc-editor.org/rfc/rfc5216" },
      { title: "RFC 3748: Extensible Authentication Protocol (EAP)", url: "https://www.rfc-editor.org/rfc/rfc3748" }
    ]
  },
  {
    id: "d3-025",
    domain: 3,
    objective: "3.2",
    topic: "Web application firewall",
    type: "single",
    stems: [
      "A company's e-commerce site is under repeated SQL injection and cross-site scripting attacks. Which of the following controls best protects the application by inspecting HTTP requests?",
      "A retailer wants a device that analyzes the input sent to its public web application and blocks malicious requests before they reach the application server. Which of the following should the retailer deploy?"
    ],
    correct: ["Web application firewall"],
    wrong: ["Layer 4 firewall", "VPN concentrator", "Jump server", "Network tap", "Stateless packet filter"],
    explanation: "A web application firewall (WAF) inspects HTTP/HTTPS input to web applications and blocks attacks such as SQL injection and XSS. Layer 4 firewalls and packet filters see only IP addresses and ports, so they cannot see malicious input inside an allowed web session.",
    hint: "SQLi/XSS against a web app = WAF.",
    refs: [
      { title: "Professor Messer SY0-701: Firewall Types (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/firewall-types-sy0-701/" },
      { title: "NIST SP 800-41 Rev. 1: Guidelines on Firewalls and Firewall Policy", url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final" }
    ]
  },
  {
    id: "d3-026",
    domain: 3,
    objective: "3.2",
    topic: "Unified threat management",
    type: "single",
    stems: [
      "A small business with no security staff wants one appliance that provides firewall, URL filtering, antivirus, spam filtering, and VPN functions. Which of the following best meets this need?",
      "Which of the following is often called an all-in-one security appliance because it combines many security functions in a single device?"
    ],
    correct: ["Unified threat management"],
    wrong: ["Web application firewall", "Layer 4 firewall", "Jump server", "Reverse proxy server", "Network tap"],
    explanation: "A unified threat management (UTM) appliance combines functions such as firewall, URL filtering, malware scanning, spam filtering, IDS/IPS, and VPN in one device. This is simple for small organizations, but performance can suffer when many features are enabled. A WAF protects only web applications, and a layer 4 firewall only filters by address and port.",
    hint: "All-in-one box = UTM.",
    refs: [
      { title: "Professor Messer SY0-701: Firewall Types (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/firewall-types-sy0-701/" },
      { title: "NIST SP 800-41 Rev. 1: Guidelines on Firewalls and Firewall Policy", url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final" }
    ]
  },
  {
    id: "d3-027",
    domain: 3,
    objective: "3.2",
    topic: "Next-generation firewall",
    type: "single",
    stems: [
      "A company wants to let employees view a social media site but block them from posting to it, even though both actions use HTTPS on port 443. Which of the following should the company deploy?",
      "A security engineer needs a firewall that identifies applications by inspecting traffic at OSI layer 7, regardless of the port number in use. Which of the following should the engineer select?"
    ],
    correct: ["Next-generation firewall"],
    wrong: ["Layer 4 firewall", "Stateless packet filter", "Router access control list", "Network-based IDS"],
    explanation: "A next-generation firewall (NGFW) is application-aware: it decodes traffic at layer 7 and makes decisions based on the application and its functions, not only the port. Layer 4 firewalls, packet filters, and router ACLs see the same port 443 for every HTTPS application, and an IDS can only alert.",
    hint: "Same port, different application decisions = layer 7 = NGFW.",
    refs: [
      { title: "Professor Messer SY0-701: Firewall Types (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/firewall-types-sy0-701/" },
      { title: "NIST SP 800-41 Rev. 1: Guidelines on Firewalls and Firewall Policy", url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final" }
    ]
  },
  {
    id: "d3-028",
    domain: 3,
    objective: "3.2",
    topic: "Layer 4 vs. layer 7 firewalls",
    type: "multi",
    stems: [
      "A network engineer configures a traditional layer 4 firewall. Which of the following can this firewall use to allow or block traffic?",
      "Which of the following packet details can a layer 4 firewall evaluate when it decides whether to permit a connection?"
    ],
    correct: ["Source and destination IP addresses", "TCP or UDP port numbers"],
    wrong: ["The specific application in use", "SQL keywords in form input", "The URL path being requested", "The file type inside a download"],
    explanation: "A layer 4 firewall makes decisions from network and transport header information: IP addresses, protocol, and TCP/UDP port numbers. Application identity, URLs, SQL keywords, and file contents are layer 7 data, which require an NGFW, WAF, or proxy to inspect.",
    hint: "Layer 4 sees addresses and ports. Anything about content is layer 7.",
    refs: [
      { title: "NIST SP 800-41 Rev. 1: Guidelines on Firewalls and Firewall Policy", url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final" },
      { title: "Professor Messer SY0-701: Firewall Types (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/firewall-types-sy0-701/" }
    ]
  },
  {
    id: "d3-029",
    domain: 3,
    objective: "3.2",
    topic: "IPsec modes",
    type: "single",
    stems: [
      "Two branch offices connect over the internet with an IPsec site-to-site VPN. The security team requires that the entire original IP packet, including its header, be encrypted. Which of the following should be configured?",
      "Which of the following IPsec configurations encrypts the original IP header and payload and then adds a new IP header for transport between the VPN gateways?"
    ],
    correct: ["IPsec tunnel mode"],
    wrong: ["IPsec transport mode", "Authentication Header only", "GRE without encryption", "SSH port forwarding"],
    explanation: "In IPsec tunnel mode with ESP, the whole original packet, including the original IP header, is encrypted and encapsulated with a new outer IP header. This is the normal mode for site-to-site VPNs between gateways. Transport mode protects only the payload and keeps the original header, and AH alone gives integrity but no encryption.",
    hint: "Tunnel mode wraps the whole packet in a new header; transport mode keeps the original header.",
    refs: [
      { title: "RFC 4301: Security Architecture for the Internet Protocol", url: "https://www.rfc-editor.org/rfc/rfc4301" },
      { title: "NIST SP 800-77 Rev. 1: Guide to IPsec VPNs", url: "https://csrc.nist.gov/pubs/sp/800/77/r1/final" },
      { title: "Professor Messer SY0-701: Secure Communication (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/secure-communication-sy0-701/" }
    ]
  },
  {
    id: "d3-030",
    domain: 3,
    objective: "3.2",
    topic: "IPsec protocols",
    type: "single",
    stems: [
      "A network engineer must choose the IPsec protocol that provides confidentiality by encrypting the packet data. Which of the following should the engineer select?",
      "An IPsec VPN uses only AH, and an auditor finds that the data is readable by anyone who captures the packets. Which of the following protocols should be used instead to add encryption?"
    ],
    correct: ["Encapsulating Security Payload"],
    wrong: ["Authentication Header", "Internet Key Exchange", "Generic Routing Encapsulation", "Layer 2 Tunneling Protocol"],
    explanation: "Encapsulating Security Payload (ESP) provides confidentiality through encryption, and it can also provide integrity and authentication. Authentication Header (AH) provides integrity and authentication only, with no encryption. IKE negotiates keys and security associations but does not encrypt the data packets itself.",
    hint: "ESP = Encrypts. AH = Authenticates only.",
    refs: [
      { title: "RFC 4303: IP Encapsulating Security Payload (ESP)", url: "https://www.rfc-editor.org/rfc/rfc4303" },
      { title: "RFC 4302: IP Authentication Header", url: "https://www.rfc-editor.org/rfc/rfc4302" },
      { title: "NIST SP 800-77 Rev. 1: Guide to IPsec VPNs", url: "https://csrc.nist.gov/pubs/sp/800/77/r1/final" }
    ]
  },
  {
    id: "d3-031",
    domain: 3,
    objective: "3.2",
    topic: "Remote access tunneling",
    type: "single",
    stems: [
      "A company requires all internet traffic from remote employees' laptops to pass through corporate security controls while the VPN is connected. Which of the following VPN configurations should be used?",
      "A security analyst finds that remote users connected to the VPN reach websites directly from their home networks, which bypasses the corporate web filter. Which of the following should the analyst recommend?"
    ],
    correct: ["Full tunnel"],
    wrong: ["Split tunnel", "IPsec transport mode", "Clientless VPN portal", "Site-to-site VPN"],
    explanation: "A full tunnel sends all of the remote device's traffic, including internet traffic, through the VPN so that corporate controls inspect it. A split tunnel sends only corporate traffic through the VPN and lets other traffic go directly to the internet, which bypasses corporate filters.",
    hint: "Everything through HQ = full tunnel. Only corporate traffic through HQ = split tunnel.",
    refs: [
      { title: "NIST CSRC Glossary: split tunneling", url: "https://csrc.nist.gov/glossary/term/split_tunneling" },
      { title: "NIST SP 800-46 Rev. 2: Guide to Enterprise Telework, Remote Access, and BYOD Security", url: "https://csrc.nist.gov/pubs/sp/800/46/r2/final" }
    ]
  },
  {
    id: "d3-032",
    domain: 3,
    objective: "3.2",
    topic: "SD-WAN",
    type: "single",
    stems: [
      "A retail chain's stores send all cloud application traffic back to headquarters over MPLS, which causes slow performance. The company wants stores to reach cloud services directly over several broadband links. Which of the following should the company implement?",
      "Which of the following technologies applies software-defined networking to wide area links so that remote sites can route cloud application traffic efficiently?"
    ],
    correct: ["SD-WAN"],
    wrong: ["Air-gapped WAN", "Leased-line MPLS mesh", "VLAN trunking", "Full-tunnel remote access VPN"],
    explanation: "SD-WAN applies software-defined networking to the wide area network. It can use several link types, such as broadband and LTE, and send cloud traffic directly from a branch instead of backhauling it through a central data center. MPLS backhaul and full-tunnel VPNs both force traffic through headquarters.",
    hint: "Branches going straight to the cloud over many links = SD-WAN.",
    refs: [
      { title: "Professor Messer SY0-701: Secure Communication (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/secure-communication-sy0-701/" },
      { title: "NIST SP 800-215: Guide to a Secure Enterprise Network Landscape", url: "https://csrc.nist.gov/pubs/sp/800/215/final" }
    ]
  },
  {
    id: "d3-033",
    domain: 3,
    objective: "3.2",
    topic: "SASE",
    type: "single",
    stems: [
      "A company with many remote workers wants cloud-delivered security services, such as a secure web gateway, CASB, zero trust network access, and firewall as a service, located close to its users. Which of the following should the company adopt?",
      "Which of the following combines wide area networking with security services delivered from the cloud, and is often described as the next generation of VPN?"
    ],
    correct: ["Secure access service edge"],
    wrong: ["Unified threat management", "Site-to-site IPsec VPN", "Network access control", "Screened subnet"],
    explanation: "Secure access service edge (SASE) combines network connectivity (often SD-WAN) with cloud-delivered security services such as SWG, CASB, ZTNA, and FWaaS, close to where users and applications are. A UTM is an on-premises appliance, and a site-to-site VPN connects fixed locations without cloud security services.",
    hint: "Security as a cloud service at the edge, near the user = SASE.",
    refs: [
      { title: "NIST SP 800-215: Guide to a Secure Enterprise Network Landscape", url: "https://csrc.nist.gov/pubs/sp/800/215/final" },
      { title: "Professor Messer SY0-701: Secure Communication (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/secure-communication-sy0-701/" }
    ]
  },
  {
    id: "d3-034",
    domain: 3,
    objective: "3.2",
    topic: "Device placement",
    type: "match",
    stems: [
      "A network architect is designing security zones for a new office network. Match each system with the most appropriate zone or placement."
    ],
    pairs: [
      { item: "Public website that customers reach from the internet", answer: "Screened subnet" },
      { item: "Customer database used only by internal applications", answer: "Internal trusted zone" },
      { item: "Visitor laptops that need only internet access", answer: "Guest network" },
      { item: "HVAC controllers that cannot be patched", answer: "Isolated OT segment" },
      { item: "IPS that must block attacks in real time", answer: "Inline between firewall and core switch" },
      { item: "IDS that must never affect network traffic", answer: "SPAN port or network tap" }
    ],
    extraOptions: ["Internet (outside the firewall)", "Management VLAN"],
    explanation: "Public services go in the screened subnet, and sensitive internal data stays in the trusted zone. Visitors use a guest network with internet access only. Unpatchable OT devices are isolated in their own segment as a compensating control. An IPS must be inline to block, and an IDS uses a SPAN port or tap so that it cannot affect traffic.",
    hint: "Public = screened subnet. Visitors = guest. Unpatchable = isolate. Block = inline. Watch only = tap.",
    refs: [
      { title: "Professor Messer SY0-701: Secure Infrastructures (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/secure-infrastructures-sy0-701/" },
      { title: "Professor Messer SY0-701: Intrusion Prevention (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/intrusion-prevention-sy0-701/" },
      { title: "NIST SP 800-41 Rev. 1: Guidelines on Firewalls and Firewall Policy", url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final" }
    ]
  },
  {
    id: "d3-035",
    domain: 3,
    objective: "3.2",
    topic: "Network appliances and firewall types",
    type: "match",
    stems: [
      "A security analyst is selecting network security devices for a redesign. Match each description with the device that it describes best."
    ],
    pairs: [
      { item: "Inspects HTTP input to block SQL injection and XSS", answer: "Web application firewall" },
      { item: "All-in-one box with firewall, spam filter, URL filter, and VPN", answer: "Unified threat management" },
      { item: "Application-aware firewall that makes decisions at layer 7", answer: "Next-generation firewall" },
      { item: "Allows or blocks traffic only by IP address and port", answer: "Layer 4 firewall" },
      { item: "Makes outbound web requests for users and caches content", answer: "Forward proxy" },
      { item: "Hardened host that admins use to reach a secure zone", answer: "Jump server" }
    ],
    extraOptions: ["Load balancer", "Reverse proxy"],
    explanation: "A WAF protects web applications from input attacks. A UTM bundles many security functions into one appliance. An NGFW identifies applications at layer 7. A layer 4 firewall uses only addresses and ports. A forward proxy handles outbound user requests, and a jump server is the controlled entry point for administrators.",
    hint: "Web app = WAF. All-in-one = UTM. Layer 7 = NGFW. Ports only = layer 4. Outbound for users = forward proxy. Admin hop = jump server.",
    refs: [
      { title: "Professor Messer SY0-701: Firewall Types (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/firewall-types-sy0-701/" },
      { title: "Professor Messer SY0-701: Network Appliances (3.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/network-appliances-sy0-701/" }
    ]
  },

  // ---------------------------------------------------------------------------
  // 3.3 Concepts and strategies to protect data
  // ---------------------------------------------------------------------------
  {
    id: "d3-036",
    domain: 3,
    objective: "3.3",
    topic: "Data states",
    type: "single",
    stems: [
      "Attackers installed memory-scraping malware on point-of-sale terminals and stole card numbers, even though the company encrypted stored data and network traffic. Which data state did the attackers target?",
      "Which data state is the hardest to protect with traditional encryption, because the data must be decrypted in RAM or the CPU to be processed?"
    ],
    correct: ["Data in use"],
    wrong: ["Data at rest", "Data in transit", "Data in motion", "Archived data"],
    explanation: "Data in use is data in memory or being processed by the CPU, where it is almost always in decrypted form. Attackers who scrape memory can read it even when data at rest and data in transit are encrypted. Data in motion is another name for data in transit.",
    hint: "In RAM or the CPU = data in use (usually decrypted).",
    refs: [
      { title: "Professor Messer SY0-701: States of Data (3.3)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/states-of-data-sy0-701/" }
    ]
  },
  {
    id: "d3-037",
    domain: 3,
    objective: "3.3",
    topic: "Data in transit",
    type: "multi",
    stems: [
      "A company wants to protect customer data while it travels between branch offices and a cloud web application. Which of the following controls protect this data?",
      "Which of the following controls are designed to protect data in transit?"
    ],
    correct: ["TLS", "IPsec VPN"],
    wrong: ["Full-disk encryption", "Self-encrypting drives", "Database field hashing", "Data masking on reports"],
    explanation: "Data in transit moves across a network, so it is protected by encrypted channels such as TLS for web traffic and IPsec VPNs for network-to-network traffic. Full-disk encryption and self-encrypting drives protect data at rest. Hashing and masking protect stored or displayed values, not data as it moves.",
    hint: "Moving across the network = TLS or IPsec.",
    refs: [
      { title: "Professor Messer SY0-701: States of Data (3.3)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/states-of-data-sy0-701/" },
      { title: "RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3", url: "https://www.rfc-editor.org/rfc/rfc8446" },
      { title: "NIST SP 800-77 Rev. 1: Guide to IPsec VPNs", url: "https://csrc.nist.gov/pubs/sp/800/77/r1/final" }
    ]
  },
  {
    id: "d3-038",
    domain: 3,
    objective: "3.3",
    topic: "Data sovereignty",
    type: "single",
    stems: [
      "A European company learns that customer records stored in another country's data center are subject to that country's laws and court orders. Which of the following concepts does this describe?",
      "A multinational firm must consider that data stored inside a country falls under the laws and regulations of that country. Which of the following is the firm addressing?"
    ],
    correct: ["Data sovereignty"],
    wrong: ["Data classification", "Data masking", "Data retention", "Data ownership"],
    explanation: "Data sovereignty means that data is subject to the laws of the country where it is stored or processed. This affects where an organization can put data and which legal authorities can demand access to it. Data classification labels sensitivity, and data retention sets how long data is kept.",
    hint: "Sovereign country = its laws apply to data stored there.",
    refs: [
      { title: "Professor Messer SY0-701: States of Data (3.3)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/states-of-data-sy0-701/" },
      { title: "General Data Protection Regulation (GDPR) full text", url: "https://gdpr-info.eu/" }
    ]
  },
  {
    id: "d3-039",
    domain: 3,
    objective: "3.3",
    topic: "Geographic restrictions",
    type: "single",
    stems: [
      "A company operates only in the United States and wants to block logins to its HR portal from IP addresses in other countries. Which of the following data protection methods should the company use?",
      "A bank allows access to sensitive reports only when an employee's device is located inside a corporate building, based on location data. Which of the following methods does this describe?"
    ],
    correct: ["Geographic restrictions"],
    wrong: ["Data tokenization", "Data masking", "Hashing", "Data segmentation", "Permission restrictions"],
    explanation: "Geographic restrictions use the user's or device's location, from IP address, GPS, or wireless data (geolocation), to allow or deny access to data. Tokenization, masking, and hashing change how the data itself is stored or displayed, segmentation splits data into separate locations, and permission restrictions grant rights by account, not by location.",
    hint: "Access depends on where you are = geographic restrictions.",
    refs: [
      { title: "Professor Messer SY0-701: Protecting Data (3.3)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/protecting-data-sy0-701/" },
      { title: "NIST CSRC Glossary: geolocation", url: "https://csrc.nist.gov/glossary/term/geolocation" }
    ]
  },
  {
    id: "d3-040",
    domain: 3,
    objective: "3.3",
    topic: "Tokenization",
    type: "single",
    stems: [
      "A payment processor replaces each credit card number with a random value that has no mathematical link to the original. The real numbers are kept in a secure vault. Which of the following is the processor using?",
      "A mobile payment app sends a substitute value to merchants instead of the real card number, so a stolen value is useless to an attacker. Which of the following techniques does this describe?"
    ],
    correct: ["Tokenization"],
    wrong: ["Hashing", "Data masking", "Symmetric encryption", "Steganography"],
    explanation: "Tokenization replaces sensitive data with a token that has no mathematical relationship to the original, and the mapping is kept in a protected token vault. A stolen token cannot be reversed without the vault. Encryption is mathematically reversible with a key, hashing is one-way, and masking hides part of a value for display.",
    hint: "Random stand-in value + vault lookup = tokenization.",
    refs: [
      { title: "Professor Messer SY0-701: Protecting Data (3.3)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/protecting-data-sy0-701/" },
      { title: "PCI Security Standards Council", url: "https://www.pcisecuritystandards.org/" }
    ]
  },
  {
    id: "d3-041",
    domain: 3,
    objective: "3.3",
    topic: "Data masking",
    type: "single",
    stems: [
      "A call center application shows agents only the last four digits of each customer's Social Security number. Which of the following techniques is in use?",
      "A printed receipt shows a credit card number as ************1234. Which of the following data protection methods does this show?"
    ],
    correct: ["Data masking"],
    wrong: ["Tokenization", "Hashing", "Steganography", "Encryption"],
    explanation: "Data masking hides part or all of a value, for example by replacing digits with asterisks, so that users see only what they need. Tokenization replaces the whole value with a substitute, hashing produces a fixed-length digest, and encryption makes the entire value unreadable without a key.",
    hint: "Asterisks or last-four-only = masking.",
    refs: [
      { title: "NIST CSRC Glossary: masking", url: "https://csrc.nist.gov/glossary/term/masking" },
      { title: "Professor Messer SY0-701: Protecting Data (3.3)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/protecting-data-sy0-701/" }
    ]
  },
  {
    id: "d3-042",
    domain: 3,
    objective: "3.3",
    topic: "Hashing",
    type: "single",
    stems: [
      "A developer must store user passwords so that the original values cannot be recovered, even by database administrators. Which of the following should the developer use?",
      "A software vendor publishes a fixed-length digest for each download so that users can confirm the file was not changed. Which of the following methods does this use?"
    ],
    correct: ["Hashing"],
    wrong: ["Tokenization", "Data masking", "Symmetric encryption", "Obfuscation"],
    explanation: "Hashing is a one-way function that produces a fixed-length digest; the original input cannot be recovered from it, and any change to the input produces a different digest. This makes it right for password storage (with salting) and integrity checks. Encryption and tokenization are reversible by design.",
    hint: "One-way + fixed length = hash.",
    refs: [
      { title: "NIST CSRC Glossary: hash function", url: "https://csrc.nist.gov/glossary/term/hash_function" },
      { title: "OWASP Password Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" }
    ]
  },
  {
    id: "d3-043",
    domain: 3,
    objective: "3.3",
    topic: "Data classifications",
    type: "single",
    stems: [
      "A company labels its order processing data so that staff know this data must always be available and needs strong uptime procedures. Which of the following classifications fits best?",
      "In a data classification scheme, which of the following labels describes data that should always be accessible to the business?"
    ],
    correct: ["Critical"],
    wrong: ["Public", "Restricted", "Confidential", "Sensitive"],
    explanation: "In the SY0-701 classification terms, critical data is data that must always be available, so it needs processes that maintain uptime. Public data has no access restrictions. Confidential, restricted, and sensitive labels focus on limiting who can view the data, not on availability.",
    hint: "Critical = must always be available.",
    refs: [
      { title: "Professor Messer SY0-701: Data Types and Classifications (3.3)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-types-and-classifications-sy0-701/" }
    ]
  },
  {
    id: "d3-044",
    domain: 3,
    objective: "3.3",
    topic: "Data types",
    type: "single",
    stems: [
      "A beverage company keeps its drink formula secret instead of patenting it, and the formula's value comes from staying unknown to competitors. Which of the following data types is the formula?",
      "An engineer leaves a firm and takes an unpublished manufacturing process that gives the firm its competitive advantage. Which of the following data types was most likely stolen?"
    ],
    correct: ["Trade secret"],
    wrong: ["Regulated data", "Legal information", "Public data", "Financial information"],
    explanation: "A trade secret is confidential business information, such as a formula or process, whose value comes from being kept secret. Unlike patents or copyrights, it has no public registration, so its protection depends on access controls and confidentiality agreements. Regulated data is governed by outside laws or standards.",
    hint: "Valuable because nobody else knows it = trade secret.",
    refs: [
      { title: "USPTO: Trade secret policy", url: "https://www.uspto.gov/ip-policy/trade-secret-policy" },
      { title: "Professor Messer SY0-701: Data Types and Classifications (3.3)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-types-and-classifications-sy0-701/" }
    ]
  },
  {
    id: "d3-045",
    domain: 3,
    objective: "3.3",
    topic: "Regulated data",
    type: "multi",
    stems: [
      "A compliance officer is listing data types whose protection rules are set by laws or outside regulators. Which of the following belong on this list?",
      "Which of the following are examples of regulated data?"
    ],
    correct: ["Patient health records covered by HIPAA", "EU residents' personal data covered by GDPR"],
    wrong: ["An unpatented manufacturing process", "A published press release", "An internal network diagram", "A draft marketing slogan"],
    explanation: "Regulated data is data whose protection rules are set by a third party, such as government laws and regulations. Health records under HIPAA and personal data under GDPR are common examples. A secret manufacturing process is a trade secret, a press release is public, and network diagrams and slogans are internal business data.",
    hint: "An outside law or regulator sets the rules = regulated data.",
    refs: [
      { title: "Professor Messer SY0-701: Data Types and Classifications (3.3)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-types-and-classifications-sy0-701/" },
      { title: "GDPR: What is GDPR?", url: "https://gdpr.eu/what-is-gdpr/" }
    ]
  },
  {
    id: "d3-046",
    domain: 3,
    objective: "3.3",
    topic: "Data types",
    type: "single",
    stems: [
      "A warehouse system stores product details in barcodes and encoded binary files that people cannot read without software. Which of the following data types does this describe?",
      "A data loss prevention tool must inspect QR codes and encoded data that a person cannot understand just by looking at it. Which of the following data types is the tool handling?"
    ],
    correct: ["Non-human-readable data"],
    wrong: ["Human-readable data", "Trade secret data", "Legal information", "Public data"],
    explanation: "Non-human-readable data, such as barcodes, QR codes, and encoded or binary formats, needs software to interpret it. Security tools must be able to decode it to inspect it. Human-readable data, such as documents and spreadsheets, can be understood directly by a person.",
    hint: "Needs a machine to read it = non-human-readable.",
    refs: [
      { title: "Professor Messer SY0-701: Data Types and Classifications (3.3)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-types-and-classifications-sy0-701/" }
    ]
  },
  {
    id: "d3-047",
    domain: 3,
    objective: "3.3",
    topic: "Segmentation",
    type: "single",
    stems: [
      "A company splits sensitive customer data across several separate databases, so that an attacker who breaches one database cannot obtain all of the records. Which of the following methods is the company using?",
      "Instead of keeping all records in one large database, an architect stores the data in smaller stores in different locations to limit the impact of a breach. Which of the following does this describe?"
    ],
    correct: ["Data segmentation"],
    wrong: ["Tokenization", "Data masking", "Hashing", "Geographic restrictions"],
    explanation: "Segmentation separates data into smaller pieces in different locations, so an attacker must breach each one to get all the data. This limits the impact of a single breach. Tokenization, masking, and hashing change the data values themselves, and geographic restrictions control access by location.",
    hint: "Do not keep all the eggs in one basket = segmentation.",
    refs: [
      { title: "Professor Messer SY0-701: Protecting Data (3.3)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/protecting-data-sy0-701/" }
    ]
  },
  {
    id: "d3-048",
    domain: 3,
    objective: "3.3",
    topic: "Data protection methods",
    type: "match",
    stems: [
      "A data protection officer is choosing controls for several systems. Match each requirement with the most appropriate data protection method."
    ],
    pairs: [
      { item: "Replace card numbers with surrogate values kept in a vault", answer: "Tokenization" },
      { item: "Show agents only the last four digits of an account number", answer: "Masking" },
      { item: "Store passwords so the original values cannot be recovered", answer: "Hashing" },
      { item: "Block access to records from outside approved countries", answer: "Geographic restrictions" },
      { item: "Make distributed source code hard for people to understand", answer: "Obfuscation" },
      { item: "Make a stolen laptop's drive unreadable without a key", answer: "Encryption" }
    ],
    extraOptions: ["Segmentation", "Permission restrictions"],
    explanation: "Tokenization substitutes values and keeps the mapping in a vault. Masking hides part of a value. Hashing is one-way, which suits passwords. Geographic restrictions use location to control access. Obfuscation makes readable content, such as code, hard to understand. Encryption makes data unreadable without the key.",
    hint: "Vault = token. Asterisks = mask. One-way = hash. Location = geo. Confusing code = obfuscation. Key = encryption.",
    refs: [
      { title: "Professor Messer SY0-701: Protecting Data (3.3)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/protecting-data-sy0-701/" },
      { title: "NIST CSRC Glossary: masking", url: "https://csrc.nist.gov/glossary/term/masking" }
    ]
  },

  // ---------------------------------------------------------------------------
  // 3.4 Resilience and recovery in security architecture
  // ---------------------------------------------------------------------------
  {
    id: "d3-049",
    domain: 3,
    objective: "3.4",
    topic: "Recovery sites",
    type: "single",
    stems: [
      "A hospital must be able to resume its patient records system within minutes of a primary data center failure. Cost is a secondary concern. Which of the following should the hospital implement?",
      "An organization's BIA sets a recovery time objective of under one hour for its payment platform. Which of the following site types best meets this requirement?",
      "Which of the following alternate processing sites is fully equipped with current systems and data and can take over operations almost immediately?"
    ],
    correct: ["Hot site"],
    wrong: ["Cold site", "Warm site", "Mobile site", "Offsite tape vault"],
    explanation: "A hot site is a fully equipped, near-real-time copy of production that can take over almost immediately, which supports very short RTOs at the highest cost. A warm site has hardware but needs data restored and configuration. A cold site has only space and power and can take days to weeks.",
    hint: "Hot = ready now ($$$). Warm = some setup. Cold = empty room.",
    refs: [
      { title: "NIST SP 800-34 Rev. 1 Contingency Planning Guide", url: "https://csrc.nist.gov/pubs/sp/800/34/r1/final" },
      { title: "NIST CSRC Glossary: hot site", url: "https://csrc.nist.gov/glossary/term/hot_site" },
      { title: "Professor Messer SY0-701: Resiliency (3.4)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/resiliency-sy0-701/" }
    ]
  },
  {
    id: "d3-050",
    domain: 3,
    objective: "3.4",
    topic: "Clustering vs. load balancing",
    type: "single",
    stems: [
      "A company configures several servers to work together as one logical server. Each server is aware of the others, and all of them use shared storage. Which of the following resiliency methods is this?",
      "A database team wants its servers to coordinate with each other and share a common storage system, so that users see one single server. Which of the following should the team implement?"
    ],
    correct: ["Server clustering"],
    wrong: ["Load balancing", "Geographic dispersion", "Platform diversity", "Journaling"],
    explanation: "In server clustering, multiple servers work together as one system, each node knows about the others, and they often use shared storage. In load balancing, a central device distributes requests to servers that are not aware of each other and can even run different operating systems.",
    hint: "Nodes know each other + shared storage = cluster. Servers unaware, central distributor = load balancer.",
    refs: [
      { title: "Professor Messer SY0-701: Resiliency (3.4)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/resiliency-sy0-701/" }
    ]
  },
  {
    id: "d3-051",
    domain: 3,
    objective: "3.4",
    topic: "Geographic dispersion",
    type: "single",
    stems: [
      "A company in a hurricane-prone coastal city wants to make sure that a single storm cannot disable both its primary and its backup data centers. Which of the following should the company use?",
      "An organization's recovery site is two miles from its main office, and both buildings are on the same flood plain. Which of the following resiliency concepts is missing?"
    ],
    correct: ["Geographic dispersion"],
    wrong: ["Platform diversity", "Server clustering", "Journaling", "Capacity planning"],
    explanation: "Geographic dispersion places recovery sites far enough from the primary site that one regional event, such as a hurricane, flood, or power grid failure, cannot affect both. Platform diversity protects against shared software flaws, and clustering protects against single server failures in one location.",
    hint: "Same disaster cannot reach both sites = geographic dispersion.",
    refs: [
      { title: "Professor Messer SY0-701: Resiliency (3.4)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/resiliency-sy0-701/" },
      { title: "NIST SP 800-34 Rev. 1 Contingency Planning Guide", url: "https://csrc.nist.gov/pubs/sp/800/34/r1/final" }
    ]
  },
  {
    id: "d3-052",
    domain: 3,
    objective: "3.4",
    topic: "Platform diversity",
    type: "single",
    stems: [
      "A security architect runs critical services on both Linux and Windows so that one OS-specific zero-day cannot disable every system. Which of the following resiliency concepts is the architect applying?",
      "A company deploys both macOS and Windows on employee laptops so that a single operating system vulnerability cannot affect all endpoints. Which of the following does this describe?"
    ],
    correct: ["Platform diversity"],
    wrong: ["Geographic dispersion", "Server clustering", "Capacity planning", "Continuity of operations"],
    explanation: "Platform diversity uses different operating systems or technologies so that a vulnerability in one platform cannot affect every system. Geographic dispersion protects against location-based disasters, and clustering usually uses identical operating systems, so it does not give this protection.",
    hint: "Different platforms, different bugs = platform diversity.",
    refs: [
      { title: "Professor Messer SY0-701: Resiliency (3.4)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/resiliency-sy0-701/" },
      { title: "NIST SP 800-160 Vol. 2 Rev. 1: Developing Cyber-Resilient Systems", url: "https://csrc.nist.gov/pubs/sp/800/160/v2/r1/final" }
    ]
  },
  {
    id: "d3-053",
    domain: 3,
    objective: "3.4",
    topic: "Recovery testing",
    type: "single",
    stems: [
      "A disaster recovery team meets in a conference room and talks through its response to a ransomware scenario without touching any systems. Which of the following is the team performing?",
      "A company wants to check its recovery plan at low cost and with no risk to production systems. Which of the following is the most appropriate test?",
      "Which of the following is a discussion-based walk-through of the steps in a recovery plan?"
    ],
    correct: ["Tabletop exercise"],
    wrong: ["Failover test", "Phishing simulation", "Parallel processing", "Full interruption test"],
    explanation: "A tabletop exercise is a discussion-based session in which team members talk through their roles and the plan's steps for a scenario. It finds gaps in the plan at low cost and without affecting production. A failover test actually switches to redundant systems, and a full interruption test shuts down the primary site.",
    hint: "Talk it through around a table = tabletop.",
    refs: [
      { title: "NIST CSRC Glossary: tabletop exercise", url: "https://csrc.nist.gov/glossary/term/tabletop_exercise" },
      { title: "NIST SP 800-84: Guide to Test, Training, and Exercise Programs", url: "https://csrc.nist.gov/pubs/sp/800/84/final" },
      { title: "Professor Messer SY0-701: Recovery Testing (3.4)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/recovery-testing-sy0-701/" }
    ]
  },
  {
    id: "d3-054",
    domain: 3,
    objective: "3.4",
    topic: "Snapshots",
    type: "single",
    stems: [
      "Before applying a major patch, an administrator wants to save the exact state of a virtual machine so that it can be rolled back quickly if the patch fails. Which of the following should the administrator use?",
      "Which of the following backup methods is common in virtual and cloud environments and captures the state of an entire system at a single point in time?"
    ],
    correct: ["Snapshot"],
    wrong: ["Journaling", "Replication", "Offsite tape backup", "Differential backup"],
    explanation: "A snapshot records the state of a virtual machine or volume at a point in time, so an administrator can roll back to it quickly. Replication copies changes continuously to another location, journaling protects writes in progress, and tape or differential backups are slower to restore a whole system from.",
    hint: "Point-in-time VM copy for fast rollback = snapshot.",
    refs: [
      { title: "NIST CSRC Glossary: snapshot", url: "https://csrc.nist.gov/glossary/term/snapshot" },
      { title: "Professor Messer SY0-701: Backups (3.4)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/backups-sy0-701/" }
    ]
  },
  {
    id: "d3-055",
    domain: 3,
    objective: "3.4",
    topic: "Journaling",
    type: "single",
    stems: [
      "A database server lost power in the middle of a write, but the database was not corrupted, because changes were first written to a separate log and only then applied. Which of the following prevented the corruption?",
      "Which of the following writes data changes to a log first, so that an interrupted write does not corrupt the main data?"
    ],
    correct: ["Journaling"],
    wrong: ["Snapshots", "Replication", "Load balancing", "Platform diversity"],
    explanation: "Journaling first writes changes to a journal and then commits them to the main data. If power fails during the write, the main data is still consistent and the journal can be used to recover. Replication would copy a corrupted write to other locations, and snapshots capture only fixed points in time.",
    hint: "Write to the journal first, then to the data = journaling.",
    refs: [
      { title: "Professor Messer SY0-701: Backups (3.4)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/backups-sy0-701/" }
    ]
  },
  {
    id: "d3-056",
    domain: 3,
    objective: "3.4",
    topic: "Backups",
    type: "multi",
    stems: [
      "A company wants its backups to survive a fire at the main office and to stay confidential if backup media is lost in transit. Which of the following should the company do?",
      "An auditor finds that backup tapes are stored unencrypted in the same server room as the production systems. Which of the following should the company do to fix both problems?"
    ],
    correct: ["Store backup copies offsite", "Encrypt the backup data"],
    wrong: ["Increase the backup frequency", "Enable journaling on the database", "Take VM snapshots on the same host", "Add RAID 1 to the production servers"],
    explanation: "Offsite backups survive a disaster that destroys the primary site, and encryption keeps backup data confidential if the media is lost or stolen (the keys must also be protected and available for recovery). More frequent backups, journaling, local snapshots, and RAID do not protect against a site-wide fire or media theft.",
    hint: "Fire = move a copy offsite. Lost media = encrypt it.",
    refs: [
      { title: "Professor Messer SY0-701: Backups (3.4)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/backups-sy0-701/" },
      { title: "NIST SP 800-34 Rev. 1 Contingency Planning Guide", url: "https://csrc.nist.gov/pubs/sp/800/34/r1/final" }
    ]
  },
  {
    id: "d3-057",
    domain: 3,
    objective: "3.4",
    topic: "Power resiliency",
    type: "single",
    stems: [
      "A data center's backup generator takes about a minute to start after a utility outage. Which of the following should keep the servers running during that gap?",
      "A small office needs battery power to keep its network equipment running through short outages and brownouts, and to shut servers down safely. Which of the following should be installed?"
    ],
    correct: ["Uninterruptible power supply"],
    wrong: ["Backup generator", "Power distribution unit", "Surge protector", "Dual power supplies"],
    explanation: "A UPS uses batteries to supply power immediately when utility power fails, which covers short outages and the start-up gap before a generator runs. A generator supplies long-term power as long as it has fuel, but it is not instant. A PDU only distributes power, and dual power supplies do not help if the utility feed fails.",
    hint: "UPS = short-term battery bridge. Generator = long-term fuel power.",
    refs: [
      { title: "NIST CSRC Glossary: uninterruptible power supply", url: "https://csrc.nist.gov/glossary/term/uninterruptible_power_supply" },
      { title: "Professor Messer SY0-701: Power Resiliency (3.4)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/power-resiliency-sy0-701/" }
    ]
  },
  {
    id: "d3-058",
    domain: 3,
    objective: "3.4",
    topic: "Capacity planning",
    type: "single",
    stems: [
      "A call center expects its call volume to double during an annual enrollment period. Hiring and training staff takes weeks, so managers plan headcount months ahead. Which area of capacity planning does this address?",
      "During capacity planning, a manager notes that too few employees causes slow service and too many employees raises costs. Which capacity planning area is the manager evaluating?"
    ],
    correct: ["People"],
    wrong: ["Technology", "Infrastructure", "Platform diversity", "Geographic dispersion"],
    explanation: "Capacity planning matches supply to demand in three areas: people, technology, and infrastructure. The people area covers having enough trained staff, which is slow and costly to increase or decrease. Technology covers services that can scale, and infrastructure covers the underlying hardware, network, and cloud resources.",
    hint: "Staff, hiring, and training = the people part of capacity planning.",
    refs: [
      { title: "Professor Messer SY0-701: Capacity Planning (3.4)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/capacity-planning-sy0-701/" },
      { title: "NIST CSRC Glossary: capacity planning", url: "https://csrc.nist.gov/glossary/term/capacity_planning" }
    ]
  },
  {
    id: "d3-059",
    domain: 3,
    objective: "3.4",
    topic: "Continuity of operations",
    type: "single",
    stems: [
      "During a long point-of-sale outage, a store switches to paper receipts and phone-based card approvals so that it can keep serving customers. Which of the following plans includes these steps?",
      "Which of the following plans focuses on keeping essential business functions running, including manual processes, when normal technology is not available?"
    ],
    correct: ["Continuity of operations plan"],
    wrong: ["Capacity plan", "Change management plan", "Incident response playbook", "Data retention policy"],
    explanation: "A continuity of operations plan (COOP) keeps essential functions running during a disruption, often with alternate or manual processes such as paper receipts and phone approvals. These procedures must be designed before they are needed. Capacity planning matches resources to demand, and change management controls planned changes.",
    hint: "Keep the business running, even on paper = COOP.",
    refs: [
      { title: "Professor Messer SY0-701: Resiliency (3.4)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/resiliency-sy0-701/" },
      { title: "Ready.gov: Continuity Planning", url: "https://www.ready.gov/business/emergency-plans/continuity-planning" },
      { title: "NIST SP 800-34 Rev. 1 Contingency Planning Guide", url: "https://csrc.nist.gov/pubs/sp/800/34/r1/final" }
    ]
  },
  {
    id: "d3-060",
    domain: 3,
    objective: "3.4",
    topic: "Resilience and recovery",
    type: "match",
    stems: [
      "A business continuity manager is reviewing resilience options. Match each description with the term that it describes."
    ],
    pairs: [
      { item: "Facility with power and space but no computer equipment", answer: "Cold site" },
      { item: "Facility with some equipment; data and setup still needed", answer: "Warm site" },
      { item: "Copies data to another location in near real time", answer: "Replication" },
      { item: "Supplies long-term power as long as fuel lasts", answer: "Generator" },
      { item: "Switches to redundant systems on purpose to confirm takeover", answer: "Failover test" },
      { item: "Fake phishing email sent to staff to test their reactions", answer: "Simulation" }
    ],
    extraOptions: ["Hot site", "Snapshot", "Tabletop exercise", "UPS"],
    explanation: "A cold site has space and power only, and a warm site has some equipment but needs data and configuration. Replication keeps a near-real-time copy elsewhere. A generator gives long-term power, while a UPS covers only short gaps. A failover test proves that redundant systems take over, and a simulation, such as a phishing campaign, tests reactions to a realistic event.",
    hint: "Empty = cold. Partial = warm. Real-time copy = replication. Fuel = generator. Switch over = failover. Fake attack = simulation.",
    refs: [
      { title: "NIST CSRC Glossary: cold site", url: "https://csrc.nist.gov/glossary/term/cold_site" },
      { title: "NIST CSRC Glossary: warm site", url: "https://csrc.nist.gov/glossary/term/warm_site" },
      { title: "Professor Messer SY0-701: Recovery Testing (3.4)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/recovery-testing-sy0-701/" }
    ]
  },
  {
    id: "d3-061",
    domain: 3,
    objective: "3.3",
    topic: "Data in transit",
    type: "single",
    stems: [
      "A company sets up a site-to-site VPN between its headquarters and a branch office. Which of the following data states does this VPN protect?",
      "An administrator requires TLS for every connection between a web application and its remote database server. Which of the following data states does this control protect?",
      "Which of the following data states describes information while it moves across a network from one system to another?"
    ],
    correct: ["Data in transit"],
    wrong: ["Data at rest", "Data in use", "Data sovereignty", "Geographic restrictions"],
    explanation: "Data in transit (data in motion) is data that moves across a network. VPNs and TLS encrypt it on the way. Data at rest is stored on disk, and data in use is in memory or being processed. Data sovereignty and geographic restrictions are about where data is legally stored or accessed, not data states.",
    hint: "VPN or TLS tunnel between two places = data in transit.",
    refs: [
      { title: "Professor Messer SY0-701: States of Data (3.3)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/states-of-data-sy0-701/" },
      { title: "NIST SP 800-77 Rev. 1: Guide to IPsec VPNs", url: "https://csrc.nist.gov/pubs/sp/800/77/r1/final" }
    ]
  },
  {
    id: "d3-062",
    domain: 3,
    objective: "3.4",
    topic: "Backups",
    type: "single",
    stems: [
      "Ransomware encrypted the file servers at a manufacturing company. Which of the following will be most helpful to restore the data without paying the ransom?",
      "A company's top concern is that it can get its data back after a ransomware attack. Which of the following should the company invest in?"
    ],
    correct: ["Backups"],
    wrong: ["Load balancing", "Geographic dispersion", "Encryption", "Clustering", "RAID 1 mirroring"],
    explanation: "Backups let a company restore data that ransomware has encrypted, without paying. The backups must be offline or immutable, because ransomware also encrypts copies it can reach. RAID mirroring and clustering copy the encrypted data at once, load balancing and geographic dispersion improve availability, and encryption protects confidentiality, so none of them bring back the original files.",
    hint: "Get the data BACK after ransomware = backups (keep a copy offline).",
    refs: [
      { title: "Professor Messer SY0-701: Backups", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/backups-sy0-701/" },
      { title: "CISA #StopRansomware Guide", url: "https://www.cisa.gov/stopransomware/ransomware-guide" }
    ]
  }
]);
