// Security+ SY0-701 key concepts, one entry per exam objective. Add or edit points freely.
// points: [term, short explanation]. refs: where to read more.
(function () {
  var MESSER = { title: "Professor Messer SY0-701 course", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/" };

  CONCEPTS.add([
    // ---------------- Domain 1: General Security Concepts ----------------
    {
      domain: 1, objective: "1.1", title: "Security controls",
      points: [
        ["Technical", "Enforced by technology: firewalls, encryption, ACLs, antivirus."],
        ["Managerial", "Administrative oversight: policies, risk assessments, security planning."],
        ["Operational", "Done by people: awareness training, guards, configuration reviews."],
        ["Physical", "Protect facilities: fences, locks, bollards, badge readers."],
        ["Preventive", "Stops an incident before it happens (door lock, firewall rule)."],
        ["Deterrent", "Discourages an attacker (warning sign, login banner, lighting)."],
        ["Detective", "Finds and records an incident (IDS, log review, motion sensor)."],
        ["Corrective", "Fixes things after an incident (restore from backup, reimage, patch)."],
        ["Compensating", "Alternative protection when the main control is not possible (isolate an unpatchable system)."],
        ["Directive", "Tells people what to do (policy that says to store files in an encrypted folder)."]
      ],
      refs: [{ title: "NIST SP 800-53 Rev. 5 (security controls)", url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" }, MESSER]
    },
    {
      domain: 1, objective: "1.2", title: "Fundamental security concepts",
      points: [
        ["CIA triad", "Confidentiality (only authorized people can read: encryption), Integrity (data is not changed: hashing, signatures), Availability (systems stay usable: redundancy, patching)."],
        ["Non-repudiation", "Proof of origin, so the sender cannot deny the action. Provided by digital signatures."],
        ["AAA", "Authentication (prove who you are), Authorization (what you may do), Accounting (record what you did)."],
        ["Authenticating systems", "Devices prove identity with certificates signed by a trusted CA."],
        ["Gap analysis", "Compare the current state with a target (framework or baseline) and list what is missing."],
        ["Zero trust", "Never trust, always verify. Network location gives no implicit trust; every request is checked."],
        ["Control plane", "Decides access: adaptive identity, threat scope reduction, policy-driven access control, Policy Engine (makes the decision), Policy Administrator (carries it out)."],
        ["Data plane", "Carries traffic: subject/system, Policy Enforcement Point (the gate that allows or blocks), implicit trust zones."],
        ["Physical security", "Bollards stop vehicles; an access control vestibule stops tailgating; also fencing, video, guards, badges, lighting, and sensors (infrared, pressure, microwave, ultrasonic)."],
        ["Deception", "Honeypot (fake system), honeynet (network of honeypots), honeyfile (fake file that alerts when opened), honeytoken (fake credential or data that alerts when used)."]
      ],
      refs: [{ title: "NIST SP 800-207 Zero Trust Architecture", url: "https://csrc.nist.gov/pubs/sp/800/207/final" }, { title: "NIST glossary: non-repudiation", url: "https://csrc.nist.gov/glossary/term/non_repudiation" }, MESSER]
    },
    {
      domain: 1, objective: "1.3", title: "Change management",
      points: [
        ["Business process", "Approval process, ownership, stakeholders, impact analysis, test results, maintenance window, standard operating procedure."],
        ["Backout plan", "Steps to return to the previous state if the change fails."],
        ["Technical implications", "Allow/deny lists, restricted activities, downtime, service or application restarts, legacy applications, dependencies."],
        ["Documentation", "Update diagrams, policies, and procedures after every change."],
        ["Version control", "Tracks every change (who, what, when) and lets you roll back."]
      ],
      refs: [{ title: "NIST SP 800-53 Rev. 5 (CM-3 configuration change control)", url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" }, MESSER]
    },
    {
      domain: 1, objective: "1.4", title: "Cryptographic solutions",
      points: [
        ["Symmetric", "One shared key. Fast, good for bulk data (AES). Problem: getting the key to the other side safely."],
        ["Asymmetric", "Public/private key pair (RSA, ECC). Encrypt with the recipient's public key; sign with your own private key."],
        ["Key exchange", "Diffie-Hellman (DH/ECDHE) lets two parties agree on a secret over an untrusted network. Ephemeral keys give forward secrecy."],
        ["Key length", "Longer keys resist brute force better (AES-256 > AES-128; RSA 2048+)."],
        ["Hashing", "One-way, fixed-length digest that proves integrity (SHA-256). MD5 and SHA-1 have known collisions."],
        ["Salting", "Random value added to each password before hashing. Defeats rainbow tables; same password gives different hashes."],
        ["Key stretching", "Hash many times to slow brute force (PBKDF2, bcrypt)."],
        ["Digital signature", "Hash signed with the sender's private key: integrity, authentication, non-repudiation."],
        ["Encryption levels", "Full-disk, partition, volume, file, database, record; transport encryption (TLS, IPsec, VPN)."],
        ["PKI", "A CA issues certificates that bind a public key to an identity. Root of trust, CSR (request that carries your public key), self-signed vs third-party, wildcard (*.example.com)."],
        ["Revocation", "CRL is a published list of revoked certificates; OCSP is a real-time status check."],
        ["Key escrow", "A trusted third party holds a copy of keys for recovery."],
        ["Crypto hardware", "TPM (chip on the motherboard that stores keys), HSM (dedicated enterprise key device), key management system, secure enclave (isolated processor area)."],
        ["Obfuscation", "Steganography (hide data inside another file), tokenization (swap data for a token; mapping kept in a vault), data masking (show only part, e.g. ****1234)."],
        ["Blockchain", "Distributed, append-only open public ledger; changes are easy to detect."]
      ],
      refs: [{ title: "NIST Cryptographic Standards and Guidelines", url: "https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines" }, { title: "RFC 5280 X.509 certificates and CRLs", url: "https://www.rfc-editor.org/rfc/rfc5280" }, { title: "OWASP Password Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" }]
    },

    // ---------------- Domain 2: Threats, Vulnerabilities, and Mitigations ----------------
    {
      domain: 2, objective: "2.1", title: "Threat actors and motivations",
      points: [
        ["Nation-state", "Government-backed. Most resources and sophistication (APTs). Espionage, war."],
        ["Unskilled attacker", "Runs tools and scripts made by others. Low sophistication."],
        ["Hacktivist", "Political or philosophical goals: defacement, DDoS, leaks."],
        ["Insider threat", "Employee or contractor who already has access. Revenge or money."],
        ["Organized crime", "Profit-driven and well funded: ransomware, fraud."],
        ["Shadow IT", "Staff use IT that is not approved. Usually not malicious, but adds risk."],
        ["Attributes", "Internal vs external, resources/funding, level of sophistication."],
        ["Motivations", "Data exfiltration, espionage, service disruption, blackmail, financial gain, beliefs, ethical, revenge, chaos, war."]
      ],
      refs: [{ title: "CISA: Nation-state cyber actors", url: "https://www.cisa.gov/topics/cyber-threats-and-advisories/nation-state-cyber-actors" }, MESSER]
    },
    {
      domain: 2, objective: "2.2", title: "Threat vectors and attack surfaces",
      points: [
        ["Message-based", "Email (phishing), SMS (smishing), instant messaging."],
        ["Image- and file-based", "Malicious code hidden in images, documents, PDFs, or macros."],
        ["Voice call", "Vishing: phone-based social engineering."],
        ["Removable device", "Infected USB drives left for victims to find and plug in."],
        ["Vulnerable software", "Client-based (installed agent) vs agentless; unsupported systems get no patches."],
        ["Unsecure networks", "Open or weak Wi-Fi, wired ports without NAC, Bluetooth."],
        ["Open ports & default credentials", "Every listening service and unchanged default password is an entry point."],
        ["Supply chain", "Attack through MSPs, vendors, or suppliers you trust."],
        ["Social engineering", "Phishing, vishing, smishing, misinformation/disinformation, impersonation, pretexting (made-up story)."],
        ["BEC", "Business email compromise: a real or spoofed executive mailbox asks for payments or data."],
        ["Watering hole", "Infect a website the target group often visits."],
        ["Typosquatting", "Register a misspelled domain (examplle.com) to catch typing errors; brand impersonation copies a company's look."]
      ],
      refs: [{ title: "CISA: Phishing guidance", url: "https://www.cisa.gov/resources-tools/resources/phishing-guidance-stopping-attack-cycle-phase-one" }, { title: "MITRE ATT&CK T1566 Phishing", url: "https://attack.mitre.org/techniques/T1566/" }, MESSER]
    },
    {
      domain: 2, objective: "2.3", title: "Types of vulnerabilities",
      points: [
        ["Buffer overflow", "Data written past a buffer's end overwrites memory and can run attacker code."],
        ["Memory injection", "Malicious code is placed into the memory of a running process."],
        ["Race condition", "TOC/TOU: the state changes between the check and the use."],
        ["Malicious update", "A trusted update channel delivers malware."],
        ["SQL injection", "Unsanitized input changes a database query. Fix: parameterized queries."],
        ["Cross-site scripting", "Injected script runs in other users' browsers. Fix: output encoding, input validation."],
        ["Hardware", "Firmware flaws, end-of-life and legacy devices that get no updates."],
        ["Virtualization", "VM escape (break out to the hypervisor or other VMs); resource reuse (memory/disk not cleared)."],
        ["Cloud & misconfiguration", "Public storage buckets, open permissions, default settings."],
        ["Cryptographic", "Weak or old algorithms, poor key management."],
        ["Mobile", "Side loading (apps from outside the store), jailbreaking/rooting."],
        ["Zero-day", "Unknown to the vendor, so no patch exists yet."]
      ],
      refs: [{ title: "OWASP SQL Injection", url: "https://owasp.org/www-community/attacks/SQL_Injection" }, { title: "OWASP Cross-Site Scripting", url: "https://owasp.org/www-community/attacks/xss/" }, MESSER]
    },
    {
      domain: 2, objective: "2.4", title: "Indicators of malicious activity",
      points: [
        ["Ransomware", "Encrypts data and demands payment."],
        ["Trojan / worm / virus", "Trojan looks legitimate; worm spreads by itself over the network; virus needs a user action or host file."],
        ["Other malware", "Spyware, bloatware (unwanted preinstalled apps), keylogger, logic bomb (runs on a trigger or date), rootkit (hides deep in the OS)."],
        ["Physical attacks", "Brute force on doors/locks, RFID badge cloning, environmental (power, HVAC)."],
        ["DDoS", "Overwhelm a target. Amplified/reflected: small spoofed requests make large replies hit the victim."],
        ["Network attacks", "DNS poisoning, wireless (deauthentication, evil twin, rogue AP), on-path (intercept between two parties), credential replay."],
        ["Application attacks", "Injection, buffer overflow, replay, privilege escalation, forgery (CSRF, SSRF), directory traversal (../)."],
        ["Cryptographic attacks", "Downgrade (force a weaker protocol), collision and birthday (two inputs with the same hash)."],
        ["Password attacks", "Spraying: few common passwords across many accounts. Brute force: many passwords against one account."],
        ["Indicators", "Account lockout, concurrent sessions, blocked content, impossible travel, resource consumption or inaccessibility, out-of-cycle logging, missing logs, published/documented compromise."]
      ],
      refs: [{ title: "MITRE ATT&CK T1110 Brute Force", url: "https://attack.mitre.org/techniques/T1110/" }, { title: "CISA #StopRansomware", url: "https://www.cisa.gov/stopransomware" }, MESSER]
    },
    {
      domain: 2, objective: "2.5", title: "Mitigation techniques",
      points: [
        ["Segmentation & isolation", "Split networks to contain spread; isolate infected or risky systems."],
        ["Access control", "ACLs, permissions, least privilege."],
        ["Application allow list", "Only approved software can run."],
        ["Patching & encryption", "Close known flaws; protect data at rest and in transit."],
        ["Monitoring & configuration enforcement", "Watch for anomalies; keep systems at the secure baseline."],
        ["Decommissioning", "Remove unused systems and wipe their data."],
        ["Hardening", "Endpoint protection, host-based firewall, HIPS, disable unused ports and protocols, change default passwords, remove unneeded software."]
      ],
      refs: [{ title: "CIS Critical Security Controls", url: "https://www.cisecurity.org/controls" }, { title: "NIST SP 800-123 Server security", url: "https://csrc.nist.gov/pubs/sp/800/123/final" }, MESSER]
    },

    // ---------------- Domain 3: Security Architecture ----------------
    {
      domain: 3, objective: "3.1", title: "Architecture models",
      points: [
        ["Shared responsibility", "IaaS: you manage OS, apps, data. PaaS: you manage apps and data. SaaS: you manage data and user access. You always own your data."],
        ["Hybrid & third parties", "Mixed environments make consistent policy and visibility harder."],
        ["IaC", "Infrastructure defined in code: repeatable and version-controlled, but one mistake is copied everywhere."],
        ["Serverless", "Provider runs your functions; no servers to patch. Focus moves to code and permissions."],
        ["Microservices", "App split into small API services: scales and fails independently, more APIs to secure."],
        ["Network infrastructure", "Physical isolation (air gap), logical segmentation (VLANs), SDN (control plane separated from data plane, centrally programmed)."],
        ["Containers vs VMs", "Containers share the host OS kernel (lightweight). VMs run on a hypervisor with their own OS."],
        ["IoT, ICS/SCADA, RTOS, embedded", "Specialized, often hard or impossible to patch. Segment them. ICS puts availability first."],
        ["Considerations", "Availability, resilience, cost, responsiveness, scalability, ease of deployment and recovery, risk transference, patch availability, power, compute."]
      ],
      refs: [{ title: "NIST SP 800-145 Definition of Cloud Computing", url: "https://csrc.nist.gov/pubs/sp/800/145/final" }, { title: "NIST SP 800-190 Container Security", url: "https://csrc.nist.gov/pubs/sp/800/190/final" }, { title: "NIST SP 800-82 Rev. 3 OT Security", url: "https://csrc.nist.gov/pubs/sp/800/82/r3/final" }]
    },
    {
      domain: 3, objective: "3.2", title: "Secure enterprise infrastructure",
      points: [
        ["Zones & placement", "Trusted, untrusted, screened subnet (DMZ) for public-facing servers. Reduce the attack surface."],
        ["Failure modes", "Fail-open keeps traffic flowing (availability). Fail-closed blocks traffic (security)."],
        ["Active vs passive", "IPS is active and inline (can block). IDS is passive on a tap/SPAN (alerts only)."],
        ["Jump server", "Hardened host used to administer systems in a secure zone."],
        ["Proxy", "Forward proxy: users to the internet (filter, cache). Reverse proxy: internet to your servers."],
        ["Load balancer", "Spreads traffic across servers (active/active or active/passive)."],
        ["802.1X / EAP", "Port-based network access control: supplicant, authenticator (switch/AP), authentication server (usually RADIUS)."],
        ["Firewalls", "Layer 4 (ports/protocols) vs layer 7 (application). NGFW is application-aware; UTM is all-in-one; WAF protects web apps (SQLi, XSS)."],
        ["IPsec", "AH gives integrity and authentication; ESP adds encryption. Tunnel mode encrypts the whole packet; transport mode only the payload."],
        ["Secure access", "VPN, TLS, tunneling, SD-WAN (centrally managed WAN over many links), SASE (cloud-delivered networking + security)."]
      ],
      refs: [{ title: "NIST SP 800-41 Rev. 1 Firewalls", url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final" }, { title: "NIST SP 800-77 Rev. 1 IPsec VPNs", url: "https://csrc.nist.gov/pubs/sp/800/77/r1/final" }, { title: "NIST SP 800-215 Secure enterprise network", url: "https://csrc.nist.gov/pubs/sp/800/215/final" }]
    },
    {
      domain: 3, objective: "3.3", title: "Protecting data",
      points: [
        ["Data types", "Regulated, trade secret, intellectual property, legal, financial; human-readable vs non-human-readable."],
        ["Classifications", "Public, private, sensitive, confidential, restricted, critical."],
        ["At rest", "Stored data: full-disk, file, or database encryption."],
        ["In transit", "Moving data: TLS, IPsec, VPN."],
        ["In use", "Data in memory or CPU: secure enclaves, access controls."],
        ["Data sovereignty", "Data is subject to the laws of the country where it is stored."],
        ["Methods", "Geographic restrictions, encryption, hashing, masking, tokenization, obfuscation, segmentation, permission restrictions."]
      ],
      refs: [{ title: "NIST SP 800-111 Storage encryption", url: "https://csrc.nist.gov/pubs/sp/800/111/final" }, { title: "FIPS 199 Security categorization", url: "https://csrc.nist.gov/pubs/fips/199/final" }, MESSER]
    },
    {
      domain: 3, objective: "3.4", title: "Resilience and recovery",
      points: [
        ["Load balancing vs clustering", "Load balancing spreads work across active nodes; a cluster acts as one system and fails over."],
        ["Recovery sites", "Hot: ready now, most expensive. Warm: hardware ready, needs data and setup. Cold: space and power only."],
        ["Geographic dispersion", "Keep sites far apart so one disaster does not hit both."],
        ["Platform diversity & multi-cloud", "Different vendors and providers avoid a single shared flaw or outage."],
        ["COOP", "Continuity of operations: keep essential functions running, even with manual processes."],
        ["Capacity planning", "Enough people, technology, and infrastructure for demand."],
        ["Testing", "Tabletop (discussion walk-through), failover, simulation, parallel processing."],
        ["Backups", "Onsite/offsite, frequency, encryption, snapshots (point-in-time copy), replication (near real-time copy), journaling (change log for recovery). Test restores."],
        ["Power", "UPS: short-term battery for clean shutdown or until the generator starts. Generator: long-term power."]
      ],
      refs: [{ title: "NIST SP 800-34 Rev. 1 Contingency Planning", url: "https://csrc.nist.gov/pubs/sp/800/34/r1/final" }, { title: "Ready.gov continuity planning", url: "https://www.ready.gov/business/emergency-plans/continuity-planning" }, MESSER]
    },

    // ---------------- Domain 4: Security Operations ----------------
    {
      domain: 4, objective: "4.1", title: "Securing computing resources",
      points: [
        ["Secure baselines", "Establish, deploy (GPO, MDM, IaC), and maintain (check for drift)."],
        ["Hardening targets", "Mobile, workstations, switches, routers, cloud, servers, ICS/SCADA, embedded, RTOS, IoT."],
        ["Wireless installation", "Site surveys and heat maps (signal-strength maps) guide access point placement."],
        ["Mobile deployment", "BYOD (employee-owned), COPE (company-owned, personal use allowed), CYOD (employee picks from an approved list). MDM enforces policy and remote wipe."],
        ["Wireless security", "WPA3-Personal replaces WPA2's PSK handshake with SAE, which resists offline dictionary attacks. WPA3-Enterprise uses 802.1X with RADIUS (AAA)."],
        ["Application security", "Input validation, secure cookies (Secure, HttpOnly), static code analysis, code signing (proves publisher and integrity)."],
        ["Sandboxing", "Run untrusted code in an isolated environment."]
      ],
      refs: [{ title: "CIS Benchmarks", url: "https://www.cisecurity.org/cis-benchmarks" }, { title: "NIST SP 800-124 Rev. 2 Mobile devices", url: "https://csrc.nist.gov/pubs/sp/800/124/r2/final" }, { title: "Wi-Fi Alliance: Security", url: "https://www.wi-fi.org/discover-wi-fi/security" }]
    },
    {
      domain: 4, objective: "4.2", title: "Asset management",
      points: [
        ["Acquisition", "Buy from approved vendors through a defined procurement process."],
        ["Assignment & accounting", "Every asset has an owner and a data classification."],
        ["Tracking", "Inventory and enumeration: know what you have and where it is."],
        ["Sanitization", "Wipe or overwrite media (or crypto-erase) so it can be reused."],
        ["Destruction", "Shred, pulverize, incinerate, or degauss magnetic media. Get a certificate of destruction."],
        ["Data retention", "Keep data only as long as policy or law requires."]
      ],
      refs: [{ title: "NIST SP 800-88 Media Sanitization", url: "https://csrc.nist.gov/pubs/sp/800/88/r1/final" }, MESSER]
    },
    {
      domain: 4, objective: "4.3", title: "Vulnerability management",
      points: [
        ["Identification", "Vulnerability scans, static analysis (code), dynamic analysis (running app), package monitoring (dependencies), penetration tests, audits."],
        ["Threat feeds", "OSINT, proprietary/third-party, information-sharing organizations (ISACs), dark web."],
        ["Disclosure", "Responsible disclosure programs and bug bounties reward outside researchers."],
        ["False positive / negative", "False positive: reported but not real. False negative: real but missed (more dangerous)."],
        ["CVE & CVSS", "CVE is the unique ID for a vulnerability. CVSS scores severity from 0 to 10."],
        ["Prioritize", "Consider exposure factor, environmental variables, industry/organizational impact, risk tolerance."],
        ["Response", "Patch, buy insurance, segment, add compensating controls, or grant an exception/exemption."],
        ["Validation", "Rescan, audit, verify, and report."]
      ],
      refs: [{ title: "FIRST CVSS", url: "https://www.first.org/cvss/" }, { title: "CVE program", url: "https://www.cve.org/" }, { title: "NIST SP 800-40 Rev. 4 Patch management", url: "https://csrc.nist.gov/pubs/sp/800/40/r4/final" }]
    },
    {
      domain: 4, objective: "4.4", title: "Alerting and monitoring",
      points: [
        ["Activities", "Log aggregation, alerting, scanning, reporting, archiving, quarantine, alert tuning (cut false positives)."],
        ["SIEM", "Collects and correlates logs from many sources and raises alerts."],
        ["SCAP & benchmarks", "SCAP gives standard formats for automated configuration and vulnerability checks; CIS benchmarks define secure settings."],
        ["Agent vs agentless", "Agents run on the host for deep data; agentless collects remotely."],
        ["SNMP traps", "A device sends an alert to the management station without being polled."],
        ["NetFlow", "Traffic metadata: who talked to whom, when, and how much (not full content)."],
        ["Other tools", "Antivirus, DLP, vulnerability scanners."]
      ],
      refs: [{ title: "NIST SCAP", url: "https://csrc.nist.gov/projects/security-content-automation-protocol" }, { title: "NIST SP 800-92 Log management", url: "https://csrc.nist.gov/pubs/sp/800/92/final" }, MESSER]
    },
    {
      domain: 4, objective: "4.5", title: "Enhancing enterprise security",
      points: [
        ["Firewall rules", "Checked top-down, first match wins, implicit deny at the end."],
        ["IDS/IPS", "Signature-based (known patterns) vs trend/anomaly-based (deviation from normal)."],
        ["Web filter", "Agent-based or central proxy: URL scanning, content categories, block rules, reputation."],
        ["OS security", "Group Policy (central Windows settings), SELinux (mandatory access control on Linux)."],
        ["Secure protocols", "Replace Telnet 23 with SSH 22, HTTP 80 with HTTPS 443, FTP 21 with SFTP 22, LDAP 389 with LDAPS 636, SNMPv1/v2 with SNMPv3."],
        ["DNS filtering", "Block known-bad domains when they are resolved."],
        ["Email security", "SPF lists allowed sending servers; DKIM signs messages; DMARC sets the policy and reporting on top of both; gateway filters mail."],
        ["FIM", "File integrity monitoring alerts when critical files change."],
        ["DLP", "Detects and blocks sensitive data leaving the organization."],
        ["NAC", "Checks device identity and health before network access."],
        ["EDR / XDR", "EDR detects and responds on endpoints; XDR correlates endpoint, network, and cloud data."],
        ["UBA", "User behavior analytics: baseline normal activity, alert on anomalies."]
      ],
      refs: [{ title: "RFC 7208 SPF", url: "https://www.rfc-editor.org/rfc/rfc7208" }, { title: "RFC 6376 DKIM", url: "https://www.rfc-editor.org/rfc/rfc6376" }, { title: "RFC 7489 DMARC", url: "https://www.rfc-editor.org/rfc/rfc7489" }, { title: "NIST SP 800-94 IDPS", url: "https://csrc.nist.gov/pubs/sp/800/94/final" }]
    },
    {
      domain: 4, objective: "4.6", title: "Identity and access management",
      points: [
        ["Lifecycle", "Provision and de-provision accounts promptly; review permissions to stop privilege creep."],
        ["Identity proofing", "Verify a person is who they claim before issuing credentials."],
        ["Federation & SSO", "One identity trusted across organizations or apps. SAML (XML assertions from IdP to service provider), OAuth (delegated authorization with tokens), OIDC (authentication on top of OAuth), LDAP (directory)."],
        ["MAC", "Mandatory: labels and clearances set by the administrator."],
        ["DAC", "Discretionary: the owner decides who gets access."],
        ["RBAC", "Role-based: access by job role or group."],
        ["Rule-based", "System-wide rules, e.g. firewall rules or time-of-day limits."],
        ["ABAC", "Attribute-based: user, resource, and environment attributes decide."],
        ["MFA factors", "Something you know (PIN), have (token, phone), are (biometric), somewhere you are (location). Two of the same factor is not MFA."],
        ["Tokens & keys", "Hard tokens (physical), soft tokens (app), security keys (FIDO2). Passwordless removes the password."],
        ["Passwords", "Length matters most; no reuse; use a password manager."],
        ["PAM", "Privileged access management: just-in-time permissions, password vaulting, ephemeral credentials."]
      ],
      refs: [{ title: "NIST SP 800-63B Authentication", url: "https://pages.nist.gov/800-63-3/sp800-63b.html" }, { title: "NIST SP 800-162 ABAC", url: "https://csrc.nist.gov/pubs/sp/800/162/upd2/final" }, { title: "SAML 2.0 technical overview", url: "https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html" }, { title: "RFC 6749 OAuth 2.0", url: "https://www.rfc-editor.org/rfc/rfc6749" }]
    },
    {
      domain: 4, objective: "4.7", title: "Automation and orchestration",
      points: [
        ["Use cases", "User and resource provisioning, guard rails, security groups, ticket creation, escalation, enabling/disabling services and access, CI/testing, APIs."],
        ["Benefits", "Saves time, enforces baselines, standard configurations, scales securely, faster reaction, workforce multiplier, better employee retention."],
        ["Considerations", "Complexity, cost, single point of failure, technical debt, ongoing supportability."]
      ],
      refs: [MESSER]
    },
    {
      domain: 4, objective: "4.8", title: "Incident response",
      points: [
        ["Process", "Preparation → Detection → Analysis → Containment → Eradication → Recovery → Lessons learned."],
        ["Training & testing", "Tabletop exercises (discussion) and simulations (hands-on)."],
        ["Root cause analysis", "Find why it happened so it does not happen again."],
        ["Threat hunting", "Proactively search for threats that evaded detection."],
        ["Legal hold", "Preserve relevant data for possible litigation."],
        ["Chain of custody", "Document every person who handled evidence and when."],
        ["Acquisition", "Collect by order of volatility: CPU registers/cache, memory, temporary files, disk, remote logs, archives."],
        ["Preservation & e-discovery", "Hash and write-protect evidence; e-discovery collects data for legal requests."]
      ],
      refs: [{ title: "NIST SP 800-61 Rev. 2 Incident Handling", url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final" }, { title: "NIST SP 800-86 Forensics in IR", url: "https://csrc.nist.gov/pubs/sp/800/86/final" }, { title: "RFC 3227 Evidence collection", url: "https://www.rfc-editor.org/rfc/rfc3227" }]
    },
    {
      domain: 4, objective: "4.9", title: "Data sources for investigations",
      points: [
        ["Log data", "Firewall, application, endpoint, OS security logs, IPS/IDS, network logs."],
        ["Metadata", "Data about data: email headers, file timestamps, image location tags."],
        ["Other sources", "Vulnerability scans, automated reports, dashboards."],
        ["Packet captures", "Full packet content: the most detail, the most storage."]
      ],
      refs: [{ title: "NIST SP 800-92 Log management", url: "https://csrc.nist.gov/pubs/sp/800/92/final" }, MESSER]
    },

    // ---------------- Domain 5: Security Program Management and Oversight ----------------
    {
      domain: 5, objective: "5.1", title: "Security governance",
      points: [
        ["Policies", "High-level, mandatory statements of intent: AUP, information security, BC, DR, IR, SDLC, change management."],
        ["Standards", "Specific mandatory requirements: password, access control, physical security, encryption."],
        ["Procedures", "Step-by-step instructions: change management, onboarding/offboarding, playbooks."],
        ["Guidelines", "Recommendations; not mandatory."],
        ["External considerations", "Regulatory, legal, industry, local/regional, national, global."],
        ["Structures", "Boards, committees, government entities; centralized vs decentralized."],
        ["Data roles", "Owner (accountable, sets classification), controller (decides why and how personal data is processed), processor (processes it for the controller), custodian/steward (day-to-day care)."]
      ],
      refs: [{ title: "NIST SP 800-100 Information security handbook", url: "https://csrc.nist.gov/pubs/sp/800/100/upd1/final" }, { title: "GDPR Article 4 definitions", url: "https://gdpr-info.eu/" }, MESSER]
    },
    {
      domain: 5, objective: "5.2", title: "Risk management",
      points: [
        ["Assessments", "Ad hoc, recurring, one-time, continuous."],
        ["Qualitative vs quantitative", "Qualitative ranks risk (high/medium/low). Quantitative uses money values."],
        ["Formulas", "SLE = AV × EF. ARO = expected events per year. ALE = SLE × ARO."],
        ["Risk register", "Lists risks with owners, key risk indicators, and thresholds."],
        ["Appetite vs tolerance", "Appetite: how much risk you will take (expansionary, conservative, neutral). Tolerance: acceptable variation."],
        ["Strategies", "Transfer (insurance), accept (exemption, exception), avoid (stop the activity), mitigate (add controls)."],
        ["BIA", "RTO: max time to restore. RPO: max data loss measured in time. MTTR: mean time to repair. MTBF: mean time between failures."]
      ],
      refs: [{ title: "NIST SP 800-30 Rev. 1 Risk assessments", url: "https://csrc.nist.gov/pubs/sp/800/30/r1/final" }, { title: "NIST SP 800-39 Managing information security risk", url: "https://csrc.nist.gov/pubs/sp/800/39/final" }, MESSER]
    },
    {
      domain: 5, objective: "5.3", title: "Third-party risk",
      points: [
        ["Vendor assessment", "Penetration testing, right-to-audit clause, evidence of internal audits, independent assessments, supply chain analysis."],
        ["Vendor selection", "Due diligence; check for conflicts of interest."],
        ["SLA", "Measurable service levels (uptime, response time) and penalties."],
        ["MOU / MOA", "MOU: less formal statement of shared intent. MOA: more formal, defines specific responsibilities."],
        ["MSA / SOW", "MSA: umbrella terms for future work. SOW/WO: specific deliverables and timeline."],
        ["NDA / BPA", "NDA: keep information confidential. BPA: business partnership terms (ownership, profit sharing)."],
        ["Monitoring", "Ongoing vendor monitoring, questionnaires, rules of engagement."]
      ],
      refs: [{ title: "NIST SP 800-161 Rev. 1 Supply chain risk", url: "https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final" }, MESSER]
    },
    {
      domain: 5, objective: "5.4", title: "Security compliance",
      points: [
        ["Reporting", "Internal and external compliance reports."],
        ["Consequences", "Fines, sanctions, reputational damage, loss of license, contractual impacts."],
        ["Monitoring", "Due diligence and due care, attestation and acknowledgement, internal and external reviews, automation."],
        ["Privacy roles", "Data subject (the person the data is about), controller, processor, owner."],
        ["Privacy duties", "Data inventory and retention; right to be forgotten (erasure, GDPR Art. 17)."]
      ],
      refs: [{ title: "GDPR Art. 17 Right to erasure", url: "https://gdpr-info.eu/art-17-gdpr/" }, { title: "PCI Security Standards Council", url: "https://www.pcisecuritystandards.org/" }, MESSER]
    },
    {
      domain: 5, objective: "5.5", title: "Audits and assessments",
      points: [
        ["Attestation", "An auditor's formal statement about controls (e.g. SOC 2)."],
        ["Internal", "Compliance checks, audit committee, self-assessments."],
        ["External", "Regulatory audits, examinations, assessments, independent third-party audits."],
        ["Pen test teams", "Offensive (red), defensive (blue), integrated (purple); physical tests too."],
        ["Pen test environments", "Known (full information), partially known (some information), unknown (no information)."],
        ["Reconnaissance", "Passive: OSINT, no direct contact. Active: scans and probes that touch the target."]
      ],
      refs: [{ title: "NIST SP 800-115 Security testing", url: "https://csrc.nist.gov/pubs/sp/800/115/final" }, { title: "AICPA SOC 2", url: "https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2" }, MESSER]
    },
    {
      domain: 5, objective: "5.6", title: "Security awareness",
      points: [
        ["Phishing campaigns", "Simulated phishing teaches users to recognize and report suspicious messages."],
        ["Anomalous behavior", "Recognize risky, unexpected, and unintentional behavior."],
        ["Training topics", "Policies/handbooks, situational awareness, insider threat, password management, removable media and cables, social engineering, OPSEC, hybrid/remote work."],
        ["Reporting & monitoring", "Initial and recurring; measure results."],
        ["Program", "Develop the content, then execute and improve it."]
      ],
      refs: [{ title: "NIST SP 800-50 Rev. 1 Security awareness programs", url: "https://csrc.nist.gov/pubs/sp/800/50/r1/final" }, MESSER]
    }
  ]);
})();
