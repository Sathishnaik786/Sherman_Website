import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceCards } from '@/components/services/ServiceCards';
import { UseCases } from '@/components/services/UseCases';
import { Process } from '@/components/services/Process';
import { TechStack } from '@/components/services/TechStack';
import { CTA } from '@/components/services/CTA';
import { BrainCircuit, Bot, Database, Sparkles, MessageSquare, Zap } from 'lucide-react';

const aiFeatures = [
  {
    title: 'Generative AI Strategy',
    description: 'Developing custom LLM roadmaps and integration strategies for enterprise data privacy.',
    icon: Sparkles
  },
  {
    title: 'Predictive Analytics',
    description: 'Harnessing historical data to forecast trends and automate decision-making processes.',
    icon: Database
  },
  {
    title: 'Agentic AI Workflows',
    description: 'Deploying autonomous AI agents that handle complex task execution and orchestration.',
    icon: Bot
  },
  {
    title: 'Custom NLP Models',
    description: 'Industry-specific natural language processing for sentiment, extraction, and automation.',
    icon: BrainCircuit
  }
];

const aiUseCases = [
  {
    title: 'Public Service Automation',
    description: 'AI-driven citizen helpdesks reducing response times for government departments.',
    metric: '65%',
    metricLabel: 'Faster Response'
  },
  {
    title: 'Financial Forecasting',
    description: 'Machine learning models predicting market shifts for large-scale investment firms.',
    metric: '92%',
    metricLabel: 'Accuracy Rate'
  },
  {
    title: 'Supply Chain Intel',
    description: 'Predicting logistics bottlenecks before they occur using real-time sensor data.',
    metric: '30%',
    metricLabel: 'Cost Reduction'
  }
];

const aiTech = [
  { name: 'PyTorch', category: 'Framework' },
  { name: 'TensorFlow', category: 'Framework' },
  { name: 'OpenAI GPT-4', category: 'LLM' },
  { name: 'Azure ML', category: 'Platform' },
  { name: 'AWS SageMaker', category: 'Platform' },
  { name: 'Gemini', category: 'LLM' }
];

export default function AIMLPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <ServiceHero 
        title="AI & Machine"
        accentTitle="Learning Solutions"
        subtitle="Build intelligent systems that automate, predict, and scale business operations with enterprise-grade precision."
      />
      <ServiceCards features={aiFeatures} />
      <UseCases useCases={aiUseCases} />
      <Process />
      <TechStack technologies={aiTech} />
      <CTA />
    </div>
  );
}
