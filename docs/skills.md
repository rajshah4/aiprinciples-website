# The Framing Skills

I turned the core of the course into two free AI skills. Install them in your coding agent, or paste them into any AI chat, and they run my framing method on your actual project.

**frame-use-case** interviews you about an AI system you're considering. It walks you through the AI Framing Worksheet, eight questions in three sections, at most three questions per turn, and produces the completed worksheet: your metric with the rejected candidate named, your operating assumptions with one-day tests, and a pre-committed stop criterion for your kickoff meeting.

**diagnose-use-case** works on a system that's already running and struggling. It walks the three diagnostic questions (is there signal, is there cheating, is the metric real), makes you pull fifty real failures instead of arguing from the dashboard, and ends with a call: persist, pivot, or stop, written up as a memo your sponsor could forward unedited.

## These skills argue with you

Ask a chatbot to help frame your AI project and it will polish your bad frame until it looks fundable. That's how language models are built. These skills are instructed to do the opposite.

They won't accept your first answer. They'll tell you when a keyword router covers 78% of your problem and the AI project you wanted may not need to exist. The diagnosis skill is explicitly permitted to recommend killing the project, which is the one thing your LLM will never do on its own. It's not built to. If you want an AI that agrees with you, you already have one.

## What they can't do

I want to be straight about the limits, because they're structural, not bugs. The skills have no ground truth: they can't tell you what happened to the last twelve companies that tried your architecture. They can't calibrate your numbers: a 75% resolution target might be ambitious or sandbagged, and no model knows which. They don't sit in your org, where the politics that actually kill projects live. And they will still agree with you more than a skeptical human would.

That's the part the [course](https://maven.com/rajistics/ai-problem-framing) covers: 250+ verified case studies with real outcomes, live review of your project, and practice making these calls with feedback. The skills are the method. The judgment is the work.

## Get the skills

Both skills live on GitHub, MIT licensed, no email wall: [github.com/rajshah4/ai-framing-skills](https://github.com/rajshah4/ai-framing-skills). Each ships with its full ML and GenAI reference material.

Using Claude Code or another coding agent? Tell it: "install the skills from https://aiframer.dev/setup.md" and it sets you up. Or do it by hand:

```bash
git clone https://github.com/rajshah4/ai-framing-skills.git
cp -r ai-framing-skills/frame-use-case ai-framing-skills/diagnose-use-case ~/.claude/skills/
```

The folders follow the [Agent Skills](https://agentskills.io) standard, so the same copy works in Cursor, Copilot, Gemini CLI, OpenHands, and any other tool that supports it. No agent tool at all? Paste `frame-use-case/SKILL.md` into any AI chat.

Then describe your project: "help me frame this AI use case" or "my system's metrics are flat, diagnose it." The skill takes it from there.

## When to use which

Use **frame-use-case** before you build: a new idea, a stakeholder ask, a scope fight. Use **diagnose-use-case** after: a stalled pilot, flat metrics, a system users won't adopt. If the frame comes out clean, build, then come back and diagnose against the stop criterion you pre-committed. The two skills hand off to each other on purpose.
