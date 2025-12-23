import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of teams already using our platform to achieve their goals. Start your free trial today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Contact Sales
              </Button>
            </div>
            <p className="text-sm text-white/80">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2NjQ2NjM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
