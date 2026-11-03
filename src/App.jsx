import React, { useMemo, useState } from "react";

// Standard SVG Icons
const IconDashboard = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="9" rx="1.5" />
    <rect x="14" y="3" width="7" height="5" rx="1.5" />
    <rect x="14" y="12" width="7" height="9" rx="1.5" />
    <rect x="3" y="16" width="7" height="5" rx="1.5" />
  </svg>
);

const IconItems = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const IconSchedule = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="12" cy="15" r="2" />
  </svg>
);

const IconTruck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const IconDonate = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 5v6" />
    <path d="M9 8h6" />
  </svg>
);

const IconNotifications = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const IconVerification = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconProfile = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconCollapse = ({ collapsed }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    {collapsed ? (
      <>
        <polyline points="9 18 15 12 9 6" />
        <line x1="5" y1="12" x2="9" y2="12" />
      </>
    ) : (
      <>
        <polyline points="15 18 9 12 15 6" />
        <line x1="19" y1="12" x2="15" y2="12" />
      </>
    )}
  </svg>
);

const IconCheck = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconRupee = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12" />
    <path d="M6 8h12" />
    <path d="M6 13l8.5 8" />
    <path d="M6 13h3a4.5 4.5 0 0 0 0-9" />
  </svg>
);

const IconStrategy = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20" />
    <path d="m5 16 5-5 4 4 6-7" />
    <circle cx="20" cy="8" r="2" />
  </svg>
);

const IconHeart = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const IconWheelchair = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="4" r="2" />
    <path d="m11 8-1.5 7h5l3 5" />
    <path d="M6 11h7" />
    <circle cx="8" cy="18" r="4" />
  </svg>
);

const IconWalker = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="4" r="1.5" />
    <circle cx="17" cy="4" r="1.5" />
    <path d="M7 6v14" />
    <path d="M17 6v14" />
    <path d="M7 11h10" />
    <path d="M7 16h10" />
    <circle cx="7" cy="20" r="1.5" />
    <circle cx="17" cy="20" r="1.5" />
  </svg>
);

const IconCrutches = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3h6" />
    <path d="M8 3v5l-3 13" />
    <path d="M8 8l3 13" />
    <path d="M6 13h4" />
    <path d="M15 3h6" />
    <path d="M18 3v5l-3 13" />
    <path d="M18 8l3 13" />
    <path d="M16 13h4" />
  </svg>
);

const IconCane = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4a3 3 0 0 0-6 0v16" />
    <path d="M5 20h6" />
  </svg>
);

const IconGlobe = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// Dynamic helper returning the relevant equipment icon
const getEquipmentIcon = (nameOrCategory) => {
  const str = (nameOrCategory || "").toLowerCase();
  if (str.includes("wheelchair") || str.includes("వీల్‌చైర్") || str.includes("ಗಾಲಿಕುರ್ಚಿ") || str.includes("व्हीलचेयर")) return <IconWheelchair />;
  if (str.includes("walker") || str.includes("rollator") || str.includes("వాకర్") || str.includes("ವಾಕರ್") || str.includes("वॉकर") || str.includes("scooter")) return <IconWalker />;
  if (str.includes("crutch") || str.includes("crutches") || str.includes("క్రచెస్") || str.includes("ಕ್ರಚಸ್") || str.includes("बैसाखी")) return <IconCrutches />;
  return <IconCane />;
};

