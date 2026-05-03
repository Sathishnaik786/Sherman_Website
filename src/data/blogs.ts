export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'AI' | 'Technology' | 'E-Governance' | 'Business' | 'Innovation';
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  image: string;
  date: string;
  readTime: string;
}

export const blogs: BlogPost[] = [
  {
    id: 'ai-transforming-governance',
    title: 'How AI is Transforming E-Governance in 2026',
    excerpt: 'Exploring the impact of autonomous AI agents in streamlining public service delivery and administrative efficiency.',
    content: `
      <p>The landscape of public administration is undergoing a seismic shift. As we navigate through 2026, Artificial Intelligence is no longer just a buzzword; it's the backbone of modern E-Governance. At Akiko Sherman Infotech, we've seen firsthand how AI can bridge the gap between complex governmental processes and citizen needs.</p>
      
      <h2>The Rise of Agentic AI</h2>
      <p>Traditional automation was about following fixed rules. Today's "Agentic AI" can understand context, handle exceptions, and orchestrate complex multi-step workflows. This means citizen inquiries that used to take days can now be resolved in seconds by intelligent digital assistants.</p>
      
      <blockquote>"AI in governance is not about replacing human decision-making, but about empowering it with real-time data and cognitive speed."</blockquote>
      
      <h2>Key Benefits</h2>
      <ul>
        <li><strong>Transparency:</strong> AI-driven ledgers and tracking ensure every administrative action is logged and verifiable.</li>
        <li><strong>Efficiency:</strong> Reducing manual data entry by 80% through intelligent document processing.</li>
        <li><strong>Accessibility:</strong> 24/7 multilingual support for diverse citizen populations.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>As we continue to innovate, the goal remains clear: to build a more responsive, transparent, and efficient government infrastructure using the world's most advanced technologies.</p>
    `,
    category: 'E-Governance',
    author: {
      name: 'Dr. Satish Naik',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format',
      role: 'Head of AI Research'
    },
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format',
    date: 'May 15, 2026',
    readTime: '6 min read'
  },
  {
    id: 'scaling-enterprise-cloud',
    title: 'Scaling Enterprise Cloud: Lessons from 800+ Projects',
    excerpt: 'Key strategies for migrating legacy mission-critical infrastructure to high-performance cloud environments.',
    content: '<p>Content for scaling enterprise cloud...</p>',
    category: 'Technology',
    author: {
      name: 'Arjun Sharma',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format',
      role: 'Principal Cloud Architect'
    },
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format',
    date: 'May 10, 2026',
    readTime: '8 min read'
  },
  {
    id: 'future-of-agri-traceability',
    title: 'The Future of Agri-Traceability: Farm2Plate Engine',
    excerpt: 'How blockchain and IoT are ensuring global food security through end-to-end supply chain visibility.',
    content: '<p>Content for agri-traceability...</p>',
    category: 'Innovation',
    author: {
      name: 'Priya Verma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format',
      role: 'Product Strategist'
    },
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&auto=format',
    date: 'May 05, 2026',
    readTime: '5 min read'
  },
  {
    id: 'securing-digital-identities',
    title: 'Securing Digital Identities in a Post-Quantum World',
    excerpt: 'Implementing cryptographic safeguards for next-generation governmental identity platforms.',
    content: '<p>Content for digital identities...</p>',
    category: 'E-Governance',
    author: {
      name: 'Dr. Satish Naik',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format',
      role: 'Head of AI Research'
    },
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format',
    date: 'April 28, 2026',
    readTime: '7 min read'
  }
];
