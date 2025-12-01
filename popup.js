// Load and display statistics
async function loadStats() {
  const data = await chrome.storage.local.get(['cleanCount']);
  document.getElementById('cleanCount').textContent = data.cleanCount || 0;
}

// Reset statistics
document.getElementById('resetBtn').addEventListener('click', async () => {
  await chrome.storage.local.set({ cleanCount: 0 });
  loadStats();
});

// Load stats when popup opens
loadStats();