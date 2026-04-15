import { BlogPost, Service, Review, GalleryItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'remodeling',
    title: 'Remodeling',
    slug: 'remodeling',
    description: 'Transforming DFW homes into modern masterpieces with precision craftsmanship and high-end finishes.',
    icon: 'Hammer',
    image: '/page-images/kitchen-4.jpg',
    features: ['Kitchen & Bath Overhauls', 'Full Home Renovations', 'Structural Modifications', 'Custom Cabinetry'],
    process: [
      { step: 'Consultation', description: 'We meet at your property to discuss your vision, budget, and timeline.' },
      { step: 'Design & Planning', description: 'Our team creates detailed blueprints and material selections.' },
      { step: 'Execution', description: 'Skilled craftsmen bring the design to life with daily site management.' },
      { step: 'Final Walkthrough', description: 'We ensure every detail meets our elite standards before handover.' }
    ],
    faqs: [
      { question: 'How long does a typical kitchen remodel take?', answer: 'Most full kitchen remodels take between 4 to 8 weeks depending on complexity.' },
      { question: 'Do you handle permits?', answer: 'Yes, we manage all necessary city permits and inspections in DFW.' }
    ]
  },
  {
    id: 'debris-removal',
    title: 'Debris Removal',
    slug: 'debris-removal',
    description: 'Professional, efficient removal of construction waste, storm damage, and unwanted clutter.',
    icon: 'Truck',
    image: '/page-images/rcs-debris-18-13-3.png',
    features: ['Construction Waste', 'Storm Cleanup', 'Estate Clear-outs', 'Appliance Disposal'],
    process: [
      { step: 'Assessment', description: 'We estimate the volume and type of debris to be removed.' },
      { step: 'Loading', description: 'Our crew handles all the heavy lifting and loading.' },
      { step: 'Responsible Disposal', description: 'We sort materials for recycling and proper landfill disposal.' }
    ],
    faqs: [
      { question: 'Do you take hazardous materials?', answer: 'We do not handle toxic chemicals or asbestos, but can refer you to specialists.' }
    ]
  },
  {
    id: 'demolition',
    title: 'Demolition',
    slug: 'demolition',
    description: 'Safe, controlled demolition services for residential and commercial structures.',
    icon: 'Bomb',
    image: '/page-images/rcs-demo-hammer.png',
    features: ['Interior Gutting', 'Shed & Garage Removal', 'Pool In-fills', 'Partial Demolition'],
    process: [
      { step: 'Safety Prep', description: 'Utility shut-offs and site securing.' },
      { step: 'Controlled Demo', description: 'Precision removal using specialized equipment.' },
      { step: 'Site Clearing', description: 'Complete removal of all demo materials.' }
    ],
    faqs: [
      { question: 'Is demolition loud and messy?', answer: 'It is, but we use dust suppression and noise-reduction techniques where possible.' }
    ]
  },
  {
    id: 'cleanup',
    title: 'Cleanup',
    slug: 'cleanup',
    description: 'Deep cleaning and restoration services for post-construction or neglected properties.',
    icon: 'Sparkles',
    image: '/page-images/clean-up-1.jpg',
    features: ['Post-Construction Clean', 'Hoarder House Restoration', 'Deep Sanitization', 'Exterior Power Washing'],
    process: [
      { step: 'Initial Scrape', description: 'Removal of large debris and dust.' },
      { step: 'Detail Clean', description: 'Sanitizing every surface from floor to ceiling.' },
      { step: 'Odor Removal', description: 'Advanced treatments for persistent smells.' }
    ],
    faqs: [
      { question: 'Do you handle hoarder situations?', answer: 'Yes, we specialize in compassionate and thorough hoarder house cleanups.' }
    ]
  },
  {
    id: 'squatter-removal',
    title: 'Squatter Removal',
    slug: 'squatter-removal',
    description: 'Comprehensive property recovery services including cleanup, securing, and restoration after unauthorized occupancy.',
    icon: 'ShieldAlert',
    image: '/page-images/squatter-house.png',
    features: ['Hazardous Waste Removal', 'Lock Replacement', 'Property Board-up', 'Damage Assessment'],
    process: [
      { step: 'Secure Site', description: 'Ensuring the property is legally vacant and secured.' },
      { step: 'Biohazard Removal', description: 'Safe disposal of needles, waste, and hazards.' },
      { step: 'Restoration', description: 'Repairing damage to make the property rentable again.' }
    ],
    faqs: [
      { question: 'Do you handle the legal eviction?', answer: 'No, we handle the physical cleanup and securing after the legal process is complete.' }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Surviving a Full Kitchen Gut in DFW',
    excerpt: 'A survival guide for homeowners living through a major renovation in the Dallas heat.',
    content: 'Living without a kitchen is tough. In DFW, where we love our home-cooked meals and hosting, it\'s even tougher. Whether you\'re planning a complete tear-down or a strategic overhaul, there\'s a lot to consider before the sledgehammers swing. This comprehensive guide will help you prepare mentally, logistically, and physically for the adventure of a full kitchen gut renovation in the heart of North Texas.',
    sections: [
      {
        heading: 'Setting Up Your Temporary Kitchen',
        text: 'The first thing most homeowners underestimate is how long they\'ll be without a working kitchen. A full gut in DFW typically takes six to ten weeks, and during that time you\'ll need a backup plan. Set up a temporary cooking station in your garage, dining room, or spare bedroom. Grab a folding table, a microwave, a toaster oven, and an electric skillet — these four items alone will keep you fed. Stock up on paper plates and disposable utensils to minimize dishwashing in a bathroom sink. If you have an outdoor grill, now is the time to become best friends with it. Texas evenings make outdoor cooking a genuine pleasure for about eight months of the year.'
      },
      {
        heading: 'Managing Dust and Debris',
        text: 'Demo day is exciting, but the dust cloud that follows is not. A full kitchen gut generates an enormous amount of debris — old cabinets, drywall, tile, and flooring all need to go. At RCS Remodeling, we seal off the kitchen area with heavy-duty plastic sheeting and run industrial air scrubbers to keep the rest of your home livable. We also lay protective floor runners from the kitchen to the exterior to prevent damage to your existing flooring. One tip: if you have central air, change your HVAC filters weekly during construction. The Dallas dust combined with demo dust will clog them fast, and a clogged filter means your AC works harder during those brutal July afternoons.',
        image: '/blog-images/nice-lean-room.png',
        imageAlt: 'Clean room after proper dust management'
      },
      {
        heading: 'Choosing the Right Materials for Texas Weather',
        text: 'DFW weather is hard on kitchens. Humidity fluctuates wildly between seasons, and if your home doesn\'t have perfect climate control, those fluctuations can warp wood, crack grout, and peel laminate. We recommend engineered hardwood or luxury vinyl plank for kitchen flooring — both handle humidity swings better than solid hardwood. For countertops, quartz has become the gold standard in DFW kitchens because it\'s non-porous, heat-resistant, and doesn\'t require the annual sealing that granite demands. Backsplash tile should be installed with a flexible thin-set to accommodate the slight expansion and contraction that happens in Texas homes.'
      },
      {
        heading: 'The Messy Middle Is Worth It',
        text: 'Around week three, every homeowner hits what we call the "messy middle." The old kitchen is demolished, the new framing is up, but nothing looks like a kitchen yet. Pipes are exposed, wires dangle from the ceiling, and you\'re questioning every decision you\'ve made. This is normal. The messy middle is simply the valley between destruction and creation. On the other side of it is a kitchen that will transform how you live in your home. Our clients in Terrell, Forney, and Dallas all say the same thing: the moment their new kitchen comes together, every inconvenience fades from memory. Trust the process, lean on your contractor (that\'s us), and keep your eyes on the finish line.',
        image: '/blog-images/wall-destruction.png',
        imageAlt: 'Mid-renovation kitchen demolition'
      },
      {
        heading: 'Budgeting Realistically',
        text: 'A full kitchen gut in DFW ranges from $35,000 to $85,000 depending on the size of the space, the quality of materials, and the complexity of the layout changes. Always budget an extra 15 to 20 percent for surprises — and in older homes in Terrell and East Dallas, surprises are almost guaranteed. Common findings include outdated wiring that doesn\'t meet current code, galvanized plumbing that needs replacing, or subfloor damage from old leaks that were never properly addressed. At RCS, we provide transparent, itemized estimates and update you immediately if we encounter anything unexpected. No hidden fees, no mysterious change orders — just honest communication from start to finish.'
      }
    ],
    date: 'March 1, 2026',
    author: 'RCS Team',
    category: 'Remodeling',
    image: '/blog-images/surviving-a-full-kitchen-gut-in-dfw.png'
  },
  {
    id: '2',
    title: 'The Hidden Costs of DIY Demolition',
    excerpt: 'Why swinging a sledgehammer yourself might cost you more in the long run.',
    content: 'It looks easy on TV, but hitting a load-bearing wall or a live gas line isn\'t "entertainment." Every year, thousands of DFW homeowners grab a sledgehammer thinking they\'ll save money on demolition. The reality is that amateur demo often leads to damaged structures, permit violations, and emergency contractor calls that cost far more than hiring a professional crew from the start.',
    sections: [
      {
        heading: 'Permits Most Homeowners Don\'t Know About',
        text: 'In most DFW municipalities — Dallas, Forney, Terrell, Mesquite, and beyond — you need a demolition permit for anything beyond cosmetic removal. Tearing out a non-load-bearing wall? You probably still need a permit. Removing a built-in bookcase that\'s attached to the framing? Permit. Ripping out a bathroom down to the studs? Absolutely a permit. The fines for unpermitted demo work in Dallas can range from $500 to $2,000 per violation, and they can stack. Even worse, unpermitted work can torpedo a future home sale. When the buyer\'s inspector sees structural modifications without permits on file, they either walk away or demand a massive price reduction. The $2,000 you saved on demo could cost you $20,000 at closing.'
      },
      {
        heading: 'The Dangers Hiding in Your Walls',
        text: 'Homes built before 1980 in DFW frequently contain asbestos in floor tiles, pipe insulation, popcorn ceilings, and even drywall joint compound. Lead paint is common in anything built before 1978. Without proper testing before demolition, a DIY demo project can release these hazardous materials into your home\'s air supply, putting your family at serious health risk. Professional demolition crews like RCS test for hazardous materials before swinging a single hammer. When we find asbestos or lead, we follow EPA and TCEQ guidelines for safe removal and disposal. This isn\'t expensive extra work — it\'s the bare minimum for protecting your family.',
        image: '/blog-images/wall-destruction.png',
        imageAlt: 'Professional wall demolition'
      },
      {
        heading: 'Structural Damage: The $10,000 Mistake',
        text: 'Load-bearing walls are the number one casualty of DIY demolition. A load-bearing wall holds up either the floor above it or the roof structure, and removing it without proper support causes immediate sagging and eventual collapse. We\'ve been called to DFW homes where a homeowner removed what they thought was a "simple partition wall," only to watch the ceiling bow three inches in 48 hours. The repair required a steel I-beam, temporary support walls during installation, new drywall, and structural engineering certification — totaling over $12,000. The original wall removal would have cost about $1,800 with a professional crew.'
      },
      {
        heading: 'Utility Lines: Gas, Water, and Electrical',
        text: 'Behind your drywall runs a network of electrical wiring, plumbing, and potentially gas lines. In older DFW homes, these don\'t always follow logical paths. We\'ve found electrical lines running diagonally, water lines routed through exterior walls without insulation, and gas lines that take unexpected detours through closets. A stud finder doesn\'t catch everything. At RCS, we use electronic leak detection, circuit tracers, and thermal imaging to map what\'s behind your walls before we touch them. One errant sledgehammer swing into a gas line can evacuate your entire block.',
        image: '/blog-images/empy-damaged-room.png',
        imageAlt: 'Room after careful professional demolition'
      },
      {
        heading: 'Disposal Costs Add Up Fast',
        text: 'Even if you manage the demolition safely, you still need to get rid of everything. A single room demo generates between one and three cubic yards of debris. A full bathroom gut can fill a 10-yard dumpster by itself. Dumpster rentals in DFW run $350 to $600 for a weekend, and that doesn\'t include landfill tipping fees for heavy materials like concrete and tile. Many homeowners end up making multiple trips to the dump in a pickup truck, spending full weekends hauling debris and paying per-load disposal fees. When you add up the dumpster rental, fuel, dump fees, and your time, the "savings" of DIY demo often evaporate entirely. RCS includes complete debris removal and responsible disposal in every demolition quote — one price, no surprises.'
      }
    ],
    date: 'Feb 25, 2026',
    author: 'RCS Team',
    category: 'Demolition',
    image: '/blog-images/diy-demolition-costs.png'
  },
  {
    id: '3',
    title: 'What to Do When You Inherit a Hoarder House',
    excerpt: 'A compassionate guide to clearing out a lifetime of belongings.',
    content: 'Inheriting a property filled with decades of accumulated belongings is one of the most emotionally and logistically overwhelming experiences a person can face. Whether it was a parent, grandparent, or relative, the sheer volume of stuff — combined with the grief of losing someone — can feel paralyzing. This guide walks you through the process from day one to move-in ready, with empathy and practical advice from the RCS team.',
    sections: [
      {
        heading: 'Understanding the Emotional Weight',
        text: 'Hoarding is a recognized mental health condition, and the home left behind reflects years of struggle. Before you start sorting, give yourself permission to feel overwhelmed. Many of our clients in the DFW area tell us they opened the front door, took one look, and immediately closed it again. That\'s okay. The first visit should be just that — a visit. Walk through, take photos, and leave. Don\'t try to start sorting on day one. Give yourself a week to process what you\'ve seen, and then come back with a plan. If the relationship with the deceased was complicated, consider speaking with a counselor who specializes in grief and hoarding-related trauma. The emotional cleanup is just as important as the physical one.'
      },
      {
        heading: 'Safety First: What to Watch For',
        text: 'Hoarder houses present genuine safety hazards that need to be assessed before any cleanup begins. Structural concerns are common — years of heavy accumulation can stress floors and shelving beyond their rated capacity. We\'ve seen second-floor rooms in DFW homes where the joists were visibly bowed from the weight of stacked boxes and furniture. Biological hazards are another concern: rodent droppings, mold growth (especially in DFW\'s humid months), expired food, and pet waste are all common findings. In extreme cases, we\'ve encountered homes where the HVAC system hadn\'t run in years, meaning no air filtration was happening. Before entering for an extended cleanup, ensure the home has ventilation and wear N95 masks minimum.',
        image: '/blog-images/hoarders.png',
        imageAlt: 'Hoarder house requiring professional cleanup'
      },
      {
        heading: 'The Three-Pass Sorting System',
        text: 'We teach our clients a three-pass system that makes sorting manageable. Pass one is trash — anything obviously garbage, expired, broken beyond repair, or hazardous goes immediately. This usually accounts for 60 to 70 percent of the volume and dramatically opens up the space. Pass two is donate and sell — functional items, clothing in good condition, furniture that just needs cleaning, and household goods. Partner with local DFW charities like Goodwill, Salvation Army, or Genesis Women\'s Shelter for pickups. Pass three is keep and evaluate — family photos, documents, jewelry, collectibles that might have value, and sentimental items. This pass should be done slowly and thoughtfully. Box these items and take them home for review when you\'re not standing in the middle of the chaos.'
      },
      {
        heading: 'When to Call in the Professionals',
        text: 'If the accumulation is severe — rooms you can\'t walk through, biological hazards, structural concerns, or simply a volume that would take you months to handle alone — professional cleanup is the right call. RCS Remodeling specializes in hoarder house restoration throughout DFW. Our crews arrive with dumpsters, sorting stations, and the manpower to clear a home in days rather than months. We work respectfully and efficiently. We set aside anything that looks personal or valuable for your review, and we dispose of the rest responsibly. After the cleanout, we can handle any necessary repairs — from damaged drywall and flooring to full-room renovations that transform the space.',
        image: '/blog-images/packaged-garbage.png',
        imageAlt: 'Organized debris removal during hoarder house cleanup'
      },
      {
        heading: 'Restoring the Property',
        text: 'Once the contents are cleared, the real condition of the property reveals itself. In most hoarder houses, you\'ll find carpet that needs replacing, walls that need repainting, and fixtures that need updating. Odor removal is almost always necessary — years of stagnant air, dust, and biological material leave a smell that surface cleaning can\'t address. RCS uses commercial-grade ozone generators and thermal fogging to neutralize deep-seated odors. We then assess flooring, walls, plumbing, and electrical to bring the home back to a livable standard. Many of our clients in Terrell and East Dallas have turned inherited hoarder houses into beautiful rental properties or comfortable family homes after our restoration work.'
      }
    ],
    date: 'Feb 18, 2026',
    author: 'RCS Team',
    category: 'Cleanup',
    image: '/blog-images/hoarders.png'
  },
  {
    id: '4',
    title: 'Top 5 Remodeling Trends in Dallas for 2026',
    excerpt: 'From smart kitchens to "Texas Modern" aesthetics.',
    content: 'Dallas style is evolving rapidly, and 2026 is shaping up to be a landmark year for residential design in North Texas. The DFW metroplex has always had its own architectural identity — a blend of Southern warmth, Western ruggedness, and cosmopolitan sophistication. This year, we\'re seeing that identity crystallize into five distinct trends that are transforming homes from Terrell to Highland Park.',
    sections: [
      {
        heading: '1. Dark Obsidian Kitchens',
        text: 'The all-white kitchen had a good run, but Dallas homeowners are ready for drama. Dark obsidian cabinetry — matte black, deep charcoal, and espresso tones — is dominating remodeling requests in 2026. These dark palettes create a striking, sophisticated look that pairs beautifully with the warm brass and gold hardware that\'s also trending. The key to pulling off a dark kitchen in DFW is lighting. With the intense Texas sun pouring through windows during the day, dark cabinets absorb light beautifully. But you need layered artificial lighting for evening use — under-cabinet LEDs, pendant fixtures over islands, and recessed ceiling lights that can be dimmed for entertaining. We\'re installing smart lighting systems in nearly every kitchen remodel this year, allowing homeowners to control the mood from their phones.'
      },
      {
        heading: '2. Integrated Smart Home Technology',
        text: 'DFW has always been an early adopter market for technology, and 2026 is seeing smart home features move from luxury add-ons to standard expectations. We\'re talking touchscreen-controlled shower systems, refrigerators with internal cameras you can check from the grocery store, and whole-home automation systems that learn your daily routine and adjust lighting, temperature, and even window shades automatically. The biggest game-changer we\'re installing is smart water management — leak detection sensors at every fixture, automatic shut-off systems that protect against flooding while you\'re at work, and flow monitors that flag unusual usage patterns. In a region where a single burst pipe during a cold snap can cause $50,000 in damage, this technology pays for itself.',
        image: '/blog-images/nice-lean-room.png',
        imageAlt: 'Modern clean living space with integrated design'
      },
      {
        heading: '3. Indoor-Outdoor Living Spaces',
        text: 'Texans live outside, and 2026 is erasing the line between indoor and outdoor spaces entirely. The hottest remodeling request in DFW right now is the "disappearing wall" — full-width folding or sliding glass door systems that open a living room or kitchen directly onto a covered patio. These systems create 16 to 24 feet of uninterrupted opening that makes your backyard feel like an extension of your living room. On the outdoor side, we\'re building fully equipped outdoor kitchens with built-in grills, pizza ovens, beer taps, and weatherproof entertainment systems. Covered structures with ceiling fans and misting systems make these spaces usable even in July and August. The investment typically ranges from $25,000 to $60,000, but in the DFW real estate market, outdoor living spaces consistently deliver 70 to 80 percent ROI at resale.'
      },
      {
        heading: '4. Spa-Inspired Primary Bathrooms',
        text: 'The pandemic permanently changed how DFW homeowners think about bathrooms. The primary bathroom is no longer a utilitarian space — it\'s a personal retreat. We\'re seeing massive freestanding soaking tubs, walk-in rain showers with multiple body jets, heated floors, and towel warmers in homes across every price point. The materials of choice in 2026 are large-format porcelain slabs that mimic natural stone without the maintenance, matte black fixtures, and frameless glass enclosures. Floating vanities with integrated LED lighting create a spa-like ambiance, and built-in Bluetooth speakers mean you can play your relaxation playlist without bringing a phone into the steam.'
      },
      {
        heading: '5. The "Texas Modern" Aesthetic',
        text: 'Texas Modern is the defining design language of DFW in 2026. It combines clean, contemporary lines with rustic Texas materials — think smooth concrete floors paired with reclaimed barn wood accent walls, or sleek flat-panel cabinetry next to a rough-hewn limestone fireplace. The color palette is warm neutrals — creamy whites, warm grays, sandy tans — punctuated by bold accents in burnt orange, deep terracotta, or matte black. This isn\'t the cold minimalism of coastal modern design. Texas Modern is warm, welcoming, and distinctly rooted in the landscape and culture of North Texas. At RCS, we\'re helping homeowners achieve this look through strategic material selection and design guidance that honors the character of their existing homes while pushing them into the future.'
      }
    ],
    date: 'Feb 10, 2026',
    author: 'RCS Team',
    category: 'Design',
    image: '/blog-images/top-5-remodeling-trends-in-dallas-for-2026.png'
  },
  {
    id: '5',
    title: 'Securing Your Property After Squatters',
    excerpt: 'The essential checklist for DFW property owners.',
    content: 'Squatter situations in DFW have surged in recent years, affecting everything from vacant rental homes in South Dallas to inherited properties in Terrell and investment units in Mesquite. Once the legal eviction process is complete, the real work begins: assessing damage, removing hazardous materials, securing the property, and restoring it to a rentable or livable condition. This comprehensive guide covers every step of the process.',
    sections: [
      {
        heading: 'Assessing the Damage',
        text: 'After squatters vacate — whether voluntarily or through legal eviction — the first step is a thorough damage assessment. Do not rush through the property. Take your time, document everything with photos and video, and create a room-by-room inventory of damage. Common findings include holes in drywall, ripped-out copper plumbing, destroyed HVAC systems, broken windows, damaged doors and locks, graffiti, and removed fixtures. In severe cases, squatters have torn out wiring, removed appliances, and caused water damage by leaving faucets running or tampering with supply lines. Document everything for your insurance claim — most property insurance policies cover vandalism, but you need thorough documentation to support the claim.',
        image: '/blog-images/destroyed-squatters-home.png',
        imageAlt: 'Property damage from squatter occupancy'
      },
      {
        heading: 'Handling Biohazards',
        text: 'Squatter-occupied properties frequently contain biohazardous materials that require professional handling. Needles, human waste, animal remains, and chemical residue from drug manufacturing are unfortunately common findings. These are not items you should handle yourself. RCS has trained biohazard remediation crews that follow OSHA bloodborne pathogen standards. We wear full PPE, use hospital-grade disinfectants, and dispose of all hazardous materials through licensed medical waste facilities. After the biohazard materials are removed, we perform deep sanitization of all surfaces using a combination of chemical cleaning and UV-C sterilization. This step is non-negotiable — both for the health of future occupants and for landlord liability protection.',
        image: '/blog-images/filthy-squatters-house.png',
        imageAlt: 'Squatter-damaged property requiring biohazard cleanup'
      },
      {
        heading: 'Physical Security Upgrades',
        text: 'Once the property is cleaned and restored, you need to ensure it doesn\'t happen again. Standard residential locks are not sufficient for vacant properties. We recommend commercial-grade deadbolts on all exterior doors, security bar reinforcements on sliding glass doors, window security film on ground-floor windows, and battery-powered security cameras with cellular connection (so they work even without active utility service). For extended vacancies, we install steel security doors and window covers that are bolt-mounted into the framing — these are virtually impossible to breach without power tools, and the noise of attempting it attracts attention. We also recommend establishing a relationship with neighbors who can keep an eye on the property and report any suspicious activity.'
      },
      {
        heading: 'Restoring Property Value',
        text: 'After cleanup and securing, the final step is restoration. Many DFW landlords use the squatter incident as an opportunity to upgrade the property — fresh paint, new flooring, updated fixtures, and modern appliances can transform a traumatic situation into a significantly higher rental value. We\'ve helped Dallas landlords turn squatter-damaged properties into premium rentals that command $200 to $400 more per month than their pre-incident rate. The key is approaching the restoration not as "fixing damage" but as "upgrading the asset." New LVP flooring, fresh two-tone paint, modern light fixtures, and updated cabinet hardware can transform a property for $8,000 to $15,000 while adding $2,400 to $4,800 in annual rental revenue.'
      },
      {
        heading: 'Prevention for the Future',
        text: 'The best squatter recovery plan is one you never have to use. For vacant properties, keep utilities on (a dark house at night screams "vacant"), maintain the lawn and exterior, collect mail daily or put it on hold, use light timers or smart bulbs to simulate occupancy, and check the property at least weekly. If you can\'t check it yourself, hire a property management company or establish a reciprocal arrangement with a trusted neighbor. Many DFW property investors use Ring or Wyze cameras for affordable remote monitoring that sends alerts directly to your phone if motion is detected.'
      }
    ],
    date: 'Feb 2, 2026',
    author: 'RCS Team',
    category: 'Security',
    image: '/blog-images/destroyed-squatters-home.png'
  },
  {
    id: '6',
    title: 'Storm Damage: When to Call the Pros',
    excerpt: 'DFW storms can be brutal. Here is how to handle the aftermath.',
    content: 'North Texas is no stranger to severe weather. From the explosive supercells that roll through every spring to the occasional ice storm that paralyzes the metroplex in winter, DFW homeowners deal with more weather damage than most of the country. Knowing the difference between what you can handle yourself and what requires professional intervention can save you thousands of dollars and weeks of frustration.',
    sections: [
      {
        heading: 'Immediate Safety Steps',
        text: 'After a severe storm passes, resist the urge to immediately start cleaning up. First, check for downed power lines anywhere near your property — stay at least 35 feet away from any downed line and call Oncor immediately. Check for gas leaks by smell (that rotten egg odor) and listen for hissing sounds near your gas meter. If you detect either, leave the property and call Atmos Energy. Once you\'ve confirmed no immediate electrical or gas hazards, do a slow exterior walk-around. Look for structural damage to the roof (missing shingles, exposed decking), broken windows, fallen trees leaning against the structure, and foundation cracks that may have appeared from ground movement. Document everything with photos before touching anything — your insurance adjuster will need this documentation.',
        image: '/blog-images/storm-damage.png',
        imageAlt: 'Storm damage to a DFW property'
      },
      {
        heading: 'What You Can Handle Yourself',
        text: 'Small branch cleanup, raking scattered leaves and debris from your yard, clearing gutters of accumulated material — these are all DIY-appropriate after a storm. If a few shingles blew off but the underlying decking and tar paper are intact, you can tarp the area temporarily until a roofer can get to you (and after DFW storms, roofers are booked for weeks). Minor fence damage — a leaning section or a couple of broken pickets — is generally a homeowner-level repair. The important caveat is ladder safety: after a storm, surfaces are often wet and slippery. If you\'re not comfortable on a wet roof, don\'t go up there. A tarp thrown over the ridge from the other side works nearly as well and keeps you on the ground.'
      },
      {
        heading: 'When Professional Help Is Essential',
        text: 'Any tree larger than six inches in diameter that has fallen on a structure requires professional removal. Large trees under tension can shift unpredictably during cutting, and a tree on your roof is already compromising structural integrity — amateur chainsaw work can cause it to shift and cause catastrophic additional damage. Significant roof damage — large sections of missing shingles, exposed decking, or visible sagging — needs professional assessment. Water intrusion from roof damage can cause mold growth within 48 hours in DFW\'s humidity, so speed matters. Foundation issues revealed by storms, structural cracking in walls or ceilings, and any damage involving utility lines all require professional contractors with proper insurance and licensing.',
        image: '/blog-images/more-storm-damage.png',
        imageAlt: 'Severe storm damage requiring professional cleanup'
      },
      {
        heading: 'Working with Your Insurance Company',
        text: 'DFW homeowners pay some of the highest property insurance premiums in the country, largely because of storm risk. Use that coverage effectively. File your claim within 72 hours of the storm — most policies have prompt reporting requirements. Provide your photo documentation along with a written description of all damage. Get at least two professional repair estimates, but do not sign anything with a contractor until your adjuster has inspected the damage. Be wary of storm chasers — those contractors who show up unsolicited within hours of a storm, offering to handle your entire insurance claim. Many are legitimate, but some are not, and signing over your insurance claim to the wrong company can leave you with shoddy repairs and no recourse.'
      },
      {
        heading: 'RCS Storm Response',
        text: 'At RCS Remodeling, we maintain a DFW storm response team that mobilizes within 24 hours of a major weather event. We provide emergency tarping, tree and debris removal, board-up services, and water extraction. Our team documents all work with photos and detailed reports specifically formatted for insurance claims. After the emergency phase, we handle the full restoration — from roofing and structural repairs to interior finishing. We work directly with your insurance adjuster and can provide the professional estimates needed to support your claim. Our pricing is fair, transparent, and doesn\'t include the inflated "storm pricing" that unfortunately becomes common after major weather events in the DFW area.'
      }
    ],
    date: 'Jan 25, 2026',
    author: 'RCS Team',
    category: 'Debris Removal',
    image: '/blog-images/storm-damage.png'
  },
  {
    id: '7',
    title: 'The ROI of a Master Suite Renovation',
    excerpt: 'Is it worth the investment in today\'s DFW market?',
    content: 'A master suite isn\'t just a bedroom — it\'s a sanctuary. In the competitive DFW real estate market, the primary suite has become one of the most scrutinized spaces during home tours. Buyers in Terrell, Forney, and Dallas are looking for resort-style retreats, and homes that deliver command premium prices. But does the investment pencil out? Let\'s look at the data.',
    sections: [
      {
        heading: 'Current DFW Market Data',
        text: 'According to recent real estate analysis for the DFW metroplex, a well-executed master suite renovation returns between 55 and 75 percent of its cost at resale in the current market. That might sound like a loss, but it\'s actually one of the highest-ROI renovations you can make. Here\'s why: the percentage return doesn\'t capture the full picture. A home with an updated master suite sells faster — on average 18 days faster in DFW markets — and faster sales mean fewer mortgage payments while your home sits on the market, fewer price reductions, and stronger negotiating position. In areas like Forney and Terrell where inventory is tight, an updated master suite can trigger a bidding war that pushes the sale price above asking.'
      },
      {
        heading: 'What Buyers Actually Want',
        text: 'DFW buyers in 2026 have very specific expectations for a primary suite. At the top of the list is a walk-in shower — not a tub-shower combo. Freestanding soaking tubs are a luxury bonus, but a spacious walk-in shower with frameless glass is non-negotiable. Double vanities are expected, not aspirational. And the walk-in closet needs to be organized with a built-in system, not a rod and a shelf. Beyond the bathroom, buyers want the bedroom itself to feel like a retreat. That means adequate square footage (at least 14 by 16 feet), good natural light, and ideally a sitting area or reading nook. Tray ceilings with accent lighting and a neutral, warm color palette round out the wish list.',
        image: '/blog-images/nice-lean-room.png',
        imageAlt: 'Clean modern room renovation'
      },
      {
        heading: 'Budget Tiers for DFW Master Suites',
        text: 'Basic refresh ($8,000 to $15,000): new paint, updated light fixtures, replaced hardware, new mirror, resurfaced or painted cabinets, and updated flooring. This level of renovation gives the suite a fresh, modern feel without structural changes. Mid-range renovation ($20,000 to $40,000): new vanity and countertop, tile shower surround, new flooring, paint, closet system installation, and updated fixtures throughout. This is the sweet spot for ROI in the DFW market. High-end transformation ($50,000 to $100,000+): complete gut and rebuild with custom cabinetry, premium tile, freestanding tub, walk-in rain shower, heated floors, custom closet system, and potentially expanding the suite by reconfiguring adjacent rooms. This level is appropriate for homes valued above $500,000 where the buyer pool expects luxury-level finishes.'
      },
      {
        heading: 'Common Mistakes That Kill ROI',
        text: 'Over-personalizing is the number one ROI killer. That bold geometric tile pattern you love might repulse half of potential buyers. Stick with classic, timeless materials — large-format neutral tile, clean-lined fixtures, and warm but not polarizing color choices. Under-investing in lighting is another common mistake. A beautiful renovation looks flat and uninspiring under a single overhead fixture. Layer your lighting: recessed cans for general illumination, sconces flanking the mirror for task lighting, and a statement pendant or chandelier for ambiance. Finally, don\'t neglect the closet. A gorgeous bathroom connected to a disorganized, wire-shelf closet creates a jarring contrast that buyers notice immediately.'
      },
      {
        heading: 'The RCS Approach to Master Suite Renovations',
        text: 'At RCS Remodeling, we approach every master suite project with resale value in mind — even if you plan to live in the home for twenty more years. Beautiful design and smart investment aren\'t mutually exclusive. We help you select materials and layouts that you\'ll love living with while also performing well on the market if your plans ever change. Our process starts with a detailed consultation where we assess your existing space, discuss your vision and budget, and present options at multiple price points. We handle everything from design through completion, including permits, plumbing, electrical, tile, cabinetry, and finishing. Every project includes a documented final walkthrough with a punch list that we complete before final payment. That\'s our H.I.T. values — Honesty, Integrity, and Transparency — in action on every project.'
      }
    ],
    date: 'Jan 15, 2026',
    author: 'RCS Team',
    category: 'Real Estate',
    image: '/blog-images/the-roi-of-a-master-suite-renovation.png'
  },
  {
    id: '8',
    title: 'Eco-Friendly Disposal: Where Your Debris Goes',
    excerpt: 'How RCS Remodeling prioritizes recycling in North Texas.',
    content: 'We don\'t just dump everything in a landfill. At RCS Remodeling, responsible disposal is a core part of our business, not an afterthought. Every year, the DFW construction industry generates millions of tons of waste, and the vast majority of it is recyclable or reusable. Here\'s an inside look at where your demolition and renovation debris actually goes when RCS handles the job.',
    sections: [
      {
        heading: 'The Scale of Construction Waste in DFW',
        text: 'The Environmental Protection Agency estimates that construction and demolition debris accounts for more than twice the volume of regular municipal solid waste in the United States. In a rapidly growing metro like DFW — where thousands of homes are being built, renovated, and occasionally demolished every year — that translates to an enormous amount of material heading to landfills. A single kitchen renovation generates approximately two tons of waste. A full home demolition can produce 100 tons or more. When you multiply that by the thousands of projects happening across the metroplex at any given time, the impact is staggering. At RCS, we believe the construction industry has a responsibility to minimize its landfill footprint, and we\'ve built our disposal processes around that conviction.',
        image: '/blog-images/polution.png',
        imageAlt: 'Environmental impact of construction waste'
      },
      {
        heading: 'What Gets Recycled',
        text: 'Concrete and masonry are the heavyweight champions of construction recycling. Old driveways, foundations, brick walls, and concrete countertops get hauled to local aggregate recyclers in the DFW area who crush them into road base, drainage rock, and fill material. Nearly 100 percent of concrete is recyclable, and using recycled aggregate reduces the need to quarry new stone. Wood — framing lumber, trim, cabinetry, and structural timbers — goes to facilities that chip it for mulch, compost, or biomass fuel. Clean, unpainted wood can also be donated to organizations like Habitat for Humanity ReStore, which resells building materials to fund affordable housing construction. Metals are the most valuable recyclable in demolition debris. Copper plumbing, steel framing, aluminum siding, iron fixtures, and even brass hardware all have significant scrap value. We sort metals on-site and deliver them to DFW scrap yards where they\'re melted down and remanufactured into new products.'
      },
      {
        heading: 'Our Sorting Process',
        text: 'On every RCS job site, you\'ll see color-coded bins: blue for metals, green for clean wood, gray for concrete and masonry, and black for landfill-bound waste. Our crews are trained to sort materials during demolition rather than mixing everything together — it\'s actually more efficient because different materials require different handling equipment. At the end of each day, our project lead reviews the bins and redirects any obviously missorted items. The sorted materials are then hauled to their respective processing facilities. We maintain relationships with over a dozen recycling and salvage operations across the DFW area, each specializing in different materials.',
        image: '/blog-images/packaged-garbage.png',
        imageAlt: 'Organized waste disposal and recycling'
      },
      {
        heading: 'Hazardous Materials Handling',
        text: 'Not everything can be tossed in a bin. Asbestos-containing materials, lead paint debris, chemical containers, and certain treated woods require specialized handling and disposal through licensed hazardous waste facilities. RCS maintains all required certifications for hazardous material handling in Texas, and we never cut corners on proper disposal — even when it would be cheaper (and illegal) to mix hazardous materials in with regular debris. We also handle the growing e-waste stream from renovation projects — old appliances, HVAC systems, and electronics contain refrigerants, capacitors, and heavy metals that require proper processing. We pair with certified e-waste recyclers in the DFW area who extract valuable materials and properly dispose of hazardous components.'
      },
      {
        heading: 'The Bigger Picture',
        text: 'Eco-friendly disposal isn\'t just good ethics — it\'s increasingly good business. More DFW homeowners are asking about sustainability in their renovation projects, and being able to provide a debris disposition report showing that 70 to 85 percent of their project waste was diverted from landfills is a meaningful selling point. At RCS, we average a 75 percent landfill diversion rate across all projects. Our goal is to reach 85 percent by the end of 2026 through improved sorting processes and new recycling partnerships. Every ton of material we keep out of a landfill is a small step toward a more sustainable construction industry in North Texas, and we\'re proud to be leading that effort in the DFW market.'
      }
    ],
    date: 'Jan 5, 2026',
    author: 'RCS Team',
    category: 'Sustainability',
    image: '/blog-images/eco-fliendly.png'
  },
  {
    id: '9',
    title: 'Preparing Your Home for a Winter Remodel',
    excerpt: 'Why winter is actually a great time for interior projects in Texas.',
    content: 'While the rest of the country hunkers down for winter, North Texas enters prime interior renovation season. With milder temperatures than the brutal summer, fewer bugs, and typically lower contractor demand, winter is actually the smartest time to tackle that kitchen overhaul, bathroom upgrade, or whole-home renovation you\'ve been putting off. Here\'s how to prepare your home and yourself for a winter remodel in DFW.',
    sections: [
      {
        heading: 'Why Winter Is Prime Remodeling Season in DFW',
        text: 'DFW summers are brutal — 100-degree days, oppressive humidity, and afternoon thunderstorms make exterior work miserable and interior work uncomfortable when doors and windows need to be open for ventilation. Winter flips the script. Daytime temperatures in the 40s and 50s are comfortable enough for crews working inside, and the lower humidity means paint dries faster, adhesives cure better, and the overall building process moves more smoothly. There\'s also a business advantage: contractor schedules are lighter in winter. Spring and summer are peak demand seasons in DFW, which means longer wait times, busier crews, and higher prices. By booking your remodel for January through March, you often get faster start dates, more attention from your project manager, and potentially better pricing on both labor and materials.'
      },
      {
        heading: 'Preparing Your HVAC System',
        text: 'A winter remodel will stress your heating system. Exterior doors will be opened frequently for material delivery and debris removal, construction dust will clog filters faster, and if you\'re renovating near your HVAC returns, the system might be shut down periodically. Start your prep by having your furnace serviced before construction begins. Replace filters with high-MERV options (MERV 11 or higher) that catch fine construction dust. If your renovation involves the room where your thermostat is located, discuss a temporary relocation with your contractor so the system can maintain temperature control throughout the project. Consider keeping a couple of space heaters on hand for the rooms you\'re living in — they\'re great supplemental heat when exterior doors are letting cold air in.',
        image: '/blog-images/rcs-team-preparing-your-home-for-a-winter-remodel.png',
        imageAlt: 'RCS team preparing for a winter renovation project'
      },
      {
        heading: 'Protecting Your Floors and Belongings',
        text: 'Winter remodels present a unique floor protection challenge: wet, muddy boots. Construction crews tracking through your home during wet winter weather can damage carpet, scratch hardwood, and leave marks on tile that are surprisingly difficult to remove. Good contractors (like RCS) lay heavy-duty floor protection — Ram Board or Masonite panels on hard surfaces, and adhesive-backed plastic runners on carpet. We also maintain a boot cleaning station at entry points and require crew members to use booties when working outside the construction zone. For your belongings, move anything valuable, delicate, or irreplaceable out of the construction path. Even with the best dust containment, fine particles find their way into adjacent rooms. Cover furniture with plastic sheeting or old sheets, and move electronics and artwork to rooms that are well-sealed from the work area.'
      },
      {
        heading: 'Living In Your Home During Renovation',
        text: 'Most DFW homeowners choose to stay in their homes during renovation, and with proper planning, it\'s completely manageable. The key is creating clear boundaries between living space and construction space. We use heavy-duty zippered dust barriers that allow passage without compromising containment, and we run negative air pressure machines that pull dusty air out through filtered exhausts. Establish a daily routine that accounts for construction noise and activity. Crews typically work from 8 AM to 5 PM, so plan your quiet time, work calls, and meals around that schedule. If you work from home, identify a room that\'s as far from the construction zone as possible and communicate that need to your contractor — good crews will schedule the loudest work (demolition, power tools) for predictable time blocks so you can plan around them.'
      },
      {
        heading: 'Taking Advantage of Holiday Sales',
        text: 'Winter remodels come with a hidden benefit: holiday and New Year\'s sales on appliances, fixtures, and materials. November through January is when you\'ll find the best deals on kitchen appliances, bathroom fixtures, flooring, and cabinetry from DFW retailers and national chains. Black Friday deals on refrigerators and ranges can save you $500 to $1,500, and January clearance sales on tile, countertops, and lighting fixtures are common as retailers make room for new inventory. At RCS, we help clients time their material purchases to take advantage of these cycles. We can specify and order your materials during peak sale periods, store them in our warehouse, and install them when your project reaches that phase. It\'s one of those small advantages of winter remodeling that adds up to meaningful savings on the total project cost.'
      }
    ],
    date: 'Dec 20, 2025',
    author: 'RCS Team',
    category: 'Remodeling',
    image: '/blog-images/rcs-team-preparing-your-home-for-a-winter-remodel.png'
  },
  {
    id: '10',
    title: 'The Importance of Transparency in Contracting',
    excerpt: 'Why our H.I.T. values are the foundation of every project.',
    content: 'The "shady contractor" stereotype exists for a reason — the home improvement industry has historically been plagued by poor communication, hidden fees, abandoned projects, and work quality that doesn\'t match the price tag. At RCS Remodeling, we built our entire business model around eliminating these problems. Our H.I.T. values — Honesty, Integrity, and Transparency — aren\'t just marketing words. They\'re operational principles baked into every process, every contract, and every conversation we have with our DFW clients.',
    sections: [
      {
        heading: 'Why the Industry Has a Trust Problem',
        text: 'A recent national survey found that 45 percent of homeowners who\'ve hired a contractor reported a negative experience involving either unexpected costs, missed deadlines, or poor workmanship. In the DFW market specifically, the rapid growth of the metroplex has attracted a flood of contractors — some excellent, some mediocre, and some outright predatory. The Texas Department of Licensing and Regulation receives thousands of complaints annually about contractors in the DFW area alone. Common complaints include starting a job and disappearing, significantly exceeding quoted prices without authorization, using substandard materials while charging for premium ones, and not pulling required permits. These bad actors poison the well for legitimate professional contractors and make homeowners justifiably skeptical of the entire industry.'
      },
      {
        heading: 'How Transparency Changes Everything',
        text: 'At RCS, transparency starts with the estimate. Our quotes are itemized line-by-line: every material, every labor hour, every permit fee, and every disposal cost is listed individually. There are no mystery line items like "miscellaneous" or "contingency," and our overhead and profit margins are clearly stated. This level of detail does two things: it gives you confidence that you know exactly what you\'re paying for, and it gives us accountability to deliver exactly what we quoted. If something changes during the project — and on renovation projects, discoveries behind walls do happen — we document the finding, explain the options with associated costs, and wait for your written approval before proceeding. No surprise charges, ever.',
        image: '/blog-images/the-importance-of-transparency-in-contracting.png',
        imageAlt: 'Transparent contracting process'
      },
      {
        heading: 'Daily Communication Standards',
        text: 'Every RCS project includes daily photo updates sent directly to your phone. At the end of each workday, your project manager sends a brief summary of what was completed, what\'s planned for tomorrow, and photos documenting the day\'s progress. This isn\'t just nice to have — it\'s essential. Daily updates keep you informed, prevent surprises, and create a documented record of the project\'s progression that\'s invaluable for warranty purposes and future reference. We also hold weekly in-person check-ins where you can walk the project with your project manager, ask questions, and flag anything that doesn\'t look right to you. Catching a concern on day three of a task is infinitely cheaper and easier than discovering it during the final walkthrough. Your eyes and feedback are a critical part of our quality control process.'
      },
      {
        heading: 'Fixed-Price Contracts vs. Cost-Plus',
        text: 'We offer both fixed-price and cost-plus contracts, and we educate every client on the pros and cons of each before they decide. Fixed-price contracts give you budget certainty — the price we quote is the price you pay, period, unless you request changes. We absorb the risk of overruns, which means we have strong incentive to estimate accurately and manage efficiently. Cost-plus contracts are appropriate for projects with significant unknowns — major renovations of older homes, for instance, where the condition behind walls is unpredictable. In these cases, we charge actual material costs plus a fixed, agreed-upon percentage for labor and overhead. The advantage is flexibility; the trade-off is less budget certainty. Regardless of contract type, every dollar is documented, every receipt is available, and every line item is justified. That\'s the RCS standard.'
      },
      {
        heading: 'Building Long-Term Relationships',
        text: 'The ultimate measure of a contractor\'s transparency is repeat business. Over 60 percent of our DFW projects come from repeat clients or referrals from past clients. That\'s not because we\'re the cheapest option — we\'re not, and we don\'t pretend to be. It\'s because our clients know exactly what they\'re getting when they hire RCS: honest communication, quality workmanship, and a project experience that doesn\'t leave them feeling taken advantage of. When your contractor earns your trust, renovation stops being stressful and starts being exciting. You focus on choosing tile patterns and paint colors instead of worrying about whether the bill is going to double or the crew is going to disappear. That\'s the experience every homeowner deserves, and it\'s the experience RCS delivers on every project in the DFW metroplex.'
      }
    ],
    date: 'Dec 10, 2025',
    author: 'RCS Team',
    category: 'Company',
    image: '/blog-images/the-importance-of-transparency-in-contracting.png'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Michael Carroll',
    location: 'DFW Area',
    rating: 5,
    text: 'Thank you all for the prompt service and professionalism bestowed to our family. The room addition has worked wonders for our newest family member.',
    date: 'September 2024'
  },
  {
    id: '2',
    name: 'Keitha Reynolds',
    location: 'DFW Area',
    rating: 5,
    text: 'William and his crew really went out of their way to take care of us. Even with such a short notice, he was quick to response and very accommodating. Great group of guys and I would definitely use them again.',
    date: 'September 2024'
  },
  {
    id: '3',
    name: 'Janna Koenig',
    location: 'DFW Area',
    rating: 5,
    text: 'RCS did outstanding job! Very reliable and respectful. I would definitely recommend RCS!',
    date: 'September 2024'
  },
  {
    id: '4',
    name: 'Mark Pierce',
    location: 'East Dallas',
    rating: 5,
    text: 'I highly recommend RCS Remodeling! Will was a great help for my house in East Dallas. Fast at responding and they did great work!',
    date: 'April 2025'
  },
  {
    id: '5',
    name: 'tomsyd62 wood',
    location: 'DFW Area',
    rating: 5,
    text: 'Thank you all for the prompt service and professionalism bestowed to our family. The room addition has worked wonders for our newest family member.',
    date: 'October 2024'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    category: 'Demolition',
    imageBefore: '/Demo/1.jpg',
    imageAfter: '/Demo/1.jpg'
  },
  {
    id: '2',
    category: 'Demolition',
    imageBefore: '/Demo/2.jpg',
    imageAfter: '/Demo/2.jpg'
  },
  {
    id: '3',
    category: 'Demolition',
    imageBefore: '/Demo/3.jpg',
    imageAfter: '/Demo/3.jpg'
  },
  {
    id: '4',
    category: 'Demolition',
    imageBefore: '/Demo/4.jpg',
    imageAfter: '/Demo/4.jpg'
  },
  {
    id: '5',
    category: 'Demolition',
    imageBefore: '/Demo/5.jpg',
    imageAfter: '/Demo/5.jpg'
  },
  {
    id: '6',
    category: 'Demolition',
    imageBefore: '/Demo/6.jpg',
    imageAfter: '/Demo/6.jpg'
  },
  {
    id: '7',
    category: 'Demolition',
    imageBefore: '/Demo/7.jpg',
    imageAfter: '/Demo/7.jpg'
  },
  {
    id: '8',
    category: 'Demolition',
    imageBefore: '/Demo/8.jpg',
    imageAfter: '/Demo/8.jpg'
  },
  {
    id: '9',
    category: 'Demolition',
    imageBefore: '/Demo/9.jpg',
    imageAfter: '/Demo/9.jpg'
  },
  {
    id: '10',
    category: 'Remodeling',
    imageBefore: '/page-images/rcs-demo-hammer.png',
    imageAfter: '/page-images/untitled-design-114.png'
  },
  {
    id: '11',
    category: 'Debris Removal',
    imageBefore: '/page-images/rcs-debris-1-1800x1350.png',
    imageAfter: '/page-images/untitled-design-118.png'
  },
  {
    id: '12',
    category: 'Remodeling',
    imageBefore: '/page-images/drill-hammer-1.jpg',
    imageAfter: '/page-images/untitled-design-8.png'
  },
  {
    id: '14',
    category: 'Remodeling',
    imageBefore: '/page-images/kitchen-1.jpg',
    imageAfter: '/page-images/untitled-design-10.png'
  },
  {
    id: '15',
    category: 'Remodeling',
    imageBefore: '/blog-images/wall-destruction.png',
    imageAfter: '/blog-images/nice-lean-room.png'
  },
  {
    id: '16',
    category: 'Cleanup',
    imageBefore: '/blog-images/hoarders.png',
    imageAfter: '/blog-images/packaged-garbage.png'
  },
  {
    id: '17',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1782.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1782.jpg'
  },
  {
    id: '18',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1783.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1783.jpg'
  },
  {
    id: '19',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1784.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1784.jpg'
  },
  {
    id: '20',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1785.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1785.jpg'
  },
  {
    id: '21',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1786.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1786.jpg'
  },
  {
    id: '22',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1787.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1787.jpg'
  },
  {
    id: '23',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1788.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1788.jpg'
  },
  {
    id: '24',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1789.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1789.jpg'
  },
  {
    id: '25',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1790.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1790.jpg'
  },
  {
    id: '26',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1791.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1791.jpg'
  },
  {
    id: '27',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1792.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1792.jpg'
  },
  {
    id: '28',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1793.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1793.jpg'
  },
  {
    id: '29',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1794.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1794.jpg'
  },
  {
    id: '30',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1795.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1795.jpg'
  },
  {
    id: '31',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1796.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1796.jpg'
  },
  {
    id: '32',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1797.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1797.jpg'
  },
  {
    id: '33',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1798.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1798.jpg'
  },
  {
    id: '34',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1799.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1799.jpg'
  },
  {
    id: '35',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1800.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1800.jpg'
  },
  {
    id: '36',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1801.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1801.jpg'
  },
  {
    id: '37',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1802.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1802.jpg'
  },
  {
    id: '38',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1803.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1803.jpg'
  },
  {
    id: '39',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1804.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1804.jpg'
  },
  {
    id: '40',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1805.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1805.jpg'
  },
  {
    id: '41',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1806.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1806.jpg'
  },
  {
    id: '42',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1807.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1807.jpg'
  },
  {
    id: '43',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1808.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1808.jpg'
  },
  {
    id: '44',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1809.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1809.jpg'
  },
  {
    id: '45',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1810.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1810.jpg'
  },
  {
    id: '46',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1811.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1811.jpg'
  },
  {
    id: '47',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1812.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1812.jpg'
  },
  {
    id: '48',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1813.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1813.jpg'
  },
  {
    id: '49',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1814.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1814.jpg'
  },
  {
    id: '50',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1815.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1815.jpg'
  },
  {
    id: '51',
    category: 'Remodeling',
    imageBefore: '/drive-download-20260318T153237Z-1-001/IMG_1816.jpg',
    imageAfter: '/drive-download-20260318T153237Z-1-001/IMG_1816.jpg'
  }
];