// 4-Language UI Translation Dictionary (English, Telugu, Kannada, Hindi)
const translations = {
  "en": {
    "brandTagline": "REUSE. RESELL. REPEAT.",
    "authEyebrow": "ASSISTIVE MOBILITY AID CIRCULAR RESALE",
    "authHeroTitle1": "Turn your unused mobility aids into ",
    "authHeroTitle2": "new possibilities.",
    "authHeroDesc": "Connect directly with verified collectors for doorstep pickups. Resell or donate wheelchairs, walkers, crutches, and walking canes to empower people with disabilities and elderly citizens in need.",
    "authPerk1": "Free doorstep collection for wheelchairs, walkers & crutches",
    "authPerk2": "Resale Cost pricing based on fair market & refurbishment values",
    "authPerk3": "Free donation delivery to underprivileged beneficiaries",
    "authCaption": "Community-driven circular mobility network across India",
    "signInTab": "Sign in",
    "createAccountTab": "Create account",
    "welcomeBackEyebrow": "WELCOME BACK TO SCRAPCYCLE",
    "joinMovementEyebrow": "JOIN THE REUSE MOVEMENT",
    "signInHeading": "Sign in to your account",
    "createAccountHeading": "Create your account",
    "signInSub": "Access your listed wheelchairs, pickup schedules, and payouts.",
    "createAccountSub": "Start listing reusable mobility aids, booking pickups, and donating today.",
    "fullName": "Full name",
    "fullNamePlaceholder": "Enter your full name",
    "emailAddress": "Email address",
    "phoneNumber": "Phone number",
    "password": "Password",
    "passwordPlaceholder": "Enter your password",
    "signInButton": "Sign in to dashboard",
    "createAccountButton": "Create my account",
    "orTestPrototype": "or test prototype",
    "demoSignIn": "⚡ One-Click Demo Sign In (Kushal)",
    "termsAgree": "By continuing, you agree to our",
    "termsLink": "Terms",
    "andWord": "and",
    "privacyLink": "Privacy Policy",
    "dontHaveAccount": "Don't have an account yet?",
    "createAccountHere": "Create account here",
    "alreadyRegistered": "Already registered?",
    "signInHere": "Sign in here",
    "authFooter": "♿ ScrapCycle • Empowering mobility and assistive aid independence",
    "workspace": "Workspace",
    "listMobilityAid": "＋ List Mobility Aid",
    "contributorRole": "Mobility Contributor",
    "memberRole": "Individual Member",
    "logOut": "Log out",
    "mainWorkspaceGroup": "MAIN WORKSPACE",
    "accountTrustGroup": "ACCOUNT & TRUST",
    "navDashboard": "Dashboard",
    "navItems": "My Items",
    "navSchedule": "Schedule",
    "navDonate": "Donate",
    "navNotifications": "Notifications",
    "navVerification": "Verification",
    "navProfile": "Profile",
    "doorstepPartnerTitle": "Doorstep Pickup Partner",
    "doorstepPartnerDesc": "Specialized collectors handle wheelchairs and walkers with padded transport.",
    "vendorHelpline": "Vendor Helpline ↗",
    "circularEcosystem": "CIRCULAR MOBILITY AID ECOSYSTEM",
    "goodToSeeYou": "Good to see you,",
    "dashboardSubtitle": "Track your reusable wheelchairs, walkers, crutches, Resale Costs, and community donations.",
    "listItemBtn": "＋ List an item",
    "donateAidBtn": "Donate mobility aid",
    "heroTag": "CIRCULAR IMPACT & MOBILITY AID RESALE",
    "heroTitle1": "One person's scrap.",
    "heroTitle2": "Another's treasure.",
    "heroDesc": "Turn unused or damaged wheelchairs, walkers, and crutches into fair Resale Cost cash through doorstep collection—or donate directly to restore someone's independence.",
    "heroResellBtn": "Resell Mobility Aid",
    "heroExploreDonations": "Explore Donations",
    "verifiedPickupSticker": "Verified Pickup",
    "doorstepCollectorSubtitle": "Doorstep Mobility Collector",
    "statAidsInInventory": "Mobility aids in inventory",
    "statReadyForPickup": "ready for pickup",
    "statAwaitingAction": "Awaiting action",
    "statAwaitingNote": "Verification & scheduling",
    "statTotalResaleRealized": "Total Resale Cost realized",
    "statDisbursementNote": "Paid via instant disbursement",
    "statMobilityDonations": "Mobility donations",
    "statDonationsNote": "Wheelchairs, walkers, crutches",
    "recentHeading": "Recent Mobility Items & Resale Valuations",
    "recentSubtitle": "Latest wheelchairs, walkers, and crutches with condition notes and marketing Resale Cost strategies.",
    "viewAllItems": "View all items",
    "thEquipmentCategory": "EQUIPMENT & CATEGORY",
    "thConditionWear": "CONDITION & WEAR",
    "thMarketVsResale": "MARKET VS RESALE COST",
    "thMarketingStrategy": "MARKETING PRICING STRATEGY",
    "thStatus": "STATUS",
    "thAction": "ACTION",
    "pipelineHeading": "Mobility Lifecycle Pipeline",
    "pipelineSub": "Transparent verification, fair Resale Cost valuation, and collector dispatch.",
    "viewChecklist": "View checklist →",
    "donationMission": "Mobility Aid Mission",
    "restoreDignity": "Restore Dignity & Independence",
    "restoreDignityDesc": "An unused wheelchair, walker, or pair of crutches in your storeroom can be refurbished and given free to a person with disabilities in need.",
    "aidsDonatedLabel": "Aids Donated",
    "freeHandoffLabel": "Free Doorstep Handoff",
    "donateAidActionBtn": "Donate a wheelchair or aid →",
    "catalogTitle": "Mobility Equipment Catalog",
    "catalogSubtitle": "Manage your listed wheelchairs, walkers, crutches, and walking aids with condition ratings and commercial Resale Cost strategies.",
    "listEquipmentBtn": "＋ List mobility equipment",
    "filterAll": "All Equipments",
    "filterWheelchairs": "Wheelchairs",
    "filterWalkers": "Walkers & Rollators",
    "filterCrutches": "Crutches",
    "filterCanes": "Canes & Sticks",
    "filterScheduled": "Scheduled",
    "filterCompleted": "Completed",
    "cardCondition": "Condition:",
    "cardResaleCost": "Resale Cost",
    "cardSavings": "SAVINGS",
    "cardListed": "Listed",
    "cardPricingStrategy": "Pricing & Resale Strategy:",
    "cardPickup": "Pickup:",
    "atTime": "at",
    "commercialInsightTitle": "Commercial Strategy Insight:",
    "commercialInsightText": "All prices for pre-owned mobility aids (wheelchairs, walkers, crutches) use charm pricing (₹549, ₹699, ₹899, ₹1,850, ₹2,499, ₹3,850, ₹4,999) anchored against manufacturer retail MRP. Refurbishing deductions are pre-factored for quick turnaround to local hospitals, physical therapy centers, and families.",
    "scheduleTitle": "Doorstep Pickup Schedule",
    "scheduleSubtitle": "Coordinate verified mobility collectors to pick up wheelchairs, walkers, and crutches from your doorstep.",
    "activeScheduledPickups": "Active & Scheduled Mobility Pickups",
    "activeScheduledSub": "Verified items booked for doorstep collection and direct Resale Cost payout.",
    "activeCountBadge": "Active",
    "noItemsReady": "No mobility items ready for pickup",
    "noItemsReadyText": "List a wheelchair, walker, or crutches and complete verification to book collection.",
    "verifiedWaitingSlot": "⚠️ Verified and waiting for you to pick a date & time slot.",
    "schedulePickupBtn": "Schedule Pickup",
    "confirmHandoverBtn": "Confirm Handover",
    "logisticsTitle": "Collector Logistics & Handling Standards",
    "logisticsText": "Collectors arrive with specialized protective blankets and straps to ensure wheelchairs, electronic controllers, and folding mechanisms are handled with care. Cash or UPI payout is confirmed right at your door.",
    "donateTitle": "Give Mobility Aids a Second Life",
    "donateSubtitle": "Donate wheelchairs, crutches, and walkers to restore freedom and mobility for underprivileged individuals.",
    "communityOutreach": "❤️ Community Mobility Outreach",
    "heartfeltSupport": "HEARTFELT COMMUNITY SUPPORT",
    "donateBannerHeading": "Every donated aid transforms a life.",
    "donateBannerDesc": "Millions of elderly individuals and persons with disabilities across low-income communities lack access to basic mobility equipment. Our network of smiling, community-first collectors picks up, cleans, repairs, and delivers wheelchairs and crutches directly to people who need them most—at zero cost to them.",
    "donateChip1": "Free Doorstep Collection",
    "donateChip2": "Certified Repair & Sanitization",
    "donateChip3": "Verified Recipient Delivery",
    "submitDonationHeading": "Submit a Donation Request",
    "submitDonationDesc": "Let us know what mobility aid or equipment you would like to give away.",
    "equipmentToDonate": "Equipment to Donate",
    "itemCondition": "Item Condition",
    "specialNotesStory": "Special Notes or Story",
    "specialNotesPlaceholder": "e.g. Bought for family member during recovery; now unused. Sanitized and in working order...",
    "submitDonationBtn": "Submit Donation Request →",
    "selectedPreview": "Selected Equipment Preview",
    "freeDeliveryNotice": "100% Free collection and delivery to verified recipients",
    "impactRecordsTitle": "Community Donation Impact Records",
    "impactRecordsDesc": "Restored equipment delivered to underprivileged beneficiaries, clinics, and elder shelters.",
    "handoffsLabel": "Handoffs",
    "donorLabel": "Donor:",
    "beneficiaryImpactLabel": "Beneficiary Impact:",
    "loggedOnLabel": "Logged on",
    "notificationsTitle": "Notifications",
    "notificationsSubtitle": "Stay updated on equipment inspections, collector arrivals, and Resale Cost disbursements.",
    "markAllRead": "Mark all as read",
    "caughtUpTitle": "You're all caught up",
    "caughtUpText": "New updates and collector alerts will appear here.",
    "verificationTitle": "Quality & Safety Verification",
    "verificationSubtitle": "Every listed item undergoes safety checks to protect elderly and disabled users.",
    "inspectionCardTitle": "4-Point Assistive Equipment Safety Inspection",
    "inspectionCardDesc": "Every listed wheelchair, walker, and crutch is audited for structural safety, braking response, tire tread, and hygiene standards before being routed for resale or donation.",
    "checklistTitle": "Equipment Verification Checklist",
    "valuedAtText": "Resale Cost:",
    "submittedOnText": "Submitted",
    "approveValuationBtn": "Approve Resale Cost (demo)",
    "disbursePayoutBtn": "Disburse Payout",
    "giveFeedbackBtn": "Give Feedback",
    "profileTitle": "Your Contributor Profile",
    "profileSubtitle": "Manage your contact details, active listings, and community impact.",
    "activeContributorBadge": "● Active Mobility Contributor",
    "listedAidsLabel": "Listed Aids",
    "donationsLabel": "Donations",
    "earnedLabel": "Resale Earned",
    "editContactHeading": "Edit Contact Information",
    "editContactDesc": "Keep your phone number and address accurate so local mobility collectors can easily coordinate pickups.",
    "primaryPhoneLabel": "Primary phone number (for collector coordination)",
    "saveProfileBtn": "Save Profile Changes",
    "modalUploadTitle": "List Mobility Aid Equipment",
    "modalUploadSub": "Submit photos and condition details for a fair Resale Cost audit.",
    "equipmentNameLabel": "Equipment Name",
    "equipmentNamePlaceholder": "e.g. Standard Folding Wheelchair or 4-Wheel Rollator Walker",
    "categoryLabel": "Category",
    "conditionLabel": "Condition",
    "originalMrpInput": "Original Retail MRP (₹)",
    "resaleCostInput": "Resale Cost (₹)",
    "imageUrlLabel": "Image URL (optional)",
    "conditionNotesLabel": "Condition Notes & Wear Details",
    "conditionNotesPlaceholder": "Describe condition, brake status, tire tread, or parts needing repair...",
    "cancelBtn": "Cancel",
    "submitValuationBtn": "Submit for Resale Audit →",
    "modalScheduleTitle": "Book Doorstep Pickup",
    "modalScheduleSub": "Choose a date and time slot for free doorstep collection and spot Resale Cost payout.",
    "preferredDate": "Preferred Pickup Date",
    "preferredTimeSlot": "Preferred Time Slot",
    "pickupAddress": "Doorstep Pickup Address",
    "addressPlaceholder": "Apartment/House number, Street, Landmark, Area, City",
    "scheduleModalNotice": "📍 Our verified mobility collector arrives with protective blankets and transport straps. Resale Cost is settled immediately upon handover.",
    "confirmScheduleBtn": "Confirm Doorstep Pickup →",
    "modalFeedbackTitle": "Rate Your Experience",
    "modalFeedbackSub": "Help us improve our mobility aid recycling and distribution service.",
    "overallExperience": "Overall Experience",
    "commentsSuggestions": "Comments & Suggestions",
    "feedbackPlaceholder": "Tell us about the collector punctuality, Resale Cost fairness, or app features...",
    "submitFeedbackBtn": "Submit Feedback →",
    "btnVerify": "Verify",
    "btnSchedule": "Schedule",
    "btnMarkPaid": "Mark paid",
    "btnDetails": "Details",
    "btnSimulateVerify": "Simulate Condition Verification",
    "btnBookPickup": "Book Doorstep Pickup",
    "btnConfirmPayout": "Confirm Collector Payout (demo)",
    "btnViewReceipt": "View Settlement Receipt",
    "footerMission": "♿ Assistive Aid Mobility Mission",
    "footerRefurbish": "♻ Responsible Equipment Refurbishing",
    "footerCopyright": "© 2026 ScrapCycle • Reuse. Resell. Repeat."
  },
  "te": {
    "brandTagline": "పునర్వినియోగం. రీసేల్. పునరావృతం.",
    "authEyebrow": "సహాయక చలనశీల పరికరాల పునఃవిక్రయ వేదిక",
    "authHeroTitle1": "మీ నిరుపయోగ చలనశీల పరికరాలను ",
    "authHeroTitle2": "కొత్త అవకాశాలుగా మార్చండి.",
    "authHeroDesc": "ఇంటి వద్దే పికప్ కోసం ధృవీకరించబడిన కలెక్టర్లతో నేరుగా కనెక్ట్ అవ్వండి. దివ్యాంగులు మరియు వృద్ధులకు సహాయం చేయడానికి వీల్‌చైర్లు, వాకర్స్, క్రచెస్ మరియు చేతికర్రలను రీసేల్ చేయండి లేదా దానం చేయండి.",
    "authPerk1": "వీల్‌చైర్లు, వాకర్స్ & క్రచెస్ కోసం ఉచిత డోర్‌స్టెప్ సేకరణ",
    "authPerk2": "సరసమైన మార్కెట్ & పునరుద్ధరణ విలువల ఆధారంగా రీసేల్ ధర నిర్ణయం",
    "authPerk3": "పేద లబ్ధిదారులకు ఉచిత విరాళ పంపిణీ",
    "authCaption": "భారతదేశ వ్యాప్తంగా కమ్యూనిటీ ఆధారిత చలనశీల పునర్వినియోగ నెట్‌వర్క్",
    "signInTab": "సైన్ ఇన్",
    "createAccountTab": "ఖాతా సృష్టించండి",
    "welcomeBackEyebrow": "స్క్రాప్‌సైకిల్‌కు తిరిగి స్వాగతం",
    "joinMovementEyebrow": "పునర్వినియోగ ఉద్యమంలో చేరండి",
    "signInHeading": "మీ ఖాతాలోకి సైన్ ఇన్ చేయండి",
    "createAccountHeading": "మీ ఖాతాను సృష్టించండి",
    "signInSub": "మీరు నమోదు చేసిన వీల్‌చైర్లు, పికప్ షెడ్యూల్‌లు మరియు చెల్లింపులను పొందండి.",
    "createAccountSub": "పునర్వినియోగ పరికరాలను జాబితా చేయడం, పికప్‌లను బుక్ చేయడం మరియు దానం చేయడం ప్రారంభించండి.",
    "fullName": "పూర్తి పేరు",
    "fullNamePlaceholder": "మీ పూర్తి పేరును నమోదు చేయండి",
    "emailAddress": "ఈమెయిల్ చిరునామా",
    "phoneNumber": "ఫోన్ నంబర్",
    "password": "పాస్‌వర్డ్",
    "passwordPlaceholder": "మీ పాస్‌వర్డ్‌ను నమోదు చేయండి",
    "signInButton": "డ్యాష్‌బోర్డ్‌లోకి సైన్ ఇన్ చేయండి",
    "createAccountButton": "నా ఖాతాను సృష్టించండి",
    "orTestPrototype": "లేదా ప్రోటోటైప్‌ను పరీక్షించండి",
    "demoSignIn": "⚡ వన్-క్లిక్ డెమో లాగిన్ (కుశాల్)",
    "termsAgree": "కొనసాగించడం ద్వారా, మీరు మా",
    "termsLink": "నిబంధనలు",
    "andWord": "మరియు",
    "privacyLink": "గోప్యతా విధానానికి అంగీకరిస్తున్నారు.",
    "dontHaveAccount": "ఇంకా ఖాతా లేదా?",
    "createAccountHere": "ఇక్కడ ఖాతా సృష్టించండి",
    "alreadyRegistered": "ఇప్పటికే నమోదు చేసుకున్నారా?",
    "signInHere": "ఇక్కడ సైన్ ఇన్ చేయండి",
    "authFooter": "♿ స్క్రాప్‌సైకిల్ • చలనశీలత మరియు సహాయక సాధనాల స్వావలంబనను ప్రోత్సహిస్తుంది",
    "workspace": "వర్క్‌స్పేస్",
    "listMobilityAid": "＋ మొబిలిటీ పరికరాన్ని చేర్చండి",
    "contributorRole": "మొబిలిటీ సహాయకుడు",
    "memberRole": "వ్యక్తిగత సభ్యుడు",
    "logOut": "లాగ్ అవుట్",
    "mainWorkspaceGroup": "ప్రధాన వర్క్‌స్పేస్",
    "accountTrustGroup": "ఖాతా & భద్రత",
    "navDashboard": "డ్యాష్‌బోర్డ్",
    "navItems": "నా వస్తువులు",
    "navSchedule": "పికప్ షెడ్యూల్",
    "navDonate": "విరాళం ఇవ్వండి",
    "navNotifications": "నోటిఫికేషన్లు",
    "navVerification": "ధృవీకరణ",
    "navProfile": "ప్రొఫైల్",
    "doorstepPartnerTitle": "డోర్‌స్టెప్ పికప్ భాగస్వామి",
    "doorstepPartnerDesc": "ప్రత్యేక రవాణా వాహనాలతో వీల్‌చైర్లు, వాకర్లను కలెక్టర్లు జాగ్రత్తగా సేకరిస్తారు.",
    "vendorHelpline": "వెండర్ హెల్ప్‌లైన్ ↗",
    "circularEcosystem": "చలనశీల సహాయక పరికరాల పునర్వినియోగ వ్యవస్థ",
    "goodToSeeYou": "మిమ్మల్ని చూడటం ఆనందంగా ఉంది,",
    "dashboardSubtitle": "మీ వీల్‌చైర్లు, వాకర్స్, క్రచెస్, రీసేల్ ధరలు మరియు కమ్యూనిటీ విరాళాలను ఇక్కడ ట్రాక్ చేయండి.",
    "listItemBtn": "＋ వస్తువును చేర్చండి",
    "donateAidBtn": "పరికరాన్ని దానం చేయండి",
    "heroTag": "సామాజిక ప్రభావం & మొబిలిటీ పరికరాల పునర్విక్రయం",
    "heroTitle1": "ఒకరి తుక్కు.",
    "heroTitle2": "మరొకరి అమూల్య సంపద.",
    "heroDesc": "ఉపయోగించని లేదా పాడైపోయిన వీల్‌చైర్లు, వాకర్స్ మరియు క్రచెస్‌ను ఇంటి వద్దే సేకరించి సరసమైన రీసేల్ ధర నగదు పొందండి—లేదా అవసరార్థులకు స్వాతంత్ర్యం ప్రసాదించడానికి నేరుగా దానం చేయండి.",
    "heroResellBtn": "పరికరాన్ని రీసేల్ చేయండి",
    "heroExploreDonations": "విరాళాలను చూడండి",
    "verifiedPickupSticker": "ధృవీకరించబడిన పికప్",
    "doorstepCollectorSubtitle": "ఇంటి వద్దకే మొబిలిటీ కలెక్టర్",
    "statAidsInInventory": "ఇన్వెంటరీలోని పరికరాలు",
    "statReadyForPickup": "పికప్‌కు సిద్ధంగా ఉన్నాయి",
    "statAwaitingAction": "చర్య కోసం వేచి ఉంది",
    "statAwaitingNote": "ధృవీకరణ & షెడ్యూలింగ్",
    "statTotalResaleRealized": "లభించిన మొత్తం రీసేల్ ధర",
    "statDisbursementNote": "తక్షణ చెల్లింపు ద్వారా జమ అయింది",
    "statMobilityDonations": "మొబిలిటీ విరాళాలు",
    "statDonationsNote": "వీల్‌చైర్లు, వాకర్స్, క్రచెస్",
    "recentHeading": "ఇటీవలి మొబిలిటీ పరికరాలు & రీసేల్ ధరలు",
    "recentSubtitle": "పరిస్థితి గమనికలు మరియు మార్కెటింగ్ వ్యూహాలతో కూడిన తాజా వీల్‌చైర్లు, వాకర్స్ మరియు క్రచెస్.",
    "viewAllItems": "అన్ని పరికరాలను చూడండి",
    "thEquipmentCategory": "పరికరాలు & వర్గం",
    "thConditionWear": "పరిస్థితి & అరుగుదల",
    "thMarketVsResale": "మార్కెట్ ధర vs రీసేల్ ధర",
    "thMarketingStrategy": "మార్కెటింగ్ వ్యూహం",
    "thStatus": "స్థితి",
    "thAction": "చర్య",
    "pipelineHeading": "మొబిలిటీ పరికరాల జీవితచక్ర పైప్‌లైన్",
    "pipelineSub": "పారదర్శక ధృవీకరణ, సరసమైన రీసేల్ ధర మరియు కలెక్టర్ రాక.",
    "viewChecklist": "చెక్‌లిస్ట్ చూడండి →",
    "donationMission": "మొబిలిటీ ఎయిడ్ మిషన్",
    "restoreDignity": "గౌరవం & స్వతంత్రతను పునరుద్ధరించండి",
    "restoreDignityDesc": "మీ స్టోర్‌రూమ్‌లోని నిరుపయోగ వీల్‌చైర్, వాకర్ లేదా క్రచెస్ జతను బాగుచేసి అవసరమైన దివ్యాంగులకు ఉచితంగా అందించవచ్చు.",
    "aidsDonatedLabel": "దానం చేసిన పరికరాలు",
    "freeHandoffLabel": "ఉచిత డోర్‌స్టెప్ సేకరణ",
    "donateAidActionBtn": "వీల్‌చైర్ లేదా పరికరాన్ని దానం చేయండి →",
    "catalogTitle": "మొబిలిటీ పరికరాల కేటలాగ్",
    "catalogSubtitle": "మీరు నమోదు చేసిన వీల్‌చైర్లు, వాకర్స్, క్రచెస్ మరియు చేతికర్రలను పరిస్థితి మరియు వాణిజ్య రీసేల్ వ్యూహాలతో నిర్వహించండి.",
    "listEquipmentBtn": "＋ మొబిలిటీ పరికరాన్ని నమోదు చేయండి",
    "filterAll": "అన్ని పరికరాలు",
    "filterWheelchairs": "వీల్‌చైర్లు",
    "filterWalkers": "వాకర్స్ & రోలేటర్స్",
    "filterCrutches": "క్రచెస్",
    "filterCanes": "చేతికర్రలు & స్టిక్స్",
    "filterScheduled": "షెడ్యూల్ చేసినవి",
    "filterCompleted": "పూర్తయినవి",
    "cardCondition": "పరిస్థితి:",
    "cardResaleCost": "రీసేల్ ధర",
    "cardSavings": "ఆదా",
    "cardListed": "నమోదైన తేదీ",
    "cardPricingStrategy": "ధర & రీసేల్ వ్యూహం:",
    "cardPickup": "పికప్:",
    "atTime": "సమయం:",
    "commercialInsightTitle": "వాణిజ్య వ్యూహ విశ్లేషణ:",
    "commercialInsightText": "సెకండ్ హ్యాండ్ మొబిలిటీ పరికరాల ధరలన్నీ (వీల్‌చైర్లు, వాకర్స్, క్రచెస్) అసలు MRPకి అనుగుణంగా ఆకర్షణీయమైన రీసేల్ ధరలుగా నిర్ణయించబడ్డాయి. స్థానిక ఆసుపత్రులు, ఫిజియోథెరపీ కేంద్రాలు మరియు కుటుంబాలకు త్వరితగతిన రీసేల్ కావడానికి పునరుద్ధరణ ఖర్చులు ముందే తగ్గించబడ్డాయి.",
    "scheduleTitle": "డోర్‌స్టెప్ పికప్ షెడ్యూల్",
    "scheduleSubtitle": "మీ ఇంటి వద్ద నుండి వీల్‌చైర్లు, వాకర్స్ మరియు క్రచెస్‌ను తీసుకెళ్లడానికి ధృవీకరించబడిన కలెక్టర్లతో సమన్వయం చేసుకోండి.",
    "activeScheduledPickups": "చురుకైన & షెడ్యూల్ చేయబడిన పికప్‌లు",
    "activeScheduledSub": "డోర్‌స్టెప్ సేకరణ మరియు ప్రత్యక్ష రీసేల్ ధర చెల్లింపు కోసం బుక్ చేసిన పరికరాలు.",
    "activeCountBadge": "యాక్టివ్",
    "noItemsReady": "పికప్‌కు సిద్ధంగా ఉన్న పరికరాలు లేవు",
    "noItemsReadyText": "పికప్ బుక్ చేయడానికి వీల్‌చైర్, వాకర్ లేదా క్రచెస్‌ను నమోదు చేసి ధృవీకరణ పూర్తి చేయండి.",
    "verifiedWaitingSlot": "⚠️ ధృవీకరించబడింది; దయచేసి తేదీ మరియు సమయాన్ని ఎంచుకోండి.",
    "schedulePickupBtn": "పికప్ షెడ్యూల్ చేయండి",
    "confirmHandoverBtn": "హ్యాండోవర్ నిర్ధారించండి",
    "logisticsTitle": "కలెక్టర్ లాజిస్టిక్స్ & నిర్వహణ ప్రమాణాలు",
    "logisticsText": "వీల్‌చైర్లు, ఎలక్ట్రానిక్ కంట్రోలర్లు మరియు ఫోల్డింగ్ పరికరాలను రక్షించడానికి కలెక్టర్లు ప్రత్యేక కవర్లతో వస్తారు. నగదు లేదా UPI చెల్లింపు మీ గుమ్మం వద్దే వెంటనే చేయబడుతుంది.",
    "donateTitle": "మొబిలిటీ పరికరాలకు రెండవ జీవితాన్ని ఇవ్వండి",
    "donateSubtitle": "పేద ప్రజలకు స్వేచ్ఛ మరియు కదలికను పునరుద్ధరించడానికి వీల్‌చైర్లు, క్రచెస్ మరియు వాకర్లను దానం చేయండి.",
    "communityOutreach": "❤️ కమ్యూనిటీ మొబిలిటీ సేవ",
    "heartfeltSupport": "హృదయపూర్వక కమ్యూనిటీ మద్దతు",
    "donateBannerHeading": "దానం చేసిన ప్రతి పరికరం ఒకరి జీవితాన్ని మారుస్తుంది.",
    "donateBannerDesc": "తక్కువ ఆదాయ వర్గాలలోని లక్షలాది మంది వృద్ధులు మరియు దివ్యాంగులకు ప్రాథమిక చలనశీల పరికరాలు అందుబాటులో లేవు. మా కలెక్టర్లు మీ వద్ద నుండి పరికరాలను సేకరించి, శుభ్రం చేసి, బాగుచేసి, అవసరమైన వారికి ఉచితంగా అందజేస్తారు.",
    "donateChip1": "ఉచిత డోర్‌స్టెప్ సేకరణ",
    "donateChip2": "ధృవీకరించబడిన మరమ్మతు & శానిటైజేషన్",
    "donateChip3": "ధృవీకరించబడిన గ్రహీతలకు పంపిణీ",
    "submitDonationHeading": "విరాళం అభ్యర్థనను సమర్పించండి",
    "submitDonationDesc": "మీరు ఏ మొబిలిటీ పరికరాన్ని దానం చేయాలనుకుంటున్నారో మాకు తెలియజేయండి.",
    "equipmentToDonate": "దానం చేయవలసిన పరికరం",
    "itemCondition": "పరికర స్థితి",
    "specialNotesStory": "ప్రత్యేక గమనికలు లేదా కథనం",
    "specialNotesPlaceholder": "ఉదాహరణకు: రికవరీ సమయంలో కుటుంబ సభ్యుల కోసం కొనుగోలు చేశాము; ఇప్పుడు వాడటం లేదు. శుభ్రంగా మరియు పని చేసే స్థితిలో ఉంది...",
    "submitDonationBtn": "విరాళం అభ్యర్థనను పంపండి →",
    "selectedPreview": "ఎంచుకున్న పరికరం ప్రివ్యూ",
    "freeDeliveryNotice": "100% ఉచిత సేకరణ మరియు ధృవీకరించబడిన లబ్ధిదారులకు ఉచిత పంపిణీ",
    "impactRecordsTitle": "కమ్యూనిటీ విరాళాల ప్రభావ రికార్డులు",
    "impactRecordsDesc": "పునరుద్ధరించబడిన పరికరాలు పేద లబ్ధిదారులకు, క్లినిక్‌లకు మరియు వృద్ధాశ్రమాలకు అందించబడ్డాయి.",
    "handoffsLabel": "అందించినవి",
    "donorLabel": "దాత:",
    "beneficiaryImpactLabel": "లబ్ధిదారునికి లభించిన ప్రయోజనం:",
    "loggedOnLabel": "నమోదైన తేదీ:",
    "notificationsTitle": "నోటిఫికేషన్లు",
    "notificationsSubtitle": "పరికర తనిఖీలు, కలెక్టర్ రాక మరియు రీసేల్ ధర చెల్లింపుల గురించిన తాజా సమాచారం ఇక్కడ చూడండి.",
    "markAllRead": "అన్నీ చదివినట్లుగా మార్క్ చేయండి",
    "caughtUpTitle": "అన్ని నోటిఫికేషన్లు చూశారు",
    "caughtUpText": "కొత్త అప్‌డేట్‌లు మరియు కలెక్టర్ అలర్ట్‌లు ఇక్కడ కనిపిస్తాయి.",
    "verificationTitle": "నాణ్యత & భద్రతా ధృవీకరణ",
    "verificationSubtitle": "వృద్ధులు మరియు దివ్యాంగుల భద్రత కోసం ప్రతి పరికరం కఠినమైన తనిఖీలకు లోనవుతుంది.",
    "inspectionCardTitle": "4-పాయింట్ల సహాయక పరికరాల భద్రతా తనిఖీ",
    "inspectionCardDesc": "రీసేల్ లేదా విరాళానికి పంపే ముందు ప్రతి వీల్‌చైర్, వాకర్ మరియు క్రచెస్ యొక్క ఫ్రేమ్ భద్రత, బ్రేకింగ్ సామర్థ్యం, టైర్ గ్రిప్ మరియు పరిశుభ్రతలను పూర్తిగా తనిఖీ చేస్తాము.",
    "checklistTitle": "పరికరాల ధృవీకరణ చెక్‌లిస్ట్",
    "valuedAtText": "రీసేల్ ధర:",
    "submittedOnText": "సమర్పించిన తేదీ:",
    "approveValuationBtn": "రీసేల్ ధరను ఆమోదించండి (డెమో)",
    "disbursePayoutBtn": "చెల్లింపు విడుదల చేయండి",
    "giveFeedbackBtn": "అభిప్రాయాన్ని ఇవ్వండి",
    "profileTitle": "మీ ప్రొఫైల్",
    "profileSubtitle": "మీ సంప్రదింపు వివరాలు, క్రియాశీల జాబితాలు మరియు సేవా ప్రభావాన్ని నిర్వహించండి.",
    "activeContributorBadge": "● చురుకైన మొబిలిటీ సహకారి",
    "listedAidsLabel": "నమోదు చేసిన పరికరాలు",
    "donationsLabel": "విరాళాలు",
    "earnedLabel": "లభించిన రీసేల్ మొత్తం",
    "editContactHeading": "సంప్రదింపు వివరాలను సవరించండి",
    "editContactDesc": "స్థానిక కలెక్టర్లు పికప్‌లను సులభంగా సమన్వయం చేసుకోవడానికి మీ ఫోన్ నంబర్ మరియు చిరునామాను ఖచ్చితంగా ఉంచండి.",
    "primaryPhoneLabel": "ప్రధాన ఫోన్ నంబర్ (కలెక్టర్ సమన్వయం కోసం)",
    "saveProfileBtn": "ప్రొఫైల్ మార్పులను సేవ్ చేయండి",
    "modalUploadTitle": "మొబిలిటీ పరికరాన్ని నమోదు చేయండి",
    "modalUploadSub": "సరసమైన రీసేల్ ధర ఆడిట్ కోసం ఫోటోలు మరియు పరిస్థితి వివరాలను సమర్పించండి.",
    "equipmentNameLabel": "పరికర పేరు",
    "equipmentNamePlaceholder": "ఉదా: స్టాండర్డ్ ఫోల్డింగ్ వీల్‌చైర్ లేదా 4-వీల్ రోలేటర్ వాకర్",
    "categoryLabel": "వర్గం",
    "conditionLabel": "పరిస్థితి",
    "originalMrpInput": "అసలు రిటైల్ MRP (₹)",
    "resaleCostInput": "రీసేల్ ధర (₹)",
    "imageUrlLabel": "ఇమేజ్ URL (ఐచ్ఛికం)",
    "conditionNotesLabel": "పరిస్థితి గమనికలు & అరుగుదల వివరాలు",
    "conditionNotesPlaceholder": "పరిస్థితి, బ్రేక్‌ల పనితీరు, టైర్ల గ్రిప్ లేదా మరమ్మతు అవసరమైన భాగాలను వివరించండి...",
    "cancelBtn": "రద్దు చేయండి",
    "submitValuationBtn": "రీసేల్ ఆడిట్ కోసం సమర్పించండి →",
    "modalScheduleTitle": "డోర్‌స్టెప్ పికప్ బుక్ చేయండి",
    "modalScheduleSub": "ఉచిత డోర్‌స్టెప్ సేకరణ మరియు స్పాట్ రీసేల్ ధర చెల్లింపు కోసం తేదీ మరియు సమయాన్ని ఎంచుకోండి.",
    "preferredDate": "పికప్ తేదీ",
    "preferredTimeSlot": "సమయ స్లాట్",
    "pickupAddress": "పికప్ చిరునామా",
    "addressPlaceholder": "ఇంటి నంబర్, వీధి, ల్యాండ్‌మార్క్, ప్రాంతం, నగరం",
    "scheduleModalNotice": "📍 మా ధృవీకరించబడిన మొబిలిటీ కలెక్టర్ రక్షణ కవర్లతో వస్తారు. హ్యాండోవర్ చేసిన వెంటనే రీసేల్ ధర చెల్లించబడుతుంది.",
    "confirmScheduleBtn": "డోర్‌స్టెప్ పికప్ నిర్ధారించండి →",
    "modalFeedbackTitle": "మీ అనుభవానికి రేటింగ్ ఇవ్వండి",
    "modalFeedbackSub": "మా మొబిలిటీ రీసైక్లింగ్ మరియు పంపిణీ సేవలను మరింత మెరుగుపరచడంలో సహాయపడండి.",
    "overallExperience": "మొత్తం అనుభవం",
    "commentsSuggestions": "వ్యాఖ్యలు & సూచనలు",
    "feedbackPlaceholder": "కలెక్టర్ సమయపాలన, రీసేల్ ధర నిర్ణయం లేదా యాప్ ఫీచర్ల గురించి మీ అభిప్రాయాన్ని తెలపండి...",
    "submitFeedbackBtn": "అభిప్రాయాన్ని సమర్పించండి →",
    "btnVerify": "ధృవీకరించండి",
    "btnSchedule": "షెడ్యూల్",
    "btnMarkPaid": "చెల్లించినట్లు మార్క్ చేయండి",
    "btnDetails": "వివరాలు",
    "btnSimulateVerify": "పరిస్థితి ధృవీకరణను అనుకరించండి",
    "btnBookPickup": "డోర్‌స్టెప్ పికప్ బుక్ చేయండి",
    "btnConfirmPayout": "చెల్లింపును నిర్ధారించండి (డెమో)",
    "btnViewReceipt": "చెల్లింపు రసీదును చూడండి",
    "footerMission": "♿ సహాయక పరికరాల చలనశీలతా మిషన్",
    "footerRefurbish": "♻ బాధ్యతాయుత పరికరాల పునరుద్ధరణ",
    "footerCopyright": "© 2026 స్క్రాప్‌సైకిల్ • పునర్వినియోగం. రీసేల్. పునరావృతం."
  },
  "kn": {
    "brandTagline": "ಮರುಬಳಕೆ. ಮರುಮಾರಾಟ. ಪುನರಾವರ್ತನೆ.",
    "authEyebrow": "ಸಹಾಯಕ ಚಲನಶೀಲತೆ ಸಾಧನಗಳ ಮರುಮಾರಾಟ ವೇದಿಕೆ",
    "authHeroTitle1": "ನಿಮ್ಮ ಬಳಕೆಯಾಗದ ಚಲನಶೀಲತೆ ಸಾಧನಗಳನ್ನು ",
    "authHeroTitle2": "ಹೊಸ ಸಾಧ್ಯತೆಗಳಾಗಿ ಪರಿವರ್ತಿಸಿ.",
    "authHeroDesc": "ಮನೆ ಬಾಗಿಲಲ್ಲೇ ಪಿಕಪ್ ಮಾಡಲು ಪರಿಶೀಲಿಸಿದ ಕಲೆಕ್ಟರ್‌ಗಳೊಂದಿಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕ ಸಾಧಿಸಿ. ವಿಕಲಚೇತನರು ಮತ್ತು ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ನೆರವಾಗಲು ಗಾಲಿಕುರ್ಚಿಗಳು, ವಾಕರ್‌ಗಳು, ಕ್ರಚಸ್‌ಗಳು ಮತ್ತು ಬೆತ್ತಗಳನ್ನು ಮರುಮಾರಾಟ ಮಾಡಿ ಅಥವಾ ದಾನ ಮಾಡಿ.",
    "authPerk1": "ಗಾಲಿಕುರ್ಚಿಗಳು, ವಾಕರ್‌ಗಳು ಮತ್ತು ಕ್ರಚಸ್‌ಗಳಿಗಾಗಿ ಉಚಿತ ಮನೆಬಾಗಿಲಿನ ಸಂಗ್ರಹಣೆ",
    "authPerk2": "ನ್ಯಾಯಯುತ ಮಾರುಕಟ್ಟೆ ಮತ್ತು ನವೀಕರಣ ಮೌಲ್ಯಗಳ ಆಧಾರದ ಮೇಲೆ ಮರುಮಾರಾಟ ವೆಚ್ಚ",
    "authPerk3": "ಅರ್ಹ ನಿರ್ಗತಿಕ ಫಲಾನುಭವಿಗಳಿಗೆ ಉಚಿತ ದೇಣಿಗೆ ತಲುಪಿಸುವಿಕೆ",
    "authCaption": "ಭಾರತದಾದ್ಯಂತ ಸಮುದಾಯ ಚಾಲಿತ ವೃತ್ತಾಕಾರದ ಚಲನಶೀಲತಾ ನೆಟ್‌ವರ್ಕ್",
    "signInTab": "ಸೈನ್ ಇನ್",
    "createAccountTab": "ಖಾತೆ ರಚಿಸಿ",
    "welcomeBackEyebrow": "ಸ್ಕ್ರ್ಯಾಪ್‌ಸೈಕಲ್‌ಗೆ ಮರಳಿ ಸುಸ್ವಾಗತ",
    "joinMovementEyebrow": "ಮರುಬಳಕೆ ಆಂದೋಲನದಲ್ಲಿ ಭಾಗವಹಿಸಿ",
    "signInHeading": "ನಿಮ್ಮ ಖಾತೆಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ",
    "createAccountHeading": "ನಿಮ್ಮ ಖಾತೆಯನ್ನು ರಚಿಸಿ",
    "signInSub": "ನಿಮ್ಮ ಗಾಲಿಕುರ್ಚಿಗಳು, ಪಿಕಪ್ ವೇಳಾಪಟ್ಟಿಗಳು ಮತ್ತು ಪಾವತಿಗಳನ್ನು ಪ್ರವೇಶಿಸಿ.",
    "createAccountSub": "ಮರುಬಳಕೆಯ ಸಾಧನಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡಲು, ಪಿಕಪ್ ಕಾಯ್ದಿರಿಸಲು ಮತ್ತು ದಾನ ಮಾಡಲು ಇಂದೇ ಆರಂಭಿಸಿ.",
    "fullName": "ಪೂರ್ಣ ಹೆಸರು",
    "fullNamePlaceholder": "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
    "emailAddress": "ಇಮೇಲ್ ವಿಳಾಸ",
    "phoneNumber": "ಫೋನ್ ಸಂಖ್ಯೆ",
    "password": "ಪಾಸ್‌ವರ್ಡ್",
    "passwordPlaceholder": "ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",
    "signInButton": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ",
    "createAccountButton": "ನನ್ನ ಖಾತೆಯನ್ನು ರಚಿಸಿ",
    "orTestPrototype": "ಅಥವಾ ಮಾದರಿಯನ್ನು ಪರೀಕ್ಷಿಸಿ",
    "demoSignIn": "⚡ ಒಂದೇ ಕ್ಲಿಕ್ ಡೆಮೊ ಸೈನ್ ಇನ್ (ಕುಶಾಲ್)",
    "termsAgree": "ಮುಂದುವರಿಯುವ ಮೂಲಕ, ನೀವು ನಮ್ಮ",
    "termsLink": "ನಿಯಮಗಳು",
    "andWord": "ಮತ್ತು",
    "privacyLink": "ಗೌಪ್ಯತಾ ನೀತಿಯನ್ನು ಒಪ್ಪುತ್ತೀರಿ.",
    "dontHaveAccount": "ಇನ್ನೂ ಖಾತೆ ಇಲ್ಲವೇ?",
    "createAccountHere": "ಇಲ್ಲಿ ಖಾತೆ ರಚಿಸಿ",
    "alreadyRegistered": "ಈಗಾಗಲೇ ನೋಂದಾಯಿಸಿಕೊಂಡಿದ್ದೀರಾ?",
    "signInHere": "ಇಲ್ಲಿ ಸೈನ್ ಇನ್ ಮಾಡಿ",
    "authFooter": "♿ ಸ್ಕ್ರ್ಯಾಪ್‌ಸೈಕಲ್ • ಚಲನಶೀಲತೆ ಮತ್ತು ಸಹಾಯಕ ಸಾಧನಗಳ ಸ್ವಾವಲಂಬನೆಯ ಸಬಲೀಕರಣ",
    "workspace": "ಕಾರ್ಯಸ್ಥಳ",
    "listMobilityAid": "＋ ಚಲನಶೀಲತೆ ಸಾಧನ ಸೇರಿಸಿ",
    "contributorRole": "ಚಲನಶೀಲತೆ ಕೊಡುಗೆದಾರ",
    "memberRole": "ವೈಯಕ್ತಿಕ ಸದಸ್ಯ",
    "logOut": "ಲಾಗ್ ಔಟ್",
    "mainWorkspaceGroup": "ಮುಖ್ಯ ಕಾರ್ಯಸ್ಥಳ",
    "accountTrustGroup": "ಖಾತೆ & ವಿಶ್ವಾಸಾರ್ಹತೆ",
    "navDashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    "navItems": "ನನ್ನ ವಸ್ತುಗಳು",
    "navSchedule": "ಪಿಕಪ್ ವೇಳಾಪಟ್ಟಿ",
    "navDonate": "ದಾನ ಮಾಡಿ",
    "navNotifications": "ಅಧಿಸೂಚನೆಗಳು",
    "navVerification": "ಪರಿಶೀಲನೆ",
    "navProfile": "ಪ್ರೊಫೈಲ್",
    "doorstepPartnerTitle": "ಮನೆಬಾಗಿಲಿನ ಪಿಕಪ್ ಪಾಲುದಾರ",
    "doorstepPartnerDesc": "ವಿಶೇಷ ಸಾರಿಗೆಯೊಂದಿಗೆ ಗಾಲಿಕುರ್ಚಿಗಳು ಮತ್ತು ವಾಕರ್‌ಗಳನ್ನು ಸಂಗ್ರಾಹಕರು ಸುರಕ್ಷಿತವಾಗಿ ನಿರ್ವಹಿಸುತ್ತಾರೆ.",
    "vendorHelpline": "ಸಹಾಯವಾಣಿ ↗",
    "circularEcosystem": "ಚಲನಶೀಲತೆ ಸಹಾಯಕ ಸಾಧನಗಳ ಮರುಬಳಕೆ ವ್ಯವಸ್ಥೆ",
    "goodToSeeYou": "ನಿಮ್ಮನ್ನು ನೋಡಲು ಸಂತೋಷವಾಗಿದೆ,",
    "dashboardSubtitle": "ನಿಮ್ಮ ಮರುಬಳಕೆಯ ಗಾಲಿಕುರ್ಚಿಗಳು, ವಾಕರ್‌ಗಳು, ಕ್ರಚಸ್‌ಗಳು, ಮರುಮಾರಾಟ ವೆಚ್ಚಗಳು ಮತ್ತು ಸಮುದಾಯ ದೇಣಿಗೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",
    "listItemBtn": "＋ ವಸ್ತುವನ್ನು ಸೇರಿಸಿ",
    "donateAidBtn": "ಸಾಧನವನ್ನು ದಾನ ಮಾಡಿ",
    "heroTag": "ಸಾಮಾಜಿಕ ಪರಿಣಾಮ & ಚಲನಶೀಲತಾ ಸಾಧನಗಳ ಮರುಮಾರಾಟ",
    "heroTitle1": "ಒಬ್ಬರ ಗುಜರಿ.",
    "heroTitle2": "ಮತ್ತೊಬ್ಬರ ಬೆಲೆಬಾಳುವ ಸಂಪತ್ತು.",
    "heroDesc": "ಬಳಕೆಯಾಗದ ಅಥವಾ ಹಾನಿಗೊಳಗಾದ ಗಾಲಿಕುರ್ಚಿಗಳು, ವಾಕರ್‌ಗಳು ಮತ್ತು ಕ್ರಚಸ್‌ಗಳನ್ನು ಮನೆಬಾಗಿಲಿನ ಸಂಗ್ರಹದ ಮೂಲಕ ನ್ಯಾಯಯುತ ಮರುಮಾರಾಟ ವೆಚ್ಚ ಹಣವಾಗಿ ಪರಿವರ್ತಿಸಿ—ಅಥವಾ ಅಗತ್ಯವಿರುವವರ ಸ್ವಾತಂತ್ರ್ಯವನ್ನು ಮರಳಿ ತರಲು ನೇರವಾಗಿ ದಾನ ಮಾಡಿ.",
    "heroResellBtn": "ಸಾಧನವನ್ನು ಮರುಮಾರಾಟ ಮಾಡಿ",
    "heroExploreDonations": "ದೇಣಿಗೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    "verifiedPickupSticker": "ದೃಢೀಕರಿಸಿದ ಪಿಕಪ್",
    "doorstepCollectorSubtitle": "ಮನೆಬಾಗಿಲಿನ ಸಂಗ್ರಾಹಕ",
    "statAidsInInventory": "ದಾಸ್ತಾನಿನಲ್ಲಿರುವ ಸಾಧನಗಳು",
    "statReadyForPickup": "ಪಿಕಪ್‌ಗೆ ಸಿದ್ಧವಾಗಿವೆ",
    "statAwaitingAction": "ಕ್ರಮಕ್ಕಾಗಿ ಬಾಕಿ ಇದೆ",
    "statAwaitingNote": "ಪರಿಶೀಲನೆ ಮತ್ತು ವೇಳಾಪಟ್ಟಿ",
    "statTotalResaleRealized": "ಗಳಿಸಿದ ಒಟ್ಟು ಮರುಮಾರಾಟ ವೆಚ್ಚ",
    "statDisbursementNote": "ತ್ವರಿತ ಪಾವತಿ ಮೂಲಕ ಜಮಾ",
    "statMobilityDonations": "ಚಲನಶೀಲತೆ ದೇಣಿಗೆಗಳು",
    "statDonationsNote": "ಗಾಲಿಕುರ್ಚಿಗಳು, ವಾಕರ್‌ಗಳು, ಕ್ರಚಸ್‌ಗಳು",
    "recentHeading": "ಇತ್ತೀಚಿನ ಚಲನಶೀಲತೆ ಸಾಧನಗಳು & ಮರುಮಾರಾಟ ವೆಚ್ಚಗಳು",
    "recentSubtitle": "ಸ್ಥಿತಿ ವಿವರಣೆಗಳು ಮತ್ತು ಮಾರ್ಕೆಟಿಂಗ್ ಬೆಲೆ ತಂತ್ರಗಳೊಂದಿಗೆ ಇತ್ತೀಚಿನ ಗಾಲಿಕುರ್ಚಿಗಳು, ವಾಕರ್‌ಗಳು ಮತ್ತು ಕ್ರಚಸ್‌ಗಳು.",
    "viewAllItems": "ಎಲ್ಲಾ ವಸ್ತುಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    "thEquipmentCategory": "ಸಾಧನ & ವರ್ಗ",
    "thConditionWear": "ಸ್ಥಿತಿ & ಸವೆತ",
    "thMarketVsResale": "ಮಾರುಕಟ್ಟೆ vs ಮರುಮಾರಾಟ ವೆಚ್ಚ",
    "thMarketingStrategy": "ಮಾರ್ಕೆಟಿಂಗ್ ಬೆಲೆ ತಂತ್ರ",
    "thStatus": "ಸ್ಥಿತಿ",
    "thAction": "ಕ್ರಮ",
    "pipelineHeading": "ಚಲನಶೀಲತೆ ಸಾಧನಗಳ ಜೀವಿತಾವಧಿ ಹಂತಗಳು",
    "pipelineSub": "ಪಾರದರ್ಶಕ ಪರಿಶೀಲನೆ, ನ್ಯಾಯಯುತ ಮರುಮಾರಾಟ ವೆಚ್ಚ ಮತ್ತು ಸಂಗ್ರಾಹಕರ ರವಾನೆ.",
    "viewChecklist": "ಪರಿಶೀಲನಾ ಪಟ್ಟಿ ವೀಕ್ಷಿಸಿ →",
    "donationMission": "ಚಲನಶೀಲತಾ ನೆರವು ಅಭಿಯಾನ",
    "restoreDignity": "ಘನತೆ ಮತ್ತು ಸ್ವಾತಂತ್ರ್ಯವನ್ನು ಮರುಸ್ಥಾಪಿಸಿ",
    "restoreDignityDesc": "ನಿಮ್ಮ ಕೋಣೆಯಲ್ಲಿರುವ ಬಳಕೆಯಾಗದ ಗಾಲಿಕುರ್ಚಿ, ವಾಕರ್ ಅಥವಾ ಕ್ರಚಸ್‌ಗಳನ್ನು ದುರಸ್ತಿ ಮಾಡಿ ಅಗತ್ಯವಿರುವ ವಿಕಲಚೇತನರಿಗೆ ಉಚಿತವಾಗಿ ನೀಡಬಹುದು.",
    "aidsDonatedLabel": "ದಾನ ಮಾಡಿದ ಸಾಧನಗಳು",
    "freeHandoffLabel": "ಉಚಿತ ಮನೆಬಾಗಿಲಿನ ಹಸ್ತಾಂತರ",
    "donateAidActionBtn": "ಗಾಲಿಕುರ್ಚಿ ಅಥವಾ ಸಾಧನವನ್ನು ದಾನ ಮಾಡಿ →",
    "catalogTitle": "ಚಲನಶೀಲತೆ ಸಾಧನಗಳ ಪಟ್ಟಿ",
    "catalogSubtitle": "ನಿಮ್ಮ ಗಾಲಿಕುರ್ಚಿಗಳು, ವಾಕರ್‌ಗಳು, ಕ್ರಚಸ್‌ಗಳು ಮತ್ತು ಬೆತ್ತಗಳನ್ನು ಸ್ಥಿತಿ ಮತ್ತು ವಾಣಿಜ್ಯ ಮರುಮಾರಾಟ ತಂತ್ರಗಳೊಂದಿಗೆ ನಿರ್ವಹಿಸಿ.",
    "listEquipmentBtn": "＋ ಚಲನಶೀಲತೆ ಸಾಧನ ನೋಂದಾಯಿಸಿ",
    "filterAll": "ಎಲ್ಲಾ ಸಾಧನಗಳು",
    "filterWheelchairs": "ಗಾಲಿಕುರ್ಚಿಗಳು",
    "filterWalkers": "ವಾಕರ್‌ಗಳು & ರೋಲೇಟರ್‌ಗಳು",
    "filterCrutches": "ಕ್ರಚಸ್‌ಗಳು",
    "filterCanes": "ಬೆತ್ತಗಳು & ಸ್ಟಿಕ್‌ಗಳು",
    "filterScheduled": "ನಿಗದಿತ ವಸ್ತುಗಳು",
    "filterCompleted": "ಪೂರ್ಣಗೊಂಡವು",
    "cardCondition": "ಸ್ಥಿತಿ:",
    "cardResaleCost": "ಮರುಮಾರಾಟ ವೆಚ್ಚ",
    "cardSavings": "ಉಳಿತಾಯ",
    "cardListed": "ದಿನಾಂಕ",
    "cardPricingStrategy": "ಬೆಲೆ & ಮರುಮಾರಾಟ ತಂತ್ರ:",
    "cardPickup": "ಪಿಕಪ್:",
    "atTime": "ಸಮಯ:",
    "commercialInsightTitle": "ವಾಣಿಜ್ಯ ತಂತ್ರ ಒಳನೋಟ:",
    "commercialInsightText": "ಬಳಸಿದ ಚಲನಶೀಲತೆ ಸಾಧನಗಳ (ಗಾಲಿಕುರ್ಚಿಗಳು, ವಾಕರ್‌ಗಳು, ಕ್ರಚಸ್‌ಗಳು) ಬೆಲೆಗಳನ್ನು ಮೂಲ MRP ಆಧಾರದಲ್ಲಿ ಆಕರ್ಷಕ ಮರುಮಾರಾಟ ವೆಚ್ಚವಾಗಿ ನಿಗದಿಪಡಿಸಲಾಗಿದೆ. ಆಸ್ಪತ್ರೆಗಳು, ಫಿಸಿಯೋಥೆರಪಿ ಕೇಂದ್ರಗಳು ಮತ್ತು ಕುಟುಂಬಗಳಿಗೆ ತ್ವರಿತವಾಗಿ ಮರುಮಾರಾಟ ಮಾಡಲು ದುರಸ್ತಿ ವೆಚ್ಚವನ್ನು ಮೊದಲೇ ಕಳೆಯಲಾಗಿದೆ.",
    "scheduleTitle": "ಮನೆಬಾಗಿಲಿನ ಪಿಕಪ್ ವೇಳಾಪಟ್ಟಿ",
    "scheduleSubtitle": "ನಿಮ್ಮ ಮನೆಬಾಗಿಲಿನಿಂದ ಗಾಲಿಕುರ್ಚಿಗಳು, ವಾಕರ್‌ಗಳು ಮತ್ತು ಕ್ರಚಸ್‌ಗಳನ್ನು ಸಂಗ್ರಹಿಸಲು ಪರಿಶೀಲಿಸಿದ ಸಂಗ್ರಾಹಕರೊಂದಿಗೆ ಸಂಯೋಜಿಸಿ.",
    "activeScheduledPickups": "ಸಕ್ರಿಯ ಮತ್ತು ನಿಗದಿತ ಚಲನಶೀಲತಾ ಪಿಕಪ್‌ಗಳು",
    "activeScheduledSub": "ಮನೆಬಾಗಿಲಿನ ಸಂಗ್ರಹ ಮತ್ತು ನೇರ ಮರುಮಾರಾಟ ವೆಚ್ಚ ಪಾವತಿಗಾಗಿ ಕಾಯ್ದಿರಿಸಲಾದ ಪರಿಶೀಲಿಸಿದ ವಸ್ತುಗಳು.",
    "activeCountBadge": "ಸಕ್ರಿಯ",
    "noItemsReady": "ಪಿಕಪ್‌ಗೆ ಯಾವುದೇ ಸಾಧನಗಳು ಸಿದ್ಧವಾಗಿಲ್ಲ",
    "noItemsReadyText": "ಪಿಕಪ್ ಬುಕ್ ಮಾಡಲು ಗಾಲಿಕುರ್ಚಿ, ವಾಕರ್ ಅಥವಾ ಕ್ರಚಸ್‌ಗಳನ್ನು ನೋಂದಾಯಿಸಿ ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಳಿಸಿ.",
    "verifiedWaitingSlot": "⚠️ ಪರಿಶೀಲಿಸಲಾಗಿದೆ; ದಯವಿಟ್ಟು ದಿನಾಂಕ ಮತ್ತು ಸಮಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    "schedulePickupBtn": "ಪಿಕಪ್ ನಿಗದಿಪಡಿಸಿ",
    "confirmHandoverBtn": "ಹಸ್ತಾಂತರವನ್ನು ದೃಢೀಕರಿಸಿ",
    "logisticsTitle": "ಸಂಗ್ರಾಹಕರ ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಮತ್ತು ನಿರ್ವಹಣಾ ಮಾನದಂಡಗಳು",
    "logisticsText": "ಗಾಲಿಕುರ್ಚಿಗಳು, ಎಲೆಕ್ಟ್ರಾನಿಕ್ ನಿಯಂತ್ರಕಗಳು ಮತ್ತು ಫೋಲ್ಡಿಂಗ್ ಭಾಗಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿಡಲು ಸಂಗ್ರಾಹಕರು ರಕ್ಷಣಾತ್ಮಕ ಹೊದಿಕೆಗಳೊಂದಿಗೆ ಬರುತ್ತಾರೆ. ನಗದು ಅಥವಾ ಯುಪಿಐ ಪಾವತಿಯನ್ನು ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಲ್ಲೇ ಮಾಡಲಾಗುತ್ತದೆ.",
    "donateTitle": "ಚಲನಶೀಲತಾ ಸಾಧನಗಳಿಗೆ ಎರಡನೇ ಜೀವನ ನೀಡಿ",
    "donateSubtitle": "ಅರ್ಹ ನಿರ್ಗತಿಕರಿಗೆ ಸ್ವಾತಂತ್ರ್ಯ ಮತ್ತು ಚಲನಶೀಲತೆಯನ್ನು ಮರಳಿ ನೀಡಲು ಗಾಲಿಕುರ್ಚಿಗಳು, ಕ್ರಚಸ್‌ಗಳು ಮತ್ತು ವಾಕರ್‌ಗಳನ್ನು ದಾನ ಮಾಡಿ.",
    "communityOutreach": "❤️ ಸಮುದಾಯ ಚಲನಶೀಲತಾ ಸೇವೆ",
    "heartfeltSupport": "ಹೃತ್ಪೂರ್ವಕ ಸಮುದಾಯ ಬೆಂಬಲ",
    "donateBannerHeading": "ದಾನ ಮಾಡಿದ ಪ್ರತಿಯೊಂದು ಸಾಧನವು ಒಂದು ಜೀವವನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ.",
    "donateBannerDesc": "ಕಡಿಮೆ ಆದಾಯದ ಕುಟುಂಬಗಳ ಲಕ್ಷಾಂತರ ಹಿರಿಯರು ಮತ್ತು ವಿಕಲಚೇತನರಿಗೆ ಮೂಲಭೂತ ಚಲನಶೀಲತೆ ಸಾಧನಗಳು ಲಭ್ಯವಿಲ್ಲ. ನಮ್ಮ ಕಲೆಕ್ಟರ್‌ಗಳ ಜಾಲವು ಸಾಧನಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ, ಸ್ವಚ್ಛಗೊಳಿಸಿ, ದುರಸ್ತಿ ಮಾಡಿ ನೇರವಾಗಿ ಉಚಿತವಾಗಿ ಅರ್ಹರಿಗೆ ತಲುಪಿಸುತ್ತದೆ.",
    "donateChip1": "ಉಚಿತ ಮನೆಬಾಗಿಲಿನ ಸಂಗ್ರಹಣೆ",
    "donateChip2": "ಪ್ರಮಾಣೀಕೃತ ದುರಸ್ತಿ ಮತ್ತು ನೈರ್ಮಲ್ಯ",
    "donateChip3": "ಪರಿಶೀಲಿಸಿದ ಫಲಾನುಭವಿಗಳಿಗೆ ವಿತರಣೆ",
    "submitDonationHeading": "ದೇಣಿಗೆ ವಿನಂತಿಯನ್ನು ಸಲ್ಲಿಸಿ",
    "submitDonationDesc": "ನೀವು ಯಾವ ಚಲನಶೀಲತೆ ಸಾಧನವನ್ನು ದಾನ ಮಾಡಲು ಬಯಸುತ್ತೀರಿ ಎಂದು ತಿಳಿಸಿ.",
    "equipmentToDonate": "ದಾನ ಮಾಡಬೇಕಾದ ಸಾಧನ",
    "itemCondition": "ವಸ್ತುವಿನ ಸ್ಥಿತಿ",
    "specialNotesStory": "ವಿಶೇಷ ಟಿಪ್ಪಣಿಗಳು ಅಥವಾ ಕಥೆ",
    "specialNotesPlaceholder": "ಉದಾಹರಣೆಗೆ: ಚೇತರಿಕೆಯ ಸಮಯದಲ್ಲಿ ಕುಟುಂಬದವರಿಗಾಗಿ ಖರೀದಿಸಲಾಯಿತು; ಈಗ ಬಳಕೆಯಾಗುತ್ತಿಲ್ಲ. ಸ್ವಚ್ಛವಾಗಿದೆ ಮತ್ತು ಚಾಲನೆಯಲ್ಲಿದೆ...",
    "submitDonationBtn": "ದೇಣಿಗೆ ವಿನಂತಿಯನ್ನು ಸಲ್ಲಿಸಿ →",
    "selectedPreview": "ಆಯ್ಕೆಮಾಡಿದ ಸಾಧನದ ಪೂರ್ವವೀಕ್ಷಣೆ",
    "freeDeliveryNotice": "100% ಉಚಿತ ಸಂಗ್ರಹಣೆ ಮತ್ತು ಪರಿಶೀಲಿಸಿದ ಫಲಾನುಭವಿಗಳಿಗೆ ಉಚಿತ ವಿತರಣೆ",
    "impactRecordsTitle": "ಸಮುದಾಯ ದೇಣಿಗೆ ಪ್ರಭಾವದ ದಾಖಲೆಗಳು",
    "impactRecordsDesc": "ದುರಸ್ತಿಪಡಿಸಿದ ಸಾಧನಗಳನ್ನು ನಿರ್ಗತಿಕ ಫಲಾನುಭವಿಗಳು, ಚಿಕಿತ್ಸಾಲಯಗಳು ಮತ್ತು ವೃದ್ಧಾಶ್ರಮಗಳಿಗೆ ತಲುಪಿಸಲಾಗಿದೆ.",
    "handoffsLabel": "ವಿತರಣೆಗಳು",
    "donorLabel": "ದಾನಿ:",
    "beneficiaryImpactLabel": "ಫಲಾನುಭವಿಯ ಮೇಲಿನ ಪ್ರಭಾವ:",
    "loggedOnLabel": "ದಾಖಲಾದ ದಿನಾಂಕ:",
    "notificationsTitle": "ಅಧಿಸೂಚನೆಗಳು",
    "notificationsSubtitle": "ಸಾಧನ ತಪಾಸಣೆ, ಸಂಗ್ರಾಹಕರ ಆಗಮನ ಮತ್ತು ಮರುಮಾರಾಟ ವೆಚ್ಚ ಪಾವತಿ ವಿತರಣೆಗಳ ಬಗ್ಗೆ ನವೀಕೃತವಾಗಿರಿ.",
    "markAllRead": "ಎಲ್ಲವನ್ನೂ ಓದಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ",
    "caughtUpTitle": "ಎಲ್ಲವೂ ಓದಲಾಗಿದೆ",
    "caughtUpText": "ಹೊಸ ನವೀಕರಣಗಳು ಮತ್ತು ಎಚ್ಚರಿಕೆಗಳು ಇಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ.",
    "verificationTitle": "ಗುಣಮಟ್ಟ ಮತ್ತು ಸುರಕ್ಷತಾ ಪರಿಶೀಲನೆ",
    "verificationSubtitle": "ಹಿರಿಯರು ಮತ್ತು ವಿಕಲಚೇತನರ ಸುರಕ್ಷತೆಗಾಗಿ ಪ್ರತಿಯೊಂದು ಸಾಧನವು ಕಟ್ಟುನಿಟ್ಟಾದ ತಪಾಸಣೆಗೆ ಒಳಗಾಗುತ್ತದೆ.",
    "inspectionCardTitle": "4-ಹಂತದ ಸಹಾಯಕ ಸಾಧನಗಳ ಸುರಕ್ಷತಾ ತಪಾಸಣೆ",
    "inspectionCardDesc": "ಮರುಮಾರಾಟ ಅಥವಾ ದಾನಕ್ಕೆ ಕಳುಹಿಸುವ ಮೊದಲು ಪ್ರತಿ ಗಾಲಿಕುರ್ಚಿ, ವಾಕರ್ ಮತ್ತು ಕ್ರಚಸ್‌ನ ಫ್ರೇಮ್ ಸುರಕ್ಷತೆ, ಬ್ರೇಕಿಂಗ್ ಸಾಮರ್ಥ್ಯ, ಟೈರ್ ಮತ್ತು ನೈರ್ಮಲ್ಯವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ.",
    "checklistTitle": "ಸಾಧನ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ",
    "valuedAtText": "ಮರುಮಾರಾಟ ವೆಚ್ಚ:",
    "submittedOnText": "ಸಲ್ಲಿಸಿದ ದಿನಾಂಕ:",
    "approveValuationBtn": "ಮರುಮಾರಾಟ ವೆಚ್ಚ ಅನುಮೋದಿಸಿ (ಡೆಮೊ)",
    "disbursePayoutBtn": "ಪಾವತಿಯನ್ನು ಬಿಡುಗಡೆ ಮಾಡಿ",
    "giveFeedbackBtn": "ಪ್ರತಿಕ್ರಿಯೆ ನೀಡಿ",
    "profileTitle": "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್",
    "profileSubtitle": "ನಿಮ್ಮ ಸಂಪರ್ಕ ವಿವರಗಳು, ಸಕ್ರಿಯ ಪಟ್ಟಿಗಳು ಮತ್ತು ಸಮುದಾಯ ಪ್ರಭಾವವನ್ನು ನಿರ್ವಹಿಸಿ.",
    "activeContributorBadge": "● ಸಕ್ರಿಯ ಚಲನಶೀಲತಾ ಕೊಡುಗೆದಾರ",
    "listedAidsLabel": "ಪಟ್ಟಿ ಮಾಡಲಾದ ಸಾಧನಗಳು",
    "donationsLabel": "ದೇಣಿಗೆಗಳು",
    "earnedLabel": "ಗಳಿಸಿದ ಮರುಮಾರಾಟ ಹಣ",
    "editContactHeading": "ಸಂಪರ್ಕ ಮಾಹಿತಿಯನ್ನು ಸಂಪಾದಿಸಿ",
    "editContactDesc": "ಸ್ಥಳೀಯ ಸಂಗ್ರಾಹಕರು ಪಿಕಪ್‌ಗಳನ್ನು ಸುಲಭವಾಗಿ ಸಂಯೋಜಿಸಲು ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆ ಮತ್ತು ವಿಳಾಸವನ್ನು ನಿಖರವಾಗಿ ಇರಿಸಿ.",
    "primaryPhoneLabel": "ಪ್ರಾಥಮಿಕ ಫೋನ್ ಸಂಖ್ಯೆ (ಸಂಗ್ರಾಹಕರ ಸಮನ್ವಯಕ್ಕಾಗಿ)",
    "saveProfileBtn": "ಪ್ರೊಫೈಲ್ ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ",
    "modalUploadTitle": "ಚಲನಶೀಲತೆ ಸಾಧನವನ್ನು ನೋಂದಾಯಿಸಿ",
    "modalUploadSub": "ನ್ಯಾಯಯುತ ಮರುಮಾರಾಟ ವೆಚ್ಚ ಆಡಿಟ್‌ಗಾಗಿ ಫೋಟೋಗಳು ಮತ್ತು ಸ್ಥಿತಿ ವಿವರಗಳನ್ನು ಸಲ್ಲಿಸಿ.",
    "equipmentNameLabel": "ಸಾಧನದ ಹೆಸರು",
    "equipmentNamePlaceholder": "ಉದಾ: ಸ್ಟ್ಯಾಂಡರ್ಡ್ ಫೋಲ್ಡಿಂಗ್ ಗಾಲಿಕುರ್ಚಿ ಅಥವಾ 4-ವ್ಹೀಲ್ ರೋಲೇಟರ್ ವಾಕರ್",
    "categoryLabel": "ವರ್ಗ",
    "conditionLabel": "ಸ್ಥಿತಿ",
    "originalMrpInput": "ಮೂಲ ಚಿಲ್ಲರೆ MRP (₹)",
    "resaleCostInput": "ಮರುಮಾರಾಟ ವೆಚ್ಚ (₹)",
    "imageUrlLabel": "ಚಿತ್ರ URL (ಐಚ್ಛಿಕ)",
    "conditionNotesLabel": "ಸ್ಥಿತಿ ಟಿಪ್ಪಣಿಗಳು & ಸವೆತದ ವಿವರಗಳು",
    "conditionNotesPlaceholder": "ಸಾಧನದ ಸ್ಥಿತಿ, ಬ್ರೇಕ್ ಕಾರ್ಯಕ್ಷಮತೆ, ಟೈರ್ ಅಥವಾ ದುರಸ್ತಿ ಅಗತ್ಯವಿರುವ ಭಾಗಗಳನ್ನು ವಿವರಿಸಿ...",
    "cancelBtn": "ರದ್ದುಮಾಡಿ",
    "submitValuationBtn": "ಮರುಮಾರಾಟ ಆಡಿಟ್‌ಗೆ ಸಲ್ಲಿಸಿ →",
    "modalScheduleTitle": "ಮನೆಬಾಗಿಲಿನ ಪಿಕಪ್ ಬುಕ್ ಮಾಡಿ",
    "modalScheduleSub": "ಉಚಿತ ಮನೆಬಾಗಿಲಿನ ಸಂಗ್ರಹಣೆ ಮತ್ತು ತಕ್ಷಣದ ಮರುಮಾರಾಟ ವೆಚ್ಚ ಪಾವತಿಗಾಗಿ ದಿನಾಂಕ ಮತ್ತು ಸಮಯದ ಸ್ಲಾಟ್ ಆಯ್ಕೆಮಾಡಿ.",
    "preferredDate": "ಪಿಕಪ್ ದಿನಾಂಕ",
    "preferredTimeSlot": "ಸಮಯದ ಸ್ಲಾಟ್",
    "pickupAddress": "ಪಿಕಪ್ ವಿಳಾಸ",
    "addressPlaceholder": "ಮನೆ ಸಂಖ್ಯೆ, ರಸ್ತೆ, ಪ್ರಮುಖ ಸ್ಥಳ, ಬಡಾವಣೆ, ನಗರ",
    "scheduleModalNotice": "📍 ನಮ್ಮ ಪರಿಶೀಲಿಸಿದ ಸಂಗ್ರಾಹಕರು ರಕ್ಷಣಾತ್ಮಕ ಹೊದಿಕೆಗಳೊಂದಿಗೆ ಬರುತ್ತಾರೆ. ಹಸ್ತಾಂತರದ ನಂತರ ಮರುಮಾರಾಟ ವೆಚ್ಚವನ್ನು ತಕ್ಷಣವೇ ಪಾವತಿಸಲಾಗುತ್ತದೆ.",
    "confirmScheduleBtn": "ಮನೆಬಾಗಿಲಿನ ಪಿಕಪ್ ದೃಢೀಕರಿಸಿ →",
    "modalFeedbackTitle": "ನಿಮ್ಮ ಅನುಭವವನ್ನು ರೇಟ್ ಮಾಡಿ",
    "modalFeedbackSub": "ನಮ್ಮ ಚಲನಶೀಲತೆ ಮರುಬಳಕೆ ಮತ್ತು ವಿತರಣಾ ಸೇವೆಯನ್ನು ಸುಧಾರಿಸಲು ನಮಗೆ ಸಹಾಯ ಮಾಡಿ.",
    "overallExperience": "ಒಟ್ಟಾರೆ ಅನುಭವ",
    "commentsSuggestions": "ಪ್ರತಿಕ್ರಿಯೆ ಮತ್ತು ಸಲಹೆಗಳು",
    "feedbackPlaceholder": "ಸಂಗ್ರಾಹಕರ ಸಮಯಪಾಲನೆ, ಮರುಮಾರಾಟ ವೆಚ್ಚ ನ್ಯಾಯಸಮ್ಮತತೆ ಅಥವಾ ಆ್ಯಪ್ ವೈಶಿಷ್ಟ್ಯಗಳ ಬಗ್ಗೆ ತಿಳಿಸಿ...",
    "submitFeedbackBtn": "ಪ್ರತಿಕ್ರಿಯೆ ಸಲ್ಲಿಸಿ →",
    "btnVerify": "ಪರಿಶೀಲಿಸಿ",
    "btnSchedule": "ನಿಗದಿಪಡಿಸಿ",
    "btnMarkPaid": "ಪಾವತಿಸಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ",
    "btnDetails": "ವಿವರಗಳು",
    "btnSimulateVerify": "ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ ಅನುಕರಿಸಿ",
    "btnBookPickup": "ಮನೆಬಾಗಿಲಿನ ಪಿಕಪ್ ಬುಕ್ ಮಾಡಿ",
    "btnConfirmPayout": "ಪಾವತಿಯನ್ನು ದೃಢೀಕರಿಸಿ (ಡೆಮೊ)",
    "btnViewReceipt": "ಪಾವತಿ ರಶೀದಿ ವೀಕ್ಷಿಸಿ",
    "footerMission": "♿ ಸಹಾಯಕ ಸಾಧನ ಚಲನಶೀಲತಾ ಅಭಿಯಾನ",
    "footerRefurbish": "♻ ಜವಾಬ್ದಾರಿಯುತ ಸಾಧನ ನವೀಕರಣ",
    "footerCopyright": "© 2026 ಸ್ಕ್ರ್ಯಾಪ್‌ಸೈಕಲ್ • ಮರುಬಳಕೆ. ಮರುಮಾರಾಟ. ಪುನರಾವರ್ತನೆ."
  },
  "hi": {
    "brandTagline": "पुनः उपयोग. रीसेल. पुनरावृत्ति.",
    "authEyebrow": "सहायक गतिशीलता उपकरण चक्रीय पुनर्विक्रय",
    "authHeroTitle1": "अपने अप्रयुक्त गतिशीलता उपकरणों को ",
    "authHeroTitle2": "नई संभावनाओं में बदलें।",
    "authHeroDesc": "घर बैठे पिकअप के लिए सत्यापित संग्राहकों से सीधे जुड़ें। जरूरतमंद दिव्यांगों और बुजुर्ग नागरिकों को सशक्त बनाने के लिए व्हीलचेयर, वॉकर, बैसाखी और छड़ियों को रीसेल करें या दान करें।",
    "authPerk1": "व्हीलचेयर, वॉकर और बैसाखियों के लिए निःशुल्क डोरस्टेप संग्रह",
    "authPerk2": "उचित बाजार और नवीनीकरण मूल्य के आधार पर तय रीसेल लागत",
    "authPerk3": "वंचित लाभार्थियों तक निःशुल्क दान वितरण",
    "authCaption": "भारत भर में समुदाय-संचालित चक्रीय गतिशीलता नेटवर्क",
    "signInTab": "साइन इन",
    "createAccountTab": "खाता बनाएं",
    "welcomeBackEyebrow": "स्क्रैपसाइकिल में पुनः आपका स्वागत है",
    "joinMovementEyebrow": "पुनः उपयोग आंदोलन से जुड़ें",
    "signInHeading": "अपने खाते में साइन इन करें",
    "createAccountHeading": "अपना नया खाता बनाएं",
    "signInSub": "अपने सूचीबद्ध व्हीलचेयर, पिकअप शेड्यूल और प्राप्त भुगतान देखें।",
    "createAccountSub": "पुनः प्रयोज्य उपकरण सूचीबद्ध करना, पिकअप बुक करना और दान करना आज ही शुरू करें।",
    "fullName": "पूरा नाम",
    "fullNamePlaceholder": "अपना पूरा नाम दर्ज करें",
    "emailAddress": "ईमेल पता",
    "phoneNumber": "फ़ोन नंबर",
    "password": "पासवर्ड",
    "passwordPlaceholder": "अपना पासवर्ड दर्ज करें",
    "signInButton": "डैशबोर्ड में साइन इन करें",
    "createAccountButton": "मेरा खाता बनाएं",
    "orTestPrototype": "या प्रोटोटाइप का परीक्षण करें",
    "demoSignIn": "⚡ वन-क्लिक डेमो साइन इन (कुशल)",
    "termsAgree": "जारी रखकर, आप हमारी",
    "termsLink": "शर्तों",
    "andWord": "और",
    "privacyLink": "गोपनीयता नीति से सहमत होते हैं।",
    "dontHaveAccount": "क्या अभी तक खाता नहीं है?",
    "createAccountHere": "यहाँ खाता बनाएं",
    "alreadyRegistered": "क्या पहले से पंजीकृत हैं?",
    "signInHere": "यहाँ साइन इन करें",
    "authFooter": "♿ स्क्रैपसाइकिल • गतिशीलता और सहायक उपकरणों की आत्मनिर्भरता का सशक्तिकरण",
    "workspace": "कार्यक्षेत्र",
    "listMobilityAid": "＋ गतिशीलता उपकरण जोड़ें",
    "contributorRole": "गतिशीलता योगदानकर्ता",
    "memberRole": "व्यक्तिगत सदस्य",
    "logOut": "लॉग आउट",
    "mainWorkspaceGroup": "मुख्य कार्यक्षेत्र",
    "accountTrustGroup": "खाता और सुरक्षा",
    "navDashboard": "डैशबोर्ड",
    "navItems": "मेरे उपकरण",
    "navSchedule": "पिकअप शेड्यूल",
    "navDonate": "दान करें",
    "navNotifications": "सूचनाएं",
    "navVerification": "सत्यापन स्थिति",
    "navProfile": "प्रोफ़ाइल",
    "doorstepPartnerTitle": "डोरस्टेप पिकअप पार्टनर",
    "doorstepPartnerDesc": "विशेष परिवहन सुरक्षा के साथ संग्राहक व्हीलचेयर और वॉकर्स को सावधानीपूर्वक एकत्र करते हैं।",
    "vendorHelpline": "हेल्पलाइन ↗",
    "circularEcosystem": "चक्रीय गतिशीलता सहायता उपकरण प्रणाली",
    "goodToSeeYou": "आपका स्वागत है,",
    "dashboardSubtitle": "अपने पुनः प्रयोज्य व्हीलचेयर, वॉकर, बैसाखी, रीसेल लागत और सामुदायिक दानों को ट्रैक करें।",
    "listItemBtn": "＋ उपकरण जोड़ें",
    "donateAidBtn": "उपकरण दान करें",
    "heroTag": "सामाजिक प्रभाव और गतिशीलता उपकरण पुनर्विक्रय",
    "heroTitle1": "किसी का कबाड़।",
    "heroTitle2": "किसी का अनमोल खजाना।",
    "heroDesc": "अप्रयुक्त या क्षतिग्रस्त व्हीलचेयर, वॉकर और बैसाखियों को घर बैठे बेचकर उचित रीसेल लागत नकद प्राप्त करें—या किसी जरूरतमंद को आत्मनिर्भर बनाने के लिए सीधे दान करें।",
    "heroResellBtn": "उपकरण रीसेल करें",
    "heroExploreDonations": "दान देखें",
    "verifiedPickupSticker": "सत्यापित पिकअप",
    "doorstepCollectorSubtitle": "डोरस्टेप गतिशीलता संग्राहक",
    "statAidsInInventory": "उपलब्ध गतिशीलता उपकरण",
    "statReadyForPickup": "पिकअप के लिए तैयार",
    "statAwaitingAction": "प्रतीक्षारत उपकरण",
    "statAwaitingNote": "सत्यापन एवं शेड्यूलिंग",
    "statTotalResaleRealized": "प्राप्त कुल रीसेल लागत",
    "statDisbursementNote": "त्वरित बैंक अंतरण द्वारा भुगतान",
    "statMobilityDonations": "गतिशीलता उपकरण दान",
    "statDonationsNote": "व्हीलचेयर, वॉकर, बैसाखियां",
    "recentHeading": "हाल के गतिशीलता उपकरण एवं रीसेल लागत",
    "recentSubtitle": "उपकरण की स्थिति और मार्केटिंग रणनीतियों के साथ नवीनतम व्हीलचेयर, वॉकर और बैसाखियां।",
    "viewAllItems": "सभी उपकरण देखें",
    "thEquipmentCategory": "उपकरण एवं श्रेणी",
    "thConditionWear": "उपकरण की स्थिति",
    "thMarketVsResale": "बाजार मूल्य बनाम रीसेल लागत",
    "thMarketingStrategy": "मार्केटिंग रीसेल रणनीति",
    "thStatus": "स्थिति",
    "thAction": "कार्रवाई",
    "pipelineHeading": "गतिशीलता उपकरण जीवनचक्र प्रक्रिया",
    "pipelineSub": "पारदर्शी सत्यापन, उचित रीसेल लागत और संग्राहक रवानगी।",
    "viewChecklist": "चेकलिस्ट देखें →",
    "donationMission": "गतिशीलता सहायता अभियान",
    "restoreDignity": "सम्मान और आत्मनिर्भरता पुनर्स्थापित करें",
    "restoreDignityDesc": "आपके घर में रखी पुरानी व्हीलचेयर, वॉकर या बैसाखी को ठीक करके किसी जरूरतमंद दिव्यांग को मुफ्त दी जा सकती है।",
    "aidsDonatedLabel": "दान किए गए उपकरण",
    "freeHandoffLabel": "निःशुल्क डोरस्टेप संग्रह",
    "donateAidActionBtn": "व्हीलचेयर या उपकरण दान करें →",
    "catalogTitle": "गतिशीलता उपकरण सूची",
    "catalogSubtitle": "अपने सूचीबद्ध व्हीलचेयर, वॉकर, बैसाखियों और छड़ियों को उपकरण स्थिति और रीसेल रणनीतियों के साथ प्रबंधित करें।",
    "listEquipmentBtn": "＋ गतिशीलता उपकरण जोड़ें",
    "filterAll": "सभी उपकरण",
    "filterWheelchairs": "व्हीलचेयर",
    "filterWalkers": "वॉकर्स और रोलेटर",
    "filterCrutches": "बैसाखियां",
    "filterCanes": "छड़ियां और स्टिक",
    "filterScheduled": "शेड्यूल किए गए",
    "filterCompleted": "संपन्न",
    "cardCondition": "स्थिति:",
    "cardResaleCost": "रीसेल लागत",
    "cardSavings": "बचत",
    "cardListed": "दिनांक",
    "cardPricingStrategy": "मूल्य निर्धारण एवं रीसेल रणनीति:",
    "cardPickup": "पिकअप:",
    "atTime": "समय:",
    "commercialInsightTitle": "व्यावसायिक रणनीति अंतर्दृष्टि:",
    "commercialInsightText": "उपयोग किए गए गतिशीलता उपकरणों (व्हीलचेयर, वॉकर, बैसाखी) की सभी रीसेल लागत निर्माता एमआरपी के मुकाबले तय की गई है। स्थानीय अस्पतालों, फिजियोथेरेपी केंद्रों और जरूरतमंद परिवारों तक तेजी से पहुंचाने के लिए नवीनीकरण लागत पहले से समायोजित है।",
    "scheduleTitle": "डोरस्टेप पिकअप शेड्यूल",
    "scheduleSubtitle": "अपने घर से व्हीलचेयर, वॉकर और बैसाखियों को एकत्र करने के लिए सत्यापित संग्राहकों के साथ समन्वय करें।",
    "activeScheduledPickups": "सक्रिय एवं निर्धारित पिकअप",
    "activeScheduledSub": "घर बैठे संग्रह और सीधे रीसेल लागत भुगतान के लिए बुक किए गए सत्यापित उपकरण।",
    "activeCountBadge": "सक्रिय",
    "noItemsReady": "पिकअप के लिए कोई उपकरण तैयार नहीं है",
    "noItemsReadyText": "पिकअप बुक करने के लिए व्हीलचेयर, वॉकर या बैसाखी जोड़ें और सत्यापन पूरा करें।",
    "verifiedWaitingSlot": "⚠️ सत्यापित; कृपया पिकअप के लिए दिनांक और समय चुनें।",
    "schedulePickupBtn": "पिकअप तय करें",
    "confirmHandoverBtn": "हस्तांतरण की पुष्टि करें",
    "logisticsTitle": "संग्राहक लॉजिस्टिक्स एवं रख-रखाव मानक",
    "logisticsText": "व्हीलचेयर, इलेक्ट्रॉनिक नियंत्रक और फोल्डिंग तंत्र को सुरक्षित रखने के लिए संग्राहक विशेष सुरक्षा कवर के साथ आते हैं। नकद या यूपीआई भुगतान आपके दरवाजे पर तुरंत किया जाता है।",
    "donateTitle": "गतिशीलता उपकरणों को नया जीवन दें",
    "donateSubtitle": "वंचित लोगों को आत्मनिर्भरता और गतिशीलता प्रदान करने के लिए व्हीलचेयर, बैसाखी और वॉकर दान करें।",
    "communityOutreach": "❤️ सामुदायिक गतिशीलता सेवा",
    "heartfeltSupport": "सहृदय सामुदायिक सहयोग",
    "donateBannerHeading": "दान किया गया प्रत्येक उपकरण एक जीवन बदलता है।",
    "donateBannerDesc": "कम आय वाले परिवारों के लाखों बुजुर्गों और दिव्यांगों के पास बुनियादी गतिशीलता उपकरण नहीं हैं। हमारे संग्राहक आपके यहां से उपकरण प्राप्त कर, उन्हें स्वच्छ व मरम्मत करके जरूरतमंदों तक पूरी तरह निःशुल्क पहुंचाते हैं।",
    "donateChip1": "निःशुल्क डोरस्टेप संग्रह",
    "donateChip2": "प्रमाणित मरम्मत एवं स्वच्छता",
    "donateChip3": "सत्यापित लाभार्थी को वितरण",
    "submitDonationHeading": "दान अनुरोध प्रस्तुत करें",
    "submitDonationDesc": "बताएं कि आप कौन सा गतिशीलता उपकरण दान करना चाहते हैं।",
    "equipmentToDonate": "दान किया जाने वाला उपकरण",
    "itemCondition": "उपकरण की स्थिति",
    "specialNotesStory": "विशेष विवरण या संदेश",
    "specialNotesPlaceholder": "उदा. ठीक होने के दौरान परिवार के सदस्य के लिए खरीदा गया था; अब अप्रयुक्त है। साफ और चालू हालत में है...",
    "submitDonationBtn": "दान अनुरोध भेजें →",
    "selectedPreview": "चयनित उपकरण का पूर्वावलोकन",
    "freeDeliveryNotice": "100% निःशुल्क पिकअप एवं सत्यापित लाभार्थियों को निःशुल्क वितरण",
    "impactRecordsTitle": "सामुदायिक दान प्रभाव रिकॉर्ड",
    "impactRecordsDesc": "नवीनीकृत उपकरण जरूरतमंद लाभार्थियों, क्लीनिकों और वृद्धाश्रमों तक पहुंचाए गए।",
    "handoffsLabel": "वितरित उपकरण",
    "donorLabel": "दाता:",
    "beneficiaryImpactLabel": "लाभार्थी पर प्रभाव:",
    "loggedOnLabel": "दर्ज तिथि:",
    "notificationsTitle": "सूचनाएं",
    "notificationsSubtitle": "उपकरण निरीक्षण, संग्राहक के आगमन और रीसेल लागत भुगतान विवरण पर अपडेट रहें।",
    "markAllRead": "सभी को पढ़ा हुआ चिन्हित करें",
    "caughtUpTitle": "कोई नई सूचना नहीं है",
    "caughtUpText": "नए अपडेट और अलर्ट यहां दिखाई देंगे।",
    "verificationTitle": "गुणवत्ता एवं सुरक्षा सत्यापन",
    "verificationSubtitle": "बुजुर्गों और दिव्यांग उपयोगकर्ताओं की सुरक्षा के लिए प्रत्येक उपकरण की सुरक्षा जांच की जाती है।",
    "inspectionCardTitle": "4-चरणीय सहायक उपकरण सुरक्षा निरीक्षण",
    "inspectionCardDesc": "रीसेल या दान के लिए भेजने से पहले प्रत्येक व्हीलचेयर, वॉकर और बैसाखी की फ्रेम मजबूती, ब्रेक कार्यक्षमता, टायर ग्रिप और स्वच्छता मानकों की पूरी जांच की जाती है।",
    "checklistTitle": "उपकरण सत्यापन चेकलिस्ट",
    "valuedAtText": "रीसेल लागत:",
    "submittedOnText": "जमा तिथि:",
    "approveValuationBtn": "रीसेल लागत स्वीकृत करें (डेमो)",
    "disbursePayoutBtn": "भुगतान जारी करें",
    "giveFeedbackBtn": "प्रतिक्रिया दें",
    "profileTitle": "आपकी प्रोफ़ाइल",
    "profileSubtitle": "अपने संपर्क विवरण, सक्रिय सूची और सामुदायिक प्रभाव को प्रबंधित करें।",
    "activeContributorBadge": "● सक्रिय गतिशीलता योगदानकर्ता",
    "listedAidsLabel": "सूचीबद्ध उपकरण",
    "donationsLabel": "दान",
    "earnedLabel": "अर्जित रीसेल राशि",
    "editContactHeading": "संपर्क जानकारी संपादित करें",
    "editContactDesc": "संग्राहक आसानी से पिकअप का समन्वय कर सकें, इसके लिए अपना फ़ोन नंबर और पता सही रखें।",
    "primaryPhoneLabel": "प्राथमिक फ़ोन नंबर (संग्राहक समन्वय के लिए)",
    "saveProfileBtn": "प्रोफ़ाइल परिवर्तन सहेजें",
    "modalUploadTitle": "गतिशीलता उपकरण सूचीबद्ध करें",
    "modalUploadSub": "उचित रीसेल लागत ऑडिट के लिए फ़ोटो और स्थिति विवरण जमा करें।",
    "equipmentNameLabel": "उपकरण का नाम",
    "equipmentNamePlaceholder": "उदा: स्टैंडर्ड फोल्डिंग व्हीलचेयर या 4-पहिया रोलेटर वॉकर",
    "categoryLabel": "श्रेणी",
    "conditionLabel": "स्थिति",
    "originalMrpInput": "मूल खुदरा MRP (₹)",
    "resaleCostInput": "रीसेल लागत (₹)",
    "imageUrlLabel": "चित्र URL (वैकल्पिक)",
    "conditionNotesLabel": "स्थिति विवरण एवं टूट-फूट की जानकारी",
    "conditionNotesPlaceholder": "उपकरण की स्थिति, ब्रेक, टायर ग्रिप या मरम्मत की आवश्यकता वाले भागों का वर्णन करें...",
    "cancelBtn": "रद्द करें",
    "submitValuationBtn": "रीसेल ऑडिट हेतु जमा करें →",
    "modalScheduleTitle": "घर बैठे पिकअप बुक करें",
    "modalScheduleSub": "निःशुल्क डोरस्टेप पिकअप और मौके पर रीसेल लागत भुगतान के लिए दिनांक व समय चुनें।",
    "preferredDate": "पिकअप दिनांक",
    "preferredTimeSlot": "पिकअप समय स्लॉट",
    "pickupAddress": "पिकअप का पूरा पता",
    "addressPlaceholder": "मकान नंबर, सड़क, लैंडमार्क, इलाका, शहर",
    "scheduleModalNotice": "📍 हमारे सत्यापित संग्राहक सुरक्षा कवर के साथ आते हैं। उपकरण सौंपते ही रीसेल लागत का भुगतान तुरंत किया जाता है।",
    "confirmScheduleBtn": "डोरस्टेप पिकअप सुनिश्चित करें →",
    "modalFeedbackTitle": "अपने अनुभव का मूल्यांकन करें",
    "modalFeedbackSub": "गतिशीलता उपकरण पुनर्चक्रण और वितरण सेवा को बेहतर बनाने में सहायता करें।",
    "overallExperience": "समग्र अनुभव",
    "commentsSuggestions": "सुझाव एवं टिप्पणियां",
    "feedbackPlaceholder": "संग्राहक की समयबद्धता, रीसेल लागत की निष्पक्षता या ऐप सुविधाओं पर अपनी राय दें...",
    "submitFeedbackBtn": "प्रतिक्रिया जमा करें →",
    "btnVerify": "सत्यापित करें",
    "btnSchedule": "शेड्यूल करें",
    "btnMarkPaid": "भुगतान प्राप्त चिन्हित करें",
    "btnDetails": "विवरण",
    "btnSimulateVerify": "स्थिति सत्यापन का परीक्षण करें",
    "btnBookPickup": "घर बैठे पिकअप बुक करें",
    "btnConfirmPayout": "संग्राहक भुगतान पुष्टि करें (डेमो)",
    "btnViewReceipt": "भुगतान रसीद देखें",
    "footerMission": "♿ सहायक उपकरण गतिशीलता अभियान",
    "footerRefurbish": "♻ जिम्मेदार उपकरण नवीनीकरण",
    "footerCopyright": "© 2026 स्क्रैपसाइकिल • पुनः उपयोग. रीसेल. पुनरावृत्ति."
  }
};

