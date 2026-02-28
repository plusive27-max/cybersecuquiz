// CyberSecuQuiz - Question Database
// 20 scenario-based cybersecurity questions

const quizData = [
    // CATEGORY 1: Phishing Recognition (Questions 1-5)
    {
        id: 1,
        category: "Phishing Recognition",
        scenario: "You receive a text message: \"Your bank account has been locked due to suspicious activity. Click here immediately to verify your identity: http://bank-secure-verify.com/login\"",
        question: "What should you do?",
        options: [
            "Click the link immediately — your account might be locked",
            "Call your bank using the number on your official debit card",
            "Reply to the text asking if this is legitimate",
            "Forward the text to your family to warn them"
        ],
        correct: 1,
        feedback: "Correct! Urgency is a classic social engineering tactic. Always contact your bank using official channels (card, statement, or verified website), never through unsolicited links. The domain 'bank-secure-verify.com' is not your actual bank's domain."
    },
    {
        id: 2,
        category: "Phishing Recognition",
        scenario: "You receive an email at work from \"ceo@company-ceo-mail.com\" saying: \"I'm in a meeting and need you to urgently purchase £500 in gift cards for a client. Send me the codes immediately.\"",
        question: "What is the safest response?",
        options: [
            "Purchase the gift cards quickly — the CEO is busy",
            "Reply asking which client this is for",
            "Walk to the CEO's office or call their known extension to verify",
            "Forward to HR but don't disturb the CEO"
        ],
        correct: 2,
        feedback: "Correct! This is a 'CEO fraud' or business email compromise (BEC) attack. The email address is slightly wrong. Always verify unusual requests through separate, known channels — never reply to the suspicious email."
    },
    {
        id: 3,
        category: "Phishing Recognition",
        scenario: "You get a WhatsApp message: \"Congratulations! You've won a £1,000 Tesco voucher. Click here to claim: tesco-winners-now.com/claim\" — You've never entered a Tesco competition.",
        question: "What should you do?",
        options: [
            "Click to check — maybe someone entered for you",
            "Delete the message and block the sender",
            "Reply \"STOP\" to opt out",
            "Share on social media to warn others"
        ],
        correct: 1,
        feedback: "Correct! Unexpected prizes are almost always scams. The domain is fake (not tesco.com), and clicking could install malware or steal data. Delete, block, and never engage. Legitimate competitions you didn't enter don't exist."
    },
    {
        id: 4,
        category: "Phishing Recognition",
        scenario: "An email from \"accounts@supplier-ltd.com\" (a company you recognize) contains an attachment \"Invoice_2847.pdf.exe\" and says \"Please review attached invoice urgently.\"",
        question: "What do you notice?",
        options: [
            "The supplier name looks correct, so it's safe",
            "The file ends in .exe — that's an executable program, not a PDF",
            "The invoice number is high, so it must be important",
            "Urgently means I should open it now"
        ],
        correct: 1,
        feedback: "Correct! Malware often hides as fake double extensions. '.pdf.exe' is actually a program that will run when clicked. Real PDFs end in .pdf only. Never open unexpected executables, even from seemingly familiar senders."
    },
    {
        id: 5,
        category: "Phishing Recognition",
        scenario: "At a restaurant, the table has a QR code sticker: \"Scan for menu & 20% off your bill!\" A different table has a paper menu.",
        question: "What's the safest choice?",
        options: [
            "Scan the QR code — discounts are worth it",
            "Use the paper menu and ask staff about the discount",
            "Scan it but don't enter any payment details",
            "Take a photo of the QR to scan later at home"
        ],
        correct: 1,
        feedback: "Correct! 'Quishing' (QR phishing) is rising. Stickers can be placed over legitimate codes. Paper menus are safer. If using QR codes, ask staff to confirm they're official. Never scan random codes in public spaces."
    },

    // CATEGORY 2: Password Security (Questions 6-10)
    {
        id: 6,
        category: "Password Security",
        scenario: "You need to create a password for a new online account.",
        question: "Which approach is most secure?",
        options: [
            "Use your pet's name plus your birth year (Fluffy1999)",
            "Use a random 8-character mix like \"Xk9#mP2$\"",
            "Use a 4-word passphrase like \"Correct-Horse-Battery-Staple\"",
            "Use the same strong password you use for your email"
        ],
        correct: 2,
        feedback: "Correct! Long passphrases beat complex short passwords. 'Correct-Horse-Battery-Staple' is memorable and has high entropy. Random short passwords are hard to remember (so people write them down). Never reuse passwords across accounts."
    },
    {
        id: 7,
        category: "Password Security",
        scenario: "A colleague recommends using a password manager. You're concerned: \"If hackers get into the password manager, they have everything!\"",
        question: "What is the accurate response?",
        options: [
            "You're right — it's safer to memorize all passwords",
            "Password managers use strong encryption; one strong master password protects unique passwords for every site",
            "Only use password managers for unimportant accounts",
            "Write your master password down and hide it"
        ],
        correct: 1,
        feedback: "Correct! Reputable password managers use AES-256 encryption. Your passwords are encrypted locally before syncing. One strong master password + unique per-site passwords is vastly safer than reused or weak memorized passwords."
    },
    {
        id: 8,
        category: "Password Security",
        scenario: "You receive an email: \"Your password for 'shopping-site.com' was exposed in a data breach. Change it immediately.\" You use \"ShoppingSite2023!\" there and for three other accounts.",
        question: "What do you do?",
        options: [
            "Change only the shopping site password — the others are fine",
            "Change the shopping site password AND all accounts sharing that password",
            "Ignore it — breach notifications are usually scams",
            "Add \"2024\" to the end and reuse it"
        ],
        correct: 1,
        feedback: "Correct! Credential stuffing attacks try leaked passwords across multiple sites. If 'ShoppingSite2023!' is exposed, attackers will try it on banking, email, and social media. Use unique passwords everywhere — password managers make this practical."
    },
    {
        id: 9,
        category: "Password Security",
        scenario: "You're at a coffee shop and need to check your bank balance. The shop offers free Wi-Fi with password \"coffee123\".",
        question: "What should you do?",
        options: [
            "Connect and check your bank — the password makes it secure",
            "Use your mobile data (4G/5G) instead for banking",
            "Connect but only check non-sensitive accounts",
            "Ask the barista if the Wi-Fi is \"the secure one\""
        ],
        correct: 1,
        feedback: "Correct! Shared Wi-Fi passwords mean anyone can join and potentially intercept traffic. Mobile data is encrypted and safer for banking. If you must use public Wi-Fi, use a VPN. Never access financial accounts on unsecured networks."
    },
    {
        id: 10,
        category: "Password Security",
        scenario: "You log into your email and see a prompt: \"Enter the 6-digit code sent to your phone.\" Moments later, you get a call: \"Hi, this is Microsoft support. Can you tell us the code you just received so we can verify your account?\"",
        question: "What should you do?",
        options: [
            "Give them the code — they're from Microsoft and trying to help",
            "Hang up immediately — Microsoft never calls asking for codes",
            "Ask them to verify their employee ID number first",
            "Give them a fake code to test if they're legitimate"
        ],
        correct: 1,
        feedback: "Correct! This is a real-time 2FA interception attack. The caller triggered the login that sent you the code. Never share 2FA codes with anyone — legitimate companies never ask for them. Hang up and change your password if you shared any information."
    },

    // CATEGORY 3: Social Engineering (Questions 11-15)
    {
        id: 11,
        category: "Social Engineering",
        scenario: "You receive a call: \"Hi, this is Mike from IT. We're updating everyone's computer remotely today. I need your username and password to apply the security patch. It will only take 2 minutes.\"",
        question: "What should you do?",
        options: [
            "Provide the details — IT needs to do their job",
            "Ask for Mike's callback number and verify with your known IT department",
            "Refuse but ask when the update will finish",
            "Give a fake password to see what happens"
        ],
        correct: 1,
        feedback: "Correct! Vishing (voice phishing) exploits authority and helpfulness. Real IT never asks for passwords — they have administrative tools. Always verify through official channels: hang up, call the IT number you have on file, or walk to the IT office."
    },
    {
        id: 12,
        category: "Social Engineering",
        scenario: "You're entering your office building using your key card. A person in a suit with a laptop bag rushes up: \"Sorry, I forgot my badge in the car — I'm late for a meeting with the CEO. Can you just hold the door?\"",
        question: "What should you do?",
        options: [
            "Hold the door — they're well-dressed and seem professional",
            "Let them use your card — they'll return it",
            "Direct them to reception/security to sign in and get a temporary badge",
            "Ask which CEO they're meeting while holding the door"
        ],
        correct: 2,
        feedback: "Correct! 'Tailgating' or 'piggybacking' is a physical social engineering attack. Attackers dress professionally to blend in. Never bypass security procedures — direct all visitors to official check-in. Security can verify their appointment quickly."
    },
    {
        id: 13,
        category: "Social Engineering",
        scenario: "You find a USB drive labeled \"Q4 Financial Results\" in your company parking lot. Curious about company performance...",
        question: "What should you do?",
        options: [
            "Plug it into your work computer to see what's on it",
            "Plug it into your personal laptop first to check safely",
            "Hand it to IT/security without plugging it in",
            "Ask colleagues if anyone lost a USB drive"
        ],
        correct: 2,
        feedback: "Correct! 'USB drop attacks' are common — drives contain malware that auto-runs when plugged in. Never insert unknown USB devices. Even 'checking first' on a personal device can infect that device and spread later. Always hand found media to security professionals."
    },
    {
        id: 14,
        category: "Social Engineering",
        scenario: "You receive a Facebook friend request from \"Sarah Johnson,\" who claims to be a recruiter at a company you want to work for. She messages: \"I'd love to discuss opportunities. Can we move this to WhatsApp?\"",
        question: "What should you do?",
        options: [
            "Move to WhatsApp immediately — this is a great opportunity",
            "Verify through the company's official careers page or LinkedIn",
            "Ask Sarah to send the job description via Facebook first",
            "Give her your email but not phone number"
        ],
        correct: 1,
        feedback: "Correct! Fake recruiter profiles are common. Attackers build convincing profiles, then move to encrypted platforms to avoid detection. Verify all recruiters through official company channels. Never share personal contact info with unverified social media contacts."
    },
    {
        id: 15,
        category: "Social Engineering",
        scenario: "You're working on your laptop in a busy coffee shop, reviewing your monthly budget spreadsheet with bank balances visible. You notice the person at the next table keeps glancing at your screen and has been on their phone for 20 minutes without ordering.",
        question: "What should you do?",
        options: [
            "Nothing — they're probably just bored",
            "Turn your screen slightly away and continue working",
            "Finish quickly and leave — shoulder surfing is a real threat",
            "Confront them and ask why they're watching"
        ],
        correct: 2,
        feedback: "Correct! 'Shoulder surfing' captures passwords, account numbers, and sensitive data. In public spaces, use privacy screens, work with your back to walls, or avoid sensitive tasks entirely. Finishing quickly and leaving is safer than confrontation or ignoring the risk."
    },

    // CATEGORY 4: Malware & Safe Browsing (Questions 16-20)
    {
        id: 16,
        category: "Malware & Safe Browsing",
        scenario: "While browsing, a pop-up appears: \"CRITICAL: Your Adobe Flash Player is outdated. Click here to update now or your computer will be at risk!\" with a download button.",
        question: "What should you do?",
        options: [
            "Click to update — outdated software is dangerous",
            "Close the pop-up and check for updates through Adobe's official website or your computer's settings",
            "Download but scan with antivirus first",
            "Ignore it — Flash Player isn't important"
        ],
        correct: 1,
        feedback: "Correct! Fake update pop-ups are common malware vectors. Never download software from browser pop-ups. Always go directly to the vendor's official website or use your operating system's built-in update mechanism. (Note: Flash is actually discontinued — another red flag!)"
    },
    {
        id: 17,
        category: "Malware & Safe Browsing",
        scenario: "You need to edit a PDF. Searching online, you find \"PDFEditorPro FREE\" on a download site with reviews saying \"works great!\" The download requires you to disable your antivirus \"to prevent false positives.\"",
        question: "What should you do?",
        options: [
            "Disable antivirus temporarily — you need this software now",
            "Use a reputable alternative (e.g., official Adobe products, free LibreOffice)",
            "Check the reviews more carefully before deciding",
            "Download on an old computer first to test"
        ],
        correct: 1,
        feedback: "Correct! Any software asking you to disable security is almost certainly malware. 'False positive' claims exploit technical trust. Use established, reputable software from official sources. Free tools from unknown sites often contain trojans, keyloggers, or ransomware."
    },
    {
        id: 18,
        category: "Malware & Safe Browsing",
        scenario: "A website says: \"Install our extension to download videos faster and block all ads!\" It has 50,000 downloads and 4-star rating. Your antivirus doesn't flag it.",
        question: "What should you consider?",
        options: [
            "Install it — high downloads and ratings mean it's safe",
            "Check who published it, what permissions it requires, and research the publisher independently",
            "Install it temporarily just for one video",
            "Check if there's a paid version (paid = more trustworthy)"
        ],
        correct: 1,
        feedback: "Correct! Malicious extensions often have fake reviews and high download counts. Check the publisher's website, search '[extension name] malware/scam,' and review permissions (an ad blocker needing camera access is suspicious). When in doubt, don't install."
    },
    {
        id: 19,
        category: "Malware & Safe Browsing",
        scenario: "You open your laptop and see a screen: \"YOUR FILES ARE ENCRYPTED. Pay 0.5 Bitcoin (£20,000) within 72 hours or your data will be permanently deleted. Do not turn off your computer or try to remove this software.\"",
        question: "What is the correct immediate response?",
        options: [
            "Pay immediately — your files are worth more than £20,000",
            "Turn off the computer and contact a professional and your IT department/police",
            "Try to negotiate the ransom down via the contact email",
            "Follow on-screen instructions carefully to ensure payment goes through"
        ],
        correct: 1,
        feedback: "Correct! This is a ransomware attack. Never pay — payment doesn't guarantee decryption and funds criminals. Disconnect from networks immediately (unplug ethernet/turn off Wi-Fi), power down, and seek professional incident response. Report to Action Fraud (UK) or FBI IC3 (US)."
    },
    {
        id: 20,
        category: "Malware & Safe Browsing",
        scenario: "You've been backing up your computer to an external hard drive monthly. After a malware infection, you need to restore. You connect the drive and find the last 3 backups are corrupted and the oldest is 4 months old.",
        question: "What backup principle was violated?",
        options: [
            "The 3-2-1 rule: 3 copies, 2 different media types, 1 offsite",
            "Encryption — backups should be encrypted",
            "Compression — uncompressed backups are more reliable",
            "Manual backup — should be automated"
        ],
        correct: 0,
        feedback: "Correct! The 3-2-1 backup rule protects against this: 3 total copies, 2 different types (e.g., external drive + cloud), 1 offsite/cloud. Multiple copies on the same failing drive aren't true backups. Test restores periodically — backups you can't restore are useless."
    }
];