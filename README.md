# GPT_source_cleaner

A minimal Chrome extension that removes the tracking parameter  
`utm_source=chatgpt.com` from URLs while you browse.

## Purpose

Some links opened from ChatGPT include the parameter `utm_source=chatgpt.com`.  
This extension automatically strips only that parameter, keeping the rest of the  
URL intact. It makes your address bar cleaner and avoids unnecessary tracking  
information.

## How It Works

The extension uses a single `declarativeNetRequest` rule:

- It listens for page loads containing `utm_source=chatgpt.com`
- It redirects the request by removing the `utm_source` parameter
- No other parts of the URL are modified
- No scripts are injected
- No content on any website is read or changed

The extension does **not** collect any data, store any information, or communicate  
with external servers.

## Permissions

- **declarativeNetRequest** — required to perform the URL transformation rule  
- **Host permission (`<all_urls>`)** — required only so the extension can detect  
  URLs containing the unwanted query parameter

No additional permissions are used.

## Privacy Policy

This extension does not collect, store, transmit, or process any personal data.  
It performs a single local modification to the URL by removing the  
`utm_source=chatgpt.com` parameter. No information is sent to external servers,  
nor is any user data accessed or shared.

## Installation

Coming soon to the Chrome Web Store.

For manual installation:

1. Download or clone this repository  
2. Go to `chrome://extensions`  
3. Enable **Developer Mode**  
4. Click **Load unpacked**  
5. Select the extension folder

## Files

- `manifest.json` — Extension metadata and permissions  
- `rules.json` — Net request rule that removes the tracking parameter  

## License

MIT
