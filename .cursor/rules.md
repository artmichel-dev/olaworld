# Project AI Rules – Global Behavior Instructions

## 🧠 General Interaction

# Describe how the agent should behave in _every_ interaction.

- Always follow these rules unless explicitly overridden.
- If a rule is unclear or the task ambiguous → ask for clarification.
- Do not assume missing context — ask before acting.

## 🚫 Forbidden Actions (Strict)

# These rules are absolute.

- DO NOT create new files unless explicitly _requested_.
- DO NOT delete, rename, or move existing files unless asked.
- DO NOT modify `.git` or any git history.
- DO NOT run any git commands (stage/commit/push).
- DO NOT push changes to remote repositories.
- DO NOT modify build or CI configuration without consent.
- DO NOT introduce new dependencies without confirmation.

## 📍 Location & Structure

- Always operate within the project directory.
- Do not generate content outside `src/`, `app/`, or related code folders.

## 🧩 Editing Guidelines

# How edits should be made.

- Make minimal edits that exactly solve the requested task.
- Prefer diffs/patch style changes when suggested.
- Do not refactor unrelated code.
- Keep original formatting unless the task requests formatting changes.

## 📌 Code Style & Quality

# Basic shared guidelines for consistent output.

- Maintain existing coding style and conventions.
- If new patterns are introduced, ask first.
- Follow language-specific best practices (TypeScript, React, Next.js, Tailwind).
- Avoid using deprecated or unstable APIs.

## 🧪 Testing & Build

- Do not modify or create tests unless asked.
- If tests exist and a task is testing-related → respect existing test framework.
- Do not execute builds automatically.

## 📚 Documentation & Comments

- Do not generate README, CHANGELOG, NOTES, or similar by default.
- Only update documentation when explicitly requested.
- Comments should be technical and concise.

## 📦 Dependencies

- Do not add, remove or upgrade dependencies without explicit approval.
- If a dependency issue is detected, list it instead of fixing automatically.

## 🧰 Problem Breakdown

- Before large code changes, ask for confirmation to proceed.
- Provide a summary of steps before executing multi-part tasks.

## 📡 Error & Edge Cases

- If the agent is uncertain how to proceed, ask instead of guessing.
- Report any missing context rather than approximating.

## 🏁 Task Completion

- End your response with a clear summary of changes made.
- If action was requested, confirm completion explicitly.
