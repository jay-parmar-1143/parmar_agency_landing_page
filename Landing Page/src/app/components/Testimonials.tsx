import { Star } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    content: 'This platform has completely transformed how we work. Our productivity has increased by 200% and our team loves it.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjQ1NjAyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    content: 'The best investment we\'ve made this year. The ROI was immediate and the support team is fantastic.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjQ1NjAyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, StartupXYZ',
    content: 'Simple, powerful, and exactly what we needed. I can\'t imagine running our business without it now.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjQ1NjAyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl mb-4">
            Loved by thousands of users
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers have to say about their experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 space-y-4">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3 pt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div>{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