// Translated Catalog Items Metadata
const itemTranslations = {
  "1": {
    "te": {
      "name": "మాన్యువల్ ఫోల్డింగ్ వీల్‌చైర్ (క్రోమ్ ఫ్రేమ్)",
      "category": "వీల్‌చైర్లు",
      "condition": "మంచిది - తేలికపాటి కుషన్ అరుగుదల",
      "demandTag": "ఉత్తమ రీసేల్ విలువ",
      "resaleStrategy": "కొత్త MRP ₹7,800 తో పోలిస్తే ఆకర్షణీయమైన రీసేల్ ధర ₹2,499. 68% ఆదా తక్షణ విక్రయానికి దోహదం చేస్తుంది.",
      "description": "మడతపెట్టగల స్టీల్ ఫ్రేమ్, నమ్మకమైన బ్రేకులు, డ్యూయల్ 24-అంగుళాల సాలిడ్ రబ్బర్ వెనుక చక్రాలు. పూర్తిగా పనిచేస్తుంది."
    },
    "kn": {
      "name": "ಮ್ಯಾನುಯಲ್ ಫೋಲ್ಡಿಂಗ್ ಗಾಲಿಕುರ್ಚಿ (ಕ್ರೋಮ್ ಫ್ರೇಮ್)",
      "category": "ಗಾಲಿಕುರ್ಚಿಗಳು",
      "condition": "ಉತ್ತಮ - ಸಣ್ಣ ಕುಶನ್ ಸವೆತ",
      "demandTag": "ಉನ್ನತ ಮರುಮಾರಾಟ ಮೌಲ್ಯ",
      "resaleStrategy": "ಹೊಸ MRP ₹7,800 ಗೆ ಹೋಲಿಸಿದರೆ ಆಕರ್ಷಕ ಮರುಮಾರಾಟ ವೆಚ್ಚ ₹2,499. 68% ಉಳಿತಾಯವು ತಕ್ಷಣದ ಮರುಮಾರಾಟಕ್ಕೆ ನೆರವಾಗುತ್ತದೆ.",
      "description": "ಮಡಚಬಹುದಾದ ಸ್ಟೀಲ್ ಫ್ರೇಮ್, ಉತ್ತಮ ಬ್ರೇಕ್‌ಗಳು, ಡ್ಯುಯಲ್ 24-ಇಂಚಿನ ಸಾಲಿಡ್ ರಬ್ಬರ್ ಚಕ್ರಗಳು. ಸಂಪೂರ್ಣವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ."
    },
    "hi": {
      "name": "मैनुअल फोल्डिंग व्हीलचेयर (क्रोम फ्रेम)",
      "category": "व्हीलचेयर",
      "condition": "अच्छी स्थिति - हल्की कुशन घिसावट",
      "demandTag": "शीर्ष रीसेल मूल्य",
      "resaleStrategy": "नए एमआरपी ₹7,800 के मुकाबले आकर्षक रीसेल लागत ₹2,499। 68% बचत से त्वरित रीसेल संभव होती है।",
      "description": "फोल्डेबल स्टील फ्रेम, मजबूत ब्रेक, दो 24-इंच के सॉलिड रबर रियर पहिये। पूरी तरह चालू हालत में।"
    }
  },
  "2": {
    "te": {
      "name": "సీటు & బాస్కెట్‌తో 4-వీల్ రోలేటర్ వాకర్",
      "category": "వాకర్స్",
      "condition": "వాడబడింది - చిన్న బ్రేక్ సర్దుబాటు అవసరం",
      "demandTag": "అధిక కమ్యూనిటీ డిమాండ్",
      "resaleStrategy": "రూ.2,000 సైకలాజికల్ పరిమితిలోపు ధర. స్థానిక క్లినిక్‌ల కోసం కేబుల్ సర్దుబాటు ముందే లెక్కించబడింది.",
      "description": "ప్యాడెడ్ సీటు, అండర్-సీట్ స్టోరేజ్ బ్యాగ్ మరియు ఎర్గోనామిక్ డ్యూయల్ లూప్ హ్యాండ్ బ్రేక్‌లతో అమర్చబడింది."
    },
    "kn": {
      "name": "ಸೀಟ್ & ಬುಟ್ಟಿಯೊಂದಿಗೆ 4-ವ್ಹೀಲ್ ರೋಲೇಟರ್ ವಾಕರ್",
      "category": "ವಾಕರ್‌ಗಳು",
      "condition": "ಬಳಸಿದ - ಸಣ್ಣ ಬ್ರೇಕ್ ಹೊಂದಾಣಿಕೆ ಅಗತ್ಯವಿದೆ",
      "demandTag": "ಹೆಚ್ಚಿನ ಸಮುದಾಯ ಬೇಡಿಕೆ",
      "resaleStrategy": "ರೂ.2,000 ಮಿತಿಯೊಳಗೆ ನಿಗದಿಪಡಿಸಲಾಗಿದೆ. ಸ್ಥಳೀಯ ಕ್ಲಿನಿಕ್ ಮರುಮಾರಾಟಕ್ಕಾಗಿ ಕೇಬಲ್ ಹೊಂದಾಣಿಕೆ ವೆಚ್ಚ ಕಳೆಯಲಾಗಿದೆ.",
      "description": "ಮೆತ್ತನೆಯ ಸೀಟ್, ಸೀಟ್ ಕೆಳಗಿನ ಚೀಲ ಮತ್ತು ಕೈ ಬ್ರೇಕ್‌ಗಳನ್ನು ಒಳಗೊಂಡಿದೆ."
    },
    "hi": {
      "name": "सीट और टोकरी के साथ 4-पहिया रोलेटर वॉकर",
      "category": "वॉकर्स",
      "condition": "इस्तेमाल किया हुआ - हल्की ब्रेक ट्यूनिंग की आवश्यकता",
      "demandTag": "उच्च सामुदायिक मांग",
      "resaleStrategy": "₹2,000 मनोवैज्ञानिक सीमा के अंदर मूल्य। स्थानीय क्लीनिकों में त्वरित बिक्री हेतु केबल समायोजन शामिल।",
      "description": "गद्देदार सीट, सीट के नीचे स्टोरेज थैली और एर्गोनोमिक डुअल लूप हैंड ब्रेक से सुसज्जित।"
    }
  },
  "3": {
    "te": {
      "name": "సర్దుబాటు చేయగల అల్యూమినియం క్రచెస్ జత",
      "category": "క్రచెస్",
      "condition": "కొత్తదానిలా ఉంది - ఆసుపత్రి మిగులు",
      "demandTag": "వేగవంతమైన లిక్విడిటీ",
      "resaleStrategy": "రూ.700 లోపు సరసమైన రీసేల్ ధర శస్త్రచికిత్స తర్వాత కోలుకునే రోగులకు వెంటనే అందుబాటులో ఉంటుంది.",
      "description": "బటన్ ఎత్తు సర్దుబాట్లు మరియు మందపాటి అండర్ ఆర్మ్ ప్యాడ్‌లతో కూడిన తేలికపాటి అల్యూమినియం."
    },
    "kn": {
      "name": "ಹೊಂದಾಣಿಕೆ ಮಾಡಬಹುದಾದ ಅಲ್ಯೂಮಿನಿಯಂ ಕ್ರಚಸ್ ಜೋಡಿ",
      "category": "ಕ್ರಚಸ್‌ಗಳು",
      "condition": "ಹೊಸದರಂತೆ - ಆಸ್ಪತ್ರೆಯ ಉಳಿಕೆ",
      "demandTag": "ತ್ವರಿತ ನಗದು ಲಿಕ್ವಿಡಿಟಿ",
      "resaleStrategy": "ರೂ.700 ಕ್ಕಿಂತ ಕಡಿಮೆ ಬೆಲೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರದ ಚೇತರಿಕೆಗೆ ಖರೀದಿದಾರರಿಗೆ ತಕ್ಷಣದ ನಿರ್ಧಾರಕ್ಕೆ ನೆರವಾಗುತ್ತದೆ.",
      "description": "ಪುಶ್-ಬಟನ್ ಎತ್ತರ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ದಪ್ಪ ಅಂಡರ್ ಆರ್ಮ್ ಪ್ಯಾಡ್‌ಗಳನ್ನು ಹೊಂದಿರುವ ಹಗುರವಾದ ಅಲ್ಯೂಮಿನಿಯಂ."
    },
    "hi": {
      "name": "एडजस्टेबल एल्युमिनियम बैसाखी (क्रचेस) की जोड़ी",
      "category": "बैसाखियां",
      "condition": "बिल्कुल नए जैसा - अस्पताल का अतिरिक्त उपकरण",
      "demandTag": "त्वरित रीसेल तरलता",
      "resaleStrategy": "₹700 से कम का रीसेल मूल्य सर्जरी के बाद रिकवरी वाले मरीजों के लिए तुरंत निर्णय लेने में मदद करता है।",
      "description": "पुश-बटन ऊंचाई समायोजन और मोटे अंडरआर्म पैड के साथ मजबूत हल्का एनोडाइज्ड एल्यूमीनियम।"
    }
  },
  "4": {
    "te": {
      "name": "హెవీ డ్యూటీ రిక్లైనింగ్ హై-బ్యాక్ వీల్‌చైర్",
      "category": "వీల్‌చైర్లు",
      "condition": "మంచిది - హెడ్‌రెస్ట్ శుభ్రం చేయాలి",
      "demandTag": "ప్రీమియం అసిస్టివ్",
      "resaleStrategy": "రూ.11,800 ఆదాతో ప్రీమియం వీల్‌చైర్ హోమ్‌కేర్ రోగులకు అందుబాటులోకి వస్తుంది.",
      "description": "హైడ్రాలిక్ 180-డిగ్రీల రిక్లైనింగ్ మెకానిజం, ఎలివేటింగ్ లెగ్ రెస్ట్‌లు మరియు యాంటీ-టిప్పర్‌లు."
    },
    "kn": {
      "name": "ಹೆವಿ-ಡ್ಯೂಟಿ ರಿಕ್ಲೈನಿಂಗ್ ಹೈ-ಬ್ಯಾಕ್ ಗಾಲಿಕುರ್ಚಿ",
      "category": "ಗಾಲಿಕುರ್ಚಿಗಳು",
      "condition": "ಉತ್ತಮ - ಹೆಡ್‌ರೆಸ್ಟ್ ಸ್ವಚ್ಛಗೊಳಿಸುವ ಅಗತ್ಯವಿದೆ",
      "demandTag": "ಪ್ರೀಮಿಯಂ ಸಹಾಯಕ ಸಾಧನ",
      "resaleStrategy": "ರೂ.11,800 ಉಳಿತಾಯವು ಪ್ರೀಮಿಯಂ ಆರೈಕೆಯನ್ನು ರೋಗಿಗಳಿಗೆ ಕೈಗೆಟುಕುವಂತೆ ಮಾಡುತ್ತದೆ.",
      "description": "ಹೈಡ್ರಾಲಿಕ್ 180-ಡಿಗ್ರಿ ರಿಕ್ಲೈನಿಂಗ್ ವ್ಯವಸ್ಥೆ, ಕಾಲು ವಿಶ್ರಾಂತಿ ಮತ್ತು ಸುರಕ್ಷತಾ ಚಕ್ರಗಳು."
    },
    "hi": {
      "name": "हैवी-ड्यूटी रिक्लाइनिंग हाई-बैक व्हीलचेयर",
      "category": "व्हीलचेयर",
      "condition": "अच्छी स्थिति - हेडरेस्ट की सफाई चाहिए",
      "demandTag": "प्रीमियम सहायक उपकरण",
      "resaleStrategy": "₹11,800 की भारी बचत होमकेयर मरीजों के लिए प्रीमियम उपकरण सुलभ बनाती है।",
      "description": "हाइड्रोलिक 180-डिग्री रिक्लाइनिंग तंत्र, पैर उठाने की सुविधा और एंटी-टिपर्स युक्त।"
    }
  },
  "5": {
    "te": {
      "name": "తేలికపాటి అల్యూమినియం ఫోల్డింగ్ వాకర్",
      "category": "వాకర్స్",
      "condition": "వాడబడింది - కొత్త రబ్బరు చిట్కాలు అవసరం",
      "demandTag": "మంచి రిఫర్బిష్ ROI",
      "resaleStrategy": "రూ.549 తక్కువ ధర వద్ద కొనుగోలు చేసి చిన్న రబ్బరు బూష్ మార్చి రూ.999 కి రీసేల్ చేయవచ్చు.",
      "description": "సింగిల్-బటన్ ఫోల్డ్ విధానం. సున్నా బెండింగ్‌తో ఎయిర్‌క్రాఫ్ట్ గ్రేడ్ అల్యూమినియం ట్యూబింగ్."
    },
    "kn": {
      "name": "ಹಗುರವಾದ ಅಲ್ಯೂಮಿನಿಯಂ ಫೋಲ್ಡಿಂಗ್ ವಾಕರ್",
      "category": "ವಾಕರ್‌ಗಳು",
      "condition": "ಬಳಸಿದ - ಹೊಸ ರಬ್ಬರ್ ತುದಿಗಳ ಅಗತ್ಯವಿದೆ",
      "demandTag": "ಉತ್ತಮ ನವೀಕರಣ ರಿಟರ್ನ್",
      "resaleStrategy": "ರೂ.549 ಕಡಿಮೆ ಬೆಲೆಯು ಸಣ್ಣ ರಬ್ಬರ್ ತುದಿ ಬದಲಿಸಿದ ನಂತರ ಸುಲಭ ಮರುಮಾರಾಟಕ್ಕೆ ಅನುಮತಿಸುತ್ತದೆ.",
      "description": "ಒಂದೇ ಬಟನ್ ಫೋಲ್ಡ್ ವ್ಯವಸ್ಥೆ. ಯಾವುದೇ ಬಾಗುವಿಕೆ ಇಲ್ಲದ ಅಲ್ಯೂಮಿನಿಯಂ ಟ್ಯೂಬ್‌ಗಳು."
    },
    "hi": {
      "name": "हल्का एल्युमिनियम फोल्डिंग वॉकर",
      "category": "वॉकर्स",
      "condition": "इस्तेमाल किया हुआ - नए रबर ग्रिप की आवश्यकता",
      "demandTag": "उत्तम नवीनीकरण रिटर्न",
      "resaleStrategy": "कम ₹549 की रीसेल लागत पर रबर ग्रिप बदलकर ₹999 में आसानी से दोबारा बेचा जा सकता है।",
      "description": "सिंगल-बटन फोल्ड तंत्र। विमान-ग्रेड एल्युमिनियम टयूबिंग जिसमें कोई मोड़ या दरार नहीं है।"
    }
  },
  "6": {
    "te": {
      "name": "ఎర్గోనామిక్ ఫోర్ఆర్మ్ క్రచెస్ జత",
      "category": "క్రచెస్",
      "condition": "కొత్తదానిలా ఉంది",
      "demandTag": "ఫిజియో ధృవీకరించబడింది",
      "resaleStrategy": "ఫిజియోథెరపీ డిమాండ్ ఆధారంగా అసలు ధరలో సరిగ్గా 1/3 వంతుకు నిర్ణయించిన సరసమైన రీసేల్ ధర.",
      "description": "దీర్ఘకాలిక సౌకర్యం కోసం రూపొందించిన కాంటౌర్డ్ హ్యాండిల్స్ మరియు క్లోజ్డ్ ఆర్మ్ కఫ్‌లు."
    },
    "kn": {
      "name": "ಎರ್ಗೊನಾಮಿಕ್ ಮುಂದೋಳಿನ ಕ್ರಚಸ್ ಜೋಡಿ",
      "category": "ಕ್ರಚಸ್‌ಗಳು",
      "condition": "ಹೊಸದರಂತೆ",
      "demandTag": "ಫಿಸಿಯೋ ದೃಢೀಕರಿಸಲಾಗಿದೆ",
      "resaleStrategy": "ಫಿಸಿಯೋಥೆರಪಿ ಬೇಡಿಕೆಯ ಬೆಲೆ; ತ್ವರಿತ ಮರುಮಾರಾಟಕ್ಕಾಗಿ ಚಿಲ್ಲರೆ ಬೆಲೆಯ ನಿಖರವಾಗಿ 1/3 ಭಾಗದಲ್ಲಿದೆ.",
      "description": "ದೀರ್ಘಕಾಲೀನ ಆರಾಮಕ್ಕಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಹ್ಯಾಂಡಲ್‌ಗಳು ಮತ್ತು ಸುರಕ್ಷಿತ ತೋಳಿನ ಪಟ್ಟಿಗಳು."
    },
    "hi": {
      "name": "एर्गोनोमिक फोरआर्म बैसाखी की जोड़ी",
      "category": "बैसाखियां",
      "condition": "बिल्कुल नए जैसा",
      "demandTag": "फिजियो सत्यापित",
      "resaleStrategy": "फिजियोथेरेपी मांग आधारित मूल्य; त्वरित बिक्री के लिए खुदरा मूल्य के 1/3 भाग पर निर्धारित।",
      "description": "लंबे समय तक आरामदायक उपयोग के लिए कंटूरेड हैंडल और सुरक्षित क्लोज्ड आर्म कफ।"
    }
  },
  "7": {
    "te": {
      "name": "ఎలక్ట్రిక్ మోటరైజ్డ్ పవర్ వీల్‌చైర్",
      "category": "వీల్‌చైర్లు",
      "condition": "రీకండీషన్ చేయబడింది - బ్యాటరీ పరీక్షించబడింది",
      "demandTag": "మోటరైజ్డ్ పవర్డ్",
      "resaleStrategy": "కొత్తది ₹42,000 కాగా ఆకర్షణీయమైన రీసేల్ ధర ₹12,999. టెస్ట్ చేసిన మోటార్ & కంట్రోలర్ దివ్యాంగులకు గొప్ప విలువనిస్తుంది.",
      "description": "జాయ్‌స్టిక్ కంట్రోలర్, డ్యూయల్ 250W మోటార్లు, ఎలక్ట్రోమాగ్నెటిక్ బ్రేకులు, సింగిల్ ఛార్జ్‌పై 18 కి.మీ బ్యాటరీ పరిధి."
    },
    "kn": {
      "name": "ಎಲೆಕ್ಟ್ರಿಕ್ ಮೋಟಾರೈಸ್ಡ್ ಪವರ್ ಗಾಲಿಕುರ್ಚಿ",
      "category": "ಗಾಲಿಕುರ್ಚಿಗಳು",
      "condition": "ಮರುಪರಿಶೀಲಿಸಲಾಗಿದೆ - ಬ್ಯಾಟರಿ ಪ್ಯಾಕ್ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ",
      "demandTag": "ಮೋಟಾರೈಸ್ಡ್ ಚಾಲಿತ",
      "resaleStrategy": "ಹೊಸ ₹42,000 ಗೆ ಹೋಲಿಸಿದರೆ ₹12,999 ಬೆಲೆ; ಪರೀಕ್ಷಿತ ಮೋಟಾರ್ ವಿಕಲಚೇತನರಿಗೆ ಅಪಾರ ಮೌಲ್ಯವನ್ನು ನೀಡುತ್ತದೆ.",
      "description": "ಜಾಯ್‌ಸ್ಟಿಕ್ ನಿಯಂತ್ರಕ, ಡ್ಯುಯಲ್ 250W ಮೋಟಾರ್‌ಗಳು, ಸಿಂಗಲ್ ಚಾರ್ಜ್‌ನಲ್ಲಿ 18 ಕಿ.ಮೀ ಬ್ಯಾಟರಿ ಶ್ರೇಣಿ."
    },
    "hi": {
      "name": "इलेक्ट्रिक मोटराइज्ड पावर व्हीलचेयर",
      "category": "व्हीलचेयर",
      "condition": "रीकंडीशन्ड - बैटरी पैक परीक्षित",
      "demandTag": "मोटराइज्ड संचालित",
      "resaleStrategy": "नए ₹42,000 के मुकाबले ₹12,999 की आकर्षक रीसेल लागत; परीक्षित मोटर व नियंत्रक दिव्यांगों के लिए वरदान।",
      "description": "जॉयस्टिक नियंत्रक, दो 250W मोटरें, विद्युत चुंबकीय ब्रेक, एकल चार्ज पर 18 किमी की रेंज।"
    }
  },
  "8": {
    "te": {
      "name": "పీడియాట్రిక్ సెరిబ్రల్ పాల్సీ వీల్‌చైర్",
      "category": "వీల్‌చైర్లు",
      "condition": "మంచిది - శుభ్రపరచబడింది & భద్రతా పరీక్ష పూర్తయింది",
      "demandTag": "ప్రత్యేక పీడియాట్రిక్",
      "resaleStrategy": "దివ్యాంగ పిల్లల కోసం ప్రత్యేక రాయితీ; పేద కుటుంబాలకు భంగిమ సహాయక వీల్‌చైర్‌ను అందుబాటులోకి తెస్తుంది.",
      "description": "సర్దుబాటు చేయగల థొరాసిక్ సపోర్ట్‌లు, 5-పాయింట్ సేఫ్టీ హార్నెస్ మరియు తొలగించగల హెడ్‌రెస్ట్."
    },
    "kn": {
      "name": "ಪೀಡಿಯಾಟ್ರಿಕ್ ಸೆರೆಬ್ರಲ್ ಪಾಲ್ಸಿ ಗಾಲಿಕುರ್ಚಿ",
      "category": "ಗಾಲಿಕುರ್ಚಿಗಳು",
      "condition": "ಉತ್ತಮ - ಸ್ಯಾನಿಟೈಸ್ & ಸುರಕ್ಷತೆ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ",
      "demandTag": "ವಿಶೇಷ ಪೀಡಿಯಾಟ್ರಿಕ್",
      "resaleStrategy": "ಬೆಳೆಯುತ್ತಿರುವ ಮಕ್ಕಳಿಗಾಗಿ ವಿಶೇಷ ರಿಯಾಯಿತಿ; ಕಡಿಮೆ ಆದಾಯದ ಕುಟುಂಬಗಳಿಗೆ ಆಸನ ಬೆಂಬಲವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
      "description": "ಹೊಂದಾಣಿಕೆ ಮಾಡಬಹುದಾದ ಎದೆಯ ಬೆಂಬಲಗಳು, 5-ಪಾಯಿಂಟ್ ಸುರಕ್ಷತಾ ಬೆಲ್ಟ್ ಮತ್ತು ಹೆಡ್‌ರೆಸ್ಟ್."
    },
    "hi": {
      "name": "पीडियाट्रिक सेरेब्रल पाल्सी व्हीलचेयर",
      "category": "व्हीलचेयर",
      "condition": "अच्छी स्थिति - सैनिटाइज्ड एवं सुरक्षा जांची गई",
      "demandTag": "विशेष बाल चिकित्सा",
      "resaleStrategy": "दिव्यांग बच्चों के लिए विशेष रियायती रीसेल लागत; निम्न आय परिवारों के लिए आसन सहायता सुलभ बनाती है।",
      "description": "समायोज्य वक्ष सपोर्ट, पांच-बिंदु सुरक्षा हार्नेस, हटाने योग्य हेडरेस्ट और एब्डक्शन वेज।"
    }
  },
  "9": {
    "te": {
      "name": "గ్లైడ్స్‌తో కూడిన ఫ్రంట్-వీల్డ్ వాకర్",
      "category": "వాకర్స్",
      "condition": "కొత్తదానిలా ఉంది - చాలా తక్కువ వాడబడింది",
      "demandTag": "ఆర్థోపెడిక్ రెడీ",
      "resaleStrategy": "ఆర్థోపెడిక్ సర్జరీ అనంతర రికవరీ కోసం రూ.1,200 లోపు సరసమైన ధర. రెండు 5-అంగుళాల చక్రాలు సున్నితమైన కదలికను అందిస్తాయి.",
      "description": "రెండు 5-అంగుళాల ముందు స్థిర చక్రాలు, వెనుక స్కీ గ్లైడ్‌లు మరియు ఎత్తు సర్దుబాటు చేయగల కాళ్ళు."
    },
    "kn": {
      "name": "ಗ್ಲೈಡ್‌ಗಳೊಂದಿಗೆ ಮುಂಭಾಗದ ಚಕ್ರದ ವಾಕರ್",
      "category": "ವಾಕರ್‌ಗಳು",
      "condition": "ಹೊಸದರಂತೆ - ಅತಿ ಕಡಿಮೆ ಬಳಸಲಾಗಿದೆ",
      "demandTag": "ಆರ್ಥೋಪೆಡಿಕ್ ಸಿದ್ಧ",
      "resaleStrategy": "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರದ ಚೇತರಿಕೆಗೆ ರೂ.1,200 ಒಳಗಿನ ಸೂಕ್ತ ಬೆಲೆ; ಸುಲಭ ಒಳಾಂಗಣ ಚಲನೆಗೆ ಚಕ್ರಗಳು ಸಹಕಾರಿ.",
      "description": "ಎರಡು 5-ಇಂಚಿನ ಮುಂಭಾಗದ ಚಕ್ರಗಳು, ಹಿಂಭಾಗದ ಸ್ಕೀ ಗ್ಲೈಡ್‌ಗಳು ಮತ್ತು ಹೊಂದಾಣಿಕೆ ಕಾಲುಗಳು."
    },
    "hi": {
      "name": "ग्लाइड्स के साथ फ्रंट-व्हील्ड वॉकर",
      "category": "वॉकर्स",
      "condition": "बिल्कुल नए जैसा - नाममात्र इस्तेमाल",
      "demandTag": "ऑर्थोपेडिक तैयार",
      "resaleStrategy": "ऑर्थोपेडिक सर्जरी के बाद रिकवरी के लिए ₹1,200 के अंदर की सटीक रीसेल लागत; दो पहिये सुगम गतिशीलता देते हैं।",
      "description": "दो 5-इंच के फिक्स्ड फ्रंट व्हील, रियर स्की ग्लाइड्स, ऊंचाई समायोज्य पैर और फोम ग्रिप्स।"
    }
  },
  "10": {
    "te": {
      "name": "స్టీరబుల్ మోకాలి వాకర్ / రికవరీ స్కూటర్",
      "category": "వాకర్స్",
      "condition": "మంచిది - దృఢమైన డ్యూయల్ డ్రమ్ బ్రేక్‌లు",
      "demandTag": "యాక్టివ్ మొబిలిటీ",
      "resaleStrategy": "పాదాల గాయాల రికవరీకి క్రచెస్‌కు బదులుగా వాడే స్కూటర్. అద్దె ఖర్చు కంటే తక్కువ రీసేల్ ధర త్వరిత విక్రయానికి కారణం.",
      "description": "మోల్డెడ్ మోకాలి ప్లాట్‌ఫారమ్, లాకింగ్ హ్యాండ్‌బ్రేకులు మరియు ఫోల్డ్ చేయగల స్టీరింగ్ కాలమ్."
    },
    "kn": {
      "name": "ಸ್ಟೀರೇಬಲ್ ಮೊಣಕಾಲು ವಾಕರ್ / ರಿಕವರಿ ಸ್ಕೂಟರ್",
      "category": "ವಾಕರ್‌ಗಳು",
      "condition": "ಉತ್ತಮ - ಗಟ್ಟಿಮುಟ್ಟಾದ ಡ್ಯುಯಲ್ ಡ್ರಮ್ ಬ್ರೇಕ್‌ಗಳು",
      "demandTag": "ಆಕ್ಟಿವ್ ಮೊಬಿಲಿಟಿ",
      "resaleStrategy": "ಪಾದದ ಚೇತರಿಕೆಗೆ ಕ್ರಚಸ್‌ಗಳಿಗೆ ಬದಲೀ ಸಾಧನ; ಬಾಡಿಗೆ ವೆಚ್ಚಕ್ಕೆ ಪರ್ಯಾಯವಾದ ಮರುಮಾರಾಟ ಬೆಲೆ.",
      "description": "ಮೊಣಕಾಲು ಪ್ಲಾಟ್‌ಫಾರ್ಮ್, ಲಾಕಿಂಗ್ ಹ್ಯಾಂಡ್‌ಬ್ರೇಕ್‌ಗಳು ಮತ್ತು ಮಡಚಬಹುದಾದ ಹ್ಯಾಂಡಲ್."
    },
    "hi": {
      "name": "स्टीयर करने योग्य घुटना वॉकर / रिकवरी स्कूटर",
      "category": "वॉकर्स",
      "condition": "अच्छी स्थिति - मजबूत डुअल ड्रम ब्रेक",
      "demandTag": "सक्रिय गतिशीलता",
      "resaleStrategy": "पैर/टखने की चोट में बैसाखी का आधुनिक विकल्प; ₹2,999 की किफायती रीसेल लागत से तुरंत खरीदार मिलते हैं।",
      "description": "आरामदायक मोल्डेड घुटना प्लेटफॉर्म, लॉकिंग हैंडब्रेक और फोल्डेबल स्टीयरिंग कॉलम।"
    }
  },
  "11": {
    "te": {
      "name": "హెవీ డ్యూటీ క్వాడ్-బేస్ వాకింగ్ కేన్",
      "category": "చేతికర్రలు & స్టిక్స్",
      "condition": "కొత్తదానిలా ఉంది",
      "demandTag": "స్ట్రోక్ పునరావాస మద్దతు",
      "resaleStrategy": "రూ.500 లోపు అందుబాటు ధర; 4-పాయింట్ల బేస్ సాధారణ చేతికర్రల కంటే అత్యుత్తమ స్థిరత్వాన్ని అందిస్తుంది.",
      "description": "జారకుండా ఉండే రబ్బరు చిట్కాలు మరియు మెత్తటి హ్యాండిల్‌తో కూడిన నాలుగు కాళ్ల స్టీల్ బేస్."
    },
    "kn": {
      "name": "ಹೆವಿ-ಡ್ಯೂಟಿ ಕ್ವಾಡ್-ಬೇಸ್ ವಾಕಿಂಗ್ ಕೇನ್",
      "category": "ಬೆತ್ತಗಳು & ಸ್ಟಿಕ್‌ಗಳು",
      "condition": "ಹೊಸದರಂತೆ",
      "demandTag": "ಸ್ಟ್ರೋಕ್ ಪುನರ್ವಸತಿ ಬೆಂಬಲ",
      "resaleStrategy": "ರೂ.500 ರ ಒಳಗಿನ ಕೈಗೆಟುಕುವ ಬೆಲೆ; 4-ಪಾಯಿಂಟ್ ಬೇಸ್ ಅತ್ಯುತ್ತಮ ಸ್ಥಿರತೆಯನ್ನು ನೀಡುತ್ತದೆ.",
      "description": "ನಾನ್-ಸ್ಲಿಪ್ ರಬ್ಬರ್ ತುದಿಗಳು ಮತ್ತು ಮೆತ್ತನೆಯ ಹ್ಯಾಂಡಲ್ ಹೊಂದಿರುವ ನಾಲ್ಕು-ಪಾದದ ಸ್ಟೀಲ್ ಬೇಸ್."
    },
    "hi": {
      "name": "हैवी-ड्यूटी 4-पैर वाली वॉकिंग स्टिक (केन)",
      "category": "छड़ियां और स्टिक",
      "condition": "बिल्कुल नए जैसा",
      "demandTag": "स्ट्रोक पुनर्वास सहायता",
      "resaleStrategy": "₹500 से कम की किफायती रीसेल लागत; 4 पैरों वाला चौड़ा आधार सामान्य छड़ी से कहीं अधिक संतुलन देता है।",
      "description": "नॉन-स्लिप रबर ग्रिप्स और कुशन वाले ऑफसेट हैंडल के साथ चार-पैर वाला एनोडाइज्ड स्टील बेस।"
    }
  },
  "12": {
    "te": {
      "name": "తేలికపాటి ప్రయాణ ట్రాన్స్‌పోర్ట్ వీల్‌చైర్",
      "category": "వీల్‌చైర్లు",
      "condition": "మంచిది - కాంపాక్ట్ ఫోల్డ్",
      "demandTag": "ట్రావెల్ కంపానియన్",
      "resaleStrategy": "కారు డిక్కీలో సరిపోయే కాంపాక్ట్ వీల్‌చైర్; సీనియర్ల ఆసుపత్రి ప్రయాణాలకు 68% తగ్గింపుతో సరసమైన రీసేల్ ధర.",
      "description": "అల్ట్రా కాంపాక్ట్ 8-అంగుళాల చక్రాలు, డ్రాప్-బ్యాక్ ఫోల్డింగ్ మరియు 9.2 కిలోల తేలికపాటి అల్యూమినియం ఫ్రేమ్."
    },
    "kn": {
      "name": "ಹಗುರವಾದ ಪ್ರಯಾಣ ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್ ಗಾಲಿಕುರ್ಚಿ",
      "category": "ಗಾಲಿಕುರ್ಚಿಗಳು",
      "condition": "ಉತ್ತಮ - ಕಾಂಪ್ಯಾಕ್ಟ್ ಫೋಲ್ಡ್",
      "demandTag": "ಪ್ರಯಾಣ ಸಂಗಾತಿ",
      "resaleStrategy": "ಕಾರಿನ ಡಿಕ್ಕಿಯಲ್ಲಿ ಇಡಬಹುದಾದ ಕಾಂಪ್ಯಾಕ್ಟ್ ಗಾಲಿಕುರ್ಚಿ; ಹಿರಿಯರಿಗೆ 68% ರಿಯಾಯಿತಿಯೊಂದಿಗೆ ಕೈಗೆಟುಕುವ ಮರುಮಾರಾಟ ಬೆಲೆ.",
      "description": "ಕಾಂಪ್ಯಾಕ್ಟ್ 8-ಇಂಚಿನ ಹಿಂಬದಿ ಚಕ್ರಗಳು, ಮಡಚಬಹುದಾದ ಬ್ಯಾಕ್‌ರೆಸ್ಟ್ ಮತ್ತು 9.2 ಕೆಜಿ ಹಗುರವಾದ ಫ್ರೇಮ್."
    },
    "hi": {
      "name": "हल्की यात्रा ट्रांसपोर्ट व्हीलचेयर",
      "category": "व्हीलचेयर",
      "condition": "अच्छी स्थिति - कॉम्पैक्ट फोल्ड",
      "demandTag": "सफर साथी",
      "resaleStrategy": "कार की डिक्की में फिट होने वाली कॉम्पैक्ट व्हीलचेयर; बुजुर्गों की अस्पताल यात्रा हेतु 68% छूट पर रीसेल लागत।",
      "description": "अल्ट्रा-कॉम्पैक्ट 8-इंच पहिये, ड्रॉप-बैक फोल्डिंग बैकरेस्ट और 9.2 किग्रा का सुपर-लाइट एल्युमिनियम फ्रेम।"
    }
  }
};

