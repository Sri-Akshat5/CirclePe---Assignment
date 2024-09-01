import { useState, useEffect } from 'react';

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Only run the effect if window is defined (i.e., on the client side)
    if (typeof window !== 'undefined') {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      // Set initial value
      setIsMobile(window.innerWidth < 768);

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return isMobile;
}

export default useIsMobile;
