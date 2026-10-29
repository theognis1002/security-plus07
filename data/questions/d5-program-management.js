// Domain 5 — Security Program Management and Oversight (SY0-701). Add new questions at the end.
QBANK.add([
  // ───────────────────────── 5.1 Security governance ─────────────────────────
  {
    id: "d5-001",
    domain: 5,
    objective: "5.1",
    topic: "Policy vs standard vs procedure vs guideline",
    type: "match",
    stems: [
      "A new security manager is organizing the company's governance documents. Match each document excerpt with the document type."
    ],
    pairs: [
      { item: "\"All employees must protect company information according to its classification. The CISO enforces this.\"", answer: "Policy" },
      { item: "\"Laptops must use full-disk encryption with AES-256 and lock after 10 minutes of inactivity.\"", answer: "Standard" },
      { item: "\"Step 1: Open a ticket. Step 2: Verify the caller's identity. Step 3: Reset the password and log the change.\"", answer: "Procedure" },
      { item: "\"Staff are encouraged to use a password manager for personal accounts. This is a recommendation, not a requirement.\"", answer: "Guideline" }
    ],
    extraOptions: ["Playbook"],
    explanation: "A policy is a high-level, mandatory statement of intent and responsibility. A standard sets specific, measurable requirements (such as an algorithm or a timeout value) that support a policy. A procedure gives step-by-step instructions, and a guideline gives optional recommendations.",
    hint: "Policy = what and why. Standard = exact required value. Procedure = numbered steps. Guideline = 'should' or 'recommended'.",
    refs: [
      { title: "Professor Messer SY0-701: Security Policies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-policies-sy0-701/" },
      { title: "Professor Messer SY0-701: Security Standards", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-standards-sy0-701/" },
      { title: "NIST SP 800-12 Rev. 1 An Introduction to Information Security", url: "https://csrc.nist.gov/pubs/sp/800/12/r1/final" }
    ]
  },
  {
    id: "d5-002",
    domain: 5,
    objective: "5.1",
    topic: "Acceptable use policy",
    type: "single",
    stems: [
      "As part of onboarding, a new hire must sign a document that states what employees may and may not do with company laptops, email, and internet access. Which of the following documents is this?",
      "An employee is terminated for running a cryptocurrency miner on a company workstation. HR cites a signed document that prohibits personal use of company computing resources. Which of the following documents did HR most likely cite?",
      "A security manager wants one document that tells every user which activities are permitted on corporate networks and devices, and that also helps protect the company from legal liability. Which of the following should the manager write?"
    ],
    correct: ["Acceptable use policy"],
    wrong: ["Non-disclosure agreement", "Service-level agreement", "Change management policy", "Incident response plan", "Data retention policy"],
    explanation: "An acceptable use policy (AUP) defines how users may use the organization's technology, is usually signed during onboarding, and gives documented grounds for disciplinary or legal action. An NDA protects confidential information, an SLA sets service commitments with a provider, and a change management policy controls modifications to systems.",
    hint: "What users are allowed to do with company technology = AUP.",
    refs: [
      { title: "Professor Messer SY0-701: Security Policies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-policies-sy0-701/" },
      { title: "Professor Messer SY0-701: Security Procedures (onboarding)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-procedures-sy0-701/" },
      { title: "NIST SP 800-53 Rev. 5 (PL-4 Rules of Behavior)", url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" }
    ]
  },
  {
    id: "d5-003",
    domain: 5,
    objective: "5.1",
    topic: "Standards (password, encryption)",
    type: "single",
    stems: [
      "A company document states: \"All data at rest on mobile devices must be encrypted with AES-256, and all data in transit must use TLS 1.2 or higher.\" Which of the following types of governance document is this?",
      "A security architect writes a document that specifies the exact hashing algorithm and salt length required for storing user passwords. Which of the following best describes this document?",
      "An auditor reviews a document that lists mandatory, measurable requirements, such as a minimum password length of 14 characters and account lockout after five failed attempts. Which of the following document types did the auditor review?"
    ],
    correct: ["Standard"],
    wrong: ["Guideline", "Procedure", "Playbook", "Memorandum of understanding"],
    explanation: "A standard sets specific, mandatory, measurable requirements, such as required algorithms, key lengths, or password length. SY0-701 lists password, access control, physical security, and encryption as examples of standards. A guideline is optional advice, and a procedure or playbook gives step-by-step actions.",
    hint: "Specific required values (AES-256, 14 characters) = standard.",
    refs: [
      { title: "Professor Messer SY0-701: Security Standards", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-standards-sy0-701/" },
      { title: "NIST CSRC Glossary: standard", url: "https://csrc.nist.gov/glossary/term/standard" }
    ]
  },
  {
    id: "d5-004",
    domain: 5,
    objective: "5.1",
    topic: "Procedures — playbooks",
    type: "single",
    stems: [
      "A SOC manager wants analysts to follow the same documented, step-by-step actions every time ransomware is detected, and later automate those steps in a SOAR platform. Which of the following should the manager create?",
      "During a data breach investigation, a junior analyst asks what to do first, second, and third. The team lead points to a document written for that specific type of event. Which of the following is the team lead referencing?",
      "Which of the following provides a checklist of actions for responding to one specific type of security event, such as a compromised email account?"
    ],
    correct: ["Playbook"],
    wrong: ["Guideline", "Acceptable use policy", "Risk register", "Encryption standard"],
    explanation: "A playbook is a procedure that lists the ordered steps to take for a specific event, such as ransomware or a data breach, and it is often automated in a SOAR platform. A guideline is optional advice, an AUP defines permitted use of technology, and a risk register tracks identified risks.",
    hint: "Step-by-step response for one event type = playbook.",
    refs: [
      { title: "Professor Messer SY0-701: Security Procedures", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-procedures-sy0-701/" },
      { title: "CISA Federal Government Cybersecurity Incident and Vulnerability Response Playbooks", url: "https://www.cisa.gov/resources-tools/resources/federal-government-cybersecurity-incident-and-vulnerability-response-playbooks" }
    ]
  },
  {
    id: "d5-005",
    domain: 5,
    objective: "5.1",
    topic: "Change management policy",
    type: "single",
    stems: [
      "An administrator modifies a production firewall rule on a Friday evening without approval or a rollback plan, and a major outage follows. Which of the following policies would most likely have prevented this?",
      "A CIO wants every modification to production servers to be assessed for risk, approved by a board, scheduled, and documented with a backout plan. Which of the following should the organization formalize?",
      "After several unplanned outages caused by untested updates, an auditor recommends that proposed system modifications be submitted, assessed for impact, and approved before implementation. Which of the following is the auditor recommending?"
    ],
    correct: ["Change management policy"],
    wrong: ["Acceptable use policy", "Data retention policy", "Disaster recovery plan", "Incident response plan"],
    explanation: "A change management policy requires that changes are documented, assessed for risk, approved (often by a change control board), scheduled, and have a backout plan. This prevents unapproved changes from causing outages. An AUP covers user behavior, a retention policy covers how long data is kept, and DR and IR plans apply after a disaster or incident has occurred.",
    hint: "Unapproved or untested modification caused the problem = change management.",
    refs: [
      { title: "Professor Messer SY0-701: Security Policies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-policies-sy0-701/" },
      { title: "Professor Messer SY0-701: Change Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/change-management-sy0-701/" },
      { title: "NIST SP 800-53 Rev. 5 (CM-3 Configuration Change Control)", url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" }
    ]
  },
  {
    id: "d5-006",
    domain: 5,
    objective: "5.1",
    topic: "Business continuity vs disaster recovery",
    type: "single",
    stems: [
      "A retail chain's card-processing network fails. Store managers follow a documented plan to take card payments manually and call the card processor for approvals until the network returns. Which of the following plans are the managers following?",
      "A hospital wants a plan that keeps critical patient services running with alternate manual processes while key IT systems are unavailable. Which of the following should the hospital develop?",
      "Which of the following plans focuses on sustaining essential business processes during and after a significant disruption, rather than on restoring specific IT systems?"
    ],
    correct: ["Business continuity plan"],
    wrong: ["Disaster recovery plan", "Incident response plan", "Change management plan", "Acceptable use policy"],
    explanation: "A business continuity plan (BCP) describes how mission and business processes are sustained during and after a disruption, often with alternate or manual processes. A disaster recovery plan focuses on restoring IT systems and facilities after a major disaster. An incident response plan covers handling security incidents.",
    hint: "Keep the business running (manual workarounds) = BCP. Rebuild the IT systems = DRP.",
    refs: [
      { title: "NIST CSRC Glossary: business continuity plan", url: "https://csrc.nist.gov/glossary/term/business_continuity_plan" },
      { title: "NIST SP 800-34 Rev. 1 Contingency Planning Guide for Federal Information Systems", url: "https://csrc.nist.gov/pubs/sp/800/34/r1/final" },
      { title: "Professor Messer SY0-701: Security Policies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-policies-sy0-701/" }
    ]
  },
  {
    id: "d5-007",
    domain: 5,
    objective: "5.1",
    topic: "Governance structures — boards and committees",
    type: "single",
    stems: [
      "At a large company, a panel of directors sets broad security objectives and then assigns a group of subject matter experts to work out how to meet them. Which of the following describes the group of subject matter experts?",
      "A company's board of directors asks a cross-functional group of security, legal, and IT experts to plan how to meet a new cybersecurity objective and report back for approval. Which of the following governance structures is the cross-functional group?"
    ],
    correct: ["Committee"],
    wrong: ["Board", "Government entity", "Data processor", "External auditor"],
    explanation: "In SY0-701 governance terms, a board sets broad objectives and a committee of subject matter experts takes that direction, plans how to meet the objectives, and presents the results back to the board for approval. A government entity is a public-sector body, and a data processor handles data for a controller.",
    hint: "Board says WHAT; the committee of experts works out HOW.",
    refs: [
      { title: "Professor Messer SY0-701: Security Procedures (governance structures)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-procedures-sy0-701/" },
      { title: "NIST Cybersecurity Framework (Govern function)", url: "https://www.nist.gov/cyberframework" }
    ]
  },
  {
    id: "d5-008",
    domain: 5,
    objective: "5.1",
    topic: "Centralized vs decentralized governance",
    type: "single",
    stems: [
      "A global manufacturer lets each regional business unit set and enforce its own security decisions, with little direction from headquarters. Which of the following governance structures does this describe?",
      "A university allows each college to run its own IT security program and make its own policy decisions. Which of the following best describes this approach?",
      "A newly merged company plans to move from one corporate security group that makes all decisions to a model in which division leaders make decisions for their own areas. Which of the following structures will the company adopt?"
    ],
    correct: ["Decentralized governance"],
    wrong: ["Centralized governance", "Government entity oversight", "Audit committee oversight", "Change advisory board"],
    explanation: "In decentralized governance, decisions are made by separate units or by the people closest to the work. In centralized governance, one group makes decisions for the entire organization. An audit committee oversees audits, and a change advisory board approves changes.",
    hint: "Many groups decide for themselves = decentralized. One group decides for all = centralized.",
    refs: [
      { title: "Professor Messer SY0-701: Security Procedures (governance structures)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-procedures-sy0-701/" },
      { title: "CompTIA Security+ certification (exam objectives)", url: "https://www.comptia.org/certifications/security" }
    ]
  },
  {
    id: "d5-009",
    domain: 5,
    objective: "5.1",
    topic: "External considerations — global",
    type: "single",
    stems: [
      "A software company with offices in Germany, Brazil, and Japan must follow a different data protection law in each country. Which of the following external considerations does this describe?",
      "A security team learns that customer data collected in several countries must stay within each country's borders, and that breach notification rules differ from country to country. Which type of external consideration must the team plan for?"
    ],
    correct: ["Global"],
    wrong: ["Local/regional", "Industry", "Internal"],
    explanation: "An organization that operates in many countries faces global considerations: different data protection, data residency, and breach disclosure laws in each country. Local/regional considerations apply to a city, state, or region, and industry considerations come from sector requirements such as PCI DSS. Internal factors are not external considerations.",
    hint: "Many countries, many different laws = global.",
    refs: [
      { title: "Professor Messer SY0-701: Security Considerations", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-considerations-sy0-701/" },
      { title: "GDPR Art. 3 Territorial scope", url: "https://gdpr-info.eu/art-3-gdpr/" }
    ]
  },
  {
    id: "d5-010",
    domain: 5,
    objective: "5.1",
    topic: "Data roles",
    type: "match",
    stems: [
      "A privacy officer is documenting responsibilities for the company's customer data. Match each description with the data role."
    ],
    pairs: [
      { item: "Senior executive who is ultimately accountable for a data set", answer: "Data owner" },
      { item: "Decides the purposes and means of processing personal data", answer: "Data controller" },
      { item: "Processes personal data on behalf of, and on the instructions of, another organization", answer: "Data processor" },
      { item: "Handles day-to-day care of the data, such as backups and applying access controls", answer: "Data custodian" },
      { item: "The identifiable individual whom the personal data describes", answer: "Data subject" }
    ],
    extraOptions: [],
    explanation: "The data owner is the senior person accountable for the data (for example, the VP of Sales for CRM data). Under GDPR, the controller decides why and how personal data is processed, and the processor processes it on the controller's behalf (for example, an outside payroll firm). The custodian or steward handles day-to-day protection, and the data subject is the person the data is about.",
    hint: "Owner = accountable exec. Controller = decides why/how. Processor = does it for them. Custodian = hands-on care. Subject = the person.",
    refs: [
      { title: "Professor Messer SY0-701: Data Roles and Responsibilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-roles-and-responsibilities-sy0-701/" },
      { title: "GDPR Art. 4 Definitions", url: "https://gdpr-info.eu/art-4-gdpr/" },
      { title: "NIST CSRC Glossary: information owner", url: "https://csrc.nist.gov/glossary/term/information_owner" }
    ]
  },
  {
    id: "d5-011",
    domain: 5,
    objective: "5.1",
    topic: "Procedures — offboarding",
    type: "multi",
    stems: [
      "An employee who has access to encrypted project files resigns. Which of the following should the offboarding procedure include?",
      "A manager reports that a contractor's engagement ended today. Which of the following actions should the IT team take as part of a standard offboarding procedure?"
    ],
    correct: ["Disable the user's account", "Recover company-owned devices"],
    wrong: ["Delete the account and its keys at once", "Have the user sign the AUP", "Issue a new laptop and badge", "Give the manager the user's password"],
    explanation: "Offboarding removes access and recovers assets: disable the account and collect company hardware and data. Disabling (not deleting) the account keeps encryption keys and data available if they are needed later. Signing the AUP and issuing equipment are onboarding steps, and sharing a password breaks accountability.",
    hint: "Offboarding = disable (not delete) and collect the gear.",
    refs: [
      { title: "Professor Messer SY0-701: Security Procedures (offboarding)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-procedures-sy0-701/" },
      { title: "NIST SP 800-53 Rev. 5 (PS-4 Personnel Termination)", url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" }
    ]
  },

  // ───────────────────────── 5.2 Risk management ─────────────────────────
  {
    id: "d5-012",
    domain: 5,
    objective: "5.2",
    topic: "Risk strategies — transfer",
    type: "single",
    stems: [
      "A small retailer decides to purchase a cybersecurity insurance policy to cover the cost of a potential data breach. Which of the following risk management strategies is the retailer using?",
      "After a risk assessment, a company's leadership chooses to shift the financial impact of a ransomware event to a third party by contract. Which of the following best describes this approach?",
      "Which of the following risk responses is demonstrated when an organization buys insurance against a specific loss?"
    ],
    correct: ["Transfer"],
    wrong: ["Accept", "Avoid", "Mitigate", "Exemption"],
    explanation: "Buying insurance or contractually shifting financial impact to another party is risk transference. Accepting means acknowledging the risk and taking no further action. Avoiding means stopping the risky activity, and mitigating means applying controls to reduce likelihood or impact.",
    hint: "Insurance = transfer. Stop doing it = avoid. Add controls = mitigate. Live with it = accept.",
    refs: [
      { title: "NIST SP 800-39 Managing Information Security Risk", url: "https://csrc.nist.gov/pubs/sp/800/39/final" },
      { title: "NIST CSRC Glossary: risk response", url: "https://csrc.nist.gov/glossary/term/risk_response" },
      { title: "Professor Messer SY0-701: Risk Management Strategies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-management-strategies-sy0-701/" }
    ]
  },
  {
    id: "d5-013",
    domain: 5,
    objective: "5.2",
    topic: "Risk strategies — accept (exception, exemption)",
    type: "single",
    stems: [
      "Policy requires critical patches within three days. Testing shows that this month's patch crashes a critical application, so management formally approves an exception to delay the patch until the vendor releases a fix. Which risk management strategy is this?",
      "A manufacturing controller runs an operating system that its vendor does not allow to be patched. Management documents the risk and formally approves an exemption from the patching policy. Which of the following risk management strategies is this?",
      "After a review, leadership decides that the cost of fixing a low-impact vulnerability is greater than the potential loss, and signs off to take no further action. Which risk management strategy has leadership chosen?"
    ],
    correct: ["Accept"],
    wrong: ["Transfer", "Avoid", "Mitigate"],
    explanation: "Risk acceptance means the organization knowingly keeps the risk. SY0-701 lists exemptions and exceptions to policy as forms of acceptance: management formally approves not following a policy for a specific case. Transfer shifts the impact to another party, avoidance stops the activity, and mitigation adds controls.",
    hint: "Formal sign-off to live with the risk (exception or exemption) = accept.",
    refs: [
      { title: "Professor Messer SY0-701: Risk Management Strategies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-management-strategies-sy0-701/" },
      { title: "NIST CSRC Glossary: risk response", url: "https://csrc.nist.gov/glossary/term/risk_response" },
      { title: "NIST SP 800-39 Managing Information Security Risk", url: "https://csrc.nist.gov/pubs/sp/800/39/final" }
    ]
  },
  {
    id: "d5-014",
    domain: 5,
    objective: "5.2",
    topic: "Risk management strategies",
    type: "match",
    stems: [
      "A risk manager is reviewing decisions from the latest risk committee meeting. Match each decision with the risk management strategy."
    ],
    pairs: [
      { item: "Buy a cyber insurance policy to cover breach response costs", answer: "Transfer" },
      { item: "Shut down a rarely used legacy FTP service that cannot be secured", answer: "Avoid" },
      { item: "Deploy a next-generation firewall and MFA to reduce the chance of compromise", answer: "Mitigate" },
      { item: "Document a low-impact risk and formally approve taking no further action", answer: "Accept" }
    ],
    extraOptions: [],
    explanation: "Insurance shifts the financial impact to another party (transfer). Removing the activity removes the risk (avoid). Adding controls reduces likelihood or impact (mitigate). Formally choosing to keep a risk is acceptance.",
    hint: "Insure = transfer; stop = avoid; add controls = mitigate; sign off and live with it = accept.",
    refs: [
      { title: "NIST CSRC Glossary: risk response", url: "https://csrc.nist.gov/glossary/term/risk_response" },
      { title: "Professor Messer SY0-701: Risk Management Strategies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-management-strategies-sy0-701/" }
    ]
  },
  {
    id: "d5-015",
    domain: 5,
    objective: "5.2",
    topic: "Quantitative analysis — SLE",
    type: "single",
    stems: [
      "A database server is valued at $200,000. A risk analyst estimates that a ransomware attack would destroy 25% of its value. What is the single loss expectancy (SLE)?",
      "A company's customer database has an asset value of $200,000. If an attacker corrupts it, the exposure factor is 25%. Which of the following is the SLE for this event?",
      "A risk manager is calculating the loss from one flood event at a branch office. The office equipment is worth $200,000, and a flood would damage 25% of it. What is the SLE?"
    ],
    correct: ["$50,000"],
    wrong: ["$150,000", "$800,000", "$5,000", "$500,000"],
    explanation: "SLE = AV x EF = $200,000 x 0.25 = $50,000. $150,000 uses the 75% that is NOT lost, $800,000 divides AV by EF instead of multiplying, and $5,000 and $500,000 come from misplacing the decimal (0.025 or 2.5).",
    hint: "SLE = Asset Value x Exposure Factor (as a decimal).",
    refs: [
      { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" },
      { title: "NIST IR 8286A Identifying and Estimating Cybersecurity Risk for ERM", url: "https://csrc.nist.gov/pubs/ir/8286/a/final" }
    ]
  },
  {
    id: "d5-016",
    domain: 5,
    objective: "5.2",
    topic: "Quantitative analysis — ALE",
    type: "single",
    stems: [
      "A web server worth $120,000 would lose 50% of its value in a successful attack. This attack is expected once every five years. What is the annualized loss expectancy (ALE)?",
      "An e-commerce company values its payment server at $120,000. Analysts estimate that a breach would cause a 50% loss of value and will occur about once every five years. Which ALE should the risk manager record in the risk register?",
      "A warehouse management system has an asset value of $120,000 and an exposure factor of 0.5 for a hardware failure. The failure is expected once every 5 years. What is the ALE?"
    ],
    correct: ["$12,000"],
    wrong: ["$60,000", "$24,000", "$300,000", "$120,000", "$30,000"],
    explanation: "SLE = $120,000 x 0.5 = $60,000. ARO = 1 event / 5 years = 0.2. ALE = SLE x ARO = $60,000 x 0.2 = $12,000. $60,000 stops at the SLE, $24,000 skips the EF (AV x ARO), $300,000 divides SLE by ARO, $120,000 is only the asset value, and $30,000 multiplies the SLE by the EF again instead of by the ARO.",
    hint: "ALE = (AV x EF) x ARO. Once every 5 years means ARO = 0.2.",
    refs: [
      { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" },
      { title: "NIST IR 8286A Identifying and Estimating Cybersecurity Risk for ERM", url: "https://csrc.nist.gov/pubs/ir/8286/a/final" }
    ]
  },
  {
    id: "d5-017",
    domain: 5,
    objective: "5.2",
    topic: "Quantitative analysis — ALE with ARO above 1",
    type: "single",
    stems: [
      "A company expects 6 laptops to be stolen each year. Each laptop is worth $1,500 and is a total loss when stolen. What is the annualized loss expectancy for laptop theft?",
      "Historical data shows that field technicians lose about 6 tablets per year. Each tablet costs $1,500 to replace, and a lost tablet is a complete loss. What is the ALE for lost tablets?",
      "A risk manager determines an ARO of 6 and an SLE of $1,500 for mobile device theft. What is the ALE?"
    ],
    correct: ["$9,000"],
    wrong: ["$1,500", "$250", "$90,000", "$900"],
    explanation: "A total loss means EF = 1.0, so SLE = $1,500 x 1.0 = $1,500. ALE = SLE x ARO = $1,500 x 6 = $9,000. $1,500 is only the SLE, $250 divides by the ARO instead of multiplying, and $90,000 and $900 are decimal-place errors.",
    hint: "Six events a year means ARO = 6. ALE = SLE x ARO.",
    refs: [
      { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" },
      { title: "NIST IR 8286A Identifying and Estimating Cybersecurity Risk for ERM", url: "https://csrc.nist.gov/pubs/ir/8286/a/final" }
    ]
  },
  {
    id: "d5-018",
    domain: 5,
    objective: "5.2",
    topic: "Quantitative analysis — full ALE calculation",
    type: "single",
    stems: [
      "A $500,000 warehouse is in a floodplain. A flood would damage 40% of the building, and floods of this size occur about once every 20 years. What is the annualized loss expectancy?",
      "An insurer asks a company to estimate its yearly flood loss. The data center building is valued at $500,000, a flood would destroy 40% of its value, and the ARO is 0.05. What is the ALE?"
    ],
    correct: ["$10,000"],
    wrong: ["$200,000", "$25,000", "$4,000,000", "$15,000"],
    explanation: "SLE = $500,000 x 0.40 = $200,000. ARO = 1/20 = 0.05. ALE = $200,000 x 0.05 = $10,000. $200,000 is only the SLE, $25,000 skips the EF ($500,000 x 0.05), $4,000,000 divides the SLE by the ARO, and $15,000 uses the 60% that is not damaged.",
    hint: "Once every 20 years = 0.05. Multiply AV x EF x ARO.",
    refs: [
      { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" },
      { title: "NIST IR 8286A Identifying and Estimating Cybersecurity Risk for ERM", url: "https://csrc.nist.gov/pubs/ir/8286/a/final" }
    ]
  },
  {
    id: "d5-019",
    domain: 5,
    objective: "5.2",
    topic: "Quantitative analysis — ARO",
    type: "single",
    stems: [
      "Records show that a regional office loses power for an extended period about once every four years. What annualized rate of occurrence (ARO) should the risk analyst use?",
      "A security team estimates that a major DDoS attack against its website will happen once in four years. Which of the following is the ARO?"
    ],
    correct: ["0.25"],
    wrong: ["4", "0.4", "25", "0.04"],
    explanation: "ARO is the expected number of occurrences per year. One event every four years = 1 / 4 = 0.25. The value 4 inverts the fraction, 25 writes the percentage as a whole number, and 0.4 and 0.04 are calculation errors.",
    hint: "ARO = events per year. Once every N years = 1/N.",
    refs: [
      { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" },
      { title: "NIST IR 8286A Identifying and Estimating Cybersecurity Risk for ERM", url: "https://csrc.nist.gov/pubs/ir/8286/a/final" }
    ]
  },
  {
    id: "d5-020",
    domain: 5,
    objective: "5.2",
    topic: "BIA — MTBF calculation",
    type: "single",
    stems: [
      "A storage array ran for a total of 9,000 hours over the past two years and failed 3 times. What is the mean time between failures (MTBF)?",
      "A network team tracks a core switch. Over its service life, it has 9,000 total operating hours and 3 recorded failures. Which MTBF should the team report?"
    ],
    correct: ["3,000 hours"],
    wrong: ["27,000 hours", "9,000 hours", "2,250 hours", "4,500 hours"],
    explanation: "MTBF = total operating time / number of failures = 9,000 / 3 = 3,000 hours. 27,000 multiplies instead of divides, 9,000 is the total uptime, and 2,250 and 4,500 divide by the wrong number of failures.",
    hint: "MTBF = uptime divided by the number of failures.",
    refs: [
      { title: "Professor Messer SY0-701: Business Impact Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/business-impact-analysis-sy0-701/" },
      { title: "NIST SP 800-34 Rev. 1 Contingency Planning Guide for Federal Information Systems", url: "https://csrc.nist.gov/pubs/sp/800/34/r1/final" }
    ]
  },
  {
    id: "d5-021",
    domain: 5,
    objective: "5.2",
    topic: "Qualitative risk analysis",
    type: "single",
    stems: [
      "A risk committee rates each risk as low, medium, or high and shows the results on a color-coded heat map. Which type of risk analysis is the committee performing?",
      "A small company has no reliable loss data, so its analysts rank threats with categories such as \"rare,\" \"possible,\" and \"almost certain.\" Which of the following best describes this approach?",
      "Which of the following risk analysis methods uses nonnumerical categories or levels instead of dollar values?"
    ],
    correct: ["Qualitative risk analysis"],
    wrong: ["Quantitative risk analysis", "Business impact analysis", "Supply chain analysis", "Single loss expectancy"],
    explanation: "Qualitative analysis assesses risk with nonnumerical categories, such as low/medium/high or rare/likely, and is often shown on a heat map. Quantitative analysis uses numbers such as SLE, ARO, and ALE. A BIA measures the effect of a disruption on business functions.",
    hint: "Words and colors = qualitative. Dollars and numbers = quantitative.",
    refs: [
      { title: "NIST CSRC Glossary: qualitative assessment", url: "https://csrc.nist.gov/glossary/term/qualitative_assessment" },
      { title: "NIST SP 800-30 Rev. 1 Guide for Conducting Risk Assessments", url: "https://csrc.nist.gov/pubs/sp/800/30/r1/final" },
      { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" }
    ]
  },
  {
    id: "d5-022",
    domain: 5,
    objective: "5.2",
    topic: "Risk appetite",
    type: "single",
    stems: [
      "A company's board states that the organization is willing to accept a moderate level of cybersecurity risk in order to launch new products quickly. Which of the following has the board defined?",
      "During strategic planning, executives document, at a broad level, the types and amount of risk the company is willing to accept as it pursues growth. What is this called?"
    ],
    correct: ["Risk appetite"],
    wrong: ["Risk register", "Key risk indicator", "Risk transfer", "Exposure factor"],
    explanation: "Risk appetite is the broad type and amount of risk an organization is willing to accept in pursuit of its objectives. A risk register records individual risks, a key risk indicator is a metric that tracks a risk, and exposure factor is the percentage of an asset lost in one event.",
    hint: "How much risk leadership is willing to take on to reach goals = appetite.",
    refs: [
      { title: "NIST CSRC Glossary: risk appetite", url: "https://csrc.nist.gov/glossary/term/risk_appetite" },
      { title: "NIST IR 8286 Integrating Cybersecurity and Enterprise Risk Management", url: "https://csrc.nist.gov/pubs/ir/8286/final" },
      { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" }
    ]
  },
  {
    id: "d5-023",
    domain: 5,
    objective: "5.2",
    topic: "Risk appetite — expansionary",
    type: "single",
    stems: [
      "A fast-growing startup's leadership is willing to take on higher risk to gain market share and enter new markets quickly. Which risk appetite best describes this company?",
      "A venture-funded fintech accepts more risk than its competitors in exchange for faster innovation and potentially higher returns. Which of the following risk appetite postures is this?"
    ],
    correct: ["Expansionary"],
    wrong: ["Conservative", "Neutral", "Risk-averse"],
    explanation: "SY0-701 describes three risk appetite postures. Expansionary means willing to take on more risk for growth or higher returns. Conservative (risk-averse) means accepting little risk, and neutral means a balance between the two.",
    hint: "Expand = grow fast = more risk accepted.",
    refs: [
      { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" },
      { title: "NIST CSRC Glossary: risk appetite", url: "https://csrc.nist.gov/glossary/term/risk_appetite" }
    ]
  },
  {
    id: "d5-024",
    domain: 5,
    objective: "5.2",
    topic: "Risk register",
    type: "single",
    stems: [
      "A project manager keeps a document that lists each identified risk with its key risk indicators, an assigned owner, and a risk threshold. Which of the following is this document?",
      "An auditor asks a security team for the central record of current risks, including who owns each risk and its current status. Which of the following should the team provide?"
    ],
    correct: ["Risk register"],
    wrong: ["Business impact analysis", "Service-level agreement", "Rules of engagement", "Data inventory"],
    explanation: "A risk register is the central record of identified risks and related information, such as key risk indicators, risk owners, thresholds, and responses. A BIA measures the effect of disruptions, an SLA defines service commitments, and a data inventory lists the data an organization holds.",
    hint: "List of risks + owners + KRIs + thresholds = risk register.",
    refs: [
      { title: "NIST CSRC Glossary: risk register", url: "https://csrc.nist.gov/glossary/term/risk_register" },
      { title: "NIST IR 8286 Integrating Cybersecurity and Enterprise Risk Management", url: "https://csrc.nist.gov/pubs/ir/8286/final" },
      { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" }
    ]
  },
  {
    id: "d5-025",
    domain: 5,
    objective: "5.2",
    topic: "Key risk indicators",
    type: "single",
    stems: [
      "A security manager tracks the number of critical servers that have been missing patches for more than 30 days. When the count rises, it warns that risk exposure is increasing. Which of the following is the manager tracking?",
      "A risk team wants a metric that signals early when a risk is moving toward an unacceptable level, such as a rising rate of failed VPN logins. Which of the following should the team define?"
    ],
    correct: ["Key risk indicator"],
    wrong: ["Recovery point objective", "Mean time between failures", "Annualized rate of occurrence", "Risk appetite"],
    explanation: "A key risk indicator (KRI) is a metric used to measure risk and give early warning that a risk is increasing. KRIs are recorded in the risk register. RPO is a data-loss target, MTBF measures equipment reliability, and ARO is the expected number of events per year.",
    hint: "An early-warning metric for a risk = KRI.",
    refs: [
      { title: "NIST CSRC Glossary: key risk indicator", url: "https://csrc.nist.gov/glossary/term/key_risk_indicator" },
      { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" }
    ]
  },
  {
    id: "d5-026",
    domain: 5,
    objective: "5.2",
    topic: "Risk owner",
    type: "single",
    stems: [
      "In a company's risk register, each risk is assigned to a named individual who is accountable for monitoring it and making sure the response is carried out. What is this role?",
      "A CISO assigns the VP of Operations accountability for managing the risk of a key supplier outage, including tracking its status. Which of the following roles has the VP been given?"
    ],
    correct: ["Risk owner"],
    wrong: ["Data custodian", "Data processor", "External auditor", "Data subject"],
    explanation: "A risk owner is the person accountable for managing a specific risk and its response, and the owner is recorded in the risk register. A data custodian maintains data day to day, a processor handles data for a controller, and an external auditor gives an independent review.",
    hint: "The name next to each risk in the register = risk owner.",
    refs: [
      { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" },
      { title: "NIST IR 8286 Integrating Cybersecurity and Enterprise Risk Management", url: "https://csrc.nist.gov/pubs/ir/8286/final" }
    ]
  },
  {
    id: "d5-027",
    domain: 5,
    objective: "5.2",
    topic: "BIA — RTO and RPO",
    type: "multi",
    stems: [
      "During a business impact analysis, a company must decide how long a critical system can be down and how much data loss is acceptable. Which of the following metrics should it define?",
      "A CIO asks the continuity team to set the targets that will drive backup frequency and the maximum restoration time for the order-entry system. Which of the following should the team set?"
    ],
    correct: ["Recovery time objective (RTO)", "Recovery point objective (RPO)"],
    wrong: ["Mean time between failures (MTBF)", "Annualized rate of occurrence (ARO)", "Single loss expectancy (SLE)", "Exposure factor (EF)"],
    explanation: "The RTO is the maximum time a system can be in recovery before it harms the business, and the RPO is the point in time to which data must be recovered (the acceptable data loss). MTBF measures reliability, and ARO, SLE, and EF are inputs to quantitative risk analysis.",
    hint: "RTO = how long down. RPO = how much data lost.",
    refs: [
      { title: "NIST CSRC Glossary: recovery time objective", url: "https://csrc.nist.gov/glossary/term/recovery_time_objective" },
      { title: "NIST CSRC Glossary: recovery point objective", url: "https://csrc.nist.gov/glossary/term/recovery_point_objective" },
      { title: "NIST SP 800-34 Rev. 1 Contingency Planning Guide for Federal Information Systems", url: "https://csrc.nist.gov/pubs/sp/800/34/r1/final" }
    ]
  },
  {
    id: "d5-028",
    domain: 5,
    objective: "5.2",
    topic: "BIA — RPO",
    type: "single",
    stems: [
      "A company backs up its finance database every four hours. Management states that losing up to four hours of transactions is acceptable. Which of the following does the four-hour value represent?",
      "After a server failure, an online store can tolerate losing no more than 15 minutes of order data, so it replicates its database every 15 minutes. Which metric does the 15-minute value represent?"
    ],
    correct: ["Recovery point objective"],
    wrong: ["Recovery time objective", "Mean time to repair", "Mean time between failures", "Annualized rate of occurrence"],
    explanation: "The recovery point objective (RPO) is the point in time to which data must be recovered, which sets the maximum acceptable data loss and drives backup frequency. The RTO is the maximum acceptable downtime, MTTR is the average repair time, and MTBF is the average time between failures.",
    hint: "Acceptable data loss and backup frequency = RPO.",
    refs: [
      { title: "NIST CSRC Glossary: recovery point objective", url: "https://csrc.nist.gov/glossary/term/recovery_point_objective" },
      { title: "Professor Messer SY0-701: Business Impact Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/business-impact-analysis-sy0-701/" }
    ]
  },
  {
    id: "d5-029",
    domain: 5,
    objective: "5.2",
    topic: "BIA — MTTR",
    type: "single",
    stems: [
      "A network manager keeps spare switches on site so that failed hardware can be swapped quickly. Which of the following metrics is the manager trying to reduce?",
      "A company pays extra for a support contract that guarantees delivery of replacement parts within two hours. Which of the following metrics will this contract most directly improve?"
    ],
    correct: ["Mean time to repair (MTTR)"],
    wrong: ["Mean time between failures (MTBF)", "Recovery point objective (RPO)", "Annualized rate of occurrence (ARO)", "Exposure factor (EF)"],
    explanation: "MTTR is the average time to restore a failed component, including diagnosis, getting parts, installation, and configuration. Spare parts and fast-replacement contracts reduce MTTR. MTBF measures how often failures occur, and RPO sets acceptable data loss.",
    hint: "Fix it faster = lower MTTR. Fail less often = higher MTBF.",
    refs: [
      { title: "Professor Messer SY0-701: Business Impact Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/business-impact-analysis-sy0-701/" },
      { title: "NIST SP 800-34 Rev. 1 Contingency Planning Guide for Federal Information Systems", url: "https://csrc.nist.gov/pubs/sp/800/34/r1/final" }
    ]
  },
  {
    id: "d5-030",
    domain: 5,
    objective: "5.2",
    topic: "Risk assessment types — recurring",
    type: "single",
    stems: [
      "Company policy requires a formal risk assessment every year in March, and the results are compared with those of the previous year. Which type of risk assessment is this?",
      "A hospital's compliance team schedules a risk assessment every six months and keeps a running record of the results. Which of the following best describes these assessments?"
    ],
    correct: ["Recurring"],
    wrong: ["Ad hoc", "One-time", "Continuous"],
    explanation: "A recurring risk assessment is performed on a regular schedule, such as quarterly or annually. An ad hoc assessment is done for one specific purpose when needed, a one-time assessment supports a single project or event, and a continuous assessment runs all the time, usually with automation.",
    hint: "Fixed schedule (every quarter or year) = recurring.",
    refs: [
      { title: "Professor Messer SY0-701: Risk Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-management-sy0-701/" },
      { title: "NIST SP 800-30 Rev. 1 Guide for Conducting Risk Assessments", url: "https://csrc.nist.gov/pubs/sp/800/30/r1/final" }
    ]
  },
  {
    id: "d5-031",
    domain: 5,
    objective: "5.2",
    topic: "Risk assessment types — continuous",
    type: "single",
    stems: [
      "A company uses automated tools that collect security data around the clock and update risk scores in real time as conditions change. Which type of risk assessment is this?",
      "Instead of an annual review, a CISO wants the risk posture to be reassessed all the time with live data from security tools. Which of the following assessment types is the CISO requesting?"
    ],
    correct: ["Continuous"],
    wrong: ["Ad hoc", "One-time", "Recurring"],
    explanation: "A continuous risk assessment is ongoing and normally automated, so it updates as conditions change. Recurring assessments occur on a fixed schedule, ad hoc assessments answer one specific question, and one-time assessments support a single project.",
    hint: "Always on, real-time, automated = continuous.",
    refs: [
      { title: "NIST SP 800-137 Information Security Continuous Monitoring", url: "https://csrc.nist.gov/pubs/sp/800/137/final" },
      { title: "NIST CSRC Glossary: continuous monitoring", url: "https://csrc.nist.gov/glossary/term/continuous_monitoring" },
      { title: "Professor Messer SY0-701: Risk Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-management-sy0-701/" }
    ]
  },

  // ───────────────────────── 5.3 Third-party risk ─────────────────────────
  {
    id: "d5-032",
    domain: 5,
    objective: "5.3",
    topic: "Agreement types",
    type: "match",
    stems: [
      "A procurement manager is reviewing vendor and partner documents. Match each description with the agreement type."
    ],
    pairs: [
      { item: "Sets measurable uptime and response-time commitments, with penalties if they are missed", answer: "SLA" },
      { item: "Informal statement of broad shared goals between two organizations; not a binding contract", answer: "MOU" },
      { item: "Contract that sets general terms, such as payment and liability, for future work", answer: "MSA" },
      { item: "Lists the specific tasks, deliverables, location, and schedule for one project", answer: "SOW" },
      { item: "Requires the parties to keep shared trade secrets confidential", answer: "NDA" },
      { item: "Defines ownership stakes, profit sharing, and decision-making in a formal partnership", answer: "BPA" }
    ],
    extraOptions: ["MOA"],
    explanation: "An SLA defines service levels, an MOU records broad mutual intent, and an MSA sets the framework terms for an ongoing relationship. A SOW (or work order) defines the work for one project under the MSA, an NDA protects confidential information, and a BPA governs a business partnership.",
    hint: "SLA = service levels. MOU = intent. MSA = umbrella terms. SOW = this job. NDA = secrets. BPA = partners.",
    refs: [
      { title: "Professor Messer SY0-701: Agreement Types", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/agreement-types-sy0-701/" },
      { title: "NIST CSRC Glossary: service level agreement", url: "https://csrc.nist.gov/glossary/term/service_level_agreement" },
      { title: "NIST CSRC Glossary: non-disclosure agreement", url: "https://csrc.nist.gov/glossary/term/non_disclosure_agreement" }
    ]
  },
  {
    id: "d5-033",
    domain: 5,
    objective: "5.3",
    topic: "Agreement types — MOU",
    type: "single",
    stems: [
      "Two hospitals want to document their intent to share threat intelligence in the future. They want a document that states broad, common goals but does not create a binding contract. Which of the following should they use?",
      "A university and a local government agree in principle to work together on a cybersecurity training program. Before they negotiate any contract, they record their mutual understanding of the goals. Which document is this?"
    ],
    correct: ["Memorandum of understanding"],
    wrong: ["Master service agreement", "Statement of work", "Service-level agreement", "Business partners agreement"],
    explanation: "A memorandum of understanding (MOU) documents a mutual understanding and broad goals between parties, and it is generally not a binding contract. An MSA is a contract for future work, a SOW defines specific deliverables, an SLA sets service levels, and a BPA governs a formal partnership.",
    hint: "Broad intent, not yet a contract = MOU.",
    refs: [
      { title: "Professor Messer SY0-701: Agreement Types", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/agreement-types-sy0-701/" },
      { title: "NIST CSRC Glossary: memorandum of understanding or agreement", url: "https://csrc.nist.gov/glossary/term/memorandum_of_understanding_or_agreement" }
    ]
  },
  {
    id: "d5-034",
    domain: 5,
    objective: "5.3",
    topic: "Agreement types — SOW/WO",
    type: "single",
    stems: [
      "A company already has a master service agreement with a consulting firm. It now needs to define the deliverables, timeline, and location for a new penetration test project. Which of the following should be created?",
      "Under an existing MSA, a managed service provider will migrate a client's email system. Which document should list the specific tasks, deliverables, and due dates for this migration?"
    ],
    correct: ["Statement of work"],
    wrong: ["Memorandum of understanding", "Non-disclosure agreement", "Business partners agreement", "Service-level agreement"],
    explanation: "A statement of work (SOW), or work order, details the scope, deliverables, location, and schedule for a specific job, usually under an existing MSA so the general terms are not renegotiated. An MOU states broad intent, an NDA protects confidential information, and an SLA sets ongoing service levels.",
    hint: "MSA = umbrella contract. SOW = the details of one job under it.",
    refs: [
      { title: "Professor Messer SY0-701: Agreement Types", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/agreement-types-sy0-701/" },
      { title: "NIST CSRC Glossary: statement of work", url: "https://csrc.nist.gov/glossary/term/statement_of_work" }
    ]
  },
  {
    id: "d5-035",
    domain: 5,
    objective: "5.3",
    topic: "Vendor assessment — right-to-audit clause",
    type: "single",
    stems: [
      "A company will store employee records with a cloud payroll provider. The CISO wants the contract to guarantee that the company can examine the provider's security controls. Which of the following should be included in the contract?",
      "A legal team is negotiating with a data-processing vendor. Which contract provision gives the customer the right to inspect the vendor's records and controls at defined intervals?"
    ],
    correct: ["Right-to-audit clause"],
    wrong: ["Non-disclosure clause", "Non-compete clause", "Force majeure clause", "Service credit clause"],
    explanation: "A right-to-audit clause gives the customer (or its chosen auditor) the contractual right to review the vendor's security controls and records. A non-disclosure clause protects confidential information, a force majeure clause covers events outside the parties' control, and service credits compensate for missed service levels.",
    hint: "Contract term that lets you check their controls = right to audit.",
    refs: [
      { title: "Professor Messer SY0-701: Third-party Risk Assessment", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/third-party-risk-assessment-sy0-701/" },
      { title: "NIST SP 800-161 Rev. 1 Cybersecurity Supply Chain Risk Management Practices", url: "https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final" }
    ]
  },
  {
    id: "d5-036",
    domain: 5,
    objective: "5.3",
    topic: "Vendor assessment — evidence",
    type: "multi",
    stems: [
      "A company is evaluating a SaaS vendor that will process sensitive customer data. Which of the following provide the best evidence that the vendor's security controls are effective?",
      "A risk manager must verify a prospective vendor's security posture before the contract is signed. Which of the following should the manager request from the vendor?"
    ],
    correct: ["Independent SOC 2 Type II report", "Results of a recent third-party penetration test"],
    wrong: ["Signed mutual NDA", "Vendor's marketing white paper", "Memorandum of understanding", "List of the vendor's largest customers"],
    explanation: "Independent assessments, such as a SOC 2 Type II report from a CPA firm, and penetration test results give objective evidence about how well the vendor's controls work. An NDA and an MOU are agreements, not evidence of controls, and marketing material and customer lists do not test security.",
    hint: "Look for independent, tested evidence: audit reports and pen test results.",
    refs: [
      { title: "AICPA SOC 2 — SOC for Service Organizations", url: "https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2" },
      { title: "Professor Messer SY0-701: Third-party Risk Assessment", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/third-party-risk-assessment-sy0-701/" }
    ]
  },
  {
    id: "d5-037",
    domain: 5,
    objective: "5.3",
    topic: "Vendor selection — due diligence",
    type: "single",
    stems: [
      "Before signing with a new managed security provider, a company verifies the provider's financial statements, checks customer references, and runs background checks on key staff. Which of the following is the company performing?",
      "A procurement team investigates a potential vendor's history, claims, and security practices before deciding whether to do business with it. Which term best describes this activity?"
    ],
    correct: ["Due diligence"],
    wrong: ["Attestation", "Vendor monitoring", "Penetration testing", "Risk transference"],
    explanation: "Due diligence is the investigation and verification of a vendor's claims, finances, and practices before entering a business relationship. Vendor monitoring is the ongoing review after the contract is signed, attestation is a formal statement that something is true, and risk transference shifts impact to another party.",
    hint: "Investigate BEFORE you sign = due diligence.",
    refs: [
      { title: "Professor Messer SY0-701: Third-party Risk Assessment", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/third-party-risk-assessment-sy0-701/" },
      { title: "NIST SP 800-161 Rev. 1 Cybersecurity Supply Chain Risk Management Practices", url: "https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final" }
    ]
  },
  {
    id: "d5-038",
    domain: 5,
    objective: "5.3",
    topic: "Vendor selection — conflict of interest",
    type: "multi",
    stems: [
      "During vendor selection, a procurement officer reviews the facts about each bidder. Which of the following facts indicate a conflict of interest?",
      "A compliance officer must flag any bidder whose relationship could compromise the objectivity of the vendor selection. Which of the following situations should the officer flag?"
    ],
    correct: ["The vendor's owner is the CFO's brother", "The vendor offers gifts to evaluators if selected"],
    wrong: ["The vendor provides a SOC 2 Type II report", "The vendor asks for an NDA before a demo", "The vendor proposes a 99.9% uptime SLA"],
    explanation: "A conflict of interest exists when a relationship or benefit could compromise someone's judgment, such as a family tie to an executive or gifts offered in exchange for the contract. A SOC 2 report, an NDA request, and an uptime SLA are normal parts of vendor selection.",
    hint: "Family ties or gifts that could bias the decision = conflict of interest.",
    refs: [
      { title: "Professor Messer SY0-701: Third-party Risk Assessment", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/third-party-risk-assessment-sy0-701/" },
      { title: "NIST SP 800-161 Rev. 1 Cybersecurity Supply Chain Risk Management Practices", url: "https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final" }
    ]
  },
  {
    id: "d5-039",
    domain: 5,
    objective: "5.3",
    topic: "Vendor assessment — supply chain analysis",
    type: "single",
    stems: [
      "A trusted software vendor's digitally signed update delivered malware to its customers. A CISO now wants to evaluate the security of every supplier involved in producing and delivering the company's critical software. Which of the following should the CISO perform?",
      "A manufacturer wants to understand the security risks introduced at each step, from raw component suppliers through final product delivery. Which of the following assessments is most appropriate?"
    ],
    correct: ["Supply chain analysis"],
    wrong: ["Business impact analysis", "Tabletop exercise", "Phishing campaign", "Self-assessment"],
    explanation: "A supply chain analysis examines the security of each supplier and step from raw materials or code to the delivered product, which addresses attacks such as SolarWinds. A BIA measures the effect of disruptions, a tabletop exercise walks through an incident scenario, and a self-assessment reviews only internal controls.",
    hint: "Every supplier, every step from source to delivery = supply chain analysis.",
    refs: [
      { title: "NIST SP 800-161 Rev. 1 Cybersecurity Supply Chain Risk Management Practices", url: "https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final" },
      { title: "NIST CSRC Glossary: supply chain risk management", url: "https://csrc.nist.gov/glossary/term/supply_chain_risk_management" },
      { title: "Professor Messer SY0-701: Third-party Risk Assessment", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/third-party-risk-assessment-sy0-701/" }
    ]
  },
  {
    id: "d5-040",
    domain: 5,
    objective: "5.3",
    topic: "Vendor monitoring — questionnaires",
    type: "single",
    stems: [
      "A vendor management team needs a scalable way to gather details about how dozens of suppliers store data, handle disaster recovery, and manage access. Which of the following is the most efficient method?",
      "As part of ongoing vendor monitoring, a company sends each supplier a standard list of security questions every year and adds the answers to its vendor risk analysis. Which of the following is the company using?"
    ],
    correct: ["Security questionnaire"],
    wrong: ["Penetration test", "Right-to-audit clause", "Memorandum of agreement", "Rules of engagement"],
    explanation: "A security questionnaire is a simple, scalable way to collect information from many vendors about data storage, disaster recovery, and access control, and the answers feed the vendor risk analysis. A penetration test of each vendor would not scale, a right-to-audit clause is a contract term, and rules of engagement define a security test.",
    hint: "Same list of questions sent to many vendors = questionnaire.",
    refs: [
      { title: "Professor Messer SY0-701: Third-party Risk Assessment", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/third-party-risk-assessment-sy0-701/" },
      { title: "NIST SP 800-161 Rev. 1 Cybersecurity Supply Chain Risk Management Practices", url: "https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final" }
    ]
  },
  {
    id: "d5-041",
    domain: 5,
    objective: "5.3",
    topic: "Rules of engagement",
    type: "multi",
    stems: [
      "A company is hiring a third party to perform a penetration test. Which of the following should be defined in the rules of engagement?",
      "Before a red team exercise begins, the CISO and the testing firm meet to finalize the rules of engagement. Which of the following belong in this document?"
    ],
    correct: ["In-scope IP address ranges", "Approved testing dates and times"],
    wrong: ["The vendor's annual revenue", "Employee salary records", "The company's risk appetite statement", "Recovery point objectives"],
    explanation: "Rules of engagement are set before a test and define its scope and limits: which systems and IP ranges are in or out of scope, when testing may occur, emergency contacts, and how sensitive data is handled. Vendor revenue, salaries, risk appetite, and RPOs do not define how a test is conducted.",
    hint: "RoE = what, when, and how the testers may attack.",
    refs: [
      { title: "NIST CSRC Glossary: rules of engagement", url: "https://csrc.nist.gov/glossary/term/rules_of_engagement" },
      { title: "NIST SP 800-115 Technical Guide to Information Security Testing and Assessment", url: "https://csrc.nist.gov/pubs/sp/800/115/final" },
      { title: "Professor Messer SY0-701: Third-party Risk Assessment", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/third-party-risk-assessment-sy0-701/" }
    ]
  },

  // ───────────────────────── 5.4 Security compliance ─────────────────────────
  {
    id: "d5-042",
    domain: 5,
    objective: "5.4",
    topic: "Privacy — data subject",
    type: "single",
    stems: [
      "Under GDPR, which of the following terms describes the identified or identifiable person whom personal data is about?",
      "A customer in the EU asks an online retailer for a copy of all the personal data it holds about her. In privacy terms, what is the customer's role?",
      "A privacy officer is mapping roles for an HR system. The employees whose names, addresses, and bank details are stored in the system are which of the following?"
    ],
    correct: ["Data subject"],
    wrong: ["Data controller", "Data processor", "Data custodian", "Data owner"],
    explanation: "GDPR defines personal data as information about an identified or identifiable natural person, called the data subject. The controller decides how and why data is processed, the processor processes it on the controller's behalf, and owners and custodians are internal accountability roles.",
    hint: "The person the data describes = data subject.",
    refs: [
      { title: "GDPR Art. 4 Definitions", url: "https://gdpr-info.eu/art-4-gdpr/" },
      { title: "GDPR Art. 15 Right of access by the data subject", url: "https://gdpr-info.eu/art-15-gdpr/" },
      { title: "Professor Messer SY0-701: Privacy", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/privacy-sy0-701/" }
    ]
  },
  {
    id: "d5-043",
    domain: 5,
    objective: "5.4",
    topic: "Privacy — right to be forgotten",
    type: "single",
    stems: [
      "A former customer in the EU asks a company to erase all personal data it holds about him. Which GDPR right is he exercising?",
      "A social media user withdraws her consent and requests that a platform erase her profile and posts. The platform must comply unless a legal exception applies. Which right does this describe?"
    ],
    correct: ["Right to be forgotten"],
    wrong: ["Right of access", "Right to data portability", "Right to rectification", "Right to restrict processing"],
    explanation: "GDPR Article 17, the right to erasure (\"right to be forgotten\"), lets a data subject require a controller to delete personal data without undue delay in specified cases, such as withdrawn consent. The right of access gives a copy, portability moves data to another provider, and rectification corrects inaccurate data.",
    hint: "Erase me = right to be forgotten (GDPR Art. 17).",
    refs: [
      { title: "GDPR Art. 17 Right to erasure ('right to be forgotten')", url: "https://gdpr-info.eu/art-17-gdpr/" },
      { title: "Professor Messer SY0-701: Privacy", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/privacy-sy0-701/" }
    ]
  },
  {
    id: "d5-044",
    domain: 5,
    objective: "5.4",
    topic: "Privacy — controller vs processor",
    type: "single",
    stems: [
      "A company's HR department decides what payroll data is collected and how it is used. It sends the data to an outside payroll firm that issues paychecks on the company's behalf. What is the payroll firm's role?",
      "A retailer uses a cloud email marketing service to send newsletters to the retailer's customers, following the retailer's instructions. Under GDPR, which of the following is the marketing service?"
    ],
    correct: ["Data processor"],
    wrong: ["Data controller", "Data subject", "Data owner", "Supervisory authority"],
    explanation: "Under GDPR, the controller determines the purposes and means of processing, and the processor processes personal data on the controller's behalf. Here the HR department or retailer is the controller, and the payroll firm or marketing service is the processor. The data subject is the person the data is about, and a supervisory authority is the regulator.",
    hint: "Decides why and how = controller. Does the work for them = processor.",
    refs: [
      { title: "GDPR Art. 4 Definitions", url: "https://gdpr-info.eu/art-4-gdpr/" },
      { title: "GDPR Art. 28 Processor", url: "https://gdpr-info.eu/art-28-gdpr/" },
      { title: "Professor Messer SY0-701: Privacy", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/privacy-sy0-701/" }
    ]
  },
  {
    id: "d5-045",
    domain: 5,
    objective: "5.4",
    topic: "Compliance reporting — external",
    type: "single",
    stems: [
      "A payment processor must submit an annual report on compliance to the card brands and its acquiring bank. Which type of compliance reporting is this?",
      "A hospital must send required compliance documentation to a government regulator every year. Which of the following best describes this reporting?"
    ],
    correct: ["External compliance reporting"],
    wrong: ["Internal compliance reporting", "Risk register update", "Vendor questionnaire", "Ad hoc risk assessment"],
    explanation: "External compliance reporting sends compliance status to parties outside the organization, such as regulators, card brands, or business partners, often on a fixed schedule with penalties for errors or missed deadlines. Internal reporting goes to the organization's own leadership, such as a central compliance officer or the board.",
    hint: "Report goes to a regulator or outside party = external.",
    refs: [
      { title: "Professor Messer SY0-701: Compliance", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/compliance-sy0-701/" },
      { title: "PCI Security Standards Council", url: "https://www.pcisecuritystandards.org/" }
    ]
  },
  {
    id: "d5-046",
    domain: 5,
    objective: "5.4",
    topic: "Privacy — data inventory",
    type: "single",
    stems: [
      "A privacy team creates a list of all personal data the company collects, where each data set is stored, who owns it, and how it is used. Which of the following has the team created?",
      "Before it can respond to a new privacy law, a company must first know what personal data it holds and where that data is. Which of the following should the company build first?"
    ],
    correct: ["Data inventory"],
    wrong: ["Risk register", "Business impact analysis", "Rules of engagement", "Service-level agreement"],
    explanation: "A data inventory lists the data an organization collects and stores, including its owner, location, format, and use. It is the base for privacy compliance and for GDPR records of processing. A risk register tracks risks, a BIA measures the effects of disruption, and rules of engagement define a security test.",
    hint: "You cannot protect data you have not listed = data inventory.",
    refs: [
      { title: "Professor Messer SY0-701: Privacy", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/privacy-sy0-701/" },
      { title: "GDPR Art. 30 Records of processing activities", url: "https://gdpr-info.eu/art-30-gdpr/" },
      { title: "NIST Privacy Framework", url: "https://www.nist.gov/privacy-framework" }
    ]
  },
  {
    id: "d5-047",
    domain: 5,
    objective: "5.4",
    topic: "Privacy — data retention",
    type: "single",
    stems: [
      "A company keeps customer records forever \"just in case.\" A privacy consultant warns that this breaks the principle that personal data must be kept no longer than necessary. Which of the following should the company implement?",
      "Regulations require a bank to keep certain transaction records for seven years and then dispose of them securely. Which of the following policies addresses this requirement?"
    ],
    correct: ["Data retention policy"],
    wrong: ["Acceptable use policy", "Change management policy", "Password standard", "Incident response policy"],
    explanation: "A data retention policy defines how long each type of data is kept and how it is disposed of, so the organization meets both legal minimums and privacy rules such as GDPR storage limitation. An AUP defines permitted use of technology, and change management controls system modifications.",
    hint: "How long to keep it and when to destroy it = retention.",
    refs: [
      { title: "GDPR Art. 5 Principles (storage limitation)", url: "https://gdpr-info.eu/art-5-gdpr/" },
      { title: "Professor Messer SY0-701: Security Considerations", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-considerations-sy0-701/" }
    ]
  },
  {
    id: "d5-048",
    domain: 5,
    objective: "5.4",
    topic: "Consequences of non-compliance",
    type: "multi",
    stems: [
      "A healthcare provider repeatedly fails to meet regulatory privacy requirements, and the failures become public. Which of the following are likely consequences of this non-compliance?",
      "A compliance officer is briefing the board on what could happen if the company fails a required regulatory audit. Which of the following should the officer list as possible consequences?"
    ],
    correct: ["Fines and sanctions", "Loss of an operating license", "Reputational damage"],
    wrong: ["Lower cyber insurance premiums", "Automatic extension of audit deadlines", "Reduced reporting requirements", "A larger risk appetite"],
    explanation: "SY0-701 lists fines, sanctions, reputational damage, loss of license, and contractual impacts as consequences of non-compliance. For example, GDPR Article 83 allows large administrative fines. Non-compliance does not lower premiums, extend deadlines, or reduce reporting.",
    hint: "Non-compliance hurts: money (fines), permission to operate (license), and trust (reputation).",
    refs: [
      { title: "Professor Messer SY0-701: Compliance", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/compliance-sy0-701/" },
      { title: "GDPR Art. 83 General conditions for imposing administrative fines", url: "https://gdpr-info.eu/art-83-gdpr/" }
    ]
  },
  {
    id: "d5-049",
    domain: 5,
    objective: "5.4",
    topic: "Compliance monitoring — automation",
    type: "single",
    stems: [
      "A large company must track hundreds of compliance requirements across many regulations. The compliance officer wants status data to be collected continuously and reports to be generated without manual effort. Which approach is best?",
      "A compliance team spends weeks each quarter gathering evidence by hand from IT systems. Which of the following would most improve the efficiency and accuracy of compliance monitoring?"
    ],
    correct: ["Automated compliance monitoring"],
    wrong: ["Annual self-assessment", "Ad hoc risk assessment", "Manual spreadsheet tracking", "Memorandum of understanding"],
    explanation: "Automated compliance monitoring tools collect evidence from systems, people, and third parties and generate reports continuously, which reduces effort and keeps status current. An annual self-assessment or a manual spreadsheet is slow and periodic, and an ad hoc assessment answers only one question.",
    hint: "Many requirements + no manual effort = automation.",
    refs: [
      { title: "Professor Messer SY0-701: Compliance", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/compliance-sy0-701/" },
      { title: "NIST SP 800-137 Information Security Continuous Monitoring", url: "https://csrc.nist.gov/pubs/sp/800/137/final" }
    ]
  },

  // ───────────────────────── 5.5 Audits and assessments ─────────────────────────
  {
    id: "d5-050",
    domain: 5,
    objective: "5.5",
    topic: "Penetration test environments and reconnaissance",
    type: "match",
    stems: [
      "A CISO is planning several penetration tests. Match each description with the correct term."
    ],
    pairs: [
      { item: "Testers receive full network diagrams, source code, and credentials", answer: "Known environment" },
      { item: "Testers receive only a list of target IP addresses and some system details", answer: "Partially known environment" },
      { item: "Testers receive no information and must discover everything themselves", answer: "Unknown environment" },
      { item: "Testers study social media and the company website without touching the target network", answer: "Passive reconnaissance" },
      { item: "Testers run port scans and OS fingerprinting against target hosts", answer: "Active reconnaissance" }
    ],
    extraOptions: [],
    explanation: "SY0-701 uses known, partially known, and unknown environment for full, partial, and no prior information (formerly white, gray, and black box). Passive reconnaissance gathers information from outside sources without sending traffic to the target. Active reconnaissance sends traffic, such as scans, that can be seen and logged.",
    hint: "Known/partial/unknown = how much the testers are told. Passive = no packets to the target; active = packets.",
    refs: [
      { title: "Professor Messer SY0-701: Penetration Tests", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/penetration-tests-sy0-701/" },
      { title: "NIST SP 800-115 Technical Guide to Information Security Testing and Assessment", url: "https://csrc.nist.gov/pubs/sp/800/115/final" },
      { title: "NIST CSRC Glossary: gray box testing", url: "https://csrc.nist.gov/glossary/term/gray_box_testing" }
    ]
  },
  {
    id: "d5-051",
    domain: 5,
    objective: "5.5",
    topic: "Reconnaissance — passive",
    type: "multi",
    stems: [
      "A penetration tester wants to gather information about a target without sending any traffic to the target's network. Which of the following techniques should the tester use?",
      "During the reconnaissance phase, a client asks the testers to avoid creating any entries in its firewall and server logs. Which of the following techniques meet this requirement?"
    ],
    correct: ["Review employee posts on social media", "Search public websites and online forums"],
    wrong: ["Run a port scan of the public IP range", "Perform OS fingerprinting on servers", "Send a ping sweep to the DMZ", "Query the company's DNS server directly"],
    explanation: "Passive reconnaissance collects information from sources that do not connect to the target's network, such as social media, public websites, and forums, so nothing appears in the target's logs. Port scans, OS fingerprinting, ping sweeps, and direct queries to the company's DNS server are active reconnaissance, because they send traffic that can be logged.",
    hint: "If packets touch the target, it is active.",
    refs: [
      { title: "Professor Messer SY0-701: Penetration Tests", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/penetration-tests-sy0-701/" },
      { title: "NIST SP 800-115 Technical Guide to Information Security Testing and Assessment", url: "https://csrc.nist.gov/pubs/sp/800/115/final" }
    ]
  },
  {
    id: "d5-052",
    domain: 5,
    objective: "5.5",
    topic: "Penetration testing — physical",
    type: "single",
    stems: [
      "A company hires a firm to test whether staff can be tricked into letting an unauthorized person into the data center, and whether door locks can be bypassed. Which type of penetration test is this?",
      "A tester follows employees through a badge-controlled door and tries to reach the server room. Which of the following types of penetration testing is being performed?"
    ],
    correct: ["Physical"],
    wrong: ["Defensive", "Integrated", "Passive reconnaissance"],
    explanation: "A physical penetration test tries to bypass physical security controls, such as doors, locks, badge readers, and staff, to reach protected areas. Defensive testing is the blue team's detection and response, integrated testing combines red and blue teams, and passive reconnaissance only gathers public information.",
    hint: "Doors, locks, badges, and tailgating = physical pen test.",
    refs: [
      { title: "Professor Messer SY0-701: Penetration Tests", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/penetration-tests-sy0-701/" },
      { title: "NIST CSRC Glossary: penetration testing", url: "https://csrc.nist.gov/glossary/term/penetration_testing" }
    ]
  },
  {
    id: "d5-053",
    domain: 5,
    objective: "5.5",
    topic: "Penetration testing — integrated",
    type: "single",
    stems: [
      "A company has its red team share each successful attack technique with the blue team in real time, so defenders can tune detections immediately. Which type of penetration testing does this describe?",
      "A CISO wants attackers and defenders to work together during an exercise, with continuous feedback between them to improve security. Which of the following approaches is the CISO requesting?"
    ],
    correct: ["Integrated"],
    wrong: ["Offensive", "Defensive", "Physical", "Passive reconnaissance"],
    explanation: "Integrated penetration testing combines offensive (red team) and defensive (blue team) activities with constant feedback, so findings quickly become better defenses. Offensive testing only attacks, defensive testing only detects and blocks, and physical testing targets facility security.",
    hint: "Red + blue working together = integrated.",
    refs: [
      { title: "Professor Messer SY0-701: Penetration Tests", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/penetration-tests-sy0-701/" },
      { title: "NIST CSRC Glossary: red team", url: "https://csrc.nist.gov/glossary/term/red_team" },
      { title: "NIST CSRC Glossary: blue team", url: "https://csrc.nist.gov/glossary/term/blue_team" }
    ]
  },
  {
    id: "d5-054",
    domain: 5,
    objective: "5.5",
    topic: "Attestation",
    type: "single",
    stems: [
      "After an independent auditor examines a cloud provider's controls, the auditor issues a formal written opinion on whether the provider's statements about its controls are accurate. What is this opinion called?",
      "A SaaS customer asks for proof that a provider's security controls work as described. The provider shares a CPA firm's SOC 2 report, which contains the auditor's opinion. Which of the following does the auditor's opinion represent?"
    ],
    correct: ["Attestation"],
    wrong: ["Self-assessment", "Policy acknowledgement", "Vulnerability scan", "Memorandum of understanding"],
    explanation: "Attestation is a formal opinion or statement of truth about the results of an audit. A SOC 2 report is an attestation report in which a CPA firm gives its opinion on a service organization's controls. A self-assessment is done by the organization itself, and a policy acknowledgement is a user's signature that they have read a policy.",
    hint: "Auditor's formal opinion on the audit results = attestation.",
    refs: [
      { title: "AICPA SOC 2 — SOC for Service Organizations", url: "https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2" },
      { title: "Professor Messer SY0-701: Audits and Assessments", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/audits-and-assessments-sy0-701/" }
    ]
  },
  {
    id: "d5-055",
    domain: 5,
    objective: "5.5",
    topic: "Internal audits — audit committee",
    type: "single",
    stems: [
      "A company's board has a group that oversees risk management and decides when internal audits start and stop. What is this group called?",
      "Which internal group typically oversees the internal audit function and reviews audit findings on behalf of the board of directors?"
    ],
    correct: ["Audit committee"],
    wrong: ["Change advisory board", "Incident response team", "Security awareness team", "External regulator"],
    explanation: "An audit committee oversees internal audits and related risk management, often compiling self-assessment results and reporting to the board. A change advisory board approves changes, an incident response team handles incidents, and an external regulator is outside the organization.",
    hint: "Internal group that runs and reviews audits = audit committee.",
    refs: [
      { title: "Professor Messer SY0-701: Audits and Assessments", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/audits-and-assessments-sy0-701/" },
      { title: "CompTIA Security+ certification (exam objectives)", url: "https://www.comptia.org/certifications/security" }
    ]
  },
  {
    id: "d5-056",
    domain: 5,
    objective: "5.5",
    topic: "External audits — independent third party",
    type: "single",
    stems: [
      "A regulation requires that a company's compliance be verified by an outside party that has no stake in the results. Which of the following should the company arrange?",
      "A CISO wants an objective view of the security program from auditors who are not employed by or affiliated with the company. Which of the following should the CISO request?"
    ],
    correct: ["Independent third-party audit"],
    wrong: ["Internal self-assessment", "Internal compliance audit", "Audit committee review", "Ad hoc risk assessment"],
    explanation: "An independent third-party audit is performed by an outside organization with no stake in the result, which gives objectivity and often meets regulatory requirements. Self-assessments, internal compliance audits, and audit committee reviews are internal and therefore not independent.",
    hint: "Outside and unbiased = independent third-party audit.",
    refs: [
      { title: "Professor Messer SY0-701: Audits and Assessments", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/audits-and-assessments-sy0-701/" },
      { title: "NIST SP 800-37 Rev. 2 Risk Management Framework", url: "https://csrc.nist.gov/pubs/sp/800/37/r2/final" }
    ]
  },
  {
    id: "d5-057",
    domain: 5,
    objective: "5.5",
    topic: "Internal audits — self-assessment",
    type: "single",
    stems: [
      "Before an external audit, each department compares its own processes with the compliance requirements and reports the gaps to the audit committee. Which type of assessment is this?",
      "A small business uses a checklist to evaluate its own security controls against a framework without hiring outside auditors. Which of the following best describes this?"
    ],
    correct: ["Self-assessment"],
    wrong: ["Independent third-party audit", "Regulatory examination", "Penetration test", "Attestation"],
    explanation: "A self-assessment is an internal review in which the organization checks its own processes and controls against requirements. Third-party audits and regulatory examinations are performed by outside parties, a penetration test actively attempts exploitation, and attestation is a formal opinion on audit results.",
    hint: "The organization checks itself = self-assessment.",
    refs: [
      { title: "Professor Messer SY0-701: Audits and Assessments", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/audits-and-assessments-sy0-701/" },
      { title: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" }
    ]
  },

  // ───────────────────────── 5.6 Security awareness ─────────────────────────
  {
    id: "d5-058",
    domain: 5,
    objective: "5.6",
    topic: "Phishing campaigns",
    type: "single",
    stems: [
      "A security awareness manager sends simulated phishing emails to all employees and tracks who opens them, who clicks the links, and who reports them. Which of the following is the manager conducting?",
      "To measure how many employees would fall for a malicious link, a company hires a vendor to send realistic fake emails and enrolls anyone who clicks in additional training. What is this called?"
    ],
    correct: ["Phishing campaign"],
    wrong: ["Tabletop exercise", "Vulnerability scan", "Supply chain analysis", "Business impact analysis"],
    explanation: "An internal phishing campaign sends simulated phishing messages to employees, reports opens, clicks, and reports to a central console, and assigns training to users who click. A tabletop exercise discusses an incident scenario, and a vulnerability scan checks systems, not people.",
    hint: "Fake phishing emails to test and train staff = phishing campaign.",
    refs: [
      { title: "Professor Messer SY0-701: Security Awareness", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-awareness-sy0-701/" },
      { title: "NIST SP 800-50 Rev. 1 Building a Cybersecurity and Privacy Learning Program", url: "https://csrc.nist.gov/pubs/sp/800/50/r1/final" }
    ]
  },
  {
    id: "d5-059",
    domain: 5,
    objective: "5.6",
    topic: "Recognizing a phishing attempt",
    type: "multi",
    stems: [
      "An employee receives an email that appears to come from the company's CFO. Which of the following are signs that the message is a phishing attempt?",
      "During awareness training, users learn how to recognize phishing. Which of the following should they treat as warning signs?"
    ],
    correct: ["The link's domain does not match the sender's company", "An urgent request to enter login credentials"],
    wrong: ["The message arrived during business hours", "The email contains no attachments", "The message uses a professional tone"],
    explanation: "Common phishing signs include links whose domain does not match the claimed sender, misspellings, unusual attachments, urgency, and requests for credentials or personal information. The time a message arrives, the absence of attachments, and a professional tone do not by themselves indicate phishing.",
    hint: "Mismatched link domain + urgent request for credentials = red flags.",
    refs: [
      { title: "CISA Phishing Guidance: Stopping the Attack Cycle at Phase One", url: "https://www.cisa.gov/resources-tools/resources/phishing-guidance-stopping-attack-cycle-phase-one" },
      { title: "Professor Messer SY0-701: Security Awareness", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-awareness-sy0-701/" }
    ]
  },
  {
    id: "d5-060",
    domain: 5,
    objective: "5.6",
    topic: "Responding to reported suspicious messages",
    type: "single",
    stems: [
      "A user receives an unexpected email that claims to be from the IT help desk and asks her to confirm her password through a link. Which of the following is the most appropriate action?",
      "An employee gets a text message, apparently from the CEO, that urgently asks him to buy gift cards. Which of the following should the employee do?"
    ],
    correct: ["Report it to the security team"],
    wrong: ["Reply to verify the sender", "Click the link to check it", "Forward it to coworkers as a warning", "Delete it and tell no one"],
    explanation: "Users should report suspected phishing through the organization's established process so the security team can analyze it and protect other users. Replying or clicking engages the attacker, forwarding spreads the message, and deleting it silently stops the security team from responding.",
    hint: "Suspicious message? Don't engage - report it.",
    refs: [
      { title: "CISA: Avoiding Social Engineering and Phishing Attacks", url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks" },
      { title: "Professor Messer SY0-701: Security Awareness", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-awareness-sy0-701/" }
    ]
  },
  {
    id: "d5-061",
    domain: 5,
    objective: "5.6",
    topic: "Anomalous behavior — unintentional",
    type: "single",
    stems: [
      "A user mistypes a domain name in a browser and lands on an unfamiliar site. Security monitoring flags the event. Which category of anomalous behavior is this?",
      "One employee misplaces a USB drive that contains project files, and another misconfigures a laptop's security settings by mistake. How should these behaviors be categorized?"
    ],
    correct: ["Unintentional"],
    wrong: ["Risky", "Unexpected", "Malicious"],
    explanation: "SY0-701 groups anomalous behavior as risky, unexpected, or unintentional. Human errors such as typing the wrong domain, losing a USB drive, or misconfiguring a setting are unintentional. Risky behavior includes actions like modifying a hosts file or uploading sensitive files, and unexpected behavior includes logins from an unusual country.",
    hint: "Honest mistake = unintentional.",
    refs: [
      { title: "Professor Messer SY0-701: Security Awareness", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-awareness-sy0-701/" },
      { title: "NIST SP 800-50 Rev. 1 Building a Cybersecurity and Privacy Learning Program", url: "https://csrc.nist.gov/pubs/sp/800/50/r1/final" }
    ]
  },
  {
    id: "d5-062",
    domain: 5,
    objective: "5.6",
    topic: "User training — removable media",
    type: "single",
    stems: [
      "An employee finds a USB flash drive labeled \"Payroll Q4\" in the company parking lot. According to security awareness training, what should the employee do?",
      "A staff member receives an unsolicited package that contains a USB drive said to hold a product demo. Which of the following is the best action?"
    ],
    correct: ["Give it to the security team unused"],
    wrong: ["Plug it in to identify the owner", "Scan it with antivirus, then open it", "Test it on a home computer", "Put it in the lost-and-found box"],
    explanation: "Unknown removable media can carry malware that runs when connected, so users should not plug it in and should give it to the security team. Plugging it in anywhere, even after an antivirus scan or on a home computer, risks infection, and the lost-and-found lets someone else plug it in.",
    hint: "Found or unsolicited USB = never plug it in; hand it to security.",
    refs: [
      { title: "NIST CSRC Glossary: removable media", url: "https://csrc.nist.gov/glossary/term/removable_media" },
      { title: "Professor Messer SY0-701: User Training", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/user-training-sy0-701/" }
    ]
  },
  {
    id: "d5-063",
    domain: 5,
    objective: "5.6",
    topic: "User training — insider threat",
    type: "single",
    stems: [
      "Awareness training teaches employees to notice coworkers who access data unrelated to their jobs, work odd hours without reason, or show strong resentment toward the company. Which threat is this training addressing?",
      "A training module explains that a trusted employee might misuse authorized access, either on purpose or by accident, to harm the organization. Which topic does this module cover?"
    ],
    correct: ["Insider threat"],
    wrong: ["Supply chain attack", "Watering hole attack", "Business email compromise", "Typosquatting"],
    explanation: "An insider threat is the risk that someone with authorized access, knowingly or unknowingly, uses that access to harm the organization. Training helps staff recognize and report warning signs. Supply chain, watering hole, BEC, and typosquatting attacks come from outside attackers.",
    hint: "Trusted person + authorized access + harm = insider threat.",
    refs: [
      { title: "NIST CSRC Glossary: insider threat", url: "https://csrc.nist.gov/glossary/term/insider_threat" },
      { title: "CISA: Defining Insider Threats", url: "https://www.cisa.gov/topics/physical-security/insider-threat-mitigation/defining-insider-threats" },
      { title: "Professor Messer SY0-701: User Training", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/user-training-sy0-701/" }
    ]
  },
  {
    id: "d5-064",
    domain: 5,
    objective: "5.6",
    topic: "User training — operational security",
    type: "single",
    stems: [
      "An employee posts a photo of her new ID badge and her desk on social media. A whiteboard with network diagrams is visible in the background. Which training topic most directly addresses this behavior?",
      "A training module teaches staff not to discuss internal project names, system details, or travel plans in public, because attackers can piece small details together. Which topic is this?"
    ],
    correct: ["Operational security"],
    wrong: ["Password management", "Removable media handling", "Change management", "Phishing campaign"],
    explanation: "Operational security (OPSEC) trains people to see their actions from an attacker's view and to protect small pieces of information, such as badge images or system names, that can be combined into something useful to an adversary. Password management, removable media handling, and change management address other risks.",
    hint: "Think like the attacker about what you reveal = OPSEC.",
    refs: [
      { title: "NIST CSRC Glossary: operations security", url: "https://csrc.nist.gov/glossary/term/operations_security" },
      { title: "Professor Messer SY0-701: User Training", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/user-training-sy0-701/" }
    ]
  },
  {
    id: "d5-065",
    domain: 5,
    objective: "5.6",
    topic: "User training — hybrid/remote work",
    type: "single",
    stems: [
      "A company is moving to a hybrid work model. Which training topic should it add to address employees who use home networks, share computers with family, and connect from public Wi-Fi?",
      "An awareness team learns that remote employees let family members use their work laptops and join coffee-shop Wi-Fi without the VPN. Which user training topic should the team emphasize?"
    ],
    correct: ["Hybrid/remote work security"],
    wrong: ["Insider threat awareness", "Password management", "Physical security standards", "Change management"],
    explanation: "Hybrid and remote work training covers risks outside the office: keeping family members off work devices, using the VPN on untrusted networks, and protecting home equipment. Insider threat training covers misuse of trusted access, and password management covers credential practices.",
    hint: "Home, family, coffee-shop Wi-Fi = hybrid/remote work training.",
    refs: [
      { title: "Professor Messer SY0-701: User Training", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/user-training-sy0-701/" },
      { title: "NIST SP 800-50 Rev. 1 Building a Cybersecurity and Privacy Learning Program", url: "https://csrc.nist.gov/pubs/sp/800/50/r1/final" }
    ]
  },
  {
    id: "d5-066",
    domain: 5,
    objective: "5.3",
    topic: "Rules of engagement",
    type: "single",
    stems: [
      "A company hires an outside firm to perform a penetration test. Which of the following documents defines the scope, testing windows, allowed techniques, and points of contact for the test?",
      "Before a third-party tester begins work, the CISO wants written terms that state which systems may be attacked and which actions are not allowed. Which of the following should the CISO agree on with the tester?"
    ],
    correct: ["Rules of engagement"],
    wrong: ["Supply chain analysis", "Right-to-audit clause", "Due diligence", "Service-level agreement", "Non-disclosure agreement"],
    explanation: "Rules of engagement set the terms of a test: the in-scope systems, the dates and times, the allowed and forbidden techniques, and the contacts if something goes wrong. Supply chain analysis and due diligence evaluate a vendor before or during a relationship, a right-to-audit clause lets a customer audit a vendor, an SLA sets service levels, and an NDA protects confidential information.",
    hint: "Terms of a penetration test (what, when, how) = rules of engagement.",
    refs: [
      { title: "NIST CSRC Glossary: rules of engagement", url: "https://csrc.nist.gov/glossary/term/rules_of_engagement" },
      { title: "Professor Messer SY0-701: Third-party Risk Assessment", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/third-party-risk-assessment-sy0-701/" }
    ]
  }
]);
