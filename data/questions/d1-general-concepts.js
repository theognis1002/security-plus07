// Domain 1 — General Security Concepts (SY0-701). Add new questions at the end.
QBANK.add([
  // ---------------------------------------------------------------------------
  // 1.1 Security controls
  // ---------------------------------------------------------------------------
  {
    id: "d1-001",
    domain: 1,
    objective: "1.1",
    topic: "Compensating controls",
    type: "single",
    stems: [
      "A vendor announced a critical flaw in a payroll application, but the patch will not be available for 60 days. A security administrator adds a firewall rule that blocks the exploit traffic until the patch is released. Which of the following control types best describes this rule?",
      "A hospital cannot patch an imaging system because the manufacturer no longer supports it. The security team isolates the system on a separate VLAN with strict ACLs in place of the patch. Which of the following best describes this control?",
      "An auditor finds that a small company cannot implement a required security control. The company puts an alternative safeguard in place that gives comparable protection. Which of the following control types did the company use?"
    ],
    correct: ["Compensating"],
    wrong: ["Corrective", "Preventive", "Directive", "Deterrent", "Detective"],
    explanation: "A compensating control is an alternative safeguard used in place of a control that cannot be implemented (for now), and it gives equivalent or comparable protection, such as a firewall rule until a patch is released. Corrective controls fix an incident after it occurs, and directive or deterrent controls only instruct or discourage people.",
    hint: "Keywords 'until the patch', 'cannot implement', 'instead of', 'alternative' = compensating.",
    refs: [
      { title: "NIST CSRC Glossary: compensating security control", url: "https://csrc.nist.gov/glossary/term/compensating_security_control" },
      { title: "Professor Messer SY0-701: Security Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/" }
    ]
  },
  {
    id: "d1-002",
    domain: 1,
    objective: "1.1",
    topic: "Deterrent controls",
    type: "single",
    stems: [
      "A company posts signs along its data center fence that warn that trespassers will be prosecuted. Which of the following control types do the signs represent?",
      "Before users log in to a server, a splash screen states that all activity is monitored and that misuse will result in dismissal. Which of the following control types is this screen?",
      "A security manager wants a control that discourages attackers from attempting an intrusion, even though it will not physically or technically stop them. Which of the following control types should the manager choose?"
    ],
    correct: ["Deterrent"],
    wrong: ["Directive", "Preventive", "Detective", "Corrective", "Compensating"],
    explanation: "A deterrent control discourages an attacker by making the attack seem risky or the consequences severe, but it does not block the attack. Warning signs and login splash screens that threaten consequences are classic deterrents. Preventive controls physically or technically stop access, and detective controls identify that an event occurred.",
    hint: "Warning of consequences ('will be prosecuted', 'misuse = dismissal') = deterrent. It makes them think twice.",
    refs: [
      { title: "Professor Messer SY0-701: Security Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/" },
      { title: "NIST SP 800-53 Rev. 5: Security and Privacy Controls", url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" }
    ]
  },
  {
    id: "d1-003",
    domain: 1,
    objective: "1.1",
    topic: "Directive controls",
    type: "single",
    stems: [
      "A company's security policy tells employees to save all files that contain customer data in an encrypted network folder. Nothing technically stops users from saving the files elsewhere. Which of the following control types is this policy?",
      "A compliance procedure tells staff the steps they must follow when they handle regulated health records. Which of the following control types does this procedure represent?",
      "Which of the following control types tells people what they should do, rather than technically forcing the secure behavior?"
    ],
    correct: ["Directive"],
    wrong: ["Deterrent", "Preventive", "Compensating", "Detective", "Corrective"],
    explanation: "A directive control directs people toward secure behavior, for example a policy that tells users where to store sensitive files or a compliance procedure. It is a relatively weak control because it depends on people following it. A deterrent discourages through threat of consequences, and a preventive control actually blocks the action.",
    hint: "'Instructs', 'tells employees to', 'procedure to follow' = directive. Directive = directions.",
    refs: [
      { title: "Professor Messer SY0-701: Security Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/" }
    ]
  },
  {
    id: "d1-004",
    domain: 1,
    objective: "1.1",
    topic: "Corrective controls",
    type: "single",
    stems: [
      "Ransomware encrypted the files on a file server. A systems administrator wipes the server and restores the data from the last known good backup. Which of the following control types did the administrator use?",
      "After an EDR alert confirms that a workstation is infected with malware, a technician reimages the workstation to return it to a known good state. Which of the following best describes this control?",
      "Which of the following control types is applied after an incident is detected, to reverse or limit the impact of the incident?"
    ],
    correct: ["Corrective"],
    wrong: ["Detective", "Preventive", "Compensating", "Deterrent", "Directive"],
    explanation: "A corrective control acts after an event is detected to reverse or reduce its impact, such as restoring from backup or reimaging an infected host. Detective controls only identify the event, and preventive controls try to stop it before it happens.",
    hint: "After the damage: restore, reimage, recover, put out the fire = corrective.",
    refs: [
      { title: "Professor Messer SY0-701: Security Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/" },
      { title: "NIST SP 800-61 Rev. 3: Incident Response Recommendations", url: "https://csrc.nist.gov/pubs/sp/800/61/r3/final" }
    ]
  },
  {
    id: "d1-005",
    domain: 1,
    objective: "1.1",
    topic: "Detective controls",
    type: "single",
    stems: [
      "A security analyst reviews authentication logs every morning to find failed and unusual login attempts. Which of the following control types does this activity represent?",
      "A warehouse installs motion detectors that alert the security desk when movement occurs after business hours. Which of the following control types are the motion detectors?",
      "Which of the following control types identifies and records that an event occurred but does not stop the event?"
    ],
    correct: ["Detective"],
    wrong: ["Preventive", "Corrective", "Deterrent", "Directive", "Compensating"],
    explanation: "A detective control identifies, records, or alerts on an event while or after it happens, such as log review, IDS alerts, or motion detectors. It does not block the event, which is the job of a preventive control, and it does not repair damage, which is the job of a corrective control.",
    hint: "Logs, alerts, alarms, reviews, motion detectors = detective. It finds, it does not stop.",
    refs: [
      { title: "Professor Messer SY0-701: Security Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/" },
      { title: "NIST SP 800-92: Guide to Computer Security Log Management", url: "https://csrc.nist.gov/pubs/sp/800/92/final" }
    ]
  },
  {
    id: "d1-006",
    domain: 1,
    objective: "1.1",
    topic: "Control categories",
    type: "match",
    stems: [
      "Match each security control with its control category. Options may be used more than once.",
      "A new security analyst must classify the controls listed in an audit report. Match each control with the correct control category. Options may be used more than once."
    ],
    pairs: [
      { item: "Firewall access control list", answer: "Technical" },
      { item: "Endpoint antivirus software", answer: "Technical" },
      { item: "Annual risk assessment", answer: "Managerial" },
      { item: "Written information security policy", answer: "Managerial" },
      { item: "Security awareness training sessions", answer: "Operational" },
      { item: "Bollards at the building entrance", answer: "Physical" }
    ],
    extraOptions: [],
    explanation: "Technical controls are carried out by hardware, software, or firmware (firewall ACLs, antivirus). Managerial controls focus on managing risk and security, such as risk assessments and security policies. Operational controls are carried out mainly by people, such as awareness training. Physical controls limit physical access, such as bollards, fences, and locks.",
    hint: "Technical = the system does it. Managerial = policy and risk decisions. Operational = people do it. Physical = you can touch it.",
    refs: [
      { title: "NIST CSRC Glossary: technical controls", url: "https://csrc.nist.gov/glossary/term/technical_controls" },
      { title: "NIST CSRC Glossary: management controls", url: "https://csrc.nist.gov/glossary/term/management_controls" },
      { title: "Professor Messer SY0-701: Security Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/" }
    ]
  },
  {
    id: "d1-007",
    domain: 1,
    objective: "1.1",
    topic: "Control types",
    type: "match",
    stems: [
      "Match each security control with its control type. Each type is used once.",
      "A CISO asks a junior analyst to label each control in the security program by what it does. Match each control with the correct control type."
    ],
    pairs: [
      { item: "Lock on the server room door", answer: "Preventive" },
      { item: "Login splash screen that warns misuse leads to dismissal", answer: "Deterrent" },
      { item: "Daily review of system logs", answer: "Detective" },
      { item: "Restoring a server from backup after ransomware", answer: "Corrective" },
      { item: "Firewall rule that blocks an exploit until the vendor releases a patch", answer: "Compensating" },
      { item: "Policy telling users to store sensitive files in an encrypted folder", answer: "Directive" }
    ],
    extraOptions: [],
    explanation: "Preventive controls block access (locks), deterrent controls discourage (warning banners), detective controls identify events (log review), corrective controls repair after an event (restore from backup), compensating controls substitute for a control that cannot be applied yet (temporary firewall rule), and directive controls tell people what to do (storage policy).",
    hint: "Stop it = preventive. Scare it = deterrent. See it = detective. Fix it = corrective. Substitute = compensating. Instruct = directive.",
    refs: [
      { title: "Professor Messer SY0-701: Security Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/" }
    ]
  },
  {
    id: "d1-008",
    domain: 1,
    objective: "1.1",
    topic: "Preventive controls",
    type: "multi",
    stems: [
      "A security manager wants controls that stop unauthorized access before it happens, not controls that only record or discourage it. Which of the following should the manager choose?",
      "Which of the following are examples of preventive controls?",
      "An auditor asks a systems administrator to list the controls that actively block unauthorized access to the payroll servers. Which of the following should the administrator list?"
    ],
    correct: ["Locked server room door", "Firewall deny rule"],
    wrong: ["Motion detector alerts", "Trespassing warning sign", "Restore from backup", "Daily log review"],
    explanation: "Preventive controls stop an event before it occurs: a door lock blocks physical entry and a firewall deny rule blocks network access. Motion detector alerts and log review are detective, a warning sign is a deterrent, and restoring from backup is corrective.",
    hint: "Preventive = it actually blocks (lock, firewall rule). If it only alerts, warns, or repairs, it is not preventive.",
    refs: [
      { title: "Professor Messer SY0-701: Security Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/" }
    ]
  },

  // ---------------------------------------------------------------------------
  // 1.2 Fundamental security concepts
  // ---------------------------------------------------------------------------
  {
    id: "d1-009",
    domain: 1,
    objective: "1.2",
    topic: "Non-repudiation",
    type: "single",
    stems: [
      "A user denies sending an email that authorized a large wire transfer. Which of the following would best prove that the user sent the message?",
      "An organization needs assurance that the author of a signed contract cannot later deny signing it. Which of the following provides this assurance?",
      "Which of the following security concepts is achieved when a sender signs a message with a private key so the sender cannot dispute sending it?",
      "Every change to the payroll system is recorded with the administrator's digital signature, so no administrator can later claim that someone else made a change. Which of the following does this provide?"
    ],
    correct: ["Non-repudiation"],
    wrong: ["Confidentiality", "Availability", "Authorization", "Tokenization", "Obfuscation", "Adaptive identity", "Security zones"],
    explanation: "Non-repudiation gives proof of origin: a digital signature made with the sender's private key can be verified by anyone with the public key, so the sender cannot credibly deny it. Confidentiality hides data, availability keeps systems usable, authorization grants permissions, and tokenization/obfuscation hide data values. Adaptive identity changes authentication requirements based on risk, and security zones separate networks by trust level. None of them prove who did something.",
    hint: "Keywords 'cannot deny' / 'prove who sent' = non-repudiation. Think: digital signature with the sender's PRIVATE key.",
    refs: [
      { title: "NIST CSRC Glossary: non-repudiation", url: "https://csrc.nist.gov/glossary/term/non_repudiation" },
      { title: "Professor Messer SY0-701: Non-repudiation", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/non-repudiation-sy0-701/" }
    ]
  },
  {
    id: "d1-010",
    domain: 1,
    objective: "1.2",
    topic: "CIA triad - integrity",
    type: "single",
    stems: [
      "A software vendor publishes a SHA-256 hash next to each download. A systems administrator compares the hash of a downloaded file to the published value. Which of the following security goals does this check support?",
      "A database administrator must detect any unauthorized change to stored financial records. Which part of the CIA triad does this requirement address?",
      "Which of the following security concepts ensures that data has not been modified or destroyed in an unauthorized way?"
    ],
    correct: ["Integrity"],
    wrong: ["Confidentiality", "Availability", "Non-repudiation", "Authorization"],
    explanation: "Integrity means guarding against improper modification or destruction of information, and comparing hashes is a common way to verify it. Confidentiality prevents disclosure, availability keeps data accessible, and a plain hash does not prove who created the data, so it does not give non-repudiation.",
    hint: "Hash compare, 'not altered', 'unauthorized change' = integrity.",
    refs: [
      { title: "NIST CSRC Glossary: integrity", url: "https://csrc.nist.gov/glossary/term/integrity" },
      { title: "Professor Messer SY0-701: The CIA Triad", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/the-cia-triad-sy0-701/" }
    ]
  },
  {
    id: "d1-011",
    domain: 1,
    objective: "1.2",
    topic: "CIA triad - availability",
    type: "single",
    stems: [
      "An online retailer adds redundant power supplies, load balancers, and a second internet provider so that customers can always reach its store. Which security goal does the retailer support?",
      "A DDoS attack makes a company's customer portal unreachable for several hours. No data was stolen or changed. Which part of the CIA triad was affected?",
      "Which of the following concepts means that systems and data are accessible to authorized users when they need them?"
    ],
    correct: ["Availability"],
    wrong: ["Confidentiality", "Integrity", "Non-repudiation", "Accounting"],
    explanation: "Availability means timely and reliable access to information and systems. Redundancy and load balancing support it, and a DDoS attack attacks it. Confidentiality and integrity were not affected in these scenarios because no data was disclosed or changed.",
    hint: "Uptime, redundancy, DDoS, 'always reachable' = availability.",
    refs: [
      { title: "NIST CSRC Glossary: availability", url: "https://csrc.nist.gov/glossary/term/availability" },
      { title: "Professor Messer SY0-701: The CIA Triad", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/the-cia-triad-sy0-701/" }
    ]
  },
  {
    id: "d1-012",
    domain: 1,
    objective: "1.2",
    topic: "AAA - accounting",
    type: "single",
    stems: [
      "A VPN concentrator sends a record of each user's login time, session length, and data transferred to a central AAA server. Which AAA function does this provide?",
      "After an incident, an investigator needs to know which resources a user accessed and for how long. Which component of the AAA framework provides this information?",
      "Which part of AAA keeps a record of what a user did after the user gained access?"
    ],
    correct: ["Accounting"],
    wrong: ["Authentication", "Authorization", "Identification", "Federation"],
    explanation: "Accounting records what a user does: login and logout times, session duration, and resources or data used. Authentication proves identity, and authorization decides what the user may access, but neither keeps the usage record.",
    hint: "AAA: Authentication = who are you; Authorization = what can you do; Accounting = what did you do.",
    refs: [
      { title: "Professor Messer SY0-701: Authentication, Authorization, and Accounting", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/authentication-authorization-and-accounting-sy0-701/" },
      { title: "RFC 2866: RADIUS Accounting", url: "https://www.rfc-editor.org/rfc/rfc2866" }
    ]
  },
  {
    id: "d1-013",
    domain: 1,
    objective: "1.2",
    topic: "AAA - authorization",
    type: "single",
    stems: [
      "A user logs in successfully with a password and a hardware token but gets an 'access denied' message when she opens the payroll folder. Which of the following AAA functions denied the request?",
      "After a user's identity is verified, an application checks the user's role to decide whether the user can approve purchase orders. Which of the following does this step represent?",
      "Which of the following determines what an authenticated user is allowed to access?"
    ],
    correct: ["Authorization"],
    wrong: ["Authentication", "Accounting", "Identification", "Non-repudiation"],
    explanation: "Authorization is the decision to permit or deny a subject access to a resource after the subject's identity is established. Authentication already succeeded in these scenarios, and accounting only records activity.",
    hint: "Logged in but 'access denied' = authorization. Identity first (authentication), then permissions (authorization).",
    refs: [
      { title: "NIST CSRC Glossary: authorization", url: "https://csrc.nist.gov/glossary/term/authorization" },
      { title: "Professor Messer SY0-701: Authentication, Authorization, and Accounting", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/authentication-authorization-and-accounting-sy0-701/" }
    ]
  },
  {
    id: "d1-014",
    domain: 1,
    objective: "1.2",
    topic: "Authenticating systems",
    type: "single",
    stems: [
      "A company wants its VPN concentrator to confirm that each connecting laptop is a company-owned device, not only that the user knows a password. Which of the following is the best solution?",
      "A security architect must authenticate thousands of remote sensors that cannot type a password. Which of the following should the architect use?",
      "Which of the following is the best way to authenticate a system, rather than a person, to a corporate network?"
    ],
    correct: ["Device certificate signed by the company CA"],
    wrong: ["Shared password stored on every device", "Hostname naming convention", "Static IP address assignment", "User security questions"],
    explanation: "Systems are commonly authenticated with a digital certificate installed on the device and signed by the organization's certificate authority. The verifier checks that the device certificate was signed by a trusted CA. Shared passwords, hostnames, and IP addresses are easy to copy or spoof, and security questions authenticate people, not devices.",
    hint: "Device can't type a password -> put a CA-signed certificate on it.",
    refs: [
      { title: "Professor Messer SY0-701: Authentication, Authorization, and Accounting", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/authentication-authorization-and-accounting-sy0-701/" },
      { title: "NIST CSRC Glossary: authentication", url: "https://csrc.nist.gov/glossary/term/authentication" }
    ]
  },
  {
    id: "d1-015",
    domain: 1,
    objective: "1.2",
    topic: "Gap analysis",
    type: "single",
    stems: [
      "A company wants to align with ISO/IEC 27001. The CISO asks the team to compare the current security controls to the standard and report the differences with a plan to close them. Which of the following is the CISO requesting?",
      "A consultant compares a client's existing controls to the requirements in NIST SP 800-171 and lists which requirements are not yet met. Which of the following did the consultant perform?",
      "Which of the following identifies the difference between an organization's current security posture and a desired baseline?"
    ],
    correct: ["Gap analysis"],
    wrong: ["Penetration test", "Business impact analysis", "Vulnerability scan", "Tabletop exercise", "Root cause analysis"],
    explanation: "A gap analysis compares where the organization is today with where it wants to be, often against a baseline such as ISO/IEC 27001 or NIST SP 800-171, and documents the path to close the gaps. A penetration test or vulnerability scan looks for technical weaknesses, and a business impact analysis measures the effect of disruptions on business functions.",
    hint: "'Compare current to standard/baseline' + 'where we are vs. where we want to be' = gap analysis.",
    refs: [
      { title: "Professor Messer SY0-701: Gap Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/gap-analysis-sy0-701/" },
      { title: "NIST CSRC Glossary: gap analysis", url: "https://csrc.nist.gov/glossary/term/gap_analysis" }
    ]
  },
  {
    id: "d1-016",
    domain: 1,
    objective: "1.2",
    topic: "Zero trust - policy enforcement point",
    type: "single",
    stems: [
      "In a zero trust architecture, which component sits in the data path and enables, monitors, and terminates the connection between a subject and an enterprise resource?",
      "A network architect describes a component as the 'gatekeeper': all traffic to a resource must pass through it, and it applies the access decision that it receives. Which of the following is the architect describing?",
      "A zero trust design puts a gateway in front of an HR application. The gateway does not make access decisions itself but permits or blocks each session based on the decision it receives. Which of the following is this gateway?"
    ],
    correct: ["Policy enforcement point"],
    wrong: ["Policy engine", "Policy administrator", "Implicit trust zone", "Subject"],
    explanation: "In NIST SP 800-207, the policy enforcement point (PEP) is in the data plane and enables, monitors, and terminates connections between subjects and resources. It enforces the decision but does not make it: the policy engine makes the decision, and the policy administrator sends it to the PEP.",
    hint: "Enforcement point = the gatekeeper in the traffic path. Engine decides, administrator relays, PEP enforces.",
    refs: [
      { title: "NIST SP 800-207: Zero Trust Architecture", url: "https://csrc.nist.gov/pubs/sp/800/207/final" },
      { title: "NIST CSRC Glossary: policy enforcement point", url: "https://csrc.nist.gov/glossary/term/policy_enforcement_point" },
      { title: "Professor Messer SY0-701: Zero Trust", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/zero-trust-sy0-701/" }
    ]
  },
  {
    id: "d1-017",
    domain: 1,
    objective: "1.2",
    topic: "Zero trust - adaptive identity",
    type: "single",
    stems: [
      "A user who normally logs in from Chicago tries to log in at 3 a.m. from an IP address in another country. The system requires an extra authentication factor before it allows access. Which zero trust concept does this describe?",
      "An access system looks at a user's location, device, connection type, and relationship to the company before it decides how strong the authentication must be. Which of the following concepts is in use?",
      "A CISO wants authentication requirements to increase automatically when the context of a login request looks risky. Which zero trust concept should the CISO implement?"
    ],
    correct: ["Adaptive identity"],
    wrong: ["Implicit trust zone", "Threat scope reduction", "Data plane", "Policy enforcement point"],
    explanation: "Adaptive identity evaluates context about the request, such as location, IP address, device, and relationship to the organization, and then requires stronger authentication when the risk is higher. An implicit trust zone is an area that is trusted after the enforcement point, and the policy enforcement point only enforces decisions.",
    hint: "Context changes the login requirements (unusual location -> extra factor) = adaptive identity.",
    refs: [
      { title: "Professor Messer SY0-701: Zero Trust", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/zero-trust-sy0-701/" },
      { title: "NIST SP 800-207: Zero Trust Architecture", url: "https://csrc.nist.gov/pubs/sp/800/207/final" }
    ]
  },
  {
    id: "d1-018",
    domain: 1,
    objective: "1.2",
    topic: "Zero trust components",
    type: "match",
    stems: [
      "Match each description with the correct zero trust component or concept. Each option is used once.",
      "A security architect is documenting a new zero trust design based on NIST SP 800-207. Match each description with the correct component or concept."
    ],
    pairs: [
      { item: "Enables, monitors, and ends the connection between a subject and a resource", answer: "Policy enforcement point" },
      { item: "Compares a request to policy and decides to grant, deny, or revoke access", answer: "Policy engine" },
      { item: "Sends the access decision and session credentials to the enforcement point", answer: "Policy administrator" },
      { item: "Raises authentication requirements based on location and other context", answer: "Adaptive identity" },
      { item: "Area past the enforcement point where traffic is trusted", answer: "Implicit trust zone" },
      { item: "User, process, or application that requests access to a resource", answer: "Subject/system" }
    ],
    extraOptions: ["Data plane", "Control plane"],
    explanation: "In NIST SP 800-207 the policy engine makes the access decision, the policy administrator carries out the decision by setting up or shutting down the session and giving credentials to the PEP, and the PEP enforces it in the data path. Adaptive identity uses context to adjust authentication, the implicit trust zone is the area behind the PEP, and subjects/systems are the requesters.",
    hint: "Engine = decides. Administrator = delivers the decision. Enforcement point = gatekeeper. Subject = who asks.",
    refs: [
      { title: "NIST SP 800-207: Zero Trust Architecture", url: "https://csrc.nist.gov/pubs/sp/800/207/final" },
      { title: "Professor Messer SY0-701: Zero Trust", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/zero-trust-sy0-701/" }
    ]
  },
  {
    id: "d1-019",
    domain: 1,
    objective: "1.2",
    topic: "Access control vestibule",
    type: "single",
    stems: [
      "Employees report that visitors often follow authorized staff through the data center door before it closes. Which of the following physical controls would best prevent this?",
      "A secure facility wants an entry area with two interlocking doors, where the second door cannot open until the first door closes. Which of the following should be installed?",
      "Which of the following physical controls is designed to stop tailgating by letting only one person at a time pass through a controlled space?"
    ],
    correct: ["Access control vestibule"],
    wrong: ["Vehicle bollards", "Video surveillance system", "Perimeter security fencing", "Badge readers on each door", "Security lighting"],
    explanation: "An access control vestibule (formerly called a mantrap) uses interlocking doors so that one door must close before the next opens, which controls each person who passes and stops tailgating. Badges and cameras identify or record people but do not stop someone from following an authorized user, and bollards stop vehicles.",
    hint: "Tailgating / piggybacking + two interlocking doors = access control vestibule.",
    refs: [
      { title: "Professor Messer SY0-701: Physical Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-security-sy0-701/" }
    ]
  },
  {
    id: "d1-020",
    domain: 1,
    objective: "1.2",
    topic: "Bollards",
    type: "single",
    stems: [
      "A government building wants to stop vehicles from being driven into its front entrance while still letting pedestrians walk through freely. Which of the following should be installed?",
      "After a car crashed through a retail store's glass front, the company wants a barrier that blocks vehicles but not foot traffic. Which of the following is the best choice?",
      "Which of the following physical controls is a set of short, sturdy posts that keeps vehicles away from a building?"
    ],
    correct: ["Bollards"],
    wrong: ["Access control vestibule", "Perimeter fencing", "Video surveillance", "Pressure sensors", "Security lighting"],
    explanation: "Bollards are short, strong posts that block vehicles from reaching a building or entrance while still letting people walk between them. A fence would also block pedestrians, and cameras, lighting, and sensors detect or deter but do not physically stop a vehicle.",
    hint: "Stop cars, allow people = bollards.",
    refs: [
      { title: "Professor Messer SY0-701: Physical Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-security-sy0-701/" }
    ]
  },
  {
    id: "d1-021",
    domain: 1,
    objective: "1.2",
    topic: "Physical security sensors",
    type: "match",
    stems: [
      "Match each sensor description with the correct sensor type. Each option is used once.",
      "A facilities manager is choosing intrusion sensors for a new warehouse. Match each description with the correct sensor type."
    ],
    pairs: [
      { item: "Detects infrared radiation from a moving body in a limited area, even in the dark", answer: "Infrared" },
      { item: "Detects a change in force when someone steps on a floor or mat", answer: "Pressure" },
      { item: "Detects movement across a much larger area than an infrared sensor", answer: "Microwave" },
      { item: "Sends sound waves and detects motion from their reflections", answer: "Ultrasonic" }
    ],
    extraOptions: ["Video surveillance"],
    explanation: "Infrared sensors detect infrared radiation and work well for motion in a relatively limited area. Pressure sensors detect a change in force. Microwave sensors detect movement over a larger area than infrared. Ultrasonic sensors send sound waves and detect motion from the reflections.",
    hint: "Heat = infrared. Weight = pressure. Big area = microwave. Sound echo = ultrasonic.",
    refs: [
      { title: "Professor Messer SY0-701: Physical Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-security-sy0-701/" }
    ]
  },
  {
    id: "d1-022",
    domain: 1,
    objective: "1.2",
    topic: "Honeytokens",
    type: "single",
    stems: [
      "A security team places fake cloud API keys in a public file share and creates an alert that fires if anyone tries to use them. Which deception technique is this?",
      "A company adds several fake customer email addresses to its CRM database. If those addresses ever receive spam or appear in a data dump, the company will know that the database leaked. Which of the following is the company using?",
      "Which of the following is a piece of traceable fake data, such as a credential or database record, that alerts defenders when it is used or appears outside the network?"
    ],
    correct: ["Honeytoken"],
    wrong: ["Honeyfile", "Honeypot", "Honeynet", "DNS sinkhole"],
    explanation: "A honeytoken is traceable fake data, such as fake API credentials, email addresses, or database records, that has no legitimate use, so any use or appearance of it shows a compromise and where the data came from. A honeyfile is a whole decoy file, a honeypot is a decoy system, and a honeynet is a network of honeypots.",
    hint: "Fake DATA you can trace (fake keys, fake emails, fake records) = honeytoken. File = honeyfile, system = honeypot, network = honeynet.",
    refs: [
      { title: "Professor Messer SY0-701: Deception and Disruption", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/deception-and-disruption-sy0-701/" },
      { title: "MITRE D3FEND: Decoy User Credential", url: "https://d3fend.mitre.org/technique/d3f:DecoyUserCredential/" }
    ]
  },
  {
    id: "d1-023",
    domain: 1,
    objective: "1.2",
    topic: "Lighting and video surveillance",
    type: "multi",
    stems: [
      "Security cameras in a company's parking lot record dark, unusable video at night. Which of the following would best improve the ability to identify people in the footage?",
      "A facility manager wants night-time video surveillance to capture clear images of anyone near the loading dock. Which of the following should the manager implement?"
    ],
    correct: ["Additional area lighting", "Infrared-capable cameras"],
    wrong: ["Bollards at the entrance", "Taller perimeter fencing", "Access control vestibule", "Pressure sensors in the lot"],
    explanation: "Good lighting lets cameras capture usable images, and infrared-capable cameras can see in dark areas. Bollards, fences, and vestibules control physical access, and pressure sensors detect presence, but none of them improve the camera images.",
    hint: "Dark video? Add light, or use cameras that see infrared.",
    refs: [
      { title: "Professor Messer SY0-701: Physical Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-security-sy0-701/" }
    ]
  },
  {
    id: "d1-024",
    domain: 1,
    objective: "1.2",
    topic: "Zero trust principles",
    type: "multi",
    stems: [
      "A CISO plans to move the company to a zero trust model. Which of the following principles should the new design follow?",
      "Which of the following statements describe zero trust?",
      "A security architect reviews a network design that claims to follow zero trust. Which of the following should the architect expect to see in the design?"
    ],
    correct: ["Verify every access request", "Grant least privilege access"],
    wrong: ["Trust devices on the internal LAN", "Authenticate only at the network edge", "Grant broad access to reduce friction", "Rely on the perimeter firewall alone"],
    explanation: "Zero trust assumes the network is already compromised, so it gives no trust based on network location and evaluates each access request, giving only the least privilege needed. Trusting internal devices or checking only at the perimeter is the traditional castle-and-moat model that zero trust replaces.",
    hint: "Zero trust = never trust, always verify, least privilege, every request. Location is not trust.",
    refs: [
      { title: "NIST CSRC Glossary: zero trust", url: "https://csrc.nist.gov/glossary/term/zero_trust" },
      { title: "NIST SP 800-207: Zero Trust Architecture", url: "https://csrc.nist.gov/pubs/sp/800/207/final" },
      { title: "CISA Zero Trust Maturity Model", url: "https://www.cisa.gov/zero-trust-maturity-model" }
    ]
  },

  // ---------------------------------------------------------------------------
  // 1.3 Change management
  // ---------------------------------------------------------------------------
  {
    id: "d1-025",
    domain: 1,
    objective: "1.3",
    topic: "Backout plan",
    type: "single",
    stems: [
      "A network engineer upgrades the firmware on core switches, and the upgrade causes routing failures. Which part of the change request should the engineer follow to return the switches to their previous state?",
      "A change advisory board rejects a change request because it does not explain how to revert the system if the change fails. Which of the following is missing from the request?",
      "Which of the following documents the steps to restore a system to its original configuration if a change is unsuccessful?"
    ],
    correct: ["Backout plan"],
    wrong: ["Impact analysis", "Maintenance window", "Test results", "Standard operating procedure", "Stakeholder list"],
    explanation: "A backout plan documents how to revert to the original configuration if a change fails, and it should be tested before the change. The impact analysis assesses risk before approval, the maintenance window is when the change happens, and test results show how the change behaved in testing.",
    hint: "Change failed -> 'back out' to the way it was = backout plan.",
    refs: [
      { title: "Professor Messer SY0-701: Change Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/change-management-sy0-701/" },
      { title: "NIST SP 800-128: Security-Focused Configuration Management", url: "https://csrc.nist.gov/pubs/sp/800/128/upd1/final" }
    ]
  },
  {
    id: "d1-026",
    domain: 1,
    objective: "1.3",
    topic: "Impact analysis",
    type: "single",
    stems: [
      "Before a change advisory board approves a database upgrade, it asks what could go wrong if the change is made and what risk exists if it is not made. Which of the following provides this information?",
      "A change manager must rate a proposed firewall change as high, medium, or low risk and list the systems it could affect. Which part of the change management process is this?",
      "Which change management activity determines how a proposed change could affect the security and operation of a system?"
    ],
    correct: ["Impact analysis"],
    wrong: ["Backout plan", "Maintenance window", "Version control", "Standard operating procedure"],
    explanation: "An impact analysis identifies the risks of making the change (outages, broken applications, data corruption) and of not making it (an unpatched vulnerability), so the approvers can make a decision. A backout plan reverts a failed change, and a maintenance window sets when the change happens.",
    hint: "'What could go wrong / what is affected / risk rating' = impact analysis.",
    refs: [
      { title: "Professor Messer SY0-701: Change Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/change-management-sy0-701/" },
      { title: "NIST CSRC Glossary: security impact analysis", url: "https://csrc.nist.gov/glossary/term/security_impact_analysis" }
    ]
  },
  {
    id: "d1-027",
    domain: 1,
    objective: "1.3",
    topic: "Maintenance window",
    type: "single",
    stems: [
      "A hospital's IT team schedules a server patch for 2:00 a.m. on Sunday, when the fewest users are on the system. Which change management element does this represent?",
      "A retailer allows changes to production systems only during a defined period each week that has the least business impact. Which of the following does this describe?",
      "A change is approved, but the systems administrator must wait until the off-hours period that the change policy sets aside for changes. Which of the following is this period?"
    ],
    correct: ["Maintenance window"],
    wrong: ["Backout plan", "Impact analysis", "Approval process", "Version control"],
    explanation: "A maintenance window is a scheduled period, usually off-hours, when changes may be made with the least disruption to users. The approval process decides whether the change happens, and the backout plan describes how to revert it.",
    hint: "'When' the change happens (nights, weekends, low-impact time) = maintenance window.",
    refs: [
      { title: "Professor Messer SY0-701: Change Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/change-management-sy0-701/" }
    ]
  },
  {
    id: "d1-028",
    domain: 1,
    objective: "1.3",
    topic: "Stakeholders",
    type: "single",
    stems: [
      "The shipping department asks IT to upgrade its label-printing software. The change manager also informs accounting and customer service, because their reports and processes use the same labels. Which of the following did the change manager identify?",
      "Before a change is approved, an IT team researches which people and departments the change will affect so that those groups can give input. Which of the following is the team identifying?"
    ],
    correct: ["Stakeholders"],
    wrong: ["Change owner", "Backout plan", "Maintenance window", "Test results"],
    explanation: "Stakeholders are the individuals or departments affected by a change, who will want input on it and on when it occurs. They are not always obvious, so IT may need to research them. The change owner is the person or department that requests and manages the change.",
    hint: "Everyone who is AFFECTED by the change = stakeholders.",
    refs: [
      { title: "Professor Messer SY0-701: Change Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/change-management-sy0-701/" },
      { title: "NIST CSRC Glossary: stakeholder", url: "https://csrc.nist.gov/glossary/term/stakeholder" }
    ]
  },
  {
    id: "d1-029",
    domain: 1,
    objective: "1.3",
    topic: "Dependencies",
    type: "single",
    stems: [
      "A firewall management console upgrade will fail unless every managed firewall first runs a newer firmware version. Which change management consideration does this describe?",
      "A systems administrator learns that a new version of an application will not work until an updated database driver is installed first. Which technical implication of change management is this?"
    ],
    correct: ["Dependencies"],
    wrong: ["Legacy applications", "Restricted activities", "Downtime", "Allow list"],
    explanation: "A dependency exists when one component must be changed or installed before another can be updated or work correctly, sometimes on a different system. Dependencies make a change larger than it first appears, so they must be identified in planning.",
    hint: "'Must be done first' / 'requires another component' = dependencies.",
    refs: [
      { title: "Professor Messer SY0-701: Technical Change Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/technical-change-management-sy0-701/" }
    ]
  },
  {
    id: "d1-030",
    domain: 1,
    objective: "1.3",
    topic: "Legacy applications",
    type: "single",
    stems: [
      "A manufacturing plant runs its inventory software on an old operating system. The developer went out of business years ago, and no one on staff fully understands the software. Which change management concern does this describe?",
      "A change request will affect a 15-year-old application that has no vendor support and little documentation. Which of the following technical implications should the change manager consider?"
    ],
    correct: ["Legacy applications"],
    wrong: ["Dependencies", "Restricted activities", "Service restart", "Deny list"],
    explanation: "Legacy applications are old, often unsupported applications that few people understand, so changes to or around them carry extra risk. Documenting how the application works can bring it into the normal support process. Dependencies are about the order of required components, not the age or support status of the application.",
    hint: "Old + unsupported + 'nobody knows how it works' = legacy application.",
    refs: [
      { title: "Professor Messer SY0-701: Technical Change Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/technical-change-management-sy0-701/" }
    ]
  },
  {
    id: "d1-031",
    domain: 1,
    objective: "1.3",
    topic: "Version control",
    type: "single",
    stems: [
      "A network team wants to keep every previous router configuration, see what changed between versions, and quickly revert to an earlier configuration. Which of the following should the team use?",
      "A DevOps engineer needs to track each change to infrastructure scripts, who made it, and when, so that earlier versions can be restored. Which of the following provides this?"
    ],
    correct: ["Version control"],
    wrong: ["Impact analysis", "Maintenance window", "Allow list", "Standard operating procedure"],
    explanation: "Version control tracks the different versions of code, software, or configurations, records what changed between them, and makes it possible to revert to an earlier version. An impact analysis assesses risk before a change, and a maintenance window only sets when the change occurs.",
    hint: "Track every version + roll back to an earlier one = version control.",
    refs: [
      { title: "Professor Messer SY0-701: Technical Change Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/technical-change-management-sy0-701/" },
      { title: "NIST CSRC Glossary: configuration control", url: "https://csrc.nist.gov/glossary/term/configuration_control" }
    ]
  },
  {
    id: "d1-032",
    domain: 1,
    objective: "1.3",
    topic: "Restricted activities",
    type: "single",
    stems: [
      "During an approved two-hour window to update printer drivers, a technician also wants to upgrade an unrelated application. The change policy allows only the work listed in the approved request. Which of the following does this describe?",
      "A change control policy limits technicians to the specific scope documented in the approved change request. Which technical implication of change management is this?"
    ],
    correct: ["Restricted activities"],
    wrong: ["Dependencies", "Legacy applications", "Downtime", "Allow list"],
    explanation: "Restricted activities means that work during a change is limited to the scope in the approved change request. A technician cannot use the window to make other, unrelated changes, although a documented process may allow small scope changes that are needed to finish the approved work.",
    hint: "Only do what the approved change says = restricted activities.",
    refs: [
      { title: "Professor Messer SY0-701: Technical Change Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/technical-change-management-sy0-701/" }
    ]
  },

  // ---------------------------------------------------------------------------
  // 1.4 Cryptographic solutions
  // ---------------------------------------------------------------------------
  {
    id: "d1-033",
    domain: 1,
    objective: "1.4",
    topic: "Key escrow",
    type: "single",
    stems: [
      "A company requires that copies of employee encryption keys be held by a trusted third party, so that encrypted data can be recovered if an employee leaves. Which of the following is this?",
      "A government contract requires that decryption keys be stored with an approved agent, so that the keys can be recovered under specific legal conditions. Which of the following meets this requirement?",
      "Which of the following describes keeping a copy of a private key with a trusted party to support key recovery?"
    ],
    correct: ["Key escrow"],
    wrong: ["Key stretching", "Key exchange", "Certificate revocation", "Tokenization", "Salting"],
    explanation: "Key escrow is the retention of a copy of a private or decryption key by a trusted party so the key can be recovered later. Key stretching strengthens weak keys, key exchange securely shares keys between parties, and certificate revocation invalidates a certificate.",
    hint: "Third party HOLDS a copy of the key for recovery = key escrow (like money held in escrow).",
    refs: [
      { title: "NIST CSRC Glossary: key escrow", url: "https://csrc.nist.gov/glossary/term/key_escrow" },
      { title: "Professor Messer SY0-701: Public Key Infrastructure", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/public-key-infrastructure-sy0-701/" }
    ]
  },
  {
    id: "d1-034",
    domain: 1,
    objective: "1.4",
    topic: "Asymmetric encryption keys",
    type: "single",
    stems: [
      "Alice wants to send Bob a confidential file with asymmetric encryption so that only Bob can read it. Which key should Alice use to encrypt the file?",
      "A partner company will send encrypted contract files that only your company can decrypt with its private key. Which key must the partner use to encrypt the files?",
      "In public key cryptography, which key is used to encrypt a message so that only the intended recipient can decrypt it?"
    ],
    correct: ["Recipient's public key"],
    wrong: ["Recipient's private key", "Sender's private key", "Sender's public key", "CA's public key"],
    explanation: "For confidentiality, the sender encrypts with the recipient's public key, and only the matching recipient private key can decrypt. The recipient's private key must never be shared, and data encrypted with the sender's private key can be decrypted by anyone with the sender's public key, so it gives no confidentiality.",
    hint: "Encrypt TO someone = THEIR public key. Only their private key opens it.",
    refs: [
      { title: "NIST CSRC Glossary: public key cryptography", url: "https://csrc.nist.gov/glossary/term/public_key_cryptography" },
      { title: "NIST CSRC Glossary: public key", url: "https://csrc.nist.gov/glossary/term/public_key" },
      { title: "Professor Messer SY0-701: Public Key Infrastructure", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/public-key-infrastructure-sy0-701/" }
    ]
  },
  {
    id: "d1-035",
    domain: 1,
    objective: "1.4",
    topic: "Digital signature verification",
    type: "single",
    stems: [
      "A user receives an email that a coworker digitally signed. Which key does the user's email client use to verify the signature?",
      "A company downloads a software update that the vendor digitally signed. Which key does the company use to confirm that the vendor signed the update?",
      "Which key is used to verify a digital signature?"
    ],
    correct: ["Signer's public key"],
    wrong: ["Signer's private key", "Recipient's private key", "Recipient's public key", "Shared symmetric key"],
    explanation: "A digital signature is created with the signer's private key and verified with the signer's public key, which anyone can get. The signer's private key stays secret with the signer, and the recipient's keys play no part in signature verification.",
    hint: "Sign with YOUR private key; others verify with YOUR public key.",
    refs: [
      { title: "NIST CSRC Glossary: digital signature", url: "https://csrc.nist.gov/glossary/term/digital_signature" },
      { title: "FIPS 186-5: Digital Signature Standard", url: "https://csrc.nist.gov/pubs/fips/186-5/final" },
      { title: "Professor Messer SY0-701: Hashing and Digital Signatures", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hashing-and-digital-signatures-sy0-701/" }
    ]
  },
  {
    id: "d1-036",
    domain: 1,
    objective: "1.4",
    topic: "Symmetric encryption",
    type: "single",
    stems: [
      "A company must encrypt several terabytes of backup data quickly. Which type of encryption is best suited for this bulk data?",
      "Which type of encryption uses the same secret key to encrypt and decrypt data and is generally faster than public key encryption?",
      "A developer chooses AES-256 to encrypt files at rest. Which category of encryption is the developer using?"
    ],
    correct: ["Symmetric encryption"],
    wrong: ["Asymmetric encryption", "Hashing", "Digital signatures", "Steganography"],
    explanation: "Symmetric encryption, such as AES, uses one shared secret key for both encryption and decryption and is much faster than asymmetric encryption, so it is used for bulk data. Asymmetric encryption is slower and is usually used for key exchange and signatures, and hashing is one-way, so the data cannot be decrypted.",
    hint: "One shared key + fast + bulk data (AES) = symmetric.",
    refs: [
      { title: "NIST CSRC Glossary: symmetric key algorithm", url: "https://csrc.nist.gov/glossary/term/symmetric_key_algorithm" },
      { title: "FIPS 197: Advanced Encryption Standard (AES)", url: "https://csrc.nist.gov/pubs/fips/197/final" },
      { title: "Professor Messer SY0-701: Encrypting Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/encrypting-data-sy0-701/" }
    ]
  },
  {
    id: "d1-037",
    domain: 1,
    objective: "1.4",
    topic: "Key exchange",
    type: "single",
    stems: [
      "Two servers must agree on a shared secret key over an untrusted network without ever sending the key itself. Which of the following should they use?",
      "During a TLS 1.3 handshake, which algorithm lets the client and server derive the same session key from public values they exchange?",
      "Which of the following is a key exchange algorithm?"
    ],
    correct: ["Diffie-Hellman"],
    wrong: ["AES-256", "SHA-256", "MD5", "Triple DES"],
    explanation: "Diffie-Hellman (and its elliptic-curve and ephemeral variants) lets two parties establish a shared secret key over an insecure network without sending the key. TLS 1.3 uses ephemeral (EC)DHE for key exchange. AES and 3DES are symmetric ciphers, and SHA-256 and MD5 are hash functions.",
    hint: "Agree on a key over an insecure channel without sending it = Diffie-Hellman.",
    refs: [
      { title: "NIST CSRC Glossary: Diffie-Hellman", url: "https://csrc.nist.gov/glossary/term/diffie_hellman" },
      { title: "RFC 8446: TLS 1.3", url: "https://www.rfc-editor.org/rfc/rfc8446" },
      { title: "Professor Messer SY0-701: Key Exchange", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/key-exchange-sy0-701/" }
    ]
  },
  {
    id: "d1-038",
    domain: 1,
    objective: "1.4",
    topic: "Trusted Platform Module",
    type: "single",
    stems: [
      "A laptop's full-disk encryption keeps its key in a chip on the motherboard, so the drive cannot be read if it is moved to another computer. Which of the following is this chip?",
      "A security administrator wants to use a hardware chip built into each workstation to store boot measurements and protect disk encryption keys. Which of the following should the administrator use?",
      "Which of the following is a tamper-resistant chip on a computer's motherboard that can generate keys and protect small amounts of sensitive data?"
    ],
    correct: ["Trusted Platform Module"],
    wrong: ["Hardware security module", "Key management system", "Certificate authority", "Key escrow agent"],
    explanation: "A Trusted Platform Module (TPM) is a tamper-resistant chip built into a computer's motherboard. It performs cryptographic operations, protects keys such as full-disk encryption keys, and supports secure and measured boot. An HSM is a separate high-performance device for many systems, and a key management system is software for managing keys centrally.",
    hint: "Chip on ONE computer's motherboard = TPM. Big shared appliance for many servers = HSM.",
    refs: [
      { title: "NIST CSRC Glossary: Trusted Platform Module", url: "https://csrc.nist.gov/glossary/term/trusted_platform_module" },
      { title: "Professor Messer SY0-701: Encryption Technologies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/encryption-technologies-sy0-701/" }
    ]
  },
  {
    id: "d1-039",
    domain: 1,
    objective: "1.4",
    topic: "Hardware security module",
    type: "single",
    stems: [
      "A bank must protect the private keys for hundreds of web servers in a tamper-resistant, high-availability device that also accelerates cryptographic operations. Which of the following should the bank deploy?",
      "A certificate authority keeps its root private key in a dedicated, tamper-resistant hardware device in the data center. Which of the following is this device?"
    ],
    correct: ["Hardware security module"],
    wrong: ["Trusted Platform Module", "Secure enclave", "Self-signed certificate", "Key escrow"],
    explanation: "A hardware security module (HSM) is a dedicated physical device that safeguards and manages cryptographic keys for many systems and performs cryptographic processing, often with redundancy and acceleration. A TPM and a secure enclave protect keys inside a single device, not for a whole data center.",
    hint: "Large scale, many servers, data center appliance, CA root key = HSM.",
    refs: [
      { title: "NIST CSRC Glossary: hardware security module (HSM)", url: "https://csrc.nist.gov/glossary/term/hardware_security_module_hsm" },
      { title: "Professor Messer SY0-701: Encryption Technologies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/encryption-technologies-sy0-701/" }
    ]
  },
  {
    id: "d1-040",
    domain: 1,
    objective: "1.4",
    topic: "Steganography",
    type: "single",
    stems: [
      "A forensic analyst finds that an employee hid confidential text inside the pixels of vacation photos that the employee posted online. Which of the following techniques did the employee use?",
      "An attacker exfiltrates data by embedding it in an audio file that still plays normally. Which of the following describes this technique?",
      "Which of the following hides the existence of data by concealing it within another file or medium?"
    ],
    correct: ["Steganography"],
    wrong: ["Tokenization", "Data masking", "Hashing", "Encryption"],
    explanation: "Steganography hides the existence of a message inside another medium, such as an image, audio, video, or network traffic. Encryption makes data unreadable but does not hide that the data exists, tokenization substitutes values, and hashing is a one-way function.",
    hint: "Hidden IN a picture, audio, or video = steganography ('stego' = covered).",
    refs: [
      { title: "NIST CSRC Glossary: steganography", url: "https://csrc.nist.gov/glossary/term/steganography" },
      { title: "Professor Messer SY0-701: Obfuscation", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/obfuscation-sy0-701/" }
    ]
  },
  {
    id: "d1-041",
    domain: 1,
    objective: "1.4",
    topic: "Tokenization",
    type: "single",
    stems: [
      "A mobile payment app sends a one-time substitute value instead of the real credit card number. A token service maps the value back to the card number. Which of the following is in use?",
      "A retailer wants to replace stored Social Security numbers with random values that have no mathematical relationship to the originals, while a secure vault keeps the mapping. Which of the following should the retailer use?"
    ],
    correct: ["Tokenization"],
    wrong: ["Data masking", "Hashing", "Encryption", "Steganography", "Salting"],
    explanation: "Tokenization replaces sensitive data with a token that has no mathematical relationship to the original, and a token service or vault maps the token back to the real value when needed. Encryption is mathematically reversible with a key, hashing is one-way with no lookup, and masking hides part of a value for display.",
    hint: "Substitute value + lookup vault + no math relationship = tokenization (mobile payments).",
    refs: [
      { title: "Professor Messer SY0-701: Obfuscation", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/obfuscation-sy0-701/" },
      { title: "PCI Security Standards Council", url: "https://www.pcisecuritystandards.org/" }
    ]
  },
  {
    id: "d1-042",
    domain: 1,
    objective: "1.4",
    topic: "Data masking",
    type: "single",
    stems: [
      "A call center application shows representatives only the last four digits of a customer's credit card number, with the other digits replaced by asterisks. Which of the following is in use?",
      "A printed receipt shows a card number as ************4821. Which technique protects the rest of the number?"
    ],
    correct: ["Data masking"],
    wrong: ["Tokenization", "Steganography", "Hashing", "Salting"],
    explanation: "Data masking hides part or all of a value, for example by replacing digits with asterisks, so that only the needed portion is shown. Tokenization replaces the whole value with a token that maps back through a vault, and hashing and salting are used to protect stored values such as passwords.",
    hint: "Asterisks / 'last four digits only' = data masking.",
    refs: [
      { title: "NIST CSRC Glossary: masking", url: "https://csrc.nist.gov/glossary/term/masking" },
      { title: "Professor Messer SY0-701: Obfuscation", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/obfuscation-sy0-701/" }
    ]
  },
  {
    id: "d1-043",
    domain: 1,
    objective: "1.4",
    topic: "Salting",
    type: "single",
    stems: [
      "A password database shows that several users have the same hash, which reveals that they chose the same password. Which of the following would prevent identical passwords from producing identical hashes?",
      "A developer adds a unique random value to each password before hashing it, so that precomputed rainbow tables are ineffective. Which of the following is the developer using?"
    ],
    correct: ["Salting"],
    wrong: ["Key stretching", "Tokenization", "Data masking", "Digital signing"],
    explanation: "A salt is a unique random value added to each password before it is hashed, so the same password gives different hashes for different users and precomputed rainbow tables do not work. Key stretching makes each guess slower but, by itself, does not make identical passwords produce different hashes.",
    hint: "Random value added per password -> different hashes for the same password = salt.",
    refs: [
      { title: "OWASP Password Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
      { title: "Professor Messer SY0-701: Hashing and Digital Signatures", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hashing-and-digital-signatures-sy0-701/" }
    ]
  },
  {
    id: "d1-044",
    domain: 1,
    objective: "1.4",
    topic: "Key stretching",
    type: "single",
    stems: [
      "A developer uses PBKDF2 to run each password through many thousands of hashing iterations, so that each brute-force guess takes much longer. Which technique is this?",
      "A security engineer wants to make weak user passwords more resistant to brute-force attacks by hashing them repeatedly before they are used as keys. Which of the following should the engineer implement?"
    ],
    correct: ["Key stretching"],
    wrong: ["Salting", "Key escrow", "Key exchange", "Tokenization"],
    explanation: "Key stretching (key strengthening) repeatedly applies a hash or key derivation function, as PBKDF2 and bcrypt do, so that each password guess costs much more time. A salt adds randomness so identical passwords hash differently, but the many iterations are what make up key stretching.",
    hint: "Many iterations / hash the hash / PBKDF2 / bcrypt = key stretching.",
    refs: [
      { title: "NIST SP 800-132: Recommendation for Password-Based Key Derivation", url: "https://csrc.nist.gov/pubs/sp/800/132/final" },
      { title: "Professor Messer SY0-701: Encrypting Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/encrypting-data-sy0-701/" }
    ]
  },
  {
    id: "d1-045",
    domain: 1,
    objective: "1.4",
    topic: "Blockchain",
    type: "single",
    stems: [
      "A supply chain consortium wants a distributed, tamper-evident record of transactions in which each block is cryptographically linked to the previous block. Which of the following technologies meets this requirement?",
      "Which of the following is an open public ledger that many participants share and that makes changes to past records evident?"
    ],
    correct: ["Blockchain"],
    wrong: ["Certificate revocation list", "Key escrow", "Tokenization", "Steganography"],
    explanation: "A blockchain is a distributed digital ledger of signed transactions grouped into blocks, with each block cryptographically linked to the previous one, which makes tampering evident. A CRL lists revoked certificates, and key escrow stores copies of keys.",
    hint: "Distributed ledger + chained blocks + tamper-evident = blockchain.",
    refs: [
      { title: "NIST CSRC Glossary: blockchain", url: "https://csrc.nist.gov/glossary/term/blockchain" },
      { title: "NISTIR 8202: Blockchain Technology Overview", url: "https://csrc.nist.gov/pubs/ir/8202/final" },
      { title: "Professor Messer SY0-701: Blockchain Technology", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/blockchain-technology-sy0-701/" }
    ]
  },
  {
    id: "d1-046",
    domain: 1,
    objective: "1.4",
    topic: "Wildcard certificates",
    type: "single",
    stems: [
      "A company needs one certificate that secures www.example.com, mail.example.com, and other first-level subdomains of example.com that it adds later. Which type of certificate should the company get?",
      "A web administrator installs a certificate whose subject name is *.example.com. Which type of certificate is this?"
    ],
    correct: ["Wildcard certificate"],
    wrong: ["Self-signed certificate", "Code-signing certificate", "Root certificate", "Extended validation certificate"],
    explanation: "A wildcard certificate uses an asterisk in the leftmost label, such as *.example.com, to cover any single-level subdomain of the domain. It does not match deeper names such as a.b.example.com. A code-signing certificate signs software, a root certificate is the CA's own trust anchor, and EV certificates cannot be issued as wildcards.",
    hint: "Asterisk (*.domain) = wildcard = many subdomains with one certificate.",
    refs: [
      { title: "RFC 6125: Service Identity in TLS (wildcard matching)", url: "https://www.rfc-editor.org/rfc/rfc6125" },
      { title: "Professor Messer SY0-701: Certificates", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/certificates-sy0-701/" }
    ]
  },
  {
    id: "d1-047",
    domain: 1,
    objective: "1.4",
    topic: "Full-disk encryption",
    type: "single",
    stems: [
      "A sales team's laptops are often lost or stolen. The company wants all data on each drive, including the operating system and temporary files, to be unreadable without a key. Which of the following should the company implement?",
      "Which level of encryption protects the entire storage drive, so that everything on it is encrypted at rest?"
    ],
    correct: ["Full-disk encryption"],
    wrong: ["File-level encryption", "Record-level encryption", "Transport encryption", "Database encryption"],
    explanation: "Full-disk encryption (for example, BitLocker or FileVault) encrypts the whole drive, including the OS, swap, and temporary files, which protects a lost or stolen device. File-level and record-level encryption protect only selected files or records, and transport encryption protects data in transit, not at rest.",
    hint: "Lost/stolen laptop + 'everything on the drive' = full-disk encryption.",
    refs: [
      { title: "NIST SP 800-111: Storage Encryption for End User Devices", url: "https://csrc.nist.gov/pubs/sp/800/111/final" },
      { title: "Professor Messer SY0-701: Encrypting Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/encrypting-data-sy0-701/" }
    ]
  },
  {
    id: "d1-048",
    domain: 1,
    objective: "1.4",
    topic: "Digital signature properties",
    type: "multi",
    stems: [
      "A law firm requires that all contracts sent by email be digitally signed. Which of the following security benefits does a digital signature provide?",
      "Which of the following does a digital signature provide?"
    ],
    correct: ["Integrity", "Authentication", "Non-repudiation"],
    wrong: ["Confidentiality", "Availability", "Obfuscation"],
    explanation: "Per FIPS 186-5, a digital signature provides origin authentication, data integrity, and signatory non-repudiation. It does not encrypt the message, so it gives no confidentiality, and it does nothing for availability.",
    hint: "Digital signature = integrity + authentication + non-repudiation. NOT confidentiality (no encryption of the message).",
    refs: [
      { title: "NIST CSRC Glossary: digital signature", url: "https://csrc.nist.gov/glossary/term/digital_signature" },
      { title: "FIPS 186-5: Digital Signature Standard", url: "https://csrc.nist.gov/pubs/fips/186-5/final" }
    ]
  },
  {
    id: "d1-049",
    domain: 1,
    objective: "1.4",
    topic: "Asymmetric algorithms",
    type: "multi",
    stems: [
      "A security engineer must choose public key algorithms for a new PKI. Which of the following are asymmetric algorithms?",
      "Which of the following algorithms use a public and private key pair?"
    ],
    correct: ["RSA", "ECC"],
    wrong: ["AES", "3DES", "SHA-256", "RC4"],
    explanation: "RSA and elliptic curve cryptography (ECC) are asymmetric algorithms that use a public/private key pair. AES, 3DES, and RC4 are symmetric ciphers that use one shared key, and SHA-256 is a hash function, not an encryption algorithm.",
    hint: "Asymmetric: RSA, ECC (and Diffie-Hellman, DSA). Symmetric: AES, 3DES, RC4. Hash: SHA, MD5.",
    refs: [
      { title: "RFC 8017: PKCS #1 RSA Cryptography Specifications", url: "https://www.rfc-editor.org/rfc/rfc8017" },
      { title: "FIPS 186-5: Digital Signature Standard (RSA, ECDSA, EdDSA)", url: "https://csrc.nist.gov/pubs/fips/186-5/final" },
      { title: "NIST CSRC Glossary: asymmetric cryptography", url: "https://csrc.nist.gov/glossary/term/asymmetric_cryptography" }
    ]
  },
  {
    id: "d1-050",
    domain: 1,
    objective: "1.4",
    topic: "Certificate revocation",
    type: "multi",
    stems: [
      "A browser must find out whether a website's certificate has been revoked before it trusts the site. Which of the following can the browser use?",
      "A PKI administrator revoked a compromised server certificate. Which of the following methods let clients learn about the revocation?"
    ],
    correct: ["Certificate revocation list", "Online Certificate Status Protocol"],
    wrong: ["Certificate signing request", "Key escrow", "Wildcard certificate", "Key stretching"],
    explanation: "A CRL is a signed list of revoked certificates published by the CA, and OCSP lets a client query the status of a single certificate online. A CSR is a request to issue a certificate, and key escrow stores copies of keys; neither reports revocation status.",
    hint: "Revocation check = CRL (download the list) or OCSP (ask about one certificate).",
    refs: [
      { title: "NIST CSRC Glossary: certificate revocation list", url: "https://csrc.nist.gov/glossary/term/certificate_revocation_list" },
      { title: "RFC 6960: Online Certificate Status Protocol (OCSP)", url: "https://www.rfc-editor.org/rfc/rfc6960" },
      { title: "Professor Messer SY0-701: Certificates", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/certificates-sy0-701/" }
    ]
  },
  {
    id: "d1-051",
    domain: 1,
    objective: "1.1",
    topic: "Preventive controls",
    type: "single",
    stems: [
      "A risk manager wants to spend the budget on controls that reduce the likelihood of a breach, rather than controls that limit the damage after one occurs. Which of the following control types should the manager choose?",
      "Which of the following control types is designed to stop a security incident before it can occur?",
      "A company requires MFA for all remote access and closes every unused port on its perimeter firewall. Which of the following control types are these?"
    ],
    correct: ["Preventive"],
    wrong: ["Corrective", "Detective", "Compensating", "Transfer"],
    explanation: "Preventive controls lower the likelihood of an incident because they block it before it happens, for example MFA, firewall deny rules, and door locks. Detective controls find an incident while or after it occurs, and corrective controls reduce the impact afterward. A compensating control is a substitute for a control that cannot be used. Transfer is a risk-management strategy, such as cyber insurance, not a control type.",
    hint: "Lower the LIKELIHOOD = preventive. Lower the IMPACT afterward = corrective.",
    refs: [
      { title: "Professor Messer SY0-701: Security Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/" }
    ]
  }
]);
