// Domain 4 — Security Operations (SY0-701). Add new questions at the end.
QBANK.add([
  // ---------------------------------------------------------------- 4.1
  {
    id: "d4-001",
    domain: 4,
    objective: "4.1",
    topic: "Secure baselines",
    type: "single",
    stems: [
      "An organization deploys hundreds of Windows servers and wants each one to start with the same approved, hardened configuration. Which of the following should the security team create and apply?",
      "After an audit, a company finds that its servers use many different security settings. The CISO wants one documented set of approved security settings that every server must match and that the team will update as new threats appear. Which of the following does the CISO want?",
      "A security engineer uses a CIS Benchmark as a starting point to define the minimum security configuration for all Linux hosts. Which of the following is the engineer establishing?"
    ],
    correct: ["Secure baseline"],
    wrong: ["Risk register", "Business impact analysis", "Data retention policy", "Penetration test report", "Service-level agreement"],
    explanation: "A secure baseline is the approved, documented set of security settings that systems are built to and checked against. Teams establish it (often from CIS Benchmarks or vendor guides), deploy it with tools such as Group Policy or configuration management, and maintain it as new patches and threats appear. A risk register, BIA, and SLA are risk or business documents, not system configurations.",
    hint: "Same approved security settings on every system = BASELINE (establish, deploy, maintain).",
    refs: [
      { title: "NIST CSRC Glossary — baseline configuration", url: "https://csrc.nist.gov/glossary/term/baseline_configuration" },
      { title: "CIS Benchmarks", url: "https://www.cisecurity.org/cis-benchmarks" },
      { title: "Professor Messer SY0-701 — Secure Baselines", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/secure-baselines-sy0-701/" }
    ]
  },
  {
    id: "d4-002",
    domain: 4,
    objective: "4.1",
    topic: "Hardening switches and routers",
    type: "multi",
    stems: [
      "A network administrator prepares new core switches for production. Which of the following hardening steps should the administrator take?",
      "An auditor reviews the configuration of branch office routers and recommends that they be hardened. Which of the following actions follow hardening best practice?",
      "A company receives new managed switches from a vendor. Before installation, the security team wants to reduce the attack surface of the management interface. Which of the following should the team do?"
    ],
    correct: ["Change the default administrator credentials", "Use SSH instead of Telnet for management"],
    wrong: ["Enable all unused switch ports", "Use SNMPv1 with the default community string", "Enable HTTP management on every interface", "Disable firmware update checks"],
    explanation: "Hardening network devices includes changing default credentials and using encrypted management protocols such as SSH instead of cleartext Telnet. Unused ports should be disabled, not enabled. SNMPv1 with a default community string, cleartext HTTP management, and stale firmware all increase the attack surface.",
    hint: "Hardening = remove defaults, encrypt management, turn OFF what you do not use.",
    refs: [
      { title: "NIST CSRC Glossary — hardening", url: "https://csrc.nist.gov/glossary/term/hardening" },
      { title: "Professor Messer SY0-701 — Hardening Targets", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hardening-targets-sy0-701/" }
    ]
  },
  {
    id: "d4-003",
    domain: 4,
    objective: "4.1",
    topic: "Hardening ICS/SCADA and embedded systems",
    type: "single",
    stems: [
      "A water utility runs SCADA systems on an unsupported operating system. The vendor will not support the system if the utility installs patches. Which of the following is the best way to protect these systems?",
      "A manufacturing plant uses PLCs with legacy firmware that cannot be updated or run security agents. Which of the following should the security team do to reduce the risk to these devices?",
      "An energy company operates embedded controllers that use a real-time operating system and cannot be patched quickly. Which of the following is the most appropriate security control?"
    ],
    correct: ["Isolate the systems on a segmented network"],
    wrong: ["Apply an OS upgrade without vendor approval", "Give the vendor permanent remote access", "Enable automatic updates on the controllers", "Move the systems to a public cloud"],
    explanation: "ICS, SCADA, RTOS, and many embedded systems often cannot be patched or run agents, so segmentation and strict access control between them and other networks are the primary protection. Unapproved upgrades can break safety-critical processes and void vendor support. Permanent vendor access and cloud exposure add attack paths, and many controllers do not support automatic updates.",
    hint: "Cannot patch it? SEGMENT it.",
    refs: [
      { title: "NIST SP 800-82 Rev. 3 — Guide to Operational Technology (OT) Security", url: "https://csrc.nist.gov/pubs/sp/800/82/r3/final" },
      { title: "NIST CSRC Glossary — SCADA", url: "https://csrc.nist.gov/glossary/term/supervisory_control_and_data_acquisition" },
      { title: "Professor Messer SY0-701 — Hardening Targets", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hardening-targets-sy0-701/" }
    ]
  },
  {
    id: "d4-004",
    domain: 4,
    objective: "4.1",
    topic: "Wireless site survey",
    type: "single",
    stems: [
      "A network team plans to install access points in a new warehouse. The team wants to find the best AP locations and identify sources of interference before installation. Which of the following should the team do first?",
      "Users at a branch office report weak Wi-Fi signals in some conference rooms. The network engineer wants to measure signal strength, channel use, and nearby networks throughout the building. Which of the following should the engineer do?",
      "Before a wireless upgrade, a consultant walks through each floor with a spectrum analyzer to record signal levels and find rogue or neighboring networks. Which of the following is the consultant doing?"
    ],
    correct: ["Perform a wireless site survey"],
    wrong: ["Run a vulnerability scan", "Enable MAC address filtering", "Configure WPA3-Enterprise", "Deploy a captive portal", "Run a tabletop exercise"],
    explanation: "A wireless site survey measures signal strength, channel use, interference, and neighboring networks to plan or troubleshoot AP placement. Its results are often shown as a heat map. Vulnerability scans, MAC filtering, WPA3, and captive portals are security controls or tests, and they do not measure radio coverage.",
    hint: "Where do the APs go and what interferes? Walk the site = SITE SURVEY.",
    refs: [
      { title: "NIST SP 800-153 — Guidelines for Securing WLANs", url: "https://csrc.nist.gov/pubs/sp/800/153/final" },
      { title: "Professor Messer SY0-701 — Securing Wireless and Mobile", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/securing-wireless-and-mobile-sy0-701/" }
    ]
  },
  {
    id: "d4-005",
    domain: 4,
    objective: "4.1",
    topic: "Wireless heat maps",
    type: "single",
    stems: [
      "After a wireless survey, a consultant gives the company a floor plan that uses colors to show strong and weak signal areas. Which of the following did the consultant provide?",
      "A network administrator wants a visual representation of Wi-Fi coverage that shows dead spots across the office floor plan. Which of the following should the administrator create?",
      "A security team wants to see how far the corporate Wi-Fi signal reaches into the parking lot, displayed as colored zones on a site map. Which of the following best meets this need?"
    ],
    correct: ["Heat map"],
    wrong: ["Network diagram", "Data flow diagram", "Packet capture", "Risk matrix", "Asset inventory"],
    explanation: "A wireless heat map overlays measured signal strength on a floor plan or site map, usually with colors, so teams can see coverage, dead spots, and signal leakage. A network diagram shows logical or physical connections, not signal strength. A packet capture records traffic, and a risk matrix rates likelihood and impact.",
    hint: "Colors on a floor plan showing signal = HEAT MAP.",
    refs: [
      { title: "Professor Messer SY0-701 — Securing Wireless and Mobile", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/securing-wireless-and-mobile-sy0-701/" },
      { title: "NIST SP 800-153 — Guidelines for Securing WLANs", url: "https://csrc.nist.gov/pubs/sp/800/153/final" }
    ]
  },
  {
    id: "d4-006",
    domain: 4,
    objective: "4.1",
    topic: "Mobile device management (MDM)",
    type: "single",
    stems: [
      "A company issues smartphones to its sales team. The security manager wants to require a screen lock PIN, push approved apps, and remotely wipe lost devices. Which of the following should the company deploy?",
      "A hospital lets nurses use tablets to view patient records. The IT team must centrally enforce device encryption and remove corporate data if a tablet is lost. Which of the following solutions meets this requirement?",
      "Which of the following provides centralized policy enforcement, application control, and remote wipe for an organization's smartphones and tablets?"
    ],
    correct: ["Mobile device management"],
    wrong: ["Network access control", "Web application firewall", "Security information and event management", "Data loss prevention", "Host-based firewall"],
    explanation: "Mobile device management (MDM) centrally enforces policies on phones and tablets, such as PIN and screen lock, encryption, allowed apps, and remote wipe. NAC controls admission to the network but does not manage device settings. A WAF protects web applications, a SIEM aggregates logs, and DLP watches data movement.",
    hint: "Phones + screen lock + remote wipe = MDM.",
    refs: [
      { title: "NIST CSRC Glossary — mobile device management", url: "https://csrc.nist.gov/glossary/term/mobile_device_management" },
      { title: "NIST SP 800-124 Rev. 2 — Managing the Security of Mobile Devices", url: "https://csrc.nist.gov/pubs/sp/800/124/r2/final" },
      { title: "Professor Messer SY0-701 — Securing Wireless and Mobile", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/securing-wireless-and-mobile-sy0-701/" }
    ]
  },
  {
    id: "d4-007",
    domain: 4,
    objective: "4.1",
    topic: "Mobile deployment models (COPE)",
    type: "single",
    stems: [
      "A company buys one standard smartphone model and gives it to each employee. The company owns and manages the devices, but employees may also use them for personal email and apps. Which deployment model is this?",
      "An organization wants full ownership and control of all mobile devices, which it selects and purchases. It also wants to let staff install personal apps on them. Which of the following deployment models best fits?",
      "A firm wants to keep ownership of every phone and be able to wipe it, but it does not want to forbid personal use of the phone. Which of the following models should the firm choose?"
    ],
    correct: ["COPE"],
    wrong: ["BYOD", "CYOD", "VDI", "COBO"],
    explanation: "Corporate-owned, personally enabled (COPE) devices are bought and managed by the organization but may also be used for personal tasks. BYOD devices belong to the employee. CYOD lets the employee choose from a list of approved models, and COBO (corporate-owned, business only) does not allow personal use. VDI is a desktop virtualization approach, not a device ownership model.",
    hint: "COPE = Company Owns, Personal use Enabled.",
    refs: [
      { title: "NIST CSRC Glossary — corporate-owned personally enabled", url: "https://csrc.nist.gov/glossary/term/corporate_owned_personally_enabled" },
      { title: "NIST SP 800-124 Rev. 2 — Managing the Security of Mobile Devices", url: "https://csrc.nist.gov/pubs/sp/800/124/r2/final" },
      { title: "Professor Messer SY0-701 — Securing Wireless and Mobile", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/securing-wireless-and-mobile-sy0-701/" }
    ]
  },
  {
    id: "d4-008",
    domain: 4,
    objective: "4.1",
    topic: "WPA3 and SAE",
    type: "single",
    stems: [
      "A coffee shop chain uses WPA2-Personal. An auditor warns that an attacker can capture the four-way handshake and run an offline dictionary attack against the passphrase. Which of the following should the chain implement?",
      "A security administrator wants wireless clients to use Simultaneous Authentication of Equals (SAE) instead of a pre-shared key handshake. Which of the following should the administrator configure?",
      "Which of the following wireless security standards replaces the PSK four-way handshake with SAE to protect against offline password guessing?"
    ],
    correct: ["WPA3"],
    wrong: ["WEP", "WPA2 with TKIP", "WPS", "WPA2-Personal with AES"],
    explanation: "WPA3-Personal uses Simultaneous Authentication of Equals (SAE), a key exchange that resists offline dictionary attacks against captured handshakes. WPA2-Personal with AES or TKIP still uses the PSK four-way handshake, which can be captured and cracked offline. WEP is broken, and WPS is a setup feature with known PIN weaknesses.",
    hint: "SAE (dragonfly handshake) = WPA3.",
    refs: [
      { title: "Wi-Fi Alliance — Wi-Fi Security (WPA3)", url: "https://www.wi-fi.org/discover-wi-fi/security" },
      { title: "NIST CSRC Glossary — WPA3", url: "https://csrc.nist.gov/glossary/term/wpa3" },
      { title: "Professor Messer SY0-701 — Wireless Security Settings", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/wireless-security-settings-sy0-701/" }
    ]
  },
  {
    id: "d4-009",
    domain: 4,
    objective: "4.1",
    topic: "Enterprise wireless with RADIUS (AAA)",
    type: "single",
    stems: [
      "A company wants each employee to authenticate to the corporate Wi-Fi with individual directory credentials instead of a shared passphrase. Which of the following should the network administrator configure?",
      "After an employee leaves, a company must change the Wi-Fi passphrase on every device. The CISO wants to revoke one user's wireless access without affecting anyone else. Which of the following best meets this need?",
      "A security architect needs centralized authentication, authorization, and accounting for every wireless connection in the company. Which of the following should the architect choose?"
    ],
    correct: ["WPA3-Enterprise with RADIUS"],
    wrong: ["WPA3-Personal with a long passphrase", "An open network with a captive portal", "WPA2-Personal with MAC filtering", "WPS push-button setup"],
    explanation: "Enterprise mode uses 802.1X with a RADIUS server, so each user authenticates with individual credentials and the AAA server can authorize, log, and revoke each user separately. Personal mode with a passphrase or MAC filtering still relies on one shared secret. Captive portals and WPS do not give per-user 802.1X authentication.",
    hint: "Individual logins + AAA = ENTERPRISE mode + RADIUS (802.1X).",
    refs: [
      { title: "RFC 2865 — Remote Authentication Dial In User Service (RADIUS)", url: "https://www.rfc-editor.org/rfc/rfc2865" },
      { title: "NIST CSRC Glossary — RADIUS", url: "https://csrc.nist.gov/glossary/term/remote_authentication_dial_in_user_service" },
      { title: "Professor Messer SY0-701 — Wireless Security Settings", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/wireless-security-settings-sy0-701/" }
    ]
  },
  {
    id: "d4-010",
    domain: 4,
    objective: "4.1",
    topic: "Wireless authentication protocols (EAP-TLS)",
    type: "single",
    stems: [
      "A company wants the strongest 802.1X wireless authentication. Both the RADIUS server and every laptop must present a digital certificate, and users will not type passwords. Which of the following should the company use?",
      "A network engineer must configure mutual certificate-based authentication for an 802.1X network. Which EAP method requires a certificate on both the client and the authentication server?",
      "A security policy states that wireless clients must prove their identity with a device certificate instead of a username and password. Which of the following EAP types meets this policy?"
    ],
    correct: ["EAP-TLS"],
    wrong: ["PEAP", "EAP-TTLS", "EAP-FAST", "EAP-MD5"],
    explanation: "EAP-TLS performs mutual authentication with certificates on both the client and the server. PEAP and EAP-TTLS normally need only a server certificate and then protect a password-based inner method in a TLS tunnel. EAP-FAST uses Protected Access Credentials, and EAP-MD5 is a weak password-hash method with no server authentication.",
    hint: "Certificates on BOTH sides = EAP-TLS.",
    refs: [
      { title: "RFC 5216 — The EAP-TLS Authentication Protocol", url: "https://www.rfc-editor.org/rfc/rfc5216" },
      { title: "NIST CSRC Glossary — Extensible Authentication Protocol", url: "https://csrc.nist.gov/glossary/term/extensible_authentication_protocol" },
      { title: "NIST SP 800-97 — Establishing Wireless Robust Security Networks", url: "https://csrc.nist.gov/pubs/sp/800/97/final" }
    ]
  },
  {
    id: "d4-011",
    domain: 4,
    objective: "4.1",
    topic: "Input validation",
    type: "single",
    stems: [
      "A tester enters ' OR 1=1 -- into a web application's search field, and the application returns every customer record. Which of the following should the developers add to the application to reject this kind of input?",
      "A developer adds code that checks that a ZIP code field contains exactly five digits and rejects any other value. Which of the following secure coding techniques is the developer using?",
      "A security review finds that an API accepts a quantity field that contains negative numbers and script tags. Which of the following would best ensure that the API accepts only expected data?"
    ],
    correct: ["Input validation"],
    wrong: ["Code signing", "Secure cookies", "Sandboxing", "Obfuscation", "Fuzzing"],
    explanation: "Input validation checks that data matches the expected type, length, format, and range before the application uses it, which helps stop injection attacks. Code signing proves who wrote code, secure cookies protect session tokens, and sandboxing isolates code. Fuzzing is a test technique that finds input flaws, but it does not block bad input at run time.",
    hint: "Check every field for expected format = INPUT VALIDATION.",
    refs: [
      { title: "OWASP Input Validation Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html" },
      { title: "MITRE CWE-20 — Improper Input Validation", url: "https://cwe.mitre.org/data/definitions/20.html" },
      { title: "Professor Messer SY0-701 — Application Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/application-security-sy0-701/" }
    ]
  },
  {
    id: "d4-012",
    domain: 4,
    objective: "4.1",
    topic: "Secure cookies",
    type: "multi",
    stems: [
      "A penetration tester reports that a web application's session cookie is sent over plain HTTP and can be read by JavaScript. Which of the following should the developer do?",
      "A developer wants the browser to send the session token only over HTTPS and never expose it to client-side scripts. Which of the following cookie settings should the developer use?",
      "An XSS flaw let an attacker steal session cookies with document.cookie, and other cookies were seen in cleartext on a public Wi-Fi network. Which of the following changes would best protect the cookies?"
    ],
    correct: ["Set the Secure attribute", "Set the HttpOnly attribute"],
    wrong: ["Set SameSite to None", "Extend the cookie expiration", "Store the session ID in the URL", "Base64-encode the cookie value"],
    explanation: "The Secure attribute tells the browser to send the cookie only over HTTPS, and the HttpOnly attribute blocks client-side scripts such as document.cookie from reading it. SameSite=None weakens cross-site protection, and a longer expiration extends the window for theft. Session IDs in URLs leak through logs and referrers, and Base64 is encoding, not protection.",
    hint: "Secure = HTTPS only. HttpOnly = no JavaScript access.",
    refs: [
      { title: "OWASP — HttpOnly", url: "https://owasp.org/www-community/HttpOnly" },
      { title: "MDN — Using HTTP cookies", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies" },
      { title: "OWASP Session Management Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" }
    ]
  },
  {
    id: "d4-013",
    domain: 4,
    objective: "4.1",
    topic: "Static code analysis",
    type: "single",
    stems: [
      "A development team wants a tool that scans its source code for buffer overflows and injection flaws before the code is compiled. Which of the following should the team use?",
      "A DevSecOps engineer adds a pipeline step that examines every commit's source code for insecure functions without running the application. Which of the following is the engineer adding?",
      "Which of the following testing methods finds security flaws by examining application source code rather than by running the program?"
    ],
    correct: ["Static code analysis"],
    wrong: ["Dynamic analysis", "Fuzzing", "Penetration testing", "Sandboxing"],
    explanation: "Static code analysis (SAST) examines source code or binaries without running them, so it can find flaws such as unsafe functions and injection points early in development. Dynamic analysis and fuzzing test a running application. Penetration testing attacks a running system, and sandboxing isolates code but does not review it.",
    hint: "STATIC = code at rest, not running.",
    refs: [
      { title: "OWASP — Static Code Analysis", url: "https://owasp.org/www-community/controls/Static_Code_Analysis" },
      { title: "Professor Messer SY0-701 — Application Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/application-security-sy0-701/" }
    ]
  },
  {
    id: "d4-014",
    domain: 4,
    objective: "4.1",
    topic: "Code signing",
    type: "single",
    stems: [
      "A software company wants customers to verify that its installers came from the company and have not been changed since release. Which of the following should the company use?",
      "An operating system warns that a driver comes from an unknown publisher. The administrator wants to allow only drivers whose publisher and integrity can be verified. Which of the following does the OS check?",
      "Which of the following uses a developer's private key and certificate to prove the author and integrity of an executable?"
    ],
    correct: ["Code signing"],
    wrong: ["Input validation", "Obfuscation", "Static code analysis", "Sandboxing", "Secure cookies"],
    explanation: "Code signing applies a digital signature to software with the developer's private key, and the certificate lets users verify the publisher and confirm that the code has not been changed. Obfuscation hides code logic but does not prove origin. Input validation, static analysis, and sandboxing improve security but do not verify the author.",
    hint: "Who wrote it + was it changed? = CODE SIGNING (a digital signature).",
    refs: [
      { title: "Microsoft Learn — Driver signing (digital signatures)", url: "https://learn.microsoft.com/en-us/windows-hardware/drivers/install/digital-signatures" },
      { title: "NIST CSRC Glossary — digital signature", url: "https://csrc.nist.gov/glossary/term/digital_signature" },
      { title: "Professor Messer SY0-701 — Application Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/application-security-sy0-701/" }
    ]
  },
  {
    id: "d4-015",
    domain: 4,
    objective: "4.1",
    topic: "Sandboxing",
    type: "single",
    stems: [
      "A security analyst receives a suspicious executable and wants to run it in an isolated environment that cannot affect production systems. Which of the following should the analyst use?",
      "A developer tests new code in an isolated environment that has no connection to production data or networks. Which of the following describes this practice?",
      "An email gateway opens attachments in an isolated virtual environment and watches their behavior before it delivers them. Which of the following techniques does the gateway use?"
    ],
    correct: ["Sandboxing"],
    wrong: ["Code signing", "Input validation", "Tokenization", "Data masking", "Hashing"],
    explanation: "A sandbox is an isolated environment where untrusted code can run without access to production systems or data, which supports malware analysis and safe development testing. Code signing verifies the publisher, and input validation checks data. Tokenization, masking, and hashing protect data, not execution.",
    hint: "Run it where it cannot hurt anything = SANDBOX.",
    refs: [
      { title: "NIST CSRC Glossary — sandbox", url: "https://csrc.nist.gov/glossary/term/sandbox" },
      { title: "Professor Messer SY0-701 — Application Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/application-security-sy0-701/" }
    ]
  },

  // ---------------------------------------------------------------- 4.2
  {
    id: "d4-016",
    domain: 4,
    objective: "4.2",
    topic: "Asset inventory",
    type: "single",
    stems: [
      "A new CISO learns that the IT team does not know how many laptops and servers the company owns. Which of the following should the CISO establish first to support vulnerability management?",
      "During an incident, responders find a forgotten server that no one has patched in years. Which of the following would most likely have prevented this situation?",
      "An organization wants to track every hardware and software asset, its location, and its assigned owner. Which of the following should the organization maintain?"
    ],
    correct: ["Asset inventory"],
    wrong: ["Cyber insurance policy", "Tabletop exercise", "Honeypot", "Data retention policy", "Business continuity plan"],
    explanation: "An accurate asset inventory, kept current through tracking and enumeration (discovery scans), records what the organization owns, where it is, and who owns it. You cannot patch, monitor, or protect systems you do not know about. Insurance, tabletop exercises, honeypots, and retention policies do not identify unknown assets.",
    hint: "You can't protect what you don't know you have = INVENTORY.",
    refs: [
      { title: "NIST CSRC Glossary — inventory", url: "https://csrc.nist.gov/glossary/term/inventory" },
      { title: "NIST SP 1800-5 — IT Asset Management", url: "https://csrc.nist.gov/pubs/sp/1800/5/final" },
      { title: "Professor Messer SY0-701 — Asset Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/asset-management-sy0-701/" }
    ]
  },
  {
    id: "d4-017",
    domain: 4,
    objective: "4.2",
    topic: "Acquisition and procurement",
    type: "single",
    stems: [
      "An audit finds that departments buy cloud software with corporate credit cards and never inform IT or security. Which of the following would best address this issue?",
      "A security manager wants every new hardware and software purchase to be approved, bought from a vetted vendor, and recorded before it is used. Which of the following should the manager formalize?",
      "A company wants security requirements reviewed and budget approval granted before any new technology is bought. Which of the following processes should include these steps?"
    ],
    correct: ["Acquisition and procurement process"],
    wrong: ["Data retention process", "Media sanitization process", "Incident response process", "Vulnerability disclosure process"],
    explanation: "A formal acquisition and procurement process makes sure purchases are approved, come from trusted vendors, meet security requirements, and are recorded so they can be tracked as assets. Data retention and sanitization deal with data at the end of its life. Incident response and vulnerability disclosure handle security events and reported flaws, not purchases.",
    hint: "Before you BUY it = procurement.",
    refs: [
      { title: "Professor Messer SY0-701 — Asset Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/asset-management-sy0-701/" },
      { title: "NIST SP 800-161 Rev. 1 — Cybersecurity Supply Chain Risk Management", url: "https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final" }
    ]
  },
  {
    id: "d4-018",
    domain: 4,
    objective: "4.2",
    topic: "Asset ownership and classification",
    type: "single",
    stems: [
      "The head of human resources decides how employee records are classified and approves who can access them. Which of the following roles does the head of HR hold for this data?",
      "An IT administrator performs backups and applies access permissions to a sales database, but the VP of Sales decides who should have access. Which of the following is the VP of Sales?",
      "A company assigns a senior manager who is accountable for each data set, including its classification and its access rules. Which of the following roles is this?"
    ],
    correct: ["Data owner"],
    wrong: ["Data custodian", "Data processor", "Data subject", "Privacy officer"],
    explanation: "The data owner is the person accountable for a data set, including its classification and who may access it. The data custodian (often IT) carries out the owner's decisions, for example by applying permissions and backups. A data processor handles data for someone else, and a data subject is the person the data describes.",
    hint: "Owner DECIDES and is accountable; custodian DOES the daily work.",
    refs: [
      { title: "Professor Messer SY0-701 — Asset Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/asset-management-sy0-701/" },
      { title: "Professor Messer SY0-701 — Data Roles and Responsibilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-roles-and-responsibilities-sy0-701/" }
    ]
  },
  {
    id: "d4-019",
    domain: 4,
    objective: "4.2",
    topic: "Disposal: destruction",
    type: "single",
    stems: [
      "A defense contractor is retiring hard drives that stored classified designs. The drives will not be reused, and the data must never be recoverable. Which of the following is the most appropriate method?",
      "A hospital decommissions old storage arrays. Policy states that media that held patient data must be made physically unusable before it leaves the building. Which of the following meets this requirement?",
      "A company's policy requires the highest assurance that data cannot be recovered from failed drives that will be thrown away. Which of the following should the technician do?"
    ],
    correct: ["Shred the drives physically"],
    wrong: ["Quick format each drive", "Delete all partitions", "Reinstall the operating system", "Move the files to the recycle bin"],
    explanation: "Physical destruction, such as shredding, pulverizing, or incineration, gives the highest assurance that media that will not be reused cannot be read. NIST SP 800-88 lists Destroy as the strongest sanitization level. Formatting, deleting partitions, reinstalling the OS, and deleting files leave data that recovery tools can often restore.",
    hint: "Never reused + never recoverable = DESTROY it.",
    refs: [
      { title: "NIST SP 800-88 Rev. 1 — Guidelines for Media Sanitization", url: "https://csrc.nist.gov/pubs/sp/800/88/r1/final" },
      { title: "NIST CSRC Glossary — destroy", url: "https://csrc.nist.gov/glossary/term/destroy" },
      { title: "Professor Messer SY0-701 — Asset Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/asset-management-sy0-701/" }
    ]
  },
  {
    id: "d4-020",
    domain: 4,
    objective: "4.2",
    topic: "Disposal: certification",
    type: "single",
    stems: [
      "A company hires a third-party vendor to shred its old hard drives off site. The compliance team needs documented proof that the drives were destroyed. Which of the following should the company obtain from the vendor?",
      "An auditor asks a bank to prove that its decommissioned backup tapes were destroyed as required. Which of the following documents best satisfies the auditor?",
      "A recycling company picks up retired laptops from a law firm. The firm needs a record that lists each drive's serial number and confirms how and when its data was destroyed. Which of the following should the firm request?"
    ],
    correct: ["Certificate of destruction"],
    wrong: ["Service-level agreement", "Memorandum of understanding", "Non-disclosure agreement", "Purchase order", "Bill of materials"],
    explanation: "A certificate of destruction (or sanitization) documents which media were destroyed, by whom, when, and by what method, which proves compliance with disposal requirements. An SLA, MOU, and NDA define relationships or obligations, but they do not prove that a specific drive was destroyed. A purchase order and bill of materials relate to acquisition.",
    hint: "PROOF it was destroyed = CERTIFICATE of destruction.",
    refs: [
      { title: "NIST SP 800-88 Rev. 1 — Guidelines for Media Sanitization (sample certificate)", url: "https://csrc.nist.gov/pubs/sp/800/88/r1/final" },
      { title: "Professor Messer SY0-701 — Asset Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/asset-management-sy0-701/" }
    ]
  },
  {
    id: "d4-021",
    domain: 4,
    objective: "4.2",
    topic: "Data retention",
    type: "single",
    stems: [
      "A financial firm must keep transaction records for seven years to meet regulations and then dispose of them. Which of the following should define these requirements?",
      "A legal team worries that the company keeps old customer emails forever, which increases the impact of a breach. Which of the following should the company create to define how long each type of data is kept?",
      "A records manager needs a document that tells staff the minimum and maximum time to keep invoices, logs, and HR files before secure disposal. Which of the following should the manager write?"
    ],
    correct: ["Data retention policy"],
    wrong: ["Acceptable use policy", "Change management policy", "Password policy", "Business continuity plan"],
    explanation: "A data retention policy defines how long each type of data must be kept to meet legal, regulatory, and business needs, and when it must be disposed of. Keeping data longer than needed increases breach impact. Acceptable use, change management, and password policies cover other topics, and a BCP covers continued operations during a disruption.",
    hint: "How LONG do we keep it? = RETENTION.",
    refs: [
      { title: "Professor Messer SY0-701 — Asset Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/asset-management-sy0-701/" },
      { title: "NIST SP 800-53 Rev. 5 — SI-12 Information Management and Retention", url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" }
    ]
  },

  // ---------------------------------------------------------------- 4.3
  {
    id: "d4-022",
    domain: 4,
    objective: "4.3",
    topic: "False positive",
    type: "single",
    stems: [
      "A vulnerability scan reports that a Windows server has a critical vulnerability in an Apache web module. The administrator confirms that Apache has never been installed on the server. Which of the following best describes this finding?",
      "A scanner flags a Linux host for a missing OpenSSL patch, but the analyst confirms that the patched package version is installed. Which of the following is this result?",
      "A scan reports a vulnerability that does not actually exist on the target system. Which of the following terms describes this result?"
    ],
    correct: ["False positive"],
    wrong: ["False negative", "True positive", "True negative", "Zero-day vulnerability"],
    explanation: "A false positive is a report of a vulnerability that is not actually present. Analysts confirm findings before remediation to catch these. A false negative is a real vulnerability that the scan missed, and a true positive is a correctly reported real vulnerability.",
    hint: "Alarm with no real problem = FALSE POSITIVE.",
    refs: [
      { title: "NIST CSRC Glossary — false positive", url: "https://csrc.nist.gov/glossary/term/false_positive" },
      { title: "Professor Messer SY0-701 — Analyzing Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/analyzing-vulnerabilities-sy0-701/" }
    ]
  },
  {
    id: "d4-023",
    domain: 4,
    objective: "4.3",
    topic: "False negative",
    type: "single",
    stems: [
      "A penetration tester exploits a SQL injection flaw in a web application that the latest vulnerability scan reported as clean. Which of the following describes the scan result?",
      "An attacker compromises a server through a known vulnerability, but the weekly vulnerability scan never reported the flaw. Which of the following did the scanner produce?",
      "Which of the following describes a vulnerability scan that fails to report a weakness that is actually present on the system?"
    ],
    correct: ["False negative"],
    wrong: ["False positive", "True positive", "True negative", "Exception"],
    explanation: "A false negative occurs when a real vulnerability exists but the scan does not report it, which is dangerous because it creates false confidence. A false positive is the opposite, a reported vulnerability that is not real. A true negative correctly reports that no vulnerability exists.",
    hint: "Real problem, NO alarm = FALSE NEGATIVE (the worse one).",
    refs: [
      { title: "NIST CSRC Glossary — false negative", url: "https://csrc.nist.gov/glossary/term/false_negative" },
      { title: "Professor Messer SY0-701 — Analyzing Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/analyzing-vulnerabilities-sy0-701/" }
    ]
  },
  {
    id: "d4-024",
    domain: 4,
    objective: "4.3",
    topic: "Dynamic analysis (fuzzing)",
    type: "single",
    stems: [
      "A tester sends large volumes of random and malformed data to a running application to see whether it crashes or behaves unexpectedly. Which of the following is the tester performing?",
      "A security team wants to find input-handling flaws in a compiled program for which it has no source code. The team will run the program and feed it unexpected inputs. Which of the following techniques should the team use?",
      "Which dynamic analysis technique automatically generates invalid or unexpected input to find crashes and memory errors in a running program?"
    ],
    correct: ["Fuzzing"],
    wrong: ["Static code analysis", "Code signing", "Package monitoring", "Input validation"],
    explanation: "Fuzzing is a dynamic analysis technique that sends random, malformed, or unexpected input to a running program to find crashes and input-handling bugs. Static code analysis reviews code without running it. Code signing proves origin, package monitoring tracks third-party library flaws, and input validation is a coding control, not a test.",
    hint: "Throw random junk at a RUNNING app = FUZZING.",
    refs: [
      { title: "OWASP — Fuzzing", url: "https://owasp.org/www-community/Fuzzing" },
      { title: "Professor Messer SY0-701 — Vulnerability Scanning", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/vulnerability-scanning-sy0-701/" }
    ]
  },
  {
    id: "d4-025",
    domain: 4,
    objective: "4.3",
    topic: "Package monitoring",
    type: "single",
    stems: [
      "A development team builds its application with dozens of third-party open-source libraries. The team wants an alert when a vulnerability is published for any library version it uses. Which of the following should the team implement?",
      "After a popular logging library was found to be vulnerable, a company could not quickly tell which of its applications included that library. Which of the following practices would best address this in the future?",
      "A security engineer wants to continuously check the open-source components in the company's software against vulnerability databases. Which of the following is the engineer setting up?"
    ],
    correct: ["Package monitoring"],
    wrong: ["Fuzzing", "Code signing", "Sandboxing", "Penetration testing", "Input validation"],
    explanation: "Package monitoring tracks the third-party packages and versions an application uses and alerts when new vulnerabilities are published for them, often with software composition analysis tools and SBOMs. Fuzzing and penetration testing test running software. Code signing and sandboxing do not track library vulnerabilities.",
    hint: "Third-party LIBRARIES + new CVE alerts = PACKAGE MONITORING.",
    refs: [
      { title: "OWASP Dependency-Check", url: "https://owasp.org/www-project-dependency-check/" },
      { title: "CISA — Software Bill of Materials (SBOM)", url: "https://www.cisa.gov/sbom" },
      { title: "Professor Messer SY0-701 — Vulnerability Scanning", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/vulnerability-scanning-sy0-701/" }
    ]
  },
  {
    id: "d4-026",
    domain: 4,
    objective: "4.3",
    topic: "Information-sharing organizations (ISAC)",
    type: "single",
    stems: [
      "A regional hospital wants to receive and share sector-specific threat intelligence with other healthcare organizations. Which of the following should the hospital join?",
      "A bank's security team wants to exchange indicators of compromise with other financial institutions through a trusted, industry-focused group. Which of the following best meets this need?",
      "An electric utility wants early warnings about attacks that target other utilities, and it is willing to share its own incident data in return. Which of the following should the utility join?"
    ],
    correct: ["Information Sharing and Analysis Center"],
    wrong: ["Public bug bounty platform", "Underground dark web marketplace", "Coordinated vulnerability disclosure program", "Vendor technical support forum"],
    explanation: "An ISAC is an information-sharing organization in which members of one sector, such as healthcare, finance, or energy, share threat intelligence with each other. A bug bounty or vulnerability disclosure program collects flaw reports from researchers. Dark web marketplaces are sources to monitor, not trusted sharing partners.",
    hint: "Industry peers sharing threat intel = ISAC.",
    refs: [
      { title: "NIST CSRC Glossary — Information Sharing and Analysis Center", url: "https://csrc.nist.gov/glossary/term/information_sharing_and_analysis_center" },
      { title: "National Council of ISACs", url: "https://www.nationalisacs.org/" },
      { title: "Professor Messer SY0-701 — Threat Intelligence", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-intelligence-sy0-701/" }
    ]
  },
  {
    id: "d4-027",
    domain: 4,
    objective: "4.3",
    topic: "Threat feeds: dark web",
    type: "single",
    stems: [
      "A company wants to learn whether stolen employee credentials or customer data are offered for sale on hidden criminal marketplaces. Which threat intelligence source should the company use?",
      "After a breach at a partner, a CISO wants to know whether the company's data appears on Tor-based forums that criminals use. Which of the following should the CISO use?",
      "A threat intelligence team wants early notice when attackers discuss the company or sell access to its network in underground forums. Which of the following sources should the team monitor?"
    ],
    correct: ["Dark web monitoring"],
    wrong: ["Vulnerability scanning", "Penetration testing", "Bug bounty program", "Package monitoring", "Static code analysis"],
    explanation: "Dark web monitoring watches hidden forums and marketplaces, often reached through Tor, where attackers sell stolen credentials, data, and network access. Vulnerability scanning, penetration testing, and static analysis look for flaws in your own systems. A bug bounty program collects reports from researchers.",
    hint: "Stolen data for SALE in hidden forums = DARK WEB.",
    refs: [
      { title: "Professor Messer SY0-701 — Threat Intelligence", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-intelligence-sy0-701/" },
      { title: "NIST SP 800-150 — Guide to Cyber Threat Information Sharing", url: "https://csrc.nist.gov/pubs/sp/800/150/final" }
    ]
  },
  {
    id: "d4-028",
    domain: 4,
    objective: "4.3",
    topic: "Bug bounty",
    type: "single",
    stems: [
      "A software company invites independent security researchers to find flaws in its public website and pays a reward for each valid vulnerability that they report. Which of the following does this describe?",
      "A startup cannot afford a full-time security team. It wants security researchers worldwide to report vulnerabilities in its app in exchange for cash rewards. Which of the following should the startup launch?",
      "A company publishes rules of engagement and a payment table so that outside researchers are paid according to the severity of the flaws they report. Which of the following is the company running?",
      "An online retailer lets anyone on the internet test its customer portal and pays each person according to the vulnerabilities that the person finds. Which of the following describes this program?"
    ],
    correct: ["Bug bounty program"],
    wrong: ["Penetration test", "Tabletop exercise", "Vulnerability scan", "Threat hunting", "Red team exercise", "Open-source intelligence"],
    explanation: "A bug bounty program is a responsible disclosure program that pays outside researchers for valid vulnerability reports. A penetration test is a contracted, time-limited engagement with a specific tester. Tabletop exercises, vulnerability scans, and threat hunting are internal activities that do not reward the public for findings. A red team exercise is a contracted attack simulation, and open-source intelligence is information collected from public sources.",
    hint: "Public researchers + reward per bug = BUG BOUNTY.",
    refs: [
      { title: "NIST CSRC Glossary — bug bounty", url: "https://csrc.nist.gov/glossary/term/bug_bounty" },
      { title: "CISA — Coordinated Vulnerability Disclosure Process", url: "https://www.cisa.gov/coordinated-vulnerability-disclosure-process" },
      { title: "Professor Messer SY0-701 — Penetration Testing", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/penetration-testing-sy0-701/" }
    ]
  },
  {
    id: "d4-029",
    domain: 4,
    objective: "4.3",
    topic: "CVSS",
    type: "single",
    stems: [
      "A vulnerability manager wants to rank findings by severity with an open industry standard that produces a score from 0.0 to 10.0. Which of the following should the manager use?",
      "A scan report shows a finding with a base score of 9.8 and a vector string that begins with AV:N/AC:L. Which of the following produced this score?",
      "Which of the following standards uses base, temporal (threat), and environmental metric groups to rate the severity of a vulnerability?"
    ],
    correct: ["CVSS"],
    wrong: ["CVE", "CWE", "STIX", "TAXII"],
    explanation: "The Common Vulnerability Scoring System (CVSS) rates vulnerability severity from 0.0 to 10.0 with metric groups and a vector string such as AV:N/AC:L. CVE gives each vulnerability a unique identifier but no score. CWE classifies weakness types, and STIX and TAXII are formats and transport for sharing threat intelligence.",
    hint: "SCORE 0-10 = CVSS (the S is for Scoring).",
    refs: [
      { title: "FIRST — CVSS v3.1 Specification", url: "https://www.first.org/cvss/v3.1/specification-document" },
      { title: "NIST CSRC Glossary — Common Vulnerability Scoring System", url: "https://csrc.nist.gov/glossary/term/common_vulnerability_scoring_system" },
      { title: "Professor Messer SY0-701 — Analyzing Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/analyzing-vulnerabilities-sy0-701/" }
    ]
  },
  {
    id: "d4-030",
    domain: 4,
    objective: "4.3",
    topic: "CVE",
    type: "single",
    stems: [
      "A vendor advisory refers to a flaw as CVE-2021-44228 so that security tools and teams can discuss the same issue. Which of the following programs assigns this identifier?",
      "A security team needs a common public identifier for each known vulnerability so it can match scanner results with vendor patches. Which of the following provides these identifiers?",
      "Which of the following is a public list of known vulnerabilities in which each entry has a unique ID that includes the year?"
    ],
    correct: ["CVE"],
    wrong: ["CVSS", "CWE", "CPE", "STIX"],
    explanation: "Common Vulnerabilities and Exposures (CVE) gives each publicly known vulnerability a unique ID, such as CVE-2021-44228, so tools and advisories refer to the same flaw. CVSS scores severity, CWE lists weakness categories, CPE names products and platforms, and STIX describes threat intelligence.",
    hint: "CVE = the NAME/ID of a vulnerability. CVSS = its SCORE.",
    refs: [
      { title: "CVE Program", url: "https://www.cve.org/" },
      { title: "NIST CSRC Glossary — Common Vulnerabilities and Exposures", url: "https://csrc.nist.gov/glossary/term/common_vulnerabilities_and_exposures" },
      { title: "Professor Messer SY0-701 — Analyzing Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/analyzing-vulnerabilities-sy0-701/" }
    ]
  },
  {
    id: "d4-031",
    domain: 4,
    objective: "4.3",
    topic: "Prioritization: environmental variables",
    type: "single",
    stems: [
      "Two servers have the same vulnerability with a CVSS base score of 8.1. One is internet-facing and holds customer data. The other is in an isolated lab. The analyst ranks the internet-facing server first. Which of the following did the analyst consider?",
      "A security team adjusts vendor vulnerability scores based on where each asset sits, which controls already protect it, and how important it is to the business. Which of the following is the team using?",
      "A vulnerability manager knows that the same flaw is more urgent on a public cloud server than on a test VM with no network connection. Which of the following factors explains this difference?"
    ],
    correct: ["Environmental variables"],
    wrong: ["CVSS base metrics", "CVE identifiers", "Exposure factor", "False positive rate"],
    explanation: "Environmental variables describe the organization's own context, such as network exposure, existing controls, and asset criticality, and they change how urgent a vulnerability is. CVSS base metrics are the same for every environment, and a CVE ID only names the flaw. Exposure factor is the percentage of an asset's value lost in one event.",
    hint: "Same flaw, different place, different priority = ENVIRONMENT.",
    refs: [
      { title: "FIRST — CVSS v3.1 Specification (Environmental metrics)", url: "https://www.first.org/cvss/v3.1/specification-document" },
      { title: "Professor Messer SY0-701 — Analyzing Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/analyzing-vulnerabilities-sy0-701/" }
    ]
  },
  {
    id: "d4-032",
    domain: 4,
    objective: "4.3",
    topic: "Exceptions and compensating controls",
    type: "multi",
    stems: [
      "A critical patch for a manufacturing server breaks the plant's control software, so the patch cannot be applied for at least 90 days. Which of the following actions are most appropriate?",
      "A hospital cannot patch a vulnerable medical imaging system because the vendor has not certified the update. Which of the following should the security team do to manage the risk?",
      "A business unit asks to delay a high-severity patch until a vendor releases a compatible version of its application. Which of the following should the security team require?"
    ],
    correct: ["Document a formal exception with risk acceptance", "Apply compensating controls such as segmentation"],
    wrong: ["Ignore the finding until the vendor fixes it", "Remove the server from the asset inventory", "Disable vulnerability scanning on the server", "Mark the finding as a false positive"],
    explanation: "When a patch cannot be applied, the organization documents an approved exception (with an owner, a reason, and an end date) and reduces risk with compensating controls such as network segmentation, extra monitoring, or access restrictions. Ignoring the finding, removing the asset from inventory, or stopping scans hides the risk. The finding is real, so it is not a false positive.",
    hint: "Can't patch = approved EXCEPTION + COMPENSATING control.",
    refs: [
      { title: "NIST CSRC Glossary — compensating security control", url: "https://csrc.nist.gov/glossary/term/compensating_security_control" },
      { title: "NIST SP 800-40 Rev. 4 — Enterprise Patch Management Planning", url: "https://csrc.nist.gov/pubs/sp/800/40/r4/final" },
      { title: "Professor Messer SY0-701 — Vulnerability Remediation", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/vulnerability-remediation-sy0-701/" }
    ]
  },
  {
    id: "d4-033",
    domain: 4,
    objective: "4.3",
    topic: "Validation of remediation (rescanning)",
    type: "single",
    stems: [
      "An administrator reports that a critical vulnerability on 40 servers has been patched. Which of the following should the security analyst do next to validate the remediation?",
      "A vulnerability management policy requires proof that each remediated finding is fixed before its ticket is closed. Which of the following is the best way to provide this proof?",
      "After a configuration change that should close an exposed SMB share, a manager asks how the team will confirm that the fix worked. Which of the following should the team do?"
    ],
    correct: ["Rescan the affected systems"],
    wrong: ["Close the ticket based on the change record", "Purchase cyber insurance", "Update the risk register only", "Run a tabletop exercise"],
    explanation: "Validation confirms that remediation worked, most often by rescanning the affected systems to verify that the vulnerability no longer appears; audits and manual verification are other options. A change record shows that work was planned, not that it succeeded. Insurance transfers risk, and a tabletop exercise tests response plans.",
    hint: "Did the fix work? Scan AGAIN.",
    refs: [
      { title: "NIST SP 800-40 Rev. 4 — Enterprise Patch Management Planning", url: "https://csrc.nist.gov/pubs/sp/800/40/r4/final" },
      { title: "Professor Messer SY0-701 — Vulnerability Remediation", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/vulnerability-remediation-sy0-701/" }
    ]
  },

  // ---------------------------------------------------------------- 4.4
  {
    id: "d4-034",
    domain: 4,
    objective: "4.4",
    topic: "SIEM",
    type: "single",
    stems: [
      "A security team wants to collect logs from firewalls, servers, and cloud applications in one place and correlate events to detect attacks. Which of the following should the team deploy?",
      "An analyst receives one alert that links a failed VPN login, a firewall deny, and a new admin account on a server, all within two minutes. Which of the following tools most likely created this alert?",
      "Which of the following provides centralized log aggregation, event correlation, and real-time alerting across many different sources?"
    ],
    correct: ["SIEM"],
    wrong: ["NetFlow collector", "Data loss prevention", "Antivirus", "Vulnerability scanner", "SNMP manager"],
    explanation: "A security information and event management (SIEM) system aggregates logs from many sources, correlates related events, alerts on them, and supports reporting and long-term storage. A NetFlow collector stores only traffic flow data. DLP, antivirus, and vulnerability scanners are single-purpose tools that send data to a SIEM.",
    hint: "Many logs -> one place -> correlation = SIEM.",
    refs: [
      { title: "NIST CSRC Glossary — SIEM", url: "https://csrc.nist.gov/glossary/term/security_information_and_event_management" },
      { title: "NIST SP 800-92 — Guide to Computer Security Log Management", url: "https://csrc.nist.gov/pubs/sp/800/92/final" },
      { title: "Professor Messer SY0-701 — Security Monitoring", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-monitoring-sy0-701/" }
    ]
  },
  {
    id: "d4-035",
    domain: 4,
    objective: "4.4",
    topic: "SCAP",
    type: "single",
    stems: [
      "A federal agency wants to use standardized, machine-readable content to automatically check thousands of hosts for compliance with a security configuration benchmark. Which of the following should the agency use?",
      "A compliance team wants different vendors' scanning tools to use the same vulnerability and configuration checklists in a common format. Which of the following enables this?",
      "Which of the following is a suite of specifications, maintained by NIST, that lets security tools automate vulnerability and configuration compliance checks?"
    ],
    correct: ["SCAP"],
    wrong: ["SNMP", "NetFlow", "Syslog", "STIX"],
    explanation: "The Security Content Automation Protocol (SCAP) is a NIST suite of specifications, such as XCCDF, OVAL, CVE, and CVSS, that lets tools express and automatically check configuration and vulnerability content in a common format. SNMP manages network devices, NetFlow records traffic flows, and syslog transports log messages. STIX describes threat intelligence.",
    hint: "Automated, standard COMPLIANCE checking = SCAP.",
    refs: [
      { title: "NIST — Security Content Automation Protocol (SCAP)", url: "https://csrc.nist.gov/projects/security-content-automation-protocol" },
      { title: "NIST CSRC Glossary — SCAP", url: "https://csrc.nist.gov/glossary/term/security_content_automation_protocol" },
      { title: "Professor Messer SY0-701 — Security Tools", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-tools-sy0-701/" }
    ]
  },
  {
    id: "d4-036",
    domain: 4,
    objective: "4.4",
    topic: "Agent-based vs agentless",
    type: "single",
    stems: [
      "A company's laptops are often used at home and in hotels, away from the corporate network. The security team needs continuous, real-time monitoring of each laptop's local activity. Which of the following is the best approach?",
      "A security architect needs a monitoring method that keeps collecting process and file events on endpoints even when they are not connected to the corporate network. Which of the following should the architect choose?",
      "A compliance team wants every workstation to be checked all the time, not only during a scheduled remote scan. The team accepts that it must install and update software on each device. Which of the following should the team use?"
    ],
    correct: ["Agent-based monitoring"],
    wrong: ["Agentless monitoring", "SNMP polling", "Port mirroring", "On-demand remote scans"],
    explanation: "An agent is software installed on each device, so it monitors continuously and works even when the device is off the corporate network, but agents must be deployed and kept up to date. Agentless methods, such as SNMP polling and on-demand remote scans, need network access to the device at check time. Port mirroring only sees traffic on the local network.",
    hint: "Always on, even off-network = AGENT installed on the device.",
    refs: [
      { title: "Professor Messer SY0-701 — Security Tools", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-tools-sy0-701/" },
      { title: "NIST SP 800-137 — Information Security Continuous Monitoring", url: "https://csrc.nist.gov/pubs/sp/800/137/final" }
    ]
  },
  {
    id: "d4-037",
    domain: 4,
    objective: "4.4",
    topic: "NetFlow",
    type: "single",
    stems: [
      "A network analyst wants to see which internal hosts communicate with external IP addresses, how much data they send, and on which ports, without storing full packet contents. Which of the following should the analyst use?",
      "Which of the following collects metadata about network traffic, such as source, destination, ports, and byte counts, from routers and switches?",
      "A security team needs long-term statistics about who talked to whom on the network, but storage for full packet captures is too expensive. Which of the following should the team deploy?"
    ],
    correct: ["NetFlow"],
    wrong: ["Full packet capture", "SNMP traps", "SCAP", "Antivirus logs"],
    explanation: "NetFlow (and IPFIX) exports flow records that summarize conversations by source, destination, ports, protocol, and byte and packet counts, without the payload. Full packet capture stores the payload and needs much more storage. SNMP traps are device alerts, SCAP is for compliance checks, and antivirus logs show endpoint detections.",
    hint: "Who talked to whom, how much, no payload = NETFLOW.",
    refs: [
      { title: "RFC 3954 — Cisco Systems NetFlow Services Export Version 9", url: "https://www.rfc-editor.org/rfc/rfc3954" },
      { title: "Professor Messer SY0-701 — Security Tools", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-tools-sy0-701/" }
    ]
  },
  {
    id: "d4-038",
    domain: 4,
    objective: "4.4",
    topic: "Alert tuning",
    type: "single",
    stems: [
      "A SOC analyst reviews this SIEM alert, which fires every night:\n\nALERT Possible data exfiltration | src=10.10.5.20 (backup01) | dst=10.20.1.15 (nas02) | bytes=48 GB | 01:00\n\nThe traffic is the approved nightly backup job. Which of the following should the analyst do?",
      "A new IDS rule creates many false positives for a known internal vulnerability scanner. The SOC manager wants to reduce noise without losing visibility into real attacks. Which of the following is the best action?",
      "Analysts receive thousands of low-value alerts each day and have begun to ignore them. Which of the following should the SOC do to improve alert quality?"
    ],
    correct: ["Tune the alert rules"],
    wrong: ["Disable all SIEM alerts", "Increase the log retention period", "Archive the alerts without review", "Quarantine the source host"],
    explanation: "Alert tuning adjusts thresholds, exclusions, and correlation rules so that known benign activity stops creating alerts while real threats are still detected. This reduces alert fatigue. Disabling or archiving alerts without review removes visibility, longer retention does not reduce noise, and quarantining a known good system disrupts the business.",
    hint: "Too many false alarms = TUNE, don't turn off.",
    refs: [
      { title: "Professor Messer SY0-701 — Security Monitoring", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-monitoring-sy0-701/" },
      { title: "NIST SP 800-92 — Guide to Computer Security Log Management", url: "https://csrc.nist.gov/pubs/sp/800/92/final" }
    ]
  },
  {
    id: "d4-039",
    domain: 4,
    objective: "4.4",
    topic: "Alert response: quarantine",
    type: "single",
    stems: [
      "Endpoint protection software detects a malicious file and moves it to an isolated, encrypted folder where it cannot run but can still be analyzed. Which of the following actions did the software take?",
      "After a SIEM alert, an EDR tool cuts a suspicious host off from the rest of the network so it can talk only to the security console. Which of the following response actions is this?",
      "An email security gateway holds a suspicious message in a separate area where the user cannot open it until an administrator reviews it. Which of the following describes this action?"
    ],
    correct: ["Quarantine"],
    wrong: ["Archiving", "Alert tuning", "Log aggregation", "Allow listing", "Sandboxing"],
    explanation: "Quarantine isolates a suspicious file, message, or host so that it cannot cause harm or spread while it is investigated. Sandboxing runs code in isolation to watch its behavior, rather than holding it. Archiving stores data long-term, alert tuning reduces false positives, and allow listing permits known-good items.",
    hint: "Isolate it and hold it for review = QUARANTINE.",
    refs: [
      { title: "Professor Messer SY0-701 — Security Monitoring", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-monitoring-sy0-701/" },
      { title: "NIST SP 800-83 Rev. 1 — Malware Incident Prevention and Handling", url: "https://csrc.nist.gov/pubs/sp/800/83/r1/final" }
    ]
  },
  {
    id: "d4-040",
    domain: 4,
    objective: "4.4",
    topic: "Log archiving",
    type: "single",
    stems: [
      "A regulation requires a company to keep security logs for one year, but keeping them in the SIEM's fast storage is too expensive. Which of the following should the company do?",
      "An investigator needs firewall logs from eight months ago, but the SIEM keeps only 90 days of searchable data. Which of the following practices would have kept the older logs available?",
      "A security manager wants to keep older log data for compliance and future investigations while freeing space in the SIEM. Which of the following should the manager implement?"
    ],
    correct: ["Archive older logs to long-term storage"],
    wrong: ["Delete logs older than 30 days", "Disable logging on low-risk systems", "Reduce log detail on all systems", "Keep logs only on each local host"],
    explanation: "Archiving moves older logs to cheaper long-term storage so they stay available for compliance and investigations without filling the SIEM. Deleting logs or turning off logging breaks retention requirements. Logs kept only on local hosts can be lost or changed by an attacker.",
    hint: "Keep it long-term, cheaply = ARCHIVE.",
    refs: [
      { title: "NIST SP 800-92 — Guide to Computer Security Log Management", url: "https://csrc.nist.gov/pubs/sp/800/92/final" },
      { title: "Professor Messer SY0-701 — Security Monitoring", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-monitoring-sy0-701/" }
    ]
  },
  {
    id: "d4-041",
    domain: 4,
    objective: "4.4",
    topic: "Security monitoring tools",
    type: "match",
    stems: [
      "A SOC manager is training new analysts on the monitoring tools the company uses. Match each description with the tool it describes.",
      "A security team is documenting its monitoring stack. Match each function with the correct tool."
    ],
    pairs: [
      { item: "Correlates log events from many sources and generates alerts", answer: "SIEM" },
      { item: "Summarizes traffic by source, destination, port, and byte count", answer: "NetFlow" },
      { item: "Sends an unsolicited alert from a network device to a management station", answer: "SNMP trap" },
      { item: "Uses standard formats to automate configuration compliance checks", answer: "SCAP" },
      { item: "Detects and blocks sensitive data that leaves the organization", answer: "DLP" },
      { item: "Identifies missing patches and known weaknesses on hosts", answer: "Vulnerability scanner" }
    ],
    extraOptions: ["Antivirus", "Packet capture"],
    explanation: "A SIEM aggregates and correlates logs, and NetFlow records flow metadata without payloads. SNMP traps are notifications that a device pushes to the manager without being polled. SCAP standardizes automated compliance checking, DLP stops sensitive data from leaving, and vulnerability scanners find missing patches and known flaws.",
    hint: "Correlate = SIEM; flows = NetFlow; device pushes alert = trap; compliance standard = SCAP.",
    refs: [
      { title: "Professor Messer SY0-701 — Security Tools", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-tools-sy0-701/" },
      { title: "RFC 3416 — SNMP Protocol Operations (notifications)", url: "https://www.rfc-editor.org/rfc/rfc3416" },
      { title: "NIST — Security Content Automation Protocol (SCAP)", url: "https://csrc.nist.gov/projects/security-content-automation-protocol" }
    ]
  },

  // ---------------------------------------------------------------- 4.5
  {
    id: "d4-042",
    domain: 4,
    objective: "4.5",
    topic: "Firewall rules and implicit deny",
    type: "single",
    stems: [
      "A firewall processes these rules from top to bottom:\n\n1  ALLOW  TCP  any            -> 10.1.1.10  port 443\n2  ALLOW  TCP  10.2.0.0/16    -> 10.1.1.10  port 22\n3  DENY   IP   any            -> any\n\nA contractor at 172.16.5.20 tries to open an SSH session to 10.1.1.10. Which of the following will occur?",
      "A firewall processes these rules from top to bottom:\n\n1  ALLOW  TCP  any            -> 10.1.1.10  port 443\n2  ALLOW  TCP  10.2.0.0/16    -> 10.1.1.10  port 22\n3  DENY   IP   any            -> any\n\nA workstation at 10.2.4.4 tries to connect to 10.1.1.10 on TCP port 3389. Which of the following will occur?",
      "A firewall processes these rules from top to bottom:\n\n1  ALLOW  TCP  any            -> 10.1.1.10  port 443\n2  ALLOW  TCP  10.2.0.0/16    -> 10.1.1.10  port 22\n3  DENY   IP   any            -> any\n\nAn internet host at 198.51.100.9 tries to connect to 10.1.1.10 on TCP port 22. Which of the following will occur?"
    ],
    correct: ["Rule 3 denies the connection"],
    wrong: ["Rule 1 allows the connection", "Rule 2 allows the connection", "No rule matches, so it is allowed", "Rule 1 denies the connection"],
    explanation: "Firewalls check rules from top to bottom and apply the first match. Rule 1 matches only TCP 443, and rule 2 matches only TCP 22 from 10.2.0.0/16, so this traffic falls through to rule 3, an explicit deny-all rule. Even without that rule, most firewalls apply an implicit deny, so traffic that matches no allow rule is blocked.",
    hint: "Top-down, first match wins; nothing matched = the DENY at the bottom.",
    refs: [
      { title: "NIST SP 800-41 Rev. 1 — Guidelines on Firewalls and Firewall Policy", url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final" },
      { title: "NIST CSRC Glossary — access control list", url: "https://csrc.nist.gov/glossary/term/access_control_list" },
      { title: "Professor Messer SY0-701 — Firewalls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/firewalls-sy0-701/" }
    ]
  },
  {
    id: "d4-043",
    domain: 4,
    objective: "4.5",
    topic: "Screened subnet",
    type: "single",
    stems: [
      "A company must host a public web server that internet users can reach, but a compromise of that server must not give direct access to the internal network. Where should the server be placed?",
      "A network architect places the company's public mail relay and reverse proxy in a segment between the internet and the internal network, with firewall rules on both sides. Which of the following is the architect creating?",
      "Which of the following network zones hosts internet-facing services while firewall rules keep them separate from the trusted internal LAN?"
    ],
    correct: ["Screened subnet"],
    wrong: ["Internal LAN segment", "Air-gapped network", "Honeynet", "Management VLAN"],
    explanation: "A screened subnet (formerly called a DMZ) hosts public-facing services and uses firewall rules to separate them from both the internet and the internal network. An air-gapped network has no external connection, so the public could not reach it. A honeynet is a decoy, and internal or management segments should never be exposed to the internet.",
    hint: "Public servers in a buffer zone = SCREENED SUBNET (old name: DMZ).",
    refs: [
      { title: "NIST CSRC Glossary — demilitarized zone", url: "https://csrc.nist.gov/glossary/term/demilitarized_zone" },
      { title: "NIST SP 800-41 Rev. 1 — Guidelines on Firewalls and Firewall Policy", url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final" },
      { title: "Professor Messer SY0-701 — Firewalls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/firewalls-sy0-701/" }
    ]
  },
  {
    id: "d4-044",
    domain: 4,
    objective: "4.5",
    topic: "IDS/IPS: signatures vs trends (anomaly)",
    type: "single",
    stems: [
      "A security team wants its IPS to detect new attacks that have no known signature by flagging traffic that differs from the network's normal patterns. Which detection method should the team enable?",
      "An IDS raises this alert:\n\nALERT Traffic volume deviation | host=db01 | baseline=50 MB/day | observed=20 GB/6h | dst=203.0.113.77 | no signature match\n\nWhich detection method produced the alert?",
      "Which IDS/IPS detection method first learns a baseline of normal traffic and then alerts on significant deviations from it?"
    ],
    correct: ["Anomaly-based detection"],
    wrong: ["Signature-based detection", "Port-based filtering", "Reputation-based filtering", "Content categorization"],
    explanation: "Anomaly-based (behavior or trend-based) detection compares activity with a learned baseline, so it can flag new attacks that have no signature, but it can also create more false positives. Signature-based detection matches known attack patterns and misses attacks that are new. Port filtering, reputation filtering, and content categorization are firewall and web filter features.",
    hint: "Different from NORMAL baseline = ANOMALY. Matches a known pattern = SIGNATURE.",
    refs: [
      { title: "NIST SP 800-94 — Guide to Intrusion Detection and Prevention Systems", url: "https://csrc.nist.gov/pubs/sp/800/94/final" },
      { title: "Professor Messer SY0-701 — Intrusion Prevention", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/intrusion-prevention-sy0-701/" }
    ]
  },
  {
    id: "d4-045",
    domain: 4,
    objective: "4.5",
    topic: "Web filter: agent-based",
    type: "single",
    stems: [
      "Employees often work from home without connecting to the VPN. The company still wants to block access to malicious and gambling websites on these laptops. Which of the following is the best solution?",
      "A company's web filtering works only when users are in the office, because all traffic passes through an on-premises proxy. Which of the following would apply the same policy to laptops wherever they connect?",
      "A security manager needs URL filtering that travels with each device and does not depend on the device's network location. Which of the following should the manager choose?"
    ],
    correct: ["Agent-based web filtering"],
    wrong: ["Centralized on-premises proxy", "Firewall port blocking", "Sinkhole on the internal DNS server", "Static ACL on the core router"],
    explanation: "Agent-based web filtering installs software on each device, so URL and category rules apply wherever the device connects. A centralized proxy, internal DNS sinkhole, and core router ACL work only for traffic that passes through the corporate network. Port blocking cannot tell a malicious website from a legitimate one on port 443.",
    hint: "Filtering that goes WITH the laptop = AGENT on the laptop.",
    refs: [
      { title: "Professor Messer SY0-701 — Web Filtering", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/web-filtering-sy0-701/" },
      { title: "NIST SP 800-46 Rev. 2 — Telework and Remote Access Security", url: "https://csrc.nist.gov/pubs/sp/800/46/r2/final" }
    ]
  },
  {
    id: "d4-046",
    domain: 4,
    objective: "4.5",
    topic: "Web filter: content categorization",
    type: "single",
    stems: [
      "A school wants to block students from all gambling, adult, and social media websites without having to list each URL. Which web filter feature should the administrator use?",
      "HR asks IT to block job-search websites as a group, including new job sites that appear in the future. Which of the following web filtering features meets this request?",
      "A web filter vendor classifies millions of sites into groups such as news, shopping, and streaming so that administrators can allow or block whole groups. Which feature is this?"
    ],
    correct: ["Content categorization"],
    wrong: ["Manual URL block list", "Port-based firewall rule", "Geolocation blocking", "SSL/TLS certificate pinning"],
    explanation: "Content categorization groups websites by topic, such as gambling or social media, so administrators can block a whole category and the vendor adds new sites to it over time. A manual URL block list needs every site entered by hand. Port rules, geolocation blocking, and certificate pinning do not classify websites by topic.",
    hint: "Block by TOPIC/group = CATEGORIZATION.",
    refs: [
      { title: "Professor Messer SY0-701 — Web Filtering", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/web-filtering-sy0-701/" }
    ]
  },
  {
    id: "d4-047",
    domain: 4,
    objective: "4.5",
    topic: "DNS filtering",
    type: "single",
    stems: [
      "A company wants to stop all devices from reaching known malicious domains by refusing to resolve those domain names. Which of the following should the company implement?",
      "A security analyst sees malware trying to contact a command-and-control domain. The analyst wants to block the lookup of that domain for every device that uses the company's resolvers. Which of the following should the analyst use?",
      "Which of the following security controls blocks access to harmful sites at the name resolution step, before any connection to the site is made?"
    ],
    correct: ["DNS filtering"],
    wrong: ["DNSSEC", "DMARC", "NetFlow", "Port security"],
    explanation: "DNS filtering makes the resolver refuse or redirect lookups for known malicious or unwanted domains, which blocks the connection before it starts. DNSSEC only proves that DNS answers are authentic, and it does not block domains. DMARC is an email policy, NetFlow records traffic, and port security limits MAC addresses on switch ports.",
    hint: "Block the NAME lookup = DNS FILTERING (DNSSEC = signed answers, not blocking).",
    refs: [
      { title: "Professor Messer SY0-701 — Web Filtering", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/web-filtering-sy0-701/" },
      { title: "RFC 4033 — DNS Security Introduction and Requirements", url: "https://www.rfc-editor.org/rfc/rfc4033" }
    ]
  },
  {
    id: "d4-048",
    domain: 4,
    objective: "4.5",
    topic: "Email security: DMARC",
    type: "single",
    stems: [
      "A company already publishes SPF and DKIM records. It now wants receiving servers to reject messages that fail these checks and to send it aggregate reports. Which of the following should the company publish?",
      "An email administrator wants to tell other mail servers whether to quarantine or reject spoofed messages that claim to come from the company's domain. Which of the following should the administrator configure?",
      "Which email authentication standard publishes a domain policy of none, quarantine, or reject and asks receivers to send reports about authentication results?"
    ],
    correct: ["DMARC"],
    wrong: ["SPF", "DKIM", "S/MIME", "DNSSEC", "STARTTLS"],
    explanation: "DMARC builds on SPF and DKIM. It publishes a policy (none, quarantine, or reject) for messages that fail alignment and tells receivers where to send reports. SPF lists authorized sending servers, and DKIM signs messages, but neither one sets a failure policy. S/MIME secures individual messages, and STARTTLS encrypts the transport.",
    hint: "DMARC = Policy + Reporting on top of SPF and DKIM.",
    refs: [
      { title: "RFC 7489 — DMARC", url: "https://www.rfc-editor.org/rfc/rfc7489" },
      { title: "NIST SP 800-177 Rev. 1 — Trustworthy Email", url: "https://csrc.nist.gov/pubs/sp/800/177/r1/final" },
      { title: "Professor Messer SY0-701 — Email Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/email-security-sy0-701/" }
    ]
  },
  {
    id: "d4-049",
    domain: 4,
    objective: "4.5",
    topic: "Email security: SPF and DKIM",
    type: "multi",
    stems: [
      "A mail administrator is preparing to publish a DMARC policy. Which of the following mechanisms must be in place because DMARC uses their results?",
      "A receiving mail server evaluates DMARC for an incoming message. Which of the following authentication results does the server check for alignment with the visible From domain?",
      "A company wants receiving servers to verify both the sending server's IP address and a cryptographic signature on each message, using records published in DNS. Which of the following should the company publish?"
    ],
    correct: ["SPF", "DKIM"],
    wrong: ["S/MIME", "DNSSEC", "STARTTLS", "PGP"],
    explanation: "SPF publishes in DNS the servers allowed to send for a domain, and DKIM adds a domain signature to each message that receivers verify with a public key in DNS. DMARC passes when either one passes and aligns with the From domain. S/MIME and PGP are end-user message encryption and signing, DNSSEC signs DNS data, and STARTTLS encrypts the connection.",
    hint: "SPF = which SERVERS. DKIM = SIGNATURE. Both feed DMARC.",
    refs: [
      { title: "RFC 7208 — Sender Policy Framework (SPF)", url: "https://www.rfc-editor.org/rfc/rfc7208" },
      { title: "RFC 6376 — DomainKeys Identified Mail (DKIM)", url: "https://www.rfc-editor.org/rfc/rfc6376" },
      { title: "RFC 7489 — DMARC", url: "https://www.rfc-editor.org/rfc/rfc7489" }
    ]
  },
  {
    id: "d4-050",
    domain: 4,
    objective: "4.5",
    topic: "File integrity monitoring",
    type: "single",
    stems: [
      "An auditor requires the company to detect any unauthorized change to critical system binaries and configuration files on its payment servers. Which of the following should the company deploy?",
      "An attacker replaced a system DLL on a web server, and no tool noticed for weeks. Which of the following would have alerted the team when the file's hash changed?",
      "A Linux administrator wants an alert whenever /etc/passwd or files in /usr/bin change unexpectedly. Which of the following should the administrator use?"
    ],
    correct: ["File integrity monitoring"],
    wrong: ["Data loss prevention", "NetFlow analysis", "Full disk encryption", "Web application firewall"],
    explanation: "File integrity monitoring (FIM) records hashes of important files and alerts when they change, which reveals tampering with binaries and configuration files. DLP watches for sensitive data that leaves the organization. NetFlow records traffic, full disk encryption protects data at rest, and a WAF filters web requests.",
    hint: "Hash changed on a system file = FIM.",
    refs: [
      { title: "NIST CSRC Glossary — file integrity monitoring", url: "https://csrc.nist.gov/glossary/term/file_integrity_monitoring" },
      { title: "Professor Messer SY0-701 — Monitoring Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/monitoring-data-sy0-701/" }
    ]
  },
  {
    id: "d4-051",
    domain: 4,
    objective: "4.5",
    topic: "Data loss prevention",
    type: "single",
    stems: [
      "A bank wants to stop employees from emailing spreadsheets that contain customer account numbers to external addresses. Which of the following should the bank implement?",
      "A healthcare company must detect and block uploads of patient records to personal cloud storage sites. Which of the following solutions best meets this requirement?",
      "A security team wants a tool that inspects outbound email, web uploads, and USB copies for credit card numbers and blocks them. Which of the following should the team deploy?"
    ],
    correct: ["Data loss prevention"],
    wrong: ["File integrity monitoring", "Intrusion prevention system", "Web application firewall", "Network access control"],
    explanation: "Data loss prevention (DLP) inspects data in motion, at rest, and in use for sensitive patterns, such as account or card numbers, and blocks or alerts on unauthorized transfers. FIM detects file changes, an IPS blocks attack traffic, a WAF protects web applications from attacks, and NAC controls which devices join the network.",
    hint: "Sensitive data LEAVING = DLP.",
    refs: [
      { title: "NIST CSRC Glossary — data loss prevention", url: "https://csrc.nist.gov/glossary/term/data_loss_prevention" },
      { title: "Professor Messer SY0-701 — Monitoring Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/monitoring-data-sy0-701/" }
    ]
  },
  {
    id: "d4-052",
    domain: 4,
    objective: "4.5",
    topic: "Network access control",
    type: "single",
    stems: [
      "A company wants to check that each device has current antivirus and patches before it can join the wired network. Devices that fail must go to a remediation VLAN. Which of the following should the company deploy?",
      "Visitors sometimes plug personal laptops into open network jacks in conference rooms. The security team wants only authorized and healthy devices to get network access. Which of the following is the best solution?",
      "Which of the following checks a device's identity and security posture when it connects and then grants, limits, or denies network access?"
    ],
    correct: ["Network access control"],
    wrong: ["Data loss prevention", "File integrity monitoring", "Security information and event management", "Web filtering"],
    explanation: "Network access control (NAC) authenticates devices, often with 802.1X, checks their posture (patches, antivirus, configuration), and then permits, restricts, or quarantines them, for example to a remediation VLAN. DLP protects data, FIM watches files, a SIEM correlates logs, and web filtering controls website access.",
    hint: "Check health BEFORE letting it on the network = NAC.",
    refs: [
      { title: "NIST CSRC Glossary — network access control", url: "https://csrc.nist.gov/glossary/term/network_access_control" },
      { title: "Professor Messer SY0-701 — Endpoint Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/endpoint-security-sy0-701/" }
    ]
  },
  {
    id: "d4-053",
    domain: 4,
    objective: "4.5",
    topic: "EDR",
    type: "single",
    stems: [
      "A company's signature-based antivirus missed a fileless attack. The CISO wants a tool that records endpoint process activity, detects malicious behavior, and can isolate a host remotely. Which of the following should the company deploy?",
      "An analyst needs to see the full process tree of a suspicious PowerShell command on a laptop and then isolate the laptop with one click. Which of the following tools provides these capabilities?",
      "Which endpoint tool uses behavioral analysis to detect threats and can automatically respond, for example by stopping a process or rolling back changes?"
    ],
    correct: ["Endpoint detection and response"],
    wrong: ["Traditional antivirus", "Host-based firewall", "File integrity monitoring", "Web filter"],
    explanation: "Endpoint detection and response (EDR) records detailed endpoint activity, uses behavioral analysis to detect threats that have no signature, and supports investigation and response such as host isolation or rollback. Traditional antivirus relies mostly on signatures. A host firewall filters traffic, FIM detects file changes, and a web filter controls website access.",
    hint: "Endpoint visibility + behavior + RESPONSE = EDR.",
    refs: [
      { title: "NIST CSRC Glossary — endpoint detection and response", url: "https://csrc.nist.gov/glossary/term/endpoint_detection_and_response" },
      { title: "Professor Messer SY0-701 — Endpoint Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/endpoint-security-sy0-701/" }
    ]
  },
  {
    id: "d4-054",
    domain: 4,
    objective: "4.5",
    topic: "XDR",
    type: "single",
    stems: [
      "A SOC wants one platform that correlates detections from endpoints, email, network, and cloud workloads and coordinates response across all of them. Which of the following best fits?",
      "A company already has EDR on its laptops. It now wants detection and response that extends beyond endpoints to include identity, email, and cloud data. Which of the following should the company adopt?",
      "Which of the following expands endpoint detection and response by adding many more data sources, which improves detection and reduces investigation time?"
    ],
    correct: ["Extended detection and response"],
    wrong: ["Endpoint detection and response", "Traditional antivirus", "Network access control", "Host-based intrusion detection"],
    explanation: "Extended detection and response (XDR) takes the EDR approach and adds data from network, email, identity, and cloud sources, so it can correlate across the environment and automate response. EDR alone focuses on endpoints. Antivirus, NAC, and HIDS each cover a narrower function.",
    hint: "EDR + MORE data sources = XDR (eXtended).",
    refs: [
      { title: "Professor Messer SY0-701 — Endpoint Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/endpoint-security-sy0-701/" },
      { title: "NIST CSRC Glossary — endpoint detection and response", url: "https://csrc.nist.gov/glossary/term/endpoint_detection_and_response" }
    ]
  },
  {
    id: "d4-055",
    domain: 4,
    objective: "4.5",
    topic: "OS security: SELinux",
    type: "single",
    stems: [
      "A Linux administrator wants mandatory access control so that a compromised web server process cannot read files outside its allowed context, even when it runs as root. Which of the following should the administrator enable?",
      "Which of the following Linux security features uses labels and a central policy to enforce mandatory access control on processes and files?",
      "A security engineer wants to confine Linux services so that the kernel enforces a policy that users cannot override with normal file permissions. Which of the following should the engineer use?"
    ],
    correct: ["SELinux"],
    wrong: ["Group Policy", "Discretionary file permissions", "AppLocker", "Active Directory"],
    explanation: "Security-Enhanced Linux (SELinux) is a Linux kernel security module that enforces mandatory access control with security labels and a central policy, so even root processes are confined. Standard file permissions are discretionary, which means owners can change them. Group Policy, AppLocker, and Active Directory are Windows technologies.",
    hint: "Linux + MANDATORY access control = SELinux.",
    refs: [
      { title: "Red Hat — What is SELinux?", url: "https://www.redhat.com/en/topics/linux/what-is-selinux" },
      { title: "NIST CSRC Glossary — mandatory access control", url: "https://csrc.nist.gov/glossary/term/mandatory_access_control" },
      { title: "Professor Messer SY0-701 — Operating System Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/operating-system-security-sy0-701/" }
    ]
  },
  {
    id: "d4-056",
    domain: 4,
    objective: "4.5",
    topic: "OS security: Group Policy",
    type: "single",
    stems: [
      "A Windows domain administrator must enforce password length, screen lock time, and USB restrictions on 2,000 domain-joined workstations. Which of the following is the most efficient method?",
      "Which of the following lets administrators centrally apply security settings to users and computers in an Active Directory domain?",
      "A security team wants to push a new firewall setting and disable an insecure protocol on every domain-joined Windows server at once. Which of the following should the team use?"
    ],
    correct: ["Group Policy"],
    wrong: ["SELinux", "Local policy on each workstation", "Syslog", "SNMP"],
    explanation: "Group Policy applies security and configuration settings centrally to users and computers in an Active Directory domain, which makes it a common way to deploy a Windows secure baseline. SELinux is a Linux security module. Local policy must be set on each device separately. Syslog and SNMP are monitoring and management protocols, not configuration enforcement tools.",
    hint: "Windows domain + central settings = GROUP POLICY (GPO).",
    refs: [
      { title: "Microsoft Learn — Group Policy overview", url: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/group-policy/group-policy-overview" },
      { title: "Professor Messer SY0-701 — Operating System Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/operating-system-security-sy0-701/" }
    ]
  },
  {
    id: "d4-057",
    domain: 4,
    objective: "4.5",
    topic: "User behavior analytics",
    type: "single",
    stems: [
      "A user who normally logs in from Chicago during business hours suddenly downloads thousands of files at 3 a.m. from a new country. Which of the following technologies is designed to detect this kind of deviation?",
      "A security team wants to build a baseline of each employee's normal activity and alert when an account acts differently, which may show a compromised account or an insider threat. Which of the following should the team deploy?",
      "Which of the following uses machine learning on user activity to spot unusual behavior, such as access to systems a user has never used before?"
    ],
    correct: ["User behavior analytics"],
    wrong: ["File integrity monitoring", "DNS filtering", "Network access control", "Code signing"],
    explanation: "User behavior analytics (UBA, or UEBA when it also covers entities) builds a baseline of normal activity for each user and alerts on deviations, such as unusual times, locations, or data volumes. FIM watches files, DNS filtering blocks domains, NAC checks devices at connection, and code signing verifies software publishers.",
    hint: "Unusual for THIS USER = UBA.",
    refs: [
      { title: "NIST CSRC Glossary — user and entity behavior analytics", url: "https://csrc.nist.gov/glossary/term/user_and_entity_behavior_analytics" },
      { title: "Professor Messer SY0-701 — Endpoint Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/endpoint-security-sy0-701/" }
    ]
  },
  {
    id: "d4-058",
    domain: 4,
    objective: "4.5",
    topic: "Secure protocols and ports",
    type: "match",
    stems: [
      "A security administrator replaces insecure protocols and must open firewall ports for the secure versions. Match each secure protocol with its default TCP port.",
      "A firewall engineer is writing allow rules for encrypted services. Match each secure protocol with the default TCP port it uses."
    ],
    pairs: [
      { item: "SSH (and SFTP)", answer: "22" },
      { item: "HTTPS", answer: "443" },
      { item: "LDAPS", answer: "636" },
      { item: "IMAPS (IMAP over TLS)", answer: "993" },
      { item: "POP3S (POP3 over TLS)", answer: "995" }
    ],
    extraOptions: ["23", "80", "110", "143", "389"],
    explanation: "SSH and SFTP use TCP 22, HTTPS uses 443, LDAPS uses 636, IMAPS uses 993, and POP3S uses 995. The insecure versions use other ports: Telnet 23, HTTP 80, POP3 110, IMAP 143, and LDAP 389. Choose the secure protocol and its port, and block the cleartext port.",
    hint: "Secure pairs: 23->22, 80->443, 389->636, 143->993, 110->995.",
    refs: [
      { title: "Professor Messer SY0-701 — Secure Protocols", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/secure-protocols-sy0-701/" },
      { title: "RFC 8314 — Cleartext Considered Obsolete (IMAPS 993, POP3S 995)", url: "https://www.rfc-editor.org/rfc/rfc8314" },
      { title: "RFC 4253 — SSH Transport Layer Protocol (port 22)", url: "https://www.rfc-editor.org/rfc/rfc4253" }
    ]
  },

  // ---------------------------------------------------------------- 4.6
  {
    id: "d4-059",
    domain: 4,
    objective: "4.6",
    topic: "De-provisioning",
    type: "single",
    stems: [
      "An employee in the finance department resigns. Two weeks later, the security team finds that someone used the employee's account to log in to the VPN. Which of the following processes failed?",
      "An audit finds 35 active accounts that belong to people who left the company last year. Which of the following processes should the company improve?",
      "A contractor's project ends, but the contractor can still log in to the company's cloud applications a month later. Which of the following was not performed correctly?"
    ],
    correct: ["Account de-provisioning"],
    wrong: ["Account provisioning", "Identity proofing", "Federation", "Single sign-on", "Time-of-day restrictions"],
    explanation: "De-provisioning disables or removes accounts and access when a user leaves or no longer needs them. Accounts that stay active after someone leaves are a common way for attackers to get in. Provisioning creates accounts, and identity proofing verifies who a person is before an account is issued. Federation and SSO let users sign in across systems.",
    hint: "Person LEFT but account still works = DE-provisioning failed.",
    refs: [
      { title: "NIST CSRC Glossary — provisioning", url: "https://csrc.nist.gov/glossary/term/provisioning" },
      { title: "Professor Messer SY0-701 — Identity and Access Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/identity-and-access-management-sy0-701/" }
    ]
  },
  {
    id: "d4-060",
    domain: 4,
    objective: "4.6",
    topic: "Federation and SSO with SAML",
    type: "single",
    stems: [
      "A company wants employees to sign in once with corporate credentials and then use a third-party cloud HR application. The identity provider must send a signed XML assertion to the service provider. Which of the following should be used?",
      "A university lets students use their campus credentials on a partner library's website. The partner trusts XML-based authentication assertions from the university's identity provider. Which of the following standards is in use?",
      "Which open standard uses XML assertions to exchange authentication and authorization data between an identity provider and a service provider for web SSO?"
    ],
    correct: ["SAML"],
    wrong: ["OAuth", "LDAP", "RADIUS", "Kerberos", "TACACS+"],
    explanation: "Security Assertion Markup Language (SAML) lets an identity provider send signed XML assertions to a service provider, which enables federated web single sign-on across organizations. OAuth is an authorization framework that issues access tokens to applications. LDAP queries directories, RADIUS and TACACS+ provide network AAA, and Kerberos uses tickets inside one realm.",
    hint: "XML assertion + IdP + SP = SAML.",
    refs: [
      { title: "OASIS — SAML 2.0 Technical Overview", url: "https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html" },
      { title: "NIST CSRC Glossary — Security Assertion Markup Language", url: "https://csrc.nist.gov/glossary/term/security_assertion_markup_language" },
      { title: "Professor Messer SY0-701 — Identity and Access Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/identity-and-access-management-sy0-701/" }
    ]
  },
  {
    id: "d4-061",
    domain: 4,
    objective: "4.6",
    topic: "OAuth",
    type: "single",
    stems: [
      "A photo printing website asks users to let it access their photos in a cloud storage service, without giving the printing site their cloud password. Which of the following frameworks enables this?",
      "A developer wants a third-party calendar app to get limited, revocable access tokens for a user's mailbox API instead of storing the user's password. Which of the following should the developer use?",
      "Which of the following is an authorization framework that lets a user grant an application limited access to resources on another service?"
    ],
    correct: ["OAuth"],
    wrong: ["SAML", "LDAP", "RADIUS", "Kerberos", "TACACS+"],
    explanation: "OAuth 2.0 is an authorization framework. The user approves a request, and the application receives an access token with a limited scope, so it never sees the user's password. SAML is mainly used for federated authentication with XML assertions. LDAP, RADIUS, TACACS+, and Kerberos are directory and network authentication protocols.",
    hint: "Let THIS app access THAT data without your password = OAuth (authorization tokens).",
    refs: [
      { title: "RFC 6749 — The OAuth 2.0 Authorization Framework", url: "https://www.rfc-editor.org/rfc/rfc6749" },
      { title: "NIST CSRC Glossary — OAuth", url: "https://csrc.nist.gov/glossary/term/oauth" },
      { title: "Professor Messer SY0-701 — Identity and Access Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/identity-and-access-management-sy0-701/" }
    ]
  },
  {
    id: "d4-062",
    domain: 4,
    objective: "4.6",
    topic: "Access control models",
    type: "match",
    stems: [
      "A security architect is comparing access control models for a new system. Match each description with the access control model it describes.",
      "An auditor reviews how different systems grant access. Match each scenario with the access control model in use."
    ],
    pairs: [
      { item: "The OS assigns labels such as Secret and Top Secret, and users cannot change them", answer: "Mandatory access control" },
      { item: "The owner of a file decides who else may read or change it", answer: "Discretionary access control" },
      { item: "Access is granted by job function, such as Payroll Clerk or Help Desk", answer: "Role-based access control" },
      { item: "An administrator's rule on a lab share allows access only from 9:00 a.m. to 5:00 p.m.", answer: "Rule-based access control" },
      { item: "A policy combines user department, device type, location, and data sensitivity", answer: "Attribute-based access control" }
    ],
    extraOptions: [],
    explanation: "MAC uses labels set by the system that users cannot change, and DAC lets the resource owner grant access. RBAC grants access through job roles. Rule-based access control applies administrator-defined rules, such as time-of-day restrictions, to everyone who accesses an object. ABAC evaluates many attributes of the user, resource, and environment together.",
    hint: "Labels = MAC; owner decides = DAC; job = RBAC; admin rule = Rule-based; many attributes = ABAC.",
    refs: [
      { title: "Professor Messer SY0-701 — Access Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/access-controls-sy0-701/" },
      { title: "NIST SP 800-162 — Guide to Attribute Based Access Control", url: "https://csrc.nist.gov/pubs/sp/800/162/upd2/final" },
      { title: "NIST CSRC Glossary — role-based access control", url: "https://csrc.nist.gov/glossary/term/role_based_access_control" }
    ]
  },
  {
    id: "d4-063",
    domain: 4,
    objective: "4.6",
    topic: "MFA factors",
    type: "match",
    stems: [
      "A security trainer explains authentication factors to new employees. Match each authentication method with its factor type.",
      "An identity team is checking that its MFA design uses different factor types. Match each method with the factor it represents."
    ],
    pairs: [
      { item: "A PIN typed at an ATM", answer: "Something you know" },
      { item: "A hardware security key plugged into a USB port", answer: "Something you have" },
      { item: "A fingerprint scan on a laptop reader", answer: "Something you are" },
      { item: "Login allowed only when GPS shows the device at headquarters", answer: "Somewhere you are" },
      { item: "A one-time code from an authenticator app on a phone", answer: "Something you have" },
      { item: "The answer to a security question", answer: "Something you know" }
    ],
    extraOptions: ["Something you do"],
    explanation: "Knowledge factors include PINs, passwords, and security answers. Possession factors include security keys and phones that run authenticator apps, because the code proves you hold the device. Inherence factors are biometrics such as fingerprints, and location factors use GPS or IP geolocation. True MFA combines two or more different factor types.",
    hint: "Know = memory; Have = object; Are = body; Where = location.",
    refs: [
      { title: "NIST CSRC Glossary — multi-factor authentication", url: "https://csrc.nist.gov/glossary/term/multi_factor_authentication" },
      { title: "NIST SP 800-63B — Authentication and Lifecycle Management", url: "https://pages.nist.gov/800-63-3/sp800-63b.html" },
      { title: "Professor Messer SY0-701 — Multifactor Authentication", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/multifactor-authentication-sy0-701/" }
    ]
  },
  {
    id: "d4-064",
    domain: 4,
    objective: "4.6",
    topic: "Privileged access management",
    type: "multi",
    stems: [
      "A company wants to reduce the risk of standing administrator privileges and shared admin passwords. Which of the following privileged access management capabilities should the company use?",
      "An auditor finds that 20 IT staff members have permanent domain administrator rights and know the shared admin passwords. Which of the following controls would best address these findings?",
      "A CISO wants administrators to receive elevated rights only when they need them, and wants admin passwords stored and checked out from a secure system. Which of the following should the CISO implement?"
    ],
    correct: ["Just-in-time permissions", "Password vaulting"],
    wrong: ["Permanent admin group membership", "Discretionary access control", "Security questions for admin accounts", "Shared administrator accounts"],
    explanation: "Just-in-time permissions grant elevated rights only for a limited time when they are needed, which removes standing privileges. Password vaulting stores privileged credentials in a secure vault and checks them out with logging. Ephemeral credentials are a related PAM feature. Permanent admin membership, shared admin accounts, and security questions increase risk, and DAC does not manage privileged access.",
    hint: "PAM = JIT (only when needed) + VAULT (passwords locked up) + ephemeral credentials.",
    refs: [
      { title: "NIST CSRC Glossary — privileged access management", url: "https://csrc.nist.gov/glossary/term/privileged_access_management" },
      { title: "NIST CSRC Glossary — just-in-time", url: "https://csrc.nist.gov/glossary/term/just_in_time" },
      { title: "Professor Messer SY0-701 — Password Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/password-security-sy0-701/" }
    ]
  },
  {
    id: "d4-065",
    domain: 4,
    objective: "4.6",
    topic: "Password concepts",
    type: "multi",
    stems: [
      "A security manager wants to make user passwords harder to crack and less likely to be reused across sites. Which of the following should the manager do?",
      "After a credential stuffing attack, a company reviews its password practices. Which of the following would most improve password security?",
      "A security audit finds that users choose short passwords and reuse the same ones on personal websites. Which of the following should the security team do?"
    ],
    correct: ["Increase the minimum password length", "Provide an approved password manager"],
    wrong: ["Limit passwords to 8 characters", "Allow reuse of previous passwords", "Show password hints on the login page", "Store passwords in a shared spreadsheet"],
    explanation: "Longer passwords are much harder to crack, and a password manager lets users create and store long, unique passwords for each site, which stops reuse and limits credential stuffing. A maximum length of 8 characters weakens passwords. Reusing passwords, visible hints, and shared spreadsheets make it easier for attackers to obtain them.",
    hint: "LENGTH beats short; a MANAGER makes unique passwords easy.",
    refs: [
      { title: "NIST SP 800-63B — Memorized Secret Verifiers", url: "https://pages.nist.gov/800-63-3/sp800-63b.html" },
      { title: "Professor Messer SY0-701 — Password Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/password-security-sy0-701/" }
    ]
  },
  {
    id: "d4-066",
    domain: 4,
    objective: "4.6",
    topic: "Security keys (phishing-resistant MFA)",
    type: "single",
    stems: [
      "A company wants phishing-resistant MFA for administrators. The solution must use a physical device that performs a cryptographic challenge-response bound to the website's origin. Which of the following should the company deploy?",
      "After several employees entered SMS codes on a fake login page, the CISO wants an authenticator that will not work on a look-alike domain. Which of the following best meets this requirement?",
      "Which of the following passwordless authenticators uses public key cryptography on a hardware token and resists phishing because it checks the site's domain?"
    ],
    correct: ["FIDO2 hardware security key"],
    wrong: ["SMS one-time passcode", "Email one-time code", "TOTP authenticator app", "Security questions"],
    explanation: "FIDO2/WebAuthn security keys sign a challenge with a private key that is tied to the real website's origin, so a look-alike phishing site cannot use the response. SMS, email, and TOTP codes can be typed into a fake site and relayed by an attacker. Security questions are a weak knowledge factor.",
    hint: "Phishing-resistant + hardware + origin-bound = FIDO2 security key.",
    refs: [
      { title: "W3C — Web Authentication (WebAuthn) Level 2", url: "https://www.w3.org/TR/webauthn-2/" },
      { title: "NIST SP 800-63B — Authentication and Lifecycle Management", url: "https://pages.nist.gov/800-63-3/sp800-63b.html" },
      { title: "Professor Messer SY0-701 — Multifactor Authentication", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/multifactor-authentication-sy0-701/" }
    ]
  },
  {
    id: "d4-067",
    domain: 4,
    objective: "4.6",
    topic: "Least privilege",
    type: "single",
    stems: [
      "An employee who has moved through three departments still has the access rights from each previous role. Which of the following principles does this violate?",
      "A help desk technician receives full domain administrator rights, but the job requires only the ability to reset passwords. Which security principle is being violated?",
      "A security architect requires that each service account receive only the specific permissions it needs to do its task and nothing more. Which of the following principles is the architect applying?"
    ],
    correct: ["Least privilege"],
    wrong: ["Non-repudiation", "Implicit deny", "Defense in depth", "Availability"],
    explanation: "Least privilege means each user or process receives only the minimum access needed for its task. Permission creep from old roles and excess admin rights both violate it. Non-repudiation proves who performed an action, implicit deny blocks traffic that no rule allows, defense in depth layers controls, and availability is part of the CIA triad.",
    hint: "Only what you NEED for the job = LEAST PRIVILEGE.",
    refs: [
      { title: "NIST CSRC Glossary — least privilege", url: "https://csrc.nist.gov/glossary/term/least_privilege" },
      { title: "Professor Messer SY0-701 — Access Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/access-controls-sy0-701/" }
    ]
  },
  {
    id: "d4-068",
    domain: 4,
    objective: "4.6",
    topic: "Identity proofing",
    type: "single",
    stems: [
      "Before it issues credentials to a new remote employee, an organization checks a government-issued photo ID and compares it with the HR record. Which of the following is the organization performing?",
      "A bank's online account-opening process asks applicants to upload a driver's license and a selfie so it can confirm that each person is who they claim to be. Which of the following does this describe?",
      "Which of the following is the process of collecting and verifying evidence about a person to confirm their claimed identity before an account is created?"
    ],
    correct: ["Identity proofing"],
    wrong: ["Federation", "Single sign-on", "Account de-provisioning", "Authorization"],
    explanation: "Identity proofing collects and verifies evidence, such as government ID, a selfie, or an in-person check, to confirm that a person is who they claim to be before credentials are issued. Federation and SSO let an existing identity sign in to other systems. De-provisioning removes access, and authorization decides what an authenticated user may do.",
    hint: "Prove you are REALLY you before we create the account = IDENTITY PROOFING.",
    refs: [
      { title: "NIST CSRC Glossary — identity proofing", url: "https://csrc.nist.gov/glossary/term/identity_proofing" },
      { title: "NIST SP 800-63A — Enrollment and Identity Proofing", url: "https://pages.nist.gov/800-63-3/sp800-63a.html" },
      { title: "Professor Messer SY0-701 — Identity and Access Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/identity-and-access-management-sy0-701/" }
    ]
  },

  // ---------------------------------------------------------------- 4.7
  {
    id: "d4-069",
    domain: 4,
    objective: "4.7",
    topic: "Automation use case: user provisioning",
    type: "single",
    stems: [
      "A company hires 200 seasonal workers each fall. The IT team uses a script that reads the HR system and creates accounts, groups, and mailboxes for each new hire. Which automation use case is this?",
      "When HR marks a new employee as active, an orchestration workflow automatically creates the user's directory account and assigns role-based groups. Which of the following use cases does this describe?",
      "An onboarding script makes sure that every new hire gets the correct accounts and file access on the first day without manual work by the help desk. Which automation use case is this?"
    ],
    correct: ["User provisioning"],
    wrong: ["Resource provisioning", "Ticket creation", "Escalation", "Continuous integration"],
    explanation: "User provisioning automation creates accounts, group memberships, and access for new users from an authoritative source such as HR, which saves time and applies roles consistently. Resource provisioning creates servers, cloud instances, or storage. Ticket creation and escalation route work to people, and continuous integration builds and tests code.",
    hint: "Automatically create USER accounts = USER provisioning.",
    refs: [
      { title: "Professor Messer SY0-701 — Scripting and Automation", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/scripting-and-automation-sy0-701/" },
      { title: "NIST CSRC Glossary — provisioning", url: "https://csrc.nist.gov/glossary/term/provisioning" }
    ]
  },
  {
    id: "d4-070",
    domain: 4,
    objective: "4.7",
    topic: "Automation use case: guard rails",
    type: "single",
    stems: [
      "A cloud team configures automation that blocks any deployment that would create a storage bucket with public access. Which of the following does this automation provide?",
      "A DevOps pipeline automatically stops a change if it would open SSH to the internet in a security group. Which automation concept is this an example of?",
      "A script checks each command that a technician enters and stops the command if it would delete more than one folder on a production server. Which of the following is this?"
    ],
    correct: ["Guard rails"],
    wrong: ["Technical debt", "Escalation", "Ticket creation", "User provisioning"],
    explanation: "Guard rails are automated checks that verify changes or input before they take effect and stop actions that would cause security problems or mistakes, such as public buckets or overly broad deletions. Technical debt is the future cost of shortcuts. Escalation and ticket creation route work to people, and user provisioning creates accounts.",
    hint: "Automation that STOPS you from doing something risky = GUARD RAILS.",
    refs: [
      { title: "Professor Messer SY0-701 — Scripting and Automation", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/scripting-and-automation-sy0-701/" }
    ]
  },
  {
    id: "d4-071",
    domain: 4,
    objective: "4.7",
    topic: "Benefits of automation",
    type: "multi",
    stems: [
      "A SOC manager is building a business case for security automation and orchestration. Which of the following benefits should the manager list?",
      "A CISO wants to justify scripts that automatically block malicious IP addresses and disable compromised accounts. Which of the following benefits does this automation provide?",
      "An IT director asks why the team should automate server builds and security checks instead of doing them by hand. Which of the following are valid benefits?"
    ],
    correct: ["Faster reaction time", "Consistent enforcement of baselines"],
    wrong: ["Added complexity in the environment", "Single point of failure", "More technical debt to manage", "Higher ongoing maintenance effort"],
    explanation: "Automation responds faster than a person, and it applies the same secure configuration every time, which enforces baselines and standard infrastructure. It also saves time and acts as a workforce multiplier. Added complexity, single points of failure, technical debt, and ongoing maintenance are costs and risks of automation, not benefits.",
    hint: "Benefits = speed + consistency. Downsides = complexity, SPOF, debt, upkeep.",
    refs: [
      { title: "Professor Messer SY0-701 — Scripting and Automation", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/scripting-and-automation-sy0-701/" },
      { title: "NIST CSRC Glossary — SOAR", url: "https://csrc.nist.gov/glossary/term/security_orchestration_automation_and_response" }
    ]
  },
  {
    id: "d4-072",
    domain: 4,
    objective: "4.7",
    topic: "Automation considerations",
    type: "multi",
    stems: [
      "An engineer proposes that one orchestration server run many custom scripts to make all firewall changes automatically. Which of the following concerns should the security team consider?",
      "Before approving a large automation project, a CIO asks for its possible downsides. Which of the following should the security architect list?",
      "A company plans to automate incident response with a complex chain of scripts that only one engineer understands. Which of the following risks should the company consider?"
    ],
    correct: ["Single point of failure", "Increased complexity"],
    wrong: ["Faster reaction time", "Workforce multiplier", "Standard infrastructure configurations", "Improved employee retention"],
    explanation: "Automation can become a single point of failure if one system or script controls many critical tasks, and complex scripts are harder to understand, test, and fix. Cost, technical debt, and ongoing supportability are related concerns. Faster reaction, a workforce multiplier effect, standard configurations, and better employee retention are benefits.",
    hint: "Downsides: complexity, cost, SPOF, technical debt, supportability.",
    refs: [
      { title: "Professor Messer SY0-701 — Scripting and Automation", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/scripting-and-automation-sy0-701/" }
    ]
  },

  // ---------------------------------------------------------------- 4.8
  {
    id: "d4-073",
    domain: 4,
    objective: "4.8",
    topic: "Incident response phases",
    type: "match",
    stems: [
      "An analyst is documenting the incident response process. Match each activity with the incident response phase in which it occurs.",
      "After a ransomware incident, the IR lead reviews the team's actions. Match each action with the correct phase of the incident response process."
    ],
    pairs: [
      { item: "Build a jump bag with forensic tools and spare drives", answer: "Preparation" },
      { item: "Write and distribute an up-to-date contact list for the IR team", answer: "Preparation" },
      { item: "Disconnect the infected host from the network", answer: "Containment" },
      { item: "Remove the malware and delete the attacker's backdoor account", answer: "Eradication" },
      { item: "Restore systems from clean backups and return them to production", answer: "Recovery" },
      { item: "Meet after the incident to decide what to improve", answer: "Lessons learned" }
    ],
    extraOptions: ["Detection", "Analysis"],
    explanation: "CompTIA's incident response order is preparation, detection, analysis, containment, eradication, recovery, and lessons learned. Jump bags and contact lists are prepared before an incident. Isolating a host limits spread (containment), removing malware and backdoors is eradication, restoring service is recovery, and the post-incident review is lessons learned.",
    hint: "P-D-A-C-E-R-L: Prepare, Detect, Analyze, Contain, Eradicate, Recover, Learn.",
    refs: [
      { title: "NIST SP 800-61 Rev. 2 — Computer Security Incident Handling Guide", url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final" },
      { title: "Professor Messer SY0-701 — Incident Response", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-response-sy0-701/" }
    ]
  },
  {
    id: "d4-074",
    domain: 4,
    objective: "4.8",
    topic: "IR preparation",
    type: "multi",
    stems: [
      "A company is building its incident response program before any incident has occurred. Which of the following activities belong to the preparation phase?",
      "An incident response manager is reviewing the tasks in the first phase of the incident response process. Which of the following should be done in this phase?",
      "A new CISO wants the organization to be ready before its first major security incident. Which of the following activities should the CISO prioritize?"
    ],
    correct: ["Create the incident response plan", "Train the incident response team"],
    wrong: ["Isolate infected hosts", "Remove malware from servers", "Restore data from backups", "Hold a lessons learned meeting"],
    explanation: "Preparation happens before an incident and includes writing the IR plan, training responders, setting up communication methods, and gathering tools. Isolating hosts is containment, removing malware is eradication, and restoring data is recovery. The lessons learned meeting comes at the end of an incident.",
    hint: "BEFORE anything happens = PREPARATION (plan, train, tools).",
    refs: [
      { title: "NIST SP 800-61 Rev. 2 — Computer Security Incident Handling Guide", url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final" },
      { title: "Professor Messer SY0-701 — Incident Response", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-response-sy0-701/" }
    ]
  },
  {
    id: "d4-075",
    domain: 4,
    objective: "4.8",
    topic: "IR containment",
    type: "single",
    stems: [
      "An analyst confirms that ransomware is encrypting files on a file server and is spreading to other hosts. Which of the following should the analyst do first?",
      "Responders have finished their analysis and confirmed that a compromised workstation is sending data to an attacker's server. Which of the following should the responders do next?",
      "A worm is moving from one workstation to the next across a branch office network. Which of the following actions should the incident response team take to limit the damage?"
    ],
    correct: ["Isolate the affected systems from the network"],
    wrong: ["Reimage the affected systems right away", "Restore all files from backup", "Hold a lessons learned meeting", "Update the incident response plan"],
    explanation: "After an incident is detected and analyzed, containment comes next, which limits the spread and damage, for example by isolating affected hosts. Reimaging is eradication or recovery and can destroy evidence if it is done before containment. Restoring from backup is recovery, and lessons learned and plan updates come at the end.",
    hint: "Stop the SPREAD first = CONTAINMENT (isolate).",
    refs: [
      { title: "NIST SP 800-61 Rev. 2 — Computer Security Incident Handling Guide", url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final" },
      { title: "Professor Messer SY0-701 — Incident Response", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-response-sy0-701/" }
    ]
  },
  {
    id: "d4-076",
    domain: 4,
    objective: "4.8",
    topic: "IR testing: tabletop exercise",
    type: "single",
    stems: [
      "The incident response team meets in a conference room and talks through how it would respond to a ransomware attack, without touching any systems. Which of the following is this?",
      "A CISO wants a low-cost exercise in which key managers discuss their roles and decisions in a hypothetical data breach. Which of the following should the CISO schedule?",
      "Which type of incident response test uses a facilitator who presents a scenario step by step while participants explain what they would do?"
    ],
    correct: ["Tabletop exercise"],
    wrong: ["Simulation", "Penetration test", "Full failover test", "Vulnerability scan"],
    explanation: "A tabletop exercise is a discussion-based test in which participants talk through their roles and responses to a scenario without changing any systems. A simulation runs a realistic test event, such as a phishing simulation, that people and tools must actually respond to. Penetration tests and failover tests act on real systems, and a vulnerability scan is not an IR exercise.",
    hint: "Talking around a TABLE, no systems touched = TABLETOP.",
    refs: [
      { title: "NIST CSRC Glossary — tabletop exercise", url: "https://csrc.nist.gov/glossary/term/tabletop_exercise" },
      { title: "NIST SP 800-84 — Guide to Test, Training, and Exercise Programs", url: "https://csrc.nist.gov/pubs/sp/800/84/final" },
      { title: "Professor Messer SY0-701 — Incident Planning", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-planning-sy0-701/" }
    ]
  },
  {
    id: "d4-077",
    domain: 4,
    objective: "4.8",
    topic: "Root cause analysis",
    type: "single",
    stems: [
      "After recovering from a breach, the team works to find the underlying reason that the attacker got in, so the same problem does not happen again. Which of the following is the team performing?",
      "An outage was caused by an expired certificate. Management asks the security team to find out why the expiration was not detected, not only to renew the certificate. Which of the following is management asking for?",
      "Which of the following identifies the fundamental cause of an incident so that corrective action prevents it from happening again?"
    ],
    correct: ["Root cause analysis"],
    wrong: ["Threat hunting", "Tabletop exercise", "Vulnerability scan", "E-discovery"],
    explanation: "Root cause analysis looks past the symptoms to find the underlying reason an incident happened, so the fix prevents it from happening again. Threat hunting searches for attackers who have not been detected. A tabletop exercise tests a plan, a vulnerability scan finds weaknesses, and e-discovery collects electronic data for legal matters.",
    hint: "WHY did it really happen? = ROOT CAUSE.",
    refs: [
      { title: "NIST CSRC Glossary — root cause analysis", url: "https://csrc.nist.gov/glossary/term/root_cause_analysis" },
      { title: "Professor Messer SY0-701 — Incident Planning", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-planning-sy0-701/" }
    ]
  },
  {
    id: "d4-078",
    domain: 4,
    objective: "4.8",
    topic: "Threat hunting",
    type: "single",
    stems: [
      "A security analyst searches SIEM data for signs of a known APT group's techniques, even though no alert has fired. Which of the following is the analyst doing?",
      "Based on new threat intelligence about a credential-theft technique, an analyst queries endpoint logs across the company to find evidence that attackers are already inside. Which of the following best describes this activity?",
      "Which of the following is a proactive search for attackers who have avoided existing security controls, based on a hypothesis rather than an alert?"
    ],
    correct: ["Threat hunting"],
    wrong: ["Root cause analysis", "Penetration testing", "Vulnerability scanning", "Alert tuning"],
    explanation: "Threat hunting is a proactive, hypothesis-driven search for attackers who are already present but have not triggered alerts, often guided by threat intelligence and frameworks such as MITRE ATT&CK. Root cause analysis happens after a known incident. Penetration testing simulates an attacker, vulnerability scanning finds flaws, and alert tuning adjusts detection rules.",
    hint: "No alert, go LOOKING for the attacker = THREAT HUNTING.",
    refs: [
      { title: "Professor Messer SY0-701 — Incident Planning", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-planning-sy0-701/" },
      { title: "MITRE ATT&CK", url: "https://attack.mitre.org/" }
    ]
  },
  {
    id: "d4-079",
    domain: 4,
    objective: "4.8",
    topic: "Digital forensics: legal hold",
    type: "single",
    stems: [
      "A company's legal department learns that the company will be sued over a product defect. It instructs IT to preserve all related emails and documents and to suspend normal deletion. Which of the following is this?",
      "A data retention policy deletes emails after one year, but a pending lawsuit requires the company to keep specific mailboxes. Which of the following should the legal team issue?",
      "Which of the following requires an organization to preserve relevant data, even if normal policy would delete it, because of expected litigation?"
    ],
    correct: ["Legal hold"],
    wrong: ["Chain of custody", "Data retention policy", "Non-disclosure agreement", "Certificate of destruction"],
    explanation: "A legal hold (litigation hold) tells the organization to preserve all data that is relevant to expected or pending legal action, and it overrides normal deletion schedules. Chain of custody documents who handled evidence. A retention policy sets normal storage periods, an NDA restricts disclosure, and a certificate of destruction proves data was destroyed.",
    hint: "Lawsuit coming? Don't delete anything = LEGAL HOLD.",
    refs: [
      { title: "Professor Messer SY0-701 — Digital Forensics", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/digital-forensics-sy0-701/" },
      { title: "NIST SP 800-86 — Integrating Forensic Techniques into Incident Response", url: "https://csrc.nist.gov/pubs/sp/800/86/final" }
    ]
  },
  {
    id: "d4-080",
    domain: 4,
    objective: "4.8",
    topic: "Digital forensics: chain of custody",
    type: "single",
    stems: [
      "An investigator seizes a laptop and records every person who handled it, when, and why, until it is presented in court. Which of the following is the investigator maintaining?",
      "A defense attorney argues that evidence is not admissible because there is no record of who had the hard drive for three days. Which of the following was not properly maintained?",
      "Which of the following documents the control, transfer, and handling of evidence from collection to presentation?"
    ],
    correct: ["Chain of custody"],
    wrong: ["Legal hold", "Order of volatility", "Data retention policy", "Right-to-audit clause"],
    explanation: "Chain of custody is the documented record of who collected, handled, transferred, and stored evidence, and when, which proves the evidence was not tampered with. A legal hold preserves data for litigation. Order of volatility guides the sequence of collection, and retention policies and right-to-audit clauses are not evidence-handling records.",
    hint: "Who had the evidence and when = CHAIN OF CUSTODY.",
    refs: [
      { title: "NIST CSRC Glossary — chain of custody", url: "https://csrc.nist.gov/glossary/term/chain_of_custody" },
      { title: "NIST SP 800-86 — Integrating Forensic Techniques into Incident Response", url: "https://csrc.nist.gov/pubs/sp/800/86/final" },
      { title: "Professor Messer SY0-701 — Digital Forensics", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/digital-forensics-sy0-701/" }
    ]
  },

  // ---------------------------------------------------------------- 4.9
  {
    id: "d4-081",
    domain: 4,
    objective: "4.9",
    topic: "Log sources for investigations",
    type: "match",
    stems: [
      "An incident responder must gather evidence from several sources. Match each finding with the data source where the responder would most likely find it.",
      "A SOC analyst is building an investigation checklist. Match each type of evidence with the data source that records it."
    ],
    pairs: [
      { item: "Hundreds of Event ID 4625 failed logon entries for one account", answer: "OS security log" },
      { item: "A DENY entry with source IP, destination port 3389, and rule number", answer: "Firewall log" },
      { item: "An alert that names a known exploit signature and shows the packet was dropped", answer: "IPS log" },
      { item: "HTTP 500 errors and a stack trace from the web application", answer: "Application log" },
      { item: "The full payload of a suspicious unencrypted HTTP session", answer: "Packet capture" },
      { item: "Sender, recipient, and timestamps of an email, without its body", answer: "Metadata" }
    ],
    extraOptions: ["Vulnerability scan", "Dashboard"],
    explanation: "Windows records failed logons as Event ID 4625 in the Security log. Firewalls log allow and deny decisions with rule numbers, and an IPS logs signature matches and blocked packets. Applications log their own errors, packet captures store full payloads, and metadata describes data, such as email headers, without the content.",
    hint: "Match the evidence to the device that would SEE it.",
    refs: [
      { title: "Professor Messer SY0-701 — Log Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/log-data-sy0-701/" },
      { title: "Microsoft Learn — Event 4625: An account failed to log on", url: "https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4625" },
      { title: "NIST SP 800-92 — Guide to Computer Security Log Management", url: "https://csrc.nist.gov/pubs/sp/800/92/final" }
    ]
  },
  {
    id: "d4-082",
    domain: 4,
    objective: "4.9",
    topic: "Packet captures",
    type: "single",
    stems: [
      "An analyst must find out exactly which file contents an attacker sent out over an unencrypted FTP session. Which data source will provide this information?",
      "A NetFlow record shows a large transfer from a server to an unknown host, but the investigator needs to see the actual data that was sent. Which of the following should the investigator review?",
      "Which data source lets an investigator reconstruct the full contents of a cleartext network conversation, including its payload?"
    ],
    correct: ["Packet capture"],
    wrong: ["NetFlow records", "Firewall logs", "Vulnerability scan results", "SNMP traps", "Dashboard summary"],
    explanation: "A packet capture (PCAP) records complete packets, including payloads, so investigators can reconstruct exactly what was sent in unencrypted sessions. NetFlow and firewall logs show who communicated, when, and how much, but not the content. Vulnerability scans, SNMP traps, and dashboards do not contain traffic payloads.",
    hint: "Need the actual CONTENT = PACKET CAPTURE.",
    refs: [
      { title: "NIST CSRC Glossary — packet capture", url: "https://csrc.nist.gov/glossary/term/packet_capture" },
      { title: "Professor Messer SY0-701 — Log Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/log-data-sy0-701/" }
    ]
  },
  {
    id: "d4-083",
    domain: 4,
    objective: "4.9",
    topic: "Investigating authentication logs",
    type: "single",
    stems: [
      "An analyst reviews these entries from /var/log/auth.log on a web server:\n\nMar 3 02:14:01 web01 sshd[2211]: Failed password for root from 203.0.113.45 port 51122 ssh2\nMar 3 02:14:02 web01 sshd[2213]: Failed password for root from 203.0.113.45 port 51130 ssh2\n[... 2,400 similar entries ...]\nMar 3 02:51:47 web01 sshd[4899]: Accepted password for root from 203.0.113.45 port 52011 ssh2\n\nWhich of the following most likely occurred?",
      "The Windows Security log on a file server shows 1,200 events with ID 4625 for the account svc_backup from 198.51.100.7 within ten minutes. The next event is ID 4624 for the same account from the same address. Which of the following most likely occurred?",
      "A VPN log shows thousands of failed logins for one user name from a single external IP address over 30 minutes, followed by a successful login from that same IP address. Which of the following most likely occurred?"
    ],
    correct: ["A brute-force attack succeeded"],
    wrong: ["A password-spraying attack succeeded", "A denial-of-service attack occurred", "An administrator logged in normally", "A SQL injection attack occurred"],
    explanation: "Many failed logins for one account from one source, followed by a success from the same source, show a brute-force attack that guessed the password. Password spraying tries a few common passwords against many different accounts. The logs show authentication attempts, not service disruption or injected database queries, and a normal login is not preceded by thousands of failures.",
    hint: "ONE account, MANY failures, then success = BRUTE FORCE. Many accounts, few tries = SPRAYING.",
    refs: [
      { title: "Microsoft Learn — Event 4625: An account failed to log on", url: "https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4625" },
      { title: "MITRE ATT&CK — T1110 Brute Force", url: "https://attack.mitre.org/techniques/T1110/" },
      { title: "Professor Messer SY0-701 — Log Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/log-data-sy0-701/" }
    ]
  },
  {
    id: "d4-084",
    domain: 4,
    objective: "4.9",
    topic: "Metadata",
    type: "single",
    stems: [
      "An investigator examines a leaked document and finds the author's name, the creation date, and the software used to create it, without reading the document text. Which data source is the investigator using?",
      "An email investigation focuses on the headers that show the sending server, timestamps, and the route the message took, rather than the message body. Which type of data is the analyst reviewing?",
      "A photo posted by an insider contains GPS coordinates and the camera model in its EXIF fields. Which of the following data sources gives the investigator this information?"
    ],
    correct: ["Metadata"],
    wrong: ["Packet capture", "Firewall log", "Vulnerability scan", "IPS log", "Dashboard"],
    explanation: "Metadata is data that describes other data, such as document authors and dates, email headers, and photo EXIF fields like GPS location. It can reveal origin and timing without the content. Packet captures, firewall logs, IPS logs, and vulnerability scans record network or host activity, and a dashboard summarizes data.",
    hint: "Data ABOUT the data (author, date, headers, GPS) = METADATA.",
    refs: [
      { title: "NIST CSRC Glossary — metadata", url: "https://csrc.nist.gov/glossary/term/metadata" },
      { title: "Professor Messer SY0-701 — Log Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/log-data-sy0-701/" }
    ]
  },
  {
    id: "d4-085",
    domain: 4,
    objective: "4.9",
    topic: "Network data sources",
    type: "multi",
    stems: [
      "Threat intelligence reports that 203.0.113.80 is a command-and-control server. An analyst must find every internal host that connected to this address in the last week. Which of the following data sources should the analyst review?",
      "An analyst wants to know which workstations sent traffic to a known malicious IP address and how much data they sent. Which of the following data sources would provide this information?",
      "During an investigation, a responder needs records of network connections between internal hosts and an attacker's external IP address. Which of the following data sources are most useful?"
    ],
    correct: ["Firewall logs", "NetFlow records"],
    wrong: ["Vulnerability scan report", "Asset inventory list", "Application error log", "Certificate revocation list"],
    explanation: "Firewall logs record connections that pass through the firewall, with source, destination, port, and often byte counts, and NetFlow records summarize every flow between hosts. Both show which internal hosts talked to an external address. Vulnerability scans, asset inventories, application error logs, and CRLs do not record network connections.",
    hint: "Who connected to that IP? = FIREWALL logs + NETFLOW.",
    refs: [
      { title: "Professor Messer SY0-701 — Log Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/log-data-sy0-701/" },
      { title: "RFC 3954 — Cisco Systems NetFlow Services Export Version 9", url: "https://www.rfc-editor.org/rfc/rfc3954" },
      { title: "NIST SP 800-92 — Guide to Computer Security Log Management", url: "https://csrc.nist.gov/pubs/sp/800/92/final" }
    ]
  },
  {
    id: "d4-086",
    domain: 4,
    objective: "4.5",
    topic: "Firewall ACL rules",
    type: "single",
    stems: [
      "Threat intelligence reports that the external host 203.0.113.45 is attacking the company. Which of the following inbound firewall rules will block all traffic from this host to the internal network?",
      "A security analyst must stop the known malicious IP address 203.0.113.45 from reaching any internal system. Which of the following ACL entries should the analyst add to the perimeter firewall?"
    ],
    correct: ["access-list inbound deny ip source 203.0.113.45/32 destination 0.0.0.0/0"],
    wrong: [
      "access-list inbound deny ip source 0.0.0.0/0 destination 203.0.113.45/32",
      "access-list inbound permit ip source 203.0.113.45/32 destination 0.0.0.0/0",
      "access-list inbound permit ip source 0.0.0.0/0 destination 203.0.113.45/32",
      "access-list outbound deny ip source 203.0.113.45/32 destination 0.0.0.0/0"
    ],
    explanation: "Traffic that comes from the attacker has the attacker's address as its source. The rule must deny inbound traffic with source 203.0.113.45/32 (that one host) and destination 0.0.0.0/0 (any address). A rule with the attacker as the destination matches traffic that goes to the attacker, a permit rule allows the traffic, and an outbound rule never sees packets that arrive from the internet.",
    hint: "Block traffic FROM the attacker: inbound + deny + attacker as SOURCE. /32 = one host, 0.0.0.0/0 = any.",
    refs: [
      { title: "NIST SP 800-41 Rev. 1: Guidelines on Firewalls and Firewall Policy", url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final" },
      { title: "Professor Messer SY0-701: Firewalls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/firewalls-sy0-701/" }
    ]
  },
  {
    id: "d4-087",
    domain: 4,
    objective: "4.8",
    topic: "Lessons learned",
    type: "single",
    stems: [
      "An incident response team has removed the malware, rebuilt the affected servers, and returned them to production. Which of the following should the team do next?",
      "Which of the following is the final phase of the incident response process?",
      "Two weeks after an incident is closed, the IR lead meets with IT, legal, and management to review what happened, what worked, and which procedures should change. Which of the following phases is this?"
    ],
    correct: ["Lessons learned"],
    wrong: ["Containment", "Eradication", "Detection", "Recovery", "Preparation"],
    explanation: "The SY0-701 incident response process is preparation, detection, analysis, containment, eradication, recovery, and lessons learned. Lessons learned is the final phase: the team reviews the incident and updates plans, controls, and training. Containment limits the spread, eradication removes the threat, and recovery returns systems to normal operation before the review.",
    hint: "After recovery comes the post-incident review = lessons learned (always last).",
    refs: [
      { title: "Professor Messer SY0-701: Incident Response", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-response-sy0-701/" },
      { title: "NIST SP 800-61 Rev. 2: Incident Handling Guide", url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final" }
    ]
  }
]);
