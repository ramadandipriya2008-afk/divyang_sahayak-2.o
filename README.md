# Divyang Sahayak 2.0 • ScrapCycle
### *Circular Assistive Mobility Aid Resale, Refurbishing & Donation Platform*

**Divyang Sahayak 2.0 (ScrapCycle)** is a community-first circular mobility ecosystem empowering people with disabilities and elderly citizens in need across India. Unused, pre-owned, or damaged mobility equipment—such as wheelchairs, walkers, rollators, crutches, and walking canes—are collected directly from households, audited with fair **Resale Cost** valuations, and recirculated or donated to underprivileged beneficiaries and rehabilitation centers.

---

## 🌟 Key Platform Features

### 1. 🌐 4-Language Multilingual Support
Instant, 1-click multilingual toggling across the entire platform without page reload:
- **English** (`EN`)
- **Telugu** (`తెలుగు`)
- **Kannada** (`ಕನ್ನಡ`)
- **Hindi** (`हिंदी`)
- Complete UI translation: Authentication screen, navigation, dashboard metrics, equipment catalog, pickup scheduling, donation submission, verification inspection checklist, contributor profile, modals, and notifications.
- **Dynamic Equipment Translation**: Equipment names, conditions, demand tags, and resale marketing strategies dynamically switch to the chosen language.

### 2. 💰 100% "Resale Cost" Commercial Valuation Model
- All equipment valuations are strictly calculated and labeled as **Resale Cost** (`రీసేల్ ధర` / `ಮರುಮಾರಾಟ ವೆಚ್ಚ` / `रीसेल लागत`).
- Commercial marketing strategies anchored against manufacturer retail MRP with charm pricing (₹549, ₹699, ₹899, ₹1,850, ₹2,499, ₹3,850, ₹4,999, ₹12,999) and pre-factored refurbishment deductions.

### 3. ♿ Dedicated Mobility Aid Inventory & Studio Photography
Verified pre-owned equipment catalog across 4 specialized categories:
- **Wheelchairs**: Manual folding wheelchairs, electric power wheelchairs, pediatric cerebral palsy postural support wheelchairs, heavy-duty reclining high-back wheelchairs, compact travel wheelchairs.
- **Walkers & Rollators**: 4-wheel rollators with padded seat and dual handbrakes, single-button folding aluminum walkers, front-wheeled orthopedic walkers with ski glides, steerable knee recovery scooters.
- **Crutches**: Pair of push-button adjustable aluminum underarm crutches, ergonomic hinged forearm crutches.
- **Canes & Sticks**: Heavy-duty 4-point quad-base balance canes.

### 4. 🚚 Verified Doorstep Pickup & Logistics
- Doorstep pickup scheduling with date and time slot selection.
- Padded blanket and strap transport standards to ensure delicate mobility aids and motorized controllers remain protected.
- Instant digital / cash payout settled right upon handover.

### 5. ❤️ Heartfelt Community Donations
- Free doorstep collection for donated mobility equipment.
- Certified repair, sanitization, and replacement of rubber ferrules / brake cables.
- Verified delivery to underprivileged children, elderly care homes, and community dispensaries.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `pnpm`

### Installation & Run

1. Clone the repository and switch to the `scrap` branch:
   ```bash
   git clone https://github.com/ramadandipriya2008-afk/divyang_sahayak-2.o.git
   cd divyang_sahayak-2.o
   git checkout scrap
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Open the displayed local server address in your browser (default `http://localhost:5173` or `http://localhost:5174`).

---

## 📂 Project Structure

```
scrapcycle/
├── public/
│   ├── scrapcycle-logo.png          # Official ScrapCycle brand logo
│   ├── scrap-vendor-pickup.jpg      # Vendor collecting wheelchair from household
│   ├── scrap-vendor-donation.jpg    # Smiling vendor helping community members
│   ├── scrapped-wheelchair.jpg      # Weathered wheelchair for circular recycling
│   ├── manual-wheelchair.jpg        # Studio photography - Manual wheelchair
│   ├── electric-wheelchair.jpg      # Studio photography - Electric power wheelchair
│   ├── rollator-walker.jpg          # Studio photography - 4-wheel rollator walker
│   ├── folding-walker.jpg           # Studio photography - Folding aluminum walker
│   ├── underarm-crutches.jpg        # Studio photography - Aluminum underarm crutches
│   ├── forearm-crutches.jpg         # Studio photography - Ergonomic forearm crutches
│   └── quad-cane.jpg                # Studio photography - Quad-base walking cane
├── src/
│   ├── App.jsx                      # Main application with 4-language i18n & state
│   ├── main.jsx                     # Application root renderer
│   └── index.css                    # Base styling
├── index.html                       # HTML5 entry with viewport & favicon
├── package.json                     # Scripts & React dependencies
└── README.md                        # Documentation
```

---

## 📄 License & Mission
Created for the **Divyang Sahayak** initiative • *Reuse. Resell. Repeat.* Empowering mobility and assistive independence across communities.
