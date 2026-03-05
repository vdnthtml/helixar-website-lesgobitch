import subprocess
import os
import sys

def run_git_cmd(cmd):
    try:
        result = subprocess.run(cmd, shell=True, check=True, capture_output=True, text=True, cwd="/Users/vedantswami/Projects/helixar-design-os")
        return result.stdout + result.stderr
    except subprocess.CalledProcessError as e:
        return f"ERROR in {cmd}: {e.stdout} {e.stderr}"

log_path = "/Users/vedantswami/Projects/helixar-design-os/python_deploy_log.txt"

with open(log_path, "w") as f:
    f.write("--- Starting Python Deployment ---\n")
    
    # Init
    f.write("Init:\n")
    f.write(run_git_cmd("git init") + "\n")
    
    # Remote
    f.write("Remote:\n")
    f.write(run_git_cmd("git remote add origin https://github.com/vdnthtml/sex-money.git || git remote set-url origin https://github.com/vdnthtml/sex-money.git") + "\n")
    
    # Add
    f.write("Add:\n")
    f.write(run_git_cmd("git add .") + "\n")
    
    # Commit
    f.write("Commit:\n")
    f.write(run_git_cmd('git commit -m "feat: complete Helixar Design OS and landing page"') + "\n")
    
    # Branch
    f.write("Branch:\n")
    f.write(run_git_cmd("git branch -M main") + "\n")
    
    # Push
    f.write("Push:\n")
    f.write(run_git_cmd("git push -u origin main --force") + "\n")
    
    f.write("--- Deployment Finished ---")

print("Done")
