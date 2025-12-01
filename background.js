// Initialize counter
chrome.runtime.onInstalled.addListener(async () => {
  const data = await chrome.storage.local.get(['cleanCount']);
  if (data.cleanCount === undefined) {
    await chrome.storage.local.set({ cleanCount: 0 });
  }
});

// Listen for web requests to detect utm_source removal
chrome.webRequest.onBeforeRequest.addListener(
  async (details) => {
    // Check if URL contains utm_source
    if (details.url.includes('utm_source')) {
      // Increment counter
      const data = await chrome.storage.local.get('cleanCount');
      const count = (data.cleanCount || 0) + 1;
      await chrome.storage.local.set({ cleanCount: count });
    }
  },
  { urls: ["<all_urls>"] },
  []
);