// Translated Donations Metadata
const donationTranslations = {
  "101": {
    "te": {
      "item": "పీడియాట్రిక్ వీల్‌చైర్ (భంగిమ మద్దతు)",
      "condition": "మంచిది - పరిశుభ్రం చేయబడింది",
      "beneficiary": "ఆశా చిల్డ్రన్స్ కేర్ & రిహాబ్ సెంటర్",
      "impact": "డిప్లేజియాతో బాధపడుతున్న 9 ఏళ్ల బాలుడికి స్వతంత్ర క్లాస్‌రూమ్ కదలికను అందించింది."
    },
    "kn": {
      "item": "ಪೀಡಿಯಾಟ್ರಿಕ್ ಗಾಲಿಕುರ್ಚಿ (ಆಸನ ಬೆಂಬಲ)",
      "condition": "ಉತ್ತಮ - ನೈರ್ಮಲ್ಯಗೊಳಿಸಲಾಗಿದೆ",
      "beneficiary": "ಆಶಾ ಚಿಲ್ಡ್ರನ್ಸ್ ಕೇರ್ & ರಿಹ್ಯಾಬ್ ಸೆಂಟರ್",
      "impact": "9 ವರ್ಷದ ಮಗುವಿಗೆ ತರಗತಿಯಲ್ಲಿ ಸ್ವತಂತ್ರವಾಗಿ ಸಂಚರಿಸಲು ಅನುವು ಮಾಡಿಕೊಟ್ಟಿದೆ."
    },
    "hi": {
      "item": "पीडियाट्रिक व्हीलचेयर (आसन सपोर्ट)",
      "condition": "अच्छी स्थिति - स्वच्छ एवं परीक्षित",
      "beneficiary": "आशा चिल्ड्रन्स केयर एवं पुनर्वास केंद्र",
      "impact": "डिपलेजिया से पीड़ित 9 वर्षीय बच्चे को स्वतंत्र रूप से स्कूल जाने में समर्थ बनाया।"
    }
  },
  "102": {
    "te": {
      "item": "సీటుతో కూడిన 4-వీల్ రోలేటర్ వాకర్",
      "condition": "కొత్తదానిలా ఉంది",
      "beneficiary": "నవజీవన్ వృద్ధాశ్రమం, సికింద్రాబాద్",
      "impact": "సీనియర్ హెల్త్ క్యాంప్‌లో పంపిణీ కోసం బ్రేక్ కేబుల్స్ బిగించబడ్డాయి మరియు ఫ్రేమ్ శుభ్రం చేయబడింది."
    },
    "kn": {
      "item": "ಸೀಟ್ ಹೊಂದಿರುವ 4-ವ್ಹೀಲ್ ರೋಲೇಟರ್ ವಾಕರ್",
      "condition": "ಹೊಸದರಂತೆ",
      "beneficiary": "ನವಜೀವನ್ ವೃದ್ಧಾಶ್ರಮ, ಸಿಕಂದರಾಬಾದ್",
      "impact": "ಹಿರಿಯ ನಾಗರಿಕರ ಆರೋಗ್ಯ ಶಿಬಿರದಲ್ಲಿ ವಿತರಣೆಗಾಗಿ ಬ್ರೇಕ್‌ಗಳನ್ನು ಸರಿಪಡಿಸಿ ಸ್ಯಾನಿಟೈಸ್ ಮಾಡಲಾಗಿದೆ."
    },
    "hi": {
      "item": "सीट के साथ 4-पहिया रोलेटर वॉकर",
      "condition": "बिल्कुल नए जैसा",
      "beneficiary": "नवजीवन वृद्धाश्रम, सिकंदराबाद",
      "impact": "वरिष्ठ स्वास्थ्य शिविर में वितरण हेतु ब्रेक केबल्स को दुरुस्त व सैनिटाइज किया गया।"
    }
  },
  "103": {
    "te": {
      "item": "అల్యూమినియం అండర్ ఆర్మ్ క్రచెస్ జత",
      "condition": "మంచిది - దృఢమైనది",
      "beneficiary": "రెడ్ క్రాస్ కమ్యూనిటీ డిస్పెన్సరీ",
      "impact": "ఉచిత డోర్‌స్టెప్ సేకరణ పూర్తయింది. భద్రత కోసం కొత్త నాన్-స్కిడ్ రబ్బరు బేస్ టిప్స్ అమర్చబడ్డాయి."
    },
    "kn": {
      "item": "ಅಲ್ಯೂಮಿನಿಯಂ ಅಂಡರ್‌ಆರ್ಮ್ ಕ್ರಚಸ್ ಜೋಡಿ",
      "condition": "ಉತ್ತಮ - ಗಟ್ಟಿಮುಟ್ಟಾಗಿದೆ",
      "beneficiary": "ರೆಡ್ ಕ್ರಾಸ್ ಸಮುದಾಯ ಚಿಕಿತ್ಸಾಲಯ",
      "impact": "ಉಚಿತ ಮನೆಬಾಗಿಲಿನ ಸಂಗ್ರಹಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ. ಸುರಕ್ಷತೆಗಾಗಿ ಹೊಸ ರಬ್ಬರ್ ತುದಿಗಳನ್ನು ಅಳವಡಿಸಲಾಗಿದೆ."
    },
    "hi": {
      "item": "एल्युमिनियम अंडरआर्म बैसाखी की जोड़ी",
      "condition": "अच्छी स्थिति - मजबूत",
      "beneficiary": "रेड क्रॉस सामुदायिक औषधालय",
      "impact": "मुफ्त डोरस्टेप पिकअप संपन्न। सुरक्षा के लिए नए नॉन-स्किड रबर ग्रिप्स लगाए गए।"
    }
  },
  "104": {
    "te": {
      "item": "సర్దుబాటు చేయగల క్వాడ్-బేస్ వాకింగ్ స్టిక్",
      "condition": "కొత్తదానిలా ఉంది",
      "beneficiary": "ధృవీకరణ జరుగుతోంది",
      "impact": "హిప్ రీప్లేస్‌మెంట్ సర్జరీ నుండి కోలుకుంటున్న ఒక వృద్ధురాలికి ఈ 4-పాయింట్ల స్టిక్ కేటాయించబడింది."
    },
    "kn": {
      "item": "ಹೊಂದಾಣಿಕೆಯ ಕ್ವಾಡ್-ಬೇಸ್ ವಾಕಿಂಗ್ ಸ್ಟಿಕ್",
      "condition": "ಹೊಸದರಂತೆ",
      "beneficiary": "ಪರಿಶೀಲನೆ ಪ್ರಗತಿಯಲ್ಲಿದೆ",
      "impact": "ಸೊಂಟದ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯಿಂದ ಚೇತರಿಸಿಕೊಳ್ಳುತ್ತಿರುವ ವೃದ್ಧ ಸದಸ್ಯರಿಗೆ ಈ ಸಾಧನವನ್ನು ನೀಡಲಾಗಿದೆ."
    },
    "hi": {
      "item": "एडजस्टेबल 4-पैर वाली वॉकिंग स्टिक",
      "condition": "बिल्कुल नए जैसा",
      "beneficiary": "सत्यापन प्रगति पर है",
      "impact": "कूल्हे के प्रत्यारोपण से उबर रहे एक बुजुर्ग सामुदायिक सदस्य को आवंटित की गई।"
    }
  },
  "105": {
    "te": {
      "item": "మాన్యువల్ స్టాండర్డ్ ఫోల్డింగ్ వీల్‌చైర్",
      "condition": "మంచిది - శుభ్రమైన ఫ్రేమ్",
      "beneficiary": "జిల్లా ఆసుపత్రికి కేటాయింపు",
      "impact": "సాధారణ క్లినిక్‌కు వచ్చే పేద ఔట్‌పేషెంట్ రోగుల రాకపోకల కోసం విరాళంగా అందించబడింది."
    },
    "kn": {
      "item": "ಮ್ಯಾನುಯಲ್ ಸ್ಟ್ಯಾಂಡರ್ಡ್ ಫೋಲ್ಡಿಂಗ್ ಗಾಲಿಕುರ್ಚಿ",
      "condition": "ಉತ್ತಮ - ಸ್ವಚ್ಛವಾದ ಫ್ರೇಮ್",
      "beneficiary": "ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆಗೆ ಹಂಚಿಕೆ",
      "impact": "ಆಸ್ಪತ್ರೆಗೆ ಬರುವ ಬಡ ಹೊರರೋಗಿಗಳಿಗೆ ಸುಲಭ ಸಾರಿಗೆಯನ್ನು ಒದಗಿಸಲು ದಾನ ಮಾಡಲಾಗಿದೆ."
    },
    "hi": {
      "item": "मैनुअल स्टैंडर्ड फोल्डिंग व्हीलचेयर",
      "condition": "अच्छी स्थिति - साफ फ्रेम",
      "beneficiary": "जिला अस्पताल को आवंटन",
      "impact": "सामान्य ओपीडी में आने वाले गरीब मरीजों के आवागमन हेतु अस्पताल को दान की गई।"
    }
  }
};

