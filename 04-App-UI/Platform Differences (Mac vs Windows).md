# Platform Differences — Mac vs Windows

## The Rule: Same Design System, Platform-Native Feel

The color system, typography, spacing, and components are identical. What changes is how the app *fits* into each OS. Users should feel like Helixar was built for their platform — not ported to it.

---

## macOS Specific

### Title Bar
```
[● ● ●]  [Helixar]                    [← →]  [Search]
↑ traffic lights                              ↑ toolbar icons
```
- Use native traffic lights (don't custom-draw them)
- Title bar region: transparent, draggable
- `draggable: app-region drag` on title bar
- Controls (if any) in the right of the title bar

### Window Chrome
- Rounded corners on the window (macOS handles this natively)
- Vibrancy/blur effects available — use for sidebar: `NSVisualEffectView` with `.sidebar` material
- Sidebar can be slightly translucent with blur showing desktop behind it (very subtle)

### Typography
- System font available: SF Pro (use it for UI labels if Geist isn't loaded yet — reduces FOUT)
- Default text rendering is sharper on Retina — design at 2x

### Scrollbars
- macOS hides scrollbars by default (only shows on scroll)
- Never add custom scrollbar styles on Mac — use native

### Keyboard Shortcuts
- Use Cmd (⌘) not Ctrl
- Add shortcuts to right-click context menus
- Support standard Mac shortcuts: Cmd+C/V/X/Z/A everywhere appropriate

### Dock Integration
- Badge count for pending approvals
- Show/hide via Dock icon

---

## Windows Specific

### Title Bar
```
[Helixar icon]  [Helixar]         [—] [□] [✕]
↑ app icon                         ↑ native window controls
```
- Windows 11: use native title bar controls (don't custom-draw)
- On Windows 10: custom title bar with matching dark background `#080808`
- Window controls (minimize, maximize, close) stay in top-right

### Window Chrome
- Windows 11: Mica effect available (shows subtle tinted blur from desktop wallpaper) — opt-in, elegant
- Sharp corners on Windows 10, slightly rounded on Windows 11
- No traffic lights

### Typography
- System font: Segoe UI Variable (Windows 11) / Segoe UI (Windows 10)
- Geist loads fine — just ensure the font is bundled in the app
- Slightly heavier font rendering on Windows — may need to adjust font-weight by 100

### Scrollbars
- Windows shows scrollbars by default
- Style them to match the app:
```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border-medium); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--border-strong); }
```

### Keyboard Shortcuts
- Use Ctrl not Cmd
- Windows users expect: Ctrl+C/V/X/Z/A — make sure these all work natively

### Taskbar Integration
- Progress bar on Taskbar icon for active research jobs (Windows supports this natively)
- Notification badge for pending approvals

---

## Shared: What Stays Identical

| Element | Same on both |
|---|---|
| Color system | Identical |
| Typography scale | Identical (Geist font bundled) |
| Spacing/grid | Identical |
| All component styles | Identical |
| Animation timing | Identical |
| Content and copy | Identical |

---

## Testing Checklist
- [ ] App looks correct at 100% scaling (Windows) and 1x/2x (Mac)
- [ ] Title bar drag region works on both
- [ ] All keyboard shortcuts use correct modifier key per platform
- [ ] Scrollbars styled (Windows) or hidden correctly (Mac)
- [ ] App doesn't crash when switching between light/dark OS theme
- [ ] Font rendering looks good on both — no overly thin text on Windows
