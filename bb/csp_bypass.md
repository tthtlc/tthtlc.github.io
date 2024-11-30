
Content Security Policy (CSP) is a powerful security mechanism that helps mitigate various client-side attacks, such as Cross-Site Scripting (XSS). However, a misconfigured or insufficiently strict CSP can lead to bypasses. Below are 30 different CSP bypass techniques categorized by common weaknesses, misconfigurations, and edge cases:

---

### **1. Misconfigured Wildcards**
- **1.1 `unsafe-inline`**: Allows inline scripts/styles to execute, defeating the purpose of CSP.
- **1.2 Wildcards (`*`)**: Broadly permits resources from any domain, including malicious ones.
- **1.3 Open subdomains (`*.example.com`)**: A subdomain controlled by an attacker (e.g., `evil.example.com`) can serve malicious content.

---

### **2. Insecure Allowlists**
- **2.1 Trusted CDNs**: If a trusted CDN (e.g., `https://cdn.example.com`) hosts untrusted user-generated content, it can be abused for XSS.
- **2.2 External JavaScript libraries**: Inclusion of external scripts without proper validation, e.g., jQuery with a known XSS vulnerability.

---

### **3. Reflected XSS via Script Injection**
- **3.1 Script tags**: CSP doesn’t block scripts dynamically injected via script tags if they’re allowed by the policy.
- **3.2 JSONP endpoints**: Abuse of JSONP endpoints with callback injection can lead to script execution.

---

### **4. DOM-Based CSP Bypasses**
- **4.1 Inline Event Handlers**: If `unsafe-inline` is allowed, event handlers like `onclick`, `onmouseover` can execute arbitrary code.
- **4.2 DOM XSS**: If user input is reflected into `innerHTML`, `document.write()`, or `eval()`, it can bypass CSP.

---

### **5. `nonce`/`hash` Mismanagement**
- **5.1 Reusable nonces**: If a nonce is reused across multiple requests, an attacker can inject a payload using the same nonce.
- **5.2 Weak hash algorithms**: A predictable or insecure hash (e.g., MD5 collisions) for inline scripts may allow crafted payloads.

---

### **6. Legacy CSP Levels**
- **6.1 CSP Level 1**: Older CSP versions don’t support strict directives like `script-src` or `worker-src` separately.
- **6.2 Missing Directives**: Leaving out critical directives (e.g., `script-src`, `style-src`) allows fallback to less restrictive policies like `default-src`.

---

### **7. Subtle Policy Misconfigurations**
- **7.1 `data:` URIs**: Allowing `data:` in sources enables base64-encoded malicious scripts.
- **7.2 `blob:` URIs**: Permitting `blob:` sources allows attackers to serve payloads as Blob objects.
- **7.3 `http:` in a secure context**: Including `http:` in `script-src` or `img-src` enables MITM attacks in HTTPS contexts.

---

### **8. Inline Styles and Scripts**
- **8.1 Style injection**: If `unsafe-inline` is present, CSS expressions like `background: url(javascript:alert(1))` can execute JavaScript in certain legacy browsers.
- **8.2 Mixed inline/external payloads**: A permitted external script can dynamically inject inline scripts.

---

### **9. Open Redirect Exploitation**
- **9.1 Redirect abuse**: A trusted domain with an open redirect can forward users to a malicious payload.

---

### **10. JSON and API Endpoints**
- **10.1 API injections**: APIs that reflect user data can allow injection of CSP-bypassing payloads.
- **10.2 JSON/JSONP injection**: Exploiting endpoints that lack CSP protection.

---

### **11. Browser-Specific CSP Bypasses**
- **11.1 Polyglot payloads**: Certain CSP implementations may inconsistently parse or apply directives, depending on the browser.
- **11.2 Legacy browser support**: Older browsers may interpret or bypass CSP differently, especially CSP Level 1.

---

### **12. Dependency Hijacking**
- **12.1 Third-party script poisoning**: Replacing a trusted dependency (e.g., on a CDN) with malicious code.
- **12.2 Subresource integrity (SRI) omission**: If CSP relies on external scripts without SRI, it risks dependency tampering.