// 100% Mobility Equipment Catalog with verified high-res images & marketing resale strategies
const initialItems = [
  {
    id: 1,
    name: "Manual Folding Wheelchair (Chrome Frame)",
    category: "Wheelchairs",
    condition: "Good - Minor cushion wear",
    originalPrice: 7800,
    price: 2499,
    savingsPercent: 68,
    resaleStrategy: "Charm pricing (₹2,499) anchored against ₹7,800 retail. 68% savings creates immediate resale turnover.",
    demandTag: "Top Resale Value",
    status: "Verified",
    date: "2026-10-18",
    image: "/manual-wheelchair.jpg",
    description: "Foldable steel frame, responsive brakes, dual 24-inch solid rubber rear wheels. Fully functional."
  },
  {
    id: 2,
    name: "4-Wheel Rollator Walker with Seat & Basket",
    category: "Walkers",
    condition: "Used - Minor brake tuning needed",
    originalPrice: 5400,
    price: 1850,
    savingsPercent: 66,
    resaleStrategy: "Priced under ₹2,000 psychological threshold. Factored ₹150 cable adjustment for quick local clinic resale.",
    demandTag: "High Community Demand",
    status: "Pickup scheduled",
    date: "2026-10-19",
    pickupDate: "2026-10-24",
    pickupTime: "11:00 AM",
    address: "Flat 302, Palm Heights, Banjara Hills, Hyderabad",
    image: "/rollator-walker.jpg",
    description: "Equipped with padded seat, under-seat storage pouch, and ergonomic dual loop hand brakes."
  },
  {
    id: 3,
    name: "Pair of Adjustable Aluminium Crutches",
    category: "Crutches",
    condition: "Like new - Hospital surplus",
    originalPrice: 1950,
    price: 699,
    savingsPercent: 64,
    resaleStrategy: "Fast-liquidity impulse price. Under ₹700 drives immediate buyer decisions for post-surgery recovery.",
    demandTag: "Fast Liquidity",
    status: "Payment received",
    date: "2026-10-12",
    image: "/underarm-crutches.jpg",
    description: "Heavy-duty lightweight anodized aluminum with push-button height adjustments and thick underarm pads."
  },
  {
    id: 4,
    name: "Heavy-Duty Reclining High-Back Wheelchair",
    category: "Wheelchairs",
    condition: "Good - Needs headrest cleaning",
    originalPrice: 16800,
    price: 4999,
    savingsPercent: 70,
    resaleStrategy: "High-value anchor positioning: saving ₹11,800 makes premium assistive care accessible for homecare patients.",
    demandTag: "Premium Assistive",
    status: "Verified",
    date: "2026-10-21",
    image: "/manual-wheelchair.jpg",
    description: "Hydraulic 180-degree reclining mechanism, elevating leg rests, and anti-tippers."
  },
  {
    id: 5,
    name: "Lightweight Aluminum Folding Walker",
    category: "Walkers",
    condition: "Used - Needs new rubber tips",
    originalPrice: 2400,
    price: 549,
    savingsPercent: 77,
    resaleStrategy: "Refurbisher margin pricing: low ₹549 acquisition price allows resale at ₹999 after a ₹50 rubber ferrule replacement.",
    demandTag: "High Refurbish ROI",
    status: "Pending verification",
    date: "2026-10-22",
    image: "/folding-walker.jpg",
    description: "Single-button fold mechanism. Aircraft grade aluminum tubing with zero structural bending."
  },
  {
    id: 6,
    name: "Pair of Ergonomic Forearm Crutches",
    category: "Crutches",
    condition: "Like new",
    originalPrice: 2600,
    savingsPercent: 65,
    price: 899,
    resaleStrategy: "Physiotherapy bundled demand pricing; priced at exactly 1/3 of retail for rapid referral placement.",
    demandTag: "Physio Verified",
    status: "Pickup scheduled",
    date: "2026-10-23",
    pickupDate: "2026-10-25",
    pickupTime: "02:30 PM",
    address: "Villa 14, Rainbow Colony, Gachibowli, Hyderabad",
    image: "/forearm-crutches.jpg",
    description: "Contoured handles and closed hinged arm cuffs designed for prolonged ergonomic support."
  },
  {
    id: 7,
    name: "Electric Motorized Power Wheelchair",
    category: "Wheelchairs",
    condition: "Reconditioned - Tested battery pack",
    originalPrice: 42000,
    price: 12999,
    savingsPercent: 69,
    resaleStrategy: "High-ticket charm price (₹12,999 vs ₹42,000 new); verified motor & controller provides immense value for paraplegic mobility.",
    demandTag: "Motorized Powered",
    status: "Verified",
    date: "2026-10-24",
    image: "/electric-wheelchair.jpg",
    description: "Joystick controller, dual 250W motors, electromagnetic brakes, 18 km battery range on single charge."
  },
  {
    id: 8,
    name: "Pediatric Cerebral Palsy Wheelchair",
    category: "Wheelchairs",
    condition: "Good - Sanitized & safety tested",
    originalPrice: 14500,
    price: 3850,
    savingsPercent: 73,
    resaleStrategy: "Specially discounted for growing children with physical disabilities; enables low-income families to access postural support.",
    demandTag: "Specialized Pediatric",
    status: "Pickup scheduled",
    date: "2026-10-25",
    pickupDate: "2026-10-27",
    pickupTime: "10:30 AM",
    address: "House 24, Begumpet Main Road, Hyderabad",
    image: "/manual-wheelchair.jpg",
    description: "Adjustable thoracic supports, five-point safety harness, removable headrest, and abduction wedge."
  },
  {
    id: 9,
    name: "Front-Wheeled Walker with Glides",
    category: "Walkers",
    condition: "Like new - Barely used",
    originalPrice: 3200,
    price: 1199,
    savingsPercent: 63,
    resaleStrategy: "Sub-₹1,200 sweet spot for post-operative orthopedic recovery; dual 5-inch wheels provide smooth indoor gliding.",
    demandTag: "Orthopedic Ready",
    status: "Verified",
    date: "2026-10-26",
    image: "/folding-walker.jpg",
    description: "Two 5-inch front fixed wheels, rear ski glides, adjustable height legs, and padded foam grips."
  },
  {
    id: 10,
    name: "Steerable Knee Walker / Recovery Scooter",
    category: "Walkers",
    condition: "Good - Solid dual drum brakes",
    originalPrice: 9500,
    price: 2999,
    savingsPercent: 68,
    resaleStrategy: "Alternative to crutches for ankle/foot recovery; rental-competing resale price of ₹2,999 drives rapid acquisition.",
    demandTag: "Active Mobility",
    status: "Pending verification",
    date: "2026-10-26",
    image: "/rollator-walker.jpg",
    description: "Contoured molded foam knee platform, locking handbrakes, removable wire basket, fold-down steering column."
  },
  {
    id: 11,
    name: "Heavy-Duty Quad-Base Walking Cane",
    category: "Canes & Sticks",
    condition: "Like new",
    originalPrice: 1400,
    price: 499,
    savingsPercent: 64,
    resaleStrategy: "Accessible under ₹500 pricing; 4-point wide base provides superior stability over single-point canes.",
    demandTag: "Stroke Rehab Support",
    status: "Verified",
    date: "2026-10-27",
    image: "/quad-cane.jpg",
    description: "Four-prong anodized steel base with non-slip rubber tips and cushioned offset handle."
  },
  {
    id: 12,
    name: "Lightweight Travel Transport Wheelchair",
    category: "Wheelchairs",
    condition: "Good - Compact fold",
    originalPrice: 8500,
    price: 2699,
    savingsPercent: 68,
    resaleStrategy: "Compact vehicle-trunk travel wheelchair; 68% discount tailored for seniors attending clinical visits.",
    demandTag: "Travel Companion",
    status: "Payment received",
    date: "2026-10-15",
    image: "/manual-wheelchair.jpg",
    description: "Ultra-compact 8-inch rear companion wheels, drop-back folding backrest, and lightweight aluminum frame (9.2 kg)."
  }
];

// Rich Community Donations with realistic equipment imagery
const initialDonations = [
  {
    id: 101,
    item: "Pediatric Wheelchair (Postural Support)",
    category: "Wheelchairs",
    condition: "Good - Sanitized & Tested",
    donor: "Sunita Verma",
    date: "2026-10-18",
    status: "Delivered to Beneficiary",
    beneficiary: "Asha Children's Care & Rehab Center",
    impact: "Provided independent classroom mobility for a 9-year-old child with spastic diplegia.",
    image: "/manual-wheelchair.jpg"
  },
  {
    id: 102,
    item: "4-Wheel Rollator Walker with Seat",
    category: "Walkers",
    condition: "Like new",
    donor: "Dr. K. Raghavan",
    date: "2026-10-21",
    status: "Refurbishing in progress",
    beneficiary: "Navjeevan Elders Home, Secunderabad",
    impact: "Brake cables tensioned and frame sanitized for distribution in upcoming senior health camp.",
    image: "/rollator-walker.jpg"
  },
  {
    id: 103,
    item: "Pair of Aluminum Underarm Crutches",
    category: "Crutches",
    condition: "Good - Solid",
    donor: "Kushal",
    date: "2026-10-24",
    status: "Collected from Donor",
    beneficiary: "Red Cross Community Dispensary",
    impact: "Free doorstep pickup completed. Fresh non-skid rubber base tips installed for safety.",
    image: "/underarm-crutches.jpg"
  },
  {
    id: 104,
    item: "Adjustable Quad-Base Walking Stick",
    category: "Canes & Sticks",
    condition: "Like new",
    donor: "Priya Sundaram",
    date: "2026-10-26",
    status: "Donation requested",
    beneficiary: "Verification in progress",
    impact: "Four-point base cane allocated to an elderly community member recovering from hip replacement.",
    image: "/quad-cane.jpg"
  },
  {
    id: 105,
    item: "Manual Standard Folding Wheelchair",
    category: "Wheelchairs",
    condition: "Good - Clean frame",
    donor: "Amitabh Banerjee",
    date: "2026-10-28",
    status: "Donation requested",
    beneficiary: "Allocation to District Hospital",
    impact: "Donated to provide outpatient transit for low-income patients arriving at general clinic.",
    image: "/manual-wheelchair.jpg"
  }
];

