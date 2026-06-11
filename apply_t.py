#!/usr/bin/env python3
"""Apply testimonial section changes to subgeo-industrial.tsx."""
import os

FILE = "src/routes/subgeo-industrial.tsx"

with open(FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1) Add useState to React imports
old_imp1 = 'import { createFileRoute, Link } from "@tanstack/react-router";'
new_imp1 = 'import { useState } from "react";\nimport { createFileRoute, Link } from "@tanstack/react-router";'
if old_imp1 in content:
    content = content.replace(old_imp1, new_imp1, 1)
    print("[OK] Added useState import")
else:
    print("[WARN] Could not add useState import")

# 2) Add testimonialReviewers const and GoogleLogo function after provinces const
with open("globals.txt", "r", encoding="utf-8") as f:
    globals_block = f.read()

old_marker = 'const provinces = [\n  "NO. PROVINCE",\n  "SOUTHWEST",\n  "REPUBLIC",\n  "MIDDLE EAST",\n];'
new_marker = old_marker + "\n\n" + globals_block
if old_marker in content:
    content = content.replace(old_marker, new_marker, 1)
    print("[OK] Added testimonialReviewers and GoogleLogo")
else:
    print("[WARN] provinces marker not found")

# 3) Add useState hooks inside SubgeoIndustrial component
old_state = "function SubgeoIndustrial() {\n  return ("
new_state = """function SubgeoIndustrial() {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const activeTestimonial = testimonialReviewers[activeTestimonialIndex];

  return ("""
if old_state in content:
    content = content.replace(old_state, new_state, 1)
    print("[OK] Added useState hooks")
else:
    print("[WARN] SubgeoIndustrial function start not found")

# 4) Replace the current testimonial section with the new one
with open("new_testimonial.txt", "r", encoding="utf-8") as f:
    new_testimonial = f.read().rstrip()

old_testimonial_start = '        <section className="relative overflow-hidden bg-[#102845] py-20">'
old_testimonial_end_marker = '        <section className="section-slab section-rule py-20">'

start_idx = content.find(old_testimonial_start)
end_idx = content.find(old_testimonial_end_marker)
if start_idx == -1 or end_idx == -1:
    print("[ERROR] Testimonial section markers not found")
    raise SystemExit(1)

content = content[:start_idx] + new_testimonial + "\n\n        " + content[end_idx:]
print("[OK] Replaced testimonial section")

with open(FILE, "w", encoding="utf-8") as f:
    f.write(content)

print(f"[OK] Done. New size: {os.path.getsize(FILE)} bytes")

# Cleanup
for f in ["globals.txt", "new_testimonial.txt", "supporting_code.txt", "apply_t.py"]:
    if os.path.exists(f):
        os.remove(f)
print("[OK] Cleaned up")
