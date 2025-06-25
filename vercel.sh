#!/bin/bash

# List of file patterns that should trigger a build
TRIGGER_PATHS="^src/|^public/|^package\\.json|^tailwind\\.config\\.js|^vite\\.config\\.js"

# Show the commit range Vercel detected
echo "Checking changes between $VERCEL_GIT_PREVIOUS_SHA and $VERCEL_GIT_COMMIT_SHA..."

# Get the list of changed files
CHANGED_FILES=$(git diff --name-only "$VERCEL_GIT_PREVIOUS_SHA" "$VERCEL_GIT_COMMIT_SHA")

echo "Changed files:"
echo "$CHANGED_FILES"

# Check if any changed file matches trigger paths
if echo "$CHANGED_FILES" | grep -qE "$TRIGGER_PATHS"; then
  echo "Relevant changes detected. Proceeding with build..."
  echo "build"  # non-empty output triggers build
else
  echo "No relevant changes. Skipping build."
  exit 0  # empty output = Vercel skips build
fi
