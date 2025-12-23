import { Button } from './ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="text-2xl">PARMAR'S AGENCY</div>
            <nav className="hidden md:flex gap-6">
              <a href="#features" className="text-gray-700 hover:text-primary transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">
                Pricing
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Log in</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
