// Simple rate limiter to prevent API quota exceeded errors
// Queues requests and processes them one at a time with a delay

class RateLimiter {
  constructor(minDelay = 10000) {
    this.queue = [];
    this.processing = false;
    this.minDelay = minDelay; // Minimum delay between requests in ms
    this.lastRequestTime = 0;
  }

  async execute(fn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ fn, resolve, reject });
      this.processQueue();
    });
  }

  async processQueue() {
    if (this.processing || this.queue.length === 0) return;

    this.processing = true;

    while (this.queue.length > 0) {
      const { fn, resolve, reject } = this.queue.shift();

      // Calculate wait time based on last request
      const now = Date.now();
      const timeSinceLastRequest = now - this.lastRequestTime;
      const waitTime = Math.max(0, this.minDelay - timeSinceLastRequest);

      if (waitTime > 0) {
        await this.sleep(waitTime);
      }

      try {
        this.lastRequestTime = Date.now();
        const result = await fn();
        resolve(result);
      } catch (error) {
        // If rate limited, wait and retry
        if (error.message?.includes("429") || error.message?.includes("Too Many Requests")) {
          console.log("Rate limited, waiting 30 seconds before retry...");
          await this.sleep(50000);
          try {
            this.lastRequestTime = Date.now();
            const result = await fn();
            resolve(result);
          } catch (retryError) {
            reject(retryError);
          }
        } else {
          reject(error);
        }
      }
    }

    this.processing = false;
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

// Singleton instance - shared across all API calls
const geminiRateLimiter = new RateLimiter(2000); // 2 second delay between requests

export { geminiRateLimiter };
