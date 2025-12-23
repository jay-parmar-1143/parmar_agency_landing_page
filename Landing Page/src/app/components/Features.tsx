import { Zap, Shield, Users, Check } from 'lucide-react';
import { Card } from './ui/card';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance that keeps you ahead of the competition.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security to protect your data and ensure peace of mind.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team with real-time collaboration tools.',
  },
  {
    icon: Check,
    title: 'Easy Integration',
    description: 'Integrate with your existing tools and workflows in minutes, not days.',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to help you work smarter and achieve more.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 space-y-4 border-2 hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
