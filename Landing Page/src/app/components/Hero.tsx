import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl tracking-tight">
              Transform Your Business with Innovative Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              We help companies scale faster and work smarter with cutting-edge technology and personalized support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl">10k+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl">99%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2Mzk5NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
