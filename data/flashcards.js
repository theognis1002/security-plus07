// Security+ SY0-701 flashcards. Add new cards at the end.
// group: cards in the same group are the same kind of thing; the app uses them as wrong answers for each other.
FCBANK.add([
  {
    term: "Technical control",
    def: "Safeguard enforced by hardware, software, or firmware, such as firewalls, encryption, and access control lists; also called a logical control.",
    domain: 1,
    group: "Control categories",
    ref: { title: "NIST CSRC Glossary: technical controls", url: "https://csrc.nist.gov/glossary/term/technical_controls" }
  },
  {
    term: "Managerial control",
    def: "Administrative safeguard focused on governance and risk decisions, such as security policies, risk assessments, and security planning.",
    domain: 1,
    group: "Control categories",
    ref: { title: "NIST CSRC Glossary: management controls", url: "https://csrc.nist.gov/glossary/term/management_controls" }
  },
  {
    term: "Operational control",
    def: "Safeguard carried out mainly by people rather than systems, such as security guards, awareness training, and configuration management procedures.",
    domain: 1,
    group: "Control categories",
    ref: { title: "NIST CSRC Glossary: operational controls", url: "https://csrc.nist.gov/glossary/term/operational_controls" }
  },
  {
    term: "Physical control",
    def: "Tangible safeguard that restricts or monitors physical access to facilities and equipment, such as fences, door locks, bollards, and badge readers.",
    domain: 1,
    group: "Control categories",
    ref: { title: "NIST CSRC Glossary: physical access control", url: "https://csrc.nist.gov/glossary/term/physical_access_control" }
  },
  {
    term: "Preventive control",
    def: "Control that blocks an incident from happening in the first place, such as a firewall rule, a door lock, or account permissions.",
    domain: 1,
    group: "Control types",
    ref: { title: "Professor Messer SY0-701: Security Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/" }
  },
  {
    term: "Deterrent control",
    def: "Control that discourages an attacker from trying, without directly stopping the attempt, such as warning signs, visible cameras, or a login banner.",
    domain: 1,
    group: "Control types",
    ref: { title: "Professor Messer SY0-701: Security Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/" }
  },
  {
    term: "Detective control",
    def: "Control that identifies and records an incident while or after it occurs, such as IDS alerts, log reviews, or motion sensors.",
    domain: 1,
    group: "Control types",
    ref: { title: "Professor Messer SY0-701: Security Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/" }
  },
  {
    term: "Corrective control",
    def: "Control that reduces damage and restores normal operation after an incident, such as restoring from backup or quarantining malware.",
    domain: 1,
    group: "Control types",
    ref: { title: "Professor Messer SY0-701: Security Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/" }
  },
  {
    term: "Compensating control",
    def: "Alternative safeguard used when the primary required control cannot be implemented, giving similar protection, for example isolating a system that cannot be patched.",
    domain: 1,
    group: "Control types",
    ref: { title: "NIST CSRC Glossary: compensating security control", url: "https://csrc.nist.gov/glossary/term/compensating_security_control" }
  },
  {
    term: "Directive control",
    def: "Control that tells people what they should or should not do, such as a policy, procedure, or posted instruction; it relies on compliance rather than enforcement.",
    domain: 1,
    group: "Control types",
    ref: { title: "Professor Messer SY0-701: Security Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/" }
  },
  {
    term: "Confidentiality",
    def: "Protection of information from disclosure to unauthorized people, processes, or devices; typically enforced with encryption and access controls.",
    domain: 1,
    group: "Security fundamentals",
    ref: { title: "NIST CSRC Glossary: confidentiality", url: "https://csrc.nist.gov/glossary/term/confidentiality" }
  },
  {
    term: "Integrity",
    def: "Assurance that data has not been altered or destroyed in an unauthorized way; typically verified with hashes and digital signatures.",
    domain: 1,
    group: "Security fundamentals",
    ref: { title: "NIST CSRC Glossary: integrity", url: "https://csrc.nist.gov/glossary/term/integrity" }
  },
  {
    term: "Availability",
    def: "Assurance of timely and reliable access to systems and data for authorized users; supported by redundancy, backups, and fault tolerance.",
    domain: 1,
    group: "Security fundamentals",
    ref: { title: "NIST CSRC Glossary: availability", url: "https://csrc.nist.gov/glossary/term/availability" }
  },
  {
    term: "Non-repudiation",
    def: "Assurance that the sender of information cannot later deny having sent or signed it; typically provided by digital signatures made with the sender's private key.",
    domain: 1,
    group: "Security fundamentals",
    ref: { title: "NIST CSRC Glossary: non repudiation", url: "https://csrc.nist.gov/glossary/term/non_repudiation" }
  },
  {
    term: "AAA",
    full: "Authentication, Authorization, and Accounting",
    def: "Framework that verifies identity, grants permissions, and records user activity; commonly delivered by RADIUS or TACACS+.",
    domain: 1,
    group: "Security fundamentals",
    ref: { title: "Professor Messer SY0-701: Authentication Authorization and Accounting", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/authentication-authorization-and-accounting-sy0-701/" }
  },
  {
    term: "Gap analysis",
    def: "Comparison of the current security state against a target framework or baseline to identify missing or weak controls and plan improvements.",
    domain: 1,
    group: "Security fundamentals",
    ref: { title: "NIST CSRC Glossary: gap analysis", url: "https://csrc.nist.gov/glossary/term/gap_analysis" }
  },
  {
    term: "Policy engine",
    def: "Zero trust component that makes the final grant, deny, or revoke decision for a subject's access to a resource, using enterprise policy and inputs such as threat intelligence.",
    domain: 1,
    group: "Zero trust components",
    ref: { title: "NIST CSRC Glossary: policy engine", url: "https://csrc.nist.gov/glossary/term/policy_engine" }
  },
  {
    term: "Policy administrator",
    def: "Zero trust component that carries out the access decision by setting up or shutting down the session path and sending tokens or credentials to the enforcement point.",
    domain: 1,
    group: "Zero trust components",
    ref: { title: "NIST CSRC Glossary: policy administrator", url: "https://csrc.nist.gov/glossary/term/policy_administrator" }
  },
  {
    term: "Policy enforcement point",
    def: "Zero trust component in the data path that enables, monitors, and terminates connections between a subject and an enterprise resource.",
    domain: 1,
    group: "Zero trust components",
    ref: { title: "NIST CSRC Glossary: policy enforcement point", url: "https://csrc.nist.gov/glossary/term/policy_enforcement_point" }
  },
  {
    term: "Adaptive identity",
    def: "Zero trust practice of adjusting authentication requirements to context such as location, device health, and behavior, instead of using one fixed check.",
    domain: 1,
    group: "Zero trust components",
    ref: { title: "Professor Messer SY0-701: Zero Trust", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/zero-trust-sy0-701/" }
  },
  {
    term: "Threat scope reduction",
    def: "Zero trust goal of shrinking the attack surface and limiting lateral movement, for example by giving users access only to the specific resources they need.",
    domain: 1,
    group: "Zero trust components",
    ref: { title: "Professor Messer SY0-701: Zero Trust", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/zero-trust-sy0-701/" }
  },
  {
    term: "Implicit trust zone",
    def: "Area behind the enforcement point where entities are trusted without further checks; zero trust tries to make it as small as possible.",
    domain: 1,
    group: "Zero trust components",
    ref: { title: "NIST SP 800-207: Zero Trust Architecture", url: "https://csrc.nist.gov/pubs/sp/800/207/final" }
  },
  {
    term: "Honeypot",
    def: "Decoy system set up to attract attackers so their tools and methods can be observed, while drawing them away from real assets.",
    domain: 1,
    group: "Deception technology",
    ref: { title: "NIST CSRC Glossary: honeypot", url: "https://csrc.nist.gov/glossary/term/honeypot" }
  },
  {
    term: "Honeynet",
    def: "Group of multiple decoy systems and services that imitates a larger real network to study attacker behavior.",
    domain: 1,
    group: "Deception technology",
    ref: { title: "Professor Messer SY0-701: Deception and Disruption", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/deception-and-disruption-sy0-701/" }
  },
  {
    term: "Honeyfile",
    def: "Decoy document with an attractive name, such as passwords.txt, that raises an alert whenever someone opens it.",
    domain: 1,
    group: "Deception technology",
    ref: { title: "Professor Messer SY0-701: Deception and Disruption", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/deception-and-disruption-sy0-701/" }
  },
  {
    term: "Honeytoken",
    def: "Fake data with no legitimate use, such as a bogus API key or a fake database record, that signals a breach and can be traced if it is used or appears elsewhere.",
    domain: 1,
    group: "Deception technology",
    ref: { title: "Professor Messer SY0-701: Deception and Disruption", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/deception-and-disruption-sy0-701/" }
  },
  {
    term: "Bollards",
    def: "Short, sturdy posts that stop vehicles from reaching a building or entrance while still letting pedestrians through.",
    domain: 1,
    group: "Physical security",
    ref: { title: "Professor Messer SY0-701: Physical Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-security-sy0-701/" }
  },
  {
    term: "Access control vestibule",
    def: "Small space between two interlocking doors where only one door can open at a time, preventing tailgating; formerly called a mantrap.",
    domain: 1,
    group: "Physical security",
    ref: { title: "Professor Messer SY0-701: Physical Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-security-sy0-701/" }
  },
  {
    term: "Infrared sensor",
    def: "Motion sensor that detects the heat signatures of people moving through a monitored area.",
    domain: 1,
    group: "Physical security",
    ref: { title: "Professor Messer SY0-701: Physical Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-security-sy0-701/" }
  },
  {
    term: "Pressure sensor",
    def: "Sensor that detects a change in force, such as someone stepping on a floor mat or a door or window being opened.",
    domain: 1,
    group: "Physical security",
    ref: { title: "Professor Messer SY0-701: Physical Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-security-sy0-701/" }
  },
  {
    term: "Impact analysis",
    def: "Change management step that judges the risks and effects of a proposed change, including the risk of not making it, before approval.",
    domain: 1,
    group: "Change management",
    ref: { title: "NIST CSRC Glossary: security impact analysis", url: "https://csrc.nist.gov/glossary/term/security_impact_analysis" }
  },
  {
    term: "Backout plan",
    def: "Documented steps to reverse a change and return to the previous working state if the change fails.",
    domain: 1,
    group: "Change management",
    ref: { title: "Professor Messer SY0-701: Change Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/change-management-sy0-701/" }
  },
  {
    term: "Maintenance window",
    def: "Pre-approved period, usually during low business activity, when changes may be implemented with the least disruption.",
    domain: 1,
    group: "Change management",
    ref: { title: "Professor Messer SY0-701: Change Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/change-management-sy0-701/" }
  },
  {
    term: "Version control",
    def: "Tracking and managing changes to code, configurations, and documents so any earlier revision can be identified and restored.",
    domain: 1,
    group: "Change management",
    ref: { title: "Professor Messer SY0-701: Technical Change Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/technical-change-management-sy0-701/" }
  },
  {
    term: "AES",
    full: "Advanced Encryption Standard",
    def: "NIST block cipher (FIPS 197) with a 128-bit block and 128-, 192-, or 256-bit keys; the current standard for bulk data encryption.",
    domain: 1,
    group: "Symmetric algorithms",
    ref: { title: "NIST CSRC Glossary: advanced encryption standard", url: "https://csrc.nist.gov/glossary/term/advanced_encryption_standard" }
  },
  {
    term: "DES",
    full: "Data Encryption Standard",
    def: "1970s block cipher with an effective 56-bit key; withdrawn because its key can be brute-forced quickly.",
    domain: 1,
    group: "Symmetric algorithms",
    ref: { title: "NIST CSRC Glossary: data encryption standard", url: "https://csrc.nist.gov/glossary/term/data_encryption_standard" }
  },
  {
    term: "3DES",
    full: "Triple DES",
    def: "Applies the older 56-bit cipher three times to each 64-bit block; now deprecated because of its small block size and slow speed.",
    domain: 1,
    group: "Symmetric algorithms",
    ref: { title: "NIST CSRC Glossary: triple data encryption algorithm", url: "https://csrc.nist.gov/glossary/term/triple_data_encryption_algorithm" }
  },
  {
    term: "RC4",
    def: "Stream cipher once used in WEP and early SSL/TLS; now prohibited in TLS because of biases in its keystream.",
    domain: 1,
    group: "Symmetric algorithms",
    ref: { title: "RFC 7465: Prohibiting RC4 Cipher Suites", url: "https://www.rfc-editor.org/rfc/rfc7465" }
  },
  {
    term: "RSA",
    full: "Rivest–Shamir–Adleman",
    def: "Public-key algorithm whose security rests on the difficulty of factoring the product of two large primes; used for encryption, key exchange, and digital signatures.",
    domain: 1,
    group: "Asymmetric algorithms",
    ref: { title: "RFC 8017: PKCS #1 RSA Cryptography Specifications", url: "https://www.rfc-editor.org/rfc/rfc8017" }
  },
  {
    term: "ECC",
    full: "Elliptic Curve Cryptography",
    def: "Public-key method that gives security equal to RSA with much smaller keys, which suits mobile and IoT devices.",
    domain: 1,
    group: "Asymmetric algorithms",
    ref: { title: "NIST CSRC Glossary: elliptic curve cryptography", url: "https://csrc.nist.gov/glossary/term/elliptic_curve_cryptography" }
  },
  {
    term: "DH",
    full: "Diffie–Hellman",
    def: "Key-agreement method that lets two parties derive a shared secret over an untrusted network; by itself it does not encrypt data or authenticate the parties.",
    domain: 1,
    group: "Asymmetric algorithms",
    ref: { title: "NIST CSRC Glossary: diffie hellman", url: "https://csrc.nist.gov/glossary/term/diffie_hellman" }
  },
  {
    term: "ECDSA",
    full: "Elliptic Curve Digital Signature Algorithm",
    def: "Signature scheme based on elliptic curves, specified in FIPS 186-5, giving strong signatures with short keys.",
    domain: 1,
    group: "Asymmetric algorithms",
    ref: { title: "NIST CSRC Glossary: elliptic curve digital signature algorithm", url: "https://csrc.nist.gov/glossary/term/elliptic_curve_digital_signature_algorithm" }
  },
  {
    term: "SHA-2",
    full: "Secure Hash Algorithm 2",
    def: "Family of hash functions with 224-, 256-, 384-, and 512-bit digests defined in FIPS 180-4; widely used for integrity checks and signatures.",
    domain: 1,
    group: "Hashing & integrity",
    ref: { title: "NIST FIPS 180-4: Secure Hash Standard", url: "https://csrc.nist.gov/pubs/fips/180-4/upd1/final" }
  },
  {
    term: "MD5",
    full: "Message Digest 5",
    def: "Older 128-bit hash function considered broken because practical collisions can be produced; still seen in legacy file checksums.",
    domain: 1,
    group: "Hashing & integrity",
    ref: { title: "NIST CSRC Glossary: md5", url: "https://csrc.nist.gov/glossary/term/md5" }
  },
  {
    term: "SHA-1",
    def: "160-bit hash function deprecated by NIST after practical collision attacks; disallowed for generating digital signatures.",
    domain: 1,
    group: "Hashing & integrity",
    ref: { title: "NIST CSRC Glossary: sha 1", url: "https://csrc.nist.gov/glossary/term/sha_1" }
  },
  {
    term: "HMAC",
    full: "Hash-based Message Authentication Code",
    def: "Combines a hash function with a shared secret key so the receiver can verify both the integrity and the origin of a message.",
    domain: 1,
    group: "Hashing & integrity",
    ref: { title: "NIST CSRC Glossary: hash based message authentication code", url: "https://csrc.nist.gov/glossary/term/hash_based_message_authentication_code" }
  },
  {
    term: "Salting",
    def: "Adding a unique random value to each password before hashing so identical passwords produce different hashes and precomputed rainbow tables fail.",
    domain: 1,
    group: "Crypto concepts",
    ref: { title: "NIST CSRC Glossary: salt", url: "https://csrc.nist.gov/glossary/term/salt" }
  },
  {
    term: "Key stretching",
    def: "Processing a password through many iterations, as PBKDF2, bcrypt, and Argon2 do, so each guess takes much longer for an attacker.",
    domain: 1,
    group: "Crypto concepts",
    ref: { title: "OWASP Password Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" }
  },
  {
    term: "Digital signature",
    def: "Value created with the sender's private key over a message hash; anyone with the public key can verify integrity, authenticity, and non-repudiation.",
    domain: 1,
    group: "Crypto concepts",
    ref: { title: "NIST CSRC Glossary: digital signature", url: "https://csrc.nist.gov/glossary/term/digital_signature" }
  },
  {
    term: "Perfect forward secrecy",
    def: "Property where compromise of a long-term private key does not expose past session keys, achieved with ephemeral key exchange such as ECDHE.",
    domain: 1,
    group: "Crypto concepts",
    ref: { title: "NIST CSRC Glossary: perfect forward secrecy", url: "https://csrc.nist.gov/glossary/term/perfect_forward_secrecy" }
  },
  {
    term: "Steganography",
    def: "Hiding data inside another file or medium, such as an image or audio file, so that the existence of the message is concealed.",
    domain: 1,
    group: "Crypto concepts",
    ref: { title: "NIST CSRC Glossary: steganography", url: "https://csrc.nist.gov/glossary/term/steganography" }
  },
  {
    term: "Symmetric encryption",
    def: "Encryption that uses one shared secret key for both encryption and decryption; fast for bulk data, but distributing the key securely is the main challenge.",
    domain: 1,
    group: "Crypto concepts",
    ref: { title: "NIST CSRC Glossary: symmetric cryptography", url: "https://csrc.nist.gov/glossary/term/symmetric_cryptography" }
  },
  {
    term: "Asymmetric encryption",
    def: "Encryption that uses a mathematically related public and private key pair; slower than shared-key methods but solves the key distribution problem.",
    domain: 1,
    group: "Crypto concepts",
    ref: { title: "NIST CSRC Glossary: asymmetric cryptography", url: "https://csrc.nist.gov/glossary/term/asymmetric_cryptography" }
  },
  {
    term: "PKI",
    full: "Public Key Infrastructure",
    def: "The roles, policies, hardware, and software used to create, distribute, manage, and revoke digital certificates.",
    domain: 1,
    group: "PKI & certificates",
    ref: { title: "NIST CSRC Glossary: public key infrastructure", url: "https://csrc.nist.gov/glossary/term/public_key_infrastructure" }
  },
  {
    term: "Certificate authority (CA)",
    def: "Trusted entity that verifies identities and digitally signs certificates binding public keys to their subjects; the anchor of a chain of trust.",
    domain: 1,
    group: "PKI & certificates",
    ref: { title: "NIST CSRC Glossary: certificate authority", url: "https://csrc.nist.gov/glossary/term/certificate_authority" }
  },
  {
    term: "CRL",
    full: "Certificate Revocation List",
    def: "Signed list of revoked certificate serial numbers published by the issuer; clients download it periodically, so it can be out of date.",
    domain: 1,
    group: "PKI & certificates",
    ref: { title: "NIST CSRC Glossary: certificate revocation list", url: "https://csrc.nist.gov/glossary/term/certificate_revocation_list" }
  },
  {
    term: "OCSP",
    full: "Online Certificate Status Protocol",
    def: "Lets a client ask a responder in real time whether one specific certificate is revoked, instead of downloading a full list.",
    domain: 1,
    group: "PKI & certificates",
    ref: { title: "RFC 6960: Online Certificate Status Protocol", url: "https://www.rfc-editor.org/rfc/rfc6960" }
  },
  {
    term: "OCSP stapling",
    def: "The web server attaches a recent, CA-signed revocation status response to the TLS handshake, so clients do not have to contact the responder themselves.",
    domain: 1,
    group: "PKI & certificates",
    ref: { title: "RFC 6066: TLS Extensions (Certificate Status Request)", url: "https://www.rfc-editor.org/rfc/rfc6066" }
  },
  {
    term: "CSR",
    full: "Certificate Signing Request",
    def: "Message containing an applicant's public key and identity details, sent to a CA to obtain a signed certificate; the private key stays with the requester.",
    domain: 1,
    group: "PKI & certificates",
    ref: { title: "NIST CSRC Glossary: certificate signing request", url: "https://csrc.nist.gov/glossary/term/certificate_signing_request" }
  },
  {
    term: "Wildcard certificate",
    def: "Certificate whose name uses an asterisk, such as *.example.com, so it is valid for all first-level subdomains of one domain.",
    domain: 1,
    group: "PKI & certificates",
    ref: { title: "Professor Messer SY0-701: Certificates", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/certificates-sy0-701/" }
  },
  {
    term: "Self-signed certificate",
    def: "Certificate signed with its own private key instead of by a trusted authority; useful internally, but browsers do not trust it by default.",
    domain: 1,
    group: "PKI & certificates",
    ref: { title: "NIST CSRC Glossary: self signed certificate", url: "https://csrc.nist.gov/glossary/term/self_signed_certificate" }
  },
  {
    term: "Key escrow",
    def: "Arrangement in which a trusted third party holds copies of cryptographic keys so they can be recovered if lost or when legally required.",
    domain: 1,
    group: "PKI & certificates",
    ref: { title: "NIST CSRC Glossary: key escrow", url: "https://csrc.nist.gov/glossary/term/key_escrow" }
  },
  {
    term: "HSM",
    full: "Hardware Security Module",
    def: "Tamper-resistant appliance or card that securely generates, stores, and uses keys for many systems, such as a CA or payment processing.",
    domain: 1,
    group: "Hardware security",
    ref: { title: "Professor Messer SY0-701: Encryption Technologies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/encryption-technologies-sy0-701/" }
  },
  {
    term: "TPM",
    full: "Trusted Platform Module",
    def: "Chip on a device's motherboard that securely stores keys and boot measurements, supporting secure boot, attestation, and disk encryption for that device.",
    domain: 1,
    group: "Hardware security",
    ref: { title: "NIST CSRC Glossary: trusted platform module", url: "https://csrc.nist.gov/glossary/term/trusted_platform_module" }
  },
  {
    term: "Secure enclave",
    def: "Isolated, hardware-protected processor area, separate from the main OS, that guards sensitive data such as biometric data and keys even if the OS is compromised.",
    domain: 1,
    group: "Hardware security",
    ref: { title: "Apple Platform Security: Secure Enclave", url: "https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/web" }
  },
  {
    term: "FDE",
    full: "Full Disk Encryption",
    def: "Encrypts an entire storage drive, including the operating system and free space, usually with software such as BitLocker or FileVault, so data is unreadable if the device is lost.",
    domain: 1,
    group: "Hardware security",
    ref: { title: "NIST CSRC Glossary: full disk encryption", url: "https://csrc.nist.gov/glossary/term/full_disk_encryption" }
  },
  {
    term: "SED",
    full: "Self-Encrypting Drive",
    def: "Storage device with built-in hardware that automatically encrypts all data written to it, without using the host CPU.",
    domain: 1,
    group: "Hardware security",
    ref: { title: "NIST SP 800-111: Guide to Storage Encryption Technologies for End User Devices", url: "https://csrc.nist.gov/pubs/sp/800/111/final" }
  },
  {
    term: "Nation-state",
    def: "Attacker that works for or is sponsored by a national government, with vast resources and high sophistication; motives include espionage, political influence, and warfare.",
    domain: 2,
    group: "Threat actors",
    ref: { title: "Professor Messer SY0-701: Threat Actors", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-actors-sy0-701/" }
  },
  {
    term: "Unskilled attacker",
    def: "Attacker with little technical ability who runs tools or exploits written by others; formerly called a script kiddie.",
    domain: 2,
    group: "Threat actors",
    ref: { title: "Professor Messer SY0-701: Threat Actors", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-actors-sy0-701/" }
  },
  {
    term: "Hacktivist",
    def: "Attacker driven by a political, social, or ideological cause, often using website defacement, DDoS, or data leaks to gain attention.",
    domain: 2,
    group: "Threat actors",
    ref: { title: "Professor Messer SY0-701: Threat Actors", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-actors-sy0-701/" }
  },
  {
    term: "Insider threat",
    def: "Current or former employee, contractor, or partner who misuses authorized access to harm the organization, whether on purpose or by accident.",
    domain: 2,
    group: "Threat actors",
    ref: { title: "NIST CSRC Glossary: insider threat", url: "https://csrc.nist.gov/glossary/term/insider_threat" }
  },
  {
    term: "Organized crime",
    def: "Professional criminal group with significant funding whose main motive is financial gain, for example through ransomware, fraud, or data theft.",
    domain: 2,
    group: "Threat actors",
    ref: { title: "Professor Messer SY0-701: Threat Actors", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-actors-sy0-701/" }
  },
  {
    term: "Shadow IT",
    def: "Hardware, software, or cloud services used within an organization without the IT department's knowledge or approval.",
    domain: 2,
    group: "Threat actors",
    ref: { title: "Professor Messer SY0-701: Threat Actors", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-actors-sy0-701/" }
  },
  {
    term: "APT",
    full: "Advanced Persistent Threat",
    def: "Highly skilled, well-funded adversary that keeps stealthy, long-term access inside a target network, often to steal data over months.",
    domain: 2,
    group: "Threat actors",
    ref: { title: "NIST CSRC Glossary: advanced persistent threat", url: "https://csrc.nist.gov/glossary/term/advanced_persistent_threat" }
  },
  {
    term: "Removable device",
    def: "Attack path that uses USB drives or other portable media to deliver malware or carry data out, sometimes by leaving infected drives for victims to find.",
    domain: 2,
    group: "Threat vectors",
    ref: { title: "MITRE ATT&CK: Replication Through Removable Media", url: "https://attack.mitre.org/techniques/T1091/" }
  },
  {
    term: "Unsupported systems",
    def: "End-of-life operating systems or applications that no longer receive vendor security patches, so newly found flaws stay open.",
    domain: 2,
    group: "Threat vectors",
    ref: { title: "Professor Messer SY0-701: Common Threat Vectors", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/common-threat-vectors-sy0-701/" }
  },
  {
    term: "Open service ports",
    def: "Listening network services that are not needed; each one adds an entry point that attackers can probe and exploit.",
    domain: 2,
    group: "Threat vectors",
    ref: { title: "Professor Messer SY0-701: Common Threat Vectors", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/common-threat-vectors-sy0-701/" }
  },
  {
    term: "Default credentials",
    def: "Factory-set usernames and passwords, such as admin/admin, that attackers can look up online and use if they are not changed.",
    domain: 2,
    group: "Threat vectors",
    ref: { title: "CWE-1392: Use of Default Credentials", url: "https://cwe.mitre.org/data/definitions/1392.html" }
  },
  {
    term: "Supply chain attack",
    def: "Compromise of a trusted supplier, such as a software vendor, managed service provider, or hardware maker, to reach that supplier's downstream customers.",
    domain: 2,
    group: "Threat vectors",
    ref: { title: "MITRE ATT&CK: Supply Chain Compromise", url: "https://attack.mitre.org/techniques/T1195/" }
  },
  {
    term: "Phishing",
    def: "Fraudulent messages sent in bulk that pretend to come from a trusted source to trick recipients into revealing credentials, clicking a malicious link, or opening an attachment.",
    domain: 2,
    group: "Social engineering",
    ref: { title: "NIST CSRC Glossary: phishing", url: "https://csrc.nist.gov/glossary/term/phishing" }
  },
  {
    term: "Spear phishing",
    def: "Fraudulent email aimed at a specific person or small group, using researched personal details to look more convincing.",
    domain: 2,
    group: "Social engineering",
    ref: { title: "MITRE ATT&CK: Phishing", url: "https://attack.mitre.org/techniques/T1566/" }
  },
  {
    term: "Vishing",
    def: "Voice phishing: social engineering over phone calls or voicemail, often with spoofed caller ID to pose as a bank or help desk.",
    domain: 2,
    group: "Social engineering",
    ref: { title: "Professor Messer SY0-701: Phishing", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/phishing-sy0-701/" }
  },
  {
    term: "Smishing",
    def: "SMS phishing: fraudulent text messages that lure victims to malicious links or ask them to call a number.",
    domain: 2,
    group: "Social engineering",
    ref: { title: "Professor Messer SY0-701: Phishing", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/phishing-sy0-701/" }
  },
  {
    term: "Pretexting",
    def: "Inventing a believable scenario, such as posing as IT support verifying an account, to persuade a victim to give information or access.",
    domain: 2,
    group: "Social engineering",
    ref: { title: "Professor Messer SY0-701: Impersonation", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/impersonation-sy0-701/" }
  },
  {
    term: "BEC",
    full: "Business Email Compromise",
    def: "Fraud in which an attacker uses a compromised or spoofed company email account to trick staff into wiring money or sending sensitive data.",
    domain: 2,
    group: "Social engineering",
    ref: { title: "FBI IC3: Business Email Compromise", url: "https://www.ic3.gov/CrimeInfo/BEC" }
  },
  {
    term: "Watering hole attack",
    def: "Compromising a website that a target group often visits so that its members are infected when they browse it.",
    domain: 2,
    group: "Social engineering",
    ref: { title: "NIST CSRC Glossary: watering hole attack", url: "https://csrc.nist.gov/glossary/term/watering_hole_attack" }
  },
  {
    term: "Typosquatting",
    def: "Registering domain names with common misspellings of a legitimate site, such as gooogle.com, to catch users who mistype the address.",
    domain: 2,
    group: "Social engineering",
    ref: { title: "Professor Messer SY0-701: Phishing", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/phishing-sy0-701/" }
  },
  {
    term: "Brand impersonation",
    def: "Pretending to be a well-known company, copying its logos and style in emails or fake websites, to make a scam look legitimate.",
    domain: 2,
    group: "Social engineering",
    ref: { title: "Professor Messer SY0-701: Other Social Engineering Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/other-social-engineering-attacks-sy0-701/" }
  },
  {
    term: "Disinformation",
    def: "False information created and spread on purpose to deceive or manipulate an audience.",
    domain: 2,
    group: "Social engineering",
    ref: { title: "NIST CSRC Glossary: disinformation", url: "https://csrc.nist.gov/glossary/term/disinformation" }
  },
  {
    term: "Ransomware",
    def: "Malware that encrypts a victim's files or locks systems and demands payment, often also threatening to leak stolen data.",
    domain: 2,
    group: "Malware types",
    ref: { title: "CISA: StopRansomware", url: "https://www.cisa.gov/stopransomware" }
  },
  {
    term: "Trojan",
    def: "Malware disguised as legitimate, useful software that performs hidden malicious actions once the user installs it.",
    domain: 2,
    group: "Malware types",
    ref: { title: "NIST CSRC Glossary: trojan horse", url: "https://csrc.nist.gov/glossary/term/trojan_horse" }
  },
  {
    term: "Worm",
    def: "Self-replicating malware that spreads across networks by exploiting vulnerabilities, without needing a host file or user action.",
    domain: 2,
    group: "Malware types",
    ref: { title: "NIST CSRC Glossary: worm", url: "https://csrc.nist.gov/glossary/term/worm" }
  },
  {
    term: "Spyware",
    def: "Malware that secretly gathers information about a user, such as browsing activity and personal data, and sends it to a third party without consent.",
    domain: 2,
    group: "Malware types",
    ref: { title: "NIST CSRC Glossary: spyware", url: "https://csrc.nist.gov/glossary/term/spyware" }
  },
  {
    term: "Bloatware",
    def: "Unnecessary software preinstalled by a device manufacturer that uses storage and resources and may add vulnerabilities.",
    domain: 2,
    group: "Malware types",
    ref: { title: "Professor Messer SY0-701: Spyware and Bloatware", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/spyware-and-bloatware-sy0-701/" }
  },
  {
    term: "Virus",
    def: "Malicious code that attaches itself to a host file or program and spreads when that file is run, usually requiring user action.",
    domain: 2,
    group: "Malware types",
    ref: { title: "NIST CSRC Glossary: virus", url: "https://csrc.nist.gov/glossary/term/virus" }
  },
  {
    term: "Keylogger",
    def: "Malware or hardware device that records keystrokes to capture passwords and other typed information.",
    domain: 2,
    group: "Malware types",
    ref: { title: "Professor Messer SY0-701: Other Malware Types", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/other-malware-types-sy0-701/" }
  },
  {
    term: "Logic bomb",
    def: "Malicious code that lies dormant until a specific condition or date triggers it, such as an employee being removed from payroll.",
    domain: 2,
    group: "Malware types",
    ref: { title: "NIST CSRC Glossary: logic bomb", url: "https://csrc.nist.gov/glossary/term/logic_bomb" }
  },
  {
    term: "Rootkit",
    def: "Malware that hides deep in the operating system, often in the kernel, to conceal itself and keep privileged access while evading detection.",
    domain: 2,
    group: "Malware types",
    ref: { title: "NIST CSRC Glossary: rootkit", url: "https://csrc.nist.gov/glossary/term/rootkit" }
  },
  {
    term: "RAT",
    full: "Remote Access Trojan",
    def: "Malware that gives an attacker hidden remote control of an infected system, including file access, screen viewing, and command execution.",
    domain: 2,
    group: "Malware types",
    ref: { title: "Professor Messer SY0-701: Other Malware Types", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/other-malware-types-sy0-701/" }
  },
  {
    term: "Memory injection",
    def: "Placing malicious code into the memory of a running legitimate process so it runs with that process's permissions, as in DLL injection.",
    domain: 2,
    group: "Vulnerability types",
    ref: { title: "MITRE ATT&CK: Process Injection", url: "https://attack.mitre.org/techniques/T1055/" }
  },
  {
    term: "Race condition",
    def: "Flaw where the outcome depends on the timing of events, such as a resource changing between the time it is checked and the time it is used (TOCTOU).",
    domain: 2,
    group: "Vulnerability types",
    ref: { title: "Professor Messer SY0-701: Race Conditions", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/race-conditions-sy0-701/" }
  },
  {
    term: "Malicious update",
    def: "Software update that has been tampered with so malware is delivered through the vendor's trusted update channel.",
    domain: 2,
    group: "Vulnerability types",
    ref: { title: "Professor Messer SY0-701: Malicious Updates", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/malicious-updates-sy0-701/" }
  },
  {
    term: "Zero-day",
    def: "Vulnerability that is unknown to the vendor or has no available patch, so attackers can exploit it before defenders can fix it.",
    domain: 2,
    group: "Vulnerability types",
    ref: { title: "NIST CSRC Glossary: zero day attack", url: "https://csrc.nist.gov/glossary/term/zero_day_attack" }
  },
  {
    term: "VM escape",
    def: "Exploit that breaks out of a guest virtual machine to reach the hypervisor or other guests on the same host.",
    domain: 2,
    group: "Vulnerability types",
    ref: { title: "Professor Messer SY0-701: Virtualization Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/virtualization-vulnerabilities-sy0-701/" }
  },
  {
    term: "Resource reuse",
    def: "Virtualization flaw where memory or storage used by one guest is given to another without being cleared, exposing leftover data.",
    domain: 2,
    group: "Vulnerability types",
    ref: { title: "Professor Messer SY0-701: Virtualization Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/virtualization-vulnerabilities-sy0-701/" }
  },
  {
    term: "Sideloading",
    def: "Installing mobile apps from outside the official app store, bypassing the store's security review.",
    domain: 2,
    group: "Vulnerability types",
    ref: { title: "Professor Messer SY0-701: Mobile Device Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/mobile-device-vulnerabilities-sy0-701/" }
  },
  {
    term: "Jailbreaking",
    def: "Removing the manufacturer's restrictions on an iOS device to gain root access and install unapproved apps; the Android equivalent is rooting.",
    domain: 2,
    group: "Vulnerability types",
    ref: { title: "Professor Messer SY0-701: Mobile Device Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/mobile-device-vulnerabilities-sy0-701/" }
  },
  {
    term: "Misconfiguration",
    def: "Insecure settings such as publicly open cloud storage, unchanged default accounts, or unneeded services left enabled.",
    domain: 2,
    group: "Vulnerability types",
    ref: { title: "Professor Messer SY0-701: Misconfiguration Vulnerabilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/misconfiguration-vulnerabilities-sy0-701/" }
  },
  {
    term: "Buffer overflow",
    def: "Writing more data into a memory area than it can hold, overwriting adjacent memory and possibly letting an attacker run code.",
    domain: 2,
    group: "Application attacks",
    ref: { title: "NIST CSRC Glossary: buffer overflow", url: "https://csrc.nist.gov/glossary/term/buffer_overflow" }
  },
  {
    term: "SQL injection",
    def: "Inserting malicious database commands into an application input field so the back-end database runs them, exposing or changing data.",
    domain: 2,
    group: "Application attacks",
    ref: { title: "OWASP: SQL Injection", url: "https://owasp.org/www-community/attacks/SQL_Injection" }
  },
  {
    term: "XSS",
    full: "Cross-Site Scripting",
    def: "Injecting malicious script into a trusted website so it runs in other users' browsers, often to steal session cookies.",
    domain: 2,
    group: "Application attacks",
    ref: { title: "OWASP: Cross Site Scripting (XSS)", url: "https://owasp.org/www-community/attacks/xss/" }
  },
  {
    term: "CSRF",
    full: "Cross-Site Request Forgery",
    def: "Tricks a logged-in user's browser into sending an unwanted request, such as a fund transfer, to a site that trusts that user.",
    domain: 2,
    group: "Application attacks",
    ref: { title: "OWASP: Cross Site Request Forgery (CSRF)", url: "https://owasp.org/www-community/attacks/csrf" }
  },
  {
    term: "SSRF",
    full: "Server-Side Request Forgery",
    def: "Tricks a server into making requests to unintended internal or external resources, such as a cloud metadata service.",
    domain: 2,
    group: "Application attacks",
    ref: { title: "OWASP: Server Side Request Forgery", url: "https://owasp.org/www-community/attacks/Server_Side_Request_Forgery" }
  },
  {
    term: "Directory traversal",
    def: "Using sequences like ../ in input to read files and folders outside the web root that should not be reachable.",
    domain: 2,
    group: "Application attacks",
    ref: { title: "OWASP: Path Traversal", url: "https://owasp.org/www-community/attacks/Path_Traversal" }
  },
  {
    term: "Replay attack",
    def: "Capturing valid authentication or session data and retransmitting it later to impersonate the user; prevented with timestamps, nonces, and session tokens.",
    domain: 2,
    group: "Application attacks",
    ref: { title: "NIST CSRC Glossary: replay attack", url: "https://csrc.nist.gov/glossary/term/replay_attack" }
  },
  {
    term: "Privilege escalation",
    def: "Exploiting a flaw or misconfiguration to gain higher permissions than originally granted, such as moving from a standard user to administrator.",
    domain: 2,
    group: "Application attacks",
    ref: { title: "MITRE ATT&CK: Exploitation for Privilege Escalation", url: "https://attack.mitre.org/techniques/T1068/" }
  },
  {
    term: "Session hijacking",
    def: "Taking over a user's active session by stealing or predicting the session token, usually a cookie.",
    domain: 2,
    group: "Application attacks",
    ref: { title: "OWASP: Session hijacking attack", url: "https://owasp.org/www-community/attacks/Session_hijacking_attack" }
  },
  {
    term: "DDoS",
    full: "Distributed Denial of Service",
    def: "Flooding a target with traffic from many compromised systems, often a botnet, to make it unavailable to legitimate users.",
    domain: 2,
    group: "Network attacks",
    ref: { title: "NIST CSRC Glossary: distributed denial of service", url: "https://csrc.nist.gov/glossary/term/distributed_denial_of_service" }
  },
  {
    term: "Amplified DDoS",
    def: "Flood that abuses protocols such as DNS or NTP, where a small request triggers a much larger response, multiplying the attack traffic.",
    domain: 2,
    group: "Network attacks",
    ref: { title: "CISA: UDP-Based Amplification Attacks", url: "https://www.cisa.gov/news-events/alerts/2014/01/17/udp-based-amplification-attacks" }
  },
  {
    term: "Reflected DDoS",
    def: "Flood in which the attacker spoofs the victim's IP address as the source, so third-party servers send their replies to the victim.",
    domain: 2,
    group: "Network attacks",
    ref: { title: "Professor Messer SY0-701: Denial of Service", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/denial-of-service-sy0-701/" }
  },
  {
    term: "DNS poisoning",
    def: "Inserting forged records into a DNS resolver's cache or a host file so users are sent to attacker-controlled IP addresses.",
    domain: 2,
    group: "Network attacks",
    ref: { title: "Professor Messer SY0-701: Dns Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/dns-attacks-sy0-701/" }
  },
  {
    term: "On-path attack",
    def: "Attacker secretly positions between two communicating parties to intercept, read, or alter their traffic; formerly called man-in-the-middle.",
    domain: 2,
    group: "Network attacks",
    ref: { title: "MITRE ATT&CK: Adversary-in-the-Middle", url: "https://attack.mitre.org/techniques/T1557/" }
  },
  {
    term: "ARP poisoning",
    def: "Sending forged Address Resolution Protocol replies on a local network to link the attacker's MAC address with another host's IP address.",
    domain: 2,
    group: "Network attacks",
    ref: { title: "MITRE ATT&CK: ARP Cache Poisoning", url: "https://attack.mitre.org/techniques/T1557/002/" }
  },
  {
    term: "Pass the hash",
    def: "Using a stolen password hash, such as an NTLM hash, to authenticate directly without cracking it to learn the plaintext password.",
    domain: 2,
    group: "Network attacks",
    ref: { title: "MITRE ATT&CK: Use Alternate Authentication Material: Pass the Hash", url: "https://attack.mitre.org/techniques/T1550/002/" }
  },
  {
    term: "Domain hijacking",
    def: "Gaining control of a domain's registration, often through a compromised registrar account, to change its DNS settings.",
    domain: 2,
    group: "Network attacks",
    ref: { title: "Professor Messer SY0-701: Dns Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/dns-attacks-sy0-701/" }
  },
  {
    term: "Evil twin",
    def: "Fake wireless access point that copies the name (SSID) of a legitimate network to trick users into connecting through it.",
    domain: 2,
    group: "Wireless attacks",
    ref: { title: "MITRE ATT&CK: Adversary-in-the-Middle: Evil Twin", url: "https://attack.mitre.org/techniques/T1557/004/" }
  },
  {
    term: "Rogue access point",
    def: "Unauthorized wireless access point connected to the internal network, often by an employee, creating an unprotected back door.",
    domain: 2,
    group: "Wireless attacks",
    ref: { title: "Professor Messer SY0-701: Common Threat Vectors", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/common-threat-vectors-sy0-701/" }
  },
  {
    term: "Deauthentication attack",
    def: "Sending forged 802.11 management frames that disconnect clients from a wireless network; protected management frames (802.11w) prevent it.",
    domain: 2,
    group: "Wireless attacks",
    ref: { title: "Professor Messer SY0-701: Wireless Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/wireless-attacks-sy0-701/" }
  },
  {
    term: "Bluejacking",
    def: "Sending unsolicited messages to nearby Bluetooth devices; annoying, but it does not steal data.",
    domain: 2,
    group: "Wireless attacks",
    ref: { title: "NIST SP 800-121r2: Guide to Bluetooth Security", url: "https://csrc.nist.gov/pubs/sp/800/121/r2/upd1/final" }
  },
  {
    term: "Bluesnarfing",
    def: "Stealing data such as contacts, messages, or calendar entries from a Bluetooth device without permission.",
    domain: 2,
    group: "Wireless attacks",
    ref: { title: "NIST SP 800-121r2: Guide to Bluetooth Security", url: "https://csrc.nist.gov/pubs/sp/800/121/r2/upd1/final" }
  },
  {
    term: "RFID cloning",
    def: "Copying the data from an access badge or key fob to make a duplicate that opens the same doors.",
    domain: 2,
    group: "Physical attacks",
    ref: { title: "Professor Messer SY0-701: Physical Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-attacks-sy0-701/" }
  },
  {
    term: "Environmental attack",
    def: "Attacking the facility systems that support IT, such as power, HVAC, or fire suppression, to cause outages.",
    domain: 2,
    group: "Physical attacks",
    ref: { title: "Professor Messer SY0-701: Physical Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-attacks-sy0-701/" }
  },
  {
    term: "Physical brute force",
    def: "Forcing physical entry by smashing a window, prying open a door, or breaking a lock, rather than defeating a technical control.",
    domain: 2,
    group: "Physical attacks",
    ref: { title: "Professor Messer SY0-701: Physical Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-attacks-sy0-701/" }
  },
  {
    term: "Dumpster diving",
    def: "Searching an organization's trash for discarded documents, hardware, or other information useful for an attack.",
    domain: 2,
    group: "Physical attacks",
    ref: { title: "Professor Messer SY0-701: Penetration Tests", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/penetration-tests-sy0-701/" }
  },
  {
    term: "Password spraying",
    def: "Trying a few common passwords against many accounts, which stays under per-account lockout thresholds.",
    domain: 2,
    group: "Password attacks",
    ref: { title: "MITRE ATT&CK: Brute Force: Password Spraying", url: "https://attack.mitre.org/techniques/T1110/003/" }
  },
  {
    term: "Brute force attack",
    def: "Trying every possible combination of characters until the right password or key is found.",
    domain: 2,
    group: "Password attacks",
    ref: { title: "NIST CSRC Glossary: brute force password attack", url: "https://csrc.nist.gov/glossary/term/brute_force_password_attack" }
  },
  {
    term: "Dictionary attack",
    def: "Guessing passwords from a list of common words and previously leaked passwords instead of every possible combination.",
    domain: 2,
    group: "Password attacks",
    ref: { title: "MITRE ATT&CK: Brute Force: Password Guessing", url: "https://attack.mitre.org/techniques/T1110/001/" }
  },
  {
    term: "Rainbow table",
    def: "Precomputed table of hashes and matching plaintext passwords used to crack unsalted hashes quickly.",
    domain: 2,
    group: "Password attacks",
    ref: { title: "Professor Messer SY0-701: Hashing and Digital Signatures", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hashing-and-digital-signatures-sy0-701/" }
  },
  {
    term: "Credential stuffing",
    def: "Using username and password pairs leaked from one breach to log in to other sites, exploiting password reuse.",
    domain: 2,
    group: "Password attacks",
    ref: { title: "MITRE ATT&CK: Brute Force: Credential Stuffing", url: "https://attack.mitre.org/techniques/T1110/004/" }
  },
  {
    term: "Downgrade attack",
    def: "Forcing two systems to negotiate an older, weaker protocol version or cipher suite that the attacker can break, as in SSL stripping.",
    domain: 2,
    group: "Cryptographic attacks",
    ref: { title: "Professor Messer SY0-701: Cryptographic Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cryptographic-attacks-sy0-701/" }
  },
  {
    term: "Birthday attack",
    def: "Exploits the probability that two random inputs share the same hash much sooner than expected, to find collisions faster than brute force.",
    domain: 2,
    group: "Cryptographic attacks",
    ref: { title: "Professor Messer SY0-701: Cryptographic Attacks", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cryptographic-attacks-sy0-701/" }
  },
  {
    term: "Collision",
    def: "Situation where two different inputs produce the same hash value, which breaks the trust placed in that hash algorithm.",
    domain: 2,
    group: "Cryptographic attacks",
    ref: { title: "NIST CSRC Glossary: collision", url: "https://csrc.nist.gov/glossary/term/collision" }
  },
  {
    term: "Side-channel attack",
    def: "Recovering secrets by measuring physical effects of a system, such as timing, power use, or electromagnetic emissions, rather than attacking the algorithm itself.",
    domain: 2,
    group: "Cryptographic attacks",
    ref: { title: "NIST CSRC Glossary: side channel attack", url: "https://csrc.nist.gov/glossary/term/side_channel_attack" }
  },
  {
    term: "Account lockout",
    def: "Users suddenly unable to log in because their accounts were locked, which can signal brute-force attempts against them.",
    domain: 2,
    group: "Indicators of compromise",
    ref: { title: "Professor Messer SY0-701: Indicators of Compromise", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/indicators-of-compromise-sy0-701/" }
  },
  {
    term: "Concurrent session usage",
    def: "One account logged in from multiple places at once when the user would normally have only one session.",
    domain: 2,
    group: "Indicators of compromise",
    ref: { title: "Professor Messer SY0-701: Indicators of Compromise", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/indicators-of-compromise-sy0-701/" }
  },
  {
    term: "Blocked content",
    def: "Users or security tools suddenly prevented from reaching update sites or security resources, because malware is blocking them.",
    domain: 2,
    group: "Indicators of compromise",
    ref: { title: "Professor Messer SY0-701: Indicators of Compromise", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/indicators-of-compromise-sy0-701/" }
  },
  {
    term: "Impossible travel",
    def: "Logins for one account from distant locations within a time too short for the person to travel between them.",
    domain: 2,
    group: "Indicators of compromise",
    ref: { title: "Professor Messer SY0-701: Indicators of Compromise", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/indicators-of-compromise-sy0-701/" }
  },
  {
    term: "Resource consumption",
    def: "Unusual spikes in CPU, memory, disk, or network use, such as large outbound transfers during data exfiltration.",
    domain: 2,
    group: "Indicators of compromise",
    ref: { title: "Professor Messer SY0-701: Indicators of Compromise", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/indicators-of-compromise-sy0-701/" }
  },
  {
    term: "Resource inaccessibility",
    def: "Files, systems, or services suddenly unavailable, as when ransomware encrypts data or a server is knocked offline.",
    domain: 2,
    group: "Indicators of compromise",
    ref: { title: "Professor Messer SY0-701: Indicators of Compromise", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/indicators-of-compromise-sy0-701/" }
  },
  {
    term: "Out-of-cycle logging",
    def: "Log entries at unusual times, such as account activity at 3 a.m. or patches applied outside the normal schedule.",
    domain: 2,
    group: "Indicators of compromise",
    ref: { title: "Professor Messer SY0-701: Indicators of Compromise", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/indicators-of-compromise-sy0-701/" }
  },
  {
    term: "Missing logs",
    def: "Gaps in log records, often because an attacker deleted entries to cover their tracks.",
    domain: 2,
    group: "Indicators of compromise",
    ref: { title: "Professor Messer SY0-701: Indicators of Compromise", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/indicators-of-compromise-sy0-701/" }
  },
  {
    term: "Published/documented",
    def: "Evidence of a breach that is already public, such as stolen company data posted online by the attackers.",
    domain: 2,
    group: "Indicators of compromise",
    ref: { title: "Professor Messer SY0-701: Indicators of Compromise", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/indicators-of-compromise-sy0-701/" }
  },
  {
    term: "Segmentation",
    def: "Dividing a network into separate zones, such as VLANs or subnets, so a compromise in one part cannot easily spread to others.",
    domain: 2,
    group: "Mitigation techniques",
    ref: { title: "Professor Messer SY0-701: Segmentation and Access Control", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/segmentation-and-access-control-sy0-701/" }
  },
  {
    term: "Application allow list",
    def: "Only explicitly approved programs are permitted to run; anything not approved is blocked by default.",
    domain: 2,
    group: "Mitigation techniques",
    ref: { title: "NIST CSRC Glossary: application allowlisting", url: "https://csrc.nist.gov/glossary/term/application_allowlisting" }
  },
  {
    term: "Isolation",
    def: "Completely cutting a system or process off from others, for example moving an infected host to a quarantine network.",
    domain: 2,
    group: "Mitigation techniques",
    ref: { title: "Professor Messer SY0-701: Mitigation Techniques", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/mitigation-techniques-sy0-701/" }
  },
  {
    term: "Patching",
    def: "Applying vendor updates that fix known security flaws, ideally on a regular schedule and prioritized by severity.",
    domain: 2,
    group: "Mitigation techniques",
    ref: { title: "NIST CSRC Glossary: patch management", url: "https://csrc.nist.gov/glossary/term/patch_management" }
  },
  {
    term: "Least privilege",
    def: "Giving users and processes only the minimum permissions they need to do their tasks, and no more.",
    domain: 2,
    group: "Mitigation techniques",
    ref: { title: "NIST CSRC Glossary: least privilege", url: "https://csrc.nist.gov/glossary/term/least_privilege" }
  },
  {
    term: "Configuration enforcement",
    def: "Checking devices against required security settings before or during access and fixing or blocking those that do not comply.",
    domain: 2,
    group: "Mitigation techniques",
    ref: { title: "Professor Messer SY0-701: Mitigation Techniques", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/mitigation-techniques-sy0-701/" }
  },
  {
    term: "Decommissioning",
    def: "Securely retiring a system by removing it from service and sanitizing its storage so it no longer adds risk.",
    domain: 2,
    group: "Mitigation techniques",
    ref: { title: "Professor Messer SY0-701: Mitigation Techniques", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/mitigation-techniques-sy0-701/" }
  },
  {
    term: "Hardening",
    def: "Reducing a system's attack surface by removing unneeded software, closing unused ports, changing defaults, and applying secure settings.",
    domain: 2,
    group: "Mitigation techniques",
    ref: { title: "NIST CSRC Glossary: hardening", url: "https://csrc.nist.gov/glossary/term/hardening" }
  },
  {
    term: "ACL",
    full: "Access Control List",
    def: "Ordered set of permit and deny rules attached to a resource or network interface, such as router rules that filter traffic by IP and port.",
    domain: 2,
    group: "Mitigation techniques",
    ref: { title: "NIST CSRC Glossary: access control list", url: "https://csrc.nist.gov/glossary/term/access_control_list" }
  },
  {
    term: "IaC",
    full: "Infrastructure as Code",
    def: "Defining servers, networks, and other infrastructure in machine-readable files so environments deploy consistently and can be version-controlled.",
    domain: 3,
    group: "Architecture models",
    ref: { title: "NIST CSRC Glossary: infrastructure as code", url: "https://csrc.nist.gov/glossary/term/infrastructure_as_code" }
  },
  {
    term: "Serverless",
    def: "Cloud model in which the provider runs individual functions on demand and manages all servers; the customer supplies only code and data.",
    domain: 3,
    group: "Architecture models",
    ref: { title: "Professor Messer SY0-701: Cloud Infrastructures", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cloud-infrastructures-sy0-701/" }
  },
  {
    term: "Microservices",
    def: "Application design in which many small, independent services communicate through APIs so each can be updated or scaled on its own.",
    domain: 3,
    group: "Architecture models",
    ref: { title: "NIST CSRC Glossary: microservice", url: "https://csrc.nist.gov/glossary/term/microservice" }
  },
  {
    term: "Containerization",
    def: "Packaging an application and its dependencies into isolated units that share the host operating system's kernel; lighter than virtual machines.",
    domain: 3,
    group: "Architecture models",
    ref: { title: "NIST SP 800-190: Application Container Security Guide", url: "https://csrc.nist.gov/pubs/sp/800/190/final" }
  },
  {
    term: "Virtualization",
    def: "Running multiple guest operating systems on one physical host, each with its own OS and isolated from the others by a hypervisor.",
    domain: 3,
    group: "Architecture models",
    ref: { title: "NIST CSRC Glossary: virtualization", url: "https://csrc.nist.gov/glossary/term/virtualization" }
  },
  {
    term: "SDN",
    full: "Software-Defined Networking",
    def: "Separates the control plane from the data plane so the network is managed and configured centrally through software.",
    domain: 3,
    group: "Architecture models",
    ref: { title: "NIST CSRC Glossary: software defined networking", url: "https://csrc.nist.gov/glossary/term/software_defined_networking" }
  },
  {
    term: "Air gap",
    def: "Physical isolation of a system or network so it has no connection to other networks, including the internet.",
    domain: 3,
    group: "Architecture models",
    ref: { title: "NIST CSRC Glossary: air gap", url: "https://csrc.nist.gov/glossary/term/air_gap" }
  },
  {
    term: "Public cloud",
    def: "Cloud infrastructure owned by a provider and open to the general public, with resources shared among many customers.",
    domain: 3,
    group: "Cloud models",
    ref: { title: "NIST CSRC Glossary: public cloud", url: "https://csrc.nist.gov/glossary/term/public_cloud" }
  },
  {
    term: "Private cloud",
    def: "Cloud infrastructure used by a single organization, hosted on premises or by a third party.",
    domain: 3,
    group: "Cloud models",
    ref: { title: "NIST CSRC Glossary: private cloud", url: "https://csrc.nist.gov/glossary/term/private_cloud" }
  },
  {
    term: "Hybrid cloud",
    def: "Combination of two or more distinct cloud infrastructures, such as private and public, linked to allow data and application portability.",
    domain: 3,
    group: "Cloud models",
    ref: { title: "NIST CSRC Glossary: hybrid cloud", url: "https://csrc.nist.gov/glossary/term/hybrid_cloud" }
  },
  {
    term: "Community cloud",
    def: "Cloud infrastructure shared by several organizations with common concerns, such as the same mission or compliance requirements.",
    domain: 3,
    group: "Cloud models",
    ref: { title: "NIST CSRC Glossary: community cloud", url: "https://csrc.nist.gov/glossary/term/community_cloud" }
  },
  {
    term: "IaaS",
    full: "Infrastructure as a Service",
    def: "Provider supplies virtual servers, storage, and networking; the customer manages the operating system, applications, and data.",
    domain: 3,
    group: "Cloud models",
    ref: { title: "NIST CSRC Glossary: infrastructure as a service", url: "https://csrc.nist.gov/glossary/term/infrastructure_as_a_service" }
  },
  {
    term: "PaaS",
    full: "Platform as a Service",
    def: "Provider manages the infrastructure and operating system and supplies a development and runtime platform; the customer manages its applications and data.",
    domain: 3,
    group: "Cloud models",
    ref: { title: "NIST CSRC Glossary: platform as a service", url: "https://csrc.nist.gov/glossary/term/platform_as_a_service" }
  },
  {
    term: "SaaS",
    full: "Software as a Service",
    def: "Provider delivers a complete application over the internet, such as web email; the customer manages only its data and user access.",
    domain: 3,
    group: "Cloud models",
    ref: { title: "NIST CSRC Glossary: software as a service", url: "https://csrc.nist.gov/glossary/term/software_as_a_service" }
  },
  {
    term: "Responsibility matrix",
    def: "Table that shows which security duties belong to the cloud provider and which belong to the customer for each service model.",
    domain: 3,
    group: "Cloud models",
    ref: { title: "AWS Shared Responsibility Model", url: "https://aws.amazon.com/compliance/shared-responsibility-model/" }
  },
  {
    term: "IoT",
    full: "Internet of Things",
    def: "Network-connected sensors and devices, such as smart cameras and thermostats, that often have weak default security and limited patching.",
    domain: 3,
    group: "Specialized systems",
    ref: { title: "NIST CSRC Glossary: internet of things", url: "https://csrc.nist.gov/glossary/term/internet_of_things" }
  },
  {
    term: "ICS",
    full: "Industrial Control System",
    def: "General term for systems that monitor and control industrial processes, including SCADA systems and PLCs, where safety and availability come first.",
    domain: 3,
    group: "Specialized systems",
    ref: { title: "NIST CSRC Glossary: industrial control system", url: "https://csrc.nist.gov/glossary/term/industrial_control_system" }
  },
  {
    term: "SCADA",
    full: "Supervisory Control and Data Acquisition",
    def: "System that centrally monitors and controls widely distributed industrial assets such as pipelines, power grids, and water systems.",
    domain: 3,
    group: "Specialized systems",
    ref: { title: "NIST CSRC Glossary: supervisory control and data acquisition", url: "https://csrc.nist.gov/glossary/term/supervisory_control_and_data_acquisition" }
  },
  {
    term: "RTOS",
    full: "Real-Time Operating System",
    def: "OS that must process inputs within strict, predictable time limits, used in vehicles, medical devices, and industrial equipment.",
    domain: 3,
    group: "Specialized systems",
    ref: { title: "NIST CSRC Glossary: real time operating system", url: "https://csrc.nist.gov/glossary/term/real_time_operating_system" }
  },
  {
    term: "Embedded system",
    def: "Computer built into a larger device to perform one dedicated function, such as in a printer or smart appliance; often hard to patch.",
    domain: 3,
    group: "Specialized systems",
    ref: { title: "Professor Messer SY0-701: Hardening Targets", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hardening-targets-sy0-701/" }
  },
  {
    term: "WAF",
    full: "Web Application Firewall",
    def: "Inspects HTTP traffic at Layer 7 to block web application attacks such as SQL injection and cross-site scripting.",
    domain: 3,
    group: "Firewall & network appliances",
    ref: { title: "NIST CSRC Glossary: web application firewall", url: "https://csrc.nist.gov/glossary/term/web_application_firewall" }
  },
  {
    term: "UTM",
    full: "Unified Threat Management",
    def: "Single all-in-one appliance combining firewall, IDS/IPS, antivirus, content filtering, and VPN, typically for smaller networks.",
    domain: 3,
    group: "Firewall & network appliances",
    ref: { title: "NIST CSRC Glossary: unified threat management", url: "https://csrc.nist.gov/glossary/term/unified_threat_management" }
  },
  {
    term: "NGFW",
    full: "Next-Generation Firewall",
    def: "Application-aware firewall that identifies traffic by application and user, not just by port, and includes intrusion prevention.",
    domain: 3,
    group: "Firewall & network appliances",
    ref: { title: "NIST CSRC Glossary: next generation firewall", url: "https://csrc.nist.gov/glossary/term/next_generation_firewall" }
  },
  {
    term: "Layer 4 firewall",
    def: "Filters traffic using IP addresses, port numbers, and connection state without inspecting application content.",
    domain: 3,
    group: "Firewall & network appliances",
    ref: { title: "Professor Messer SY0-701: Firewall Types", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/firewall-types-sy0-701/" }
  },
  {
    term: "Proxy server",
    def: "Intermediary that makes requests on behalf of clients, allowing content filtering, caching, and hiding of internal addresses.",
    domain: 3,
    group: "Firewall & network appliances",
    ref: { title: "NIST CSRC Glossary: proxy server", url: "https://csrc.nist.gov/glossary/term/proxy_server" }
  },
  {
    term: "Jump server",
    def: "Hardened host that administrators connect to first and then use to reach and manage devices in a protected network zone.",
    domain: 3,
    group: "Firewall & network appliances",
    ref: { title: "Professor Messer SY0-701: Network Appliances", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/network-appliances-sy0-701/" }
  },
  {
    term: "Load balancer",
    def: "Device that distributes incoming requests across multiple servers to improve performance and availability, in active/active or active/passive mode.",
    domain: 3,
    group: "Firewall & network appliances",
    ref: { title: "Professor Messer SY0-701: Network Appliances", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/network-appliances-sy0-701/" }
  },
  {
    term: "Screened subnet",
    def: "Network segment between the internet and the internal network that hosts public-facing servers such as web and mail; formerly called a DMZ.",
    domain: 3,
    group: "Infrastructure design",
    ref: { title: "NIST CSRC Glossary: demilitarized zone", url: "https://csrc.nist.gov/glossary/term/demilitarized_zone" }
  },
  {
    term: "Attack surface",
    def: "All the points where an attacker could try to enter or extract data, such as open ports, applications, accounts, and users.",
    domain: 3,
    group: "Infrastructure design",
    ref: { title: "NIST CSRC Glossary: attack surface", url: "https://csrc.nist.gov/glossary/term/attack_surface" }
  },
  {
    term: "Fail-open",
    def: "Failure mode in which an inline security device lets all traffic through when it fails, keeping the network up but with no security checks.",
    domain: 3,
    group: "Infrastructure design",
    ref: { title: "Professor Messer SY0-701: Intrusion Prevention", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/intrusion-prevention-sy0-701/" }
  },
  {
    term: "Fail-closed",
    def: "Failure mode in which an inline security device blocks all traffic when it fails, keeping security but cutting off communication.",
    domain: 3,
    group: "Infrastructure design",
    ref: { title: "Professor Messer SY0-701: Intrusion Prevention", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/intrusion-prevention-sy0-701/" }
  },
  {
    term: "VPN",
    full: "Virtual Private Network",
    def: "Encrypted tunnel over an untrusted network, such as the internet, that connects remote users or sites to a private network.",
    domain: 3,
    group: "Secure communication",
    ref: { title: "NIST CSRC Glossary: virtual private network", url: "https://csrc.nist.gov/glossary/term/virtual_private_network" }
  },
  {
    term: "SD-WAN",
    full: "Software-Defined Wide Area Network",
    def: "Centrally managed WAN that routes traffic over multiple link types, such as broadband and MPLS, based on application needs.",
    domain: 3,
    group: "Secure communication",
    ref: { title: "NIST CSRC Glossary: software defined wide area network", url: "https://csrc.nist.gov/glossary/term/software_defined_wide_area_network" }
  },
  {
    term: "SASE",
    full: "Secure Access Service Edge",
    def: "Cloud-delivered model that combines SD-WAN networking with security services such as secure web gateway, CASB, ZTNA, and firewall as a service.",
    domain: 3,
    group: "Secure communication",
    ref: { title: "NIST CSRC Glossary: secure access service edge", url: "https://csrc.nist.gov/glossary/term/secure_access_service_edge" }
  },
  {
    term: "ZTNA",
    full: "Zero Trust Network Access",
    def: "Grants remote users access to specific applications after checking identity and device context for each session, instead of full network access like a traditional VPN.",
    domain: 3,
    group: "Secure communication",
    ref: { title: "NIST CSRC Glossary: zero trust network access", url: "https://csrc.nist.gov/glossary/term/zero_trust_network_access" }
  },
  {
    term: "CASB",
    full: "Cloud Access Security Broker",
    def: "Enforcement point between users and cloud services that gives visibility into cloud app use and applies policies such as DLP and access control.",
    domain: 3,
    group: "Secure communication",
    ref: { title: "NIST CSRC Glossary: cloud access security broker", url: "https://csrc.nist.gov/glossary/term/cloud_access_security_broker" }
  },
  {
    term: "AH",
    full: "Authentication Header",
    def: "IPsec protocol that provides integrity and origin authentication for packets but no encryption.",
    domain: 3,
    group: "IPsec components",
    ref: { title: "RFC 4302: IP Authentication Header", url: "https://www.rfc-editor.org/rfc/rfc4302" }
  },
  {
    term: "ESP",
    full: "Encapsulating Security Payload",
    def: "IPsec protocol that provides confidentiality through encryption, plus integrity and authentication.",
    domain: 3,
    group: "IPsec components",
    ref: { title: "RFC 4303: IP Encapsulating Security Payload (ESP)", url: "https://www.rfc-editor.org/rfc/rfc4303" }
  },
  {
    term: "IKE",
    full: "Internet Key Exchange",
    def: "Protocol that negotiates IPsec security associations and keys, usually over UDP 500.",
    domain: 3,
    group: "IPsec components",
    ref: { title: "RFC 7296: Internet Key Exchange Protocol Version 2 (IKEv2)", url: "https://www.rfc-editor.org/rfc/rfc7296" }
  },
  {
    term: "Tunnel mode",
    def: "IPsec mode that encrypts the entire original IP packet and adds a new IP header; used between gateways in site-to-site VPNs.",
    domain: 3,
    group: "IPsec components",
    ref: { title: "NIST CSRC Glossary: tunnel mode", url: "https://csrc.nist.gov/glossary/term/tunnel_mode" }
  },
  {
    term: "Transport mode",
    def: "IPsec mode that protects only the packet payload and keeps the original IP header; used for host-to-host communication.",
    domain: 3,
    group: "IPsec components",
    ref: { title: "NIST CSRC Glossary: transport mode", url: "https://csrc.nist.gov/glossary/term/transport_mode" }
  },
  {
    term: "Public data",
    def: "Information with no access restrictions that anyone may view, such as a published price list; also called unclassified.",
    domain: 3,
    group: "Data classifications",
    ref: { title: "Professor Messer SY0-701: Data Types and Classifications", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-types-and-classifications-sy0-701/" }
  },
  {
    term: "Restricted data",
    def: "Information that needs extra rights and permissions to access and may require signing an NDA; also called private or classified.",
    domain: 3,
    group: "Data classifications",
    ref: { title: "Professor Messer SY0-701: Data Types and Classifications", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-types-and-classifications-sy0-701/" }
  },
  {
    term: "Sensitive data",
    def: "Information such as intellectual property, PII, or PHI that would cause harm if disclosed and must be protected.",
    domain: 3,
    group: "Data classifications",
    ref: { title: "Professor Messer SY0-701: Data Types and Classifications", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-types-and-classifications-sy0-701/" }
  },
  {
    term: "Confidential data",
    def: "Very sensitive information that requires approval to view, whose disclosure would cause serious damage.",
    domain: 3,
    group: "Data classifications",
    ref: { title: "Professor Messer SY0-701: Data Types and Classifications", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-types-and-classifications-sy0-701/" }
  },
  {
    term: "Critical data",
    def: "Information that must always be available because the business cannot operate without it.",
    domain: 3,
    group: "Data classifications",
    ref: { title: "Professor Messer SY0-701: Data Types and Classifications", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-types-and-classifications-sy0-701/" }
  },
  {
    term: "PII",
    full: "Personally Identifiable Information",
    def: "Any data that can identify a specific individual, such as name, Social Security number, or biometric records.",
    domain: 3,
    group: "Data types",
    ref: { title: "NIST CSRC Glossary: personally identifiable information", url: "https://csrc.nist.gov/glossary/term/personally_identifiable_information" }
  },
  {
    term: "PHI",
    full: "Protected Health Information",
    def: "Individually identifiable health data, such as medical records and insurance details, protected under HIPAA.",
    domain: 3,
    group: "Data types",
    ref: { title: "NIST CSRC Glossary: protected health information", url: "https://csrc.nist.gov/glossary/term/protected_health_information" }
  },
  {
    term: "Trade secret",
    def: "Confidential business information, such as a formula or process, that gives a competitive advantage because it is kept secret rather than patented.",
    domain: 3,
    group: "Data types",
    ref: { title: "USPTO: Trade Secret Policy", url: "https://www.uspto.gov/ip-policy/trade-secret-policy" }
  },
  {
    term: "Intellectual property",
    def: "Creations of the mind, such as inventions, designs, and software, protected by patents, copyrights, and trademarks.",
    domain: 3,
    group: "Data types",
    ref: { title: "NIST CSRC Glossary: intellectual property", url: "https://csrc.nist.gov/glossary/term/intellectual_property" }
  },
  {
    term: "Regulated data",
    def: "Information whose handling rules are set by a third party, such as a government law or an industry standard like PCI DSS.",
    domain: 3,
    group: "Data types",
    ref: { title: "Professor Messer SY0-701: Data Types and Classifications", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-types-and-classifications-sy0-701/" }
  },
  {
    term: "Data at rest",
    def: "Data stored on a device or medium, such as a hard drive, database, or backup tape; protected with disk, file, or database encryption.",
    domain: 3,
    group: "Data considerations",
    ref: { title: "NIST CSRC Glossary: data at rest", url: "https://csrc.nist.gov/glossary/term/data_at_rest" }
  },
  {
    term: "Data in transit",
    def: "Data moving across a network between systems; protected with TLS, IPsec, or other encrypted protocols.",
    domain: 3,
    group: "Data considerations",
    ref: { title: "NIST CSRC Glossary: data in transit", url: "https://csrc.nist.gov/glossary/term/data_in_transit" }
  },
  {
    term: "Data in use",
    def: "Data actively being processed in memory or by the CPU, where it is usually unencrypted; protected by secure enclaves and memory protections.",
    domain: 3,
    group: "Data considerations",
    ref: { title: "Professor Messer SY0-701: States of Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/states-of-data-sy0-701/" }
  },
  {
    term: "Data sovereignty",
    def: "Principle that data is subject to the laws of the country where it is collected or stored.",
    domain: 3,
    group: "Data considerations",
    ref: { title: "Professor Messer SY0-701: States of Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/states-of-data-sy0-701/" }
  },
  {
    term: "Geographic restrictions",
    def: "Controls that allow or deny access to data based on the user's or device's physical location.",
    domain: 3,
    group: "Data considerations",
    ref: { title: "Professor Messer SY0-701: Protecting Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/protecting-data-sy0-701/" }
  },
  {
    term: "Data masking",
    def: "Hiding part of a value when it is displayed, such as showing only the last four digits of a card number (****1234).",
    domain: 3,
    group: "Data protection methods",
    ref: { title: "Professor Messer SY0-701: Protecting Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/protecting-data-sy0-701/" }
  },
  {
    term: "Tokenization",
    def: "Replacing sensitive data, such as a card number, with a random substitute value that maps back to the original only through a secure lookup vault.",
    domain: 3,
    group: "Data protection methods",
    ref: { title: "Professor Messer SY0-701: Protecting Data", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/protecting-data-sy0-701/" }
  },
  {
    term: "Obfuscation",
    def: "Making data or code deliberately hard to understand while it remains usable, such as scrambling program source code.",
    domain: 3,
    group: "Data protection methods",
    ref: { title: "Professor Messer SY0-701: Obfuscation", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/obfuscation-sy0-701/" }
  },
  {
    term: "Anonymization",
    def: "Permanently removing identifying details from data so the records can no longer be linked to individuals.",
    domain: 3,
    group: "Data protection methods",
    ref: { title: "NIST CSRC Glossary: anonymization", url: "https://csrc.nist.gov/glossary/term/anonymization" }
  },
  {
    term: "Hot site",
    def: "Fully equipped alternate facility with current data and running systems, ready to take over almost immediately; the most expensive option.",
    domain: 3,
    group: "Site resilience",
    ref: { title: "NIST CSRC Glossary: hot site", url: "https://csrc.nist.gov/glossary/term/hot_site" }
  },
  {
    term: "Warm site",
    def: "Alternate facility with power, network, and some hardware in place, but it needs data restoration and setup before use; ready in hours to days.",
    domain: 3,
    group: "Site resilience",
    ref: { title: "NIST CSRC Glossary: warm site", url: "https://csrc.nist.gov/glossary/term/warm_site" }
  },
  {
    term: "Cold site",
    def: "Alternate facility with only space, power, and environmental controls; equipment and data must be brought in, so recovery is slowest.",
    domain: 3,
    group: "Site resilience",
    ref: { title: "NIST CSRC Glossary: cold site", url: "https://csrc.nist.gov/glossary/term/cold_site" }
  },
  {
    term: "Geographic dispersion",
    def: "Locating backup sites and data centers far enough apart that one disaster, such as a hurricane, cannot affect all of them.",
    domain: 3,
    group: "Site resilience",
    ref: { title: "NIST SP 800-34r1: Contingency Planning Guide for Federal Information Systems", url: "https://csrc.nist.gov/pubs/sp/800/34/r1/final" }
  },
  {
    term: "High availability",
    def: "Design goal of keeping systems operational nearly all the time, often stated as uptime such as 99.999%, through redundancy and failover.",
    domain: 3,
    group: "Resilience concepts",
    ref: { title: "NIST CSRC Glossary: high availability", url: "https://csrc.nist.gov/glossary/term/high_availability" }
  },
  {
    term: "Clustering",
    def: "Grouping multiple servers so they act as one system and can take over each other's work if a member fails.",
    domain: 3,
    group: "Resilience concepts",
    ref: { title: "NIST CSRC Glossary: cluster", url: "https://csrc.nist.gov/glossary/term/cluster" }
  },
  {
    term: "Platform diversity",
    def: "Using different operating systems, vendors, or technologies so a single vulnerability cannot affect every system.",
    domain: 3,
    group: "Resilience concepts",
    ref: { title: "Professor Messer SY0-701: Resiliency", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/resiliency-sy0-701/" }
  },
  {
    term: "Multi-cloud",
    def: "Using services from more than one cloud provider so an outage or problem at one provider does not stop operations.",
    domain: 3,
    group: "Resilience concepts",
    ref: { title: "Professor Messer SY0-701: Resiliency", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/resiliency-sy0-701/" }
  },
  {
    term: "UPS",
    full: "Uninterruptible Power Supply",
    def: "Battery device that gives short-term power during an outage so systems keep running or shut down safely.",
    domain: 3,
    group: "Resilience concepts",
    ref: { title: "NIST CSRC Glossary: uninterruptible power supply", url: "https://csrc.nist.gov/glossary/term/uninterruptible_power_supply" }
  },
  {
    term: "Generator",
    def: "Fuel-powered device that supplies long-term electricity during extended outages, usually after batteries cover the startup delay.",
    domain: 3,
    group: "Resilience concepts",
    ref: { title: "Professor Messer SY0-701: Power Resiliency", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/power-resiliency-sy0-701/" }
  },
  {
    term: "Capacity planning",
    def: "Matching people, technology, and infrastructure resources to expected demand so the organization can handle growth and peaks.",
    domain: 3,
    group: "Resilience concepts",
    ref: { title: "Professor Messer SY0-701: Capacity Planning", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/capacity-planning-sy0-701/" }
  },
  {
    term: "Full backup",
    def: "Copies all selected data every time; takes the longest to create but restores from a single set.",
    domain: 3,
    group: "Backup types",
    ref: { title: "Professor Messer SY0-701: Backups", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/backups-sy0-701/" }
  },
  {
    term: "Incremental backup",
    def: "Copies only data changed since the last backup of any type; fast to create, but a restore needs the last full plus every later one in order.",
    domain: 3,
    group: "Backup types",
    ref: { title: "Professor Messer SY0-701: Backups", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/backups-sy0-701/" }
  },
  {
    term: "Differential backup",
    def: "Copies all data changed since the last full backup; a restore needs only the last full plus the most recent one of these.",
    domain: 3,
    group: "Backup types",
    ref: { title: "Professor Messer SY0-701: Backups", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/backups-sy0-701/" }
  },
  {
    term: "Snapshot",
    def: "Point-in-time capture of a system's or volume's state, common for virtual machines and cloud storage, allowing fast rollback.",
    domain: 3,
    group: "Backup types",
    ref: { title: "Professor Messer SY0-701: Backups", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/backups-sy0-701/" }
  },
  {
    term: "Replication",
    def: "Ongoing copying of data to another system or site so a near-current copy is always available.",
    domain: 3,
    group: "Backup types",
    ref: { title: "Professor Messer SY0-701: Backups", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/backups-sy0-701/" }
  },
  {
    term: "Journaling",
    def: "Writing changes to a separate log before applying them to the main data, so data can be recovered to a consistent state after a failure.",
    domain: 3,
    group: "Backup types",
    ref: { title: "Professor Messer SY0-701: Backups", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/backups-sy0-701/" }
  },
  {
    term: "Tabletop exercise",
    def: "Discussion-based session in which team members talk through a scenario and their roles and responses, without touching real systems.",
    domain: 3,
    group: "Resilience testing",
    ref: { title: "NIST CSRC Glossary: tabletop exercise", url: "https://csrc.nist.gov/glossary/term/tabletop_exercise" }
  },
  {
    term: "Simulation",
    def: "Exercise that mimics a real event, such as a fake phishing campaign or staged attack, to test people and processes in realistic conditions.",
    domain: 3,
    group: "Resilience testing",
    ref: { title: "Professor Messer SY0-701: Recovery Testing", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/recovery-testing-sy0-701/" }
  },
  {
    term: "Failover test",
    def: "Deliberately switching operations from a primary system to its redundant backup to confirm the switch works.",
    domain: 3,
    group: "Resilience testing",
    ref: { title: "Professor Messer SY0-701: Recovery Testing", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/recovery-testing-sy0-701/" }
  },
  {
    term: "Functional exercise",
    def: "Hands-on exercise in which staff perform their actual duties in a simulated operational setting to test specific plans or functions.",
    domain: 3,
    group: "Resilience testing",
    ref: { title: "NIST CSRC Glossary: functional exercise", url: "https://csrc.nist.gov/glossary/term/functional_exercise" }
  },
  {
    term: "SSH port",
    def: "TCP 22 — encrypted remote command-line login; SFTP and SCP file transfers also run over it.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "Telnet port",
    def: "TCP 23 — legacy remote terminal access that sends everything, including passwords, in cleartext.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "SMTP port",
    def: "TCP 25 — server-to-server email relay; clients usually submit outgoing mail on TCP 587 instead.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "DNS port",
    def: "UDP 53 for name lookups, and TCP 53 for zone transfers and large responses.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "HTTP port",
    def: "TCP 80 — unencrypted web traffic.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "HTTPS port",
    def: "TCP 443 — web traffic encrypted with TLS.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "Kerberos port",
    def: "TCP/UDP 88 — ticket-based authentication used by Active Directory domain controllers.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "LDAP port",
    def: "TCP 389 — unencrypted directory queries, for example to Active Directory.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "LDAPS port",
    def: "TCP 636 — directory queries protected with TLS.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "SMB port",
    def: "TCP 445 — Windows file and printer sharing; a common target for worms such as WannaCry.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "SNMP port",
    def: "UDP 161 for polling network devices for management data, and UDP 162 for traps that devices send to the manager.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "RDP port",
    def: "TCP 3389 — Microsoft Remote Desktop graphical remote access to Windows systems.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "RADIUS port",
    def: "UDP 1812 for authentication and UDP 1813 for accounting.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "Syslog port",
    def: "UDP 514 — sending log messages to a central collector; the TLS-protected version uses TCP 6514.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "FTP port",
    def: "TCP 21 for the control channel and TCP 20 for active-mode data; credentials and files travel in cleartext.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "IMAPS port",
    def: "TCP 993 — retrieving email from a mailbox server over TLS.",
    domain: 4,
    group: "Ports & protocols",
    ref: { title: "IANA Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" }
  },
  {
    term: "SSH",
    full: "Secure Shell",
    def: "Encrypted protocol for remote command-line login and administration; the secure replacement for Telnet.",
    domain: 4,
    group: "Secure protocols",
    ref: { title: "RFC 4253: The Secure Shell (SSH) Transport Layer Protocol", url: "https://www.rfc-editor.org/rfc/rfc4253" }
  },
  {
    term: "SFTP",
    full: "SSH File Transfer Protocol",
    def: "Transfers files inside an encrypted Secure Shell session, replacing insecure FTP.",
    domain: 4,
    group: "Secure protocols",
    ref: { title: "NIST CSRC Glossary: secure file transfer protocol", url: "https://csrc.nist.gov/glossary/term/secure_file_transfer_protocol" }
  },
  {
    term: "FTPS",
    full: "FTP Secure",
    def: "Adds TLS encryption to standard FTP, either implicitly on TCP 990 or explicitly by upgrading the TCP 21 control channel.",
    domain: 4,
    group: "Secure protocols",
    ref: { title: "RFC 4217: Securing FTP with TLS", url: "https://www.rfc-editor.org/rfc/rfc4217" }
  },
  {
    term: "SNMPv3",
    def: "Version of the network management protocol that adds authentication, message integrity, and encryption, unlike the community strings of v1 and v2c.",
    domain: 4,
    group: "Secure protocols",
    ref: { title: "RFC 3414: User-based Security Model (USM) for SNMPv3", url: "https://www.rfc-editor.org/rfc/rfc3414" }
  },
  {
    term: "DNSSEC",
    full: "DNS Security Extensions",
    def: "Adds digital signatures to DNS records so resolvers can verify they are authentic and unaltered; it does not encrypt queries.",
    domain: 4,
    group: "Secure protocols",
    ref: { title: "RFC 4033: DNS Security Introduction and Requirements", url: "https://www.rfc-editor.org/rfc/rfc4033" }
  },
  {
    term: "TLS",
    full: "Transport Layer Security",
    def: "Protocol that encrypts and authenticates application traffic such as HTTPS; replaced SSL, with versions 1.2 and 1.3 in current use.",
    domain: 4,
    group: "Secure protocols",
    ref: { title: "RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3", url: "https://www.rfc-editor.org/rfc/rfc8446" }
  },
  {
    term: "IPSec",
    full: "Internet Protocol Security",
    def: "Suite that authenticates and encrypts IP packets at Layer 3; widely used for site-to-site and remote-access VPNs.",
    domain: 4,
    group: "Secure protocols",
    ref: { title: "RFC 4301: Security Architecture for the Internet Protocol", url: "https://www.rfc-editor.org/rfc/rfc4301" }
  },
  {
    term: "S/MIME",
    full: "Secure/Multipurpose Internet Mail Extensions",
    def: "Uses certificates to digitally sign and encrypt email messages end to end.",
    domain: 4,
    group: "Secure protocols",
    ref: { title: "NIST CSRC Glossary: secure multipurpose internet mail extensions", url: "https://csrc.nist.gov/glossary/term/secure_multipurpose_internet_mail_extensions" }
  },
  {
    term: "SPF",
    full: "Sender Policy Framework",
    def: "DNS TXT record that lists the mail servers authorized to send email for a domain.",
    domain: 4,
    group: "Email security",
    ref: { title: "RFC 7208: Sender Policy Framework (SPF)", url: "https://www.rfc-editor.org/rfc/rfc7208" }
  },
  {
    term: "DKIM",
    full: "DomainKeys Identified Mail",
    def: "The sending server digitally signs outgoing messages, and receivers verify the signature with a public key published in DNS.",
    domain: 4,
    group: "Email security",
    ref: { title: "RFC 6376: DomainKeys Identified Mail (DKIM) Signatures", url: "https://www.rfc-editor.org/rfc/rfc6376" }
  },
  {
    term: "DMARC",
    full: "Domain-based Message Authentication, Reporting, and Conformance",
    def: "DNS policy that tells receivers what to do (none, quarantine, reject) when sender checks fail, and requests reports.",
    domain: 4,
    group: "Email security",
    ref: { title: "RFC 7489: Domain-based Message Authentication, Reporting, and Conformance", url: "https://www.rfc-editor.org/rfc/rfc7489" }
  },
  {
    term: "Email gateway",
    def: "Server or service that inspects inbound and outbound mail for spam, malware, phishing, and data leaks before delivery.",
    domain: 4,
    group: "Email security",
    ref: { title: "Professor Messer SY0-701: Email Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/email-security-sy0-701/" }
  },
  {
    term: "WPA2",
    full: "Wi-Fi Protected Access 2",
    def: "Wireless security standard using AES-CCMP; its pre-shared key mode is open to offline dictionary attacks on a captured handshake.",
    domain: 4,
    group: "Wireless security",
    ref: { title: "Professor Messer SY0-701: Wireless Security Settings", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/wireless-security-settings-sy0-701/" }
  },
  {
    term: "WPA3",
    full: "Wi-Fi Protected Access 3",
    def: "Current wireless security standard that replaces the pre-shared key handshake with SAE and requires protected management frames.",
    domain: 4,
    group: "Wireless security",
    ref: { title: "Professor Messer SY0-701: Wireless Security Settings", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/wireless-security-settings-sy0-701/" }
  },
  {
    term: "SAE",
    full: "Simultaneous Authentication of Equals",
    def: "WPA3 personal key exchange (Dragonfly) that resists offline dictionary attacks and provides forward secrecy.",
    domain: 4,
    group: "Wireless security",
    ref: { title: "Professor Messer SY0-701: Wireless Security Settings", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/wireless-security-settings-sy0-701/" }
  },
  {
    term: "PEAP",
    full: "Protected Extensible Authentication Protocol",
    def: "Wraps authentication in a TLS tunnel set up with a server certificate, often with MSCHAPv2 inside; clients need no certificate.",
    domain: 4,
    group: "Wireless security",
    ref: { title: "NIST CSRC Glossary: protected extensible authentication protocol", url: "https://csrc.nist.gov/glossary/term/protected_extensible_authentication_protocol" }
  },
  {
    term: "EAP-TLS",
    def: "802.1X authentication method that requires certificates on both the server and the client; the most secure common method.",
    domain: 4,
    group: "Wireless security",
    ref: { title: "RFC 5216: The EAP-TLS Authentication Protocol", url: "https://www.rfc-editor.org/rfc/rfc5216" }
  },
  {
    term: "Heat map",
    def: "Visual map of wireless signal strength across a site, produced during a site survey, used to place access points and find dead zones.",
    domain: 4,
    group: "Wireless security",
    ref: { title: "Professor Messer SY0-701: Securing Wireless and Mobile", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/securing-wireless-and-mobile-sy0-701/" }
  },
  {
    term: "RADIUS",
    full: "Remote Authentication Dial-In User Service",
    def: "Open-standard AAA protocol over UDP that hides only the password; widely used for 802.1X and VPN logins.",
    domain: 4,
    group: "Authentication protocols",
    ref: { title: "RFC 2865: Remote Authentication Dial In User Service (RADIUS)", url: "https://www.rfc-editor.org/rfc/rfc2865" }
  },
  {
    term: "TACACS+",
    full: "Terminal Access Controller Access-Control System Plus",
    def: "Cisco-developed AAA protocol over TCP 49 that encrypts the whole payload and separates authentication, authorization, and accounting.",
    domain: 4,
    group: "Authentication protocols",
    ref: { title: "NIST CSRC Glossary: terminal access controller access control system", url: "https://csrc.nist.gov/glossary/term/terminal_access_controller_access_control_system" }
  },
  {
    term: "Kerberos",
    def: "Ticket-based network authentication protocol that uses a trusted key distribution center; the default authentication method in Active Directory.",
    domain: 4,
    group: "Authentication protocols",
    ref: { title: "RFC 4120: The Kerberos Network Authentication Service (V5)", url: "https://www.rfc-editor.org/rfc/rfc4120" }
  },
  {
    term: "LDAP",
    full: "Lightweight Directory Access Protocol",
    def: "Protocol for querying and modifying directory services such as Active Directory.",
    domain: 4,
    group: "Authentication protocols",
    ref: { title: "RFC 4511: Lightweight Directory Access Protocol (LDAP): The Protocol", url: "https://www.rfc-editor.org/rfc/rfc4511" }
  },
  {
    term: "802.1X",
    def: "IEEE standard for port-based network access control: a supplicant must authenticate through the authenticator to a RADIUS server before getting network access.",
    domain: 4,
    group: "Authentication protocols",
    ref: { title: "Professor Messer SY0-701: Port Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/port-security-sy0-701/" }
  },
  {
    term: "EAP",
    full: "Extensible Authentication Protocol",
    def: "Authentication framework, not one method, that supports many methods such as certificate- or tunnel-based ones; carried by 802.1X on LANs and Wi-Fi.",
    domain: 4,
    group: "Authentication protocols",
    ref: { title: "NIST CSRC Glossary: extensible authentication protocol", url: "https://csrc.nist.gov/glossary/term/extensible_authentication_protocol" }
  },
  {
    term: "SAML",
    full: "Security Assertion Markup Language",
    def: "XML-based open standard that passes signed authentication and authorization assertions from an identity provider to a service provider for web SSO.",
    domain: 4,
    group: "Identity & federation",
    ref: { title: "OASIS: Security Assertion Markup Language (SAML) V2.0 Technical Overview", url: "https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html" }
  },
  {
    term: "OAuth",
    def: "Open authorization framework that lets an app access a user's resources on another service with a limited access token, without the user's password; it handles authorization, not authentication.",
    domain: 4,
    group: "Identity & federation",
    ref: { title: "RFC 6749: The OAuth 2.0 Authorization Framework", url: "https://www.rfc-editor.org/rfc/rfc6749" }
  },
  {
    term: "OIDC",
    full: "OpenID Connect",
    def: "Identity layer built on OAuth 2.0 that adds authentication, giving apps an ID token (a JWT) with user identity details.",
    domain: 4,
    group: "Identity & federation",
    ref: { title: "OpenID Foundation: How OpenID Connect Works", url: "https://openid.net/developers/how-connect-works/" }
  },
  {
    term: "SSO",
    full: "Single Sign-On",
    def: "The user authenticates once and then gets access to multiple related systems without logging in again.",
    domain: 4,
    group: "Identity & federation",
    ref: { title: "NIST CSRC Glossary: single sign on", url: "https://csrc.nist.gov/glossary/term/single_sign_on" }
  },
  {
    term: "Federation",
    def: "Trust relationship between separate organizations or domains so users authenticated by one can access resources in another.",
    domain: 4,
    group: "Identity & federation",
    ref: { title: "NIST CSRC Glossary: identity federation", url: "https://csrc.nist.gov/glossary/term/identity_federation" }
  },
  {
    term: "MAC",
    full: "Mandatory Access Control",
    def: "The system enforces access using security labels (such as Secret or Top Secret) set by administrators; users cannot change permissions.",
    domain: 4,
    group: "Access control models",
    ref: { title: "NIST CSRC Glossary: mandatory access control", url: "https://csrc.nist.gov/glossary/term/mandatory_access_control" }
  },
  {
    term: "DAC",
    full: "Discretionary Access Control",
    def: "The owner of a resource decides who can access it and grants permissions directly, as with typical file sharing.",
    domain: 4,
    group: "Access control models",
    ref: { title: "NIST CSRC Glossary: discretionary access control", url: "https://csrc.nist.gov/glossary/term/discretionary_access_control" }
  },
  {
    term: "RBAC",
    full: "Role-Based Access Control",
    def: "Permissions are assigned to job roles, and users gain access by being placed in the matching role or group.",
    domain: 4,
    group: "Access control models",
    ref: { title: "NIST CSRC Glossary: role based access control", url: "https://csrc.nist.gov/glossary/term/role_based_access_control" }
  },
  {
    term: "Rule-based access control",
    def: "Access decided by system-wide rules set by administrators, such as firewall rules or a rule that blocks logins outside business hours.",
    domain: 4,
    group: "Access control models",
    ref: { title: "Professor Messer SY0-701: Access Controls", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/access-controls-sy0-701/" }
  },
  {
    term: "ABAC",
    full: "Attribute-Based Access Control",
    def: "Decisions combine many attributes of the user, resource, action, and environment, such as department, location, and time.",
    domain: 4,
    group: "Access control models",
    ref: { title: "NIST CSRC Glossary: attribute based access control", url: "https://csrc.nist.gov/glossary/term/attribute_based_access_control" }
  },
  {
    term: "Something you know",
    def: "Authentication factor based on knowledge, such as a password, PIN, or answer to a security question.",
    domain: 4,
    group: "MFA factors",
    ref: { title: "Professor Messer SY0-701: Multifactor Authentication", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/multifactor-authentication-sy0-701/" }
  },
  {
    term: "Something you have",
    def: "Authentication factor based on possession, such as a smart card, hardware token, or phone that receives a code.",
    domain: 4,
    group: "MFA factors",
    ref: { title: "Professor Messer SY0-701: Multifactor Authentication", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/multifactor-authentication-sy0-701/" }
  },
  {
    term: "Something you are",
    def: "Authentication factor based on a biometric trait, such as a fingerprint, face, or iris.",
    domain: 4,
    group: "MFA factors",
    ref: { title: "Professor Messer SY0-701: Multifactor Authentication", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/multifactor-authentication-sy0-701/" }
  },
  {
    term: "Somewhere you are",
    def: "Authentication factor based on location, such as GPS position or IP address, used to allow or deny a login.",
    domain: 4,
    group: "MFA factors",
    ref: { title: "Professor Messer SY0-701: Multifactor Authentication", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/multifactor-authentication-sy0-701/" }
  },
  {
    term: "HOTP",
    full: "HMAC-based One-Time Password",
    def: "Code generated from a shared secret and an incrementing counter; each code stays valid until it is used.",
    domain: 4,
    group: "Authentication methods",
    ref: { title: "RFC 4226: HOTP: An HMAC-Based One-Time Password Algorithm", url: "https://www.rfc-editor.org/rfc/rfc4226" }
  },
  {
    term: "TOTP",
    full: "Time-based One-Time Password",
    def: "Code generated from a shared secret and the current time, typically changing every 30 seconds.",
    domain: 4,
    group: "Authentication methods",
    ref: { title: "RFC 6238: TOTP: Time-Based One-Time Password Algorithm", url: "https://www.rfc-editor.org/rfc/rfc6238" }
  },
  {
    term: "Security key",
    def: "Physical USB, NFC, or Bluetooth device that proves possession with public-key challenge-response (FIDO2/WebAuthn), which resists phishing.",
    domain: 4,
    group: "Authentication methods",
    ref: { title: "Professor Messer SY0-701: Multifactor Authentication", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/multifactor-authentication-sy0-701/" }
  },
  {
    term: "Passwordless authentication",
    def: "Login without any memorized secret, using methods such as passkeys, biometrics, or a hardware authenticator.",
    domain: 4,
    group: "Authentication methods",
    ref: { title: "Professor Messer SY0-701: Password Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/password-security-sy0-701/" }
  },
  {
    term: "IAM",
    full: "Identity and Access Management",
    def: "Processes and tools that create and manage digital identities and control which resources each identity can reach.",
    domain: 4,
    group: "Identity management",
    ref: { title: "NIST CSRC Glossary: identity and access management", url: "https://csrc.nist.gov/glossary/term/identity_and_access_management" }
  },
  {
    term: "Provisioning",
    def: "Creating user accounts and assigning the access a person needs when they join or change roles.",
    domain: 4,
    group: "Identity management",
    ref: { title: "Professor Messer SY0-701: Identity and Access Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/identity-and-access-management-sy0-701/" }
  },
  {
    term: "Deprovisioning",
    def: "Disabling or removing accounts and access promptly when a user leaves or no longer needs them.",
    domain: 4,
    group: "Identity management",
    ref: { title: "Professor Messer SY0-701: Identity and Access Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/identity-and-access-management-sy0-701/" }
  },
  {
    term: "Identity proofing",
    def: "Verifying that people are who they claim to be, with evidence such as a government ID, before issuing credentials.",
    domain: 4,
    group: "Identity management",
    ref: { title: "NIST CSRC Glossary: identity proofing", url: "https://csrc.nist.gov/glossary/term/identity_proofing" }
  },
  {
    term: "Time-of-day restrictions",
    def: "Access rule that allows logins or resource use only during set hours, such as business hours.",
    domain: 4,
    group: "Identity management",
    ref: { title: "Professor Messer SY0-701: Segmentation and Access Control", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/segmentation-and-access-control-sy0-701/" }
  },
  {
    term: "PAM",
    full: "Privileged Access Management",
    def: "Tools and processes that secure, control, and monitor administrator and other elevated accounts.",
    domain: 4,
    group: "Privileged access management",
    ref: { title: "NIST CSRC Glossary: privileged access management", url: "https://csrc.nist.gov/glossary/term/privileged_access_management" }
  },
  {
    term: "Just-in-time permissions",
    def: "Granting elevated access only when it is needed and only for a limited time, then removing it automatically.",
    domain: 4,
    group: "Privileged access management",
    ref: { title: "Professor Messer SY0-701: Password Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/password-security-sy0-701/" }
  },
  {
    term: "Password vaulting",
    def: "Storing privileged account passwords in a secured, audited repository so admins check them out rather than knowing them.",
    domain: 4,
    group: "Privileged access management",
    ref: { title: "Professor Messer SY0-701: Password Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/password-security-sy0-701/" }
  },
  {
    term: "Ephemeral credentials",
    def: "Temporary credentials created for one session or task that expire automatically afterward.",
    domain: 4,
    group: "Privileged access management",
    ref: { title: "Professor Messer SY0-701: Password Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/password-security-sy0-701/" }
  },
  {
    term: "EDR",
    full: "Endpoint Detection and Response",
    def: "Agent-based tool that monitors endpoint behavior, detects threats beyond signatures, and can isolate hosts and roll back changes.",
    domain: 4,
    group: "Endpoint security tools",
    ref: { title: "NIST CSRC Glossary: endpoint detection and response", url: "https://csrc.nist.gov/glossary/term/endpoint_detection_and_response" }
  },
  {
    term: "XDR",
    full: "Extended Detection and Response",
    def: "Correlates detection data from endpoints, network, cloud, and email in one platform for broader visibility than endpoint-only tools.",
    domain: 4,
    group: "Endpoint security tools",
    ref: { title: "NIST CSRC Glossary: extended detection and response", url: "https://csrc.nist.gov/glossary/term/extended_detection_and_response" }
  },
  {
    term: "FIM",
    full: "File Integrity Monitoring",
    def: "Detects unauthorized changes to critical system files and configurations by comparing them with known-good hashes.",
    domain: 4,
    group: "Endpoint security tools",
    ref: { title: "NIST CSRC Glossary: file integrity monitoring", url: "https://csrc.nist.gov/glossary/term/file_integrity_monitoring" }
  },
  {
    term: "DLP",
    full: "Data Loss Prevention",
    def: "Detects and blocks sensitive data, such as card numbers or PII, from leaving the organization through email, USB, web uploads, or cloud services.",
    domain: 4,
    group: "Endpoint security tools",
    ref: { title: "NIST CSRC Glossary: data loss prevention", url: "https://csrc.nist.gov/glossary/term/data_loss_prevention" }
  },
  {
    term: "UBA",
    full: "User Behavior Analytics",
    def: "Builds baselines of normal user activity to detect anomalies, such as unusual login times or unusual data access.",
    domain: 4,
    group: "Endpoint security tools",
    ref: { title: "NIST CSRC Glossary: user and entity behavior analytics", url: "https://csrc.nist.gov/glossary/term/user_and_entity_behavior_analytics" }
  },
  {
    term: "IDS",
    full: "Intrusion Detection System",
    def: "Passive monitor that alerts on suspicious network traffic but cannot block it, usually fed by a tap or SPAN port.",
    domain: 4,
    group: "Intrusion detection & prevention",
    ref: { title: "NIST CSRC Glossary: intrusion detection system", url: "https://csrc.nist.gov/glossary/term/intrusion_detection_system" }
  },
  {
    term: "IPS",
    full: "Intrusion Prevention System",
    def: "Sits inline in the network traffic path so it can drop or block malicious packets in real time, not just alert.",
    domain: 4,
    group: "Intrusion detection & prevention",
    ref: { title: "NIST CSRC Glossary: intrusion prevention system", url: "https://csrc.nist.gov/glossary/term/intrusion_prevention_system" }
  },
  {
    term: "HIDS",
    full: "Host-based Intrusion Detection System",
    def: "Software on one computer that monitors its logs, files, and processes and alerts on signs of intrusion.",
    domain: 4,
    group: "Intrusion detection & prevention",
    ref: { title: "NIST SP 800-94: Guide to Intrusion Detection and Prevention Systems", url: "https://csrc.nist.gov/pubs/sp/800/94/final" }
  },
  {
    term: "HIPS",
    full: "Host-based Intrusion Prevention System",
    def: "Software on one endpoint that actively blocks malicious activity on that host, such as exploit attempts or unauthorized changes.",
    domain: 4,
    group: "Intrusion detection & prevention",
    ref: { title: "NIST SP 800-94: Guide to Intrusion Detection and Prevention Systems", url: "https://csrc.nist.gov/pubs/sp/800/94/final" }
  },
  {
    term: "Signature-based detection",
    def: "Finds known threats by matching traffic or files against patterns of previously identified attacks; misses new, unknown attacks.",
    domain: 4,
    group: "Intrusion detection & prevention",
    ref: { title: "NIST SP 800-94: Guide to Intrusion Detection and Prevention Systems", url: "https://csrc.nist.gov/pubs/sp/800/94/final" }
  },
  {
    term: "Anomaly-based detection",
    def: "Finds deviations from a learned baseline of normal behavior, so it can catch new attacks but produces more false positives.",
    domain: 4,
    group: "Intrusion detection & prevention",
    ref: { title: "NIST SP 800-94: Guide to Intrusion Detection and Prevention Systems", url: "https://csrc.nist.gov/pubs/sp/800/94/final" }
  },
  {
    term: "NAC",
    full: "Network Access Control",
    def: "Checks a device's identity and security posture, such as patch level, before allowing it on the network, and can quarantine non-compliant devices.",
    domain: 4,
    group: "Firewall & network appliances",
    ref: { title: "NIST CSRC Glossary: network access control", url: "https://csrc.nist.gov/glossary/term/network_access_control" }
  },
  {
    term: "Web filter",
    def: "Control that blocks access to websites by URL, category, or reputation, through an agent on each device or a central proxy.",
    domain: 4,
    group: "Firewall & network appliances",
    ref: { title: "Professor Messer SY0-701: Web Filtering", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/web-filtering-sy0-701/" }
  },
  {
    term: "DNS filtering",
    def: "Blocking name resolution for known malicious or prohibited domains so users and malware cannot reach them.",
    domain: 4,
    group: "Firewall & network appliances",
    ref: { title: "Professor Messer SY0-701: Web Filtering", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/web-filtering-sy0-701/" }
  },
  {
    term: "SIEM",
    full: "Security Information and Event Management",
    def: "Collects and correlates logs from many sources in real time to generate alerts, dashboards, and reports.",
    domain: 4,
    group: "Monitoring & SIEM tools",
    ref: { title: "NIST CSRC Glossary: security information and event management", url: "https://csrc.nist.gov/glossary/term/security_information_and_event_management" }
  },
  {
    term: "NetFlow",
    def: "Protocol that records metadata about traffic flows, such as source, destination, ports, and byte counts, but not packet contents.",
    domain: 4,
    group: "Monitoring & SIEM tools",
    ref: { title: "RFC 3954: Cisco Systems NetFlow Services Export Version 9", url: "https://www.rfc-editor.org/rfc/rfc3954" }
  },
  {
    term: "SNMP trap",
    def: "Unsolicited alert that a managed network device sends to the management station when a specific event occurs.",
    domain: 4,
    group: "Monitoring & SIEM tools",
    ref: { title: "Professor Messer SY0-701: Security Tools", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-tools-sy0-701/" }
  },
  {
    term: "SCAP",
    full: "Security Content Automation Protocol",
    def: "NIST suite of standards (such as CVE, CVSS, and XCCDF) that lets tools automatically check systems for vulnerabilities and compliant configuration.",
    domain: 4,
    group: "Monitoring & SIEM tools",
    ref: { title: "NIST CSRC Glossary: security content automation protocol", url: "https://csrc.nist.gov/glossary/term/security_content_automation_protocol" }
  },
  {
    term: "Packet capture",
    def: "Recording full network packets, including payloads, for detailed analysis with tools such as Wireshark or tcpdump.",
    domain: 4,
    group: "Monitoring & SIEM tools",
    ref: { title: "NIST CSRC Glossary: packet capture", url: "https://csrc.nist.gov/glossary/term/packet_capture" }
  },
  {
    term: "Syslog",
    def: "Standard protocol and message format for sending log events from devices to a central collector.",
    domain: 4,
    group: "Monitoring & SIEM tools",
    ref: { title: "RFC 5424: The Syslog Protocol", url: "https://www.rfc-editor.org/rfc/rfc5424" }
  },
  {
    term: "Log aggregation",
    def: "Collecting logs from many systems into one central location, in a common format, for searching and correlation.",
    domain: 4,
    group: "Monitoring activities",
    ref: { title: "Professor Messer SY0-701: Security Monitoring", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-monitoring-sy0-701/" }
  },
  {
    term: "Alert tuning",
    def: "Adjusting detection rules and thresholds to reduce false positives without missing real incidents.",
    domain: 4,
    group: "Monitoring activities",
    ref: { title: "Professor Messer SY0-701: Security Monitoring", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-monitoring-sy0-701/" }
  },
  {
    term: "Threat hunting",
    def: "Proactively searching networks and systems for attackers or weaknesses that existing automated alerts have not found.",
    domain: 4,
    group: "Monitoring activities",
    ref: { title: "Professor Messer SY0-701: Incident Planning", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-planning-sy0-701/" }
  },
  {
    term: "Root cause analysis",
    def: "Investigating an incident to find the underlying reason it happened, so it can be fixed and prevented from recurring.",
    domain: 4,
    group: "Monitoring activities",
    ref: { title: "NIST CSRC Glossary: root cause analysis", url: "https://csrc.nist.gov/glossary/term/root_cause_analysis" }
  },
  {
    term: "CVE",
    full: "Common Vulnerabilities and Exposures",
    def: "Public catalog that gives each publicly disclosed vulnerability a unique identifier so everyone refers to it the same way.",
    domain: 4,
    group: "Vulnerability management",
    ref: { title: "CVE Program", url: "https://www.cve.org/" }
  },
  {
    term: "CVSS",
    full: "Common Vulnerability Scoring System",
    def: "FIRST standard that rates vulnerability severity from 0.0 to 10.0 based on exploitability and impact.",
    domain: 4,
    group: "Vulnerability management",
    ref: { title: "FIRST: Common Vulnerability Scoring System", url: "https://www.first.org/cvss/" }
  },
  {
    term: "NVD",
    full: "National Vulnerability Database",
    def: "U.S. government repository run by NIST that adds severity scores and affected-product data to public vulnerability records.",
    domain: 4,
    group: "Vulnerability management",
    ref: { title: "NIST National Vulnerability Database", url: "https://nvd.nist.gov/" }
  },
  {
    term: "False positive",
    def: "A scan or alert reports a vulnerability or threat that does not actually exist.",
    domain: 4,
    group: "Vulnerability management",
    ref: { title: "NIST CSRC Glossary: false positive", url: "https://csrc.nist.gov/glossary/term/false_positive" }
  },
  {
    term: "False negative",
    def: "A real vulnerability or threat goes undetected, so no alert is raised; dangerous because it gives false assurance.",
    domain: 4,
    group: "Vulnerability management",
    ref: { title: "NIST CSRC Glossary: false negative", url: "https://csrc.nist.gov/glossary/term/false_negative" }
  },
  {
    term: "Bug bounty program",
    def: "Program that pays outside researchers for responsibly reporting security flaws they find in an organization's products or services.",
    domain: 4,
    group: "Vulnerability management",
    ref: { title: "NIST CSRC Glossary: bug bounty", url: "https://csrc.nist.gov/glossary/term/bug_bounty" }
  },
  {
    term: "KEV catalog",
    def: "CISA's Known Exploited Vulnerabilities list of flaws confirmed to be exploited in the wild, used to prioritize remediation.",
    domain: 4,
    group: "Vulnerability management",
    ref: { title: "CISA: Known Exploited Vulnerabilities Catalog", url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog" }
  },
  {
    term: "Static code analysis",
    def: "Reviewing source code without running it (SAST) to find flaws such as injection risks early in development.",
    domain: 4,
    group: "Application security",
    ref: { title: "OWASP: Source Code Analysis Tools", url: "https://owasp.org/www-community/Source_Code_Analysis_Tools" }
  },
  {
    term: "Dynamic analysis",
    def: "Testing a running application (DAST) by sending inputs and watching responses, to find flaws that appear only at runtime.",
    domain: 4,
    group: "Application security",
    ref: { title: "Professor Messer SY0-701: Application Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/application-security-sy0-701/" }
  },
  {
    term: "Fuzzing",
    def: "Sending large amounts of random or malformed input to a program to find crashes and unexpected behavior that reveal flaws.",
    domain: 4,
    group: "Application security",
    ref: { title: "OWASP: Fuzzing", url: "https://owasp.org/www-community/Fuzzing" }
  },
  {
    term: "Code signing",
    def: "Digitally signing software with a developer's certificate so users can verify who published it and that it was not altered.",
    domain: 4,
    group: "Application security",
    ref: { title: "Professor Messer SY0-701: Application Security", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/application-security-sy0-701/" }
  },
  {
    term: "Sandboxing",
    def: "Running untrusted code in an isolated environment with no access to the rest of the system, limiting any damage.",
    domain: 4,
    group: "Application security",
    ref: { title: "NIST CSRC Glossary: sandbox", url: "https://csrc.nist.gov/glossary/term/sandbox" }
  },
  {
    term: "Input validation",
    def: "Checking that user-supplied data matches the expected type, length, and format before processing it; a key defense against injection.",
    domain: 4,
    group: "Application security",
    ref: { title: "OWASP Input Validation Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html" }
  },
  {
    term: "SBOM",
    full: "Software Bill of Materials",
    def: "Inventory of all components and libraries in a piece of software, used to find exposure to vulnerable dependencies.",
    domain: 4,
    group: "Application security",
    ref: { title: "CISA: Software Bill of Materials", url: "https://www.cisa.gov/sbom" }
  },
  {
    term: "OSINT",
    full: "Open-Source Intelligence",
    def: "Information gathered from publicly available sources such as websites, social media, and public records.",
    domain: 4,
    group: "Threat intelligence",
    ref: { title: "Professor Messer SY0-701: Threat Intelligence", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-intelligence-sy0-701/" }
  },
  {
    term: "TTP",
    full: "Tactics, Techniques, and Procedures",
    def: "The behavior patterns an adversary uses, as catalogued in MITRE ATT&CK.",
    domain: 4,
    group: "Threat intelligence",
    ref: { title: "NIST CSRC Glossary: tactics techniques and procedures", url: "https://csrc.nist.gov/glossary/term/tactics_techniques_and_procedures" }
  },
  {
    term: "IoC",
    full: "Indicator of Compromise",
    def: "Forensic artifact, such as a malicious IP address, file hash, or domain, showing that a system may have been breached.",
    domain: 4,
    group: "Threat intelligence",
    ref: { title: "NIST CSRC Glossary: indicator of compromise", url: "https://csrc.nist.gov/glossary/term/indicator_of_compromise" }
  },
  {
    term: "ISAC",
    full: "Information Sharing and Analysis Center",
    def: "Industry-specific group, for example for finance or energy, where members share threat intelligence.",
    domain: 4,
    group: "Threat intelligence",
    ref: { title: "NIST CSRC Glossary: information sharing and analysis center", url: "https://csrc.nist.gov/glossary/term/information_sharing_and_analysis_center" }
  },
  {
    term: "Dark web",
    def: "Hidden part of the internet reached through tools like Tor, where stolen data and attack tools are traded; monitored as an intelligence source.",
    domain: 4,
    group: "Threat intelligence",
    ref: { title: "Professor Messer SY0-701: Threat Intelligence", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-intelligence-sy0-701/" }
  },
  {
    term: "Sanitization",
    def: "Removing data from media so it cannot be recovered; NIST SP 800-88 defines clear, purge, and destroy levels.",
    domain: 4,
    group: "Asset management",
    ref: { title: "NIST SP 800-88r1: Guidelines for Media Sanitization", url: "https://csrc.nist.gov/pubs/sp/800/88/r1/final" }
  },
  {
    term: "Degaussing",
    def: "Erasing magnetic media with a strong magnetic field, which also makes hard drives unusable; it does not work on SSDs.",
    domain: 4,
    group: "Asset management",
    ref: { title: "NIST CSRC Glossary: degauss", url: "https://csrc.nist.gov/glossary/term/degauss" }
  },
  {
    term: "Certificate of destruction",
    def: "Document from a disposal vendor confirming that specific media or devices were destroyed.",
    domain: 4,
    group: "Asset management",
    ref: { title: "Professor Messer SY0-701: Asset Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/asset-management-sy0-701/" }
  },
  {
    term: "Data retention",
    def: "Rules for how long data must be kept to meet legal, regulatory, and business needs before it is securely deleted.",
    domain: 4,
    group: "Asset management",
    ref: { title: "Professor Messer SY0-701: Asset Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/asset-management-sy0-701/" }
  },
  {
    term: "Asset inventory",
    def: "Up-to-date list of hardware and software assets with their owners and locations; the basis for knowing what must be protected.",
    domain: 4,
    group: "Asset management",
    ref: { title: "Professor Messer SY0-701: Asset Management", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/asset-management-sy0-701/" }
  },
  {
    term: "Secure baseline",
    def: "Approved, documented set of security settings that systems must match, used to configure them and later check them for drift.",
    domain: 4,
    group: "Hardening & baselines",
    ref: { title: "NIST CSRC Glossary: baseline configuration", url: "https://csrc.nist.gov/glossary/term/baseline_configuration" }
  },
  {
    term: "CIS Benchmarks",
    def: "Consensus-based secure configuration guides for operating systems, cloud platforms, and applications, published by a nonprofit security organization.",
    domain: 4,
    group: "Hardening & baselines",
    ref: { title: "CIS Benchmarks", url: "https://www.cisecurity.org/cis-benchmarks" }
  },
  {
    term: "Group Policy",
    def: "Windows Active Directory feature that centrally pushes security settings, such as password rules, to domain computers and users.",
    domain: 4,
    group: "Hardening & baselines",
    ref: { title: "Microsoft Learn: Group Policy overview", url: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/group-policy/group-policy-overview" }
  },
  {
    term: "SELinux",
    def: "Linux kernel security module that enforces mandatory access control, confining processes even when they run as root.",
    domain: 4,
    group: "Hardening & baselines",
    ref: { title: "Red Hat: What is SELinux?", url: "https://www.redhat.com/en/topics/linux/what-is-selinux" }
  },
  {
    term: "Host-based firewall",
    def: "Software firewall on an individual device that controls traffic in and out of that device only.",
    domain: 4,
    group: "Hardening & baselines",
    ref: { title: "NIST CSRC Glossary: host based firewall", url: "https://csrc.nist.gov/glossary/term/host_based_firewall" }
  },
  {
    term: "MDM",
    full: "Mobile Device Management",
    def: "Centrally enforces policies on phones and tablets, such as screen locks, encryption, app control, and remote wipe.",
    domain: 4,
    group: "Mobile security",
    ref: { title: "NIST CSRC Glossary: mobile device management", url: "https://csrc.nist.gov/glossary/term/mobile_device_management" }
  },
  {
    term: "BYOD",
    full: "Bring Your Own Device",
    def: "Employees use their personal devices for work, often with MDM containerization to separate corporate data.",
    domain: 4,
    group: "Mobile security",
    ref: { title: "NIST CSRC Glossary: bring your own device", url: "https://csrc.nist.gov/glossary/term/bring_your_own_device" }
  },
  {
    term: "COPE",
    full: "Corporate-Owned, Personally Enabled",
    def: "The company buys and manages the device but allows personal use.",
    domain: 4,
    group: "Mobile security",
    ref: { title: "Professor Messer SY0-701: Securing Wireless and Mobile", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/securing-wireless-and-mobile-sy0-701/" }
  },
  {
    term: "CYOD",
    full: "Choose Your Own Device",
    def: "Employees pick a device from an approved list, and the company owns and manages it.",
    domain: 4,
    group: "Mobile security",
    ref: { title: "Professor Messer SY0-701: Securing Wireless and Mobile", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/securing-wireless-and-mobile-sy0-701/" }
  },
  {
    term: "Preparation",
    def: "First incident response phase: building the capability before incidents, including plans, contact lists, tools, and training.",
    domain: 4,
    group: "IR phases",
    ref: { title: "Professor Messer SY0-701: Incident Response", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-response-sy0-701/" }
  },
  {
    term: "Detection",
    def: "Incident response phase of noticing that an incident may have occurred, from alerts, logs, or user reports.",
    domain: 4,
    group: "IR phases",
    ref: { title: "Professor Messer SY0-701: Incident Response", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-response-sy0-701/" }
  },
  {
    term: "Analysis",
    def: "Incident response phase of validating, scoping, and prioritizing an event to determine what happened and its impact.",
    domain: 4,
    group: "IR phases",
    ref: { title: "Professor Messer SY0-701: Incident Response", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-response-sy0-701/" }
  },
  {
    term: "Containment",
    def: "Incident response phase that limits the spread and damage, for example by isolating affected hosts, while preserving evidence.",
    domain: 4,
    group: "IR phases",
    ref: { title: "Professor Messer SY0-701: Incident Response", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-response-sy0-701/" }
  },
  {
    term: "Eradication",
    def: "Incident response phase that removes the cause, such as deleting malware and disabling breached accounts.",
    domain: 4,
    group: "IR phases",
    ref: { title: "Professor Messer SY0-701: Incident Response", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-response-sy0-701/" }
  },
  {
    term: "Recovery",
    def: "Incident response phase that returns systems to normal operation, for example by restoring from backups, and confirms they work and are clean.",
    domain: 4,
    group: "IR phases",
    ref: { title: "Professor Messer SY0-701: Incident Response", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-response-sy0-701/" }
  },
  {
    term: "Lessons learned",
    def: "Final incident response phase: a post-incident review held soon after the event to improve processes and controls.",
    domain: 4,
    group: "IR phases",
    ref: { title: "Professor Messer SY0-701: Incident Response", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-response-sy0-701/" }
  },
  {
    term: "Legal hold",
    def: "Notice requiring an organization to preserve all data relevant to expected litigation, overriding normal deletion schedules.",
    domain: 4,
    group: "Forensics",
    ref: { title: "Professor Messer SY0-701: Digital Forensics", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/digital-forensics-sy0-701/" }
  },
  {
    term: "Chain of custody",
    def: "Documented record of who collected, handled, and transferred each piece of evidence and when, proving it was not altered.",
    domain: 4,
    group: "Forensics",
    ref: { title: "NIST CSRC Glossary: chain of custody", url: "https://csrc.nist.gov/glossary/term/chain_of_custody" }
  },
  {
    term: "Order of volatility",
    def: "Collecting evidence from the most short-lived sources first, such as CPU cache and RAM, before disks and archival media.",
    domain: 4,
    group: "Forensics",
    ref: { title: "RFC 3227: Guidelines for Evidence Collection and Archiving", url: "https://www.rfc-editor.org/rfc/rfc3227" }
  },
  {
    term: "E-discovery",
    def: "Process of identifying, collecting, and producing electronically stored information for legal proceedings.",
    domain: 4,
    group: "Forensics",
    ref: { title: "Professor Messer SY0-701: Digital Forensics", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/digital-forensics-sy0-701/" }
  },
  {
    term: "Write blocker",
    def: "Hardware or software tool that allows reading from evidence media while preventing any writes, preserving its integrity.",
    domain: 4,
    group: "Forensics",
    ref: { title: "NIST CSRC Glossary: write blocker", url: "https://csrc.nist.gov/glossary/term/write_blocker" }
  },
  {
    term: "SOAR",
    full: "Security Orchestration, Automation, and Response",
    def: "Platform that connects security tools and runs automated workflows to handle alerts and incidents.",
    domain: 4,
    group: "Automation & orchestration",
    ref: { title: "NIST CSRC Glossary: security orchestration automation and response", url: "https://csrc.nist.gov/glossary/term/security_orchestration_automation_and_response" }
  },
  {
    term: "Playbook",
    def: "Documented checklist of actions for responding to a specific type of incident, such as ransomware; it can be automated in an orchestration platform.",
    domain: 4,
    group: "Automation & orchestration",
    ref: { title: "Professor Messer SY0-701: Security Procedures", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-procedures-sy0-701/" }
  },
  {
    term: "Guard rails",
    def: "Automated checks that verify input or actions and stop people or scripts from making harmful changes, such as deleting the wrong folder.",
    domain: 4,
    group: "Automation & orchestration",
    ref: { title: "Professor Messer SY0-701: Scripting and Automation", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/scripting-and-automation-sy0-701/" }
  },
  {
    term: "Technical debt",
    def: "Future cost of quick or poorly planned solutions, such as fragile automation scripts, that must be maintained or fixed later.",
    domain: 4,
    group: "Automation & orchestration",
    ref: { title: "Professor Messer SY0-701: Scripting and Automation", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/scripting-and-automation-sy0-701/" }
  },
  {
    term: "SLA",
    full: "Service Level Agreement",
    def: "Contract terms that set measurable performance commitments, such as 99.9% uptime or a 4-hour response time, and penalties for missing them.",
    domain: 5,
    group: "Agreement types",
    ref: { title: "NIST CSRC Glossary: service level agreement", url: "https://csrc.nist.gov/glossary/term/service_level_agreement" }
  },
  {
    term: "MOU",
    full: "Memorandum of Understanding",
    def: "Informal, usually non-binding letter of intent that states shared goals and responsibilities between parties.",
    domain: 5,
    group: "Agreement types",
    ref: { title: "Professor Messer SY0-701: Agreement Types", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/agreement-types-sy0-701/" }
  },
  {
    term: "MOA",
    full: "Memorandum of Agreement",
    def: "More formal than a letter of intent; sets specific conditions and responsibilities the parties agree to, and may be legally binding.",
    domain: 5,
    group: "Agreement types",
    ref: { title: "Professor Messer SY0-701: Agreement Types", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/agreement-types-sy0-701/" }
  },
  {
    term: "MSA",
    full: "Master Service Agreement",
    def: "Umbrella contract with general terms for an ongoing relationship; individual projects are then defined in separate work orders.",
    domain: 5,
    group: "Agreement types",
    ref: { title: "Professor Messer SY0-701: Agreement Types", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/agreement-types-sy0-701/" }
  },
  {
    term: "SOW",
    full: "Statement of Work",
    def: "Document that details the specific deliverables, tasks, timeline, and cost of one project, often under a master agreement; also called a work order.",
    domain: 5,
    group: "Agreement types",
    ref: { title: "Professor Messer SY0-701: Agreement Types", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/agreement-types-sy0-701/" }
  },
  {
    term: "NDA",
    full: "Non-Disclosure Agreement",
    def: "Legal contract in which the parties promise not to share specified confidential information.",
    domain: 5,
    group: "Agreement types",
    ref: { title: "NIST CSRC Glossary: non disclosure agreement", url: "https://csrc.nist.gov/glossary/term/non_disclosure_agreement" }
  },
  {
    term: "BPA",
    full: "Business Partners Agreement",
    def: "Defines how two partner companies share profits, losses, and responsibilities, and who makes which decisions.",
    domain: 5,
    group: "Agreement types",
    ref: { title: "Professor Messer SY0-701: Agreement Types", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/agreement-types-sy0-701/" }
  },
  {
    term: "AUP",
    full: "Acceptable Use Policy",
    def: "Rules for how employees may use company systems, networks, and data, often signed at onboarding.",
    domain: 5,
    group: "Governance documents",
    ref: { title: "Professor Messer SY0-701: Security Policies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-policies-sy0-701/" }
  },
  {
    term: "Information security policy",
    def: "Top-level, management-approved document that states the organization's security goals, roles, and rules; specific standards and procedures support it.",
    domain: 5,
    group: "Governance documents",
    ref: { title: "Professor Messer SY0-701: Security Policies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-policies-sy0-701/" }
  },
  {
    term: "Security standard",
    def: "Mandatory, specific requirement that supports a policy, such as a minimum password length or a required encryption algorithm.",
    domain: 5,
    group: "Governance documents",
    ref: { title: "Professor Messer SY0-701: Security Standards", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-standards-sy0-701/" }
  },
  {
    term: "Procedure",
    def: "Mandatory step-by-step instructions for performing a specific task, such as onboarding or offboarding an employee.",
    domain: 5,
    group: "Governance documents",
    ref: { title: "Professor Messer SY0-701: Security Procedures", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-procedures-sy0-701/" }
  },
  {
    term: "Guideline",
    def: "Recommended but optional advice that helps people meet policy goals where no strict rule exists.",
    domain: 5,
    group: "Governance documents",
    ref: { title: "Professor Messer SY0-701: Security Standards", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-standards-sy0-701/" }
  },
  {
    term: "BCP",
    full: "Business Continuity Plan",
    def: "Documented approach for keeping essential business functions running during and after a disruption, including manual workarounds.",
    domain: 5,
    group: "Continuity plans",
    ref: { title: "NIST CSRC Glossary: business continuity plan", url: "https://csrc.nist.gov/glossary/term/business_continuity_plan" }
  },
  {
    term: "DRP",
    full: "Disaster Recovery Plan",
    def: "Steps for restoring IT systems, applications, and data at the primary or an alternate site after a major disruption.",
    domain: 5,
    group: "Continuity plans",
    ref: { title: "NIST CSRC Glossary: disaster recovery plan", url: "https://csrc.nist.gov/glossary/term/disaster_recovery_plan" }
  },
  {
    term: "IRP",
    full: "Incident Response Plan",
    def: "Documented instructions for detecting, responding to, and limiting the effects of a cyberattack or other security incident.",
    domain: 5,
    group: "Continuity plans",
    ref: { title: "NIST CSRC Glossary: incident response plan", url: "https://csrc.nist.gov/glossary/term/incident_response_plan" }
  },
  {
    term: "COOP",
    full: "Continuity of Operations Plan",
    def: "Plan, common in government, for sustaining an organization's essential functions at an alternate site for up to 30 days.",
    domain: 5,
    group: "Continuity plans",
    ref: { title: "NIST CSRC Glossary: continuity of operations plan", url: "https://csrc.nist.gov/glossary/term/continuity_of_operations_plan" }
  },
  {
    term: "Data owner",
    def: "Senior manager accountable for a data set, who decides its classification and who may access it.",
    domain: 5,
    group: "Data roles",
    ref: { title: "Professor Messer SY0-701: Data Roles and Responsibilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-roles-and-responsibilities-sy0-701/" }
  },
  {
    term: "Data controller",
    def: "Entity that decides the purposes and means of processing personal data and is responsible for privacy compliance.",
    domain: 5,
    group: "Data roles",
    ref: { title: "GDPR Art. 4: Definitions", url: "https://gdpr-info.eu/art-4-gdpr/" }
  },
  {
    term: "Data processor",
    def: "Entity that handles personal data on behalf of the deciding organization and follows its instructions, such as a payroll service.",
    domain: 5,
    group: "Data roles",
    ref: { title: "GDPR Art. 4: Definitions", url: "https://gdpr-info.eu/art-4-gdpr/" }
  },
  {
    term: "Data custodian",
    def: "Role with day-to-day responsibility for protecting a data set: keeping it accurate and private, applying sensitivity labels, and managing access; also called a data steward.",
    domain: 5,
    group: "Data roles",
    ref: { title: "Professor Messer SY0-701: Data Roles and Responsibilities", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-roles-and-responsibilities-sy0-701/" }
  },
  {
    term: "Data subject",
    def: "Identified or identifiable person whom personal data is about, who holds privacy rights such as access and erasure.",
    domain: 5,
    group: "Data roles",
    ref: { title: "GDPR Art. 4: Definitions", url: "https://gdpr-info.eu/art-4-gdpr/" }
  },
  {
    term: "DPO",
    full: "Data Protection Officer",
    def: "Role required by GDPR in some organizations to oversee data protection compliance and act as the contact point for regulators.",
    domain: 5,
    group: "Data roles",
    ref: { title: "GDPR Art. 37: Designation of the data protection officer", url: "https://gdpr-info.eu/art-37-gdpr/" }
  },
  {
    term: "GDPR",
    full: "General Data Protection Regulation",
    def: "EU law that governs the processing of personal data of people in the EU, with fines up to 4% of global annual turnover.",
    domain: 5,
    group: "Regulations & frameworks",
    ref: { title: "GDPR: General Data Protection Regulation (full text)", url: "https://gdpr-info.eu/" }
  },
  {
    term: "HIPAA",
    full: "Health Insurance Portability and Accountability Act",
    def: "U.S. law whose Security Rule requires safeguards for electronic protected health information.",
    domain: 5,
    group: "Regulations & frameworks",
    ref: { title: "NIST SP 800-66r2: Implementing the HIPAA Security Rule", url: "https://csrc.nist.gov/pubs/sp/800/66/r2/final" }
  },
  {
    term: "PCI DSS",
    full: "Payment Card Industry Data Security Standard",
    def: "Industry standard, not a law, that requires security controls from any organization that stores, processes, or transmits cardholder data.",
    domain: 5,
    group: "Regulations & frameworks",
    ref: { title: "PCI Security Standards Council", url: "https://www.pcisecuritystandards.org/" }
  },
  {
    term: "NIST CSF",
    def: "Voluntary framework of cybersecurity outcomes organized into six functions — Govern, Identify, Protect, Detect, Respond, Recover — for managing cyber risk.",
    domain: 5,
    group: "Regulations & frameworks",
    ref: { title: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" }
  },
  {
    term: "SOC 2",
    def: "Audit report on a service organization's controls for security, availability, processing integrity, confidentiality, and privacy; Type II tests how well they worked over a period of time.",
    domain: 5,
    group: "Regulations & frameworks",
    ref: { title: "AICPA: SOC 2 — SOC for Service Organizations", url: "https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2" }
  },
  {
    term: "Due care",
    def: "Acting responsibly and taking reasonable, ongoing steps to protect assets and people, as a prudent person would.",
    domain: 5,
    group: "Compliance & privacy",
    ref: { title: "Professor Messer SY0-701: Compliance", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/compliance-sy0-701/" }
  },
  {
    term: "Right to be forgotten",
    def: "Privacy right that lets individuals have their personal data erased when it is no longer needed or consent is withdrawn; GDPR Article 17.",
    domain: 5,
    group: "Compliance & privacy",
    ref: { title: "GDPR Art. 17: Right to erasure", url: "https://gdpr-info.eu/art-17-gdpr/" }
  },
  {
    term: "Data inventory",
    def: "Record of what data an organization holds, where it is stored, who owns it, and how it is used.",
    domain: 5,
    group: "Compliance & privacy",
    ref: { title: "Professor Messer SY0-701: Privacy", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/privacy-sy0-701/" }
  },
  {
    term: "Data minimization",
    def: "Collecting and keeping only the personal data that is adequate and necessary for a stated purpose.",
    domain: 5,
    group: "Compliance & privacy",
    ref: { title: "GDPR Art. 5: Principles relating to processing of personal data", url: "https://gdpr-info.eu/art-5-gdpr/" }
  },
  {
    term: "Attestation",
    def: "Formal statement by an auditor or responsible party that a system, process, or set of controls meets stated requirements.",
    domain: 5,
    group: "Audit & assessment",
    ref: { title: "Professor Messer SY0-701: Audits and Assessments", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/audits-and-assessments-sy0-701/" }
  },
  {
    term: "Internal audit",
    def: "Review performed by the organization's own staff, often reporting to an audit committee, to check compliance and control effectiveness.",
    domain: 5,
    group: "Audit & assessment",
    ref: { title: "Professor Messer SY0-701: Audits and Assessments", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/audits-and-assessments-sy0-701/" }
  },
  {
    term: "External audit",
    def: "Independent review performed by an outside party, such as a regulator or third-party firm, giving an objective opinion.",
    domain: 5,
    group: "Audit & assessment",
    ref: { title: "Professor Messer SY0-701: Audits and Assessments", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/audits-and-assessments-sy0-701/" }
  },
  {
    term: "Self-assessment",
    def: "Evaluation that a team performs on its own controls, often with a checklist, to find gaps before a formal audit.",
    domain: 5,
    group: "Audit & assessment",
    ref: { title: "Professor Messer SY0-701: Audits and Assessments", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/audits-and-assessments-sy0-701/" }
  },
  {
    term: "Right-to-audit clause",
    def: "Contract term that allows the customer to audit a vendor's security controls and records.",
    domain: 5,
    group: "Third-party risk",
    ref: { title: "Professor Messer SY0-701: Third Party Risk Assessment", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/third-party-risk-assessment-sy0-701/" }
  },
  {
    term: "Vendor questionnaire",
    def: "Set of security questions a vendor answers to describe its controls, used to judge its risk before or during the relationship.",
    domain: 5,
    group: "Third-party risk",
    ref: { title: "Professor Messer SY0-701: Third Party Risk Assessment", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/third-party-risk-assessment-sy0-701/" }
  },
  {
    term: "Supply chain analysis",
    def: "Evaluating the security of a vendor's own suppliers and components, since their weaknesses can reach the organization.",
    domain: 5,
    group: "Third-party risk",
    ref: { title: "Professor Messer SY0-701: Third Party Risk Assessment", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/third-party-risk-assessment-sy0-701/" }
  },
  {
    term: "Due diligence",
    def: "Investigating and evaluating risks before acting, such as checking a vendor's security practices and finances before signing a contract.",
    domain: 5,
    group: "Third-party risk",
    ref: { title: "Professor Messer SY0-701: Third Party Risk Assessment", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/third-party-risk-assessment-sy0-701/" }
  },
  {
    term: "Conflict of interest",
    def: "Situation where personal or business relationships could bias a decision, such as choosing a vendor owned by a relative.",
    domain: 5,
    group: "Third-party risk",
    ref: { title: "Professor Messer SY0-701: Third Party Risk Assessment", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/third-party-risk-assessment-sy0-701/" }
  },
  {
    term: "Risk register",
    def: "Document that lists identified risks with their likelihood, impact, owner, and planned response, used to track them over time.",
    domain: 5,
    group: "Risk management terms",
    ref: { title: "NIST CSRC Glossary: risk register", url: "https://csrc.nist.gov/glossary/term/risk_register" }
  },
  {
    term: "Risk appetite",
    def: "Broad amount and type of risk an organization is willing to accept to pursue its goals; described as expansionary, neutral, or conservative.",
    domain: 5,
    group: "Risk management terms",
    ref: { title: "NIST CSRC Glossary: risk appetite", url: "https://csrc.nist.gov/glossary/term/risk_appetite" }
  },
  {
    term: "Risk tolerance",
    def: "Acceptable variation around the target risk level that an organization can still live with, often set slightly above its appetite.",
    domain: 5,
    group: "Risk management terms",
    ref: { title: "NIST CSRC Glossary: risk tolerance", url: "https://csrc.nist.gov/glossary/term/risk_tolerance" }
  },
  {
    term: "Risk owner",
    def: "Person accountable for managing a specific risk and its response.",
    domain: 5,
    group: "Risk management terms",
    ref: { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" }
  },
  {
    term: "KRI",
    full: "Key Risk Indicator",
    def: "Metric that gives early warning when exposure to a specific risk is rising toward a threshold.",
    domain: 5,
    group: "Risk management terms",
    ref: { title: "NIST CSRC Glossary: key risk indicator", url: "https://csrc.nist.gov/glossary/term/key_risk_indicator" }
  },
  {
    term: "Inherent risk",
    def: "Level of risk that exists before any controls are applied.",
    domain: 5,
    group: "Risk management terms",
    ref: { title: "NIST CSRC Glossary: inherent risk", url: "https://csrc.nist.gov/glossary/term/inherent_risk" }
  },
  {
    term: "Residual risk",
    def: "Risk that remains after controls and other responses have been applied.",
    domain: 5,
    group: "Risk management terms",
    ref: { title: "NIST CSRC Glossary: residual risk", url: "https://csrc.nist.gov/glossary/term/residual_risk" }
  },
  {
    term: "Qualitative risk assessment",
    def: "Rates likelihood and impact with categories such as low, medium, and high, often shown in a heat map, rather than dollar values.",
    domain: 5,
    group: "Risk management terms",
    ref: { title: "NIST CSRC Glossary: qualitative assessment", url: "https://csrc.nist.gov/glossary/term/qualitative_assessment" }
  },
  {
    term: "Quantitative risk assessment",
    def: "Assigns numeric, usually monetary, values to risk using figures such as SLE, ARO, and ALE.",
    domain: 5,
    group: "Risk management terms",
    ref: { title: "NIST CSRC Glossary: quantitative assessment", url: "https://csrc.nist.gov/glossary/term/quantitative_assessment" }
  },
  {
    term: "BIA",
    full: "Business Impact Analysis",
    def: "Identifies critical business functions and the effects of their disruption, setting recovery priorities and targets such as RTO and RPO.",
    domain: 5,
    group: "Risk management terms",
    ref: { title: "NIST CSRC Glossary: business impact analysis", url: "https://csrc.nist.gov/glossary/term/business_impact_analysis" }
  },
  {
    term: "RTO",
    full: "Recovery Time Objective",
    def: "Maximum acceptable time to restore a system or process after a disruption before the impact becomes unacceptable.",
    domain: 5,
    group: "BIA metrics",
    ref: { title: "NIST CSRC Glossary: recovery time objective", url: "https://csrc.nist.gov/glossary/term/recovery_time_objective" }
  },
  {
    term: "RPO",
    full: "Recovery Point Objective",
    def: "The maximum acceptable amount of data loss, measured in time back from an incident (for example, 4 hours of transactions). Drives backup frequency.",
    domain: 5,
    group: "BIA metrics",
    ref: { title: "NIST CSRC Glossary: recovery point objective", url: "https://csrc.nist.gov/glossary/term/recovery_point_objective" }
  },
  {
    term: "MTTR",
    full: "Mean Time To Repair",
    def: "Average time needed to fix a failed component and return it to service.",
    domain: 5,
    group: "BIA metrics",
    ref: { title: "Professor Messer SY0-701: Business Impact Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/business-impact-analysis-sy0-701/" }
  },
  {
    term: "MTBF",
    full: "Mean Time Between Failures",
    def: "Average operating time between failures of a repairable system; a measure of reliability.",
    domain: 5,
    group: "BIA metrics",
    ref: { title: "Professor Messer SY0-701: Business Impact Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/business-impact-analysis-sy0-701/" }
  },
  {
    term: "SLE",
    full: "Single Loss Expectancy",
    def: "Monetary loss expected from one occurrence of a risk; asset value × exposure factor.",
    domain: 5,
    group: "Risk calculation",
    ref: { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" }
  },
  {
    term: "ALE",
    full: "Annualized Loss Expectancy",
    def: "Expected monetary loss per year from a risk; single loss expectancy × annualized rate of occurrence.",
    domain: 5,
    group: "Risk calculation",
    ref: { title: "NIST CSRC Glossary: annualized loss expectancy", url: "https://csrc.nist.gov/glossary/term/annualized_loss_expectancy" }
  },
  {
    term: "ARO",
    full: "Annualized Rate of Occurrence",
    def: "How many times a risk is expected to happen in one year, such as 0.1 for once every ten years.",
    domain: 5,
    group: "Risk calculation",
    ref: { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" }
  },
  {
    term: "Exposure factor",
    def: "Percentage of an asset's value expected to be lost in a single incident, used to calculate single loss expectancy.",
    domain: 5,
    group: "Risk calculation",
    ref: { title: "Professor Messer SY0-701: Risk Analysis", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/" }
  },
  {
    term: "Risk transference",
    def: "Shifting the financial impact of a risk to another party, such as by buying cybersecurity insurance.",
    domain: 5,
    group: "Risk strategies",
    ref: { title: "Professor Messer SY0-701: Risk Management Strategies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-management-strategies-sy0-701/" }
  },
  {
    term: "Risk acceptance",
    def: "Acknowledging a risk and choosing to take no further action, often because fixing it costs more than the likely loss; may need a formal exception or exemption.",
    domain: 5,
    group: "Risk strategies",
    ref: { title: "Professor Messer SY0-701: Risk Management Strategies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-management-strategies-sy0-701/" }
  },
  {
    term: "Risk avoidance",
    def: "Stopping or never starting the activity that creates the risk.",
    domain: 5,
    group: "Risk strategies",
    ref: { title: "Professor Messer SY0-701: Risk Management Strategies", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-management-strategies-sy0-701/" }
  },
  {
    term: "Risk mitigation",
    def: "Applying controls to reduce the likelihood or impact of a risk to an acceptable level.",
    domain: 5,
    group: "Risk strategies",
    ref: { title: "NIST CSRC Glossary: risk mitigation", url: "https://csrc.nist.gov/glossary/term/risk_mitigation" }
  },
  {
    term: "Known environment",
    def: "Penetration test in which testers receive full details of the target, such as network diagrams and source code; formerly called white box.",
    domain: 5,
    group: "Pen test types",
    ref: { title: "Professor Messer SY0-701: Penetration Tests", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/penetration-tests-sy0-701/" }
  },
  {
    term: "Partially known environment",
    def: "Penetration test in which testers receive limited information, such as IP ranges or a user-level login; formerly called gray box.",
    domain: 5,
    group: "Pen test types",
    ref: { title: "Professor Messer SY0-701: Penetration Tests", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/penetration-tests-sy0-701/" }
  },
  {
    term: "Unknown environment",
    def: "Penetration test in which testers start with no inside knowledge of the target, imitating an outside attacker; formerly called black box.",
    domain: 5,
    group: "Pen test types",
    ref: { title: "Professor Messer SY0-701: Penetration Tests", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/penetration-tests-sy0-701/" }
  },
  {
    term: "Physical penetration test",
    def: "Assessment of physical defenses such as doors, locks, badge readers, and guards, by trying to get into facilities.",
    domain: 5,
    group: "Pen test types",
    ref: { title: "Professor Messer SY0-701: Penetration Tests", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/penetration-tests-sy0-701/" }
  },
  {
    term: "Red team",
    def: "Group that plays the attacker, using offensive techniques to test an organization's defenses.",
    domain: 5,
    group: "Security teams",
    ref: { title: "NIST CSRC Glossary: red team", url: "https://csrc.nist.gov/glossary/term/red_team" }
  },
  {
    term: "Blue team",
    def: "Group that defends systems, monitoring for and responding to attacks during an exercise and in daily operations.",
    domain: 5,
    group: "Security teams",
    ref: { title: "NIST CSRC Glossary: blue team", url: "https://csrc.nist.gov/glossary/term/blue_team" }
  },
  {
    term: "Purple team",
    def: "Combined approach in which the attacking and defending teams work together, sharing findings in real time to improve detection and response.",
    domain: 5,
    group: "Security teams",
    ref: { title: "NIST CSRC Glossary: red team blue team approach", url: "https://csrc.nist.gov/glossary/term/red_team_blue_team_approach" }
  },
  {
    term: "White team",
    def: "Group that oversees an exercise, setting the rules, judging, and refereeing between the attacking and defending sides.",
    domain: 5,
    group: "Security teams",
    ref: { title: "NIST CSRC Glossary: white team", url: "https://csrc.nist.gov/glossary/term/white_team" }
  },
  {
    term: "Rules of engagement",
    def: "Agreed scope and limits of a penetration test, such as targets, permitted techniques, testing times, and emergency contacts.",
    domain: 5,
    group: "Pen test terms",
    ref: { title: "NIST CSRC Glossary: rules of engagement", url: "https://csrc.nist.gov/glossary/term/rules_of_engagement" }
  },
  {
    term: "Passive reconnaissance",
    def: "Gathering information about a target without directly interacting with its systems, for example from public websites and social media.",
    domain: 5,
    group: "Pen test terms",
    ref: { title: "Professor Messer SY0-701: Penetration Tests", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/penetration-tests-sy0-701/" }
  },
  {
    term: "Active reconnaissance",
    def: "Gathering information by directly interacting with the target's systems, for example with port scans or ping sweeps, which may be detected.",
    domain: 5,
    group: "Pen test terms",
    ref: { title: "MITRE ATT&CK: Active Scanning", url: "https://attack.mitre.org/techniques/T1595/" }
  },
  {
    term: "Pivoting",
    def: "Using a compromised system as a launch point to attack other systems that were not reachable from the attacker's original position.",
    domain: 5,
    group: "Pen test terms",
    ref: { title: "NIST CSRC Glossary: pivoting", url: "https://csrc.nist.gov/glossary/term/pivoting" }
  },
  {
    term: "Phishing simulation",
    def: "Training exercise that sends realistic fake phishing messages to employees to measure who clicks and to assign follow-up training.",
    domain: 5,
    group: "Security awareness",
    ref: { title: "Professor Messer SY0-701: Security Awareness", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-awareness-sy0-701/" }
  },
  {
    term: "Anomalous behavior recognition",
    def: "Training users to spot and report risky, unexpected, or unintentional actions that may signal a threat.",
    domain: 5,
    group: "Security awareness",
    ref: { title: "Professor Messer SY0-701: Security Awareness", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-awareness-sy0-701/" }
  },
  {
    term: "Situational awareness",
    def: "Staying alert to what is happening around you, such as unfamiliar people in secure areas or unexpected requests for information.",
    domain: 5,
    group: "Security awareness",
    ref: { title: "Professor Messer SY0-701: User Training", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/user-training-sy0-701/" }
  },
  {
    term: "Operational security",
    def: "Protecting small, harmless-looking details, such as social media posts about work, that adversaries could combine to learn sensitive information.",
    domain: 5,
    group: "Security awareness",
    ref: { title: "NIST CSRC Glossary: operations security", url: "https://csrc.nist.gov/glossary/term/operations_security" }
  }
]);
