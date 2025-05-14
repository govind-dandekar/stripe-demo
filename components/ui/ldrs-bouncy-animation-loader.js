import { useEffect } from "react";

function LDRSBouncyAnimationLoader() {
  useEffect(() => {
    async function getLoader() {
      const { bouncy } = await import("ldrs");
      bouncy.register();
    }
    getLoader();
  }, []);
  return <l-bouncy size="150" speed="2.5" color="white"></l-bouncy>;
}

export default LDRSBouncyAnimationLoader;