const donationImageMap = {
  "Wheelchair (Manual)": "/manual-wheelchair.jpg",
  "Wheelchair (Electric / Motorized)": "/electric-wheelchair.jpg",
  "Pair of Crutches (Underarm / Forearm)": "/underarm-crutches.jpg",
  "4-Wheel Rollator Walker": "/rollator-walker.jpg",
  "Standard Folding Walker Frame": "/folding-walker.jpg",
  "Adjustable Walking Stick / Cane": "/quad-cane.jpg",
  "Other Assistive Device": "/forearm-crutches.jpg"
};

const money = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

// Language Selector Component
const LanguageSelector = ({ lang, setLang }) => {
  const languages = [
    { code: "en", label: "EN", title: "English" },
    { code: "te", label: "తెలుగు", title: "Telugu" },
    { code: "kn", label: "ಕನ್ನಡ", title: "Kannada" },
    { code: "hi", label: "हिंदी", title: "Hindi" }
  ];

  return (
    <div className="lang-switcher-wrap" role="group" aria-label="Language selector">
      <span className="lang-icon" aria-hidden="true"><IconGlobe /></span>
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`lang-pill ${lang === l.code ? "active" : ""}`}
          onClick={() => setLang(l.code)}
          title={l.title}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

function App() {
  const [lang, setLang] = useState("en"); // "en" | "te" | "kn" | "hi"
  const [signedIn, setSignedIn] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [active, setActive] = useState("Dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [user, setUser] = useState({ name: "Kushal", email: "kushal@example.com", phone: "+91 98765 43210" });
  const [items, setItems] = useState(initialItems);
  const [donations, setDonations] = useState(initialDonations);
  const [itemFilter, setItemFilter] = useState("All");

  const t = (key) => translations[lang]?.[key] || translations["en"]?.[key] || key;

  // Localized Item Text Helper
  const getItemText = (item, field) => {
    if (lang !== "en" && itemTranslations[item.id]?.[lang]?.[field]) {
      return itemTranslations[item.id][lang][field];
    }
    return item[field];
  };

  // Localized Donation Text Helper
  const getDonationText = (donation, field) => {
    if (lang !== "en" && donationTranslations[donation.id]?.[lang]?.[field]) {
      return donationTranslations[donation.id][lang][field];
    }
    return donation[field];
  };

  // Localized Status Badge Helper
  const getStatusLabel = (status) => {
    if (lang === "te") {
      if (status === "Verified") return "ధృవీకరించబడింది";
      if (status === "Pickup scheduled") return "పికప్ షెడ్యూల్ చేయబడింది";
      if (status === "Payment received") return "చెల్లింపు అందింది";
      if (status === "Pending verification") return "ధృవీకరణ పెండింగ్‌లో ఉంది";
      if (status === "Delivered to Beneficiary") return "లబ్ధిదారునికి అందించబడింది";
      if (status === "Refurbishing in progress") return "రిఫర్బిషింగ్ జరుగుతోంది";
      if (status === "Collected from Donor") return "దాత నుండి సేకరించబడింది";
      if (status === "Donation requested") return "విరాళం అభ్యర్థించబడింది";
    }
    if (lang === "kn") {
      if (status === "Verified") return "ಪರಿಶೀಲಿಸಲಾಗಿದೆ";
      if (status === "Pickup scheduled") return "ಪಿಕಪ್ ನಿಗದಿಯಾಗಿದೆ";
      if (status === "Payment received") return "ಪಾವತಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ";
      if (status === "Pending verification") return "ಪರಿಶೀಲನೆ ಬಾಕಿ ಇದೆ";
      if (status === "Delivered to Beneficiary") return "ಫಲಾನುಭವಿಗೆ ತಲುಪಿಸಲಾಗಿದೆ";
      if (status === "Refurbishing in progress") return "ನವೀಕರಣ ಪ್ರಗತಿಯಲ್ಲಿದೆ";
      if (status === "Collected from Donor") return "ದಾನಿಗಳಿಂದ ಸಂಗ್ರಹಿಸಲಾಗಿದೆ";
      if (status === "Donation requested") return "ದೇಣಿಗೆ ವಿನಂತಿಸಲಾಗಿದೆ";
    }
    if (lang === "hi") {
      if (status === "Verified") return "सत्यापित";
      if (status === "Pickup scheduled") return "पिकअप निर्धारित";
      if (status === "Payment received") return "भुगतान प्राप्त हुआ";
      if (status === "Pending verification") return "सत्यापन लंबित";
      if (status === "Delivered to Beneficiary") return "लाभार्थी को वितरित";
      if (status === "Refurbishing in progress") return "नवीनीकरण प्रगति पर है";
      if (status === "Collected from Donor") return "दाता से एकत्रित";
      if (status === "Donation requested") return "दान अनुरोध प्राप्त";
    }
    return status;
  };

  // Localized Category Helper
  const getCategoryLabel = (category) => {
    if (category === "Wheelchairs") return t("filterWheelchairs");
    if (category === "Walkers") return t("filterWalkers");
    if (category === "Crutches") return t("filterCrutches");
    if (category && category.includes("Canes")) return t("filterCanes");
    return category;
  };

  const [notifications, setNotifications] = useState([
    { id: 1, title: "Item verified with high resale demand", text: "Your Manual Folding Wheelchair passed resale audit at ₹2,499.", time: "Today", read: false },
    { id: 2, title: "Pickup scheduled for tomorrow", text: "Scrap vendor collection confirmed for 4-Wheel Rollator Walker at 11:00 AM.", time: "Today", read: false },
    { id: 3, title: "Donation impact update", text: "Pediatric Wheelchair was successfully delivered to Asha Children's Rehab Center.", time: "Yesterday", read: true },
  ]);

  const [showUpload, setShowUpload] = useState(false);
  const [showSchedule, setShowSchedule] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [toast, setToast] = useState("");

  const [form, setForm] = useState({
    name: "",
    category: "Wheelchairs",
    condition: "Good - Light wear",
    originalPrice: "",
    price: "",
    description: "",
    image: ""
  });

  const [schedule, setSchedule] = useState({ date: "", time: "10:00 AM", address: "" });
  const [feedback, setFeedback] = useState({ rating: 5, message: "" });
  const [donateForm, setDonateForm] = useState({ item: "Wheelchair (Manual)", condition: "Good", note: "" });

  const totalEarned = useMemo(
    () => items.filter((i) => i.status === "Payment received").reduce((sum, i) => sum + Number(i.price || 0), 0),
    [items]
  );
  const pendingCount = items.filter((i) => !["Payment received", "Donated"].includes(i.status)).length;
  const verifiedCount = items.filter((i) => i.status === "Verified").length;

  const filteredItems = useMemo(() => {
    if (itemFilter === "All") return items;
    if (itemFilter === "Wheelchairs") return items.filter((i) => i.category === "Wheelchairs");
    if (itemFilter === "Walkers") return items.filter((i) => i.category === "Walkers");
    if (itemFilter === "Crutches") return items.filter((i) => i.category === "Crutches");
    if (itemFilter === "Canes") return items.filter((i) => i.category.includes("Canes"));
    if (itemFilter === "Scheduled") return items.filter((i) => i.status === "Pickup scheduled");
    if (itemFilter === "Completed") return items.filter((i) => i.status === "Payment received");
    return items;
  }, [items, itemFilter]);

  const notify = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 3200);
  };

  const addNotification = (title, text) => {
    setNotifications((old) => [{ id: Date.now(), title, text, time: "Just now", read: false }, ...old]);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = fd.get("email")?.toString().trim() || "";
    const phone = fd.get("phone")?.toString().trim() || "+91 98765 43210";
    let name = fd.get("fullName")?.toString().trim();
    if (!name) {
      name = email ? email.split("@")[0] : "Kushal";
    }
    setUser({ name, email, phone });
    setSignedIn(true);
    notify(authMode === "login" ? `${t("goodToSeeYou")} ${name}!` : `${name}, ${t("joinMovementEyebrow")}!`);
  };

  const handleDemoLogin = () => {
    setUser({ name: "Kushal", email: "kushal@example.com", phone: "+91 98765 43210" });
    setSignedIn(true);
    notify("Signed in with demo account.");
  };

  const addItem = (e) => {
    e.preventDefault();
    const resaleVal = Number(form.price || 0);
    const origVal = Number(form.originalPrice || resaleVal * 2.5);
    const savings = Math.max(10, Math.round(((origVal - resaleVal) / origVal) * 100));

    let fallbackImage = "/manual-wheelchair.jpg";
    if (form.category === "Walkers") {
      fallbackImage = "/rollator-walker.jpg";
    } else if (form.category === "Crutches") {
      fallbackImage = "/underarm-crutches.jpg";
    } else if (form.category.includes("Canes")) {
      fallbackImage = "/quad-cane.jpg";
    }

    const newItem = {
      id: Date.now(),
      name: form.name.trim(),
      category: form.category,
      condition: form.condition,
      originalPrice: origVal,
      price: resaleVal,
      savingsPercent: savings,
      resaleStrategy: `Priced with ${savings}% savings off new MRP based on evaluated wear; optimized for rapid resale liquidity.`,
      demandTag: "Fair Value Verified",
      status: "Pending verification",
      date: new Date().toISOString().slice(0, 10),
      description: form.description || "Inspected reusable mobility aid ready for verification and doorstep pickup.",
      image: form.image || fallbackImage,
    };
    setItems((old) => [newItem, ...old]);
    addNotification("Item submitted for resale audit", `${newItem.name} listed at ${money(newItem.price)}. Verification in progress.`);
    setForm({ name: "", category: "Wheelchairs", condition: "Good - Light wear", originalPrice: "", price: "", description: "", image: "" });
    setShowUpload(false);
    setActive("My Items");
    notify("Mobility equipment submitted for valuation.");
  };

  const schedulePickup = (e) => {
    e.preventDefault();
    setItems((old) =>
      old.map((i) =>
        i.id === showSchedule
          ? { ...i, status: "Pickup scheduled", pickupDate: schedule.date, pickupTime: schedule.time, address: schedule.address }
          : i
      )
    );
    const item = items.find((i) => i.id === showSchedule);
    addNotification("Doorstep pickup booked", `Scrap vendor assigned for ${item?.name || "your item"} on ${schedule.date} at ${schedule.time}.`);
    setShowSchedule(null);
    setSchedule({ date: "", time: "10:00 AM", address: "" });
    notify("Doorstep pickup successfully scheduled.");
  };

  const donateItem = (e) => {
    e.preventDefault();
    const chosenImage = donationImageMap[donateForm.item] || "/manual-wheelchair.jpg";
    const donation = {
      id: Date.now(),
      item: donateForm.item,
      condition: donateForm.condition,
      donor: user.name || "Kushal",
      date: new Date().toISOString().slice(0, 10),
      status: "Donation requested",
      beneficiary: "Allocation in progress",
      impact: donateForm.note || "Awaiting condition inspection prior to free handoff to an underprivileged recipient.",
      image: chosenImage
    };
    setDonations((old) => [donation, ...old]);
    addNotification("Donation request received", `Thank you for donating ${donation.item}! Our team will coordinate free collection.`);
    setDonateForm({ item: "Wheelchair (Manual)", condition: "Good", note: "" });
    setActive("Donate");
    notify("Thank you for choosing to donate and support people in need!");
  };

  const markRead = (id) => setNotifications((old) => old.map((n) => (n.id === id ? { ...n, read: true } : n)));

  const verifyItem = (id) => {
    setItems((old) => old.map((i) => (i.id === id ? { ...i, status: "Verified" } : i)));
    addNotification("Condition & resale value verified", "Your item passed condition checks. You can now schedule a doorstep pickup.");
    notify("Condition verified. Pickup scheduling unlocked.");
  };

  const receivePayment = (id) => {
    setItems((old) => old.map((i) => (i.id === id ? { ...i, status: "Payment received" } : i)));
    const item = items.find((i) => i.id === id);
    addNotification("Payout settled", `${money(item?.price || 0)} credited to your account for ${item?.name || "your item"}.`);
    notify("Payment received and balance updated.");
  };

  // Auth Screen
  if (!signedIn) {
    return (
      <div className="auth-shell">
        <div className="auth-visual">
          <div className="auth-visual-top">
            <div className="auth-brand">
              <img src="/scrapcycle-logo.png" alt="ScrapCycle Logo" className="brand-logo-img" />
              <div className="brand-text">
                <span>ScrapCycle</span>
                <small>{t("brandTagline")}</small>
              </div>
            </div>
            <LanguageSelector lang={lang} setLang={setLang} />
          </div>

          <div className="auth-copy">
            <span className="eyebrow">{t("authEyebrow")}</span>
            <h1>
              {t("authHeroTitle1")}
              <em>{t("authHeroTitle2")}</em>
            </h1>
            <p>{t("authHeroDesc")}</p>
            <div className="auth-perks">
              <span><IconCheck /> {t("authPerk1")}</span>
              <span><IconCheck /> {t("authPerk2")}</span>
              <span><IconCheck /> {t("authPerk3")}</span>
            </div>
          </div>
          <div className="visual-caption">
            <span className="pulse-dot" /> {t("authCaption")}
          </div>
        </div>

        <div className="auth-panel">
          <div className="mobile-brand-row">
            <div className="mobile-brand">
              <img src="/scrapcycle-logo.png" alt="ScrapCycle Logo" className="brand-logo-img" />
              <span>ScrapCycle</span>
            </div>
            <LanguageSelector lang={lang} setLang={setLang} />
          </div>

          <div className="auth-form-wrap">
            <div className="auth-tabs">
              <button
                type="button"
                className={`auth-tab ${authMode === "login" ? "active" : ""}`}
                onClick={() => setAuthMode("login")}
              >
                {t("signInTab")}
              </button>
              <button
                type="button"
                className={`auth-tab ${authMode === "signup" ? "active" : ""}`}
                onClick={() => setAuthMode("signup")}
              >
                {t("createAccountTab")}
              </button>
            </div>

            <span className="eyebrow">
              {authMode === "login" ? t("welcomeBackEyebrow") : t("joinMovementEyebrow")}
            </span>
            <h2>{authMode === "login" ? t("signInHeading") : t("createAccountHeading")}</h2>
            <p className="muted">
              {authMode === "login" ? t("signInSub") : t("createAccountSub")}
            </p>

            <form onSubmit={handleAuthSubmit}>
              {authMode === "signup" && (
                <label>
                  {t("fullName")}
                  <input name="fullName" placeholder={t("fullNamePlaceholder")} required />
                </label>
              )}
              <label>
                {t("emailAddress")}
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  defaultValue={authMode === "login" ? "kushal@example.com" : ""}
                  required
                />
              </label>
              {authMode === "signup" && (
                <label>
                  {t("phoneNumber")}
                  <input name="phone" type="tel" placeholder="+91 98765 43210" required />
                </label>
              )}
              <label>
                {t("password")}
                <input
                  name="password"
                  type="password"
                  placeholder={t("passwordPlaceholder")}
                  defaultValue={authMode === "login" ? "password123" : ""}
                  minLength="6"
                  required
                />
              </label>
              <button className="btn primary full" type="submit">
                {authMode === "login" ? t("signInButton") : t("createAccountButton")} <span>→</span>
              </button>
            </form>

            <div className="auth-divider"><span>{t("orTestPrototype")}</span></div>
            <button className="btn outline full demo-btn" type="button" onClick={handleDemoLogin}>
              {t("demoSignIn")}
            </button>

            <p className="terms">
              {t("termsAgree")}{" "}
              <a href="#terms" onClick={(e) => { e.preventDefault(); notify("Terms of Service: Assistive aid inspection & doorstep collection protocol."); }}>
                {t("termsLink")}
              </a>{" "}
              {t("andWord")}{" "}
              <a href="#privacy" onClick={(e) => { e.preventDefault(); notify("Privacy: Location and phone details are only shared with assigned collectors."); }}>
                {t("privacyLink")}
              </a>
            </p>

            <p className="signin-note">
              {authMode === "login" ? (
                <>
                  {t("dontHaveAccount")}{" "}
                  <button type="button" className="text-btn" onClick={() => setAuthMode("signup")}>
                    {t("createAccountHere")}
                  </button>
                </>
              ) : (
                <>
                  {t("alreadyRegistered")}{" "}
                  <button type="button" className="text-btn" onClick={() => setAuthMode("login")}>
                    {t("signInHere")}
                  </button>
                </>
              )}
            </p>
          </div>
          <div className="auth-footer">{t("authFooter")}</div>
        </div>

        {toast && <div className="toast"><span>✓</span>{toast}</div>}
        <style>{styles}</style>
      </div>
    );
  }

  const nav = [
    {
      group: t("mainWorkspaceGroup"),
      items: [
        { name: "Dashboard", label: t("navDashboard"), icon: <IconDashboard /> },
        { name: "My Items", label: t("navItems"), icon: <IconItems />, count: items.length },
        { name: "Schedule", label: t("navSchedule"), icon: <IconSchedule />, count: items.filter((i) => i.status === "Pickup scheduled").length },
        { name: "Donate", label: t("navDonate"), icon: <IconDonate />, count: donations.length },
        { name: "Notifications", label: t("navNotifications"), icon: <IconNotifications />, count: notifications.filter((n) => !n.read).length }
      ]
    },
    {
      group: t("accountTrustGroup"),
      items: [
        { name: "Verification", label: t("navVerification"), icon: <IconVerification /> },
        { name: "Profile", label: t("navProfile"), icon: <IconProfile /> }
      ]
    }
  ];

  return (
    <div className={`app-shell ${sidebarCollapsed ? "sidebar-is-collapsed" : ""}`}>
      {/* Collapsible Sidebar */}
      <aside className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="brand-header">
          <button className="brand" onClick={() => setActive("Dashboard")} title="ScrapCycle Home">
            <img src="/scrapcycle-logo.png" alt="ScrapCycle Logo" className="brand-logo-img" />
            {!sidebarCollapsed && (
              <div className="brand-text">
                <span className="brand-title">ScrapCycle</span>
                <small>{t("brandTagline")}</small>
              </div>
            )}
          </button>
          <button
            className="collapse-toggle-btn"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <IconCollapse collapsed={sidebarCollapsed} />
          </button>
        </div>

        <div className="sidebar-nav-container">
          {nav.map((section) => (
            <div key={section.group} className="nav-group-wrap">
              {!sidebarCollapsed && <div className="side-group">{section.group}</div>}
              {section.items.map((item) => (
                <button
                  key={item.name}
                  className={`nav-item ${active === item.name ? "selected" : ""}`}
                  onClick={() => setActive(item.name)}
                  title={sidebarCollapsed ? item.label : undefined}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {!sidebarCollapsed && <span className="nav-label">{item.label}</span>}
                  {item.count > 0 && (
                    <span className={`nav-count ${sidebarCollapsed ? "mini-badge" : ""}`}>
                      {item.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="sidebar-bottom">
          {!sidebarCollapsed && (
            <div className="help-card">
              <div className="help-icon"><IconTruck /></div>
              <strong>{t("doorstepPartnerTitle")}</strong>
              <p>{t("doorstepPartnerDesc")}</p>
              <button onClick={() => notify("Support helpline: +91 800-SCRAP-CYCLE (9 AM - 7 PM)")}>
                {t("vendorHelpline")}
              </button>
            </div>
          )}

          <button
            className="profile-mini"
            onClick={() => setActive("Profile")}
            title={sidebarCollapsed ? user.name : t("navProfile")}
          >
            <span className="avatar">{(user.name || "K").slice(0, 1).toUpperCase()}</span>
            {!sidebarCollapsed && (
              <div className="profile-text">
                <strong>{user.name || "Kushal"}</strong>
                <small>{t("contributorRole")}</small>
              </div>
            )}
          </button>
          <button className="logout-btn" onClick={() => setSignedIn(false)} title={t("logOut")}>
            <span>↪</span> {!sidebarCollapsed && <span>{t("logOut")}</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb-row">
            <button
              className="topbar-collapse-btn"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              aria-label="Toggle sidebar"
            >
              <IconCollapse collapsed={sidebarCollapsed} />
            </button>
            <div className="breadcrumb">
              {t("workspace")} <span>/</span> <strong>{t(`nav${active.replace(/\s+/g, "")}`) || active}</strong>
            </div>
          </div>

          <div className="top-actions">
            {/* 4-Language Switcher Pills */}
            <LanguageSelector lang={lang} setLang={setLang} />

            <button className="btn outline small-btn quick-list-btn" onClick={() => setShowUpload(true)}>
              {t("listMobilityAid")}
            </button>
            <button
              className="icon-btn notification-top"
              aria-label="Notifications"
              onClick={() => setActive("Notifications")}
            >
              <IconNotifications />
              {notifications.some((n) => !n.read) && <i />}
            </button>
            <div className="top-user" onClick={() => setActive("Profile")}>
              <span className="avatar small-avatar">{(user.name || "K").slice(0, 1).toUpperCase()}</span>
              <div>
                <strong>{user.name || "Kushal"}</strong>
                <small>{t("memberRole")}</small>
              </div>
            </div>
          </div>
        </header>

        <div className="page-content">
          {/* DASHBOARD VIEW */}
          {active === "Dashboard" && (
            <>
              <div className="welcome-row">
                <div>
                  <div className="eyebrow">{t("circularEcosystem")}</div>
                  <h1>
                    {t("goodToSeeYou")} {user.name || "Kushal"} <span className="wave">✦</span>
                  </h1>
                  <p className="muted">{t("dashboardSubtitle")}</p>
                </div>
                <div className="welcome-actions">
                  <button className="btn primary" onClick={() => setShowUpload(true)}>
                    {t("listItemBtn")}
                  </button>
                  <button className="btn outline" onClick={() => setActive("Donate")}>
                    <IconHeart /> {t("donateAidBtn")}
                  </button>
                </div>
              </div>

              {/* HERO BANNER */}
              <section className="hero-banner">
                <div className="hero-text">
                  <span className="hero-tag">{t("heroTag")}</span>
                  <h2>
                    {t("heroTitle1")}<br />
                    <em>{t("heroTitle2")}</em>
                  </h2>
                  <p>{t("heroDesc")}</p>
                  <div className="hero-buttons">
                    <button className="btn white" onClick={() => setShowUpload(true)}>
                      {t("heroResellBtn")} <span>→</span>
                    </button>
                    <button className="btn ghost-light" onClick={() => setActive("Donate")}>
                      {t("heroExploreDonations")} ({donations.length})
                    </button>
                  </div>
                </div>
                <div className="hero-art">
                  <img
                    src="/scrapped-wheelchair.jpg"
                    alt="Scrapped wheelchair for circular recycling"
                    onError={(e) => {
                      e.currentTarget.src = "/manual-wheelchair.jpg";
                    }}
                  />
                  <div className="art-sticker">
                    <span className="art-sticker-icon">✓</span>
                    <div>
                      <strong>{t("verifiedPickupSticker")}</strong>
                      <small>{t("doorstepCollectorSubtitle")}</small>
                    </div>
                  </div>
                </div>
              </section>

              {/* STATS TILES */}
              <div className="stats-grid">
                <Stat
                  icon={<IconWheelchair />}
                  label={t("statAidsInInventory")}
                  value={items.length}
                  note={`${verifiedCount} ${t("statReadyForPickup")}`}
                  color="green"
                />
                <Stat
                  icon={<IconClock />}
                  label={t("statAwaitingAction")}
                  value={pendingCount}
                  note={t("statAwaitingNote")}
                  color="orange"
                />
                <Stat
                  icon={<IconRupee />}
                  label={t("statTotalResaleRealized")}
                  value={money(totalEarned)}
                  note={t("statDisbursementNote")}
                  color="purple"
                />
                <Stat
                  icon={<IconDonate />}
                  label={t("statMobilityDonations")}
                  value={donations.length}
                  note={t("statDonationsNote")}
                  color="pink"
                />
              </div>

              {/* RECENT ITEMS TABLE with Relevant Equipment Images & Category Icon Badges */}
              <div className="section-heading">
                <div>
                  <h3>{t("recentHeading")}</h3>
                  <p className="muted">{t("recentSubtitle")}</p>
                </div>
                <button className="link-btn" onClick={() => setActive("My Items")}>
                  {t("viewAllItems")} ({items.length}) →
                </button>
              </div>

              <div className="items-table-wrap">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th>{t("thEquipmentCategory")}</th>
                      <th>{t("thConditionWear")}</th>
                      <th>{t("thMarketVsResale")}</th>
                      <th>{t("thMarketingStrategy")}</th>
                      <th>{t("thStatus")}</th>
                      <th>{t("thAction")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.slice(0, 6).map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="item-cell">
                            <div className="item-thumb-wrap">
                              <img src={item.image} alt={getItemText(item, "name")} className="item-thumb" />
                              <span className="item-type-icon">{getEquipmentIcon(item.name || item.category)}</span>
                            </div>
                            <div>
                              <strong>{getItemText(item, "name")}</strong>
                              <small>{getCategoryLabel(item.category)} • {item.date}</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="condition-pill">{getItemText(item, "condition")}</span>
                        </td>
                        <td>
                          <div className="price-cell">
                            <span className="price-current">{money(item.price)}</span>
                            {item.originalPrice && (
                              <del className="price-original">{money(item.originalPrice)}</del>
                            )}
                            {item.savingsPercent && (
                              <span className="savings-tag">{item.savingsPercent}% {t("cardSavings")}</span>
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="strategy-tag" title={getItemText(item, "resaleStrategy")}>
                            <IconStrategy />
                            <span>{getItemText(item, "demandTag")}</span>
                          </div>
                        </td>
                        <td>
                          <Status status={item.status} label={getStatusLabel(item.status)} />
                        </td>
                        <td>
                          <button
                            className="btn outline small-btn action-cell-btn"
                            onClick={() => {
                              if (item.status === "Pending verification") verifyItem(item.id);
                              else if (item.status === "Verified") setShowSchedule(item.id);
                              else if (item.status === "Pickup scheduled") receivePayment(item.id);
                              else setActive("My Items");
                            }}
                          >
                            {item.status === "Pending verification"
                              ? t("btnVerify")
                              : item.status === "Verified"
                              ? t("btnSchedule")
                              : item.status === "Pickup scheduled"
                              ? t("btnMarkPaid")
                              : t("btnDetails")}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* BOTTOM SECTION: WORKFLOW & DONATION SPOTLIGHT */}
              <div className="bottom-grid">
                <div className="panel">
                  <div className="panel-head">
                    <div>
                      <h3>{t("pipelineHeading")}</h3>
                      <p className="muted">{t("pipelineSub")}</p>
                    </div>
                    <button className="link-btn" onClick={() => setActive("Verification")}>
                      {t("viewChecklist")}
                    </button>
                  </div>
                  <Workflow compact lang={lang} t={t} />
                </div>

                <div className="donate-card">
                  <div className="donate-card-badge">
                    <span className="mission-heart-icon"><IconHeart /></span>
                    <span>{t("donationMission")}</span>
                  </div>
                  <h3>{t("restoreDignity")}</h3>
                  <p>{t("restoreDignityDesc")}</p>
                  <div className="donate-card-impact">
                    <div><strong>{donations.length}</strong><small>{t("aidsDonatedLabel")}</small></div>
                    <div><strong>100%</strong><small>{t("freeHandoffLabel")}</small></div>
                  </div>
                  <button className="btn primary" onClick={() => setActive("Donate")}>
                    {t("donateAidActionBtn")}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* MY ITEMS VIEW - 100% Mobility Equipments with dedicated images and category filters */}
          {active === "My Items" && (
            <>
              <PageTitle
                title={t("catalogTitle")}
                subtitle={t("catalogSubtitle")}
                action={
                  <button className="btn primary" onClick={() => setShowUpload(true)}>
                    {t("listEquipmentBtn")}
                  </button>
                }
              />

              <div className="filter-row">
                {[
                  { id: "All", label: t("filterAll") },
                  { id: "Wheelchairs", label: t("filterWheelchairs") },
                  { id: "Walkers", label: t("filterWalkers") },
                  { id: "Crutches", label: t("filterCrutches") },
                  { id: "Canes", label: t("filterCanes") },
                  { id: "Scheduled", label: t("filterScheduled") },
                  { id: "Completed", label: t("filterCompleted") }
                ].map((f) => (
                  <button
                    key={f.id}
                    className={`filter-pill ${itemFilter === f.id ? "active" : ""}`}
                    onClick={() => setItemFilter(f.id)}
                  >
                    <span className="filter-pill-icon">{getEquipmentIcon(f.id)}</span>
                    {f.label}
                    <b>
                      {f.id === "All"
                        ? items.length
                        : f.id === "Wheelchairs"
                        ? items.filter((i) => i.category === "Wheelchairs").length
                        : f.id === "Walkers"
                        ? items.filter((i) => i.category === "Walkers").length
                        : f.id === "Crutches"
                        ? items.filter((i) => i.category === "Crutches").length
                        : f.id === "Canes"
                        ? items.filter((i) => i.category.includes("Canes")).length
                        : f.id === "Scheduled"
                        ? items.filter((i) => i.status === "Pickup scheduled").length
                        : items.filter((i) => i.status === "Payment received").length}
                    </b>
                  </button>
                ))}
              </div>

              <div className="item-cards">
                {filteredItems.map((item) => (
                  <div className="listing-card" key={item.id}>
                    <div className="card-media">
                      <img src={item.image} alt={getItemText(item, "name")} />
                      <div className="card-floating-badge">
                        <Status status={item.status} label={getStatusLabel(item.status)} />
                      </div>
                      <span className="card-type-chip">
                        {getEquipmentIcon(item.name || item.category)}
                        <span>{getCategoryLabel(item.category)}</span>
                      </span>
                      {item.savingsPercent && (
                        <span className="card-savings-flag">{item.savingsPercent}% {t("cardSavings")}</span>
                      )}
                    </div>
                    <div className="listing-body">
                      <div className="card-category-row">
                        <span className="category-tag">{getCategoryLabel(item.category)}</span>
                        <span className="date-text">{t("cardListed")} {item.date}</span>
                      </div>

                      <h3>{getItemText(item, "name")}</h3>
                      <p className="condition-text">
                        <strong>{t("cardCondition")}</strong> {getItemText(item, "condition")}
                      </p>

                      <div className="pricing-box">
                        <div className="price-col">
                          <small>{t("cardResaleCost")}</small>
                          <div className="price-wrap">
                            <span className="price-amount">{money(item.price)}</span>
                            {item.originalPrice && (
                              <del className="price-was">{money(item.originalPrice)}</del>
                            )}
                          </div>
                        </div>
                        <span className="demand-pill">{getItemText(item, "demandTag")}</span>
                      </div>

                      {item.resaleStrategy && (
                        <div className="strategy-callout">
                          <div className="strategy-header">
                            <IconStrategy />
                            <span>{t("cardPricingStrategy")}</span>
                          </div>
                          <p>{getItemText(item, "resaleStrategy")}</p>
                        </div>
                      )}

                      {item.pickupDate && (
                        <div className="pickup-scheduled-info">
                          <IconTruck />
                          <div>
                            <strong>{t("cardPickup")} {item.pickupDate} {t("atTime")} {item.pickupTime}</strong>
                            <small>{item.address}</small>
                          </div>
                        </div>
                      )}

                      <div className="listing-bottom">
                        <button
                          className="btn outline full"
                          onClick={() => {
                            if (item.status === "Pending verification") verifyItem(item.id);
                            else if (item.status === "Verified") setShowSchedule(item.id);
                            else if (item.status === "Pickup scheduled") receivePayment(item.id);
                            else notify("Item sale and settlement completed.");
                          }}
                        >
                          {item.status === "Pending verification"
                            ? t("btnSimulateVerify")
                            : item.status === "Verified"
                            ? t("btnBookPickup")
                            : item.status === "Pickup scheduled"
                            ? t("btnConfirmPayout")
                            : t("btnViewReceipt")}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="notice">
                💡 <strong>{t("commercialInsightTitle")}</strong> {t("commercialInsightText")}
              </div>
            </>
          )}

          {/* SCHEDULE PICKUP VIEW with Relevant Equipment Images & Badges */}
          {active === "Schedule" && (
            <>
              <PageTitle
                title={t("scheduleTitle")}
                subtitle={t("scheduleSubtitle")}
              />

              <div className="panel">
                <div className="panel-head">
                  <div>
                    <h3>{t("activeScheduledPickups")}</h3>
                    <p className="muted">{t("activeScheduledSub")}</p>
                  </div>
                  <span className="counter-pill">
                    {items.filter((i) => ["Verified", "Pickup scheduled"].includes(i.status)).length} {t("activeCountBadge")}
                  </span>
                </div>

                {items.filter((i) => ["Verified", "Pickup scheduled"].includes(i.status)).length === 0 ? (
                  <Empty
                    title={t("noItemsReady")}
                    text={t("noItemsReadyText")}
                  />
                ) : (
                  items
                    .filter((i) => ["Verified", "Pickup scheduled"].includes(i.status))
                    .map((item) => (
                      <div className="schedule-row" key={item.id}>
                        <div className="schedule-thumb-wrap">
                          <img src={item.image} alt={getItemText(item, "name")} className="schedule-thumb" />
                          <span className="schedule-type-badge">{getEquipmentIcon(item.name || item.category)}</span>
                        </div>
                        <div className="schedule-info">
                          <div className="schedule-title-row">
                            <strong>{getItemText(item, "name")}</strong>
                            <span className="schedule-price">
                              <small className="price-tag-sub">{t("cardResaleCost")}: </small>
                              {money(item.price)}
                            </span>
                          </div>
                          <span className="muted-inline">
                            {getCategoryLabel(item.category)} • {t("cardCondition")} {getItemText(item, "condition")}
                          </span>
                          {item.pickupDate ? (
                            <div className="pickup-meta">
                              <span className="pickup-date-badge">
                                📅 {item.pickupDate} {t("atTime")} {item.pickupTime}
                              </span>
                              <span className="pickup-address-text">📍 {item.address}</span>
                            </div>
                          ) : (
                            <div className="pickup-meta pending-meta">
                              <span>{t("verifiedWaitingSlot")}</span>
                            </div>
                          )}
                        </div>
                        <div className="schedule-actions">
                          <Status status={item.status} label={getStatusLabel(item.status)} />
                          {item.status === "Verified" ? (
                            <button
                              className="btn primary small-btn"
                              onClick={() => setShowSchedule(item.id)}
                            >
                              {t("schedulePickupBtn")}
                            </button>
                          ) : (
                            <button
                              className="btn outline small-btn"
                              onClick={() => receivePayment(item.id)}
                            >
                              {t("confirmHandoverBtn")}
                            </button>
                          )}
                        </div>
                      </div>
                    ))
                )}
              </div>

              <div className="panel calendar-note">
                <div className="calendar-icon"><IconTruck /></div>
                <div>
                  <h3>{t("logisticsTitle")}</h3>
                  <p className="muted">{t("logisticsText")}</p>
                </div>
              </div>
            </>
          )}

          {/* DONATE VIEW */}
          {active === "Donate" && (
            <>
              <PageTitle
                title={t("donateTitle")}
                subtitle={t("donateSubtitle")}
              />

              {/* DONATION FEATURE BANNER with Smiling Vendor Helping People Image */}
              <div className="donate-feature">
                <div className="donate-feature-img">
                  <img
                    src="/scrap-vendor-donation.jpg"
                    alt="Happy smiling scrap vendor helping poor people with refurbished wheelchair"
                    onError={(e) => {
                      e.currentTarget.src = "/manual-wheelchair.jpg";
                    }}
                  />
                  <div className="donation-img-overlay">
                    <span>{t("communityOutreach")}</span>
                  </div>
                </div>
                <div className="donate-feature-content">
                  <span className="eyebrow">{t("heartfeltSupport")}</span>
                  <h2>{t("donateBannerHeading")}</h2>
                  <p>{t("donateBannerDesc")}</p>
                  <div className="donate-chips">
                    <span><IconCheck /> {t("donateChip1")}</span>
                    <span><IconCheck /> {t("donateChip2")}</span>
                    <span><IconCheck /> {t("donateChip3")}</span>
                  </div>
                </div>
              </div>

              {/* SUBMIT DONATION FORM with Live Equipment Image Preview */}
              <div className="panel donate-form-panel">
                <div className="donate-form-layout">
                  <div className="donate-form-fields">
                    <h3>{t("submitDonationHeading")}</h3>
                    <p className="muted">{t("submitDonationDesc")}</p>
                    <form className="form-grid" onSubmit={donateItem}>
                      <label>
                        {t("equipmentToDonate")}
                        <select
                          value={donateForm.item}
                          onChange={(e) => setDonateForm({ ...donateForm, item: e.target.value })}
                        >
                          <option>Wheelchair (Manual)</option>
                          <option>Wheelchair (Electric / Motorized)</option>
                          <option>Pair of Crutches (Underarm / Forearm)</option>
                          <option>4-Wheel Rollator Walker</option>
                          <option>Standard Folding Walker Frame</option>
                          <option>Adjustable Walking Stick / Cane</option>
                          <option>Other Assistive Device</option>
                        </select>
                      </label>
                      <label>
                        {t("itemCondition")}
                        <select
                          value={donateForm.condition}
                          onChange={(e) => setDonateForm({ ...donateForm, condition: e.target.value })}
                        >
                          <option>Like new (Ready for immediate use)</option>
                          <option>Good (Minor cosmetic wear)</option>
                          <option>Fair (Functional, needs cleaning)</option>
                          <option>Needs minor repair (Brakes, tips or cushion)</option>
                        </select>
                      </label>
                      <label className="span-two">
                        {t("specialNotesStory")}
                        <textarea
                          value={donateForm.note}
                          onChange={(e) => setDonateForm({ ...donateForm, note: e.target.value })}
                          placeholder={t("specialNotesPlaceholder")}
                          rows="3"
                        />
                      </label>
                      <div className="span-two">
                        <button className="btn primary" type="submit">
                          {t("submitDonationBtn")}
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="donate-preview-box">
                    <span className="preview-label">{t("selectedPreview")}</span>
                    <div className="donate-preview-img-wrap">
                      <img
                        src={donationImageMap[donateForm.item] || "/manual-wheelchair.jpg"}
                        alt={donateForm.item}
                        className="donate-preview-img"
                      />
                      <span className="donate-preview-icon">{getEquipmentIcon(donateForm.item)}</span>
                    </div>
                    <strong>{donateForm.item}</strong>
                    <small>{t("freeDeliveryNotice")}</small>
                  </div>
                </div>
              </div>

              {/* DONATION IMPACT LIST with Equipment Images & Icon Badges */}
              {donations.length > 0 && (
                <div className="panel">
                  <div className="panel-head">
                    <div>
                      <h3>{t("impactRecordsTitle")}</h3>
                      <p className="muted">{t("impactRecordsDesc")}</p>
                    </div>
                    <span className="counter-pill">{donations.length} {t("handoffsLabel")}</span>
                  </div>

                  <div className="donations-grid">
                    {donations.map((d) => (
                      <div className="donation-card" key={d.id}>
                        <div className="donation-thumb-wrap">
                          <img src={d.image} alt={getDonationText(d, "item")} className="donation-thumb" />
                          <span className="donation-type-badge">{getEquipmentIcon(d.item || d.category)}</span>
                        </div>
                        <div className="donation-details">
                          <div className="donation-top-line">
                            <strong>{getDonationText(d, "item")}</strong>
                            <Status status={d.status} label={getStatusLabel(d.status)} />
                          </div>
                          <p className="donation-condition">
                            {t("cardCondition")} <span>{getDonationText(d, "condition")}</span> • {t("donorLabel")} <strong>{d.donor}</strong>
                          </p>
                          <div className="beneficiary-box">
                            <small>{t("beneficiaryImpactLabel")}</small>
                            <p>{getDonationText(d, "impact") || getDonationText(d, "beneficiary")}</p>
                          </div>
                          <span className="donation-date">{t("loggedOnLabel")} {d.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* NOTIFICATIONS VIEW */}
          {active === "Notifications" && (
            <>
              <PageTitle
                title={t("notificationsTitle")}
                subtitle={t("notificationsSubtitle")}
                action={
                  <button
                    className="btn outline"
                    onClick={() => setNotifications((old) => old.map((n) => ({ ...n, read: true })))}
                  >
                    {t("markAllRead")}
                  </button>
                }
              />

              <div className="panel notification-list">
                {notifications.length === 0 ? (
                  <Empty title={t("caughtUpTitle")} text={t("caughtUpText")} />
                ) : (
                  notifications.map((n) => (
                    <button
                      key={n.id}
                      className={`notification-row ${n.read ? "" : "unread"}`}
                      onClick={() => markRead(n.id)}
                    >
                      <span className="notification-symbol">
                        {n.title.toLowerCase().includes("payment") ? (
                          <IconRupee />
                        ) : n.title.toLowerCase().includes("pickup") ? (
                          <IconTruck />
                        ) : n.title.toLowerCase().includes("donation") ? (
                          <IconHeart />
                        ) : (
                          <IconWheelchair />
                        )}
                      </span>
                      <span className="notification-copy">
                        <strong>{n.title}</strong>
                        <span>{n.text}</span>
                        <small>{n.time}</small>
                      </span>
                      {!n.read && <span className="unread-dot" />}
                    </button>
                  ))
                )}
              </div>
            </>
          )}

          {/* VERIFICATION VIEW */}
          {active === "Verification" && (
            <>
              <PageTitle
                title={t("verificationTitle")}
                subtitle={t("verificationSubtitle")}
              />

              <div className="panel inspection-header-panel">
                <div className="inspection-icon-large">
                  <IconVerification />
                </div>
                <div>
                  <h3>{t("inspectionCardTitle")}</h3>
                  <p className="muted">{t("inspectionCardDesc")}</p>
                </div>
              </div>

              <Workflow lang={lang} t={t} />

              <div className="panel">
                <h3>{t("checklistTitle")}</h3>
                {items.map((item) => (
                  <div className="verify-item-row" key={item.id}>
                    <div className="verify-thumb-wrap">
                      <img src={item.image} alt={getItemText(item, "name")} className="verify-item-img" />
                      <span className="verify-type-badge">{getEquipmentIcon(item.name || item.category)}</span>
                    </div>
                    <div className="schedule-info">
                      <strong>{getItemText(item, "name")}</strong>
                      <small>
                        {getCategoryLabel(item.category)} • {t("valuedAtText")} {money(item.price)} • {t("submittedOnText")} {item.date}
                      </small>
                      <span className="condition-sub">{getItemText(item, "condition")}</span>
                    </div>
                    <Status status={item.status} label={getStatusLabel(item.status)} />
                    <div className="verify-actions">
                      {item.status === "Pending verification" && (
                        <button className="btn outline small-btn" onClick={() => verifyItem(item.id)}>
                          {t("approveValuationBtn")}
                        </button>
                      )}
                      {item.status === "Verified" && (
                        <button className="btn primary small-btn" onClick={() => setShowSchedule(item.id)}>
                          {t("schedulePickupBtn")}
                        </button>
                      )}
                      {item.status === "Pickup scheduled" && (
                        <button className="btn outline small-btn" onClick={() => receivePayment(item.id)}>
                          {t("disbursePayoutBtn")}
                        </button>
                      )}
                      {item.status === "Payment received" && (
                        <button className="btn outline small-btn" onClick={() => setShowFeedback(true)}>
                          {t("giveFeedbackBtn")}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* PROFILE VIEW */}
          {active === "Profile" && (
            <>
              <PageTitle
                title={t("profileTitle")}
                subtitle={t("profileSubtitle")}
              />

              <div className="profile-layout">
                <div className="panel profile-card">
                  <div className="profile-avatar-large">
                    {(user.name || "K").slice(0, 1).toUpperCase()}
                  </div>
                  <h3>{user.name || "Kushal"}</h3>
                  <p className="muted">{user.email || "kushal@example.com"}</p>
                  <p className="phone-line">{user.phone || "+91 98765 43210"}</p>
                  <span className="status-badge status-verified">{t("activeContributorBadge")}</span>

                  <div className="profile-stats">
                    <div>
                      <strong>{items.length}</strong>
                      <small>{t("listedAidsLabel")}</small>
                    </div>
                    <div>
                      <strong>{donations.length}</strong>
                      <small>{t("donationsLabel")}</small>
                    </div>
                    <div>
                      <strong>{money(totalEarned)}</strong>
                      <small>{t("earnedLabel")}</small>
                    </div>
                  </div>
                </div>

                <div className="panel profile-edit">
                  <h3>{t("editContactHeading")}</h3>
                  <p className="muted">{t("editContactDesc")}</p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const fd = new FormData(e.currentTarget);
                      setUser({
                        name: fd.get("name")?.toString() || user.name,
                        email: fd.get("email")?.toString() || user.email,
                        phone: fd.get("phone")?.toString() || user.phone,
                      });
                      notify("Profile updated successfully.");
                    }}
                  >
                    <label>
                      {t("fullName")}
                      <input name="name" defaultValue={user.name} required />
                    </label>
                    <label>
                      {t("emailAddress")}
                      <input name="email" type="email" defaultValue={user.email} required />
                    </label>
                    <label>
                      {t("primaryPhoneLabel")}
                      <input name="phone" defaultValue={user.phone} required />
                    </label>
                    <button className="btn primary" type="submit">
                      {t("saveProfileBtn")}
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>

        <footer className="footer">
          <div className="footer-brand">
            <img src="/scrapcycle-logo.png" alt="ScrapCycle" className="footer-logo" />
            <span>{t("footerCopyright")}</span>
          </div>
          <div className="footer-links">
            <span>{t("footerMission")}</span>
            <span>{t("footerRefurbish")}</span>
          </div>
        </footer>
      </main>

      {/* UPLOAD ITEM MODAL */}
      {showUpload && (
        <Modal
          title={t("modalUploadTitle")}
          subtitle={t("modalUploadSub")}
          onClose={() => setShowUpload(false)}
        >
          <form className="modal-form" onSubmit={addItem}>
            <label>
              {t("equipmentNameLabel")}
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t("equipmentNamePlaceholder")}
                required
              />
            </label>

            <div className="form-grid">
              <label>
                {t("categoryLabel")}
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                >
                  <option value="Wheelchairs">{t("filterWheelchairs")}</option>
                  <option value="Walkers">{t("filterWalkers")}</option>
                  <option value="Crutches">{t("filterCrutches")}</option>
                  <option value="Canes & Sticks">{t("filterCanes")}</option>
                </select>
              </label>

              <label>
                {t("conditionLabel")}
                <select
                  value={form.condition}
                  onChange={(e) => setForm({ ...form, condition: e.target.value })}
                >
                  <option>Like new (Zero damage, clinic ready)</option>
                  <option>Good (Minor cosmetic wear)</option>
                  <option>Used (Functional, needs light tune-up)</option>
                  <option>Needs minor repair (Brakes, tips or cushions)</option>
                </select>
              </label>
            </div>

            <div className="form-grid">
              <label>
                {t("originalMrpInput")}
                <input
                  type="number"
                  min="0"
                  value={form.originalPrice}
                  onChange={(e) => setForm({ ...form, originalPrice: e.target.value })}
                  placeholder="e.g. 7800"
                />
              </label>
              <label>
                {t("resaleCostInput")}
                <input
                  type="number"
                  min="0"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  placeholder="e.g. 2499"
                  required
                />
              </label>
            </div>

            <label>
              {t("imageUrlLabel")}
              <input
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                placeholder="https://..."
              />
            </label>

            <label>
              {t("conditionNotesLabel")}
              <textarea
                rows="3"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder={t("conditionNotesPlaceholder")}
              />
            </label>

            <div className="modal-actions">
              <button type="button" className="btn outline" onClick={() => setShowUpload(false)}>
                {t("cancelBtn")}
              </button>
              <button type="submit" className="btn primary">
                {t("submitValuationBtn")}
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* SCHEDULE PICKUP MODAL */}
      {showSchedule && (
        <Modal
          title={t("modalScheduleTitle")}
          subtitle={t("modalScheduleSub")}
          onClose={() => setShowSchedule(null)}
        >
          <form className="modal-form" onSubmit={schedulePickup}>
            <label>
              {t("preferredDate")}
              <input
                type="date"
                value={schedule.date}
                onChange={(e) => setSchedule({ ...schedule, date: e.target.value })}
                required
              />
            </label>

            <label>
              {t("preferredTimeSlot")}
              <select
                value={schedule.time}
                onChange={(e) => setSchedule({ ...schedule, time: e.target.value })}
              >
                <option>9:00 AM - 11:00 AM</option>
                <option>11:00 AM - 1:00 PM</option>
                <option>2:00 PM - 4:00 PM</option>
                <option>4:00 PM - 6:00 PM</option>
              </select>
            </label>

            <label>
              {t("pickupAddress")}
              <textarea
                rows="3"
                value={schedule.address}
                onChange={(e) => setSchedule({ ...schedule, address: e.target.value })}
                placeholder={t("addressPlaceholder")}
                required
              />
            </label>

            <div className="notice">
              {t("scheduleModalNotice")}
            </div>

            <div className="modal-actions">
              <button type="button" className="btn outline" onClick={() => setShowSchedule(null)}>
                {t("cancelBtn")}
              </button>
              <button type="submit" className="btn primary">
                {t("confirmScheduleBtn")}
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* FEEDBACK MODAL */}
      {showFeedback && (
        <Modal
          title={t("modalFeedbackTitle")}
          subtitle={t("modalFeedbackSub")}
          onClose={() => setShowFeedback(false)}
        >
          <form
            className="modal-form"
            onSubmit={(e) => {
              e.preventDefault();
              addNotification("Feedback submitted", `Thank you for rating us ${feedback.rating}/5 stars!`);
              setShowFeedback(false);
              setFeedback({ rating: 5, message: "" });
              notify("Thank you for your valuable feedback!");
            }}
          >
            <label>{t("overallExperience")}</label>
            <div className="rating-row">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  className={`rating-star ${feedback.rating >= n ? "chosen" : ""}`}
                  onClick={() => setFeedback({ ...feedback, rating: n })}
                >
                  ★
                </button>
              ))}
            </div>

            <label>
              {t("commentsSuggestions")}
              <textarea
                rows="4"
                value={feedback.message}
                onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                placeholder={t("feedbackPlaceholder")}
              />
            </label>

            <div className="modal-actions">
              <button type="button" className="btn outline" onClick={() => setShowFeedback(false)}>
                {t("cancelBtn")}
              </button>
              <button type="submit" className="btn primary">
                {t("submitFeedbackBtn")}
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* GLOBAL TOAST ALERT */}
      {toast && (
        <div className="toast">
          <span>✓</span>
          {toast}
        </div>
      )}

      <style>{styles}</style>
    </div>
  );
}

// Helper Components
function Stat({ icon, label, value, note, color }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>{icon}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-note">{note}</div>
    </div>
  );
}

function PageTitle({ title, subtitle, action }) {
  return (
    <div className="page-title-row">
      <div>
        <h1>{title}</h1>
        <p className="muted">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

function Status({ status, label }) {
  let cls = "pending";
  if (status === "Verified" || status === "Payment received" || status === "Delivered to Beneficiary") cls = "verified";
  if (status === "Pickup scheduled" || status === "Collected from Donor") cls = "scheduled";
  if (status === "Donated" || status === "Donation requested" || status === "Refurbishing in progress") cls = "donated";
  return (
    <span className={`status-badge status-${cls}`}>
      <i />
      {label || status}
    </span>
  );
}

function Workflow({ compact = false, lang = "en" }) {
  const stepsData = {
    en: [
      { title: "Upload mobility aid details", sub: "Add photos and condition details" },
      { title: "Condition & Resale Cost audit", sub: "Fair market Resale Cost valuation" },
      { title: "Schedule doorstep pickup", sub: "Choose convenient collector slot" },
      { title: "Receive fair payout", sub: "Instant digital payout upon collection" },
      { title: "Community feedback & impact", sub: "Review impact on people in need" }
    ],
    te: [
      { title: "మొబిలిటీ పరికర వివరాల అప్‌లోడ్", sub: "ఫోటోలు మరియు పరిస్థితి వివరాలను జోడించండి" },
      { title: "పరిస్థితి & రీసేల్ ధర ఆడిట్", sub: "సరసమైన మార్కెట్ రీసేల్ ధర లెక్కింపు" },
      { title: "డోర్‌స్టెప్ పికప్ షెడ్యూలింగ్", sub: "అనుకూలమైన కలెక్టర్ సమయాన్ని ఎంచుకోండి" },
      { title: "సరసమైన చెల్లింపు పొందండి", sub: "పరికర సేకరణ వెంటనే తక్షణ డిజిటల్ చెల్లింపు" },
      { title: "కమ్యూనిటీ అభిప్రాయం & ప్రభావం", sub: "సమాజంపై మీ సహకారం ప్రభావాన్ని సమీక్షించండి" }
    ],
    kn: [
      { title: "ಸಾಧನದ ವಿವರಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ", sub: "ಫೋಟೋಗಳು ಮತ್ತು ಸ್ಥಿತಿ ವಿವರಗಳನ್ನು ಸೇರಿಸಿ" },
      { title: "ಸ್ಥಿತಿ & ಮರುಮಾರಾಟ ವೆಚ್ಚ ಆಡಿಟ್", sub: "ನ್ಯಾಯಯುತ ಮಾರುಕಟ್ಟೆ ಮರುಮಾರಾಟ ವೆಚ್ಚ" },
      { title: "ಮನೆಬಾಗಿಲಿನ ಪಿಕಪ್ ನಿಗದಿಪಡಿಸಿ", sub: "ಅನುಕೂಲಕರ ಕಲೆಕ್ಟರ್ ಸಮಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ" },
      { title: "ನ್ಯಾಯಯುತ ಪಾವತಿ ಸ್ವೀಕರಿಸಿ", sub: "ಸಾಧನ ಹಸ್ತಾಂತರದ ನಂತರ ತಕ್ಷಣ ಡಿಜಿಟಲ್ ಪಾವತಿ" },
      { title: "ಸಮುದಾಯದ ಪ್ರತಿಕ್ರಿಯೆ ಮತ್ತು ಪ್ರಭಾವ", sub: "ಸಮುದಾಯದ ಮೇಲಿನ ಪ್ರಭಾವವನ್ನು ಪರಿಶೀಲಿಸಿ" }
    ],
    hi: [
      { title: "गतिशीलता उपकरण विवरण अपलोड करें", sub: "फ़ोटो और उपकरण स्थिति का विवरण जोड़ें" },
      { title: "स्थिति जांच एवं रीसेल लागत ऑडिट", sub: "उचित बाजार रीसेल लागत का निर्धारण" },
      { title: "घर बैठे पिकअप तय करें", sub: "सुविधाजनक पिकअप समय चुनें" },
      { title: "उचित भुगतान प्राप्त करें", sub: "उपकरण लेते ही तत्काल डिजिटल भुगतान" },
      { title: "सामुदायिक प्रतिक्रिया एवं सामाजिक प्रभाव", sub: "समाज पर उपकरण के प्रभाव की समीक्षा करें" }
    ]
  };

  const currentSteps = stepsData[lang] || stepsData["en"];

  return (
    <div className={`workflow ${compact ? "compact" : ""}`}>
      {currentSteps.map((step, i) => (
        <div className={`workflow-step ${i <= 1 ? "done" : ""}`} key={step.title}>
          <div className="step-line" />
          <div className="step-circle">{i <= 1 ? "✓" : i + 1}</div>
          <div className="step-text">
            <strong>{step.title}</strong>
            <small>{step.sub}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

function Empty({ title, text }) {
  return (
    <div className="empty-state">
      <div className="empty-icon-wrap">
        <IconWheelchair />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Modal({ title, subtitle, onClose, children }) {
  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2>{title}</h2>
        <p className="muted">{subtitle}</p>
        {children}
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Noto+Sans+Kannada:wght@400;600;700&family=Noto+Sans+Telugu:wght@400;600;700&display=swap');

:root {
  --green: #1f7a4d;
  --green-dark: #124c30;
  --green-soft: #eaf6ee;
  --green-border: #cbe6d4;
  --ink: #182920;
  --muted: #6e7e75;
  --line: #e3eae4;
  --paper: #ffffff;
  --bg: #f5f8f6;
  --orange: #c47a2c;
  --purple: #6a4ec2;
  --sidebar-w: 250px;
  --sidebar-collapsed-w: 74px;
}

* { box-sizing: border-box; }
body { margin: 0; font-family: 'DM Sans', 'Noto Sans Telugu', 'Noto Sans Kannada', sans-serif; color: var(--ink); background: var(--bg); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible { outline: 3px solid #9ed7b5; outline-offset: 2px; }
h1, h2, h3, p { margin-top: 0; }
h1, h2, h3, strong { font-family: 'Manrope', 'DM Sans', 'Noto Sans Telugu', 'Noto Sans Kannada', sans-serif; }
h1 { font-size: 28px; letter-spacing: -0.8px; margin-bottom: 8px; }
h2 { letter-spacing: -0.7px; }
h3 { font-size: 16px; letter-spacing: -0.2px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; line-height: 1.6; margin-bottom: 0; }
.eyebrow { font-size: 10px; font-weight: 800; letter-spacing: 1.5px; color: var(--green); text-transform: uppercase; }

/* Language Switcher */
.lang-switcher-wrap {
  display: inline-flex;
  align-items: center;
  background: white;
  border: 1px solid var(--line);
  border-radius: 30px;
  padding: 3px 6px;
  gap: 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}
.lang-icon {
  display: grid;
  place-items: center;
  color: var(--muted);
  padding: 0 4px;
}
.lang-pill {
  border: 0;
  background: transparent;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 700;
  border-radius: 20px;
  color: #55685d;
  transition: all 0.15s ease;
}
.lang-pill:hover {
  color: var(--green);
  background: #f0f7f2;
}
.lang-pill.active {
  background: var(--green);
  color: white;
  box-shadow: 0 2px 8px rgba(31, 122, 77, 0.28);
}

.auth-visual-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
}
.auth-visual-top .lang-switcher-wrap {
  background: rgba(255, 255, 255, 0.9);
}
.mobile-brand-row {
  display: none;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

/* Buttons */
.btn {
  border: 0; border-radius: 9px; padding: 10px 18px; font-size: 12px; font-weight: 700;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn.primary { background: var(--green); color: white; box-shadow: 0 4px 12px rgba(31, 122, 77, 0.22); }
.btn.primary:hover { background: var(--green-dark); }
.btn.outline { background: white; border: 1px solid var(--line); color: var(--ink); }
.btn.outline:hover { border-color: var(--green); color: var(--green); }
.btn.white { background: white; color: var(--green-dark); font-weight: 800; box-shadow: 0 4px 14px rgba(0,0,0,0.12); }
.btn.ghost-light { background: rgba(255, 255, 255, 0.16); border: 1px solid rgba(255, 255, 255, 0.4); color: white; }
.btn.ghost-light:hover { background: rgba(255, 255, 255, 0.25); }
.btn.full { width: 100%; margin-top: 6px; }
.small-btn { padding: 7px 12px; font-size: 11px; border-radius: 7px; }
.link-btn, .text-btn { border: 0; background: transparent; color: var(--green); font-size: 12px; font-weight: 700; padding: 4px; }
.text-btn { text-decoration: underline; cursor: pointer; }

/* Auth Layout */
.auth-shell { min-height: 100vh; display: grid; grid-template-columns: 1.15fr 0.85fr; background: white; }
.auth-visual {
  background: linear-gradient(135deg, #103b25 0%, #174f32 50%, #206d45 100%);
  color: white; padding: 50px; display: flex; flex-direction: column; justify-content: space-between; position: relative;
}
.auth-brand { display: flex; align-items: center; gap: 12px; }
.brand-logo-img { width: 44px; height: 44px; object-fit: contain; }
.brand-text span { font-size: 20px; font-weight: 800; letter-spacing: -0.5px; display: block; line-height: 1.1; }
.brand-text small { font-size: 9px; letter-spacing: 1.8px; opacity: 0.8; font-weight: 700; }
.auth-copy { max-width: 520px; }
.auth-copy .eyebrow { color: #8de4b3; margin-bottom: 12px; display: inline-block; }
.auth-copy h1 { font-size: 40px; line-height: 1.15; margin-bottom: 16px; }
.auth-copy em { font-style: normal; color: #a4f5c7; text-decoration: underline wavy #a4f5c7; }
.auth-copy p { font-size: 15px; line-height: 1.7; opacity: 0.9; margin-bottom: 24px; }
.auth-perks { display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px; }
.auth-perks span { display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 600; }
.auth-perks svg { color: #86d299; flex-shrink: 0; }
.visual-caption { font-size: 12px; opacity: 0.75; display: flex; align-items: center; gap: 8px; }
.pulse-dot { width: 8px; height: 8px; background: #62dd8a; border-radius: 50%; box-shadow: 0 0 10px #62dd8a; }

.auth-panel { display: flex; flex-direction: column; justify-content: space-between; padding: 40px 50px; background: white; }
.auth-form-wrap { max-width: 400px; width: 100%; margin: auto; }
.auth-tabs { display: flex; background: #edf4ef; padding: 4px; border-radius: 10px; margin-bottom: 24px; gap: 4px; }
.auth-tab { flex: 1; border: 0; background: transparent; padding: 9px; border-radius: 7px; font-size: 13px; font-weight: 700; color: #576b60; transition: all 0.2s; }
.auth-tab.active { background: white; color: var(--green-dark); box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
.auth-form-wrap h2 { font-size: 24px; margin: 6px 0 6px; }
.auth-form-wrap form { margin-top: 22px; display: flex; flex-direction: column; gap: 14px; }
.auth-form-wrap label { display: flex; flex-direction: column; font-size: 12px; font-weight: 700; color: #37483f; gap: 6px; }
.auth-form-wrap input, .modal-form input, .modal-form select, .modal-form textarea, .donate-form-fields select, .donate-form-fields textarea, .profile-edit input {
  padding: 10px 14px; border: 1px solid #d4ded7; border-radius: 8px; font-size: 13px; background: #fafcfa; transition: all 0.2s;
}
.auth-form-wrap input:focus, .modal-form input:focus, .modal-form select:focus, .modal-form textarea:focus, .profile-edit input:focus {
  border-color: var(--green); background: white;
}
.auth-divider { position: relative; text-align: center; margin: 20px 0 14px; }
.auth-divider::before { content: ""; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: var(--line); }
.auth-divider span { position: relative; background: white; padding: 0 10px; font-size: 11px; color: var(--muted); text-transform: uppercase; font-weight: 700; letter-spacing: 1px; }
.demo-btn { border-color: #8cd4a7; color: var(--green-dark); background: #f2faf4; font-weight: 800; }
.terms { font-size: 11px; color: #7f9086; text-align: center; line-height: 1.5; margin-top: 14px; }
.terms a { color: var(--green); text-decoration: none; font-weight: 700; }
.signin-note { font-size: 12px; text-align: center; margin-top: 16px; color: #5f7065; }
.auth-footer { font-size: 11px; color: #94a49a; text-align: center; padding-top: 20px; }

/* Dashboard Layout */
.app-shell { display: flex; min-height: 100vh; }
.sidebar {
  width: var(--sidebar-w); background: white; border-right: 1px solid var(--line);
  display: flex; flex-direction: column; justify-content: space-between; padding: 20px 14px;
  position: sticky; top: 0; height: 100vh; overflow-y: auto; transition: width 0.25s ease;
}
.sidebar.collapsed { width: var(--sidebar-collapsed-w); padding: 20px 8px; }
.brand-header { display: flex; align-items: center; justify-content: space-between; padding-bottom: 20px; border-bottom: 1px solid var(--line); margin-bottom: 18px; }
.brand { border: 0; background: transparent; display: flex; align-items: center; gap: 10px; padding: 0; text-align: left; }
.brand-title { font-size: 18px; font-weight: 800; display: block; color: var(--ink); line-height: 1.1; }
.collapse-toggle-btn, .topbar-collapse-btn {
  border: 1px solid var(--line); background: #f6faf7; border-radius: 7px; width: 28px; height: 28px;
  display: grid; place-items: center; color: var(--muted); transition: all 0.2s;
}
.collapse-toggle-btn:hover, .topbar-collapse-btn:hover { background: var(--green); color: white; border-color: var(--green); }
.topbar-collapse-btn { display: none; }

.side-group { font-size: 10px; font-weight: 800; letter-spacing: 1.2px; color: #8e9e94; margin: 16px 8px 6px; }
.nav-item {
  width: 100%; border: 0; background: transparent; display: flex; align-items: center; gap: 10px;
  padding: 9px 12px; border-radius: 8px; font-size: 13px; font-weight: 600; color: #43544a; margin-bottom: 3px;
  transition: all 0.15s ease; position: relative;
}
.nav-item:hover { background: #f0f6f2; color: var(--green); }
.nav-item.selected { background: var(--green-soft); color: var(--green-dark); font-weight: 800; }
.nav-icon { display: grid; place-items: center; color: currentColor; }
.nav-count { margin-left: auto; font-size: 10px; font-weight: 800; background: #e3ede5; color: var(--green-dark); padding: 2px 7px; border-radius: 10px; }
.nav-count.mini-badge { position: absolute; top: 4px; right: 4px; padding: 2px 5px; font-size: 9px; }

.sidebar-bottom { display: flex; flex-direction: column; gap: 12px; padding-top: 14px; border-top: 1px solid var(--line); }
.help-card { background: #f4faf6; border: 1px solid #d4eadc; border-radius: 10px; padding: 12px; }
.help-card strong { font-size: 12px; display: block; color: var(--green-dark); margin: 6px 0 4px; }
.help-card p { font-size: 10.5px; color: #5b6d62; line-height: 1.4; margin-bottom: 8px; }
.help-card button { border: 0; background: transparent; color: var(--green); font-size: 11px; font-weight: 800; padding: 0; }
.profile-mini {
  border: 1px solid var(--line); background: #fafcfa; border-radius: 9px; padding: 8px 10px;
  display: flex; align-items: center; gap: 10px; text-align: left;
}
.avatar { width: 32px; height: 32px; border-radius: 50%; background: #d3ebd8; color: var(--green-dark); font-weight: 800; display: grid; place-items: center; font-size: 12px; }
.profile-text strong { display: block; font-size: 12px; line-height: 1.2; }
.profile-text small { font-size: 10px; color: var(--muted); }
.logout-btn { border: 0; background: transparent; color: #7f9085; font-size: 12px; font-weight: 700; display: flex; align-items: center; gap: 8px; padding: 6px 10px; }
.logout-btn:hover { color: #d04545; }

/* Main Area */
.main-area { flex: 1; display: flex; flex-direction: column; min-width: 0; }
.topbar {
  height: 64px; background: white; border-bottom: 1px solid var(--line); padding: 0 32px;
  display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 20;
}
.breadcrumb-row { display: flex; align-items: center; gap: 12px; }
.breadcrumb { font-size: 13px; color: var(--muted); }
.breadcrumb span { margin: 0 6px; }
.breadcrumb strong { color: var(--ink); }
.top-actions { display: flex; align-items: center; gap: 14px; }
.icon-btn { border: 1px solid var(--line); background: white; border-radius: 8px; width: 36px; height: 36px; display: grid; place-items: center; color: var(--ink); position: relative; }
.icon-btn i { position: absolute; top: 6px; right: 6px; width: 7px; height: 7px; background: #ea5455; border-radius: 50%; }
.top-user { display: flex; align-items: center; gap: 9px; cursor: pointer; padding: 4px 8px; border-radius: 8px; }
.top-user:hover { background: #f3f7f4; }
.small-avatar { width: 28px; height: 28px; font-size: 11px; }

.page-content { padding: 32px; flex: 1; max-width: 1400px; width: 100%; margin: 0 auto; }
.welcome-row, .page-title-row { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px; gap: 20px; }
.welcome-actions { display: flex; gap: 10px; }
.wave { font-style: normal; color: #ecc94b; }

/* Hero Banner */
.hero-banner {
  background: linear-gradient(135deg, #14492d 0%, #1e6d44 60%, #298c57 100%);
  border-radius: 16px; color: white; display: flex; overflow: hidden; margin-bottom: 28px;
  box-shadow: 0 10px 30px rgba(20, 73, 45, 0.2);
}
.hero-text { flex: 1; padding: 40px; display: flex; flex-direction: column; justify-content: center; }
.hero-tag { font-size: 10.5px; font-weight: 800; letter-spacing: 1.4px; color: #94f3bc; text-transform: uppercase; margin-bottom: 12px; }
.hero-text h2 { font-size: 32px; line-height: 1.18; margin-bottom: 14px; }
.hero-text em { color: #bdfad5; font-style: normal; }
.hero-text p { font-size: 14px; line-height: 1.6; opacity: 0.92; max-width: 500px; margin-bottom: 22px; }
.hero-buttons { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-art { width: 44%; position: relative; min-height: 260px; }
.hero-art img { width: 100%; height: 100%; object-fit: cover; }
.art-sticker {
  position: absolute; bottom: 18px; left: 18px; background: rgba(18, 48, 32, 0.9);
  backdrop-filter: blur(6px); border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 10px; padding: 8px 14px; display: flex; align-items: center; gap: 10px; color: white;
}
.art-sticker-icon { background: #57cf84; color: #123321; border-radius: 50%; width: 22px; height: 22px; display: grid; place-items: center; font-weight: 800; font-size: 12px; }
.art-sticker strong { display: block; font-size: 12px; }
.art-sticker small { font-size: 10px; opacity: 0.8; }

/* Stats Tiles */
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 28px; }
.stat-card { background: white; border: 1px solid var(--line); border-radius: 12px; padding: 18px; position: relative; }
.stat-icon { width: 36px; height: 36px; border-radius: 9px; display: grid; place-items: center; margin-bottom: 12px; }
.stat-icon.green { background: #eaf6ee; color: var(--green); }
.stat-icon.orange { background: #fdf3e7; color: var(--orange); }
.stat-icon.purple { background: #f2eefa; color: var(--purple); }
.stat-icon.pink { background: #faebf2; color: #c4327a; }
.stat-label { font-size: 12px; color: var(--muted); font-weight: 600; margin-bottom: 4px; }
.stat-value { font-size: 24px; font-weight: 800; color: var(--ink); font-family: 'Manrope', sans-serif; }
.stat-note { font-size: 11px; color: #83948a; margin-top: 4px; }

/* Items Table */
.section-heading { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 14px; }
.items-table-wrap { background: white; border: 1px solid var(--line); border-radius: 14px; overflow: hidden; margin-bottom: 30px; }
.items-table { width: 100%; border-collapse: collapse; text-align: left; }
.items-table th { background: #f8faf8; padding: 12px 18px; font-size: 10.5px; font-weight: 800; letter-spacing: 0.8px; color: #728479; border-bottom: 1px solid var(--line); }
.items-table td { padding: 14px 18px; border-bottom: 1px solid #edf2ee; font-size: 12.5px; vertical-align: middle; }
.items-table tr:last-child td { border-bottom: 0; }
.item-cell { display: flex; align-items: center; gap: 14px; }
.item-thumb-wrap { position: relative; width: 44px; height: 44px; flex-shrink: 0; }
.item-thumb { width: 44px; height: 44px; border-radius: 8px; object-fit: cover; border: 1px solid var(--line); }
.item-type-icon {
  position: absolute; bottom: -4px; right: -4px; background: white; border: 1px solid var(--line);
  border-radius: 50%; width: 18px; height: 18px; display: grid; place-items: center; color: var(--green);
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
}
.item-cell strong { display: block; font-size: 13px; color: var(--ink); }
.item-cell small { font-size: 11px; color: var(--muted); }
.condition-pill { background: #f0f5f2; border: 1px solid #d7e3da; color: #43594d; font-size: 11px; padding: 3px 8px; border-radius: 6px; font-weight: 600; display: inline-block; }
.price-cell { display: flex; align-items: baseline; gap: 8px; }
.price-current { font-weight: 800; color: var(--green-dark); font-size: 14px; }
.price-original { font-size: 11px; color: #9daea3; }
.savings-tag { background: #eaf8ef; color: #1f7a4d; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px; }
.strategy-tag { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; color: #53457a; background: #f4f0fc; padding: 4px 8px; border-radius: 6px; }
.status-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; padding: 4px 9px; border-radius: 20px; }
.status-badge i { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.status-verified { background: #eaf6ee; color: var(--green); }
.status-scheduled { background: #fdf3e7; color: var(--orange); }
.status-pending { background: #f1f4f2; color: #6e8076; }
.status-donated { background: #faebf2; color: #c4327a; }

/* Bottom Grid */
.bottom-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 20px; }
.panel { background: white; border: 1px solid var(--line); border-radius: 14px; padding: 24px; margin-bottom: 24px; }
.panel-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 18px; }
.counter-pill { background: #eaf6ee; color: var(--green); font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 20px; }
.donate-card {
  background: linear-gradient(135deg, #173826 0%, #205c3d 100%);
  color: white; border-radius: 14px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between;
}
.donate-card-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.15); padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; margin-bottom: 14px; align-self: flex-start; }
.mission-heart-icon { color: #ff7698; }
.donate-card h3 { font-size: 22px; margin-bottom: 8px; }
.donate-card p { font-size: 13px; line-height: 1.6; opacity: 0.9; margin-bottom: 20px; }
.donate-card-impact { display: flex; gap: 24px; border-top: 1px solid rgba(255,255,255,0.18); border-bottom: 1px solid rgba(255,255,255,0.18); padding: 14px 0; margin-bottom: 20px; }
.donate-card-impact strong { display: block; font-size: 22px; color: #a6f5c8; }
.donate-card-impact small { font-size: 11px; opacity: 0.8; }

/* My Items Page */
.filter-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
.filter-pill {
  border: 1px solid var(--line); background: white; padding: 8px 14px; border-radius: 24px; font-size: 12px;
  font-weight: 700; color: #495b50; display: inline-flex; align-items: center; gap: 8px; transition: all 0.15s;
}
.filter-pill:hover { border-color: var(--green); color: var(--green); }
.filter-pill.active { background: var(--green-dark); color: white; border-color: var(--green-dark); }
.filter-pill b { background: rgba(0,0,0,0.08); padding: 1px 7px; border-radius: 10px; font-size: 10px; }
.filter-pill.active b { background: rgba(255,255,255,0.25); color: white; }
.filter-pill-icon { display: grid; place-items: center; }

.item-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 28px; }
.listing-card { background: white; border: 1px solid var(--line); border-radius: 14px; overflow: hidden; display: flex; flex-direction: column; transition: all 0.2s ease; }
.listing-card:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0,0,0,0.06); }
.card-media { position: relative; height: 180px; background: #eef3ef; overflow: hidden; }
.card-media img { width: 100%; height: 100%; object-fit: cover; }
.card-floating-badge { position: absolute; top: 12px; right: 12px; }
.card-type-chip {
  position: absolute; bottom: 10px; left: 10px; background: rgba(255, 255, 255, 0.95);
  border-radius: 6px; padding: 3px 8px; font-size: 10.5px; font-weight: 800; display: inline-flex; align-items: center; gap: 5px; color: var(--green-dark);
}
.card-savings-flag { position: absolute; top: 12px; left: 12px; background: #1f7a4d; color: white; font-size: 10px; font-weight: 800; padding: 3px 8px; border-radius: 5px; }
.listing-body { padding: 18px; display: flex; flex-direction: column; flex: 1; }
.card-category-row { display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 6px; color: var(--muted); }
.category-tag { font-weight: 700; color: var(--green); text-transform: uppercase; font-size: 10px; letter-spacing: 0.5px; }
.listing-body h3 { font-size: 15px; margin-bottom: 6px; line-height: 1.3; }
.condition-text { font-size: 12px; color: #5a6e62; margin-bottom: 12px; }
.pricing-box { background: #f6faf7; border: 1px solid #dbeef1; border-radius: 10px; padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.price-col small { font-size: 10px; text-transform: uppercase; color: var(--muted); font-weight: 800; display: block; letter-spacing: 0.5px; }
.price-wrap { display: flex; align-items: baseline; gap: 8px; margin-top: 2px; }
.price-amount { font-size: 18px; font-weight: 800; color: var(--green-dark); }
.price-was { font-size: 11px; color: #9aa8a0; }
.demand-pill { font-size: 10px; font-weight: 800; background: #e3f2e7; color: var(--green-dark); padding: 4px 8px; border-radius: 6px; }
.strategy-callout { background: #faf8fc; border-left: 3px solid var(--purple); padding: 8px 10px; border-radius: 4px; margin-bottom: 12px; }
.strategy-header { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 800; color: var(--purple); margin-bottom: 3px; }
.strategy-callout p { font-size: 11px; color: #584f69; line-height: 1.4; margin: 0; }
.pickup-scheduled-info { display: flex; gap: 8px; background: #fdf5ea; border: 1px solid #fae1c3; padding: 8px 10px; border-radius: 8px; margin-bottom: 12px; font-size: 11px; color: #875116; }
.pickup-scheduled-info strong { display: block; }
.listing-bottom { margin-top: auto; padding-top: 10px; }
.notice { background: #eef7f1; border: 1px solid #cfead6; border-radius: 10px; padding: 14px 18px; font-size: 12.5px; color: #28543a; line-height: 1.5; margin-top: 20px; }

/* Schedule View */
.schedule-row { display: flex; align-items: center; gap: 16px; padding: 14px 0; border-bottom: 1px solid #edf2ee; }
.schedule-row:last-child { border-bottom: 0; }
.schedule-thumb-wrap { position: relative; width: 64px; height: 64px; flex-shrink: 0; }
.schedule-thumb { width: 64px; height: 64px; border-radius: 10px; object-fit: cover; border: 1px solid var(--line); }
.schedule-type-badge { position: absolute; bottom: -4px; right: -4px; background: white; border: 1px solid var(--line); border-radius: 50%; width: 22px; height: 22px; display: grid; place-items: center; color: var(--green); }
.schedule-info { flex: 1; }
.schedule-title-row { display: flex; align-items: baseline; gap: 12px; margin-bottom: 3px; }
.schedule-title-row strong { font-size: 14px; }
.schedule-price { font-weight: 800; color: var(--green-dark); font-size: 13px; }
.price-tag-sub { font-size: 10px; color: var(--muted); font-weight: normal; }
.muted-inline { font-size: 11.5px; color: var(--muted); display: block; margin-bottom: 4px; }
.pickup-meta { display: flex; gap: 12px; font-size: 11.5px; margin-top: 4px; align-items: center; flex-wrap: wrap; }
.pickup-date-badge { background: #e8f4ec; color: var(--green-dark); font-weight: 700; padding: 2px 8px; border-radius: 5px; }
.pickup-address-text { color: #5d6f64; }
.pending-meta { color: #c47a2c; font-weight: 600; }
.schedule-actions { display: flex; align-items: center; gap: 10px; }
.calendar-note { display: flex; gap: 16px; align-items: center; background: #fdfaf5; border-color: #f5e7d5; }
.calendar-icon { width: 44px; height: 44px; border-radius: 12px; background: #faebd7; color: #b06518; display: grid; place-items: center; flex-shrink: 0; }

/* Donate View */
.donate-feature {
  background: white; border: 1px solid var(--line); border-radius: 16px; overflow: hidden;
  display: grid; grid-template-columns: 0.9fr 1.1fr; margin-bottom: 28px;
}
.donate-feature-img { position: relative; height: 280px; }
.donate-feature-img img { width: 100%; height: 100%; object-fit: cover; }
.donation-img-overlay { position: absolute; bottom: 14px; left: 14px; background: rgba(18, 48, 32, 0.88); backdrop-filter: blur(4px); color: white; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; }
.donate-feature-content { padding: 32px; display: flex; flex-direction: column; justify-content: center; }
.donate-feature-content h2 { font-size: 24px; line-height: 1.25; margin-bottom: 12px; }
.donate-feature-content p { font-size: 13px; line-height: 1.65; color: #516558; margin-bottom: 18px; }
.donate-chips { display: flex; flex-direction: column; gap: 8px; }
.donate-chips span { display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 700; color: var(--green-dark); }
.donate-form-layout { display: grid; grid-template-columns: 1.3fr 0.7fr; gap: 28px; align-items: start; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 14px; }
.form-grid label { display: flex; flex-direction: column; font-size: 12px; font-weight: 700; color: #3b4e43; gap: 6px; }
.span-two { grid-column: span 2; }
.donate-preview-box { background: #f8faf8; border: 1px dashed #cadbd0; border-radius: 12px; padding: 18px; text-align: center; }
.preview-label { font-size: 10px; font-weight: 800; letter-spacing: 1px; color: var(--muted); text-transform: uppercase; display: block; margin-bottom: 12px; }
.donate-preview-img-wrap { position: relative; width: 120px; height: 120px; margin: 0 auto 12px; }
.donate-preview-img { width: 120px; height: 120px; border-radius: 10px; object-fit: cover; border: 1px solid var(--line); }
.donate-preview-icon { position: absolute; bottom: -4px; right: -4px; background: white; border: 1px solid var(--line); border-radius: 50%; width: 24px; height: 24px; display: grid; place-items: center; color: var(--green); }
.donate-preview-box strong { display: block; font-size: 13px; margin-bottom: 4px; }
.donate-preview-box small { font-size: 11px; color: var(--muted); line-height: 1.4; display: block; }

.donations-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 14px; }
.donation-card { border: 1px solid var(--line); background: #fafcfa; border-radius: 12px; padding: 14px; display: flex; gap: 14px; }
.donation-thumb-wrap { position: relative; width: 56px; height: 56px; flex-shrink: 0; }
.donation-thumb { width: 56px; height: 56px; border-radius: 8px; object-fit: cover; border: 1px solid var(--line); }
.donation-type-badge { position: absolute; bottom: -4px; right: -4px; background: white; border: 1px solid var(--line); border-radius: 50%; width: 18px; height: 18px; display: grid; place-items: center; color: var(--green); }
.donation-details { flex: 1; }
.donation-top-line { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
.donation-top-line strong { font-size: 13px; }
.donation-condition { font-size: 11px; color: var(--muted); margin-bottom: 6px; }
.donation-condition span { color: var(--ink); font-weight: 600; }
.beneficiary-box { background: #f0f7f3; border-radius: 6px; padding: 6px 10px; margin-bottom: 6px; }
.beneficiary-box small { font-size: 10px; font-weight: 800; color: var(--green); text-transform: uppercase; display: block; margin-bottom: 2px; }
.beneficiary-box p { font-size: 11px; color: #2c543c; line-height: 1.35; margin: 0; }
.donation-date { font-size: 10px; color: #8e9e94; }

/* Notifications View */
.notification-list { padding: 8px; }
.notification-row {
  width: 100%; border: 0; background: transparent; display: flex; align-items: center; gap: 14px;
  padding: 14px 16px; border-radius: 10px; text-align: left; transition: all 0.15s; border-bottom: 1px solid #f0f5f1;
}
.notification-row:hover { background: #f6faf7; }
.notification-row.unread { background: #f2f9f4; }
.notification-symbol { width: 36px; height: 36px; border-radius: 50%; background: #e3ede6; color: var(--green); display: grid; place-items: center; flex-shrink: 0; }
.notification-copy { flex: 1; }
.notification-copy strong { display: block; font-size: 13px; margin-bottom: 2px; }
.notification-copy span { display: block; font-size: 12px; color: #53675a; line-height: 1.4; }
.notification-copy small { font-size: 10px; color: #889a8f; margin-top: 4px; display: block; }
.unread-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--green); }

/* Verification Page */
.inspection-header-panel { display: flex; gap: 20px; align-items: center; background: #f5faf7; border-color: #d6ecde; }
.inspection-icon-large { width: 56px; height: 56px; border-radius: 14px; background: #d7eedf; color: var(--green-dark); display: grid; place-items: center; flex-shrink: 0; }
.inspection-icon-large svg { width: 28px; height: 28px; }
.verify-item-row { display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid #edf2ee; }
.verify-item-row:last-child { border-bottom: 0; }
.verify-thumb-wrap { position: relative; width: 48px; height: 48px; flex-shrink: 0; }
.verify-item-img { width: 48px; height: 48px; border-radius: 8px; object-fit: cover; border: 1px solid var(--line); }
.verify-type-badge { position: absolute; bottom: -3px; right: -3px; background: white; border: 1px solid var(--line); border-radius: 50%; width: 18px; height: 18px; display: grid; place-items: center; color: var(--green); }
.condition-sub { font-size: 11px; color: #627669; display: block; margin-top: 2px; }
.verify-actions { display: flex; gap: 8px; margin-left: auto; }

/* Workflow */
.workflow { display: flex; justify-content: space-between; position: relative; margin: 28px 0; }
.workflow-step { flex: 1; text-align: center; position: relative; }
.step-line { position: absolute; top: 16px; left: 32px; right: -8px; height: 2px; background: #e4ebe5; }
.workflow-step:last-child .step-line { display: none; }
.step-circle {
  position: relative; width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center;
  background: #f0f4f1; border: 1px solid #dce4de; color: #829286; font-size: 11px; font-weight: 800;
  margin: 0 auto 10px; z-index: 1;
}
.workflow-step.done .step-circle { background: var(--green); border-color: var(--green); color: white; }
.step-text strong { font-size: 11px; display: block; line-height: 1.4; }
.step-text small { font-size: 9.5px; line-height: 1.4; color: #8e9e93; display: block; margin-top: 4px; }
.workflow.compact { margin-top: 16px; margin-bottom: 16px; }
.workflow.compact .step-text strong { font-size: 10px; }

/* Profile Page */
.profile-layout { display: grid; grid-template-columns: 0.7fr 1.3fr; gap: 20px; }
.profile-card { text-align: center; padding: 32px; }
.profile-avatar-large { width: 80px; height: 80px; border-radius: 50%; display: grid; place-items: center; margin: 0 auto 14px; background: #d7eedb; color: var(--green-dark); font-size: 32px; font-weight: 800; }
.phone-line { font-size: 12px; color: #738479; margin: 4px 0 14px; }
.profile-stats { display: flex; border-top: 1px solid var(--line); margin-top: 24px; padding-top: 18px; }
.profile-stats > div { flex: 1; }
.profile-stats > div + div { border-left: 1px solid var(--line); }
.profile-stats strong { display: block; font-size: 18px; color: var(--green-dark); }
.profile-stats small { font-size: 10px; color: var(--muted); }
.profile-edit form { margin-top: 18px; }
.profile-edit label { max-width: 480px; margin-bottom: 14px; display: flex; flex-direction: column; font-size: 12px; font-weight: 700; color: #3b4e43; gap: 6px; }

/* Footer */
.footer {
  border-top: 1px solid var(--line); padding: 18px 30px; background: white; color: #8c9c91;
  font-size: 11px; display: flex; justify-content: space-between; align-items: center; gap: 14px;
}
.footer-brand { display: flex; align-items: center; gap: 8px; }
.footer-logo { width: 22px; height: 22px; object-fit: contain; }
.footer-links { display: flex; gap: 16px; }

/* Modals */
.modal-backdrop {
  position: fixed; inset: 0; background: rgba(14, 38, 26, 0.75); backdrop-filter: blur(4px);
  z-index: 50; display: flex; align-items: center; justify-content: center; padding: 20px;
}
.modal {
  position: relative; background: white; width: min(100%, 540px); max-height: calc(100vh - 40px);
  overflow-y: auto; border-radius: 16px; padding: 30px; box-shadow: 0 24px 80px rgba(0,0,0,0.3);
}
.modal h2 { font-size: 22px; margin-bottom: 6px; }
.modal > p { margin-bottom: 20px; }
.modal-close {
  position: absolute; right: 18px; top: 16px; border: 0; background: #f0f4f1; border-radius: 50%;
  width: 32px; height: 32px; font-size: 20px; color: #5f7065;
}
.modal-form { display: flex; flex-direction: column; gap: 14px; }
.modal-form label { display: flex; flex-direction: column; font-size: 12px; font-weight: 700; color: #37483f; gap: 6px; }
.modal-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 22px; }
.rating-row { display: flex; gap: 8px; margin: 4px 0 18px; }
.rating-star { font-size: 28px; border: 0; background: transparent; color: #d6ded7; padding: 2px; }
.rating-star.chosen { color: #e8a838; }

/* Empty State */
.empty-state { text-align: center; padding: 40px 14px; }
.empty-icon-wrap {
  width: 48px; height: 48px; border-radius: 50%; background: #eaf5ee; color: var(--green);
  display: grid; place-items: center; margin: 0 auto 12px;
}
.empty-icon-wrap svg { width: 24px; height: 24px; }
.empty-state h3 { margin: 8px 0 4px; }
.empty-state p { font-size: 12px; color: var(--muted); }

/* Toast */
.toast {
  position: fixed; z-index: 60; bottom: 26px; left: 50%; transform: translateX(-50%);
  background: #143e2a; color: white; padding: 13px 22px; border-radius: 10px;
  box-shadow: 0 10px 35px rgba(0,0,0,0.3); font-size: 13px; font-weight: 600;
  display: flex; gap: 10px; align-items: center; max-width: 90vw; animation: toastUp 0.25s ease;
}
.toast span { background: #86d299; color: #123e25; border-radius: 50%; width: 20px; height: 20px; display: grid; place-items: center; font-weight: 800; font-size: 11px; }

@keyframes toastUp {
  from { transform: translate(-50%, 15px); opacity: 0; }
  to { transform: translate(-50%, 0); opacity: 1; }
}

/* Responsive Media Queries */
@media (max-width: 1140px) {
  .item-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .bottom-grid { grid-template-columns: 1fr; }
  .hero-art { width: 35%; }
  .donations-grid { grid-template-columns: 1fr; }
  .donate-form-layout { grid-template-columns: 1fr; }
}

@media (max-width: 780px) {
  .auth-shell { grid-template-columns: 1fr; }
  .auth-visual { display: none; }
  .auth-panel { padding: 30px 20px; min-height: 100vh; }
  .mobile-brand-row { display: flex; }
  .mobile-brand { display: flex; align-items: center; gap: 10px; font-size: 20px; font-weight: 800; }
  .app-shell { display: block; }
  .sidebar { width: 100% !important; min-height: 0; height: auto; padding: 14px; border-right: 0; border-bottom: 1px solid var(--line); }
  .sidebar .side-group, .sidebar-bottom, .collapse-toggle-btn { display: none; }
  .brand-header { padding-bottom: 12px; margin-bottom: 10px; }
  .sidebar-nav-container { display: flex; overflow-x: auto; gap: 6px; }
  .nav-item { width: auto; flex-shrink: 0; padding: 8px 12px; margin: 0; }
  .topbar { padding: 0 16px; height: 60px; }
  .page-content { padding: 20px 15px; }
  .welcome-row, .page-title-row { flex-direction: column; align-items: flex-start; gap: 14px; }
  .hero-banner { flex-direction: column; }
  .hero-art { width: 100%; height: 200px; }
  .hero-text { padding: 24px 20px; }
  .item-cards { grid-template-columns: 1fr; }
  .donate-feature { grid-template-columns: 1fr; padding: 16px; }
  .donate-feature-img { height: 200px; }
  .form-grid { grid-template-columns: 1fr; }
  .span-two { grid-column: span 1; }
  .profile-layout { grid-template-columns: 1fr; }
  .footer { flex-direction: column; text-align: center; }
}
`;

export default App;
