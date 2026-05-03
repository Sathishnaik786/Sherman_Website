import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <AnimatedSection>
          <h1 className="text-9xl font-black text-accent mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-8">System Breach: Page Not Found</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-md mx-auto">
            The coordinates you requested do not exist within our secure infrastructure. Please return to base.
          </p>
          <Link to="/">
            <Button size="lg" className="rounded-full px-10 h-14 bg-accent hover:bg-accent/90 text-white">
              <Home className="w-5 h-5 mr-3" />
              Return to Home
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
