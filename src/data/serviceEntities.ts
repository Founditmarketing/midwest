export interface ServiceEntity {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  heroImage: string;
  schemaServiceType: string;
  category: string;
  overview: string[];
  features: { title: string; desc: string }[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICE_CATEGORIES = [
  { name: 'Sales & Installation', slugs: ['new-windmill-sales-installation', 'windmill-tower-construction-replacement'] },
  { name: 'Water & Aeration', slugs: ['windmill-pond-aeration-systems', 'windmill-water-pumping-systems', 'livestock-water-windmill-systems', 'windmill-hand-pump-installation'] },
  { name: 'Repair & Restoration', slugs: ['aermotor-windmill-repair', 'windmill-gearbox-rebuild-repair', 'storm-damage-windmill-repair', 'windmill-restoration-services', 'windmill-annual-maintenance-oiling'] },
  { name: 'Parts & Décor', slugs: ['aermotor-windmill-parts-supplies', 'windmill-decorative-wall-art-yard-art'] },
  { name: 'Consulting', slugs: ['windmill-consulting-site-assessment'] },
];

export const SERVICE_ENTITIES: ServiceEntity[] = [
  {
    slug: 'new-windmill-sales-installation',
    h1: 'New Windmill Sales & Installation',
    metaTitle: 'New Windmill Sales & Installation | Midwest Windmill Company',
    metaDescription: 'Midwest Windmill Company sells complete American-made farm windmill systems from 8ft to 16ft wheels on steel towers. Professional installation available nationwide.',
    heroSubtitle: 'Complete Systems',
    heroImage: '/images/midwest-windmill-installation.png',
    schemaServiceType: 'Windmill Sales and Installation',
    category: 'Sales & Installation',
    overview: [
      'Midwest Windmill Company sells original American-made pumping farm windmills as complete systems — wheel, tower, and all hardware included. Whether you need a compact 8-foot wheel for a backyard pond or a massive 16-foot system for a working ranch, we have the right windmill for your property.',
      'Every windmill we sell is built with heavy-grade American steel in the heart of the Midwest. There is absolutely no substitute for American-made quality — while others rely on imported, mass-produced parts, we use only genuine components that are calibrated using time-tested engineering methods proven to last for decades.',
      'We ship complete windmill systems unassembled to anywhere in the United States. Professional on-site installation is available, or we provide comprehensive assembly guides for experienced DIY installers. Our systems range from $7,000 for an 8-foot wheel on a 21-foot tower to $37,500 for a 16-foot wheel on a 40-foot tower.'
    ],
    features: [
      { title: 'Complete Systems', desc: 'Wheel, tower, and all hardware included in every purchase.' },
      { title: '8ft to 16ft Wheels', desc: 'Multiple wheel sizes to match your water pumping or aeration needs.' },
      { title: '100% American Steel', desc: 'Heavy-grade American-made steel — no cheap imports.' },
      { title: 'Nationwide Shipping', desc: 'We ship unassembled systems to all 50 states.' },
      { title: 'Professional Installation', desc: 'On-site assembly and installation by our experienced crew.' },
      { title: 'Decades of Service', desc: 'Engineered to pump water reliably for 30+ years with minimal maintenance.' },
    ],
    process: [
      { step: 'Consultation', description: 'We discuss your property, water needs, wind conditions, and budget to recommend the right system.' },
      { step: 'System Selection', description: 'Choose your wheel size (8ft–16ft) and tower height (21ft–40ft) based on your specific requirements.' },
      { step: 'Order & Shipping', description: 'Your complete windmill system is prepared and shipped unassembled to your location.' },
      { step: 'Installation', description: 'Professional on-site installation by our crew, or DIY assembly with our comprehensive guides.' },
    ],
    faqs: [
      { question: 'How much does a new windmill cost?', answer: 'Midwest Windmill Company sells complete windmill systems starting at $7,000 for an 8-foot wheel on a 21-foot tower. Our largest system — a 16-foot wheel on a 40-foot tower — starts at $37,500. Prices include the complete wheel assembly, tower, and all hardware.' },
      { question: 'How long does it take to install a windmill?', answer: 'Professional installation by Midwest Windmill Company typically takes 1–2 days depending on the system size and site conditions. The tower is assembled on the ground and raised into position, then the wheel assembly is mounted on top.' },
      { question: 'Do windmills work without electricity?', answer: 'Yes. Farm windmills are entirely wind-powered mechanical systems that require zero electricity. They convert wind energy into a pumping action that draws water from wells, fills ponds, and aerates water bodies — all completely off-grid.' },
      { question: 'What size windmill do I need?', answer: 'The right windmill size depends on your water needs and well depth. An 8-foot wheel is ideal for backyard ponds and shallow wells. A 10-foot wheel handles moderate water demands. A 16-foot wheel is built for deep wells and high-volume water delivery on working ranches. Contact Midwest Windmill Company for a free sizing consultation.' },
    ],
  },
  {
    slug: 'windmill-pond-aeration-systems',
    h1: 'Windmill Pond Aeration Systems',
    metaTitle: 'Windmill Pond Aeration Systems | Midwest Windmill Company',
    metaDescription: 'Wind-powered pond aeration systems that eliminate algae, improve water quality, and support healthy aquatic life. No electricity required. Installed nationwide by Midwest Windmill Company.',
    heroSubtitle: 'Off-Grid Aeration',
    heroImage: '/images/lake-aeration-system.png',
    schemaServiceType: 'Windmill Pond Aeration',
    category: 'Water & Aeration',
    overview: [
      'Midwest Windmill Company installs wind-powered pond aeration systems that deeply oxygenate ponds and lakes without any electricity. Our windmill aerators use the natural power of wind to drive compressor pumps that push air through submerged diffusers, releasing oxygen directly into the water column.',
      'Proper aeration eliminates algae blooms, reduces foul odors, prevents fish kills, and promotes a healthy aquatic ecosystem. Our systems are ideal for farm ponds, stock tanks, fishing lakes, and rural properties where running electrical lines would be impractical or expensive.',
      'Windmill aeration systems operate effectively in winds as low as 3–5 mph and can aerate ponds ranging from a quarter acre to 3+ acres. We handle everything from system selection and site assessment to full installation and ongoing maintenance.'
    ],
    features: [
      { title: 'Zero Electricity', desc: 'Completely wind-powered — no electrical lines, no utility bills.' },
      { title: 'Algae Elimination', desc: 'Deep aeration prevents algae blooms and keeps water crystal clear.' },
      { title: 'Fish & Wildlife', desc: 'Increased dissolved oxygen supports healthy fish populations.' },
      { title: 'Odor Reduction', desc: 'Circulated water eliminates stagnation and foul smells.' },
      { title: 'Low Wind Operation', desc: 'Our systems activate in winds as low as 3–5 mph.' },
      { title: 'Up to 3+ Acres', desc: 'Effective aeration for ponds and lakes of varying sizes.' },
    ],
    process: [
      { step: 'Site Assessment', description: 'We evaluate your pond size, depth, wind exposure, and water quality issues.' },
      { step: 'System Design', description: 'We select the right windmill, compressor, airline length, and diffuser placement.' },
      { step: 'Installation', description: 'Tower assembly, compressor mounting, airline routing, and diffuser placement in the pond.' },
      { step: 'Commissioning', description: 'We verify airflow, diffuser depth, and aeration coverage before handoff.' },
    ],
    faqs: [
      { question: 'How does a windmill aerator work?', answer: 'A windmill pond aerator converts wind energy into mechanical power that drives an air compressor. The compressor pushes air through airlines to submerged airstones (diffusers) at the bottom of the pond, releasing millions of tiny oxygen bubbles that circulate and oxygenate the entire water column.' },
      { question: 'Will a windmill aerator eliminate algae in my pond?', answer: 'Yes. Midwest Windmill Company installs aeration systems that dramatically reduce and often eliminate algae blooms. By circulating water from the bottom up, aeration disrupts the stagnant, nutrient-rich conditions that algae need to thrive.' },
      { question: 'What size pond can a windmill aerate?', answer: 'Windmill aeration systems from Midwest Windmill Company can effectively aerate ponds from 0.25 acres to 3+ acres and depths up to 30 feet. Larger ponds may require multiple diffuser stations connected to a single compressor.' },
      { question: 'How much wind does a pond aeration windmill need?', answer: 'Our windmill aeration systems begin operating in winds as low as 3–5 mph. While wind is intermittent, the residual dissolved oxygen from active aeration periods sustains water quality during calm spells.' },
    ],
  },
  {
    slug: 'windmill-water-pumping-systems',
    h1: 'Windmill Water Pumping Systems',
    metaTitle: 'Windmill Water Pumping Systems | Midwest Windmill Company',
    metaDescription: 'Wind-powered water pumping systems for wells, ponds, and rural properties. Midwest Windmill Company installs American-made windmill pumping systems nationwide.',
    heroSubtitle: 'Wind-Powered Water',
    heroImage: '/images/hero_farm_windmill.png',
    schemaServiceType: 'Windmill Water Pumping Installation',
    category: 'Water & Aeration',
    overview: [
      'Midwest Windmill Company specializes in wind-powered water pumping systems that draw water from wells, fill ponds, irrigate gardens, and deliver water to storage tanks — all without electricity. Our American-made windmills convert wind energy into reliable mechanical pumping action that works day and night.',
      'A windmill water pump uses a multi-bladed wheel to generate high torque at low wind speeds. This rotational energy drives a pump rod up and down inside the well casing, drawing water to the surface with every stroke. The system can pump from half a gallon to hundreds of gallons per minute depending on wheel size and wind conditions.',
      'Whether you need to pump water for your home from a shallow well, fill a stock pond, or deliver water across your property, Midwest Windmill Company will design, supply, and install the right system for your specific needs.'
    ],
    features: [
      { title: 'Well Pumping', desc: 'Draw water from wells up to hundreds of feet deep.' },
      { title: 'Pond Filling', desc: 'Continuously fill and replenish farm ponds and stock tanks.' },
      { title: 'Garden Irrigation', desc: 'Wind-powered water delivery to orchards and large gardens.' },
      { title: 'Off-Grid Operation', desc: 'No electricity, no utility bills, no fuel costs.' },
      { title: 'High Torque Design', desc: 'Multi-blade wheels generate maximum torque in low winds.' },
      { title: 'American Engineering', desc: 'Time-tested mechanical design proven over 150+ years.' },
    ],
    process: [
      { step: 'Well Assessment', description: 'We evaluate your well depth, water table level, and desired output.' },
      { step: 'System Sizing', description: 'We match wheel size and tower height to your wind conditions and pumping requirements.' },
      { step: 'Plumbing & Installation', description: 'Cylinder, pump rod, piping, and tower are installed and connected to your water system.' },
      { step: 'Testing & Calibration', description: 'We verify pump stroke, output volume, and overall system performance.' },
    ],
    faqs: [
      { question: 'How deep can a windmill pump water from?', answer: 'Midwest Windmill Company installs water pumping windmills capable of drawing water from wells up to several hundred feet deep. The depth capacity depends on the wheel size — larger wheels generate more torque and can pump from deeper wells.' },
      { question: 'How much water can a windmill pump per day?', answer: 'Output varies based on wheel size and wind speed. An 8-foot wheel can pump roughly 150–300 gallons per hour in moderate wind. A 16-foot wheel can deliver significantly more. Midwest Windmill Company will calculate your expected daily output during the consultation.' },
      { question: 'Can a windmill pump water for my house?', answer: 'Yes. Many of our customers use windmill water pumping systems as their primary or supplemental home water supply. The windmill pumps water into a storage tank or pressure system that feeds your household plumbing.' },
    ],
  },
  {
    slug: 'livestock-water-windmill-systems',
    h1: 'Livestock Water Windmill Systems',
    metaTitle: 'Livestock Water Windmill Systems | Midwest Windmill Company',
    metaDescription: 'Wind-powered livestock watering systems for ranches and farms. Midwest Windmill Company provides reliable off-grid water delivery for cattle, horses, and livestock.',
    heroSubtitle: 'Ranch Water Solutions',
    heroImage: '/images/resort_farm_windmill.png',
    schemaServiceType: 'Livestock Water Windmill Installation',
    category: 'Water & Aeration',
    overview: [
      'Midwest Windmill Company provides wind-powered livestock watering systems that keep cattle, horses, and other livestock reliably watered without the cost of electricity. A single windmill can deliver hundreds of gallons per day to stock tanks, troughs, and holding ponds across your ranch.',
      'Livestock water demand is significant — a milking cow drinks up to 35 gallons per day, beef cattle 12–20 gallons, and horses 8–12 gallons. Our windmill systems are sized to meet these demands even in moderate wind conditions, pumping water from wells directly into stock tanks or temporary holding ponds.',
      'For ranchers, a windmill is the most cost-effective long-term water solution. No electric lines to run, no utility bills, no fuel costs. Once installed, a properly maintained windmill will pump water for 30+ years with only annual oiling and inspection.'
    ],
    features: [
      { title: 'Cattle & Horse Water', desc: 'Reliable daily output to meet the demands of large herds.' },
      { title: 'Stock Tank Delivery', desc: 'Direct pumping into tanks, troughs, and holding ponds.' },
      { title: 'Remote Pastures', desc: 'Ideal for pastures without electrical service.' },
      { title: 'Low Maintenance', desc: 'Annual oiling and inspection — no daily upkeep.' },
      { title: 'All-Season Operation', desc: 'Operates year-round in wind as low as 5 mph.' },
      { title: '30+ Year Lifespan', desc: 'American steel construction built for decades of service.' },
    ],
    process: [
      { step: 'Ranch Consultation', description: 'We assess herd size, pasture layout, well locations, and water demand.' },
      { step: 'System Design', description: 'We size the windmill and plan piping routes to stock tanks and troughs.' },
      { step: 'Installation', description: 'Tower, wheel, pump, and piping installed on your property.' },
      { step: 'Herd-Ready Handoff', description: 'System tested and delivering water before we leave your ranch.' },
    ],
    faqs: [
      { question: 'How many cattle can one windmill water?', answer: 'Midwest Windmill Company sizes livestock windmill systems based on herd size and daily water demand. A standard 8-foot windmill in moderate wind can typically support 30–50 head of cattle. Larger wheels and optimal wind conditions can support significantly more.' },
      { question: 'Can a windmill fill a stock pond?', answer: 'Yes. Many ranchers use windmill systems from Midwest Windmill Company to continuously fill and maintain stock ponds. The windmill pumps water whenever the wind blows, keeping the pond replenished throughout the season.' },
      { question: 'Is a windmill better than a solar pump for livestock water?', answer: 'Windmills have a significant advantage over solar pumps for livestock water because they operate 24 hours a day whenever wind is present — including at night and on cloudy days. Midwest Windmill Company recommends windmills for ranches with reliable wind patterns, especially in the Great Plains and Midwest.' },
    ],
  },
  {
    slug: 'aermotor-windmill-repair',
    h1: 'Aermotor Windmill Repair',
    metaTitle: 'Aermotor Windmill Repair | Midwest Windmill Company',
    metaDescription: 'Expert Aermotor windmill repair services by Midwest Windmill Company. We fix gearboxes, bearings, shafts, furling mechanisms, and oiling systems on all Aermotor models.',
    heroSubtitle: 'Expert Repair',
    heroImage: '/images/restored-heritage-windmill.png',
    schemaServiceType: 'Aermotor Windmill Repair',
    category: 'Repair & Restoration',
    overview: [
      'Midwest Windmill Company is the leading authority on Aermotor windmill repair in the United States. We have repaired and restored thousands of Aermotor windmills — from the classic 602 and 702 models to modern production units. Our team knows these machines inside and out.',
      'Common Aermotor repair issues include worn bearings, damaged gears, bent shafts, malfunctioning furling mechanisms, and faulty oiling systems. The 612 model in particular has a known weakness in its oiling circuit that can cause the motor to run dry, leading to bearing failure and case damage.',
      'Whether your Aermotor has storm damage, is leaking oil, making unusual noises, or has simply stopped turning, Midwest Windmill Company can diagnose and repair the problem. We use genuine Aermotor-compatible parts and American-made components — no cheap imports.'
    ],
    features: [
      { title: 'All Aermotor Models', desc: 'We repair 602, 612, 702, and all other Aermotor models.' },
      { title: 'Gearbox Repair', desc: 'Complete gearbox disassembly, inspection, and rebuild.' },
      { title: 'Bearing Replacement', desc: 'Worn bearings replaced with quality American components.' },
      { title: 'Oiling System Fix', desc: 'Diagnose and repair oiling circuit failures and oil leaks.' },
      { title: 'Furling Mechanism', desc: 'Restore proper high-wind protection and brake function.' },
      { title: 'Storm Damage', desc: 'Bent blades, damaged vanes, and structural repairs.' },
    ],
    process: [
      { step: 'Diagnosis', description: 'We inspect the windmill to identify all mechanical issues and worn components.' },
      { step: 'Repair Plan', description: 'We provide a detailed repair quote covering parts and labor.' },
      { step: 'On-Site Repair', description: 'Our technicians perform repairs on your tower or lower the head for shop-level work.' },
      { step: 'Testing', description: 'The windmill is tested under operating conditions before we leave.' },
    ],
    faqs: [
      { question: 'Can old Aermotor windmills be repaired?', answer: 'Yes. Midwest Windmill Company specializes in repairing Aermotor windmills of any age, including models built over 100 years ago. We have access to genuine replacement parts and the expertise to rebuild gearboxes, replace bearings, and restore full mechanical function.' },
      { question: 'What oil should I use in my Aermotor windmill?', answer: 'Aermotor windmills require a thin, non-detergent 10-weight oil. Detergent oils cause dirt to remain suspended and can plug the small oil passageways inside the gearbox. Midwest Windmill Company recommends changing the oil annually during your yearly maintenance inspection.' },
      { question: 'Why is my Aermotor windmill making noise?', answer: 'Unusual sounds from an Aermotor windmill — squealing, grinding, or clicking — typically indicate worn bearings, low oil, or gear damage. Midwest Windmill Company recommends stopping the windmill immediately and scheduling a repair inspection to prevent further damage.' },
      { question: 'How much does Aermotor windmill repair cost?', answer: 'Repair costs vary based on the issue. Simple bearing replacements and oil changes may cost a few hundred dollars. Full gearbox rebuilds or storm damage repairs can range from $1,000 to $5,000+. Contact Midwest Windmill Company for a free diagnostic consultation.' },
    ],
  },
  {
    slug: 'windmill-restoration-services',
    h1: 'Windmill Restoration Services',
    metaTitle: 'Windmill Restoration Services | Midwest Windmill Company',
    metaDescription: 'Professional vintage windmill restoration by Midwest Windmill Company. We restore heritage windmills to full working condition with authentic American-made parts.',
    heroSubtitle: 'Heritage Restoration',
    heroImage: '/images/master-craftsman-restoration.png',
    schemaServiceType: 'Windmill Restoration',
    category: 'Repair & Restoration',
    overview: [
      'Midwest Windmill Company has restored thousands of vintage windmills across the United States, bringing century-old machines back to full working condition. Our restoration process preserves the heritage character of each windmill while replacing worn components with quality American-made parts.',
      'A complete windmill restoration involves disassembling the entire unit — wheel, gearbox, tail vane, and tower — then sandblasting, inspecting, repairing, and painting every component. Worn gears, bearings, and shafts are replaced. Damaged blades and vanes are rebuilt. Towers are straightened, reinforced, and refinished.',
      'Whether your goal is a fully functional pumping windmill or a beautifully restored decorative piece, Midwest Windmill Company delivers museum-quality restoration work that honors the American heritage of these iconic machines.'
    ],
    features: [
      { title: 'Full Disassembly', desc: 'Every component removed, inspected, and documented.' },
      { title: 'Sandblasting & Paint', desc: 'Professional surface prep and period-correct finishing.' },
      { title: 'Mechanical Rebuild', desc: 'Gearbox, bearings, shafts, and pump mechanism restored.' },
      { title: 'Blade & Vane Repair', desc: 'Damaged or missing wheel sections and tail vanes rebuilt.' },
      { title: 'Tower Restoration', desc: 'Straightening, reinforcement, and refinishing of steel towers.' },
      { title: 'Functional or Display', desc: 'Restored to pump water or as a heritage display piece.' },
    ],
    process: [
      { step: 'Assessment', description: 'We evaluate the windmill\'s condition and document all components.' },
      { step: 'Disassembly', description: 'The windmill is carefully taken apart, with every piece photographed and cataloged.' },
      { step: 'Restoration', description: 'Each component is cleaned, repaired or replaced, and refinished.' },
      { step: 'Reassembly & Install', description: 'The fully restored windmill is assembled and erected on your property.' },
    ],
    faqs: [
      { question: 'How much does windmill restoration cost?', answer: 'Windmill restoration costs from Midwest Windmill Company typically range from $3,000 to $15,000+ depending on the windmill\'s condition, size, and whether the goal is a functional or decorative restoration. We provide detailed quotes after inspecting the unit.' },
      { question: 'Can a windmill that hasn\'t run in 50 years be restored?', answer: 'Yes. Midwest Windmill Company has restored windmills that sat dormant for decades. Even heavily rusted and damaged windmills can be brought back to working condition with proper restoration techniques and quality replacement parts.' },
      { question: 'Do you restore non-Aermotor windmills?', answer: 'Yes. While Aermotor is the most common brand we restore, Midwest Windmill Company also restores Dempster, Baker, Fairbury, Star, and other vintage American windmill brands. Our team has experience with nearly every windmill manufacturer.' },
    ],
  },
  {
    slug: 'aermotor-windmill-parts-supplies',
    h1: 'Aermotor Windmill Parts & Supplies',
    metaTitle: 'Aermotor Windmill Parts & Supplies | Midwest Windmill Company',
    metaDescription: 'American-made Aermotor windmill replacement parts — bearings, gears, leathers, vane springs, wheel bands, and more. Shipped nationwide by Midwest Windmill Company.',
    heroSubtitle: 'Genuine Parts',
    heroImage: '/images/aermotor-replacement-parts.png',
    schemaServiceType: 'Windmill Parts Supply',
    category: 'Parts & Décor',
    overview: [
      'Midwest Windmill Company is the nation\'s top supplier of Aermotor windmill replacement parts and accessories. Every part we sell is American-made, heavy-grade steel — no cheap imports. We ship directly to your door anywhere in the United States.',
      'We carry a comprehensive inventory of parts for the most common Aermotor models including the 602, 612, and 702 series. Our stock includes bearing kits, leathers, pump cylinders, vane springs, wheel bands, pump pole connectors, oil seals, tower clamps, loop steps, and complete wheel assemblies.',
      'If you\'re doing your own windmill repair or maintenance, we can help identify the exact parts you need. We maintain detailed parts diagrams for Aermotor 602 and 702 models and can walk you through identification over the phone.'
    ],
    features: [
      { title: 'Bearing Kits', desc: 'Complete bearing replacement sets for all Aermotor models.' },
      { title: 'Pump Components', desc: 'Leathers, cylinders, pump rods, and plungers.' },
      { title: 'Wheel Parts', desc: 'Blades, wheel bands, spokes, and complete wheel assemblies.' },
      { title: 'Gearbox Parts', desc: 'Gears, shafts, oil seals, and gaskets.' },
      { title: 'Tower Hardware', desc: 'Clamps, loop steps, mast pipes, and structural bolts.' },
      { title: 'Vane & Accessories', desc: 'Tail vanes, vane springs, and custom Chicago-lettered vanes.' },
    ],
    process: [
      { step: 'Identify Your Model', description: 'Check the letter code on the front of your Aermotor to identify the model and size.' },
      { step: 'Contact Us', description: 'Call or email with your model number and the parts you need.' },
      { step: 'We Ship It', description: 'Parts are packaged and shipped directly to your door.' },
      { step: 'DIY or Pro Install', description: 'Install yourself or schedule professional installation.' },
    ],
    faqs: [
      { question: 'Where can I buy Aermotor windmill parts?', answer: 'Midwest Windmill Company is the nation\'s leading supplier of American-made Aermotor windmill replacement parts. We carry parts for 602, 612, and 702 models and ship directly to customers across all 50 states. Call 660-341-8951 or visit our website to order.' },
      { question: 'Are Aermotor windmill parts still being made?', answer: 'Yes. The Aermotor Windmill Company still manufactures windmills and genuine parts. Midwest Windmill Company stocks both genuine Aermotor parts and high-quality American-made compatible parts for older models.' },
      { question: 'How do I identify what Aermotor model I have?', answer: 'The letter code on the front of the windmill head identifies the model and size. The location printed on the tail vane (such as "Chicago") can help date the production era. Midwest Windmill Company can help you identify your model over the phone — just describe what you see or send us photos.' },
    ],
  },
  {
    slug: 'windmill-gearbox-rebuild-repair',
    h1: 'Windmill Gearbox Rebuild & Repair',
    metaTitle: 'Windmill Gearbox Rebuild & Repair | Midwest Windmill Company',
    metaDescription: 'Expert windmill gearbox rebuilds by Midwest Windmill Company. We disassemble, inspect, and rebuild Aermotor and vintage windmill gearboxes with American-made parts.',
    heroSubtitle: 'Precision Rebuilds',
    heroImage: '/images/heritage-craftsman-hands.png',
    schemaServiceType: 'Windmill Gearbox Repair',
    category: 'Repair & Restoration',
    overview: [
      'The gearbox is the heart of every windmill — it converts the wheel\'s rotational energy into the up-and-down pumping stroke that draws water. Midwest Windmill Company specializes in complete gearbox disassembly, inspection, and rebuild services for Aermotor and other vintage windmill brands.',
      'Common gearbox issues include worn gears, damaged bearings, bent crankshafts, failed oil seals, and case damage from running dry of oil. The Aermotor 612 model is particularly prone to oiling system failures that can cause catastrophic internal damage if not caught early.',
      'Our rebuild process includes complete disassembly, sandblasting the case and all internal parts, inspection of every gear tooth and bearing surface, replacement of worn components, and reassembly with proper tolerances and fresh lubrication.'
    ],
    features: [
      { title: 'Complete Disassembly', desc: 'Every gear, bearing, shaft, and seal removed and inspected.' },
      { title: 'Gear Inspection', desc: 'Each gear tooth checked for wear, pitting, and proper mesh.' },
      { title: 'Bearing Replacement', desc: 'Worn ball bearings or babbitt bearings replaced.' },
      { title: 'Case Repair', desc: 'Cracked or damaged gearbox cases repaired or replaced.' },
      { title: 'Oil System Restore', desc: 'Oiling circuits cleaned and oil seals replaced.' },
      { title: 'Tested Before Return', desc: 'Every rebuilt gearbox tested for smooth operation.' },
    ],
    process: [
      { step: 'Removal', description: 'The gearbox head is removed from the tower and transported to our shop.' },
      { step: 'Teardown', description: 'Complete disassembly with every part documented and photographed.' },
      { step: 'Rebuild', description: 'Worn parts replaced, surfaces refinished, and unit reassembled to spec.' },
      { step: 'Reinstallation', description: 'The rebuilt gearbox is mounted back on your tower and tested.' },
    ],
    faqs: [
      { question: 'How do I know if my windmill gearbox needs a rebuild?', answer: 'Signs that your windmill gearbox needs a rebuild include grinding or clicking noises, oil leaking from the case, the wheel turning but not pumping, or visible metal shavings in the oil. Midwest Windmill Company recommends an immediate inspection if you notice any of these symptoms.' },
      { question: 'Can a windmill gearbox that ran dry of oil be repaired?', answer: 'In many cases, yes. Midwest Windmill Company has successfully rebuilt gearboxes that suffered oil starvation damage, including bearing replacement, shaft machining, and even case casting repairs. The feasibility depends on the extent of the damage.' },
      { question: 'How long does a gearbox rebuild take?', answer: 'A typical windmill gearbox rebuild by Midwest Windmill Company takes 1–3 weeks depending on parts availability and the extent of damage. We provide an estimated timeline after initial inspection.' },
    ],
  },
  {
    slug: 'windmill-tower-construction-replacement',
    h1: 'Windmill Tower Construction & Replacement',
    metaTitle: 'Windmill Tower Construction & Replacement | Midwest Windmill Company',
    metaDescription: 'Steel windmill tower construction, replacement, and repair by Midwest Windmill Company. Custom tower heights from 21ft to 40ft+ with concrete foundation anchoring.',
    heroSubtitle: 'Steel Towers',
    heroImage: '/images/windmill-8ft-40ft.png',
    schemaServiceType: 'Windmill Tower Construction',
    category: 'Sales & Installation',
    overview: [
      'Midwest Windmill Company builds and installs steel windmill towers in heights from 21 feet to 40+ feet. A properly constructed tower is critical to windmill performance — the wheel must sit high enough above surrounding obstructions to catch consistent wind.',
      'Our tower construction process involves assembling the tower on the ground, bolting all sections together, then raising the completed tower into position and anchoring it to a concrete foundation. We use heavy-grade American steel and ensure every tower is plumb and level before mounting the wheel assembly.',
      'We also replace deteriorated, leaning, or storm-damaged towers on existing windmills. If your current tower is bent, rusted through, or no longer structurally sound, we can engineer and install a replacement tower matched to your existing wheel assembly.'
    ],
    features: [
      { title: '21ft to 40ft+', desc: 'Standard and custom tower heights available.' },
      { title: 'American Steel', desc: 'Heavy-gauge galvanized steel construction.' },
      { title: 'Concrete Foundation', desc: 'Proper anchoring with poured concrete base.' },
      { title: 'Tower Replacement', desc: 'Remove damaged towers and install new.' },
      { title: 'Straightening', desc: 'Leaning towers corrected and reinforced.' },
      { title: 'Height Assessment', desc: 'Tower height optimized for your wind conditions.' },
    ],
    process: [
      { step: 'Site Survey', description: 'We assess wind conditions, obstructions, and optimal tower height.' },
      { step: 'Foundation', description: 'Concrete foundation poured and cured for tower anchoring.' },
      { step: 'Assembly', description: 'Tower assembled on the ground in sections.' },
      { step: 'Raising', description: 'Tower raised into position with specialized rigging equipment.' },
    ],
    faqs: [
      { question: 'How tall should a windmill tower be?', answer: 'Your windmill tower should place the wheel at least 25 feet above any obstructions within a 150-foot radius. In open farmland, a 21–33 foot tower is typically sufficient. In wooded or hilly areas, Midwest Windmill Company may recommend 40+ foot towers for consistent wind exposure.' },
      { question: 'Can a leaning windmill tower be fixed?', answer: 'Yes. Midwest Windmill Company can straighten and reinforce leaning towers in many cases. If the tower is too severely damaged or corroded, we recommend a complete tower replacement to ensure structural safety.' },
      { question: 'How is a windmill tower anchored?', answer: 'Every tower installed by Midwest Windmill Company is anchored to a poured concrete foundation. The tower legs are bolted into the concrete pad, ensuring stability in high winds and preventing settling or shifting over time.' },
    ],
  },
  {
    slug: 'windmill-relocation-services',
    h1: 'Windmill Relocation Services',
    metaTitle: 'Windmill Relocation Services | Midwest Windmill Company',
    metaDescription: 'Professional windmill disassembly, transport, and reinstallation by Midwest Windmill Company. We relocate windmills across the United States.',
    heroSubtitle: 'Professional Relocation',
    heroImage: '/images/windmill_parts_logistics.png',
    schemaServiceType: 'Windmill Relocation',
    category: 'Consulting',
    overview: [
      'Midwest Windmill Company provides professional windmill relocation services for customers who need to move an existing windmill to a new property or a better location on their current land. We handle the complete process — disassembly, transport, and reinstallation.',
      'Relocating a windmill is a complex operation that requires proper rigging, structural knowledge, and experience with these machines. Improper disassembly can damage the gearbox, bend blades, or compromise the tower. Our crew has moved hundreds of windmills safely across the country.',
      'We also purchase, disassemble, and relocate vintage windmills from abandoned farms and properties, giving them a second life on new homesteads, ranches, and estates.'
    ],
    features: [
      { title: 'Full Disassembly', desc: 'Safe removal of wheel, gearbox, and tower.' },
      { title: 'Nationwide Transport', desc: 'Windmill shipped to any location in the US.' },
      { title: 'New Foundation', desc: 'Concrete pad poured at the new location.' },
      { title: 'Reassembly', desc: 'Tower erected and wheel mounted at the new site.' },
      { title: 'Inspection & Repair', desc: 'Components inspected and repaired during relocation.' },
      { title: 'Vintage Salvage', desc: 'We rescue and relocate abandoned windmills.' },
    ],
    process: [
      { step: 'Evaluation', description: 'We assess the windmill and plan the disassembly sequence.' },
      { step: 'Disassembly', description: 'Wheel, head, and tower carefully taken down and prepared for transport.' },
      { step: 'Transport', description: 'Components secured and shipped to the new location.' },
      { step: 'Reinstallation', description: 'Foundation poured, tower raised, and windmill reassembled.' },
    ],
    faqs: [
      { question: 'Can you move a windmill to a different property?', answer: 'Yes. Midwest Windmill Company provides full windmill relocation services including disassembly at the original site, transport to the new property, and complete reinstallation on a new foundation. We relocate windmills anywhere in the United States.' },
      { question: 'How much does it cost to relocate a windmill?', answer: 'Windmill relocation costs from Midwest Windmill Company depend on the windmill size, transport distance, and whether repairs are needed during the move. Contact us for a detailed relocation quote based on your specific situation.' },
      { question: 'Do you buy old windmills from abandoned properties?', answer: 'Yes. Midwest Windmill Company regularly purchases and salvages vintage windmills from abandoned farms and properties. If you have a windmill you\'d like to sell, contact us with photos and your location.' },
    ],
  },
  {
    slug: 'windmill-annual-maintenance-oiling',
    h1: 'Windmill Annual Maintenance & Oiling',
    metaTitle: 'Windmill Annual Maintenance & Oiling | Midwest Windmill Company',
    metaDescription: 'Annual windmill maintenance, oil changes, and inspection services by Midwest Windmill Company. Keep your windmill running reliably for decades.',
    heroSubtitle: 'Preventive Care',
    heroImage: '/images/mark-lookalike-craftsman.png',
    schemaServiceType: 'Windmill Maintenance',
    category: 'Repair & Restoration',
    overview: [
      'Midwest Windmill Company provides annual maintenance and oiling services that keep your windmill running reliably for decades. A windmill is a remarkably simple machine, but it does require yearly attention to prevent costly repairs down the road.',
      'Our annual maintenance service includes a complete oil change using proper non-detergent 10-weight oil, inspection of all nuts and bolts for tightness, checking the furling mechanism and brake, examining the wheel for bent or loose blades, and verifying pump stroke and water output.',
      'Most windmill problems are preventable with proper annual maintenance. A yearly visit from Midwest Windmill Company costs far less than an emergency repair call — and ensures your windmill continues providing water year after year.'
    ],
    features: [
      { title: 'Annual Oil Change', desc: 'Drain old oil and refill with proper non-detergent 10-weight.' },
      { title: 'Hardware Inspection', desc: 'All tower and head bolts checked for tightness.' },
      { title: 'Brake & Furling Check', desc: 'High-wind protection mechanisms verified.' },
      { title: 'Wheel Inspection', desc: 'Blades checked for damage, looseness, or bending.' },
      { title: 'Pump Performance', desc: 'Stroke and output tested for proper function.' },
      { title: 'Written Report', desc: 'Detailed condition report provided after every visit.' },
    ],
    process: [
      { step: 'Schedule Service', description: 'Contact us to schedule your annual maintenance visit.' },
      { step: 'On-Site Inspection', description: 'Our technician climbs the tower and inspects every system.' },
      { step: 'Oil Change & Adjustments', description: 'Old oil drained, fresh oil added, and adjustments made.' },
      { step: 'Report & Recommendations', description: 'You receive a detailed condition report with any recommended repairs.' },
    ],
    faqs: [
      { question: 'How often should a windmill be serviced?', answer: 'Midwest Windmill Company recommends annual maintenance and oiling for every windmill, performed once per year. This yearly service is the single most important thing you can do to ensure your windmill lasts for decades.' },
      { question: 'What kind of oil does a windmill use?', answer: 'Windmills require a thin, non-detergent 10-weight oil. Do not use detergent motor oil — detergent oils keep dirt particles suspended, which can plug the small oil passageways inside the gearbox. Midwest Windmill Company uses and recommends proper non-detergent oil for all windmill services.' },
      { question: 'What happens if I don\'t oil my windmill?', answer: 'A windmill that runs without oil will rapidly destroy its bearings and gears. The gearbox generates significant heat and friction during operation, and without proper lubrication, metal-on-metal contact causes catastrophic wear. Midwest Windmill Company has seen windmills destroyed in a single season from lack of oiling.' },
    ],
  },
  {
    slug: 'windmill-decorative-wall-art-yard-art',
    h1: 'Windmill Decorative Wall Art & Yard Art',
    metaTitle: 'Windmill Decorative Wall Art & Yard Art | Midwest Windmill Company',
    metaDescription: 'Authentic windmill fan wheels and vanes as premium wall art, yard art, and venue decor. Half fans from $660, full wheels from $1,300, complete wheel & vane packages up to $14,500.',
    heroSubtitle: 'Decorative Art',
    heroImage: '/images/windmill-decor-wedding-venue.png',
    schemaServiceType: 'Windmill Decorative Art',
    category: 'Parts & Décor',
    overview: [
      'Midwest Windmill Company crafts authentic windmill fan wheels and vanes as premium decorative art for interiors, exteriors, and commercial venues. From high-end wedding venues to luxury home interiors, our windmill décor brings heritage character to any space.',
      'We offer full wheels, half fans, complete wheel-and-vane sets, and standalone vanes in sizes from 6 feet to 16 feet. Every piece is built or restored with authentic American windmill components — not mass-produced decorative imitations.',
      'Our professional installation team handles both interior wall mounts and exterior displays, including structural assessment, mounting hardware, and white-glove installation. Half fan wall art starts at $660, full wheels from $1,300, and complete wheel and vane packages range from $2,400 to $14,500 depending on size and finish.'
    ],
    features: [
      { title: 'Full Fan Wall Mount', desc: 'Complete windmill wheel as a dramatic wall centerpiece.' },
      { title: 'Half Fan Art', desc: 'Semicircular half-wheel perfect above mantels and entryways.' },
      { title: 'Yard Art Display', desc: 'Full wheel on decorative stand for gardens and courtyards.' },
      { title: 'Venue Installation', desc: 'Wedding venues, restaurants, and commercial spaces.' },
      { title: '6ft to 16ft', desc: 'Sizes ranging from accent pieces to statement installations.' },
      { title: '$660 – $14,500', desc: 'Half fans from $660, full wheels from $1,300, complete wheel & vane packages scaling by size.' },
    ],
    process: [
      { step: 'Design Consultation', description: 'We discuss your space, style, and size requirements.' },
      { step: 'Piece Selection', description: 'Choose between full fan, half fan, wheel-and-vane, or standalone vane.' },
      { step: 'Custom Finishing', description: 'Patina, powder-coat, or custom paint tailored to your palette.' },
      { step: 'Professional Install', description: 'White-glove mounting with structural assessment included.' },
    ],
    faqs: [
      { question: 'Can a windmill fan be mounted on a wall?', answer: 'Yes. Midwest Windmill Company professionally mounts windmill fan wheels on interior and exterior walls as dramatic art pieces. We handle the structural assessment and use heavy-duty mounting hardware designed for the weight of authentic windmill components.' },
      { question: 'How much does decorative windmill wall art cost?', answer: 'Midwest Windmill Company offers half fan wall art starting at $660 for a 6-foot piece. Full wheels start at $1,300. Complete wheel and vane packages range from $2,400 for a 6-foot set up to $14,500 for a 16-foot installation. Pricing depends on size, finish, and installation complexity.' },
      { question: 'Do you install windmill decor in wedding venues?', answer: 'Yes. Midwest Windmill Company has installed decorative windmill wheels and vanes in wedding venues, restaurants, and luxury commercial spaces. A full windmill wheel mounted on a stone accent wall makes an unforgettable venue centerpiece.' },
    ],
  },
  {
    slug: 'windmill-hand-pump-installation',
    h1: 'Windmill Hand Pump Installation',
    metaTitle: 'Windmill Hand Pump Installation | Midwest Windmill Company',
    metaDescription: 'Windmill hand pump installation for wells by Midwest Windmill Company. Cylinder pumps, sucker rods, and plumbing connected to your windmill system.',
    heroSubtitle: 'Pump Systems',
    heroImage: '/images/aeration_farm_windmill.png',
    schemaServiceType: 'Windmill Hand Pump Installation',
    category: 'Water & Aeration',
    overview: [
      'Midwest Windmill Company installs the complete pumping mechanism that connects your windmill to your well — the cylinder pump, sucker rods, drop pipe, and all plumbing necessary to bring water to the surface.',
      'The hand pump system is the mechanical heart of a water-pumping windmill. A sealed cylinder with a plunger is lowered into the well, connected to the windmill via a long pump rod (sucker rod) that moves up and down with each revolution of the wheel, drawing water to the surface.',
      'Proper pump installation is critical. The cylinder must be set at the right depth, the sucker rod must be the correct length, and all joints must be watertight. Midwest Windmill Company handles every detail — from the foot valve at the bottom to the pump head at the top.'
    ],
    features: [
      { title: 'Cylinder Pump', desc: 'Proper-sized cylinder selected for your well depth and water needs.' },
      { title: 'Sucker Rod', desc: 'Fiberglass or steel pump rods cut to exact length.' },
      { title: 'Drop Pipe', desc: 'Two-inch galvanized piping from surface to cylinder.' },
      { title: 'Foot Valve', desc: 'Prevents water from draining back into the well.' },
      { title: 'Surface Plumbing', desc: 'Connection to storage tanks, troughs, or household plumbing.' },
      { title: 'Stroke Adjustment', desc: 'Pump stroke calibrated for maximum efficiency.' },
    ],
    process: [
      { step: 'Well Assessment', description: 'We measure well depth, casing size, and static water level.' },
      { step: 'Component Selection', description: 'Cylinder, rod, and piping sized for your specific well.' },
      { step: 'Installation', description: 'Foot valve, cylinder, drop pipe, and rod installed and connected.' },
      { step: 'Priming & Testing', description: 'System primed, stroke adjusted, and water output verified.' },
    ],
    faqs: [
      { question: 'What is a windmill hand pump?', answer: 'A windmill hand pump is the cylinder and rod mechanism inside the well that a windmill drives to draw water. The windmill\'s wheel turns, the gearbox converts rotation to vertical motion, and the sucker rod moves a plunger up and down inside a cylinder at the bottom of the well, forcing water upward.' },
      { question: 'Can a hand pump be added to an existing windmill?', answer: 'Yes. Midwest Windmill Company can install a new pump system on an existing windmill that doesn\'t currently have one, or replace a worn pump system. We handle all plumbing from the bottom of the well to the surface connection.' },
      { question: 'How do you prime a windmill pump?', answer: 'The drop pipe and cylinder should be filled with water (primed) before the windmill is engaged. Midwest Windmill Company primes all pump installations during the commissioning process to ensure immediate water delivery.' },
    ],
  },
  {
    slug: 'storm-damage-windmill-repair',
    h1: 'Storm Damage Windmill Repair',
    metaTitle: 'Storm Damage Windmill Repair | Midwest Windmill Company',
    metaDescription: 'Emergency storm damage windmill repair by Midwest Windmill Company. We repair bent blades, damaged towers, broken vanes, and structural damage from severe weather.',
    heroSubtitle: 'Storm Response',
    heroImage: '/images/hero_farm_windmill.png',
    schemaServiceType: 'Storm Damage Windmill Repair',
    category: 'Repair & Restoration',
    overview: [
      'Midwest Windmill Company provides storm damage windmill repair services for windmills damaged by severe weather events — high winds, tornadoes, ice storms, and lightning strikes. We respond promptly to get your windmill back in operation.',
      'Storm damage to windmills commonly includes bent or broken wheel blades, bent or snapped tail vanes, twisted tower sections, shifted foundations, damaged gearbox components from excessive vibration, and in severe cases, a collapsed tower.',
      'After a storm, do not attempt to operate a damaged windmill. Even if the wheel is still turning, internal damage may worsen with continued operation. Contact Midwest Windmill Company for a professional damage assessment before restarting any storm-damaged windmill.'
    ],
    features: [
      { title: 'Bent Blade Repair', desc: 'Straighten or replace storm-damaged wheel blades.' },
      { title: 'Vane Replacement', desc: 'Broken or bent tail vanes rebuilt or replaced.' },
      { title: 'Tower Repair', desc: 'Twisted or bent tower sections straightened or replaced.' },
      { title: 'Foundation Reset', desc: 'Shifted foundations re-leveled and re-anchored.' },
      { title: 'Gearbox Inspection', desc: 'Internal components checked for storm-related damage.' },
      { title: 'Insurance Documentation', desc: 'Detailed damage reports for insurance claims.' },
    ],
    process: [
      { step: 'Emergency Contact', description: 'Call us immediately after storm damage — do not restart the windmill.' },
      { step: 'Damage Assessment', description: 'On-site inspection with detailed damage documentation.' },
      { step: 'Repair Plan', description: 'We provide a repair quote and insurance documentation.' },
      { step: 'Restoration', description: 'All damage repaired and windmill tested before handoff.' },
    ],
    faqs: [
      { question: 'What should I do if my windmill is damaged in a storm?', answer: 'Do not operate the windmill. Lock the brake lever and contact Midwest Windmill Company immediately for a professional damage assessment. Running a damaged windmill can cause further destruction to the gearbox and tower.' },
      { question: 'Does insurance cover windmill storm damage?', answer: 'Many rural property insurance policies cover windmill storm damage. Midwest Windmill Company provides detailed damage assessments and repair documentation formatted for insurance claims. Check with your insurance provider for specific coverage details.' },
      { question: 'Can a windmill survive a tornado?', answer: 'Windmills are remarkably resilient, but direct tornado strikes can cause significant damage. Midwest Windmill Company has repaired windmills after tornado events — in many cases, the tower survives and only the wheel and gearbox require repair or replacement.' },
    ],
  },
  {
    slug: 'windmill-consulting-site-assessment',
    h1: 'Windmill Consulting & Site Assessment',
    metaTitle: 'Windmill Consulting & Site Assessment | Midwest Windmill Company',
    metaDescription: 'Expert windmill consulting and property site assessments by Midwest Windmill Company. We evaluate wind conditions, well depth, and recommend the right windmill system.',
    heroSubtitle: 'Expert Guidance',
    heroImage: '/images/kansas.jpg',
    schemaServiceType: 'Windmill Consulting',
    category: 'Consulting',
    overview: [
      'Midwest Windmill Company offers expert consulting and site assessment services for property owners considering a windmill investment. We evaluate your property\'s wind conditions, terrain, well depth, water needs, and intended use to recommend the right system.',
      'Not every property is ideal for a windmill, and not every windmill is right for every purpose. Our consulting service helps you make an informed decision before committing to a purchase. We assess prevailing wind patterns, identify optimal tower placement, calculate required pump depth, and estimate expected water output.',
      'Whether you\'re a rancher looking to water livestock, a homeowner wanting an off-grid water supply, a pond owner battling algae, or a venue operator seeking stunning windmill décor, our consulting service ensures you get exactly the right solution.'
    ],
    features: [
      { title: 'Wind Assessment', desc: 'Evaluate prevailing wind patterns and speed at your location.' },
      { title: 'Well Evaluation', desc: 'Measure depth, casing size, and water table level.' },
      { title: 'System Recommendation', desc: 'The right wheel size, tower height, and pump system for your needs.' },
      { title: 'Site Planning', desc: 'Optimal placement to maximize wind exposure.' },
      { title: 'Budget Planning', desc: 'Detailed cost estimates for the recommended system.' },
      { title: 'Remote Consultations', desc: 'Phone consultations available for out-of-state customers.' },
    ],
    process: [
      { step: 'Initial Contact', description: 'Tell us about your property, goals, and budget.' },
      { step: 'Site Visit or Remote Review', description: 'On-site assessment or remote evaluation with photos and data.' },
      { step: 'Recommendation', description: 'Detailed system recommendation with sizing and cost.' },
      { step: 'Decision Support', description: 'We answer all questions until you\'re confident in your decision.' },
    ],
    faqs: [
      { question: 'How do I know if my property is good for a windmill?', answer: 'The key factors are consistent wind exposure and available well or water source. Midwest Windmill Company provides site assessments that evaluate your property\'s wind patterns, terrain, obstructions, and well conditions. Generally, properties with open exposure and average winds of 8+ mph are excellent candidates.' },
      { question: 'Is a windmill consultation free?', answer: 'Midwest Windmill Company offers free initial phone consultations. On-site assessments may have a travel fee depending on location. Contact us at 660-341-8951 to discuss your property and get started.' },
      { question: 'Can you consult remotely for out-of-state customers?', answer: 'Yes. Midwest Windmill Company provides remote consulting for customers across all 50 states. We can evaluate your property using photos, well data, and wind data you provide, and deliver a detailed system recommendation by phone or video call.' },
    ],
  },
];

export function getEntityBySlug(slug: string): ServiceEntity | undefined {
  return SERVICE_ENTITIES.find(e => e.slug === slug);
}
