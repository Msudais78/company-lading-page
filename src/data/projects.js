export const projects = [
  {
    id: 'fintech-dashboard',
    title: 'FinTech Dashboard',
    category: 'Web Architecture',
    description: 'A high-performance trading dashboard handling real-time WebSocket data with sub-millisecond rendering latency.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    client: 'Nexus Trading Group',
    timeline: '6 Months',
    services: ['Frontend Architecture', 'Real-time Systems', 'UI/UX Design'],
    challenge: 'Nexus Trading Group was struggling with a legacy monolithic platform that suffered from severe UI freezing during high-volatility market events. Traders were experiencing latency up to 2 seconds when receiving critical price updates, leading to missed execution opportunities. They needed a complete architectural overhaul that could handle millions of WebSocket events per minute without degrading main-thread performance.',
    solution: 'We engineered a completely decoupled frontend architecture using React, heavily optimized with Web Workers for off-thread data processing. By implementing a custom binary WebSocket protocol and using a virtualized grid for rendering massive order books, we bypassed the standard React reconciliation bottlenecks. The UI was built on a strict, high-contrast dark mode design system optimized for 8-monitor trading desk setups.',
    results: [
      { label: 'Latency Reduction', value: '98%' },
      { label: 'Data Points/Sec', value: '1.2M' },
      { label: 'Uptime', value: '99.999%' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'healthcare-sync',
    title: 'HealthCare Sync',
    category: 'Mobile App • API',
    description: 'HIPAA-compliant mobile application connecting patients with practitioners through secure video architecture.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
    client: 'MediCore Health',
    timeline: '9 Months',
    services: ['React Native', 'Node.js Microservices', 'WebRTC Integration'],
    challenge: 'With the rapid shift to telehealth, MediCore Health needed a unified platform that securely handled patient records, scheduling, and live video consultations. The primary constraints were strict HIPAA compliance, end-to-end encryption requirements, and the need for flawless video stability across varying network conditions in rural areas.',
    solution: 'We architected a scalable, event-driven Node.js backend to handle asynchronous operations and third-party EHR (Electronic Health Record) integrations. For the mobile client, we utilized React Native, integrating a custom WebRTC wrapper to handle dynamic video bitrate degradation on poor cellular networks. All persistent data was strictly encrypted at rest and in transit using AES-256.',
    results: [
      { label: 'Active Users', value: '250k+' },
      { label: 'Video Drops', value: '< 1%' },
      { label: 'App Store Rating', value: '4.9' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1576091160550-2173ff9e5e3c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'aura-commerce',
    title: 'Aura Commerce',
    category: 'E-Commerce • Headless',
    description: 'A scalable headless Shopify storefront utilizing Next.js, achieving a perfect 100 Lighthouse performance score.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    client: 'Aura Athletics',
    timeline: '4 Months',
    services: ['Next.js', 'Headless Shopify', 'Conversion Optimization'],
    challenge: 'Aura Athletics had outgrown their standard monolithic Shopify theme. During major product drops, their storefront experienced unacceptable load times, leading to massive cart abandonment. They required a bespoke, lightning-fast shopping experience that felt native, highly interactive, and could withstand massive bursts of concurrent traffic without sweating.',
    solution: 'We transitioned Aura to a headless architecture. By leveraging Next.js static site generation (SSG) alongside Incremental Static Regeneration (ISR), we pre-rendered their entire catalog at the edge. The UI was completely rebuilt with custom micro-animations to enhance perceived performance. State management was localized to avoid unneeded re-renders during high-frequency cart interactions.',
    results: [
      { label: 'Lighthouse', value: '100' },
      { label: 'Conversion Rate', value: '+34%' },
      { label: 'Load Time', value: '0.6s' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];
