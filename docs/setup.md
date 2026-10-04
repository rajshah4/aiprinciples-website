---
title: "Install the AI Framing Skills"
description: "Install the free AI framing and diagnosis skills in Claude Code or another coding agent, or use them in an AI chat. Includes setup instructions."
---

# Install the framing skills

Everything here is free and MIT licensed. Source: [github.com/rajshah4/ai-framing-skills](https://github.com/rajshah4/ai-framing-skills). What the skills are and why they argue with you: [the skills page](/skills).

**The fast way, with Claude Code or any coding agent.** Tell your agent:

> Install the skills from https://aiframer.dev/setup.md

That URL is a plain instruction file the agent reads and follows. Done in one message.

**By hand:**

```bash
git clone https://github.com/rajshah4/ai-framing-skills.git
cp -r ai-framing-skills/frame-use-case ai-framing-skills/diagnose-use-case ~/.claude/skills/
```

**Cursor, Copilot, Gemini CLI, OpenHands, or any tool supporting the [Agent Skills](https://agentskills.io) standard:** copy the two skill folders into that tool's skills directory. Nothing in them is Claude-specific.

**No agent tool:** paste the contents of `frame-use-case/SKILL.md` into any AI chat and describe your project. It runs fine as a plain prompt.

Once installed, describe your project: "help me frame this AI use case" for something you haven't built yet, or "my pilot's metrics are flat, diagnose it" for a system that's already running.
