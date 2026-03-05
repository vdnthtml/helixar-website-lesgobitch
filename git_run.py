import os
os.chdir("/Users/vedantswami/Projects/helixar-design-os")
os.system("git init")
os.system("git remote add origin https://github.com/vdnthtml/sex-money.git || git remote set-url origin https://github.com/vdnthtml/sex-money.git")
os.system("git add .")
os.system("git commit -m 'feat: complete Helixar Design OS and landing page'")
os.system("git branch -M main")
os.system("git push -u origin main --force")
