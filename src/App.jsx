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
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconCollapse = ({ collapsed }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: collapsed ? "rotate(180deg)" : "none", transition: "transform 0.25s ease" }}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <path d="m14 9-3 3 3 3" />
  </svg>
);

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconClock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconRupee = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12" />
    <path d="M6 8h12" />
    <path d="M6 13l8.5 8" />
    <path d="M6 13h3a4 4 0 0 0 0-8" />
  </svg>
);

const IconStrategy = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
  </svg>
);

const IconHeart = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// Equipment Category SVG Icons
const IconWheelchair = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="4" r="2" />
    <circle cx="10" cy="17" r="5" />
    <path d="M10 12h4l3 5" />
    <path d="M14 12v-5" />
    <path d="M17 17l2 2" />
  </svg>
);

const IconWalker = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4h12" />
    <path d="M7 4v16" />
    <path d="M17 4v16" />
    <path d="M7 11h10" />
    <circle cx="7" cy="20" r="1.5" />
    <circle cx="17" cy="20" r="1.5" />
  </svg>
);

const IconCrutches = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h5" />
    <path d="M6 9h5" />
    <path d="M7 3v6l1.5 12" />
    <path d="M10 3v6l-1.5 12" />
    <path d="M15 3h5" />
    <path d="M15 9h5" />
    <path d="M16 3v6l1.5 12" />
    <path d="M19 3v6l-1.5 12" />
  </svg>
);

const IconCane = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4a3 3 0 0 0-6 0v16" />
    <path d="M5 20h6" />
  </svg>
);

