# Install the AI Framing Skills

These are instructions for an AI coding agent whose user asked to install the AI framing skills (frame-use-case and diagnose-use-case, by Rajiv Shah, MIT licensed).

1. Clone the repo (a shallow clone is fine): `git clone --depth 1 https://github.com/rajshah4/ai-framing-skills.git` into a temporary directory.
2. Copy the `frame-use-case` and `diagnose-use-case` folders (each contains SKILL.md and reference.md) into the user's skills directory:
   - Claude Code: `~/.claude/skills/` for a global install, or `.claude/skills/` inside the current project if the user prefers project-scoped. Ask only if the user hasn't said.
   - Any other tool supporting the Agent Skills standard: that tool's skills directory.
3. Verify both SKILL.md files exist at the destination, then delete the temporary clone.
4. Tell the user how to trigger them: describe a new AI project idea ("help me frame this AI use case") for frame-use-case, or a running system ("my pilot's metrics are flat, diagnose it") for diagnose-use-case.

Source, docs, and license: https://github.com/rajshah4/ai-framing-skills