---

### **13. Script Gadgets**
- **13.1 JSONP callbacks**: Exploiting trusted endpoints with arbitrary JavaScript execution.
- **13.2 DOM clobbering**: Using non-standard properties to manipulate objects and inject scripts.

---

### **14. Non-JavaScript CSP Bypasses**
- **14.1 WebAssembly (Wasm)**: Allowed `wasm` modules can execute arbitrary code if improperly configured.
- **14.2 CSS Keyframes**: Injecting keyframes to trigger script execution in certain browsers.

---

### **15. Storage-Based Bypasses**
- **15.1 Service Workers**: If not blocked, service workers can intercept and serve malicious content.
- **15.2 IndexedDB/localStorage**: Manipulating stored data to inject payloads into the application.

---

### **16. Misused `script-src-elem`**
- **16.1 Element-specific bypasses**: If only `script-src-elem` is set, dynamic JavaScript APIs like `eval()` may still execute.

---

### **17. CORS Exploitation**
- **17.1 Misconfigured CORS**: Combining CORS vulnerabilities with CSP misconfigurations to load malicious scripts from trusted origins.

---

### **18. Protocol Exploitation**
- **18.1 `ftp:` and other protocols**: Including non-HTTPS protocols like `ftp:` in the policy can allow resource hijacking.
- **18.2 JavaScript URIs**: If allowed, `javascript:` URIs in `href` attributes can execute arbitrary code.

---

### **19. Cache Poisoning**
- **19.1 CDN cache poisoning**: Exploiting a misconfigured cache to inject malicious content.

---

### **20. SVG Injection**
- **20.1 Script injection in SVGs**: Malicious JavaScript embedded in SVG files can bypass CSP when loaded.

---

### **21. Redirect Chains**
- **21.1 Multi-step redirects**: Chaining multiple redirects to evade CSP checks and deliver malicious content.

---

### **22. WebSocket Exploitation**
- **22.1 Malicious WebSocket URLs**: Allowing `ws:` or `wss:` connections may expose data to an attacker-controlled WebSocket server.

---

### **23. Worker APIs**
- **23.1 Malicious Workers**: Web Workers, Shared Workers, or Service Workers can execute arbitrary scripts if improperly restricted.

---

### **24. HTML Injection**
- **24.1 `<iframe>` abuse**: Injecting `<iframe>` elements with malicious scripts in a permissive CSP environment.
- **24.2 `<base>` tag injection**: Altering the base URL to facilitate script loading.

---

### **25. Custom Protocol Handlers**
- **25.1 Malicious Protocol Handlers**: Abuse of `mailto:`, `tel:`, or other handlers allowed by CSP.

---

### **26. Insecure PostMessage**
- **26.1 Exploiting postMessage**: Injecting payloads into a web application via insecurely processed messages.

---

### **27. Form Actions**
- **27.1 Open form actions**: Forms submitting to malicious URLs can bypass CSP.

---

### **28. Trusted Types Bypass**
- **28.1 Manipulating Trusted Types**: Exploiting improper implementation of the Trusted Types API.

---

### **29. CSP Bypass Using Resource Timing**
- **29.1 Timing attacks**: Exploiting resource loading times to infer and manipulate CSP-protected content.

---

### **30. Combination Attacks**
- **30.1 CSP bypass chaining**: Combining multiple techniques, e.g., open redirects with inline script injection, to bypass CSP in multi-layered setups.

---

### **Mitigations**
1. **Strict CSP Configuration**:
   - Avoid `unsafe-inline`, `unsafe-eval`, and broad wildcards.
   - Use strict `script-src`, `style-src`, and `default-src` directives.
2. **Subresource Integrity (SRI)**:
   - Validate external resources with SRI.
3. **Regular Reviews**:
   - Periodically assess and tighten CSP policies.
4. **Testing Tools**:
   - Use tools like `CSP Evaluator` to test policies.

Proper CSP implementation must be regularly audited and combined with other security measures for robust protection.