// Dynamic helper returning the relevant equipment icon
const getEquipmentIcon = (nameOrCategory) => {
  const str = (nameOrCategory || "").toLowerCase();
  if (str.includes("wheelchair")) return <IconWheelchair />;
  if (str.includes("walker") || str.includes("rollator") || str.includes("scooter")) return <IconWalker />;
  if (str.includes("crutch") || str.includes("crutches")) return <IconCrutches />;
  return <IconCane />;
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

const steps = [
  "Upload mobility aid details",
  "Condition & resale valuation",
  "Schedule doorstep pickup",
  "Receive fair payout",
  "Community feedback & impact",
];

const money = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [active, setActive] = useState("Dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [user, setUser] = useState({ name: "Kushal", email: "kushal@example.com", phone: "+91 98765 43210" });
  const [items, setItems] = useState(initialItems);
  const [donations, setDonations] = useState(initialDonations);
  const [itemFilter, setItemFilter] = useState("All");

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
    notify(authMode === "login" ? `Welcome back, ${name}!` : `Account created! Welcome, ${name}!`);
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
    const chosenImage = donationImageMap[donateForm.item] || "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80";
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
          <div className="auth-brand">
            <img src="/scrapcycle-logo.png" alt="ScrapCycle Logo" className="brand-logo-img" />
            <div className="brand-text">
              <span>ScrapCycle</span>
              <small>REUSE. RESELL. REPEAT.</small>
            </div>
          </div>
          <div className="auth-copy">
            <span className="eyebrow">ASSISTIVE MOBILITY AID CIRCULAR RESALE</span>
            <h1>Turn your unused mobility aids into <em>new possibilities.</em></h1>
            <p>
              Connect directly with verified collectors for doorstep pickups. Resell or donate wheelchairs, walkers, crutches, and walking canes to empower people with disabilities and elderly citizens in need.
            </p>
            <div className="auth-perks">
              <span><IconCheck /> Free doorstep collection for wheelchairs, walkers & crutches</span>
              <span><IconCheck /> Resale pricing based on fair market & refurbishment values</span>
              <span><IconCheck /> Free donation delivery to underprivileged beneficiaries</span>
            </div>
          </div>
          <div className="visual-caption">
            <span className="pulse-dot" /> Community-driven circular mobility network across India
          </div>
        </div>

        <div className="auth-panel">
          <div className="mobile-brand">
            <img src="/scrapcycle-logo.png" alt="ScrapCycle Logo" className="brand-logo-img" />
            <span>ScrapCycle</span>
          </div>
          <div className="auth-form-wrap">
            <div className="auth-tabs">
              <button
                type="button"
                className={`auth-tab ${authMode === "login" ? "active" : ""}`}
                onClick={() => setAuthMode("login")}
              >
                Sign in
              </button>
              <button
                type="button"
                className={`auth-tab ${authMode === "signup" ? "active" : ""}`}
                onClick={() => setAuthMode("signup")}
              >
                Create account
              </button>
            </div>

            <span className="eyebrow">
              {authMode === "login" ? "WELCOME BACK TO SCRAPCYCLE" : "JOIN THE REUSE MOVEMENT"}
            </span>
            <h2>{authMode === "login" ? "Sign in to your account" : "Create your account"}</h2>
            <p className="muted">
              {authMode === "login"
                ? "Access your listed wheelchairs, pickup schedules, and payouts."
                : "Start listing reusable mobility aids, booking pickups, and donating today."}
            </p>

            <form onSubmit={handleAuthSubmit}>
              {authMode === "signup" && (
                <label>
                  Full name
                  <input name="fullName" placeholder="Enter your full name" required />
                </label>
              )}
              <label>
                Email address
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
                  Phone number
                  <input name="phone" type="tel" placeholder="+91 98765 43210" required />
                </label>
              )}
              <label>
                Password
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  defaultValue={authMode === "login" ? "password123" : ""}
                  minLength="6"
                  required
                />
              </label>
              <button className="btn primary full" type="submit">
                {authMode === "login" ? "Sign in to dashboard" : "Create my account"} <span>→</span>
              </button>
            </form>

            <div className="auth-divider"><span>or test prototype</span></div>
            <button className="btn outline full demo-btn" type="button" onClick={handleDemoLogin}>
              ⚡ One-Click Demo Sign In (Kushal)
            </button>

            <p className="terms">
              By continuing, you agree to our{" "}
              <a href="#terms" onClick={(e) => { e.preventDefault(); notify("Terms of Service: Assistive aid inspection & doorstep collection protocol."); }}>
                Terms
              </a>{" "}
              and{" "}
              <a href="#privacy" onClick={(e) => { e.preventDefault(); notify("Privacy: Location and phone details are only shared with assigned collectors."); }}>
                Privacy Policy
              </a>.
            </p>

            <p className="signin-note">
              {authMode === "login" ? (
                <>
                  Don't have an account yet?{" "}
                  <button type="button" className="text-btn" onClick={() => setAuthMode("signup")}>
                    Create account here
                  </button>
                </>
              ) : (
                <>
                  Already registered?{" "}
                  <button type="button" className="text-btn" onClick={() => setAuthMode("login")}>
                    Sign in here
                  </button>
                </>
              )}
            </p>
          </div>
          <div className="auth-footer">♿ ScrapCycle • Empowering mobility and assistive aid independence</div>
        </div>

        {toast && <div className="toast"><span>✓</span>{toast}</div>}
        <style>{styles}</style>
      </div>
    );
  }

  const nav = [
    {
      group: "MAIN WORKSPACE",
      items: [
        { name: "Dashboard", icon: <IconDashboard /> },
        { name: "My Items", icon: <IconItems />, count: items.length },
        { name: "Schedule", icon: <IconSchedule />, count: items.filter((i) => i.status === "Pickup scheduled").length },
        { name: "Donate", icon: <IconDonate />, count: donations.length },
        { name: "Notifications", icon: <IconNotifications />, count: notifications.filter((n) => !n.read).length }
      ]
    },
    {
      group: "ACCOUNT & TRUST",
      items: [
        { name: "Verification", icon: <IconVerification /> },
        { name: "Profile", icon: <IconProfile /> }
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
                <small>REUSE. RESELL. REPEAT.</small>
              </div>
            )}
          </button>
          <button
            className="collapse-toggle-btn"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            title={sidebarCollapsed ? "Expand dashboard sidebar" : "Collapse dashboard sidebar"}
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
                  title={sidebarCollapsed ? item.name : undefined}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {!sidebarCollapsed && <span className="nav-label">{item.name}</span>}
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
              <strong>Doorstep Pickup Partner</strong>
              <p>Specialized collectors handle wheelchairs and walkers with padded transport.</p>
              <button onClick={() => notify("Support helpline: +91 800-SCRAP-CYCLE (9 AM - 7 PM)")}>
                Vendor Helpline ↗
              </button>
            </div>
          )}

          <button
            className="profile-mini"
            onClick={() => setActive("Profile")}
            title={sidebarCollapsed ? user.name : "View Profile"}
          >
            <span className="avatar">{(user.name || "K").slice(0, 1).toUpperCase()}</span>
            {!sidebarCollapsed && (
              <div className="profile-text">
                <strong>{user.name || "Kushal"}</strong>
                <small>Mobility Contributor</small>
              </div>
            )}
          </button>
          <button className="logout-btn" onClick={() => setSignedIn(false)} title="Log out">
            <span>↪</span> {!sidebarCollapsed && <span>Log out</span>}
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
              Workspace <span>/</span> <strong>{active}</strong>
            </div>
          </div>

          <div className="top-actions">
            <button className="btn outline small-btn quick-list-btn" onClick={() => setShowUpload(true)}>
              ＋ List Mobility Aid
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
                <small>Individual Member</small>
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
                  <div className="eyebrow">CIRCULAR MOBILITY AID ECOSYSTEM</div>
                  <h1>Good to see you, {user.name || "Kushal"} <span className="wave">✦</span></h1>
                  <p className="muted">
                    Track your reusable wheelchairs, walkers, crutches, resale valuations, and community donations.
                  </p>
                </div>
                <div className="welcome-actions">
                  <button className="btn primary" onClick={() => setShowUpload(true)}>
                    ＋ List an item
                  </button>
                  <button className="btn outline" onClick={() => setActive("Donate")}>
                    <IconHeart /> Donate mobility aid
                  </button>
                </div>
              </div>

              {/* HERO BANNER - Logo Image removed from sticker as requested */}
              <section className="hero-banner">
                <div className="hero-text">
                  <span className="hero-tag">CIRCULAR IMPACT & MOBILITY AID RESALE</span>
                  <h2>
                    One person's scrap.<br />
                    <em>Another's treasure.</em>
                  </h2>
                  <p>
                    Turn unused or damaged wheelchairs, walkers, and crutches into fair resale cash through doorstep collection—or donate directly to restore someone's independence.
                  </p>
                  <div className="hero-buttons">
                    <button className="btn white" onClick={() => setShowUpload(true)}>
                      Resell Mobility Aid <span>→</span>
                    </button>
                    <button className="btn ghost-light" onClick={() => setActive("Donate")}>
                      Explore Donations ({donations.length})
                    </button>
                  </div>
                </div>
                <div className="hero-art">
                  <img
                    src="/scrapped-wheelchair.jpg"
                    alt="Scrap vendor collecting a wheelchair from a household"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85";
                    }}
                  />
                  <div className="art-sticker">
                    <span className="art-sticker-icon">✓</span>
                    <div>
                      <strong>Verified Pickup</strong>
                      <small>Doorstep Mobility Collector</small>
                    </div>
                  </div>
                </div>
              </section>

              {/* STATS TILES */}
              <div className="stats-grid">
                <Stat
                  icon={<IconWheelchair />}
                  label="Mobility aids in inventory"
                  value={items.length}
                  note={`${verifiedCount} ready for pickup`}
                  color="green"
                />
                <Stat
                  icon={<IconClock />}
                  label="Awaiting action"
                  value={pendingCount}
                  note="Verification & scheduling"
                  color="orange"
                />
                <Stat
                  icon={<IconRupee />}
                  label="Total resale value realized"
                  value={money(totalEarned)}
                  note="Paid via instant disbursement"
                  color="purple"
                />
                <Stat
                  icon={<IconDonate />}
                  label="Mobility donations"
                  value={donations.length}
                  note="Wheelchairs, walkers, crutches"
                  color="pink"
                />
              </div>

              {/* RECENT ITEMS TABLE with Relevant Equipment Images & Category Icon Badges */}
              <div className="section-heading">
                <div>
                  <h3>Recent Mobility Items & Resale Valuations</h3>
                  <p className="muted">Latest wheelchairs, walkers, and crutches with condition notes and marketing pricing strategies.</p>
                </div>
                <button className="link-btn" onClick={() => setActive("My Items")}>
                  View all items ({items.length}) →
                </button>
              </div>

              <div className="items-table-wrap">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th>EQUIPMENT & CATEGORY</th>
                      <th>CONDITION & WEAR</th>
                      <th>MARKET VS RESALE PRICE</th>
                      <th>MARKETING PRICING STRATEGY</th>
                      <th>STATUS</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.slice(0, 6).map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="item-cell">
                            <div className="item-thumb-wrap">
                              <img src={item.image} alt={item.name} className="item-thumb" />
                              <span className="item-type-icon">{getEquipmentIcon(item.name || item.category)}</span>
                            </div>
                            <div>
                              <strong>{item.name}</strong>
                              <small>{item.category} • Listed {item.date}</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="condition-pill">{item.condition}</span>
                        </td>
                        <td>
                          <div className="price-cell">
                            <span className="price-current">{money(item.price)}</span>
                            {item.originalPrice && (
                              <del className="price-original">{money(item.originalPrice)}</del>
                            )}
                            {item.savingsPercent && (
                              <span className="savings-tag">{item.savingsPercent}% OFF</span>
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="strategy-tag" title={item.resaleStrategy}>
                            <IconStrategy />
                            <span>{item.demandTag || "Fair Resale"}</span>
                          </div>
                        </td>
                        <td>
                          <Status status={item.status} />
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
                              ? "Verify"
                              : item.status === "Verified"
                              ? "Schedule"
                              : item.status === "Pickup scheduled"
                              ? "Mark paid"
                              : "Details"}
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
                      <h3>Mobility Lifecycle Pipeline</h3>
                      <p className="muted">Transparent verification, fair resale valuation, and collector dispatch.</p>
                    </div>
                    <button className="link-btn" onClick={() => setActive("Verification")}>
                      View checklist →
                    </button>
                  </div>
                  <Workflow compact />
                </div>

                <div className="donate-card">
                  <div className="donate-card-badge">
                    <span className="mission-heart-icon"><IconHeart /></span>
                    <span>Mobility Aid Mission</span>
                  </div>
                  <h3>Restore Dignity & Independence</h3>
                  <p>
                    An unused wheelchair, walker, or pair of crutches in your storeroom can be refurbished and given free to a person with disabilities in need.
                  </p>
                  <div className="donate-card-impact">
                    <div><strong>{donations.length}</strong><small>Aids Donated</small></div>
                    <div><strong>100%</strong><small>Free Doorstep Handoff</small></div>
                  </div>
                  <button className="btn primary" onClick={() => setActive("Donate")}>
                    Donate a wheelchair or aid →
                  </button>
                </div>
              </div>
            </>
          )}

          {/* MY ITEMS VIEW - 100% Mobility Equipments with dedicated images and category filters */}
          {active === "My Items" && (
            <>
              <PageTitle
                title="Mobility Equipment Catalog"
                subtitle="Manage your listed wheelchairs, walkers, crutches, and walking aids with condition ratings and commercial resale strategies."
                action={
                  <button className="btn primary" onClick={() => setShowUpload(true)}>
                    ＋ List mobility equipment
                  </button>
                }
              />

              <div className="filter-row">
                {["All", "Wheelchairs", "Walkers", "Crutches", "Canes", "Scheduled", "Completed"].map((filter) => (
                  <button
                    key={filter}
                    className={`filter-pill ${itemFilter === filter ? "active" : ""}`}
                    onClick={() => setItemFilter(filter)}
                  >
                    <span className="filter-pill-icon">{getEquipmentIcon(filter)}</span>
                    {filter === "All"
                      ? "All Equipments"
                      : filter === "Wheelchairs"
                      ? "Wheelchairs"
                      : filter === "Walkers"
                      ? "Walkers & Rollators"
                      : filter === "Crutches"
                      ? "Crutches"
                      : filter === "Canes"
                      ? "Canes & Sticks"
                      : filter}
                    <b>
                      {filter === "All"
                        ? items.length
                        : filter === "Wheelchairs"
                        ? items.filter((i) => i.category === "Wheelchairs").length
                        : filter === "Walkers"
                        ? items.filter((i) => i.category === "Walkers").length
                        : filter === "Crutches"
                        ? items.filter((i) => i.category === "Crutches").length
                        : filter === "Canes"
                        ? items.filter((i) => i.category.includes("Canes")).length
                        : filter === "Scheduled"
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
                      <img src={item.image} alt={item.name} />
                      <div className="card-floating-badge">
                        <Status status={item.status} />
                      </div>
                      <span className="card-type-chip">
                        {getEquipmentIcon(item.name || item.category)}
                        <span>{item.category}</span>
                      </span>
                      {item.savingsPercent && (
                        <span className="card-savings-flag">{item.savingsPercent}% SAVINGS</span>
                      )}
                    </div>
                    <div className="listing-body">
                      <div className="card-category-row">
                        <span className="category-tag">{item.category}</span>
                        <span className="date-text">Listed {item.date}</span>
                      </div>

                      <h3>{item.name}</h3>
                      <p className="condition-text">
                        <strong>Condition:</strong> {item.condition}
                      </p>

                      <div className="pricing-box">
                        <div className="price-col">
                          <small>Resale Market Valuation</small>
                          <div className="price-wrap">
                            <span className="price-amount">{money(item.price)}</span>
                            {item.originalPrice && (
                              <del className="price-was">{money(item.originalPrice)}</del>
                            )}
                          </div>
                        </div>
                        <span className="demand-pill">{item.demandTag || "Verified"}</span>
                      </div>

                      {item.resaleStrategy && (
                        <div className="strategy-callout">
                          <div className="strategy-header">
                            <IconStrategy />
                            <span>Pricing & Resale Strategy:</span>
                          </div>
                          <p>{item.resaleStrategy}</p>
                        </div>
                      )}

                      {item.pickupDate && (
                        <div className="pickup-scheduled-info">
                          <IconTruck />
                          <div>
                            <strong>Pickup: {item.pickupDate} at {item.pickupTime}</strong>
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
                            ? "Simulate Condition Verification"
                            : item.status === "Verified"
                            ? "Book Doorstep Pickup"
                            : item.status === "Pickup scheduled"
                            ? "Confirm Collector Payout (demo)"
                            : "View Settlement Receipt"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="notice">
                💡 <strong>Commercial Strategy Insight:</strong> All prices for pre-owned mobility aids (wheelchairs, walkers, crutches) use charm pricing (₹549, ₹699, ₹899, ₹1,850, ₹2,499, ₹3,850, ₹4,999) anchored against manufacturer retail MRP. Refurbishing deductions are pre-factored for quick turnaround to local hospitals, physical therapy centers, and families.
              </div>
            </>
          )}

          {/* SCHEDULE PICKUP VIEW with Relevant Equipment Images & Badges */}
          {active === "Schedule" && (
            <>
              <PageTitle
                title="Doorstep Pickup Schedule"
                subtitle="Coordinate verified mobility collectors to pick up wheelchairs, walkers, and crutches from your doorstep."
              />

              <div className="panel">
                <div className="panel-head">
                  <div>
                    <h3>Active & Scheduled Mobility Pickups</h3>
                    <p className="muted">Verified items booked for doorstep collection and direct payout.</p>
                  </div>
                  <span className="counter-pill">
                    {items.filter((i) => ["Verified", "Pickup scheduled"].includes(i.status)).length} Active
                  </span>
                </div>

                {items.filter((i) => ["Verified", "Pickup scheduled"].includes(i.status)).length === 0 ? (
                  <Empty
                    title="No mobility items ready for pickup"
                    text="List a wheelchair, walker, or crutches and complete verification to book collection."
                  />
                ) : (
                  items
                    .filter((i) => ["Verified", "Pickup scheduled"].includes(i.status))
                    .map((item) => (
                      <div className="schedule-row" key={item.id}>
                        <div className="schedule-thumb-wrap">
                          <img src={item.image} alt={item.name} className="schedule-thumb" />
                          <span className="schedule-type-badge">{getEquipmentIcon(item.name || item.category)}</span>
                        </div>
                        <div className="schedule-info">
                          <div className="schedule-title-row">
                            <strong>{item.name}</strong>
                            <span className="schedule-price">{money(item.price)}</span>
                          </div>
                          <span className="muted-inline">
                            {item.category} • Condition: {item.condition}
                          </span>
                          {item.pickupDate ? (
                            <div className="pickup-meta">
                              <span className="pickup-date-badge">
                                📅 {item.pickupDate} at {item.pickupTime}
                              </span>
                              <span className="pickup-address-text">📍 {item.address}</span>
                            </div>
                          ) : (
                            <div className="pickup-meta pending-meta">
                              <span>⚠️ Verified and waiting for you to pick a date & time slot.</span>
                            </div>
                          )}
                        </div>
                        <div className="schedule-actions">
                          <Status status={item.status} />
                          {item.status === "Verified" ? (
                            <button
                              className="btn primary small-btn"
                              onClick={() => setShowSchedule(item.id)}
                            >
                              Schedule Pickup
                            </button>
                          ) : (
                            <button
                              className="btn outline small-btn"
                              onClick={() => receivePayment(item.id)}
                            >
                              Confirm Handover
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
                  <h3>Collector Logistics & Handling Standards</h3>
                  <p className="muted">
                    Collectors arrive with specialized protective blankets and straps to ensure wheelchairs, electronic controllers, and folding mechanisms are handled with care. Cash or UPI payout is confirmed right at your door.
                  </p>
                </div>
              </div>
            </>
          )}

          {/* DONATE VIEW with Smiling Scrap Vendor Helping Poor People Image & Equipment Images */}
          {active === "Donate" && (
            <>
              <PageTitle
                title="Give Mobility Aids a Second Life"
                subtitle="Donate wheelchairs, crutches, and walkers to restore freedom and mobility for underprivileged individuals."
              />

              {/* DONATION FEATURE BANNER with Smiling Vendor Helping People Image */}
              <div className="donate-feature">
                <div className="donate-feature-img">
                  <img
                    src="/scrap-vendor-donation.jpg"
                    alt="Happy smiling scrap vendor helping poor people with refurbished wheelchair"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85";
                    }}
                  />
                  <div className="donation-img-overlay">
                    <span>❤️ Community Mobility Outreach</span>
                  </div>
                </div>
                <div className="donate-feature-content">
                  <span className="eyebrow">HEARTFELT COMMUNITY SUPPORT</span>
                  <h2>Every donated aid transforms a life.</h2>
                  <p>
                    Millions of elderly individuals and persons with disabilities across low-income communities lack access to basic mobility equipment. Our network of smiling, community-first collectors picks up, cleans, repairs, and delivers wheelchairs and crutches directly to people who need them most—at zero cost to them.
                  </p>
                  <div className="donate-chips">
                    <span><IconCheck /> Free Doorstep Collection</span>
                    <span><IconCheck /> Certified Repair & Sanitization</span>
                    <span><IconCheck /> Verified Recipient Delivery</span>
                  </div>
                </div>
              </div>

              {/* SUBMIT DONATION FORM with Live Equipment Image Preview */}
              <div className="panel donate-form-panel">
                <div className="donate-form-layout">
                  <div className="donate-form-fields">
                    <h3>Submit a Donation Request</h3>
                    <p className="muted">
                      Let us know what mobility aid or equipment you would like to give away.
                    </p>
                    <form className="form-grid" onSubmit={donateItem}>
                      <label>
                        Equipment to Donate
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
                        Item Condition
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
                        Special Notes or Story
                        <textarea
                          value={donateForm.note}
                          onChange={(e) => setDonateForm({ ...donateForm, note: e.target.value })}
                          placeholder="e.g. Bought for family member during recovery; now unused. Sanitized and in working order..."
                          rows="3"
                        />
                      </label>
                      <div className="span-two">
                        <button className="btn primary" type="submit">
                          Submit Donation Request →
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="donate-preview-box">
                    <span className="preview-label">Selected Equipment Preview</span>
                    <div className="donate-preview-img-wrap">
                      <img
                        src={donationImageMap[donateForm.item] || "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80"}
                        alt={donateForm.item}
                        className="donate-preview-img"
                      />
                      <span className="donate-preview-icon">{getEquipmentIcon(donateForm.item)}</span>
                    </div>
                    <strong>{donateForm.item}</strong>
                    <small>100% Free collection and delivery to verified recipients</small>
                  </div>
                </div>
              </div>

              {/* DONATION IMPACT LIST with Equipment Images & Icon Badges */}
              {donations.length > 0 && (
                <div className="panel">
                  <div className="panel-head">
                    <div>
                      <h3>Community Donation Impact Records</h3>
                      <p className="muted">Restored equipment delivered to underprivileged beneficiaries, clinics, and elder shelters.</p>
                    </div>
                    <span className="counter-pill">{donations.length} Handoffs</span>
                  </div>

                  <div className="donations-grid">
                    {donations.map((d) => (
                      <div className="donation-card" key={d.id}>
                        <div className="donation-thumb-wrap">
                          <img src={d.image} alt={d.item} className="donation-thumb" />
                          <span className="donation-type-badge">{getEquipmentIcon(d.item || d.category)}</span>
                        </div>
                        <div className="donation-details">
                          <div className="donation-top-line">
                            <strong>{d.item}</strong>
                            <Status status={d.status} />
                          </div>
                          <p className="donation-condition">
                            Condition: <span>{d.condition}</span> • Donor: <strong>{d.donor}</strong>
                          </p>
                          <div className="beneficiary-box">
                            <small>Beneficiary Impact:</small>
                            <p>{d.impact || d.beneficiary}</p>
                          </div>
                          <span className="donation-date">Logged on {d.date}</span>
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
                title="Notifications"
                subtitle="Stay updated on equipment inspections, collector arrivals, and payment disbursements."
                action={
                  <button
                    className="btn outline"
                    onClick={() => setNotifications((old) => old.map((n) => ({ ...n, read: true })))}
                  >
                    Mark all as read
                  </button>
                }
              />

              <div className="panel notification-list">
                {notifications.length === 0 ? (
                  <Empty title="You're all caught up" text="New updates and collector alerts will appear here." />
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
                          <IconDonate />
                        ) : (
                          <IconWheelchair />
                        )}
                      </span>
                      <span className="notification-copy">
                        <strong>{n.title}</strong>
                        <span>{n.text}</span>
                        <small>
                          {n.time} {!n.read && <b>• NEW</b>}
                        </small>
                      </span>
                      <span className="notification-arrow">›</span>
                    </button>
                  ))
                )}
              </div>
            </>
          )}

          {/* VERIFICATION PIPELINE VIEW */}
          {active === "Verification" && (
            <>
              <PageTitle
                title="Condition Audit & Verification Status"
                subtitle="Follow the step-by-step journey from photo upload to fair resale valuation and collector dispatch."
              />

              <div className="verification-intro">
                <div className="verify-icon"><IconVerification /></div>
                <div>
                  <h3>Mobility Equipment Safety Inspection</h3>
                  <p className="muted">
                    Every listed wheelchair, walker, and crutch is audited for structural safety, braking response, tire tread, and hygiene standards before being routed for resale or donation.
                  </p>
                </div>
              </div>

              <Workflow />

              <div className="panel">
                <h3>Equipment Verification Checklist</h3>
                {items.map((item) => (
                  <div className="verify-item-row" key={item.id}>
                    <div className="verify-thumb-wrap">
                      <img src={item.image} alt={item.name} className="verify-item-img" />
                      <span className="verify-type-badge">{getEquipmentIcon(item.name || item.category)}</span>
                    </div>
                    <div className="schedule-info">
                      <strong>{item.name}</strong>
                      <small>
                        {item.category} • Valued at {money(item.price)} • Submitted {item.date}
                      </small>
                      <span className="condition-sub">{item.condition}</span>
                    </div>
                    <Status status={item.status} />
                    <div className="verify-actions">
                      {item.status === "Pending verification" && (
                        <button className="btn outline small-btn" onClick={() => verifyItem(item.id)}>
                          Approve Valuation (demo)
                        </button>
                      )}
                      {item.status === "Verified" && (
                        <button className="btn primary small-btn" onClick={() => setShowSchedule(item.id)}>
                          Schedule Pickup
                        </button>
                      )}
                      {item.status === "Pickup scheduled" && (
                        <button className="btn outline small-btn" onClick={() => receivePayment(item.id)}>
                          Disburse Payout
                        </button>
                      )}
                      {item.status === "Payment received" && (
                        <button className="btn outline small-btn" onClick={() => setShowFeedback(true)}>
                          Give Feedback
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
                title="Your Contributor Profile"
                subtitle="Manage your contact details, active listings, and community impact."
              />

              <div className="profile-layout">
                <div className="panel profile-card">
                  <div className="profile-avatar-large">
                    {(user.name || "K").slice(0, 1).toUpperCase()}
                  </div>
                  <h3>{user.name || "Kushal"}</h3>
                  <p className="muted">{user.email || "kushal@example.com"}</p>
                  <p className="phone-line">{user.phone || "+91 98765 43210"}</p>
                  <span className="status-badge status-verified">● Active Mobility Contributor</span>

                  <div className="profile-stats">
                    <div>
                      <strong>{items.length}</strong>
                      <small>Listed Aids</small>
                    </div>
                    <div>
                      <strong>{donations.length}</strong>
                      <small>Donations</small>
                    </div>
                    <div>
                      <strong>{money(totalEarned)}</strong>
                      <small>Earned</small>
                    </div>
                  </div>
                </div>

                <div className="panel profile-edit">
                  <h3>Edit Contact Information</h3>
                  <p className="muted">
                    Keep your phone number and address accurate so local mobility collectors can easily coordinate pickups.
                  </p>
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
                      Full name
                      <input name="name" defaultValue={user.name} required />
                    </label>
                    <label>
                      Email address
                      <input name="email" type="email" defaultValue={user.email} required />
                    </label>
                    <label>
                      Primary phone number (for collector coordination)
                      <input name="phone" defaultValue={user.phone} required />
                    </label>
                    <button className="btn primary" type="submit">
                      Save Profile Changes
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
            <span>© 2026 ScrapCycle • Reuse. Resell. Repeat.</span>
          </div>
          <div className="footer-links">
            <span>♿ Assistive Aid Mobility Mission</span>
            <span>♻ Responsible Equipment Refurbishing</span>
          </div>
        </footer>
      </main>

      {/* UPLOAD ITEM MODAL */}
      {showUpload && (
        <Modal
          title="List Mobility Aid Equipment"
          subtitle="Submit photos and condition details for a fair resale valuation audit."
          onClose={() => setShowUpload(false)}
        >
          <form className="modal-form" onSubmit={addItem}>
            <label>
              Equipment Name
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Standard Folding Wheelchair or 4-Wheel Rollator Walker"
                required
              />
            </label>

            <div className="form-grid">
              <label>
                Category
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                >
                  <option>Wheelchairs</option>
                  <option>Walkers</option>
                  <option>Crutches</option>
                  <option>Canes & Sticks</option>
                </select>
              </label>

              <label>
                Condition
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
                Original Retail MRP (₹)
                <input
                  type="number"
                  min="0"
                  value={form.originalPrice}
                  onChange={(e) => setForm({ ...form, originalPrice: e.target.value })}
                  placeholder="e.g. 7800"
                />
              </label>
              <label>
                Expected Resale Payout (₹)
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
              Image URL (optional)
              <input
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                placeholder="https://images.unsplash.com/..."
              />
            </label>

            <label>
              Condition Notes & Wear Details
              <textarea
                rows="3"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Describe condition, brake status, tire tread, or parts needing repair..."
              />
            </label>

            <div className="modal-actions">
              <button type="button" className="btn outline" onClick={() => setShowUpload(false)}>
                Cancel
              </button>
              <button type="submit" className="btn primary">
                Submit for Valuation →
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* SCHEDULE MODAL */}
      {showSchedule && (
        <Modal
          title="Schedule Doorstep Mobility Collector"
          subtitle={`Arrange pickup for ${items.find((i) => i.id === showSchedule)?.name || "your item"}.`}
          onClose={() => setShowSchedule(null)}
        >
          <form className="modal-form" onSubmit={schedulePickup}>
            <label>
              Pickup Date
              <input
                type="date"
                min={new Date().toISOString().slice(0, 10)}
                value={schedule.date}
                onChange={(e) => setSchedule({ ...schedule, date: e.target.value })}
                required
              />
            </label>

            <label>
              Preferred Time Slot
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
              Doorstep Pickup Address
              <textarea
                rows="3"
                value={schedule.address}
                onChange={(e) => setSchedule({ ...schedule, address: e.target.value })}
                placeholder="Apartment/House number, Street, Landmark, Area, City"
                required
              />
            </label>

            <div className="notice">
              📍 Our verified mobility collector arrives with protective blankets and transport straps. Payout is settled immediately upon handover.
            </div>

            <div className="modal-actions">
              <button type="button" className="btn outline" onClick={() => setShowSchedule(null)}>
                Cancel
              </button>
              <button type="submit" className="btn primary">
                Confirm Doorstep Pickup →
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* FEEDBACK MODAL */}
      {showFeedback && (
        <Modal
          title="Rate Your Experience"
          subtitle="Help us improve our mobility aid recycling and distribution service."
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
            <label>Overall Experience</label>
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
              Comments & Suggestions
              <textarea
                rows="4"
                value={feedback.message}
                onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                placeholder="Tell us about the collector punctuality, valuation fairness, or app features..."
              />
            </label>

            <div className="modal-actions">
              <button type="button" className="btn outline" onClick={() => setShowFeedback(false)}>
                Cancel
              </button>
              <button type="submit" className="btn primary">
                Submit Feedback →
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

function Status({ status }) {
  let cls = "pending";
  if (status === "Verified" || status === "Payment received" || status === "Delivered to Beneficiary") cls = "verified";
  if (status === "Pickup scheduled" || status === "Collected from Donor") cls = "scheduled";
  if (status === "Donated" || status === "Donation requested" || status === "Refurbishing in progress") cls = "donated";
  return (
    <span className={`status-badge status-${cls}`}>
      <i />
      {status}
    </span>
  );
}

function Workflow({ compact = false }) {
  return (
    <div className={`workflow ${compact ? "compact" : ""}`}>
      {steps.map((step, i) => (
        <div className={`workflow-step ${i <= 1 ? "done" : ""}`} key={step}>
          <div className="step-line" />
          <div className="step-circle">{i <= 1 ? "✓" : i + 1}</div>
          <div className="step-text">
            <strong>{step}</strong>
            <small>
              {[
                "Add photos and condition details",
                "Fair market resale valuation",
                "Choose convenient collector slot",
                "Instant digital payout",
                "Review impact on community"
              ][i]}
            </small>
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
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

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
body { margin: 0; font-family: 'DM Sans', sans-serif; color: var(--ink); background: var(--bg); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible { outline: 3px solid #9ed7b5; outline-offset: 2px; }
h1, h2, h3, p { margin-top: 0; }
h1, h2, h3, strong { font-family: 'Manrope', 'DM Sans', sans-serif; }
h1 { font-size: 28px; letter-spacing: -0.8px; margin-bottom: 8px; }
h2 { letter-spacing: -0.7px; }
h3 { font-size: 16px; letter-spacing: -0.2px; margin-bottom: 6px; }
.muted { color: var(--muted); font-size: 13px; line-height: 1.6; margin-bottom: 0; }
.eyebrow { font-size: 10px; font-weight: 800; letter-spacing: 1.5px; color: var(--green); text-transform: uppercase; }

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
.text-btn { padding: 0; text-decoration: underline; }

/* Auth Layout */
.auth-shell { min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr; background: white; }
.auth-visual {
  position: relative; min-height: 100vh; padding: 40px 8%; display: flex; flex-direction: column;
  justify-content: space-between; overflow: hidden; color: white;
  background: linear-gradient(145deg, #0f3d28 0%, #1f7a4d 55%, #7aa873 100%);
}
.auth-visual:before {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(12, 50, 34, 0.92), rgba(20, 80, 52, 0.72)),
              url('/scrap-vendor-pickup.jpg') center/cover;
  opacity: 0.96;
}
.auth-visual > * { position: relative; z-index: 1; }
.auth-brand, .brand { display: flex; align-items: center; gap: 12px; font-family: 'Manrope'; font-weight: 800; }
.brand-logo-img { width: 44px; height: 44px; object-fit: contain; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.15)); }
.brand-text { display: flex; flex-direction: column; text-align: left; }
.brand-text span, .brand-title { font-size: 20px; font-weight: 800; color: inherit; line-height: 1.1; }
.brand-text small { font-size: 8px; letter-spacing: 1.4px; opacity: 0.8; margin-top: 2px; }
.auth-copy { max-width: 520px; margin: 40px 0; }
.auth-copy h1 { font-size: clamp(34px, 4vw, 54px); line-height: 1.14; letter-spacing: -2px; margin: 18px 0; }
.auth-copy h1 em { font-style: normal; color: #bdedc7; }
.auth-copy p { font-size: 15px; line-height: 1.7; color: #e4f4e8; max-width: 440px; }
.auth-perks { display: flex; flex-direction: column; gap: 14px; margin-top: 28px; font-size: 13px; color: #f1fff4; }
.auth-perks span { display: flex; align-items: center; gap: 10px; }
.auth-perks svg { color: #8ce1a3; }
.visual-caption { font-size: 12px; color: #dbeef0; display: flex; align-items: center; gap: 9px; }
.pulse-dot { width: 8px; height: 8px; border-radius: 50%; background: #94e3aa; box-shadow: 0 0 0 5px rgba(255,255,255,0.18); }
.auth-panel { padding: 40px 9%; display: flex; flex-direction: column; justify-content: center; position: relative; }
.auth-form-wrap { max-width: 400px; width: 100%; margin: auto; }
.auth-tabs { display: flex; background: #eef3ef; padding: 4px; border-radius: 10px; margin-bottom: 24px; gap: 4px; }
.auth-tab {
  flex: 1; border: 0; background: transparent; padding: 10px 14px; border-radius: 7px;
  font-size: 12px; font-weight: 700; color: var(--muted); transition: 0.2s ease;
}
.auth-tab.active { background: white; color: var(--green-dark); box-shadow: 0 2px 6px rgba(0,0,0,0.08); }
.auth-form-wrap h2 { font-size: 26px; margin: 10px 0 6px; }
.auth-form-wrap form { margin-top: 24px; }
.auth-form-wrap label, .modal-form label, .profile-edit label, .form-grid label {
  display: flex; flex-direction: column; gap: 7px; font-size: 12px; font-weight: 700; margin-bottom: 15px;
}
.auth-form-wrap input, .modal-form input, .modal-form select, .modal-form textarea,
.form-grid input, .form-grid select, .form-grid textarea, .profile-edit input {
  width: 100%; padding: 11px 13px; border: 1px solid var(--line); border-radius: 8px;
  background: #fff; color: var(--ink); font-size: 13px; outline: none; transition: 0.2s ease;
}
.auth-form-wrap input:focus, .modal-form input:focus, .modal-form select:focus,
.modal-form textarea:focus, .form-grid input:focus, .form-grid select:focus,
.form-grid textarea:focus, .profile-edit input:focus {
  border-color: var(--green); box-shadow: 0 0 0 3px rgba(31, 122, 77, 0.14);
}
.auth-divider { display: flex; align-items: center; margin: 20px 0 14px; text-align: center; color: #abb7ae; font-size: 11px; }
.auth-divider:before, .auth-divider:after { content: ""; flex: 1; border-bottom: 1px solid var(--line); }
.auth-divider span { padding: 0 10px; }
.demo-btn { margin-top: 0; border-color: var(--green-border); color: var(--green-dark); background: #f2faf4; }
.demo-btn:hover { background: #e5f4e9; }
.terms, .signin-note { text-align: center; font-size: 11px; color: var(--muted); margin-top: 16px; }
.terms a { color: var(--green); text-decoration: none; font-weight: 600; }
.auth-footer { text-align: center; font-size: 11px; color: #9aa89e; margin-top: 30px; }
.mobile-brand { display: none; }

/* App Shell with Collapsible Sidebar */
.app-shell { display: flex; min-height: 100vh; background: var(--bg); transition: all 0.25s ease; }
.sidebar {
  width: var(--sidebar-w); flex-shrink: 0; background: #fff; border-right: 1px solid var(--line);
  padding: 22px 14px 16px; display: flex; flex-direction: column; min-height: 100vh;
  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1), padding 0.25s ease;
}
.sidebar.collapsed { width: var(--sidebar-collapsed-w); padding: 22px 10px 16px; }

.brand-header {
  display: flex; align-items: center; justify-content: space-between; padding-bottom: 24px;
  border-bottom: 1px solid var(--line); margin-bottom: 18px;
}
.brand { border: 0; background: none; text-align: left; color: var(--ink); padding: 0; }
.brand .brand-logo-img { width: 38px; height: 38px; }
.collapse-toggle-btn {
  border: 1px solid var(--line); background: #f8faf8; border-radius: 8px; width: 32px; height: 32px;
  display: grid; place-items: center; color: var(--muted); transition: 0.2s ease;
}
.collapse-toggle-btn:hover { background: var(--green-soft); color: var(--green-dark); border-color: var(--green-border); }

.sidebar-nav-container { flex: 1; overflow-y: auto; overflow-x: hidden; }
.nav-group-wrap { margin-bottom: 18px; }
.side-group { font-size: 9px; letter-spacing: 1.2px; color: #9aa69e; font-weight: 800; padding: 0 10px; margin-bottom: 8px; }
.nav-item {
  width: 100%; display: flex; align-items: center; gap: 12px; border: 0; background: transparent;
  padding: 10px 12px; border-radius: 8px; text-align: left; color: #5f7065; font-size: 13px;
  font-weight: 600; margin: 3px 0; transition: all 0.18s ease;
}
.sidebar.collapsed .nav-item { justify-content: center; padding: 10px 0; }
.nav-item:hover { background: #f2f7f3; color: var(--ink); }
.nav-item.selected { background: var(--green-soft); color: var(--green-dark); font-weight: 700; }
.nav-icon { width: 20px; height: 20px; display: grid; place-items: center; flex-shrink: 0; color: inherit; }
.nav-label { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.nav-count {
  margin-left: auto; border-radius: 6px; background: #d7edd9; color: var(--green-dark);
  font-size: 10px; padding: 2px 6px; font-weight: 700;
}
.nav-count.mini-badge { position: absolute; right: 12px; top: 6px; padding: 1px 4px; font-size: 8px; }

.sidebar-bottom { margin-top: auto; border-top: 1px solid var(--line); padding-top: 14px; }
.help-card {
  background: linear-gradient(135deg, #f4fbf5, #eaf5ee); border: 1px solid var(--green-border);
  border-radius: 10px; padding: 14px; margin-bottom: 12px;
}
.help-icon {
  width: 30px; height: 30px; border-radius: 8px; background: #d4ebd8; color: var(--green);
  display: grid; place-items: center; margin-bottom: 8px;
}
.help-card strong { font-size: 12px; color: var(--green-dark); display: block; }
.help-card p { font-size: 10px; line-height: 1.5; color: var(--muted); margin: 5px 0 9px; }
.help-card button { border: 0; background: none; padding: 0; color: var(--green); font-size: 10px; font-weight: 800; }

.profile-mini {
  width: 100%; display: flex; align-items: center; gap: 10px; border: 0; background: none;
  padding: 8px 4px; border-radius: 8px; text-align: left;
}
.profile-mini:hover { background: #f3f7f4; }
.sidebar.collapsed .profile-mini { justify-content: center; padding: 8px 0; }
.avatar {
  width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center;
  background: #d8efdd; color: var(--green-dark); font-weight: 800; font-size: 13px; flex-shrink: 0;
}
.profile-text strong { display: block; font-size: 12px; line-height: 1.2; }
.profile-text small { display: block; color: var(--muted); font-size: 10px; margin-top: 2px; }
.logout-btn {
  width: 100%; border: 0; background: none; text-align: left; padding: 8px 6px;
  color: #839187; font-size: 11px; display: flex; align-items: center; gap: 8px;
}
.sidebar.collapsed .logout-btn { justify-content: center; }

/* Main Area & Topbar */
.main-area { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.topbar {
  height: 66px; background: #fff; border-bottom: 1px solid var(--line); display: flex;
  align-items: center; justify-content: space-between; padding: 0 30px; position: sticky; top: 0; z-index: 10;
}
.breadcrumb-row { display: flex; align-items: center; gap: 12px; }
.topbar-collapse-btn {
  border: 1px solid var(--line); background: #f8faf8; border-radius: 7px; width: 30px; height: 30px;
  display: grid; place-items: center; color: var(--muted);
}
.breadcrumb { font-size: 12px; color: #8c9a90; }
.breadcrumb span { padding: 0 8px; color: #cbd4ce; }
.breadcrumb strong { color: var(--ink); }
.top-actions { display: flex; align-items: center; gap: 18px; }
.quick-list-btn { font-size: 11px; }
.icon-btn { position: relative; border: 0; background: transparent; color: #5f7065; padding: 6px; border-radius: 8px; display: grid; place-items: center; }
.icon-btn i { position: absolute; right: 4px; top: 4px; width: 7px; height: 7px; border-radius: 50%; background: #e06041; border: 1.5px solid white; }
.top-user { display: flex; align-items: center; gap: 9px; cursor: pointer; }
.small-avatar { width: 30px; height: 30px; font-size: 11px; }

/* Page Content */
.page-content { max-width: 1400px; margin: 0 auto; width: 100%; padding: 26px 30px 40px; flex: 1; }
.welcome-row, .page-title-row { display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 22px; }
.welcome-actions { display: flex; gap: 10px; }
.wave { font-size: 18px; color: #d69838; }

/* Hero Banner with Clean Sticker Badge (Logo image removed) */
.hero-banner {
  min-height: 270px; border-radius: 16px; overflow: hidden; position: relative;
  background: linear-gradient(115deg, #13422d, #1f7a4d); display: flex; align-items: stretch;
  color: white; margin-bottom: 24px; box-shadow: 0 8px 24px rgba(20, 70, 44, 0.16);
}
.hero-text { padding: 34px 38px; z-index: 1; flex: 1.2; min-width: 0; }
.hero-tag { font-size: 10px; font-weight: 800; letter-spacing: 1.6px; color: #c4eed1; }
.hero-text h2 { font-size: 32px; line-height: 1.18; margin: 12px 0 10px; letter-spacing: -1.2px; }
.hero-text h2 em { font-style: normal; color: #c7ebba; }
.hero-text p { font-size: 13px; line-height: 1.6; color: #e1f4e7; margin-bottom: 22px; max-width: 520px; }
.hero-buttons { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-art { width: 42%; position: relative; overflow: hidden; }
.hero-art:before { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, #164f36, transparent 65%); z-index: 1; }
.hero-art img { width: 100%; height: 100%; object-fit: cover; }
.art-sticker {
  position: absolute; z-index: 2; right: 18px; bottom: 18px; border-radius: 12px;
  background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); color: var(--green-dark);
  padding: 10px 14px; box-shadow: 0 8px 20px rgba(0,0,0,0.2); display: flex; align-items: center; gap: 10px;
}
.art-sticker-icon {
  width: 28px; height: 28px; border-radius: 50%; background: #d7eedb; color: var(--green-dark);
  display: grid; place-items: center; font-weight: 900; font-size: 14px;
}
.art-sticker strong { display: block; font-size: 11px; }
.art-sticker small { display: block; font-size: 10px; color: var(--muted); }

/* Stats Tiles */
.stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; margin-bottom: 26px; }
.stat-card { background: white; border: 1px solid var(--line); border-radius: 12px; padding: 18px; }
.stat-icon { width: 34px; height: 34px; border-radius: 9px; display: grid; place-items: center; font-size: 17px; margin-bottom: 12px; }
.stat-icon.green { background: #e7f6eb; color: var(--green); }
.stat-icon.orange { background: #fff2df; color: #b77626; }
.stat-icon.purple { background: #f0eaff; color: var(--purple); }
.stat-icon.pink { background: #ffeef2; color: #c95775; }
.stat-label { font-size: 11px; color: #76857c; font-weight: 600; }
.stat-value { font-family: 'Manrope'; font-size: 26px; font-weight: 800; letter-spacing: -0.8px; margin: 4px 0 2px; }
.stat-note { font-size: 11px; color: #9aa8a0; }

/* Table View with Equipment Thumbnails & Badges */
.section-heading, .panel-head { display: flex; align-items: center; justify-content: space-between; gap: 15px; margin-bottom: 14px; }
.items-table-wrap { background: white; border: 1px solid var(--line); border-radius: 12px; overflow-x: auto; margin-bottom: 24px; }
.items-table { width: 100%; border-collapse: collapse; text-align: left; }
.items-table th { background: #fafcfa; color: #8e9c93; font-size: 10px; letter-spacing: 0.8px; padding: 13px 18px; font-weight: 800; text-transform: uppercase; }
.items-table td { padding: 14px 18px; border-top: 1px solid #eef2ef; font-size: 12px; color: #4e6054; }
.item-cell { display: flex; align-items: center; gap: 12px; min-width: 250px; }
.item-thumb-wrap { position: relative; width: 48px; height: 48px; flex-shrink: 0; }
.item-thumb { width: 48px; height: 48px; object-fit: cover; border-radius: 8px; background: #eef3ef; border: 1px solid #e0ebe2; }
.item-type-icon {
  position: absolute; right: -4px; bottom: -4px; background: #1f7a4d; color: white;
  border-radius: 50%; width: 20px; height: 20px; display: grid; place-items: center;
  border: 1.5px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.item-type-icon svg { width: 11px; height: 11px; }
.item-cell strong { display: block; color: var(--ink); font-size: 12px; line-height: 1.3; }
.item-cell small { display: block; color: #8e9c93; font-size: 11px; margin-top: 3px; }
.condition-pill { background: #f1f6f2; border: 1px solid #e0ebe2; color: #3b5042; padding: 4px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; white-space: nowrap; }
.price-cell { display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap; }
.price-current { font-weight: 800; color: var(--green-dark); font-size: 13px; }
.price-original { color: #a4b0a8; font-size: 11px; }
.savings-tag { background: #e6f6ec; color: var(--green-dark); font-size: 9px; font-weight: 800; padding: 2px 5px; border-radius: 4px; }
.strategy-tag { display: inline-flex; align-items: center; gap: 5px; background: #fbf6ec; color: #a46d22; border: 1px solid #fae8cc; padding: 4px 8px; border-radius: 6px; font-size: 10px; font-weight: 700; }
.action-cell-btn { padding: 5px 10px; font-size: 10px; }

/* Status Badges */
.status-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 8px; border-radius: 16px; font-size: 10px; font-weight: 700; white-space: nowrap; }
.status-badge i { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.status-pending { background: #fff3df; color: #a77227; }
.status-verified { background: #e7f7ec; color: #207746; }
.status-scheduled { background: #e8f1fd; color: #3f6eb7; }
.status-donated { background: #f4e8ff; color: #7f4eb8; }

/* Bottom Grid & Donation Callout */
.bottom-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 16px; margin-top: 20px; }
.panel { background: white; border: 1px solid var(--line); border-radius: 12px; padding: 22px; margin-bottom: 20px; }
.counter-pill { background: #eef5f0; color: var(--green); border-radius: 20px; padding: 4px 10px; font-size: 11px; font-weight: 700; }
.donate-card {
  border: 1px solid var(--green-border); background: linear-gradient(135deg, #f4fbf5, #e7f6ea);
  border-radius: 12px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between;
}
.donate-card-badge { display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 800; color: var(--green); margin-bottom: 8px; }
.mission-heart-icon {
  width: 24px; height: 24px; border-radius: 50%; background: #d7eedb; color: var(--green-dark);
  display: grid; place-items: center; font-size: 12px;
}
.donate-card h3 { font-size: 18px; margin-bottom: 8px; color: var(--green-dark); }
.donate-card p { font-size: 12px; line-height: 1.6; color: #52675a; margin-bottom: 16px; }
.donate-card-impact { display: flex; gap: 20px; margin-bottom: 18px; padding: 12px 0; border-top: 1px solid #d5ebd9; border-bottom: 1px solid #d5ebd9; }
.donate-card-impact strong { font-size: 20px; color: var(--green-dark); display: block; }
.donate-card-impact small { font-size: 10px; color: var(--muted); }

/* Filter Pills with Equipment Icons */
.filter-row { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
.filter-pill {
  border: 1px solid var(--line); background: white; color: #6f7f75; border-radius: 8px;
  padding: 8px 14px; font-size: 12px; font-weight: 600; transition: 0.2s ease;
  display: inline-flex; align-items: center; gap: 6px;
}
.filter-pill-icon { display: flex; align-items: center; color: inherit; }
.filter-pill-icon svg { width: 14px; height: 14px; }
.filter-pill b { margin-left: 4px; background: #eef3ef; border-radius: 4px; padding: 2px 6px; font-size: 10px; }
.filter-pill.active { border-color: var(--green); color: var(--green); background: var(--green-soft); }

/* Item Cards Grid */
.item-cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; margin-bottom: 22px; }
.listing-card { background: white; border: 1px solid var(--line); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; }
.card-media { position: relative; height: 175px; background: #eef3ef; overflow: hidden; }
.card-media img { width: 100%; height: 100%; object-fit: cover; }
.card-floating-badge { position: absolute; left: 12px; top: 12px; }
.card-type-chip {
  position: absolute; left: 12px; bottom: 12px; background: rgba(18, 45, 30, 0.85); backdrop-filter: blur(4px);
  color: white; padding: 4px 8px; border-radius: 6px; font-size: 10px; font-weight: 700;
  display: flex; align-items: center; gap: 6px;
}
.card-type-chip svg { width: 13px; height: 13px; }
.card-savings-flag { position: absolute; right: 12px; top: 12px; background: #1f7a4d; color: white; padding: 4px 8px; border-radius: 6px; font-size: 9px; font-weight: 800; letter-spacing: 0.5px; }
.listing-body { padding: 18px; display: flex; flex-direction: column; flex: 1; }
.card-category-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.category-tag { font-size: 10px; font-weight: 800; color: var(--green); background: #eef7f0; padding: 3px 7px; border-radius: 4px; text-transform: uppercase; }
.date-text { font-size: 10px; color: #9daaa1; }
.listing-body h3 { font-size: 15px; margin: 4px 0 6px; line-height: 1.3; }
.condition-text { font-size: 11px; color: #617367; margin-bottom: 12px; }
.pricing-box { display: flex; justify-content: space-between; align-items: center; background: #fbfdfb; border: 1px solid #edf2ee; padding: 10px 12px; border-radius: 8px; margin-bottom: 12px; }
.price-col small { display: block; font-size: 9px; color: #93a297; text-transform: uppercase; font-weight: 700; margin-bottom: 2px; }
.price-wrap { display: flex; align-items: baseline; gap: 7px; }
.price-amount { font-size: 18px; font-weight: 800; color: var(--green-dark); }
.price-was { font-size: 11px; color: #9ba79f; }
.demand-pill { font-size: 10px; font-weight: 700; color: #9b6923; background: #fff5e3; border: 1px solid #fae6c3; padding: 4px 7px; border-radius: 6px; }
.strategy-callout { background: #fafcfa; border-left: 3px solid var(--green); padding: 8px 10px; border-radius: 0 6px 6px 0; margin-bottom: 14px; font-size: 11px; color: #526759; line-height: 1.4; }
.strategy-header { display: flex; align-items: center; gap: 5px; font-weight: 700; color: var(--green-dark); margin-bottom: 3px; font-size: 10px; }
.pickup-scheduled-info { display: flex; align-items: center; gap: 8px; background: #eef4fd; border: 1px solid #d9e5f9; padding: 8px 10px; border-radius: 6px; margin-bottom: 14px; font-size: 10px; color: #325ea3; }
.pickup-scheduled-info svg { flex-shrink: 0; }
.listing-bottom { margin-top: auto; }

/* Notice */
.notice { background: #fff9ed; border: 1px solid #f3e5c4; color: #8d6f35; padding: 12px 16px; border-radius: 8px; font-size: 11px; line-height: 1.6; margin-top: 18px; }

/* Schedule Tab Styles with Dedicated Equipment Images & Badges */
.schedule-row, .verify-item-row { display: flex; align-items: center; gap: 16px; padding: 16px 0; border-bottom: 1px solid #edf1ed; }
.schedule-row:last-child, .verify-item-row:last-child { border-bottom: 0; }
.schedule-thumb-wrap, .verify-thumb-wrap { position: relative; width: 56px; height: 56px; flex-shrink: 0; }
.schedule-thumb, .verify-item-img { width: 56px; height: 56px; object-fit: cover; border-radius: 8px; background: #edf2ee; border: 1px solid #dce8df; }
.schedule-type-badge, .verify-type-badge {
  position: absolute; right: -4px; bottom: -4px; background: #1f7a4d; color: white;
  border-radius: 50%; width: 22px; height: 22px; display: grid; place-items: center;
  border: 1.5px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.schedule-type-badge svg, .verify-type-badge svg { width: 12px; height: 12px; }
.schedule-info { flex: 1; min-width: 0; }
.schedule-title-row { display: flex; align-items: baseline; gap: 10px; margin-bottom: 3px; }
.schedule-price { color: var(--green-dark); font-weight: 800; font-size: 13px; }
.muted-inline { font-size: 11px; color: #7f8e84; }
.pickup-meta { margin-top: 6px; display: flex; gap: 10px; align-items: center; font-size: 11px; flex-wrap: wrap; }
.pickup-date-badge { background: #eaf3ff; color: #3366bb; font-weight: 700; padding: 3px 8px; border-radius: 4px; }
.pickup-address-text { color: #5f7065; }
.pending-meta { color: #b77626; font-weight: 600; }
.schedule-actions, .verify-actions { display: flex; align-items: center; gap: 10px; }
.calendar-note { display: flex; gap: 16px; align-items: center; background: #f6fbf7; border-color: var(--green-border); }
.calendar-icon { width: 44px; height: 44px; border-radius: 10px; background: #e6f6ec; color: var(--green); display: grid; place-items: center; font-size: 20px; flex-shrink: 0; }

/* Donation Feature Section with Realistic Smiling Vendor Photo */
.donate-feature {
  display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 28px; align-items: center;
  background: linear-gradient(135deg, #eef7f0, #e6f5ea); border: 1px solid var(--green-border);
  border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 4px 18px rgba(31, 122, 77, 0.08);
}
.donate-feature-img { position: relative; height: 260px; overflow: hidden; border-radius: 12px; }
.donate-feature-img img { width: 100%; height: 100%; object-fit: cover; }
.donation-img-overlay { position: absolute; left: 14px; bottom: 14px; background: rgba(18, 56, 36, 0.85); backdrop-filter: blur(6px); color: white; padding: 6px 12px; border-radius: 20px; font-size: 11px; font-weight: 700; }
.donate-feature-content h2 { font-size: 26px; line-height: 1.25; margin: 10px 0 12px; }
.donate-feature-content p { font-size: 13px; line-height: 1.7; color: #4e6355; }
.donate-chips { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px; }
.donate-chips span { font-size: 11px; font-weight: 700; color: var(--green-dark); background: white; border: 1px solid #d4ebd8; border-radius: 20px; padding: 6px 12px; display: inline-flex; align-items: center; gap: 6px; }
.donate-chips svg { color: var(--green); }

/* Donation Form Layout with Live Preview */
.donate-form-panel { padding: 24px; }
.donate-form-layout { display: grid; grid-template-columns: 1.35fr 0.65fr; gap: 24px; align-items: start; }
.donate-form-fields h3 { margin-bottom: 4px; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 16px; margin-top: 18px; }
.span-two { grid-column: span 2; }

.donate-preview-box {
  background: #f8faf8; border: 1px solid #e1ebe3; border-radius: 12px; padding: 18px; text-align: center;
}
.preview-label { display: block; font-size: 10px; font-weight: 800; color: var(--green); letter-spacing: 0.8px; text-transform: uppercase; margin-bottom: 12px; }
.donate-preview-img-wrap { position: relative; width: 100%; height: 140px; border-radius: 10px; overflow: hidden; margin-bottom: 12px; background: #eaf1ec; }
.donate-preview-img { width: 100%; height: 100%; object-fit: cover; }
.donate-preview-icon {
  position: absolute; right: 10px; bottom: 10px; background: #1f7a4d; color: white;
  border-radius: 50%; width: 26px; height: 26px; display: grid; place-items: center;
  border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.donate-preview-icon svg { width: 14px; height: 14px; }
.donate-preview-box strong { display: block; font-size: 13px; margin-bottom: 4px; }
.donate-preview-box small { font-size: 10px; color: var(--muted); line-height: 1.4; display: block; }

/* Donation History Cards with Equipment Thumbnails */
.donations-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 12px; }
.donation-card { display: flex; gap: 14px; background: #fbfdfb; border: 1px solid #e7efe9; border-radius: 10px; padding: 14px; }
.donation-thumb-wrap { position: relative; width: 72px; height: 72px; flex-shrink: 0; }
.donation-thumb { width: 72px; height: 72px; object-fit: cover; border-radius: 8px; background: #edf3ef; border: 1px solid #dce8df; }
.donation-type-badge {
  position: absolute; right: -4px; bottom: -4px; background: #1f7a4d; color: white;
  border-radius: 50%; width: 22px; height: 22px; display: grid; place-items: center;
  border: 1.5px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.donation-type-badge svg { width: 12px; height: 12px; }
.donation-details { flex: 1; min-width: 0; }
.donation-top-line { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
.donation-condition { font-size: 11px; color: #76867d; margin-bottom: 8px; }
.beneficiary-box { background: #f0f7f2; border: 1px solid #e1eee4; border-radius: 6px; padding: 8px 10px; font-size: 11px; color: #375340; margin-bottom: 6px; }
.beneficiary-box small { display: block; font-weight: 700; color: var(--green-dark); margin-bottom: 2px; }
.donation-date { font-size: 10px; color: #9daaa1; }

/* Notifications View */
.notification-list { padding: 0; overflow: hidden; }
.notification-row {
  width: 100%; display: flex; align-items: center; gap: 14px; padding: 16px 20px; border: 0;
  border-bottom: 1px solid #edf1ed; background: white; text-align: left; transition: background 0.15s ease;
}
.notification-row:last-child { border-bottom: 0; }
.notification-row.unread { background: #f5fbf6; }
.notification-symbol {
  width: 38px; height: 38px; border-radius: 10px; background: #e8f5ec; color: var(--green);
  display: grid; place-items: center; font-size: 18px; flex-shrink: 0;
}
.notification-copy { flex: 1; min-width: 0; }
.notification-copy strong { display: block; font-size: 12px; margin-bottom: 3px; color: var(--ink); }
.notification-copy span { display: block; font-size: 11px; color: #64756a; line-height: 1.4; }
.notification-copy small { display: block; color: #9aa89f; font-size: 10px; margin-top: 6px; }
.notification-copy small b { color: var(--green); font-weight: 800; }
.notification-arrow { color: #abb7af; font-size: 18px; }

/* Verification Page */
.verification-intro { display: flex; gap: 14px; align-items: center; padding: 20px; background: #eef7f0; border: 1px solid #d8ebd9; border-radius: 12px; margin-bottom: 18px; }
.verify-icon { width: 44px; height: 44px; border-radius: 50%; display: grid; place-items: center; background: var(--green); color: white; font-size: 22px; flex-shrink: 0; }
.workflow { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 10px; margin-bottom: 22px; }
.workflow-step { position: relative; min-width: 0; }
.step-line { position: absolute; top: 16px; left: 32px; right: -8px; height: 2px; background: #e4ebe5; }
.workflow-step:last-child .step-line { display: none; }
.step-circle {
  position: relative; width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center;
  background: #f0f4f1; border: 1px solid #dce4de; color: #829286; font-size: 11px; font-weight: 800;
  margin-bottom: 10px; z-index: 1;
}
.workflow-step.done .step-circle { background: var(--green); border-color: var(--green); color: white; }
.step-text strong { font-size: 11px; display: block; line-height: 1.4; }
.step-text small { font-size: 9px; line-height: 1.4; color: #8e9e93; display: block; margin-top: 4px; }
.workflow.compact { margin-top: 16px; }
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
.profile-edit label { max-width: 480px; }

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
  .mobile-brand { display: flex; align-items: center; gap: 10px; font-size: 20px; font-weight: 800; margin-bottom: 30px; }
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
